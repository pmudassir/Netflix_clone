const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")

const app = express()
dotenv.config()

mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Successful")
    }).catch((err) => {
        console.log(err);
    });

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)

app.listen(8800, () => {
    console.log("Server running on port 8800");
})