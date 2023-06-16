
switchToSignUp = () => {
    const card = document.getElementById("signup");
    card.style.animationName = "fadeOut";
    card.style.animationDuration = "1s";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}
switchToLogin = () => {
    const card = document.getElementById("login");
    card.style.animationName = "fadeOut";
    card.style.animationDuration = "1s";
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "none";
}