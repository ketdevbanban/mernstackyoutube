const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Connect DB Success");
    } catch (error) {
       console.log(error);
       process.exit(1); 
    }
}
module.exports = connectDB;