let radius = 100;  // Radius of the circle
let squiggleAmount = 100;  // Adjust the number of squiggles for a smoother line
let time = 0;  // Time variable for sine wave
let squiggleSpeedMultiplier = 5;  // Adjust this to control squiggle speed
let amplitudeMultiplier = 30;  // Adjust this to control the amplitude of the squiggle

function giveCanvasClass() {
  let canvas = document.getElementById("defaultCanvas0")
  canvas.className = "p5-sketch"
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  giveCanvasClass()
}

function draw() {
  background(220);
  
  translate(width / 2, height / 2);
  beginShape();
  
  for (let i = 0; i < squiggleAmount; i++) {
    let angle = map(i, 0, squiggleAmount, 0, TWO_PI);
    
    // Modulate the angle with a sine wave to create squiggles
    let squiggle = sin(angle * squiggleSpeedMultiplier + time) * amplitudeMultiplier * sin(time);
    
    let x = cos(angle) * (radius + squiggle);
    let y = sin(angle) * (radius + squiggle);
    vertex(x, y);
  }
  
  endShape();
  
  // Update time for sine wave motion
  time += 0.05;  // Adjust the speed of the squiggles
}