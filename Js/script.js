 new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 50,
  draggable: true,
  mousewheel: true,
  speed: 800,
  effect: "coverflow",
  coverflowEffect:{
    rotate: 0,
    scale: .9
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement: "span"
  }
});