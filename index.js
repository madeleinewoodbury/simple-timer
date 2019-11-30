// Select DOM elements
const durInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const circle = document.querySelector('circle');

// Calculate the perimeter of the circle
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
// Create a new timer
const timer = new Timer(durInput, startBtn, pauseBtn, {
  onStart() {
    console.log('Timer started');
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset = currentOffset - 50;
  },
  onComplete() {
    console.log('Complete!');
  }
});
