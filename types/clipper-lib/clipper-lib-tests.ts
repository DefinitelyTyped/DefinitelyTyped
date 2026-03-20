import * as ClipperLib from "clipper-lib";

// IntPoint
const pt: ClipperLib.IntPoint = { X: 10, Y: 20 };
const ptZ: ClipperLib.IntPoint = { X: 10, Y: 20, Z: 5 };

// Path / Paths
const path: ClipperLib.Path = [
    { X: 0, Y: 0 },
    { X: 100, Y: 0 },
    { X: 100, Y: 100 },
    { X: 0, Y: 100 },
];
const paths: ClipperLib.Paths = [path];

// Enums
const ct: ClipperLib.ClipType = ClipperLib.ClipType.ctUnion;
const pt2: ClipperLib.PolyType = ClipperLib.PolyType.ptSubject;
const pft: ClipperLib.PolyFillType = ClipperLib.PolyFillType.pftEvenOdd;
const jt: ClipperLib.JoinType = ClipperLib.JoinType.jtRound;
const et: ClipperLib.EndType = ClipperLib.EndType.etClosedPolygon;


// Clipper - constructor
const cpr = new ClipperLib.Clipper();
const cpr2 = new ClipperLib.Clipper(
    ClipperLib.InitOptions.ioStrictlySimple | ClipperLib.InitOptions.ioPreserveCollinear,
);

// Clipper - instance methods
cpr.AddPath(path, ClipperLib.PolyType.ptSubject, true);
cpr.AddPaths(paths, ClipperLib.PolyType.ptClip, true);
const solution: ClipperLib.Paths = [];
const success: boolean = cpr.Execute(ClipperLib.ClipType.ctIntersection, solution);
const bounds: ClipperLib.IntRect = cpr.GetBounds();
cpr.Clear();

// Clipper - properties
cpr.PreserveCollinear = true;
cpr.ReverseSolution = false;
cpr.StrictlySimple = true;

// Clipper - static methods
const area: number = ClipperLib.Clipper.Area(path);
const cleaned: ClipperLib.Path = ClipperLib.Clipper.CleanPolygon(path, 1.1);
const cleanedPaths: ClipperLib.Paths = ClipperLib.Clipper.CleanPolygons(paths, 1.1);
const orientation: boolean = ClipperLib.Clipper.Orientation(path);
const inPoly: number = ClipperLib.Clipper.PointInPolygon(pt, path);
ClipperLib.Clipper.ReversePath(path);
ClipperLib.Clipper.ReversePaths(paths);
const simplified: ClipperLib.Paths = ClipperLib.Clipper.SimplifyPolygon(path);
const simplifiedPaths: ClipperLib.Paths = ClipperLib.Clipper.SimplifyPolygons(paths);

// Clipper - PolyTree
const polytree = new ClipperLib.PolyTree();
cpr.AddPath(path, ClipperLib.PolyType.ptSubject, true);
cpr.Execute(ClipperLib.ClipType.ctUnion, polytree);
const closedPaths: ClipperLib.Paths = ClipperLib.Clipper.ClosedPathsFromPolyTree(polytree);
const openPaths: ClipperLib.Paths = ClipperLib.Clipper.OpenPathsFromPolyTree(polytree);
const allPaths: ClipperLib.Paths = ClipperLib.Clipper.PolyTreeToPaths(polytree);
const total: number = polytree.Total();
const first: ClipperLib.PolyNode = polytree.GetFirst();
polytree.Clear();

// PolyNode
const node = new ClipperLib.PolyNode();
const childCount: number = node.ChildCount();
const childs: ClipperLib.PolyNode[] = node.Childs();
const contour: ClipperLib.Path = node.Contour();
const next: ClipperLib.PolyNode = node.GetNext();
const isHole: boolean = node.IsHole();
const parent: ClipperLib.PolyNode = node.Parent();
const isOpen: boolean = node.IsOpen;

// Clipper - Minkowski
const minkDiff: ClipperLib.Paths = ClipperLib.Clipper.MinkowskiDiff(path, path);
const minkSum: ClipperLib.Paths = ClipperLib.Clipper.MinkowskiSum(path, path, true);

// Clipper - deprecated OffsetPaths
const offsetted: ClipperLib.Paths = ClipperLib.Clipper.OffsetPaths(paths, 10);

// ClipperOffset
const co = new ClipperLib.ClipperOffset();
const co2 = new ClipperLib.ClipperOffset(2.0, 0.25);
co.AddPath(path, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
co.AddPaths(paths, ClipperLib.JoinType.jtSquare, ClipperLib.EndType.etClosedPolygon);
const offsetSolution: ClipperLib.Paths = [];
co.Execute(offsetSolution, 10);
co.ArcTolerance = 0.25;
co.MiterLimit = 2.0;
co.Clear();

// JS Helper functions
ClipperLib.JS.ScaleUpPath(path, 100);
ClipperLib.JS.ScaleUpPaths(paths, 100);
ClipperLib.JS.ScaleDownPath(path, 100);
ClipperLib.JS.ScaleDownPaths(paths, 100);
const areaOf: number = ClipperLib.JS.AreaOfPolygon(path);
const areasOf: number = ClipperLib.JS.AreaOfPolygons(paths);
const boundsPath: ClipperLib.IntRect = ClipperLib.JS.BoundsOfPath(path);
const boundsPaths: ClipperLib.IntRect = ClipperLib.JS.BoundsOfPaths(paths);
const cloned: ClipperLib.Paths = ClipperLib.JS.Clone(paths);
const cleanedJS: ClipperLib.Path = ClipperLib.JS.Clean(path, 1.0);
const lightened: ClipperLib.Path = ClipperLib.JS.Lighten(path, 1.0);
const perimPath: number = ClipperLib.JS.PerimeterOfPath(path, true);
const perimPaths: number = ClipperLib.JS.PerimeterOfPaths(paths, true);
const exPolys: ClipperLib.ExPolygons = ClipperLib.JS.PolyTreeToExPolygons(polytree);
const fromEx: ClipperLib.Paths = ClipperLib.JS.ExPolygonsToPaths(exPolys);
