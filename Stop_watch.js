const time_el = document.querySelector(".time_el");
const start_btn = document.getElementById("start_btn");
const stop_btn = document.getElementById("stop_btn");
const reset_btn = document.getElementById("reset_btn");

let h = 0;
let m = 0;
let s = 0;
let tens = 0;
let interval;
timer();

start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function start(){
    interval = setInterval(timer,10); 
}

function stop(){
  clearInterval(interval)
}

function reset(){
   clearInterval(interval);
   let h = 0;
   let m = 0;
   let s = 0;
   let tens = 0;
   time_el.innerText = (h < 10? "0" + h : h) + ":" + (m < 10? "0" + m : m) + ":" + (s < 10? "0" + s : s) + ":" + (tens < 10? "0" + tens : tens);
}

function timer(){
    time_el.innerText = (h < 10? "0" + h : h) + ":" + (m < 10? "0" + m : m) + ":" + (s < 10? "0" + s : s) + ":" + (tens < 10? "0" + tens : tens);
    tens++;
    if(tens == 100){
        tens = 0;
        s++;
    }

    if(s == 60 ){
        s = 0;
        m++;
    }

    if(m == 60){
        m = 0;
        h++;
    }
}
