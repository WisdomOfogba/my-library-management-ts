class Task {
  static nextId = 1;
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(title: string, description: string) {
    this.id = Task.nextId++;
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  markComplete(): void {
    this.completed = true;
  }

  update(title: string, description: string): void {
    this.title = title;
    this.description = description;
  }

  display(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Completed: ${this.completed ? "Yes" : "No"}`);
    console.log("-----------");
  }
}

class TaskManager {
  private tasks: Task[] = [];

  createTask(title: string, description: string): void {
    const task = new Task(title, description);
    this.tasks.push(task);
    console.log("Task created successfully!\n");
  }

  updateTask(id: number, title: string, description: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.update(title, description);
      console.log("Task updated successfully!\n");
    } else {
      console.log("Task not found.\n");
    }
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.markComplete();
      console.log("Task marked as complete!\n");
    } else {
      console.log("Task not found.\n");
    }
  }

  listTasks(): void {
    if (this.tasks.length === 0) {
      console.log("No tasks available.\n");
      return;
    }
    console.log("All Tasks:");
    this.tasks.forEach(task => task.display());
  }
}

// Example usage (like a mini test)
const manager = new TaskManager();

manager.createTask("Study TypeScript", "Learn classes and objects");
manager.createTask("Do Assignment", "Complete the task manager assignment");

manager.listTasks();

manager.updateTask(1, "Study TypeScript Deeply", "Cover interfaces too");
manager.completeTask(2);

manager.listTasks();
