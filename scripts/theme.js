let body = document.querySelector('.body');
let theme = document.querySelector('.theme');

theme.onclick = function() {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
}