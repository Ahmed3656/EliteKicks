let email = document.querySelector("#email")
let password = document.querySelector("#password")

let userEmail = localStorage.getItem("email")
let userPass = localStorage.getItem("password")

let login_btn = document.querySelector("#log_in")

login_btn.addEventListener("click", (e) => {
    e.preventDefault()
    if(email.value === "" || password.value === ""){
        alert("Please fill-in data")
    }else {
        if(email.value.trim() === userEmail.trim() && password.value.trim() === userPass.trim()){
            window.location = "index.html"
        }
        else alert("Incorrect email or password")
    }
})