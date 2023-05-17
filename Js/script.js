 new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 54,
  mousewheel: true,
  speed: 800,
  effect: "coverflow",
  coverflowEffect:{
    rotate: 0,
    scale: .9
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: false,
    bulletElement: "span"
  }
});


const navToggle = document.querySelector(".menu_absolute"),
      nav = document.querySelector("nav"),
      menuItem = document.querySelectorAll(".menu_absolute-item"),
      links = document.querySelectorAll("a")

      navToggle.addEventListener("click", () =>{
        nav.classList.toggle("active")

        menuItem.forEach(item => {
            item.classList.toggle("active")
        })

        links.forEach(link => {
            link.classList.toggle("active")
        })
      })