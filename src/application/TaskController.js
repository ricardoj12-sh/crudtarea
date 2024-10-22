class TaskController {
    constructor(taskService) {
      this.taskService = taskService;
    }
  
    createTask(req, res) {
      const { title, description } = req.body;
      const task = this.taskService.createTask(title, description);
      res.status(201).json(task);
    }
  
    updateTask(req, res) {
      const task = req.body;
      this.taskService.updateTask(task);
      res.status(200).json({ message: 'Task updated' });
    }
  
    deleteTask(req, res) {
      const { id } = req.params;
      this.taskService.deleteTask(id);
      res.status(200).json({ message: 'Task deleted' });
    }
  
    getTaskById(req, res) {
      const { id } = req.params;
      const task = this.taskService.getTaskById(id);
      res.status(200).json(task);
    }
  
    getAllTasks(req, res) {
      const tasks = this.taskService.getAllTasks();
      res.status(200).json(tasks);
    }
  }
  
  module.exports = TaskController;
  