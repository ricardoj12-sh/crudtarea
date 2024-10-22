const TaskRepository = require('../domain/TaskRepository');

class InMemoryTaskRepository extends TaskRepository {
  constructor() {
    super();
    this.tasks = [];
  }

  createTask(task) {
    this.tasks.push(task);
    return task;
  }

  updateTask(updatedTask) {
    this.tasks = this.tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  getTaskById(taskId) {
    return this.tasks.find(task => task.id === taskId);
  }

  getAllTasks() {
    return this.tasks;
  }
}

module.exports = InMemoryTaskRepository;
