/// <reference path="index.d.ts" />

import voronoi = require("voronoi-diagram");

let points = [
	[1, 1],
	[2, 2],
	[3, 3]
];

let diagram = voronoi(points);

let firstCell = diagram.cells[0],
	firstPosition = diagram.positions[0];