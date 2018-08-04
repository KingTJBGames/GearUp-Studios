function validateForm() {
    var user = document.login.username.value;
    var user = user.trim()
    var pass = document.login.password.value;

    if (user == 'user' && pass == 'pass') {
        window.location.href = "agenda.html";
        return false;
    } else {
        return false;
    }
}
function modeClick(id) {
    var registerType = 0;
    var loginType = 1;
    var studentMode = 0;
    var parentMode = 1;
    var teacherMode = 2;
    var schoolMode = 3;
    var groupMode = 4;
    var logMode = studentMode;
    var logType = registerType;
    var a = document.getElementById(id).value;
    var b = document.getElementsByClassName('registerSelect')
    var user = document.getElementById('usernameLoginInput');
    var pass = document.getElementById('passwordLoginInput');
    var schCode = document.getElementById('schoolCodeLoginInput');
    var grpCode = document.getElementById('groupCodeLoginInput');
    var logMode = a;
    console.log(logMode);
}
modeClick('acselParent');