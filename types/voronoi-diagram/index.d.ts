// Type definitions for voronoi-diagram 1.0.1
// Project: https://github.com/mikolalysenko/voronoi-diagram
// Definitions by: Michael Neu <https://github.com/michaelneu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace voronoi {
	type Point = number[];
	type Cell = number[];

	interface VoronoiDiagram {
		cells: Cell[];
		positions: Point[];
	}
}

declare function voronoi(points: voronoi.Point[]) : voronoi.VoronoiDiagram;

export = voronoi;