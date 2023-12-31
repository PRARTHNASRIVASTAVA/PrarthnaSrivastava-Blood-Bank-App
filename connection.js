const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
  try {
    await 
    mongoose.connect(process.env.MONGO_URL);
    console.log(`Database Connected ${mongoose.connection.host}`.bgMagenta);
  } catch (error){
    console.log(`Database Error ${error}`.bgRed.white);
  }
};
module.exports = connectDB;