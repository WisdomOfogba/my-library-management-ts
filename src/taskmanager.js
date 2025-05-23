var Task = /** @class */ (function () {
    function Task(title, description) {
        this.id = Task.nextId++;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
    Task.prototype.markComplete = function () {
        this.completed = true;
    };
    Task.prototype.update = function (title, description) {
        this.title = title;
        this.description = description;
    };
    Task.prototype.display = function () {
        console.log("ID: ".concat(this.id));
        console.log("Title: ".concat(this.title));
        console.log("Description: ".concat(this.description));
        console.log("Completed: ".concat(this.completed ? "Yes" : "No"));
        console.log("-----------");
    };
    Task.nextId = 1;
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.createTask = function (title, description) {
        var task = new Task(title, description);
        this.tasks.push(task);
        console.log("Task created successfully!\n");
    };
    TaskManager.prototype.updateTask = function (id, title, description) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.update(title, description);
            console.log("Task updated successfully!\n");
        }
        else {
            console.log("Task not found.\n");
        }
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.markComplete();
            console.log("Task marked as complete!\n");
        }
        else {
            console.log("Task not found.\n");
        }
    };
    TaskManager.prototype.listTasks = function () {
        if (this.tasks.length === 0) {
            console.log("No tasks available.\n");
            return;
        }
        console.log("All Tasks:");
        this.tasks.forEach(function (task) { return task.display(); });
    };
    return TaskManager;
}());
// Example usage (like a mini test)
var manager = new TaskManager();
manager.createTask("Study TypeScript", "Learn classes and objects");
manager.createTask("Do Assignment", "Complete the task manager assignment");
manager.listTasks();
manager.updateTask(1, "Study TypeScript Deeply", "Cover interfaces too");
manager.completeTask(2);
manager.listTasks();
