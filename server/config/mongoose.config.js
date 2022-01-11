const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/author ",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(()=> console.log("CONNECTED TO AUTHOR DB"))
.catch(err => console.log("ERROR: ", err))