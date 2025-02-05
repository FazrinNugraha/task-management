document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;

        // Menambahkan user dengan memanggil metode saveUser
        const result = userManager.saveUser({ username: usernameByInput });

        if (result.success) {
            alert('User berhasil ditambahkan!');
            window.location.href = './tasks.html';  // Arahkan ke halaman tugas
        } else {
            alert(result.message || 'Proses signup gagal');
            console.log(result.message);
        }
    });
});
