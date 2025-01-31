class User {
    constructor() {
        this.users = this.getUsers(); // getUsers() akan menangani fallback
    }

    saveUser(UserData) {
        const newUser = {
            id: Date.now(),
            ...UserData,
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // Redirect ke halaman sign-in setelah menyimpan user
        window.location.href = './signin.html';
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }
}
