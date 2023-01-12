// let output = document.getElementById('stopwatch');

// function Stopwatch(min, sec, ms) {
//   this.milli = ms;
//   this.seconds = sec;
//   this.minute = min;
//   let time;

//   this.timer = function () {
//     ms++;
//     if (ms >= 100) {
//       sec++
//       ms = 0
//     }
//     if (sec === 60) {
//       min++
//       sec = 0
//     }
//     if (min === 60) {
//       ms, sec, min = 0;
//     }
//     var milli = ms < 10 ? `0` + ms : ms;
//     var seconds = sec < 10 ? `0` + sec : sec;
//     var minute = min < 10 ? `0` + min : min;
//     var timer = `${minute}:${seconds}:${milli}`;
//     output.innerHTML = timer;
//   }

//   this.start = function () {
//     if (!time) {
//       time = setInterval(timer, 10);
//     }
//   }
//   this.stop = function () {
//     clearInterval(time)
//     time = false;
//   }
//   this.reset = function () {
//     ms = 0;
//     sec = 0;
//     min = 0;
//     output.innerHTML = `00:00:00`;
//     clearInterval(time);
//   }
//   this.lap = function () {
//     let li = document.createElement("li");
//     li.setAttribute("class", "lap")
//     li.innerHTML = ((min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms));
//     let ul = document.getElementById("laps");
//     ul.appendChild(li);
//   }
 
//   const startBtn = document.getElementById('startBtn');
//   const stopBtn = document.getElementById('stopBtn');
//   const resetBtn = document.getElementById('resetBtn');
//   const lapBtn = document.getElementById('lapBtn');
//   startBtn.addEventListener('click', start, false);
//   stopBtn.addEventListener('click', stop, false);
//   resetBtn.addEventListener('click', reset, false);
//   lapBtn.addEventListener('click', lap);
// }

// const stopwatch = new Stopwatch(0, 0, 0);
// stopwatch.timer();
// stopwatch.start();
// stopwatch.stop();
// stopwatch.lap();





// Simple stopwatch without Object or Constructor 

let output = document.getElementById('stopwatch');
let ms = 0;
let sec = 0;
let min = 0;
let time;
function timer() {
  ms++;
  if (ms >= 100) {
    sec++
    ms = 0
  }
  if (sec === 60) {
    min++
    sec = 0
  }
  if (min === 60) {
    ms, sec, min = 0;
  }
  var milli = ms < 10 ? `0` + ms : ms;
  var seconds = sec < 10 ? `0` + sec : sec;
  var minute = min < 10 ? `0` + min : min;
  var timer = `${minute}:${seconds}:${milli}`;
  output.innerHTML = timer;
};
function start() {
  if (!time) {
    time = setInterval(timer, 10);
  }
};
function stop() {
  clearInterval(time)
  time = false;
};
function reset() {
  ms = 0;
  sec = 0;
  min = 0;

  output.innerHTML = `00:00:00`;
  clearInterval(time);
};
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
startBtn.addEventListener('click', start, false);
stopBtn.addEventListener('click', stop, false);
resetBtn.addEventListener('click', reset, false);
lapBtn.addEventListener('click', lap);
function lap() {
  if(time >= 1){
    let li = document.createElement("li");
  li.setAttribute("class", "lap")
  li.innerHTML = ((min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms));
  let ul = document.getElementById("laps");
  ul.appendChild(li);
  }
};