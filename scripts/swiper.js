const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
      clickable: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
      clickable: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: false,
    },
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
});

const projectSwiper = new Swiper(".projectSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
      clickable: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
      clickable: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: false,
    },
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseOver: true,
  },
});
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },

//   autoplay: {
//     delay: 2000,
//     pauseOnMouseEnter: true,
//   },
// });
