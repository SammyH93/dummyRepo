window.addEventListener('scroll', func => {
  const navBar = document.querySelector('nav');
  navBar.classList.toggle('scrolling-active', window.scrollY > 0);

  let b1 = document.querySelector('.b1');
  let b2 = document.querySelector('.b2');
  b1.classList.toggle('b-active', window.scrollY > 0 );
  b2.classList.toggle('b-active', window.scrollY > 0 );
});

var fullname = document.querySelector('.input1');
var select_food = document.querySelector('.drop-box1');
var select_location = document.querySelector('.drop-box2');
var select_area = document.querySelector('.drop-box3');
var digital_address = document.querySelector('.digital-address');
var price_box = document.querySelector('.price-span');
var amount_box = document.querySelector('.amount-span');
var phone_number = document.querySelector('.phone');
var quantity = document.querySelector('.quantity');
var delivary = document.querySelector('.delivery');
var pay = document.querySelector('.pay');

var all_inputs = document.querySelectorAll('input');
var all_select = document.querySelectorAll('select');

var span1 = document.querySelector('.sp1');
var span2 = document.querySelector('.sp2');
var span3 = document.querySelector('.sp3');
var span4 = document.querySelector('.sp4');
var span5 = document.querySelector('.sp5');
var span6 = document.querySelector('.sp6');
var span7 = document.querySelector('.sp7');
var span8 = document.querySelector('.sp8');
var sp_date = document.querySelector('.sp-date');
const button1 = document.querySelector('.input-1');
const confirm = document.querySelector('.confirm');


var prices = [15, 25, 30, 25, 40, 35];
var location_prices = [3,5,7];
var total_payment;
var customer_id;
var date_year = new Date().getFullYear();
var date_month = new Date().getMonth();
var date_day = new Date().getDate();
var date_hour = new Date().getHours();
var date_minute = new Date().getMinutes();
var date_second = new Date().getSeconds();


button1.addEventListener('click', func => {
  button1.style.display = "none";
  span1.innerHTML = fullname.value;
  span1.innerHTML.toString().toUpperCase();
  span2.innerHTML = select_food.value;
  span6.innerHTML = phone_number.value;
  sp_date.innerHTML= date_year +"/"+ date_month+"/"+date_day+ " @Time "+date_hour+":"+date_minute+":"+date_second;
  sp_date.style.fontSize = "25px";

    if (select_food.value === "Kalewale" && select_location.value === "Anaji" && select_area.value === "Police-Station") {
      total_payment = prices[0]  * quantity.value;
      total_payment += location_prices[0];
      span7.innerHTML = "GHS: " + total_payment;
  }

  customer_id = Math.round(Math.floor(Math.random()*1000000));
  span4.innerHTML = customer_id;

  if (!span5.innerHTML) {
    span5.innerHTML = "SELECT LOCATION*";
    span5.style.color = "yellow";
  }
  if (!span1.innerHTML) {
    span1.innerHTML = "TYPE A NAME*";
    span1.style.color = "yellow";
  }

  func.preventDefault();
});

confirm.addEventListener('click', func => {
  func.preventDefault();
});


function onBlur(){
  span1.innerHTML = fullname.value;

  if (select_food.value === "Kalewale") {
    price_box.innerHTML = "GHS: " + prices[0];
  }
  if (select_food.value === "Banku/Hot Sauce") {
    price_box.innerHTML = "GHS: " + prices[1];
  }
  if (select_food.value === "Ampesi/Abom Stew") {
    price_box.innerHTML = "GHS: " + prices[2];
  }
  if (select_food.value === "Burger/Fries") {
    price_box.innerHTML = "GHS: " + prices[3];
  }
}


function onBlur1(){
  span3.innerHTML = quantity.value;

  if (select_food.value === "Kalewale") {
    amount_box.innerHTML = "GHS: " + prices[0] * quantity.value;
  }
  if (select_food.value === "Banku/Hot Sauce") {
    amount_box.innerHTML = "GHS: " + prices[1] * quantity.value;
  }
  if (select_food.value === "Ampesi/Abom Stew") {
    amount_box.innerHTML = "GHS: " + prices[2] * quantity.value;
  }
  if (select_food.value === "Burger/Fries") {
    amount_box.innerHTML = "GHS: " + prices[3] * quantity.value;
  }
}


function onChange(){
  span2.innerHTML = select_food.value;
  span8.innerHTML = pay.value;

  if (select_food.value === "Kalewale") {
    price_box.innerHTML = "GHS: " + prices[0];
  }
  if (select_food.value === "Banku/Hot Sauce") {
    price_box.innerHTML = "GHS: " + prices[1];
  }
  if (select_food.value === "Ampesi/Abom Stew") {
    price_box.innerHTML = "GHS: " + prices[2];
  }
  if (select_food.value === "Burger/Fries") {
    price_box.innerHTML = "GHS: " + prices[3];
  }
}


function onChange1(){
  span5.innerHTML = select_location.value + "/" + select_area.value +"/" + digital_address.value;
}
function onBlurry(){
  span5.innerHTML = select_location.value + "/" + select_area.value +"/" + digital_address.value;
  if(select_location.value === "Anaji" && select_area.value === "Police-Station"){
    delivary.innerHTML = "GHS: " + location_prices[0];
    // span7.innerHTML = amount_box.value + delivary.value;
  }
}

fullname.addEventListener('click', func => {
  fullname.classList.toggle('focus');

  if (fullname.classList.contains('focus')) {
    fullname.style.background = "#333";
    fullname.style.color = "#fff";
  }
});

digital_address.addEventListener('click', func => {
  digital_address.classList.toggle('focus');

  if (digital_address.classList.contains('focus')) {
    digital_address.style.background = "#333";
    digital_address.style.color = "#fff";
  }
});

quantity.addEventListener('click', func => {
  quantity.classList.toggle('focus');

  if (quantity.classList.contains('focus')) {
    quantity.style.background = "#333";
    quantity.style.color = "#fff";
  }
});

phone_number.addEventListener('click', func => {
  phone_number.classList.toggle('focus');

  if (phone_number.classList.contains('focus')) {
    phone_number.style.background = "#333";
    phone_number.style.color = "#fff";
  }
});

// window.addEventListener('load', func => {
//   const params = (new URL(document.location)).searchParams;
//   const fullname = params.get('fullname');
//
//   span1.innerHTML = fullname;
// })
