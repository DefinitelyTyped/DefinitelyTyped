// Type definitions test file for clipper-lib
// Project: https://github.com/junmer/clipper-lib

import * as ClipperLib from 'clipper-lib';

// ============================
// Module-level exports
// ============================

// $ExpectType string
const ver = ClipperLib.version;

// Configuration flags - read-only, so we only test reading them
// $ExpectType boolean
ClipperLib.use_lines;

// $ExpectType boolean
ClipperLib.use_xyz;

// ============================
// IntPoint - Basic Construction
// ============================

// $ExpectType IntPoint
const pt1 = new ClipperLib.IntPoint();

// $ExpectType IntPoint
const pt2 = new ClipperLib.IntPoint(10, 20);

// $ExpectType IntPoint
const pt3 = new ClipperLib.IntPoint(10, 20, 30);

// $ExpectType IntPoint
const pt4 = new ClipperLib.IntPoint(pt2);

const dp1 = new ClipperLib.DoublePoint(10.5, 20.5);
// $ExpectType IntPoint
const pt5 = new ClipperLib.IntPoint(dp1);

// IntPoint coordinate access
// $ExpectType number
pt2.X;
// $ExpectType number
pt2.Y;
// $ExpectType number | undefined
pt3.Z;

// IntPoint static methods
// $ExpectType boolean
ClipperLib.IntPoint.op_Equality(pt1, pt2);
// $ExpectType boolean
ClipperLib.IntPoint.op_Inequality(pt1, pt2);

// ============================
// IntRect - Bounding Rectangle
// ============================

// $ExpectType IntRect
const rect1 = new ClipperLib.IntRect();

// $ExpectType IntRect
const rect2 = new ClipperLib.IntRect(0, 0, 100, 100);

// $ExpectType IntRect
const rect3 = new ClipperLib.IntRect(rect2);

// IntRect properties
// $ExpectType number
rect2.left;
// $ExpectType number
rect2.top;
// $ExpectType number
rect2.right;
// $ExpectType number
rect2.bottom;

rect2.left = 5;
rect2.right = 95;
rect2.top = 5;
rect2.bottom = 95;

// ============================
// DoublePoint - Floating Point
// ============================

// $ExpectType DoublePoint
const dp2 = new ClipperLib.DoublePoint();

// $ExpectType DoublePoint
const dp3 = new ClipperLib.DoublePoint(10.5, 20.5);

// $ExpectType DoublePoint
const dp4 = new ClipperLib.DoublePoint(dp3);

// $ExpectType DoublePoint
const dp5 = new ClipperLib.DoublePoint(pt2);

// DoublePoint properties
// $ExpectType number
dp3.X;
// $ExpectType number
dp3.Y;

// ============================
// Path & Paths - Type Aliases
// ============================

const path: ClipperLib.Path = [
    { X: 10, Y: 10 },
    { X: 110, Y: 10 },
    { X: 110, Y: 110 },
    { X: 10, Y: 110 }
];

const paths: ClipperLib.Paths = [path];

const multiplePaths: ClipperLib.Paths = [
    [{ X: 10, Y: 10 }, { X: 110, Y: 10 }, { X: 110, Y: 110 }, { X: 10, Y: 110 }],
    [{ X: 20, Y: 20 }, { X: 100, Y: 20 }, { X: 100, Y: 100 }, { X: 20, Y: 100 }]
];

// ============================
// Enumerations - ClipType
// ============================

// $ExpectType ClipType.ctIntersection
const clipIntersection = ClipperLib.ClipType.ctIntersection;
// $ExpectType ClipType.ctUnion
const clipUnion = ClipperLib.ClipType.ctUnion;
// $ExpectType ClipType.ctDifference
const clipDifference = ClipperLib.ClipType.ctDifference;
// $ExpectType ClipType.ctXor
const clipXor = ClipperLib.ClipType.ctXor;

// ============================
// Enumerations - PolyType
// ============================

