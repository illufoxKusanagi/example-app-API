const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOption = {
    origin: "*"
};


//connect to database
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log(`connection failed`, err);
        process.exit(1);
    });

//register cors middleware
app.use(cors(corsOption));
app.use(express.json());

require("./app/routes/car.route")(app);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});

