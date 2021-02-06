import bresenham = require('bresenham');
import generatorFn = require('bresenham/generator');

// $ExpectType Point[]
bresenham(0, 0, 10, 12);

// $ExpectType void
bresenham(0, 0, 10, 12, (x: number, y: number) => {
});

// $ExpectType Generator<Point, any, unknown>
generatorFn(0, 0, 10, 12);
