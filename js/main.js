// Toggle & Responsive Navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector(".nav-menu");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger")
    })
};

navSlide()