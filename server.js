const express = require('express');
const app = express() ;
const dotenv = require('dotenv')
dotenv.config() ;

app.use(express.json()) ;
const port =process.env.PORT ;


// connecting to Data base
const connectDB = require('./helpers/connectDB');
connectDB(); 

// ! routes
app.use('/api/user', require('./Routes/userRoutes'));


app.listen(port , (err)=>err? console.log(err):console.log(`server is running on port ${port}`));