// $ExpectType PolyType.ptSubject
const polySubject = ClipperLib.PolyType.ptSubject;
// $ExpectType PolyType.ptClip
const polyClip = ClipperLib.PolyType.ptClip;

// ============================
// Enumerations - PolyFillType
// ============================

// $ExpectType PolyFillType.pftEvenOdd
const fillEvenOdd = ClipperLib.PolyFillType.pftEvenOdd;
// $ExpectType PolyFillType.pftNonZero
const fillNonZero = ClipperLib.PolyFillType.pftNonZero;
// $ExpectType PolyFillType.pftPositive
const fillPositive = ClipperLib.PolyFillType.pftPositive;
// $ExpectType PolyFillType.pftNegative
const fillNegative = ClipperLib.PolyFillType.pftNegative;

// ============================
// Enumerations - JoinType
// ============================

// $ExpectType JoinType.jtSquare
const joinSquare = ClipperLib.JoinType.jtSquare;
// $ExpectType JoinType.jtRound
const joinRound = ClipperLib.JoinType.jtRound;
// $ExpectType JoinType.jtMiter
const joinMiter = ClipperLib.JoinType.jtMiter;

// ============================
// Enumerations - EndType
// ============================

// $ExpectType EndType.etOpenSquare
const endOpenSquare = ClipperLib.EndType.etOpenSquare;
// $ExpectType EndType.etOpenRound
const endOpenRound = ClipperLib.EndType.etOpenRound;
// $ExpectType EndType.etOpenButt
const endOpenButt = ClipperLib.EndType.etOpenButt;
// $ExpectType EndType.etClosedLine
const endClosedLine = ClipperLib.EndType.etClosedLine;
// $ExpectType EndType.etClosedPolygon
const endClosedPolygon = ClipperLib.EndType.etClosedPolygon;

// ============================
// Enumerations - Direction
// ============================

// $ExpectType Direction.dRightToLeft
const dirRightToLeft = ClipperLib.Direction.dRightToLeft;
// $ExpectType Direction.dLeftToRight
const dirLeftToRight = ClipperLib.Direction.dLeftToRight;

// ============================
// PolyNode & PolyTree
// ============================

// $ExpectType PolyTree
const polyTree = new ClipperLib.PolyTree();

// $ExpectType PolyNode | null
const firstChild = polyTree.GetFirst();

// $ExpectType number
const totalCount = polyTree.Total();

// $ExpectType void
polyTree.Clear();

// PolyNode methods
const polyNode = new ClipperLib.PolyNode();

// $ExpectType boolean
const isHole = polyNode.IsHoleNode();

// $ExpectType number
const childCount = polyNode.ChildCount();

// $ExpectType Path
const contour = polyNode.Contour();

// $ExpectType void
polyNode.AddChild(new ClipperLib.PolyNode());

// $ExpectType PolyNode | null
const nextNode = polyNode.GetNext();

// $ExpectType PolyNode | null
const siblingUp = polyNode.GetNextSiblingUp();

// $ExpectType PolyNode[]
const children = polyNode.Childs();

// $ExpectType PolyNode | null
const parent = polyNode.Parent();

// $ExpectType boolean
const isHole2 = polyNode.IsHole();

// PolyNode properties
// $ExpectType PolyNode | null
polyNode.m_Parent;
// $ExpectType Path
polyNode.m_polygon;
// $ExpectType number
polyNode.m_Index;
// $ExpectType JoinType
polyNode.m_jointype;
// $ExpectType EndType
polyNode.m_endtype;
// $ExpectType PolyNode[]
polyNode.m_Childs;
// $ExpectType boolean
polyNode.IsOpen;

// ============================
// Clipper - Basic Construction & Properties
// ============================

// $ExpectType Clipper
const clipper1 = new ClipperLib.Clipper();

// With initialization options
// $ExpectType Clipper
const clipper2 = new ClipperLib.Clipper(ClipperLib.Clipper.ioReverseSolution);

