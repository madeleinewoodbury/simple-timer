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
