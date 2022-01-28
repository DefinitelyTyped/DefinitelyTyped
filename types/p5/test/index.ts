import * as p5 from "p5";

function s(
  sketch: p5
) {
  const x = 100;
  const y = 100;

    sketch.setup = () => {
        sketch.createCanvas(200, 200, sketch.WEBGL);
    };

    sketch.draw = () => {
        sketch.background(0);
        sketch.applyMatrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        sketch.fill(255);
        sketch.rect(x, y, 50, 50);
    };
}

const myp5 = new p5(
  s
);

myp5.createGraphics(10, 10).ellipse(5, 5, 5);
