// let show = true;
// const menuContent = document.querySelector('.content');
// const menuToggle = menuContent.querySelector('.menu-toggle');


// menuToggle.addEventListener('click', () => {

//     document.body.style.overflow = show ? 'hidden' : 'initial'

//     menuContent.classList.toggle('on', show);
//     show = !show;
// })

const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");
const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];


function smoothScroll(e) {
    e.preventDefault();
  
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  
    setTimeout(() => {
      if (menu.classList.contains("menu-active")) {
        menu.classList.remove("menu-active");
      }
    }, 500);
}


[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
      menu.classList.toggle("menu-active");
    });
});
  
  allLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
    menu.classList.remove("menu-active");
});
