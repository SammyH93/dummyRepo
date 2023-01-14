const navBar = document.querySelector('nav');
window.addEventListener('scroll', func => {
  navBar.classList.toggle('scrolling-active', window.scrollY > 0);

  let b1 = document.querySelector('.b1');
  let b2 = document.querySelector('.b2');
  b1.classList.toggle('b-active', window.scrollY > 0 );
  b2.classList.toggle('b-active', window.scrollY > 0 );
});





const submitBtn = document.querySelector('.submit');
var input1 = document.querySelector('.input-1').value;
var input2 = document.querySelector('.input-2').value;
var form = document.querySelector('.form');
let popUp_1 = document.querySelector('.contact-area');

submitBtn.addEventListener('click', func => {
  let popUp_1 = document.querySelector('.contact-area');
  let errorMsg = document.querySelector('.error-msg-1')
if (input1.value && input2.value) {
  popUp_1.classList.toggle('active');
}else if (!input1.value && !input2.value){
  errorMsg.classList.toggle('active');
  // errorMsg.style.transform = "scale(1)";
}

let button3 = document.querySelector('.btn-3');
button3.addEventListener('click', func =>{
  errorMsg.classList.remove('active');
})

func.preventDefault();
});
