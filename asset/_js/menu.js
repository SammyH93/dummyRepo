window.addEventListener('scroll', func => {
  const navBar = document.querySelector('.sticky');
  navBar.classList.toggle('scrolling-active', window.scrollY > 0);

  let b1 = document.querySelector('.b1');
  let b2 = document.querySelector('.b2');
  b1.classList.toggle('b-active', window.scrollY > 0 );
  b2.classList.toggle('b-active', window.scrollY > 0 );
})
