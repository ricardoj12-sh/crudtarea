const express = require('express');
const bodyParser = require('body-parser');
const TaskService = require('./domain/TaskService');
const TaskController = require('./application/TaskController');
const InMemoryTaskRepository = require('./infraestructure/InMemoryTaskRepository')

const app = express();
app.use(bodyParser.json());

const taskRepository = new InMemoryTaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

// Rutas
app.post('/tasks', (req, res) => taskController.createTask(req, res));
app.put('/tasks/:id', (req, res) => taskController.updateTask(req, res));
app.delete('/tasks/:id', (req, res) => taskController.deleteTask(req, res));
app.get('/tasks/:id', (req, res) => taskController.getTaskById(req, res));
app.get('/tasks', (req, res) => taskController.getAllTasks(req, res));

// Puerto del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Task Manager API running on port ${PORT}`);
});
