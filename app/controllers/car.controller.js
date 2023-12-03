const db = require("../models");
const Car = db.car;

exports.create = (req, res) => {

    req.body.buy_date = new Date(req.body.buy_date)

    Car.create(req.body)
        .then(() => res.send({ message: "Data added successfully" }))
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.findAll = (req, res) => {
    res.send({ message: "it works" });
}

exports.show = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}