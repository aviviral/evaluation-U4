const mongoose = require("mongoose")

const connect =()=>{
    return mongoose.connect("mongodb+srv://aviviral:aviviral@cluster0.cbdyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports=connect;