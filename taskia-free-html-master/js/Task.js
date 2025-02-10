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
        this.updateLocalStorage();

        return { success: true };
    }

    completedTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);

        if (index !== -1) {
            this.tasks[index].isCompleted = true;
            this.updateLocalStorage();
        } else {
            console.log('Tugas tidak ditemukan');
        }
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
