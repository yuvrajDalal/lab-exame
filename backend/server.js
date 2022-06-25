const express = require("express")

const app = express()

const cors = require("cors")
const routerCar = require("./routes/car")

app.use(express.json());
app.use("/car",routerCar);

app.listen(6600,'0.0.0.0',()=>{
    console.log("server started on port 6600")
});