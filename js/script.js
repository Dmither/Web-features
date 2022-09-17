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

// slider
{
// get and add start elements classes
var sliderBox = document.querySelector('.slider__box');
var sliderItems = document.querySelectorAll('.slider__image');
var current = document.querySelector('.slider__image_current');
var currentIndex = Array.prototype.indexOf.call(sliderItems, current);
if (currentIndex <= 0){
  var prevIndex = sliderItems.length - 1;
  var nextIndex = currentIndex + 1;
} else if (currentIndex >= sliderItems.length - 1){
  var prevIndex = currentIndex - 1;
  var nextIndex = 0;
}
else {
  var prevIndex = currentIndex - 1;
  var nextIndex = currentIndex + 1;
}
var prevElement = sliderBox.children[prevIndex];
var nextElement = sliderBox.children[nextIndex];
prevElement.classList.add('slider__image_prev');
nextElement.classList.add('slider__image_next');
// add prev and next buttons logic
var prev = document.querySelector('.slider__prev')
prev.addEventListener('click', function(event){
  if (currentIndex <= 0){
    currentIndex = sliderItems.length - 1;
  } else {
    currentIndex--;
  } 
  if (prevIndex <= 0){
    prevIndex = sliderItems.length - 1;
  } else {
    prevIndex--;
  } 
  if (nextIndex <= 0){
    nextIndex = sliderItems.length - 1;
  } else {
    nextIndex--;
  } 
  current.classList.remove('slider__image_current');
  current = sliderBox.children[currentIndex];
  current.classList.add('slider__image_current');
  prevElement.classList.remove('slider__image_prev');
  prevElement = sliderBox.children[prevIndex];
  prevElement.classList.add('slider__image_prev');
  nextElement.classList.remove('slider__image_next');
  nextElement = sliderBox.children[nextIndex];
  nextElement.classList.add('slider__image_next');
})
var next = document.querySelector('.slider__next');
next.addEventListener('click', function(event){
  if (currentIndex >= sliderItems.length - 1){
    currentIndex = 0;
  } else {
    currentIndex++;
  } 
  if (prevIndex >= sliderItems.length - 1){
    prevIndex = 0;
  } else {
    prevIndex++;
  } 
  if (nextIndex >= sliderItems.length - 1){
    nextIndex = 0;
  } else {
    nextIndex++;
  } 
  current.classList.remove('slider__image_current');
  current = sliderBox.children[currentIndex];
  current.classList.add('slider__image_current');
  prevElement.classList.remove('slider__image_prev');
  prevElement = sliderBox.children[prevIndex];
  prevElement.classList.add('slider__image_prev');
  nextElement.classList.remove('slider__image_next');
  nextElement = sliderBox.children[nextIndex];
  nextElement.classList.add('slider__image_next');
})
}