// $ExpectType Clipper
const clipper3 = new ClipperLib.Clipper(
    ClipperLib.Clipper.ioStrictlySimple | ClipperLib.Clipper.ioPreserveCollinear
);

// $ExpectType Clipper
const clipper4 = new ClipperLib.Clipper(1 | 2 | 4);

// Clipper static constants
// $ExpectType number
ClipperLib.Clipper.ioReverseSolution;
// $ExpectType number
ClipperLib.Clipper.ioStrictlySimple;
// $ExpectType number
ClipperLib.Clipper.ioPreserveCollinear;

// Clipper properties
clipper1.ReverseSolution = true;
clipper1.StrictlySimple = true;
clipper1.PreserveCollinear = false;

clipper1.ZFillFunction = (bot1, top1, bot2, top2, pt) => {
    pt.Z = ((bot1.Z || 0) + (top1.Z || 0)) / 2;
};

clipper1.ZFillFunction = null;

// ============================
// Clipper - Adding Paths
// ============================

// $ExpectType boolean
const added1 = clipper1.AddPath(path, ClipperLib.PolyType.ptSubject, true);

// $ExpectType boolean
const added2 = clipper1.AddPath(path, ClipperLib.PolyType.ptClip, false);

// $ExpectType boolean
const added3 = clipper1.AddPaths(paths, ClipperLib.PolyType.ptSubject, true);

// $ExpectType boolean
const added4 = clipper1.AddPaths(multiplePaths, ClipperLib.PolyType.ptClip, true);

// $ExpectType void
clipper1.Clear();

// ============================
// Clipper - Execute Operations
// ============================

const solution: ClipperLib.Paths = [];

// Basic execute with Paths
// $ExpectType boolean
const executed1 = clipper1.Execute(ClipperLib.ClipType.ctIntersection, solution);

// Execute with fill types
// $ExpectType boolean
const executed2 = clipper1.Execute(
    ClipperLib.ClipType.ctUnion,
    solution,
    ClipperLib.PolyFillType.pftEvenOdd,
    ClipperLib.PolyFillType.pftEvenOdd
);

// Execute with PolyTree
const treeSolution = new ClipperLib.PolyTree();

// $ExpectType boolean
const executed3 = clipper1.Execute(ClipperLib.ClipType.ctDifference, treeSolution);

// $ExpectType boolean
const executed4 = clipper1.Execute(
    ClipperLib.ClipType.ctXor,
    treeSolution,
    ClipperLib.PolyFillType.pftNonZero,
    ClipperLib.PolyFillType.pftNonZero
);

// ============================
// Clipper - Static Utility Functions
// ============================

// GetBounds
// $ExpectType IntRect
const bounds = ClipperLib.Clipper.GetBounds(paths);

// Round
// $ExpectType number
const rounded = ClipperLib.Clipper.Round(10.6);

// Orientation
// $ExpectType boolean
const oriented = ClipperLib.Clipper.Orientation(path);

// Area
// $ExpectType number
const area = ClipperLib.Clipper.Area(path);

// PointInPolygon
const testPt = new ClipperLib.IntPoint(50, 50);
// $ExpectType number
const pointInPoly = ClipperLib.Clipper.PointInPolygon(testPt, path);

// SimplifyPolygon
// $ExpectType Paths
const simplified1 = ClipperLib.Clipper.SimplifyPolygon(path);

// $ExpectType Paths
const simplified2 = ClipperLib.Clipper.SimplifyPolygon(
    path,
    ClipperLib.PolyFillType.pftNonZero
);

// SimplifyPolygons
// $ExpectType Paths
const simplified3 = ClipperLib.Clipper.SimplifyPolygons(paths);

// $ExpectType Paths
const simplified4 = ClipperLib.Clipper.SimplifyPolygons(
    paths,
    ClipperLib.PolyFillType.pftPositive
);

// CleanPolygon
// $ExpectType Path
const cleaned1 = ClipperLib.Clipper.CleanPolygon(path);

// $ExpectType Path
const cleaned2 = ClipperLib.Clipper.CleanPolygon(path, 1.415);

