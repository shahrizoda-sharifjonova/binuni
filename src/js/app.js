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


if(document.querySelector('.markets-button-num-next')){
  const next = document.querySelector('.markets-button-num-next');
  const prev = document.querySelector('.markets-button-num-prev');
  const slides = document.querySelectorAll(".markets__slide");
  const slideCount = slides.length;
  if(slideCount < 10){
    next.innerHTML = `0${slideCount}`;
  }else{
    next.innerHTML = `${slideCount}`;
  }
  new Swiper(".markets__swiper", {
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".markets-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".markets-button-next",
      prevEl: ".markets-button-prev",
    },
    on: {
      realIndexChange: (swiper) => {
        if(swiper.realIndex < 10){
          prev.innerHTML = `0${swiper.realIndex + 1}`;
        }else{
          prev.innerHTML = `${swiper.realIndex + 1}`;
        }
      }
    }
  });
}

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


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

const changeBtn = document.querySelectorAll('.change-content');
const dn = document.querySelectorAll('.dn');

changeBtn.forEach(open => {
    open.addEventListener('click', e => {
        changeBtn.forEach(btn => {
            btn.classList.remove('active')
        });
        open.classList.add('active')
        dn.forEach(el => {
            el.classList.remove('active')
        });
        const target = open.getAttribute('data-target');
        const elem = document.querySelector(`#${target}`);
        elem.classList.add('active');
    })
})