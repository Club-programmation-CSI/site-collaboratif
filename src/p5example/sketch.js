let x = 100;
let y = 100;
let size = 50;


function setup() {
    // Mise en place du canvas
    createCanvas(windowWidth, windowHeight);

    // Pas de contour autour du rond
    noStroke()
    // Fond noir
    background(0);
}

function draw() {
    // On mets remplis l'ecran de noir avec un faible opacite donc la couleur disparait petit a petit
    background(0, 3);

    // Calcul de la distance a l'aide de Pythagore (;
    const distance = sqrt(pow(mouseX - x, 2) + pow(mouseY - y, 2))

    // Ici on choisis la couleur de la balle, lerpColor permets d'obtneir un couleur entre deux
    const ballColor = lerpColor(
        // Entre le Vert
        color(0, 255, 0),
        // Et le rouge
        color(255, 0, 0),
        // La valeur entre 0 et 1
        map(
            distance,
            0, size * 10,
            0, 1
        )
    )
    fill(ballColor)

    // On dessine la balle
    circle(x, y, size);

    // Et on change sa position
    x += (mouseX - x) * 0.05;
    y += (mouseY - y) * 0.05;
}


// Cette fonction est appelée quand on tourne la molette
// Ici on s'en sert pour changer la taille de la balle
function mouseWheel(event) {
    // le signe de event.deltaY correspond au sens de la rotation 
    if (event.deltaY > 0) {
        size += 5;
    } else {
        size -= 5;
    }
}