// CleanPolygons
// $ExpectType Paths
const cleaned3 = ClipperLib.Clipper.CleanPolygons(paths);

// $ExpectType Paths
const cleaned4 = ClipperLib.Clipper.CleanPolygons(paths, 1.0);

// Minkowski operations
// $ExpectType Paths
const minkowskiResult1 = ClipperLib.Clipper.Minkowski(path, path, true, true);

// $ExpectType Paths
const minkowskiSum1 = ClipperLib.Clipper.MinkowskiSum(path, path, true);

// $ExpectType Paths
const minkowskiSum2 = ClipperLib.Clipper.MinkowskiSum(path, paths, false);

// $ExpectType Paths
const minkowskiDiff = ClipperLib.Clipper.MinkowskiDiff(path, path);

// PolyTree conversions
// $ExpectType Paths
const convertedPaths = ClipperLib.Clipper.PolyTreeToPaths(treeSolution);

// $ExpectType Paths
const openPaths = ClipperLib.Clipper.OpenPathsFromPolyTree(treeSolution);

// $ExpectType Paths
const closedPaths = ClipperLib.Clipper.ClosedPathsFromPolyTree(treeSolution);

// Path reversal
// $ExpectType void
ClipperLib.Clipper.ReversePath(path);

// $ExpectType void
ClipperLib.Clipper.ReversePaths(paths);

// Distance calculations
// $ExpectType number
const distSqrd = ClipperLib.Clipper.DistanceSqrd(pt1, pt2);

// $ExpectType number
const distFromLine = ClipperLib.Clipper.DistanceFromLineSqrd(pt1, pt2, pt3);

// TranslatePath
const delta = new ClipperLib.IntPoint(10, 20);
// $ExpectType Path
const translated = ClipperLib.Clipper.TranslatePath(path, delta);

// ============================
// ClipperOffset - Construction & Properties
// ============================

// $ExpectType ClipperOffset
const offset1 = new ClipperLib.ClipperOffset();

// $ExpectType ClipperOffset
const offset2 = new ClipperLib.ClipperOffset(2.0);

// $ExpectType ClipperOffset
const offset3 = new ClipperLib.ClipperOffset(2.0, 0.25);

// ClipperOffset static constants
// $ExpectType number
ClipperLib.ClipperOffset.two_pi;
// $ExpectType number
ClipperLib.ClipperOffset.def_arc_tolerance;

// Properties
offset1.MiterLimit = 2.0;
offset1.MiterLimit = 5.0;

offset1.ArcTolerance = 0.25;
offset1.ArcTolerance = 1.0;

// ============================
// ClipperOffset - Adding Paths
// ============================

// $ExpectType void
offset1.AddPath(path, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);

// $ExpectType void
offset1.AddPath(path, ClipperLib.JoinType.jtSquare, ClipperLib.EndType.etOpenButt);

// $ExpectType void
offset1.AddPath(path, ClipperLib.JoinType.jtMiter, ClipperLib.EndType.etOpenRound);

// $ExpectType void
offset1.AddPaths(paths, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedLine);

// $ExpectType void
offset1.Clear();

// ============================
// ClipperOffset - Execute
// ============================

const offsetSolution: ClipperLib.Paths = [];

// $ExpectType void
offset1.Execute(offsetSolution, 10);

// $ExpectType void
offset1.Execute(offsetSolution, -5);

// With PolyTree
const offsetTreeSolution = new ClipperLib.PolyTree();

// $ExpectType void
offset1.Execute(offsetTreeSolution, 10);

// Static Round method
// $ExpectType number
const offsetRounded = ClipperLib.ClipperOffset.Round(10.6);

// ============================
// ExPolygon
// ============================

// $ExpectType ExPolygon
const exPoly = new ClipperLib.ExPolygon();

exPoly.outer = path;
exPoly.holes = [path];

// $ExpectType Path
exPoly.outer;
// $ExpectType Path[]
exPoly.holes;

