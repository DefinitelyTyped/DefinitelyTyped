// Type definitions for voronoi 1.0
// Project: https://github.com/gorhill/Javascript-Voronoi
// Definitions by: Nolan Woods <https://github.com/innovate-invent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Site {
    x: number;
    y: number;
}

interface Bounds {
    xl: number;
    xr: number;
    yt: number;
    yb: number;
}

interface Vertex {
    x: number;
    y: number;
}

interface Edge {
    lSite: Site;
    rSite: Site;
    va: Vertex;
    vb: Vertex;
}

interface HalfEdge {
    site: Site;
    edge: Edge;

    getStartpoint(): Vertex;

    getEndpoint(): Vertex;
}

interface Cell {
    site: Site;
    halfedges: HalfEdge[];
}

interface Diagram {
    vertices: Vertex[];
    edges: Edge[];
    cells: Cell[];
    execTime: number;
}

interface Voronoi {
    new(): Voronoi;

    compute(sites: Site[], bounds: Bounds): Diagram;

    recycle(diagram: Diagram): void;
}

export default Voronoi;
