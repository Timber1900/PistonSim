let angle = 0
let r = 100
let c = 200
let size = 10
let current = 8
let numbers = []

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  push()
  translate(width / 2, height / 2)
  Points(0)
  Points(PI / 4)
  for (numb of numbers) {
    Start(numb)
  }
  //Middle Circle
  noFill()
  stroke(127, 100)
  strokeWeight(2)
  ellipse(0, 0, r * 2, r * 2)
  pop()
  angle += TWO_PI / (60 * 5)
}

function Points(rotation_angle) {
  let x = r * cos(angle - rotation_angle)
  let y = r * sin(angle - rotation_angle)
  fill(0)
  noStroke()
  if (rotation_angle == 0) {
    ellipse(x, y, 10, 10)
  }
  //Y axis
  let y1 = ((2 * y) + sqrt((4 * c * c) - (4 * x * x))) / 2
  let y2 = ((2 * y) - sqrt((4 * c * c) - (4 * x * x))) / 2
  //X axis
  let x1 = ((2 * x) + sqrt((4 * c * c) - (4 * y * y))) / 2
  let x2 = ((2 * x) - sqrt((4 * c * c) - (4 * y * y))) / 2
  //Show
  push()
  rotate(rotation_angle)
  ellipse(0, y1, size, size)
  ellipse(0, y2, size, size)
  ellipse(x1, 0, size, size)
  ellipse(x2, 0, size, size)
  stroke(0, 100)
  line(x, y, 0, y1)
  line(x, y, 0, y2)
  line(x, y, x1, 0)
  line(x, y, x2, 0)
  pop()
}
function Start(factor) {
  max = factor / 2
  rotation = 1
  while (rotation < max) {
    Points(rotation * PI / factor)
    rotation += 2
  }
}

function mousePressed() {
  numbers.push(current)
  current = current * 2
}