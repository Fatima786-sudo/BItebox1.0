function login() 
{
    event.preventDefault(); 
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    console.log(email);
    console.log(password);
    let error=document.getElementById("error");
    if (email==="admin@gmail.com" && password==="1234")
    {
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user",email);
        localStorage.setItem("userpassword",password);
        // Redirected
        window.location.href="index.html";
    } 
    else {
        error.innerText="Invalid Email or Password";
    }
}
function togglePassword() 
{
    let passwordInput=document.getElementById("password");
    if (passwordInput.type ==="password") 
        {
        passwordInput.type="text";
    } 
    else {
        passwordInput.type="password";
    }
}