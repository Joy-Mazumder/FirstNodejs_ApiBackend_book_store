const mongoose = require("mongoose");
require('dotenv').config();

const connectToDB = async () => {
    try {
        //  database connection
        await mongoose.connect(process.env.mydb)
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
}

module.exports = connectToDB;