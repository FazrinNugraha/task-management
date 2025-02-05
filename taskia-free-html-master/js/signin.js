document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;

        // Memanggil metode signInUsername untuk memverifikasi apakah username ada
        const result = userManager.signInUsername(usernameByInput);

        if (result.success) {
            // Simpan username yang sudah login di localStorage
            localStorage.setItem('usernameLooggedin', usernameByInput);
            window.location.href = './tasks.html';  // Arahkan ke halaman tugas
        } else {
            alert(result.message || 'Username tidak ditemukan');
            console.log(result.message);
        }
    });
});
