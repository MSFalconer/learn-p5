
function setup() {
    // width, height
    const canvas = createCanvas(400, 400);
    // will find element with id "first-canvas" and inject canvas
    canvas.parent('first-canvas');

}

function draw() {
    background(200);

    // x position, y position, width, height
    ellipse(200, 200, 100, 100);
}