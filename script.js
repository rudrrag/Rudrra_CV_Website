const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navigation-bar');

menuIcon.onclick = () => {
    navBar.classList.toggle('active');
}