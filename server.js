const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOption = {
    origin: "*"
};


//connect to database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log(`connection failed ${err.message}`);
        process.exit(1);
    });

//register cors middleware

app.use(cors(corsOption));
app.use(express.json());

//routes
require("./app/routes/car.route")(app);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

