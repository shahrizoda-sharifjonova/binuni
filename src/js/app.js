import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation} from 'swiper';

const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');
const headerContent = document.querySelector('.header__content');
const headerToggle = document.querySelectorAll('.header-toggle');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    headerList.classList.toggle('active') 
    body.classList.toggle('active')
    headerContent.classList.toggle('active')
})

headerToggle.forEach(el=> {
    el.addEventListener('click', (e)=>{
        menu.classList.remove('active')
        headerList.classList.remove('active')
        body.classList.remove('active')
        headerContent.classList.remove('active')
    })
});

new Swiper(".about__swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
});

new Swiper(".testimonials__swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    modules: [Navigation],
    navigation: {
        prevEl: ".testimonials__button-prev",
        nextEl: ".testimonials__button-next",
    },
    breakpoints:{
        1400:{
            slidesPerView: 4,
            spaceBetween: 40,
        },
        992:{    
            slidesPerView: "auto",
            spaceBetween: 36,  
        },
    }
});

import $ from 'jquery'

$(document).ready(function() {
    $(".accordion > .accordion__button").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".accordion__content")
          .slideUp(200);
      } else {
        $(".accordion > .accordion__button").removeClass("active");
        $(this).addClass("active");
        $(".accordion__content").slideUp(200);
        $(this)
          .siblings(".accordion__content")
          .slideDown(200);
      }
    });
  });