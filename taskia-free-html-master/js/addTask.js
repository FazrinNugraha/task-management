document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value.trim();
        const taskPriority = document.getElementById('taskPriority').value.trim();

        if (!taskName || !taskPriority) {
            alert('Mohon isi semua kolom!');
            return;
        }

        const userData = {
            taskName,
            taskPriority,
        };

        // Menyimpan tugas dengan metode saveTask
        const result = taskManager.saveTask(userData);

        if (result.success) {
            alert('Berhasil tersimpan');
            // window.location.href = './tasks.html';  // Arahkan ke halaman tugas jika diperlukan
        } else {
            console.log('Proses simpan gagal');
        }
    });
});
