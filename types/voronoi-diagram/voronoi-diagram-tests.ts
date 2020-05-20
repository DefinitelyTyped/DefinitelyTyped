import voronoi = require("voronoi-diagram");

const x: voronoi.Point = [1, 2];

let points: voronoi.Point[] = [
    x,
    [1, 1],
    [2, 2],
    [3, 3]
];

let diagram = voronoi(points);

let firstCell = diagram.cells[0],
    firstPosition = diagram.positions[0];
