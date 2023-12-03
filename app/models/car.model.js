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
    }
    );
    return mongoose.model("car", schema);
}

