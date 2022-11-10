function setup() {
	createCanvas(400, 400, WEBGL);
	camera(-200, -200, -200,   // camera position (x, y, z)
		0, -100, 0,   // camera target (look at position) (x, y, z)
		0, 1, 0);  // camera up axis: Y axis here
	orbitControl();
	//normalMaterial();
}
function draw() {
	background(200);
	orbitControl();
	const sz = 20;

	for (let x = 0; x < width; x += sz) {
		for (let z = 0; z < height; z += sz) {
			push();
			// ground plane is XZ, not XY (front plane)
			translate(x, sin(x / 20 + (millis() / 1000)) * (sz / 2), z);
			box(sz);
			pop();
		}
	}
}
