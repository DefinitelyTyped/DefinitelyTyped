declare namespace voronoi {
    type Point = number[];
    type Cell = number[];

    interface VoronoiDiagram {
        cells: Cell[];
        positions: Point[];
    }
}

declare function voronoi(points: voronoi.Point[]): voronoi.VoronoiDiagram;

export = voronoi;
