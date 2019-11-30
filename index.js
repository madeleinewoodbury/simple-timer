class Timer {
  constructor(durInput, startBtn, pauseBtn, callbacks) {
    this.durInput = durInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener('click', this.start);
    this.pauseBtn.addEventListener('click', this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause;
      this.onComplete && this.onComplete();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      this.onTick && this.onTick();
    }
  };

  get timeRemaining() {
    return parseFloat(this.durInput.value);
  }

  set timeRemaining(time) {
    this.durInput.value = time;
  }
}

// Select DOM elements
const durInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

// Create a new timer
const timer = new Timer(durInput, startBtn, pauseBtn, {
  onStart() {
    console.log('Timer started');
  },
  onTick() {
    console.log('Tick');
  },
  onComplete() {
    console.log('Complete!');
  }
});
