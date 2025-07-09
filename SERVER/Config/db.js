const mongoose = require('mongoose');

const connectMongoDB = async () => {
    return mongoose
    .connect('mongodb://localhost:27017/addresBook')
    .then(()=> console.log("Mongodb connected!!"))
    .catch((err) => console.log(err))
}   


module.exports = connectMongoDB;