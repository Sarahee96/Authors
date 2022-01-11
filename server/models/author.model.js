//IMPORT MONGOOSE
const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true, "First Name Required"]
    },
    lastName:{
        type:String,
        required:[true, "Last Name Required"]
    }
}, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author