const db = require("../models");
const Car = db.car;

module.exports = app => {
    const car = require("../controllers/car.controller")
    const routes = require("express").Router();

    routes.get("/", car.findAll);
    routes.get("/:id", car.show);
    routes.post("/", car.create);
    routes.put("/:id", car.update);
    routes.delete("/:id", car.delete);

    app.use("/car", routes)
}
exports.findAll = (req, res) => {
    Car.find()
        .then(data => res.json(data)) // Menggunakan res.json() untuk mengirim data
        .catch(err => res.status(500).send({ message: err.message }));
}
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