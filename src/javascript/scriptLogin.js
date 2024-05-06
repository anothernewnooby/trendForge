const { addListener } = require("gulp");

function login() {
    
    window.location.href = "home.html";
}

function logout() {
    window.location.href = "index.html";
}


// ! agregar logica de login
// ! agregar msj de error en caso de errar user o password