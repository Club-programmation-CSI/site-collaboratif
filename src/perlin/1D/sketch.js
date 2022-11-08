let octavesSlider;
let octavesP;

let fallofSlider;
let fallofP;

let scaleSlider;
let scaleP;

function setup() {
    createCanvas(800, 400);
    noStroke();
    scaleP = createP();
    scaleSlider = createSlider(0.02, 0.1, 0.02, 0.01);
    octavesP = createP();
    octavesSlider = createSlider(1, 10, 1);
    fallofP = createP();
    fallofSlider = createSlider(0, 1, 0.5, 0.1);
}

function draw() {
    scaleP.html(`Echelle du noise: ${scaleSlider.value()}`);
    octavesP.html(`Ocatves (detail): ${octavesSlider.value()}`);
    fallofP.html(`Influence des octaves: ${fallofSlider.value()}`);
    noiseDetail(octavesSlider.value(), fallofSlider.value());

    background(0);
    noFill();
    stroke(255);
    beginShape();
    for (let x = 0; x < width; x++) {
        let y = height * noise(x * scaleSlider.value());
        vertex(x, y);
    }
    endShape();
}
