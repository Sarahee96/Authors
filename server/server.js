//1. IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000


//1.5 CONFIGURE MONGOOSE
// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");


//2. CONFIGURE EXPRESS
app.use(cors())
app.use(express.json(), 
express.urlencoded({ extended: true }));


//3. ATTACH ROLES TO EXPRESS SERVER
// This is where we import the authors routes function from our author.routes.js file
const AllMyAuthorRoutes = require("./routes/author.routes");
AllMyAuthorRoutes(app);

//4. RUN EXPRESS SERVER
app.listen(port, () => console.log("The server is all fired up on port 8000"));
