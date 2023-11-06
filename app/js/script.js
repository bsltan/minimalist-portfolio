document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerIcon.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
      hamburgerIcon.classList.toggle("open");
    });
  });