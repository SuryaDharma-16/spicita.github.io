// Toggle class active
const navbarNav = document.querySelector(".nav-menus");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Remove class active
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});