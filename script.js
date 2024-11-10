
window.onload = function() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (window.location.pathname === '/index.html' && username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('logout-btn').addEventListener('click', logout);
    }

    else if (window.location.pathname === '/login.html' && username) {
        window.location.href = '/index.html';
    }

};


const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

       
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);

        alert('Tirkelu satti otti!');
        window.location.href = '/login.html';  
    });
}


const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Kiru satti otti!');
            window.location.href = '/index.html'; 
        } else {
            alert('Kupiya soz nemese  nemese Paıdalanýshy aty qate!');
        }
    });
}

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = '/index.html';  
}
