const menuButton = document.querySelector('.hamburger-menu');
menuButton.addEventListener('click', func => {
  let sideBar = document.querySelector('.side-bar');
  sideBar.classList.toggle('active');

  const bodyWrapper = document.querySelector('.wrapper');
  bodyWrapper.classList.toggle('active');
});


window.addEventListener('scroll', func => {
  const navScroll = document.querySelector('nav');
  navScroll.classList.toggle('scrolling-active', window.scrollY > 0 );

  let b1 = document.querySelector('.b1');
  let b2 = document.querySelector('.b2');
  b1.classList.toggle('b-active', window.scrollY > 0 );
  b2.classList.toggle('b-active', window.scrollY > 0 );
});
