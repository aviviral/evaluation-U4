const mongoose = require("mongoose");

module.exports = () =>{
    return mongoose.connect("mongodb+srv://aviviral:aviviral@cluster0.cbdyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

