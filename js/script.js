// burger-menu
function toggleMenu(){
  // toggle _open classes for menu-block and burger-icon
  document.querySelector('.menu-mobile').classList.toggle('menu_open');
  document.querySelector('.burger').classList.toggle('burger_open');
}

// checkboxes and radio-buttons
{
document.querySelectorAll('.checkbox').forEach(function(elem){
  // add class active to checked checkbox during the start
  if(elem.querySelector('input').checked){
    elem.classList.add('checkbox_active');
  }
  // change checked attribute and toggle class _active on click
  elem.addEventListener('click', function(event){
    if (event.target.classList.contains('checkbox_active')){
      event.target.querySelector('input').checked = false;
    } else {event.target.querySelector('input').checked = true;}
    event.target.classList.toggle('checkbox_active');
  })
})
document.querySelectorAll('.radio').forEach(function(elem){
  // add class active to checked radio during the start
  if(elem.querySelector('input').checked){
    elem.classList.add('radio_active');
  }
  // on click remove _active for all radio, target checked and _active
  elem.addEventListener('click', function(event){
    event.target.closest('.radiobuttons').querySelectorAll('.radio').forEach(function(elem){
      elem.classList.remove('radio_active');
    })
    event.target.querySelector('input').checked = true;
    event.target.classList.add('radio_active')
  })
})
}

// spoilers
{
var spoilers = document.querySelectorAll('.spoiler');
document.querySelectorAll('.spoiler__title').forEach(function(elem){
  // for each titles get text height, and set height 1px
  let spoiler = elem.closest('.spoiler');
  var textHeight = spoiler.querySelector('.spoiler__text').clientHeight;
  spoiler.querySelector('.spoiler__text').style.height = '0px';
  // add listener
  elem.addEventListener('click', function(event){
    let spoiler = event.target.closest('.spoiler');
    spoiler.classList.toggle('spoiler_active');
    if(spoiler.classList.contains('spoiler_active')){
      // -> if other spoilers should close
      spoilers.forEach(function(elem){
        elem.classList.remove('spoiler_active');
        elem.querySelector('.spoiler__text').style.height = '0px';
      }) 
      spoiler.classList.add('spoiler_active');
      // <--------------------------------
      spoiler.querySelector('.spoiler__text').style.height = `${textHeight + 2}px`;
    } else {spoiler.querySelector('.spoiler__text').style.height = '0px';}
  })
})
}

// parallax bg
{
  window.onload = function(){
    const parallax = document.querySelector('.parallax');
    if (parallax) {
      const bg = document.querySelector('.parallax__background');
      console.log(bg);
      const speed = 0.05;
  
      let positionX = 0;
      let coordXpercent = 0;
  
      function setMouseParallax(){
        const distX = coordXpercent - positionX;
  
        positionX += (distX*speed);
        bg.style.cssText = `transform: translate(${-positionX / 20}%);`;
        requestAnimationFrame(setMouseParallax);
      }
      setMouseParallax();
  
      parallax.addEventListener("mousemove", function(e){
        const parallaxWidth = parallax.offsetWidth;
        const coordX = e.pageX - parallaxWidth / 2;
        coordXpercent = coordX / parallaxWidth * 100;
      });
    }
  }
}

new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 1000,
  thumbs: {
    swiper: {
      el: '.slider-mini',
      slidesPerView: 4,
    }
  }
});