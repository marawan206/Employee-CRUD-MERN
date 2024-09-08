if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');
async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB successfully.")
    } catch (error) {
        console.log(err);
    }

}

module.exports = connectToDB;