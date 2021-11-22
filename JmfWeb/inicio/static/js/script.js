// ----------- HAMBURGUER MENU
window.addEventListener('DOMContentLoaded', () => {
  menu.addEventListener('click', toggleMenu, false);
  

})


const menu = document.querySelector('.hamburger');

  function toggleMenu (e) {
    this.classList.toggle('is-active');
    document.querySelector( ".menuppal" ).classList.toggle("is_active");
    e.preventDefault();
  }
  









// ------- CARROUSEL
// var slideIndex = 0;

// showSlides();

// function showSlides() {
//        var i;
//        var slides = document.getElementsByClassName("mySlides");
//        for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//        }

//        slideIndex++;
//        if(slideIndex > slides.length) {slideIndex = 1}
//        slides[slideIndex-1].style.display = "block";
//        setTimeout(showSlides,2000);
// }
