let maze;
let generator;

function setup() {
    let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    canvas.parent("canvas-container");

    maze = new Maze(floor(width / 40), floor(height / 40), 40);
    generator = new DFSGenerator(maze);
}

function draw() {
    background(51);
    maze.show();
    generator.step();
    generator.highlight();
}

function windowResized() {
    resizeCanvas(windowWidth * 0.8, windowHeight * 0.8);
}
