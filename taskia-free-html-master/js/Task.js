class Task {
    constructor() {
        this.tasks = this.getTasks();
    }

    getTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    saveTask(taskData) {
        if (!taskData.taskName || !taskData.taskPriority) {
            return { success: false, message: 'Data tidak lengkap' };
        }

        const newTaskData = {
            id: Date.now(),
            isCompleted: false,
            ...taskData,
        };

        this.tasks.push(newTaskData);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        return { success: true };
    }
}