// $ExpectType ExPolygons
const exPolys = ClipperLib.ExPolygons();

// ============================
// Utility Functions & Constants
// ============================

// Math utility functions
// $ExpectType number
const abs64 = ClipperLib.Math_Abs_Int64(100);

// $ExpectType number
const abs32 = ClipperLib.Math_Abs_Int32(-50);

// $ExpectType number
const absDouble = ClipperLib.Math_Abs_Double(-10.5);

// $ExpectType number
const maxInt32 = ClipperLib.Math_Max_Int32_Int32(10, 20);

// Cast functions
// $ExpectType number
const castInt32 = ClipperLib.Cast_Int32(10.5);

// $ExpectType number
const castInt64 = ClipperLib.Cast_Int64(10.5);

// Utility functions
// $ExpectType void
ClipperLib.Clear(paths);

// Constants
// $ExpectType number
const pi = ClipperLib.PI;

// $ExpectType number
const pi2 = ClipperLib.PI2;

// ============================
// JS Namespace - Utility Functions
// ============================

// Area calculations
// $ExpectType number
const areaOfPoly = ClipperLib.JS.AreaOfPolygon(path);

// $ExpectType number
const areaOfPolys = ClipperLib.JS.AreaOfPolygons(paths);

// Bounds calculations
// $ExpectType IntRect
const boundsOfPath = ClipperLib.JS.BoundsOfPath(path);

// $ExpectType IntRect
const boundsOfPaths = ClipperLib.JS.BoundsOfPaths(paths);

// Clone operations
// $ExpectType Path
const clonedPath = ClipperLib.JS.Clone(path);

// $ExpectType Paths
const clonedPaths = ClipperLib.JS.Clone(paths);

// Cleaning operations
// $ExpectType Path
const cleanedPath = ClipperLib.JS.Clean(path, 1.5);

// Lightening (simplification)
// $ExpectType Path
const lightenedPath = ClipperLib.JS.Lighten(path, 0.5);

// $ExpectType Paths
const lightenedPaths = ClipperLib.JS.Lighten(paths, 0.5);

// Perimeter calculations
// $ExpectType number
const perimeterOfPath = ClipperLib.JS.PerimeterOfPath(path, true);

// $ExpectType number
const perimeterOfPaths = ClipperLib.JS.PerimeterOfPaths(paths, true);

// Scaling operations
// $ExpectType void
ClipperLib.JS.ScaleUpPath(path, 1000);

// $ExpectType void
ClipperLib.JS.ScaleUpPaths(paths, 1000);

// $ExpectType void
ClipperLib.JS.ScaleDownPath(path, 1000);

// $ExpectType void
ClipperLib.JS.ScaleDownPaths(paths, 1000);

// ExPolygon conversions
// $ExpectType ExPolygons
const exPolygonsFromTree = ClipperLib.JS.PolyTreeToExPolygons(polyTree);

// $ExpectType Paths
const pathsFromExPolygons = ClipperLib.JS.ExPolygonsToPaths(exPolygonsFromTree);

// ============================
// Complex Real-World Usage Examples
// ============================

// Example 1: Intersection of two rectangles
const rect1Subject: ClipperLib.Paths = [
    [{ X: 10, Y: 10 }, { X: 110, Y: 10 }, { X: 110, Y: 110 }, { X: 10, Y: 110 }]
];
const rect2Clip: ClipperLib.Paths = [
    [{ X: 50, Y: 50 }, { X: 150, Y: 50 }, { X: 150, Y: 150 }, { X: 50, Y: 150 }]
];

const clipperExample = new ClipperLib.Clipper();
clipperExample.AddPaths(rect1Subject, ClipperLib.PolyType.ptSubject, true);
clipperExample.AddPaths(rect2Clip, ClipperLib.PolyType.ptClip, true);

const intersectionResult: ClipperLib.Paths = [];
const success1 = clipperExample.Execute(
    ClipperLib.ClipType.ctIntersection,
    intersectionResult,
    ClipperLib.PolyFillType.pftEvenOdd,
    ClipperLib.PolyFillType.pftEvenOdd
);

