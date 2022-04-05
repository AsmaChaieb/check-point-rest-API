const mongoose = require('mongoose')

const connectDB = () => { 
mongoose.connect(process.env.MONGO_URL,(err)=> err? console.log(err):console.log(`DataBase is connected`) )

 }

module.exports=connectDB ;