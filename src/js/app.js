import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination} from 'swiper';

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

new Swiper(".markets__swiper", {
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".markets-button-next",
        prevEl: ".markets-button-prev",
    },
});

new Swiper(".comments__swiper", {
    slidesPerView: 1,
    modules: [Pagination],
    pagination: {
        el: ".comments-pagination",
    },
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


if(document.querySelector('.account__link')){
    const accountLink = document.querySelector('.account__link');
    const accountAbs = document.querySelector('.account__abs');
    
    accountLink.addEventListener('mouseover', (e)=>{
        accountAbs.classList.add('active')
    })
    
    accountLink.addEventListener('mouseout', (e)=>{
        accountAbs.classList.remove('active')
    })
}

const popup = document.querySelectorAll('.popup');
const popupOpen = document.querySelectorAll('.popup-open');
const popupClose = document.querySelectorAll('.popup-close');
popupClose.forEach(close => {
    close.addEventListener('click', e => {
        popup.forEach(el => {
            el.classList.remove('active');
            document.body.style.overflowY = "auto";
        })
    })
})
popupOpen.forEach(open => {
    open.addEventListener('click', e => {
        popup.forEach(el => {
            el.classList.remove('active');
            document.body.style.overflowY = "auto";
        })
        const target = open.getAttribute('data-target');
        const elem = document.querySelector(`#${target}`);
        elem.classList.add('active');
        document.body.style.overflowY = "hidden";
    })
})
