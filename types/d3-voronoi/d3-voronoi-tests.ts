/**
 * Typescript definition tests for d3/d3-voronoi module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Voronoi from 'd3-voronoi';

// ---------------------------------------------------------------------
// Preparatory Steps
// ---------------------------------------------------------------------

let extent: [[number, number], [number, number]];
let size: [number, number];
let coordinates: [number, number];

let num: number;
let numArray: number[];

interface VoronoiTestDatum {
    x: number;
    y: number;
}

let testData: VoronoiTestDatum[] = [
    { x: 10, y: 10 },
    { x: 20, y: 10 },
    { x: 10, y: 20 },
    { x: 20, y: 20 },
    { x: 50, y: 40 },
    { x: 30, y: 15 }
];
let testDatum: VoronoiTestDatum;

let numberAccessor: (d: VoronoiTestDatum) => number;

let edges: Array<d3Voronoi.VoronoiEdge<VoronoiTestDatum>>;
let edge: d3Voronoi.VoronoiEdge<VoronoiTestDatum>;
let cells: Array<d3Voronoi.VoronoiCell<VoronoiTestDatum>>;
let cell: d3Voronoi.VoronoiCell<VoronoiTestDatum>;
let site: d3Voronoi.VoronoiSite<VoronoiTestDatum>;

let polygons: Array<d3Voronoi.VoronoiPolygon<VoronoiTestDatum>>;
let polygon: d3Voronoi.VoronoiPolygon<VoronoiTestDatum>;

let triangles: Array<d3Voronoi.VoronoiTriangle<VoronoiTestDatum>>;
let triangle: d3Voronoi.VoronoiTriangle<VoronoiTestDatum>;

let links: Array<d3Voronoi.VoronoiLink<VoronoiTestDatum>>;
let link: d3Voronoi.VoronoiLink<VoronoiTestDatum>;

// ---------------------------------------------------------------------
// Test Supporting Basic Interfaces/Type Aliases
// ---------------------------------------------------------------------

// VoronoiPoint -------------------------------------------------------

let point: d3Voronoi.VoronoiPoint;

point[0] = 10; // x-coordinate
point[1] = 10; // y-coordinate

point = [10, 10];
// point = [10]; // fails, second element for y-coordinate missing
// point = ['a', 'b']; // fails, wrong element type

// VoronoiPointPair ---------------------------------------------------

let pointPair: d3Voronoi.VoronoiPointPair;

pointPair[0][0] = 10; // x-coordinate of first point
pointPair[0][1] = 10; // y-coordinate of first point
pointPair[1][0] = 20; // x-coordinate of second point
pointPair[1][1] = 10; // y-coordinate of second point

pointPair = [[10, 10], [50, 50]];

// pointPair = [[10, 10]]; // fails, second point coordinates missing
// pointPair = [[10, 10], [50]]; // fails, one element is not of type [number, number]
// pointPair = [[10], [50, 50]]; // fails, one element is not of type [number, number]
// pointPair = [['a', 10], [50, 50]]; // fails, one element is not of type [number, number]

// VoronoiPolygon -------------------------------------------------------

let voronoiPolygon: d3Voronoi.VoronoiPolygon<VoronoiTestDatum>;

voronoiPolygon[0][0] = 10; // x-coordinate of first point
voronoiPolygon[0][1] = 10; // y-coordinate of first point
voronoiPolygon[1][0] = 20; // x-coordinate of second point
voronoiPolygon[1][1] = 10; // y-coordinate of second point
voronoiPolygon[2][0] = 30; // x-coordinate of third point
voronoiPolygon[2][1] = 30; // y-coordinate of third point
voronoiPolygon[3][0] = 5; // x-coordinate of fourth point
voronoiPolygon[3][1] = 40; // y-coordinate of fourth point

voronoiPolygon.data = { x: 15, y: 25 };

// ---------------------------------------------------------------------
// VoronoiLayout
// ---------------------------------------------------------------------

// Create layout =======================================================

let defaultVoronoiLayout: d3Voronoi.VoronoiLayout<[number, number]>;
defaultVoronoiLayout = d3Voronoi.voronoi();

let voronoiLayout: d3Voronoi.VoronoiLayout<VoronoiTestDatum>;
voronoiLayout = d3Voronoi.voronoi<VoronoiTestDatum>();

// Configure layout ====================================================

//  x(...) -------------------------------------------------------------

voronoiLayout = voronoiLayout.x(d => d.x); // data type of d is VoronoiTestDatum

numberAccessor = voronoiLayout.x();

//  y(...) -------------------------------------------------------------

voronoiLayout = voronoiLayout.y(d => d.y); // data type of d is VoronoiTestDatum

numberAccessor = voronoiLayout.y();

//  extent(...) --------------------------------------------------------

voronoiLayout = voronoiLayout.extent([[0, 0], [60, 60]]);
extent = voronoiLayout.extent();

// size(...) -----------------------------------------------------------

voronoiLayout = voronoiLayout.size([60, 60]);
size = voronoiLayout.size();

// Use layout ==========================================================

// Create VoronoiDiagram -----------------------------------------------

let defaultVoronoiDiagram: d3Voronoi.VoronoiDiagram<[number, number]>;

defaultVoronoiDiagram = defaultVoronoiLayout([[10, 10], [10, 20], [15, 30], [40, 10], [40, 40]]);

let voronoiDiagram: d3Voronoi.VoronoiDiagram<VoronoiTestDatum>;
voronoiDiagram = voronoiLayout(testData);

// Polygons ------------------------------------------------------------

// generated from Layout
polygons = voronoiLayout.polygons(testData);

// Triangles -----------------------------------------------------------

// generated from Layout
triangles = voronoiLayout.triangles(testData);

// Links ---------------------------------------------------------------

// generated from Layout
links = voronoiLayout.links(testData);

// ---------------------------------------------------------------------
// Use VoronoiDiagram
// ---------------------------------------------------------------------

// edges() and VoronoiEdge ==============================================

edges = voronoiDiagram.edges;

edge = edges[0];

coordinates = edge[0]; // source point coordinates
coordinates = edge[1]; // source point coordinates

site = edge.left;
site = edge.right;

// cells() VoronoiCell =================================================

cells = voronoiDiagram.cells;

cell = cells[0];

site = cell.site;

numArray = cell.halfEdges;

// VoronoiSite interface ===============================================

num = site[0]; // site point x-coordinate
num = site[1]; // site point y-coordinate

num = site.index;

testDatum = site.data;

// polygons() and VoronoiPolygon =========================================

// generated from diagram
polygons = voronoiDiagram.polygons();

polygon = polygons[0];

coordinates = polygon[0];

testDatum = polygon.data;

// triangles() and VoronoiTriangle =======================================

// generated from diagram
triangles = voronoiDiagram.triangles();

triangle = triangles[0];

testDatum = triangle[0];
testDatum = triangle[1];
testDatum = triangle[2];

// Links() and VoronoiLinks ==============================================

// generated from diagram
links = voronoiDiagram.links();

link = links[0];

testDatum = link.source;
testDatum = link.target;

// find() ===============================================================

let nearestSite: d3Voronoi.VoronoiSite<VoronoiTestDatum> | null;
let wrongSiteDataType: d3Voronoi.VoronoiSite<[number, number]> | null;

// Without search radius
nearestSite = voronoiDiagram.find(10, 50);

// With search radius
nearestSite = voronoiDiagram.find(10, 50, 20);

// wrong data type
// wrongSiteDataType = voronoiDiagram.find(10, 50); // fails, due to data type mismatch
