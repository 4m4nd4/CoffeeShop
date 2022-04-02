//Coffee Shop


//Header-----------------------------------

//--menu--
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    favItem.classList.remove('active');
}

//--pesquisa--
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    favItem.classList.remove('active');
}
document.querySelector('#search-icon').onmouseover = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    favItem.classList.remove('active');
}
document.querySelector('#search-box').onmouseout = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    favItem.classList.remove('active');
}

//--carrinho--
let cartItem = document.querySelector('.cart-items-cont');

document.querySelector('#cart-icon').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    favItem.classList.remove('active');

}

//--item favorito--
let favItem = document.querySelector('.fav-items-cont');

document.querySelector('#fav-icon').onclick = () =>{
    favItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}


//-NavBar mudando com onscroll-
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };

    });

}


//Home-----------------------------------

//-slide-

//--swipe banner home--
var swiper = new Swiper(".home-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

//--swipe review comentarios--
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
  });


  //Loader-----------------------------------

  function loader(){
      document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
      setInterval(loader, 3000);
  }

  window.onload = fadeOut;