// Example 2: Union operation with PolyTree
const clipperUnion = new ClipperLib.Clipper();
clipperUnion.AddPaths(rect1Subject, ClipperLib.PolyType.ptSubject, true);
clipperUnion.AddPaths(rect2Clip, ClipperLib.PolyType.ptClip, true);

const unionTree = new ClipperLib.PolyTree();
const success2 = clipperUnion.Execute(
    ClipperLib.ClipType.ctUnion,
    unionTree,
    ClipperLib.PolyFillType.pftNonZero,
    ClipperLib.PolyFillType.pftNonZero
);

const unionPaths = ClipperLib.Clipper.PolyTreeToPaths(unionTree);

// Example 3: Polygon offsetting (buffering)
const offsetExample = new ClipperLib.ClipperOffset(2.0, 0.25);
offsetExample.AddPath(path, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);

const bufferResult: ClipperLib.Paths = [];
offsetExample.Execute(bufferResult, 10);

// Example 4: Line offsetting
const linePathOpen: ClipperLib.Path = [
    { X: 10, Y: 10 },
    { X: 50, Y: 50 },
    { X: 100, Y: 30 }
];

const lineOffset = new ClipperLib.ClipperOffset();
lineOffset.AddPath(linePathOpen, ClipperLib.JoinType.jtSquare, ClipperLib.EndType.etOpenButt);

const lineBuffer: ClipperLib.Paths = [];
lineOffset.Execute(lineBuffer, 5);

// Example 5: Simplifying a self-intersecting polygon
const selfIntersecting: ClipperLib.Path = [
    { X: 147, Y: 313 },
    { X: 247, Y: 34 },
    { X: 338, Y: 312 },
    { X: 86, Y: 123 },
    { X: 404, Y: 124 }
];

const simplifiedPoly = ClipperLib.Clipper.SimplifyPolygon(
    selfIntersecting,
    ClipperLib.PolyFillType.pftNonZero
);

// Example 6: Cleaning a polygon with near-duplicate vertices
const dirtyPath: ClipperLib.Path = [
    { X: 10, Y: 10 },
    { X: 11, Y: 11 },
    { X: 110, Y: 10 },
    { X: 110, Y: 110 },
    { X: 10, Y: 110 }
];

const cleanPath = ClipperLib.Clipper.CleanPolygon(dirtyPath, 1.5);

// Example 7: Checking if point is inside polygon
const polygonToTest: ClipperLib.Path = [
    { X: 0, Y: 0 },
    { X: 100, Y: 0 },
    { X: 100, Y: 100 },
    { X: 0, Y: 100 }
];

const pointToTest = new ClipperLib.IntPoint(50, 50);
const pointInsideResult = ClipperLib.Clipper.PointInPolygon(pointToTest, polygonToTest);
// pointInsideResult: -1 = on boundary, 0 = outside, 1 = inside

// Example 8: Getting bounds of multiple paths
const multipleBounds = ClipperLib.Clipper.GetBounds(multiplePaths);
const width = multipleBounds.right - multipleBounds.left;
const height = multipleBounds.bottom - multipleBounds.top;

// Example 9: Reversing polygon orientation
const polygonCW: ClipperLib.Path = [
    { X: 10, Y: 10 },
    { X: 110, Y: 10 },
    { X: 110, Y: 110 },
    { X: 10, Y: 110 }
];

const isCW = ClipperLib.Clipper.Orientation(polygonCW);
if (!isCW) {
    ClipperLib.Clipper.ReversePath(polygonCW);
}

// Example 10: StrictlySimple option
const strictClipper = new ClipperLib.Clipper();
strictClipper.StrictlySimple = true;
strictClipper.AddPath(path, ClipperLib.PolyType.ptSubject, true);

const strictSolution: ClipperLib.Paths = [];
strictClipper.Execute(ClipperLib.ClipType.ctUnion, strictSolution);

