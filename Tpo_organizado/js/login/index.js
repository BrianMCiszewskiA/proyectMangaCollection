const usuarios = [new Usuario("test", "test@test.com", "asd")];


function createNewUser(){
    
    if(isValid()){
        checkUserAndCreateUser();
    }
}

function isValid(){
    let nombre = document.getElementById("newUserName").value;
    let email = document.getElementById("newEmail").value;
    let pass = document.getElementById("newPassword").value;
    let pass2 = document.getElementById("newPasswordConfirm").value;
    return  nombre!=""  &&
            email!=""   &&
            pass!=""    &&
            pass==pass2;
}
function checkUserAndCreateUser(){
    let nombre = document.getElementById("newUserName").value;
    let email = document.getElementById("newEmail").value;
    let pass = document.getElementById("newPassword").value;
    if(userAlreadyExist(email)){
        alert("El mail ya esta registrado");
    }else{
        usuarios.push(new Usuario(nombre, email, pass));
        popUpNewUser();
        console.log(email);
    }
}

function popUpNewUser(){
    document.getElementById("popUpNewUser").setAttribute("class", "popUp");
}

function userAlreadyExist(userMail){
    return mailList().includes(userMail);
}
function mailList(){
    return usuarios.map(function(x) { return x.mail})
}

//"login"
function checkUser(){
    let mail= document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(userAlreadyExist(mail)&&isPassOf(pass, mail)){
        window.open("main.html", "_self"); //pendiente reacomodar y modificar esta ruta.
    } else {
        alert("usuario o contraseña incorrectos"); //despues armar otro pop up.
    }
}

function isPassOf(password, email){
    //el mail dado tiene que ser uno valido
    return usuarioDeEmail(email).pass == password;
}

function usuarioDeEmail(email){
    //el email tiene que ser uno valido dentro del sistema.
    return usuarios.find(function(e){return e.mail==email});
}