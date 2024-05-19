document.addEventListener("DOMContentLoaded", () => {
const password = document.getElementById("pwd");
const confirm = document.getElementById("confpwd");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => { 
if(password.value === confirm.value) {
    alert("You signed up! Congrats!");
}
else{
    document.getElementById("pwdwrong").textContent = "The passwords don't match!";

}})});