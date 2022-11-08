let octavesSlider;
let octavesP;

let fallofSlider;
let fallofP;

let scaleSlider;
let scaleP;

function setup() {
    createCanvas(400, 400);
    noStroke();
    scaleP = createP();
    scaleSlider = createSlider(0.001, 0.05, 0.01, 0.001);
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

    for (var x = 0; x < width; x += 10) {
        for (var y = 0; y < height; y += 10) {
            var c = 255 * noise(scaleSlider.value() * x, scaleSlider.value() * y);
            fill(c);
            rect(x, y, 10, 10);
        }
    }
}
