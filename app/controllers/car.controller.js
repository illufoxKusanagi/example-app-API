const db = require("../models");
const Car = db.car;
exports.create = (req, res) => {

    req.body.buy_date = new Date(req.body.buy_date)

    Car.create(req.body)
        .then(() => res.send({ message: "Data added successfully" }))
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.findAll = (req, res) => {
    Car.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }))
}

exports.show = (req, res) => {
    const id = req.params.id;

    Car.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.update = (req, res) => {
    const id = req.params.id;

    req.body.buy_date = new Date(req.body.buy_date);

    Car.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot update data" })
            }
            res.send({ message: "Data updated successfully" })
        })
        .catch(err => res.status(500).send({ message: err.message }))
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Car.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot delete data" })
            }
            res.send({ message: "Data deleted successfully" })
        })
        .catch(err => res.status(500).send({ message: err.message }))
}