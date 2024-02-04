let expendedContent = document.querySelector('.swiper');
let openButton = document.querySelector('.button-expend');
let textButton = document.querySelector('.button-expend__text');
let arrows = document.querySelector('.arrows');
let check= false;


openButton.addEventListener('click', function (evt) {
  if (!check){
  expendedContent.classList.add('show-hidden');
  textButton.textContent= "Скрыть";
  arrows.classList.add('arrows__hide');
 check=true;
} else {
  expendedContent.classList.remove('show-hidden');
  textButton.textContent= "Показать все"; 
  check=false;
  arrows.classList.remove('arrows__hide');
}}
);





