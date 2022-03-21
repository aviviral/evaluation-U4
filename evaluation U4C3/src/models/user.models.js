const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect
}

const app = mongoose.connect()

const userSchema = new mongoose.Schema({
    firstName : {type:String,required:true},
    LastName:{type:string,required:false},
    age:{type:Number,required:true},
    email:{type:string,required:true},

},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("user",userSchema);