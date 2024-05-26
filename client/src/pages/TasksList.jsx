import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:4000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the task!', error);
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <Link to="/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        Create New Task
      </Link>
      <div className="overflow-x-auto">
        <div className="min-w-full bg-white border">
          <div className="flex">
            <div className="py-2 px-4 border-b border-r w-1/4">Title</div>
            <div className="py-2 px-4 border-b border-r w-1/4">Status</div>
            <div className="py-2 px-4 border-b border-r w-1/4">Due Date</div>
            <div className="py-2 px-4 border-b w-1/4">Actions</div>
          </div>
          {tasks.map(task => (
            <div key={task._id} className="flex flex-col md:flex-row border-b">
              <div className="py-2 px-4 border-b border-r md:border-none md:border-b md:w-1/4 flex md:block">
                <span className="block md:hidden font-bold">Title:</span>
                {task.title}
              </div>
              <div className="py-2 px-4 border-b border-r md:border-none md:border-b md:w-1/4 flex md:block">
                <span className="block md:hidden font-bold">Status:</span>
                {task.status}
              </div>
              <div className="py-2 px-4 border-b border-r md:border-none md:border-b md:w-1/4 flex md:block">
                <span className="block md:hidden font-bold">Due Date:</span>
                {new Date(task.dueDate).toLocaleDateString()}
              </div>
              <div className="py-2 px-4 border-b md:border-none md:w-1/4 flex md:block">
                <span className="block md:hidden font-bold">Actions:</span>
                <Link to={`/edit/${task._id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Edit
                </Link>
                <button onClick={() => deleteTask(task._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
