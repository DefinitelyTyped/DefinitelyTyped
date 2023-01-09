import * as p5 from "p5";

function s(
  sketch: p5
) {
  const x = 100;
  const y = 100;

  sketch.setup = () => {
    sketch.createCanvas(
      200,
      200
    );

    mathTests(sketch);
  };

  sketch.draw = () => {
    sketch.background(
      0
    );
    sketch.fill(
      255
    );
    sketch.rect(
      x,
      y,
      50,
      50
    );
  };
}

const myp5 = new p5(
  s
);

myp5.createGraphics(10, 10).ellipse(5, 5, 5);

function mathTests(sketch: p5) {
  // $ExpectType Vector
  p5.Vector.cross(sketch.createVector(1, 0), sketch.createVector(0, 1));

  // $ExpectType Vector
  p5.Vector.mult(sketch.createVector(1, 1), 2);
  // $ExpectType Vector
  p5.Vector.mult(sketch.createVector(1, 1), sketch.createVector(2, 3, 4));
  // $ExpectType Vector
  p5.Vector.mult(sketch.createVector(1, 1), [2, 3, 4]);
  // $ExpectType Vector
  p5.Vector.div(sketch.createVector(1, 1), 2);
  // $ExpectType Vector
  p5.Vector.div(sketch.createVector(1, 1), sketch.createVector(2, 3, 4));
  // $ExpectType Vector
  p5.Vector.div(sketch.createVector(1, 1), [2, 3, 4]);
  // $ExpectType Vector
  p5.Vector.rotate(sketch.createVector(1, 1), sketch.PI / 2);

  const target = sketch.createVector();

  // $ExpectType Vector
  p5.Vector.mult(sketch.createVector(1, 1), 2, target);
  // $ExpectType Vector
  p5.Vector.mult(sketch.createVector(1, 1), sketch.createVector(2, 3, 4), target);
  // $ExpectType Vector
  p5.Vector.mult(sketch.createVector(1, 1), [2, 3, 4], target);
  // $ExpectType Vector
  p5.Vector.div(sketch.createVector(1, 1), 2, target);
  // $ExpectType Vector
  p5.Vector.div(sketch.createVector(1, 1), sketch.createVector(2, 3, 4), target);
  // $ExpectType Vector
  p5.Vector.div(sketch.createVector(1, 1), [2, 3, 4], target);
  // $ExpectType Vector
  p5.Vector.rotate(sketch.createVector(1, 1), sketch.PI / 2, target);
}
