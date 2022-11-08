function setup() {
  createCanvas(400, 400, WEBGL);
  camera(-200, -200, -200,   // camera position (x, y, z)
         0   , -100,    0,   // camera target (look at position) (x, y, z)
         0   ,    1,    0);  // camera up axis: Y axis here
         orbitControl();
//   normalMaterial();
}
function draw() {
  background(200);
  
  for (let x=0; x < width; x +=20){
    for (let z=0; z < height; z +=20){
      push();
      // ground plane is XZ, not XY (front plane)
      translate(x, 0, z);  
      box(20);
      pop(); 
    }
  }
}
