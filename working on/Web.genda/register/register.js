/*function validateForm() {
    var user = document.login.username.value;
    var user = user.trim()
    var pass = document.login.password.value;

    if (user == 'user' && pass == 'pass') {
        window.location.href = "agenda.html";
        return false;
    } else {
        return false;
    }
}*/
function studentLogin() {
    var username = document.getElementById('usernameLoginInput');
    var email = document.getElementById('emailLoginInput');
    var password = document.getElementById('passwordLoginInput');
    var schCode = document.getElementById('schoolCodeLoginInput');
    var grpCode = document.getElementById('groupCodeLoginInput');
    username.style.display = 'block'
    schCode.style.display = 'none'
    grpCode.style.display = 'none'
}

studentLogin()