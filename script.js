let display = document.getElementById("display");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let timer;
let seconds = 0;
let running = false;

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    display.textContent = 
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (mins < 10 ? "0" : "") + mins + ":" +
    (secs < 10 ? "0" : "") + secs;
}

startBtn.addEventListener("click", () => {
    if(!running) {
        running = true;
        timer = setInterval(function() {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    running = false;
    clearInterval(timer)
});

resetBtn.addEventListener("click", () => {
    running = false;
    seconds = 0;
    clearInterval(timer);
    updateDisplay();
});

updateDisplay();