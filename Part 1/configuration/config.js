const mongoose = require("mongoose")

const dbConnection = () =>
    mongoose.connect("mongodb://localhost:27017/socialApp")
        .then((result) => {
            console.log("Mongodb Connected");
        }).catch((err) => {
            console.log(err);
        })

module.exports = dbConnection;



