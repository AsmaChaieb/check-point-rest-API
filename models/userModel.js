const mongoose=require('mongoose') ;

const userSchema = mongoose.Schema({
    name : {
        type : String , 
        require :true } ,
    age : {
        type : Number , 
        require :true } ,

    email: {
        type : String , 
        require :true ,
        unique:true ,
        match :/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          } ,
    passeword : {
        type : String , 
        require :true } 
})
module.exports = mongoose.model('user',userSchema) ;