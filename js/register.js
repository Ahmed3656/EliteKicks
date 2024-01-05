let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")

let email = document.querySelector("#email")
let password = document.querySelector("#password")

let reg_btn = document.querySelector("#sign_up")

reg_btn.addEventListener("click", function(e){
    e.preventDefault()
    if(fname.value === "" || lname.value === "" || email.value === "" || password.value === "")
    {
        alert("Please fill-in data")
    }
    else
    {
        localStorage.setItem("fname", fname.value)
        localStorage.setItem("lname", lname.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout(()=>{
            window.location = "login.html"
        }, 1500)
    }
})