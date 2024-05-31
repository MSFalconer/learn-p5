
const squares = new Array(20);
const iterations = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
squares.fill(true);
// const colors = ['#F7F9F9', '#BED8D4', "#78D5D7", "#6ED4EB", "#63D2FF", "#42AAE1", "#2081C3"];
const colors = ['#F7F9F9', "#6ED4EB", "#2081C3"];




function setup() {
    // width, height
    const width = windowWidth;
    const height = windowHeight;

    const squareWidth = windowWidth / squares.length;
    const canvas = createCanvas(width, height);
    // will find element with id "first-canvas" and inject canvas
    canvas.parent('first-canvas');

    background(200);

    frameRate(20);



}

function draw() {

    iterations.forEach((item, index) => {
        createSquares(index);
    });

    noLoop();
}


function createSquares(y) {
    const squareWidth = windowWidth / squares.length;

    squares.forEach((number, index) => {

        const colorSquare = random(colors);
        const colorCircle = random(colors);
        const colorCircleTwo = random(colors);


        fill(colorSquare);
        noStroke();
        square(index * squareWidth, y * squareWidth, squareWidth);

        fill(colorCircle); 
        circle(index * squareWidth, (squareWidth / 2) + (squareWidth * y), squareWidth / 1);

        fill(colorCircleTwo); 
        circle(index * squareWidth, (squareWidth / random([2, 3, 4])) + (squareWidth * y), squareWidth / (random([2, 4, 8])));
    })
}


// on resize clears canvas and redraws
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
