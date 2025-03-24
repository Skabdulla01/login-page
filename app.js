const username = prompt("enter new username");
const password = prompt("enter new password");
function login(){
    let text = document.getElementById("text").value;
    let pass = document.getElementById("password").value;
    if (text===username && pass===password){
        confirm("login successfull");
        window.location="login.html"
    }
    else{
        alert("Incorrect username or password");
    }
}