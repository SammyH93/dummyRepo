const iframe = document.querySelector('.iframe');
const hamburger_menu = document.querySelector('.hamburger-menu');
var page_1 = document.querySelector('.source1');
var page_2 = document.querySelector('.source2');
var page_3 = document.querySelector('.source3');
var side_div = document.querySelector('.first-div');
var admin_profile = document.querySelector('.admin-profile');
var span = document.getElementsByClassName('span');
var div_1 = document.getElementsByClassName('div-1');
var order = document.querySelector('.msg-box-1');
var messages = document.querySelector('.msg-box-2');
var notifications = document.querySelector('.notify-box');
var dropbox_1 = document.querySelector('.dropbox-1');
var dropbox_2 = document.querySelector('.dropbox-2');
var dropbox_3 = document.querySelector('.dropbox-3');


hamburger_menu.addEventListener('click', func => {
  side_div.classList.toggle('size-active');
  span[0].classList.toggle('off-display');
  span[1].classList.toggle('off-display');
  span[2].classList.toggle('off-display');
  span[3].classList.toggle('off-display');
  span[4].classList.toggle('off-display');

  admin_profile.classList.toggle('no-display');
});

order.addEventListener('click', func => {
  dropbox_1.classList.toggle('msg-dropbox-active');
});
messages.addEventListener('click', func =>{
  dropbox_2.classList.toggle('msg-dropbox-active');
});
notifications.addEventListener('click', func => {
  dropbox_3.classList.toggle('msg-dropbox-active');
});

function tomatoBG(){
  div_1[0].classList.toggle('click');
  div_1[1].classList.remove('click');
  div_1[2].classList.remove('click');
}
function tomatoBG1(){
  div_1[1].classList.toggle('click');
  div_1[0].classList.remove('click');
  div_1[2].classList.remove('click');
}
function tomatoBG2(){
  div_1[2].classList.toggle('click');
  div_1[1].classList.remove('click');
  div_1[0].classList.remove('click');
}

page_1.addEventListener('click', func => {
iframe.src = "admin-panel.html";
});
page_2.addEventListener('click', func => {
iframe.src = "app-space.html";
});
page_3.addEventListener('click', func => {
iframe.src = "dash-board.html";
});
