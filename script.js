let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () =>{
  login.classList.toggle('active');
  cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () =>{
  cart.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  grabCursor:true,
  loop: true,
  centeredSlides:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop: true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetwwen:20,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
});
