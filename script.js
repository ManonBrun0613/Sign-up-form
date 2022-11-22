let error= document.querySelector('.error-msg');

function confirmPwd() {

    let pwd=document.getElementById("pwd").value;
    let pwdContainer=document.getElementById("pwd")
    let pwdCheck=document.getElementById("confirm-pwd").value;
    let pwdCheckContainer=document.getElementById("confirm-pwd")
    
    console.log(error.textContent, pwd, pwdCheck)

    if (pwd==pwdCheck) {
        console.log(pwdContainer.classList)
        console.log(pwdCheckContainer.classList)
        pwdContainer.classList.remove("error");
        pwdCheckContainer.classList.remove("error");
        error.textContent="";
    } else {
        console.log(pwdContainer.classList)
        console.log(pwdCheckContainer.classList)
        
        pwdContainer.classList.add("error");
        pwdCheckContainer.classList.add("error");
        error.textContent="*Passwords do not match";
    }
}

passwordOne=document.getElementById("pwd");
passwordTwo=document.getElementById("confirm-pwd");

passwordOne.addEventListener("change",confirmPwd);
passwordTwo.addEventListener("change",confirmPwd);
