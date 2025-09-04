let password=document.getElementById("password");
let checkbox=document.getElementById("checkbox");
function check(){
    if(password.type=="password"){
        password.type="text"
        checkbox.textContent="*"
    }else{
        password.type="password";
        checkbox.textContent="*"
    }
}