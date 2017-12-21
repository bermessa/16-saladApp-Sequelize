var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    db.Salad.findAll({}).then(function(data) {
        var hbsObject = {
            salad: data
        };
        res.render("index", hbsObject); //could also be { salad: data }
    });
});

router.post("/", function(req, res) {
    db.Salad.create({
        topping: req.body.newTopping
    }).then(function(data) {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    db.Salad.update({ devoured: true }, {
        where: { id: req.params.id }
    }).then(function(data) {
        res.status(200).end();
    });
});

module.exports = router;
