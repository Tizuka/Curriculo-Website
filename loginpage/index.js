let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
eyeicon.onclick = function(){
  if(password.type=="password"){
    password.type = "text";
    eyeicon.src = "imagens/eye.png"
  }else{
    password.type = "password";
    eyeicon.src = "imagens/hide.png"
   }
}




// FUNCTION VALIDATE

function validatesarah() {
  var username = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  if (username == "bob" && password == "esponja") {
    alert("login succesfully");
    window.open("teste.html");
  } else {
    alert("login failed");
    window.location.reload();
  
    // select input onclick using dom and change the value to RELOAD
  }
}
