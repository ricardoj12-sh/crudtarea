const Task = require('./Task');

class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  createTask(title, description) {
    const newTask = new Task(Date.now(), title, description);
    return this.taskRepository.createTask(newTask);
  }

  updateTask(task) {
    return this.taskRepository.updateTask(task);
  }

  deleteTask(taskId) {
    return this.taskRepository.deleteTask(taskId);
  }

  getTaskById(taskId) {
    return this.taskRepository.getTaskById(taskId);
  }

  getAllTasks() {
    return this.taskRepository.getAllTasks();
  }
}

module.exports = TaskService;
