import Voronoi, {Diagram} from "voronoi";

const voronoi: Voronoi = new Voronoi();
const bbox = {xl: 0, xr: 800, yt: 0, yb: 600}; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
const sites = [ {x: 200, y: 200}, {x: 50, y: 250}, {x: 400, y: 100} /* , ... */ ];

const diagram: Diagram = voronoi.compute(sites, bbox);
diagram.vertices; // $ExpectType Vertex[]
diagram.edges; // $ExpectType Edge[]
diagram.cells; // $ExpectType Cell[]
diagram.execTime; // $ExpectType number
