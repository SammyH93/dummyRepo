const minimizeBtn = document.querySelector('.minimize');
minimizeBtn.addEventListener('click', func => {
  document.querySelector('.container').classList.toggle('min');
});

var stats_value1 = document.querySelector('.p-value-1');
var stats_value2 = document.querySelector('.p-value-2');
var prog_bar1 = document.querySelector('.st-inner1');
var prog_bar2 = document.querySelector('.st-inner2');
var over_all = document.querySelector('.over-all');
var trans = document.querySelector('.trans')
var id = null;
var position = 0;

var timer_1 = setInterval(func => {
  let val = parseInt(stats_value1.innerHTML) + 1;
  val = (val >= 100)? 0: val;
  stats_value1.innerHTML = val + "%";

  if(position == 560){
    clearInterval(id);
  }else{
    position+= 5.6;
    prog_bar1.style.width = position + "px";
     position = (position >= 560)? 0: position;
  }
  trans.innerHTML = val;
}, 500);




// var  timer_2 = setInterval(func => {
//   let val = parseInt(stats_value2.innerHTML) + 1;
//   val = (val >= 100)? 0: val;
//   stats_value2.innerHTML = val + "%";
//
//   if(position == 560){
//     clearInterval(id);
//   }else{
//     position+= 3.6;
//     prog_bar2.style.width = position + "px";
//     position = (position >= 560)? 0: position;
//   }
// }, 1500);
