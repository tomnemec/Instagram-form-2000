
const signup = document.getElementById("signup");
const login = document.getElementById("login");
switchToSignUp = () => {
    login.style.animationName = "fadeOut";
    login.style.animationDuration = "1s";     
    setTimeout(() => {
        login.style.display = "none";
        signup.style.animationName = "fadeIn";
        signup.style.animationDuration = "1s";    
        signup.style.display = "flex";
    }, 900);
}
switchToLogin = () => {
    signup.style.animationName = "fadeOut";
    signup.style.animationDuration = "1s";     
    setTimeout(() => {
        signup.style.display = "none";
        login.style.animationName = "fadeIn";
        login.style.animationDuration = "1s";    
        login.style.display = "flex";
    }, 900);
}