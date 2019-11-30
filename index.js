class Timer {
  constructor(durInput, startBtn, pauseBtn) {
    this.durInput = durInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    this.startBtn.addEventListener('click', this.start);
    this.pauseBtn.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    console.log('tick');
  };
}

// Select DOM elements
const durInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

// Create a new timer
const timer = new Timer(durInput, startBtn, pauseBtn);
