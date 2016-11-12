// Type definitions for voronoi-diagram 1.0.1
// Project: https://github.com/mikolalysenko/voronoi-diagram
// Definitions by: Michael Neu <https://github.com/michaelneu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "voronoi-diagram" {
	type Point = number[];
	type Cell = number[];
	type Position = number[];

	interface VoronoiDiagram {
		cells: Cell[];
		positions: Position[];
	}

	function voronoi(points: Point[]) : VoronoiDiagram;
	export = voronoi;
}