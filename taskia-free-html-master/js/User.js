class User {
    constructor() {
        this.users = this.getUsers(); 
    }

    saveUser(UserData) {
        const newUser = {
            id: Date.now(),  // Menggunakan ID berdasarkan waktu untuk unik
            ...UserData,
        };

        // Menambahkan pengguna baru ke array users
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));  // Menyimpan array ke localStorage

        return {
            success: true,
        };
    }

    signInUsername(usernameByInput) {
        const userExist = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

        if (userExist) {
            return {
                success: true,
                username: usernameByInput,
            };
        } else {
            return {
                success: false,
                message: 'Data tidak ditemukan',
            };
        }
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];  // Mengambil data pengguna dari localStorage
    }
}
