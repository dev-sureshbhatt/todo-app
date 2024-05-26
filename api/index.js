import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


const app = express()

app.listen(4000, () => {
    console.log("App listening at PORT: ", 4000);
  });


//Mongoose Connection

mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log("mongoose connected");
})
.catch((err) => {
  console.log(err, "something went wrong connecting MONGOOSE");
});


