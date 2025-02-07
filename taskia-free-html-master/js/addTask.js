document.addEventListener('DOMContentLoaded', () => {
    // Mengambil tanggal saat ini dalam format yyyy-mm-dd
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

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
            createAt: formattedDate,
        };

        console.log("Data yang akan disimpan:", userData);

        const result = taskManager.saveTask(userData);

        if (result.success) {
            alert('Berhasil tersimpan');
        } else {
            console.log('Proses simpan gagal');
        }
    });
});