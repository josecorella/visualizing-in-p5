let detailY;
function setup() {
  createCanvas(500, 500, WEBGL);
  detailY = createSlider(3, 16, 3);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(227);

  fill(255, 204, 0);

  rotateY(millis() / 1000);
  sphere(40, 16, detailY.value());

  
  

}