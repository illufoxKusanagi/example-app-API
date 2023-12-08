module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            car_brand: String,
            car_model: String,
            car_price: String,
            year_produced: String,
            buy_date: Date
        }, {
        timestamps: true
    });

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id;

        return object;
    });

    return mongoose.model("car", schema);
}

