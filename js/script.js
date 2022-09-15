// toggle _open classes for menu-block and burger-icon
function toggleMenu(){
  document.querySelector('.menu-mobile').classList.toggle('menu_open');
  document.querySelector('.burger').classList.toggle('burger_open');
}


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
  elem.addEventListener('click', function(event){
    event.target.closest('.radiobuttons').querySelectorAll('.radio').forEach(function(elem){
      elem.classList.remove('radio_active');
    })
    event.target.querySelector('input').checked = true;
    event.target.classList.add('radio_active')
  })
})