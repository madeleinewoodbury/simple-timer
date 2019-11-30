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
    this.onStart && this.onStart(this.timeRemaining);
    this.tick();
    this.interval = setInterval(this.tick, 50);
  };

  pause = () => {
    clearInterval(this.interval);
    console.log('Interval cleared');
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      this.onComplete && this.onComplete();
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      this.onTick && this.onTick(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return parseFloat(this.durInput.value);
  }

  set timeRemaining(time) {
    this.durInput.value = time.toFixed(2);
  }
}
