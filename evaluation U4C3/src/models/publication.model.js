const mongoose = require("mongoose")

const pubSchema = new mongoose.Schema({
    name:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

const publication = mongoose.model("pub",pubSchema)

module.exports=publication;