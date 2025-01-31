document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm'); // Perbaiki ID
    const userManager = new User();

    if (userForm) {
        userForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const userData = {
                username: document.getElementById('username').value,
            };

            userManager.saveUser(userData);
        });
        
    } else {
        console.error("Form dengan ID 'userForm' tidak ditemukan");
    }

});
