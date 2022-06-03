// Navbar
let navbar = document.getElementById("navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "#233148";
    navbar.style.boxShadow = " 0 0 10px 0 black";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
}

// Navbar toggler
let toggler = document.getElementById("toggler");
toggler.addEventListener("click", function () {
  let navbarMenu = document.getElementById("navbar__menu");
  toggler.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Footer date
document.getElementById("date").innerText = new Date().getFullYear();
