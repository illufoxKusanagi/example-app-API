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

// app.get("/", (req, res) => {
//     res.json({ message: "Hello" });
// });