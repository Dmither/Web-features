function toggleMenu(){
  document.querySelector('.menu-mobile').classList.toggle('menu_open');
  document.querySelector('.burger').classList.toggle('burger_open');
}

document.querySelectorAll('.checkbox').forEach(function(index){
  index.addEventListener('click', function(e){
    console.log(e.target);
  })
})

