import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import Task from './models/taskModel.js'


//Initializing express server
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.listen(4000, () => {
    console.log("App listening at PORT: ", 4000);
  });


//Initializing Mongoose Connection

mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log("mongoose connected");
})
.catch((err) => {
  console.log(err, "something went wrong connecting MONGOOSE");
});


//Initializing Endpoints

app.get('/', (req, res)=>{
    console.log("Hello")
    res.send("Hi")
})


//Endpoint to create new task
app.post('/tasks', async (req, res) => {
    console.log("incoming request")
    
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
    });
  
    try {
      const newTask = await task.save();
      res.status(201).json(newTask);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
