/**
 * TypeScript type definitions for clipper-lib
 * Version: 6.4.2.2 (JavaScript implementation of Clipper 6)
 * 
 * The Clipper Library performs clipping and offsetting of both lines and polygons.
 * 
 * Features:
 * - Accepts all types of polygons including self-intersecting ones
 * - Supports multiple polygon filling rules (EvenOdd, NonZero, Positive, Negative)
 * - Very fast relative to other polygon clipping libraries
 * - Performs line and polygon offsetting (dilation/erosion)
 * - Numerically robust (uses integer coordinates to prevent floating-point errors)
 * - Free for use in both freeware and commercial applications
 * 
 * ## Key Concepts:
 * 
 * **Clipping:** The process of performing boolean operations (intersection, union,
 * difference, XOR) on polygon sets, typically intersecting subject paths with clip paths.
 * 
 * **Path/Contour:** An ordered sequence of vertices defining a single geometric contour,
 * which may be either open (lines) or closed (polygons).
 * 
 * **Orientation:** The direction (clockwise or counter-clockwise) that vertices progress
 * around a closed path. Important for polygon filling rules.
 * 
 * **Polygon Filling Rule:** Determines which regions bounded by paths are considered
 * "inside" (filled) and which are "outside" (unfilled). Supports EvenOdd, NonZero,
 * Positive, and Negative rules.
 * 
 * **Hole:** A closed region within a polygon that's not part of the polygon itself.
 * 
 * ## Typical Usage:
 * 
 * ```typescript
 * import * as ClipperLib from 'clipper-lib';
 * 
 * // Define subject and clip polygons
 * const subject = [[{X:10,Y:10},{X:110,Y:10},{X:110,Y:110},{X:10,Y:110}]];
 * const clip = [[{X:50,Y:50},{X:150,Y:50},{X:150,Y:150},{X:50,Y:150}]];
 * 
 * // Create clipper and add paths
 * const clipper = new ClipperLib.Clipper();
 * clipper.AddPaths(subject, ClipperLib.PolyType.ptSubject, true);
 * clipper.AddPaths(clip, ClipperLib.PolyType.ptClip, true);
 * 
 * // Execute clipping operation
 * const solution = new ClipperLib.Paths();
 * clipper.Execute(ClipperLib.ClipType.ctIntersection, solution,
 *   ClipperLib.PolyFillType.pftEvenOdd, ClipperLib.PolyFillType.pftEvenOdd);
 * 
 * // Process solution
 * for (const polygon of solution) {
 *   console.log('Polygon with', polygon.length, 'vertices');
 * }
 * ```
 * 
 * ## Offsetting Polygons:
 * 
 * ```typescript
 * // Create offset object for polygon dilation
 * const offset = new ClipperLib.ClipperOffset();
 * offset.MiterLimit = 2.0;
 * offset.ArcTolerance = 0.25;
 * 
 * // Add path to offset
 * offset.AddPath(polygon, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
 * 
 * // Execute offset (positive = expand, negative = shrink)
 * const offsetSolution = new ClipperLib.Paths();
 * offset.Execute(offsetSolution, 10);  // Expand by 10 units
 * ```
 * 
 * ## Important Notes:
 * 
 * - **Coordinate Range:** Paths must use integer coordinates between ±4503599627370495.
 *   For optimal performance, keep coordinates between ±47453132.
 * 
 * - **Numerical Robustness:** The library uses integer arithmetic exclusively to prevent
 *   floating-point precision errors that cause clipping failures.
 * 
 * - **Polygon Orientation:** For closed paths, vertex orientation must conform to the
 *   specified filling rule. Use Orientation() or ReversePath() to check/adjust.
 * 
 * - **Floating Point Conversion:** When working with floating-point coordinates,
 *   scale them to integers before clipping and scale results back down afterward.
 * 
 * - **Self-Intersections:** For best results, remove self-intersections from
 *   polygons before offsetting using SimplifyPolygon() or CleanPolygon().
 * 
 * ## Original Authors:
 * 
 * - **C# Clipper:** Angus Johnson (Copyright © 2010-2014)
 * - **JavaScript Port:** Timo (Copyright © 2012-2014)
 * - **License:** Boost Software License (http://www.boost.org/LICENSE_1_0.txt)
 * 
 * ## References:
 * 
 * - Clipper Project: {@link http://www.angusj.com/delphi/clipper.php}
 * - JSClipper on GitHub: {@link https://github.com/junmer/clipper-lib}
 * - Algorithm Paper: Vatti, "A generic solution to polygon clipping", 1992
 * 
 * @see {@link https://sourceforge.net/projects/jsclipper/}
 * @see {@link https://github.com/junmer/clipper-lib}
 * @see {@link http://www.angusj.com/delphi/clipper/documentation/}
 */
export const version: string;

/**
 * Enable/disable open path (line) clipping.
 * Enabled by default. Disabling provides approximately 5% performance improvement.
 */
export let use_lines: boolean;

/**
 * Enable/disable Z coordinate support in IntPoint.
 * When enabled, IntPoint has an optional Z member for custom coordinate handling.
 * Disabled by default due to minor performance cost.
 * See Clipper.ZFillFunction for custom Z value handling during clipping operations.
 */
export let use_xyz: boolean;


/**
 * 2D point with integer coordinates used to represent all vertices in the Clipper Library.
 *
 * Integer coordinates are deliberately chosen to preserve numerical robustness.
 * This prevents floating point precision errors that would cause occasional clipping failures.
 *
 * Coordinate range:
 * - Standard range: ±4503599627370495 (sqrt(2^106 -1)/2)
 * - Optimized range: ±47453132 (sqrt(2^53 -1)/2) provides 40-50% performance improvement
 *
 * @example
 * const point = new ClipperLib.IntPoint(10, 20);           // {X:10, Y:20}
 * const point2 = new ClipperLib.IntPoint();               // {X:0, Y:0}
 * const point3 = new ClipperLib.IntPoint(point);          // Clone of point
 * const point4 = new ClipperLib.IntPoint(doublePoint);    // Converted from DoublePoint
 *
 * @see {@link https://en.wikipedia.org/wiki/Numerical_robustness}
 */
export class IntPoint {
    /**
     * X coordinate (integer)
     */
    X: number;
    /**
     * Y coordinate (integer)
     */
    Y: number;
    /**
     * Z coordinate (optional, only available when use_xyz is enabled)
     * Used for custom coordinate handling via ZFillFunction
     */
    Z?: number;

    /**
     * Creates a new integer point at origin (0, 0)
     */
    constructor();
    /**
     * Creates a new integer point with specified X and Y coordinates
     */
    constructor(x: number, y: number);
    /**
     * Creates a new integer point with specified X, Y, and Z coordinates
     */
    constructor(x: number, y: number, z: number);
    /**
     * Creates a new integer point converted from a DoublePoint
     */
    constructor(dp: DoublePoint);
    /**
     * Creates a copy of another IntPoint
     */
    constructor(pt: IntPoint);

    /**
     * Tests if two points have equal coordinates
     */
    static op_Equality(a: IntPoint, b: IntPoint): boolean;
    /**
     * Tests if two points have different coordinates
     */
    static op_Inequality(a: IntPoint, b: IntPoint): boolean;
}

/**
 * Axis-aligned bounding rectangle with integer coordinates.
 * Used to represent the bounding box of polygon paths.
 *
 * @example
 * const bounds = ClipperLib.Clipper.GetBounds(paths);
 * bounds = {left:10, top:10, right:110, bottom:110}
 *
export class IntRect {
    left: number;
    top: number;
    right: number;
    bottom: number;

    /**
     * Creates a rectangle at origin with zero dimensions
     */
    constructor();
    /**
     * Creates a rectangle with specified coordinates
     */
    constructor(l: number, t: number, r: number, b: number);
    /**
     * Creates a copy of another IntRect
     */
    constructor(ir: IntRect);
}

/**
 * 2D point with floating point coordinates.
 * Used primarily for converting between floating point and integer coordinates.
 *
 * @example
 * const point = new ClipperLib.DoublePoint(10.5, 20.5);      // {X:10.5, Y:20.5}
 * const point2 = new ClipperLib.DoublePoint(intPoint);       // Converted from IntPoint
 * const intPoint = new ClipperLib.IntPoint(doublePoint);     // Rounded to integer
 */
export class DoublePoint {
    /**
     * X coordinate (floating point)
     */
    X: number;
    /**
     * Y coordinate (floating point)
     */
    Y: number;

    /**
     * Creates a new double point at origin (0, 0)
     */
    constructor();
    /**
     * Creates a new double point with specified X and Y coordinates
     */
    constructor(x: number, y: number);
    /**
     * Creates a copy of another DoublePoint
     */
    constructor(dp: DoublePoint);
    /**
     * Creates a double point from an IntPoint
     */
    constructor(ip: IntPoint);
}

/**
 * A Path is an ordered sequence of IntPoint vertices defining a single contour.
 * Paths may be open (lines bounded by 2 or more vertices) or closed (polygons).
 *
 * Path coordinate range:
 * Paths coordinates must be between ±4503599627370495, otherwise a range error
 * will be thrown when attempting to add the path to the Clipper object.
 *
 * @example
 * const path = [{X:10,Y:10}, {X:110,Y:10}, {X:110,Y:110}, {X:10,Y:110}];
 * const path2 = new ClipperLib.Path();  // Empty array []
 *
 * @see {@link #AddPath}
 * @see {@link #Paths}
 */
export type Path = IntPoint[];

/**
 * Paths is a collection of Path structures.
 * Fundamental structure containing an array of one or more Path structures.
 * Each Path represents a single contour (line or polygon).
 *
 * @example
 * const paths = [
 *   [{X:10,Y:10}, {X:110,Y:10}, {X:110,Y:110}, {X:10,Y:110}],  // Outer polygon
 *   [{X:20,Y:20}, {X:20,Y:100}, {X:100,Y:100}, {X:100,Y:20}]   // Hole polygon
 * ];
 * const paths2 = new ClipperLib.Paths();  // Empty array []
 *
 * @see {@link #AddPaths}
 * @see {@link #Path}
 */
export type Paths = Path[];

// ============================
// Enumerations
// ============================

/**
 * Boolean operation types for polygon clipping.
 *
 * There are four boolean operations:
 * - **ctIntersection (AND):** Create regions where both subject and clip polygons are filled
 * - **ctUnion (OR):** Create regions where either subject or clip polygons (or both) are filled
 * - **ctDifference (NOT):** Create regions where subject polygons are filled except where clip polygons are filled
 * - **ctXor (XOR):** Create regions where either subject or clip polygons are filled but not where both are filled
 *
 * All polygon clipping is performed by calling Clipper.Execute() with the specific boolean operation.
 *
 * @example
 * const solution = new ClipperLib.Paths();
 * const cpr = new ClipperLib.Clipper();
 * cpr.AddPaths(subjectPaths, ClipperLib.PolyType.ptSubject, true);
 * cpr.AddPaths(clipPaths, ClipperLib.PolyType.ptClip, true);
 * cpr.Execute(ClipperLib.ClipType.ctIntersection, solution);  // Intersection operation
 *
 * @see {@link #Execute}
 * @see {@link #PolyType}
 * @see {@link #PolyFillType}
 */
export enum ClipType {
    /**
     * Intersection (AND): Regions where both subject and clip polygons are filled
     */
    ctIntersection = 0,
    /**
     * Union (OR): Regions where either subject or clip polygons (or both) are filled
     */
    ctUnion = 1,
    /**
     * Difference (NOT): Regions where subject polygons are filled except where clip polygons are filled
     */
    ctDifference = 2,
    /**
     * Exclusive OR (XOR): Regions where either subject or clip polygons are filled but not both
     */
    ctXor = 3
}

/**
 * Polygon type assignment for AddPath/AddPaths operations.
 *
 * Boolean (clipping) operations are typically applied to two sets of polygons:
 * - Subject polygons: The primary polygons to be clipped or offset
 * - Clip polygons: The polygons used to clip subject polygons
 *
 * Note: Subject paths may be either open (lines) or closed (polygons), but clipping
 * paths must always be closed. Clipper allows polygons to clip both lines and other
 * polygons, but doesn't allow lines to clip either lines or polygons.
 *
 * Union operations can be performed on one set or both sets of polygons, but all other
 * boolean operations require both sets of polygons to derive meaningful solutions.
 *
 * @example
 * cpr.AddPaths(subjectPaths, ClipperLib.PolyType.ptSubject, true);
 * cpr.AddPaths(clipPaths, ClipperLib.PolyType.ptClip, true);
 *
 * @see {@link #AddPath}
 * @see {@link #AddPaths}
 * @see {@link #ClipType}
 */
export enum PolyType {
    /**
     * Subject polygon set - the primary polygons to be clipped
     */
    ptSubject = 0,
    /**
     * Clip polygon set - polygons used to define the clipping region
     */
    ptClip = 1
}

/**
 * Polygon filling rules determine which regions are considered "inside" a polygon.
 *
 * The simplest filling rule is Even-Odd: starting from a point outside, whenever
 * a contour is crossed, filling either starts (if stopped) or stops (if started).
 *
 * Other filling rules (Non-Zero, Positive, Negative) use edge direction and winding
 * numbers to determine filling, based on the order vertices are declared.
 *
 * Most graphics libraries (AGG, Android, Cairo, GDI+, OpenGL, Quartz, SVG) support
 * Even-Odd and Non-Zero filling. Some support all four rules.
 *
 * Key points:
 * - Edge direction has no effect on odd-ness or even-ness
 * - For Non-Zero filled polygons, hole orientation must be opposite that of outer polygons
 * - Solution polygons: outer=true orientation, hole=false orientation (unless ReverseSolution enabled)
 *
 * @example
 * // Even-Odd: All odd numbered sub-regions filled, even numbered not filled
 * cpr.Execute(ClipperLib.ClipType.ctUnion, solution,
 *   ClipperLib.PolyFillType.pftEvenOdd, ClipperLib.PolyFillType.pftEvenOdd);
 *
 * // Non-Zero: All non-zero sub-regions filled
 * cpr.Execute(ClipperLib.ClipType.ctUnion, solution,
 *   ClipperLib.PolyFillType.pftNonZero, ClipperLib.PolyFillType.pftNonZero);
 *
 * @see {@link #Execute}
 * @see {@link #Orientation}
 * @see {@link #ReverseSolution}
 */
export enum PolyFillType {
    /**
     * Even-Odd (Alternate): Odd numbered sub-regions are filled, even numbered are not
     */
    pftEvenOdd = 0,
    /**
     * Non-Zero (Winding): All non-zero sub-regions are filled
     */
    pftNonZero = 1,
    /**
     * Positive: All sub-regions with winding counts > 0 are filled
     */
    pftPositive = 2,
    /**
     * Negative: All sub-regions with winding counts < 0 are filled
     */
    pftNegative = 3
}

/**
 * Join types for offsetting path corners.
 *
 * When offsetting paths with ClipperOffset, the join type determines how corners
 * are handled when offsetting edges at acute angles.
 *
 * @example
 * const offset = new ClipperLib.ClipperOffset();
 * offset.AddPath(path, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
 *
 * @see {@link ClipperOffset}
 * @see {@link ClipperOffset.MiterLimit}
 * @see {@link ClipperOffset.ArcTolerance}
 */
export enum JoinType {
    /**
     * Square joins: Corners are squared at exactly 1 × delta
     */
    jtSquare = 0,
    /**
     * Round joins: Corners are rounded with arcs approximated by chords
     * Uses ArcTolerance to determine precision
     */
    jtRound = 1,
    /**
     * Miter joins: Corners are pointed with a limit to prevent spikes
     * Uses MiterLimit property to constrain miter distance (in multiples of delta)
     */
    jtMiter = 2
}

/**
 * End types for offset path termination.
 * Determines how open paths are ended when offset is applied.
 *
 * Note: With etClosedPolygon and etClosedLine, the path closure is the same
 * regardless of whether the first and last vertices match.
 *
 * @example
 * offset.AddPath(openPath, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etOpenRound);
 * offset.AddPath(closedPath, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
 *
 * @see {@link ClipperOffset.AddPath}
 * @see {@link ClipperOffset.AddPaths}
 */
export enum EndType {
    /**
     * Open Square: Ends are squared off and extended by delta units
     */
    etOpenSquare = 0,
    /**
     * Open Round: Ends are rounded off and extended by delta units
     */
    etOpenRound = 1,
    /**
     * Open Butt: Ends are squared off with no extension
     */
    etOpenButt = 2,
    /**
     * Closed Line: Ends are joined using JoinType and path filled as a polyline
     */
    etClosedLine = 3,
    /**
     * Closed Polygon: Ends are joined using JoinType and path filled as a polygon
     */
    etClosedPolygon = 4
}

/**
 * Direction of polygon vertex traversal.
 * Represents clockwise vs counter-clockwise orientation.
 *
 * @see {@link #Orientation}
 */
export enum Direction {
    /**
     * Right to Left direction
     */
    dRightToLeft = 0,
    /**
     * Left to Right direction
     */
    dLeftToRight = 1
}

/**
 * Internal edge enumeration for clipping algorithm
 * @internal
 */
export enum EdgeSide {
    /**
     * Left side of edge
     */
    esLeft = 0,
    /**
     * Right side of edge
     */
    esRight = 1
}

// ============================
// PolyTree and PolyNode
// ============================

/**
 * PolyNode represents a single polygon contour in a PolyTree
 */
export class PolyNode {
    m_Parent: PolyNode | null;
    m_polygon: Path;
    m_Index: number;
    m_jointype: JoinType;
    m_endtype: EndType;
    m_Childs: PolyNode[];
    IsOpen: boolean;

    IsHoleNode(): boolean;
    ChildCount(): number;
    Contour(): Path;
    AddChild(child: PolyNode): void;
    GetNext(): PolyNode | null;
    GetNextSiblingUp(): PolyNode | null;
    Childs(): PolyNode[];
    Parent(): PolyNode | null;
    IsHole(): boolean;
}

/**
 * PolyTree is a container for a hierarchical tree of polygons
 */
export class PolyTree extends PolyNode {
    m_AllPolys: PolyNode[];

    Clear(): void;
    GetFirst(): PolyNode | null;
    Total(): number;
}

// ============================
// ClipperBase
// ============================

/**
 * ClipperBase is an abstract base class for the Clipper class.
 * It encapsulates functionality common to both Clipper and ClipperOffset.
 * A ClipperBase object should not be instantiated directly.
 *
 * @internal
 */
export class ClipperBase {
    /**
     * Special value representing a horizontal edge
     * @internal
     */
    static horizontal: number;
    /**
     * Special marker value for skipped edges
     * @internal
     */
    static Skip: number;
    /**
     * Special marker value for unassigned output
     * @internal
     */
    static Unassigned: number;
    /**
     * Numerical tolerance for comparisons
     * @internal
     */
    static tolerance: number;
    /**
     * Lower range limit for numerical comparisons
     * @internal
     */
    static loRange: number;
    /**
     * Upper range limit for numerical comparisons
     * @internal
     */
    static hiRange: number;

    constructor();

    /**
     * Removes all paths from the Clipper/ClipperOffset object.
     * Allows the object to be reused for different clipping/offsetting operations.
     *
     * @example
     * cpr.Clear();  // Remove all subject and clip paths
     *
     * @see {@link AddPath}
     * @see {@link AddPaths}
     */
    Clear(): void;

    /**
     * Adds a single path (polygon or polyline) to the clipping operation.
     *
     * Any number of subject and clip paths can be added, either individually
     * via AddPath(), or as groups via AddPaths(), or using both methods.
     *
     * Path orientation requirements:
     * - Subject paths may be either open (lines) or closed (polygons)
     * - Clip paths must always be closed
     * - For closed paths, orientation should conform to the filling rule
     *   that will be passed to Execute()
     *
     * Return behavior:
     * The function returns false if the path is empty, almost empty, or invalid:
     * - Has less than 2 vertices
     * - Has 2 vertices but is not an open path
     * - All vertices are co-linear and it is not an open path
     *
     * @param pg Path to add (sequence of IntPoint vertices)
     * @param polyType Polygon type (ptSubject or ptClip)
     * @param closed true if path is closed (polygon), false if open (line)
     * @returns true if path was successfully added, false if invalid/empty
     *
     * @example
     * const path = [{X:10,Y:10}, {X:110,Y:10}, {X:110,Y:110}, {X:10,Y:110}];
     * const success = cpr.AddPath(path, ClipperLib.PolyType.ptSubject, true);
     *
     * if (!success) {
     *   console.log('Invalid path - too few vertices or co-linear');
     * }
     *
     * @see {@link AddPaths}
     * @see {@link #Clear}
     * @see {@link #PolyType}
     * @see {@link #Orientation}
     */
    AddPath(pg: Path, polyType: PolyType, closed: boolean): boolean;

    /**
     * Adds multiple paths to the clipping operation.
     *
     * Convenience method that calls AddPath() for each path in the array.
     * Useful when adding many paths of the same type at once.
     *
     * @param ppg Array of paths to add
     * @param polyType Polygon type for all paths (ptSubject or ptClip)
     * @param closed true if paths are closed (polygons), false if open (lines)
     * @returns true if at least one path was successfully added
     *
     * @example
     * const paths = [
     *   [{X:10,Y:10}, {X:110,Y:10}, {X:110,Y:110}, {X:10,Y:110}],
     *   [{X:20,Y:20}, {X:100,Y:20}, {X:100,Y:100}, {X:20,Y:100}]
     * ];
     *
     * cpr.AddPaths(paths, ClipperLib.PolyType.ptSubject, true);
     *
     * @see {@link AddPath}
     * @see {@link #Execute}
     */
    AddPaths(ppg: Paths, polyType: PolyType, closed: boolean): boolean;

    /**
     * Tests if an edge is horizontal (vertical in terms of Y change)
     * @internal
     */
    static IsHorizontal(e: TEdge): boolean;
    /**
     * Tests if two edges have equal slopes
     * @internal
     */
    static SlopesEqual(pt1: IntPoint, pt2: IntPoint, pt3: IntPoint, UseFullRange: boolean): boolean;
    /**
     * Tests if two edges have equal slopes (4-point version)
     * @internal
     */
    static SlopesEqual(pt1: IntPoint, pt2: IntPoint, pt3: IntPoint, pt4: IntPoint, UseFullRange: boolean): boolean;
    /**
     * Floating point tolerance check
     * @internal
     */
    static near_zero(val: number): boolean;
}

// ============================
// Clipper
// ============================

/**
 * Clipper is the main polygon clipping class encapsulating boolean operations.
 *
 * Clipper performs intersection, union, difference, and XOR (exclusive or) operations
 * on polygons (and lines). Multiple boolean operations can be performed on the same
 * input polygon sets by repeat calls to Execute().
 *
 * Key features:
 * - Accepts all types of polygons including self-intersecting ones
 * - Supports multiple polygon filling rules (EvenOdd, NonZero, Positive, Negative)
 * - Very fast relative to other clipping libraries
 * - Also performs line and polygon offsetting
 * - Numerically robust (uses integer coordinates to prevent floating-point errors)
 *
 * @example
 * const subj = [[{X:10,Y:10},{X:110,Y:10},{X:110,Y:110},{X:10,Y:110}]];
 * const clip = [[{X:50,Y:50},{X:150,Y:50},{X:150,Y:150},{X:50,Y:150}]];
 *
 * const cpr = new ClipperLib.Clipper();
 * cpr.AddPaths(subj, ClipperLib.PolyType.ptSubject, true);
 * cpr.AddPaths(clip, ClipperLib.PolyType.ptClip, true);
 *
 * const solution = new ClipperLib.Paths();
 * cpr.Execute(ClipperLib.ClipType.ctIntersection, solution);
 *
 * @see {@link #Overview}
 * @see {@link #ClipType}
 */
export class Clipper extends ClipperBase {
    /**
     * Initialization option flag: Reverse solution polygon orientations
     */
    static ioReverseSolution: number;
    /**
     * Initialization option flag: Return only strictly simple polygons
     */
    static ioStrictlySimple: number;
    /**
     * Initialization option flag: Preserve collinear vertices
     */
    static ioPreserveCollinear: number;

    /**
     * When true, polygons returned in the solution will have orientations opposite to their normal orientations.
     * Allows inverting the fill direction of clipped polygons.
     *
     * @example
     * cpr.ReverseSolution = true;  // Flip all solution polygon orientations
     *
     * @see {@link #Orientation}
     */
    ReverseSolution: boolean;

    /**
     * When true, returns only strictly simple polygons (simple polygons with no touching vertices or edges).
     *
     * Terminology:
     * - Simple polygon: Does not self-intersect
     * - Weakly simple: Simple polygon with 'touching' vertices or edges
     * - Strictly simple: Simple polygon with no touching vertices or edges
     *
     * Default: false (returns weakly simple polygons, faster)
     * Computationally expensive when enabled (~5-10% slower execution)
     *
     * @example
     * cpr.StrictlySimple = true;  // Ensure no touching vertices in result
     *
     * @see {@link #SimplifyPolygons}
     */
    StrictlySimple: boolean;

    /**
     * When true, allows collinear vertices to be preserved in the solution.
     * By default, the Clipper removes 'inner' vertices when three or more vertices are collinear.
     *
     * @example
     * cpr.PreserveCollinear = true;  // Keep intermediate vertices on straight edges
     */
    PreserveCollinear: boolean;

    /**
     * Optional callback function for custom Z-coordinate handling during clipping.
     *
     * Only available when use_xyz preprocessor define is enabled.
     * Called during clipping operations to assign custom Z values to intersection vertices.
     *
     * Most vertices in the solution correspond to input vertices (with their original Z values),
     * but vertices created at edge intersections have no obvious Z value. This callback allows
     * custom Z calculation for those intersection points.
     *
     * The callback receives the vertices bounding one of the two intersecting edges.
     *
     * @example
     * cpr.ZFillFunction = function(vert1, vert2, intersectPt) {
     *   // Custom logic to set intersectPt.Z
     *   intersectPt.Z = (vert1.Z + vert2.Z) / 2;  // Average Z values
     * };
     *
     * @see {@link #use_xyz}
     * @see {@link #IntPoint}
     */
    ZFillFunction: ((bot1: IntPoint, top1: IntPoint, bot2: IntPoint, top2: IntPoint, pt: IntPoint) => void) | null;

    /**
     * Creates a new Clipper object for polygon clipping operations.
     *
     * Bit flags are used for InitOptions:
     * - 1 (ioReverseSolution): Sets ReverseSolution to true
     * - 2 (ioStrictlySimple): Sets StrictlySimple to true
     * - 4 (ioPreserveCollinear): Sets PreserveCollinear to true
     *
     * @param InitOptions Optional combination of initialization flags via bitwise OR
     *
     * @example
     * // Default initialization
     * const cpr1 = new ClipperLib.Clipper();
     *
     * // With StrictlySimple and PreserveCollinear flags
     * const cpr2 = new ClipperLib.Clipper(ClipperLib.Clipper.ioStrictlySimple | ClipperLib.Clipper.ioPreserveCollinear);
     *
     * // Using bit values directly
     * const cpr3 = new ClipperLib.Clipper(2 | 4);  // Same as above
     *
     * // With all flags enabled
     * const cpr4 = new ClipperLib.Clipper(1 | 2 | 4);  // All options enabled
     *
     * @see {@link #ioReverseSolution}
     * @see {@link #ioStrictlySimple}
     * @see {@link #ioPreserveCollinear}
     * @see {@link #ReverseSolution}
     * @see {@link #StrictlySimple}
     * @see {@link #PreserveCollinear}
     */
    constructor(InitOptions?: number);

    /**
     * Performs the polygon clipping operation.
     *
     * Once subject and clip paths have been assigned via AddPath()/AddPaths(), Execute
     * performs the specified clipping operation (intersection, union, difference, or XOR).
     *
     * The solution parameter can be either Paths (simpler, faster ~10% improvement) or
     * PolyTree (more complex, provides parent-child relationships and open/closed path info).
     *
     * Solution properties:
     * - Paths are not in any specific order
     * - Should never overlap or be self-intersecting (except for rounding issues)
     * - Holes are oriented opposite to outer polygons
     * - Solution fill type complies with both EvenOdd and NonZero filling rules
     * - Polygons may rarely share common edges
     *
     * Multiple operations can be performed on the same polygon sets by repeat calls.
     *
     * @param clipType Boolean operation to perform (intersection, union, difference, xor)
     * @param solution Output Paths structure receiving clipping solution
     * @returns true if successful, false if operation failed
     *
     * @example
     * const solution = new ClipperLib.Paths();
     * cpr.Execute(ClipperLib.ClipType.ctIntersection, solution);
     *
     * @overload
     * @param clipType Boolean operation type
     * @param solution Output solution structure (Paths or PolyTree)
     * @param subjFillType Filling rule for subject polygons
     * @param clipFillType Filling rule for clip polygons
     * @returns true if successful
     *
     * @see {@link #ClipType}
     * @see {@link #PolyFillType}
     * @see {@link #Paths}
     * @see {@link #PolyTree}
     * @see {@link #AddPath}
     * @see {@link #AddPaths}
     */
    Execute(clipType: ClipType, solution: Paths): boolean;
    Execute(clipType: ClipType, solution: Paths, subjFillType: PolyFillType, clipFillType: PolyFillType): boolean;
    Execute(clipType: ClipType, polytree: PolyTree): boolean;
    Execute(clipType: ClipType, polytree: PolyTree, subjFillType: PolyFillType, clipFillType: PolyFillType): boolean;

    Clear(): void;

    /**
     * Returns the axis-aligned bounding rectangle of the supplied paths.
     *
     * @param paths Paths to measure
     * @returns IntRect with left, top, right, bottom coordinates
     *
     * @example
     * const paths = [[{X:10,Y:10},{X:110,Y:10},{X:110,Y:110},{X:10,Y:110}]];
     * const bounds = ClipperLib.Clipper.GetBounds(paths);
     * // Result: {left:10, top:10, right:110, bottom:110}
     */
    static GetBounds(paths: Paths): IntRect;

    /**
     * Rounds a floating point number to the nearest integer.
     * Uses banker's rounding (round half to even) for .5 values.
     */
    static Round(value: number): number;

    /**
     * Internal method for getting X coordinate of edge at given Y position
     * @internal
     */
    static TopX(edge: TEdge, currentY: number): number;

    /**
     * Returns the orientation (winding direction) of a polygon.
     *
     * Implementation: Simply returns `Area(poly) >= 0`
     *
     * Terminology:
     * - Orientation refers to the direction (clockwise or counter-clockwise) that
     *   vertices progress around a closed path
     * - Dependent on Y-axis direction:
     *   - Y-axis up: true = counter-clockwise (positive area)
     *   - Y-axis down: true = clockwise (positive area)
     * - Self-intersecting polygons have indeterminate orientation
     * - For Non-Zero fills: holes must have opposite orientation to outer polygons
     *
     * Note: Most 2D graphics libraries (GDI, GDI+, XLib, Cairo, SVG) have Y-axis
     * pointing downward with origin at top-left. OpenGL and Quartz have Y-axis upward.
     *
     * @param poly Polygon path to test
     * @returns true if polygon area >= 0
     *
     * @example
     * const isClockwise = ClipperLib.Clipper.Orientation(polygon);
     * if (isClockwise) {
     *   // Polygon is oriented clockwise
     * }
     *
     * @see {@link #Area}
     * @see {@link #PolyFillType}
     */
    static Orientation(poly: Path): boolean;

    /**
     * Returns the area of a polygon.
     *
     * For closed paths only. Depending on orientation, value may be positive or negative:
     * - Positive area: Counter-clockwise orientation (on Y-axis up displays)
     * - Negative area: Clockwise orientation (on Y-axis up displays)
     *
     * @param poly Polygon path to measure
     * @returns Signed area value
     *
     * @example
     * const area = ClipperLib.Clipper.Area(polygon);
     *
     * @see {@link #Orientation}
     */
    static Area(poly: Path): number;

    /**
     * Tests if a point is inside, outside, or on a polygon boundary.
     * Uses the "Point in Polygon" algorithm (Hormann & Agathos).
     *
     * @param pt Point to test
     * @param path Polygon path
     * @returns -1 if point is ON polygon boundary, 0 if outside, 1 if inside
     *
     * @example
     * const poly = [{X:10,Y:10},{X:110,Y:10},{X:110,Y:110},{X:10,Y:110}];
     * const pt = new ClipperLib.IntPoint(50,50);
     * const result = ClipperLib.Clipper.PointInPolygon(pt, poly);
     * // result is 1, point is inside
     *
     * @see {@link #IntPoint}
     */
    static PointInPolygon(pt: IntPoint, path: Path): number;

    /**
     * Removes self-intersections from a polygon by performing a union operation.
     *
     * Implementation: Creates an internal Clipper object with StrictlySimple enabled
     * and executes a union operation (ctUnion) on the polygon with itself.
     *
     * Self-intersecting polygons are made simple. Polygons with non-contiguous duplicate
     * vertices (touching) will be split into multiple polygons.
     *
     * This is useful for simplifying complex or malformed polygons before clipping.
     *
     * @param poly Self-intersecting polygon to simplify
     * @param fillType Fill rule to apply during simplification (default: pftEvenOdd)
     * @returns Array of simplified polygons (may be multiple if polygon was split)
     *
     * @example
     * // Five-pointed star with self-intersections
     * const five_pointed_star = [
     *   {X:147,Y:313}, {X:247,Y:34}, {X:338,Y:312},
     *   {X:86,Y:123}, {X:404,Y:124}
     * ];
     * const result = ClipperLib.Clipper.SimplifyPolygon(
     *   five_pointed_star,
     *   ClipperLib.PolyFillType.pftNonZero
     * );
     * // result is a ten-pointed star with no self-intersections
     *
     * @see {@link #SimplifyPolygons}
     * @see {@link #CleanPolygon}
     * @see {@link #PolyFillType}
     * @see {@link #StrictlySimple}
     */
    static SimplifyPolygon(poly: Path, fillType?: PolyFillType): Paths;

    /**
     * Simplifies multiple polygons by removing self-intersections.
     *
     * Applies SimplifyPolygon to each polygon in the paths array.
     *
     * @param polys Polygons to simplify
     * @param fillType Fill rule to apply
     * @returns Simplified paths
     *
     * @see {@link #SimplifyPolygon}
     */
    static SimplifyPolygons(polys: Paths, fillType?: PolyFillType): Paths;

    /**
     * Removes vertices that are too close together or nearly collinear.
     *
     * Needed to prevent distortion caused by micro-self-intersections or
     * vertices that are closer together than the minimum precision.
     *
     * Removes vertices that:
     * - Join co-linear (or nearly co-linear) edges
     * - Are within distance of an adjacent vertex
     * - Are within distance of a semi-adjacent vertex (separated by single vertex)
     *
     * Default distance (~√2) removes vertices when adjacent vertices differ
     * by no more than 1 unit in X or Y.
     *
     * Recommended distance: 0.1 * scale (before offsetting)
     *
     * @param path Polygon to clean
     * @param distance Minimum vertex separation distance (default ~1.414)
     * @returns Cleaned polygon
     *
     * @example
     * const dirty_path = [
     *   {X:10,Y:10}, {X:11,Y:11}, {X:110,Y:10},
     *   {X:110,Y:110}, {X:10,Y:110}
     * ];
     * const clean_path = ClipperLib.Clipper.CleanPolygon(dirty_path, 1.1);
     * // Intermediate vertex {X:11,Y:11} is removed
     *
     * @see {@link #CleanPolygons}
     * @see {@link #SimplifyPolygon}
     */
    static CleanPolygon(path: Path, distance?: number): Path;

    /**
     * Removes vertices that are too close together from multiple polygons.
     *
     * Recommended distance: 0.1 * scale
     *
     * @param polys Polygons to clean
     * @param distance Minimum vertex separation distance
     * @returns Cleaned paths
     *
     * @see {@link #CleanPolygon}
     * @see {@link #SimplifyPolygons}
     */
    static CleanPolygons(polys: Paths, distance?: number): Paths;

    /**
     * Performs Minkowski addition or difference on paths.
     *
     * @param pattern Polygon pattern to add/subtract
     * @param path Open or closed path
     * @param IsSum true for addition, false for difference
     * @param IsClosed true if path is closed
     * @returns Result paths
     *
     * @see {@link #MinkowskiSum}
     * @see {@link #MinkowskiDiff}
     */
    static Minkowski(pattern: Path, path: Path, IsSum: boolean, IsClosed: boolean): Paths;

    /**
     * Performs Minkowski sum (dilation) on a path.
     *
     * Minkowski Addition is performed by adding each point in a polygon 'pattern'
     * to the set of points in an open or closed path. The resulting polygon(s)
     * define the region that the 'pattern' would pass over in moving from the
     * beginning to the end of the 'path'.
     *
     * Useful for path sweeping and polygon dilation operations.
     *
     * @param pattern Polygon pattern to add to the path
     * @param path Open or closed path to sweep over
     * @param pathIsClosed true if path is closed
     * @returns Result paths
     *
     * @example
     * // Five-pointed star path
     * const starPath = [
     *   {X:89.85,Y:355.85}, {X:131.72,Y:227.13}, {X:22.1,Y:147.57},
     *   {X:157.6,Y:147.57}, {X:199.47,Y:18.85}
     * ];
     * // Diagonal brush shape
     * const brushShape = [
     *   {X:4,Y:-6}, {X:6,Y:-6}, {X:-4,Y:6}, {X:-6,Y:6}
     * ];
     * const solution = ClipperLib.Clipper.MinkowskiSum(brushShape, starPath, true);
     *
     * @see {@link #MinkowskiDiff}
     */
    static MinkowskiSum(pattern: Path, path: Path, pathIsClosed: boolean): Paths;
    /**
     * Performs Minkowski sum on multiple paths.
     *
     * @overload
     */
    static MinkowskiSum(pattern: Path, paths: Paths, pathIsClosed: boolean): Paths;

    /**
     * Performs Minkowski difference (erosion) on paths.
     *
     * Minkowski Difference is performed by subtracting each point in a polygon
     * from the set of points in an open or closed path.
     *
     * A key feature of Minkowski Difference is that when applied to two polygons,
     * the resulting polygon will contain the coordinate origin (0,0) whenever
     * the two polygons touch or overlap.
     *
     * Often used to determine when polygons collide.
     *
     * @param poly1 First polygon
     * @param poly2 Second polygon
     * @returns Result paths
     *
     * @see {@link #MinkowskiSum}
     */
    static MinkowskiDiff(poly1: Path, poly2: Path): Paths;

    /**
     * Converts a PolyTree structure to a Paths structure.
     *
     * Flattens the hierarchical PolyTree into a simple Paths array,
     * including both open and closed paths.
     *
     * @param polytree PolyTree to convert
     * @returns Converted paths
     *
     * @example
     * const polytree = new ClipperLib.PolyTree();
     * cpr.Execute(ClipperLib.ClipType.ctUnion, polytree);
     * const paths = ClipperLib.Clipper.PolyTreeToPaths(polytree);
     *
     * @see {@link #PolyTree}
     * @see {@link #OpenPathsFromPolyTree}
     * @see {@link #ClosedPathsFromPolyTree}
     */
    static PolyTreeToPaths(polytree: PolyTree): Paths;

    /**
     * Extracts open paths from a PolyTree structure.
     *
     * Filters out closed paths and returns only open paths (lines).
     * Useful when clipping operations produce both open and closed paths.
     *
     * @param polytree PolyTree containing both open and closed paths
     * @returns Only the open paths
     *
     * @example
     * const lines = ClipperLib.Clipper.OpenPathsFromPolyTree(polytree);
     *
     * @see {@link #ClosedPathsFromPolyTree}
     * @see {@link #PolyTree}
     */
    static OpenPathsFromPolyTree(polytree: PolyTree): Paths;

    /**
     * Extracts closed paths from a PolyTree structure.
     *
     * Filters out open paths and returns only closed paths (polygons).
     *
     * @param polytree PolyTree containing both open and closed paths
     * @returns Only the closed paths (polygons)
     *
     * @example
     * const polygons = ClipperLib.Clipper.ClosedPathsFromPolyTree(polytree);
     *
     * @see {@link #OpenPathsFromPolyTree}
     * @see {@link #PolyTree}
     */
    static ClosedPathsFromPolyTree(polytree: PolyTree): Paths;

    /**
     * Reverses the vertex order (and hence orientation) in a single path.
     *
     * Equivalent to calling Array.reverse() on a path.
     *
     * @param path Path to reverse
     *
     * @example
     * const path = [{X:10,Y:10},{X:110,Y:10},{X:110,Y:110},{X:10,Y:110}];
     * ClipperLib.Clipper.ReversePath(path);
     * // path is now reversed: [{X:10,Y:110},{X:110,Y:110},{X:110,Y:10},{X:10,Y:10}]
     */
    static ReversePath(path: Path): void;

    /**
     * Reverses the vertex order in each contained path.
     *
     * @param paths Paths to reverse
     *
     * @example
     * const paths = [[{X:10,Y:10},{X:110,Y:10},{X:110,Y:110},{X:10,Y:110}]];
     * ClipperLib.Clipper.ReversePaths(paths);
     *
     * @see {@link #ReversePath}
     */
    static ReversePaths(paths: Paths): void;

    /**
     * Returns the squared Euclidean distance between two points.
     *
     * Avoids the expensive square root calculation if only distance comparison is needed.
     *
     * @param pt1 First point
     * @param pt2 Second point
     * @returns Squared distance value
     *
     * @example
     * const dist2 = ClipperLib.Clipper.DistanceSqrd(pt1, pt2);
     * if (dist2 < threshold * threshold) { ... }  // Compare squared values
     */
    static DistanceSqrd(pt1: IntPoint, pt2: IntPoint): number;

    /**
     * Returns the squared perpendicular distance from a point to a line.
     *
     * Used to determine how close a point is to a line segment.
     *
     * @param pt Point to measure from
     * @param ln1 First endpoint of line segment
     * @param ln2 Second endpoint of line segment
     * @returns Squared distance from point to line
     */
    static DistanceFromLineSqrd(pt: IntPoint, ln1: IntPoint, ln2: IntPoint): number;

    /**
     * Translates (moves) a path by a delta vector.
     *
     * @param path Path to translate
     * @param delta Movement vector
     * @returns Translated path
     */
    static TranslatePath(path: Path, delta: IntPoint): Path;
}

// ============================
// ClipperOffset
// ============================

/**
 * ClipperOffset encapsulates the process of offsetting (dilating/shrinking) polygons and polylines.
 *
 * Offsetting is used to expand or shrink polygons, typically for applications like:
 * - Creating buffer zones around features
 * - Stroke/outline effects
 * - Erosion/dilation morphological operations
 * - Polygon scaling
 *
 * With closed paths (polygons):
 * - Positive delta values 'expand' outer contours and 'shrink' inner hole contours
 * - Negative deltas do the reverse
 *
 * With open paths (lines):
 * - The sign of delta value is ignored (cannot shrink open paths below zero width)
 *
 * Different join types and miter limits control how corners are handled:
 * - jtMiter: Pointed corners with MiterLimit to prevent excessive spikes
 * - jtRound: Smooth rounded corners (approximated by arc chords)
 * - jtSquare: Square corners at 1 × delta offset distance
 *
 * EndType determines how line endpoints are finished:
 * - Open types: etOpenSquare, etOpenRound, etOpenButt
 * - Closed types: etClosedLine (polyline closure), etClosedPolygon
 *
 * Self-intersections in closed paths must be removed before offsetting.
 * Use SimplifyPolygon() or CleanPolygon() before offsetting if needed.
 *
 * @example
 * const offset = new ClipperLib.ClipperOffset();
 * offset.MiterLimit = 2.0;
 * offset.ArcTolerance = 0.25;
 *
 * offset.AddPath(myPath, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
 *
 * const solution = new ClipperLib.Paths();
 * offset.Execute(solution, 10);  // Expand by 10 units
 *
 * @see {@link JoinType}
 * @see {@link EndType}
 * @see {@link SimplifyPolygon}
 * @see {@link CleanPolygon}
 */
export class ClipperOffset {
    /**
     * Constant: 2 × π (full circle in radians)
     */
    static two_pi: number;
    /**
     * Default arc tolerance for rounding joins (0.25 units)
     */
    static def_arc_tolerance: number;

    /**
     * Maximum distance in multiples of delta that vertices can be offset before squaring is applied.
     *
     * For miter joins, sets a maximum limit to prevent excessively long 'spikes' at acute angles.
     * Default: 2 (twice delta, which is the minimum allowed value)
     *
     * When miter offset exceeds this limit, square joining is applied instead.
     * At angles of 90 degrees, miter is applied at exactly 1 × delta.
     *
     * For round and square joins: this property is ignored.
     *
     * @example
     * offset.MiterLimit = 2.0;    // Default: allows miters up to 2× delta
     * offset.MiterLimit = 1.5;    // More aggressive squaring at acute angles
     * offset.MiterLimit = 10.0;   // Allow longer miters
     *
     * @see {@link JoinType}
     */
    MiterLimit: number;

    /**
     * Maximum acceptable imprecision when arcs are approximated (for round joins).
     *
     * Since flattened paths can never perfectly trace an arc, they are approximated
     * by a series of arc chords. This property specifies the maximum deviation.
     *
     * Default: 0.25 units
     * Realistically, precision can never be better than 0.5 due to integer rounding.
     *
     * For large coordinate values (from scaling), increase this value to maintain
     * consistent precision. Maximum arc vertices is limited to 222 to prevent excessive
     * vertex count and out-of-memory issues.
     *
     * This property is ignored for square and miter join types.
     *
     * @example
     * offset.ArcTolerance = 0.25;   // Default: very precise arcs
     * offset.ArcTolerance = 0.5;    // Slightly less precise, faster
     * offset.ArcTolerance = 1.0;    // Coarser approximation, much faster
     *
     * @see {@link JoinType}
     */
    ArcTolerance: number;

    /**
     * Creates a new ClipperOffset object for polygon offsetting operations.
     *
     * @param miterLimit Maximum miter distance (default: 2, minimum: 2)
     * @param arcTolerance Arc approximation precision (default: 0.25)
     *
     * @example
     * const offset1 = new ClipperLib.ClipperOffset();  // Default settings
     * const offset2 = new ClipperLib.ClipperOffset(2.0, 0.25);  // Explicit settings
     *
     * @see {@link MiterLimit}
     * @see {@link ArcTolerance}
     */
    constructor(miterLimit?: number, arcTolerance?: number);

    /**
     * Clears all paths from the ClipperOffset object.
     * Allows the ClipperOffset to be reused for a new offsetting operation.
     *
     * @example
     * offset.Clear();
     */
    Clear(): void;

    /**
     * Adds a single path to be offset.
     *
     * Can be called multiple times to add multiple paths before executing offset.
     * All paths are offset by the same delta value specified in Execute().
     *
     * @param path Path to offset (open line or closed polygon)
     * @param joinType Join type for corners (jtSquare, jtRound, or jtMiter)
     * @param endType End type for path termination
     *
     * @example
     * // Offset a closed polygon
     * offset.AddPath(polygon, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
     *
     * // Offset an open line
     * offset.AddPath(line, ClipperLib.JoinType.jtSquare, ClipperLib.EndType.etOpenButt);
     *
     * @see {@link AddPaths}
     * @see {@link JoinType}
     * @see {@link EndType}
     * @see {@link Execute}
     */
    AddPath(path: Path, joinType: JoinType, endType: EndType): void;

    /**
     * Adds multiple paths to be offset.
     *
     * Convenience method to add many paths at once with the same join and end types.
     * Equivalent to calling AddPath() for each path.
     *
     * @param paths Paths to offset
     * @param joinType Join type for all paths
     * @param endType End type for all paths
     *
     * @example
     * const paths = [polygon1, polygon2, hole];
     * offset.AddPaths(paths, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
     *
     * @see {@link AddPath}
     */
    AddPaths(paths: Paths, joinType: JoinType, endType: EndType): void;

    /**
     * Executes the offsetting operation on previously added paths.
     *
     * Performs the actual offset calculation and returns results in the solution parameter.
     * Positive delta expands polygons, negative delta shrinks them.
     *
     * Implementation details:
     * - Applies FixOrientations() to fix path orientation
     * - Executes DoOffset() for the actual offset calculations
     * - Uses an internal Clipper object to clean up 'corners' via union operation:
     *   - For positive delta: Uses pftPositive fill type
     *   - For negative delta: Creates outer bounding rectangle and uses pftNegative,
     *     then removes the outer rectangle from solution
     *
     * This corner cleanup is crucial for producing clean, final output paths.
     *
     * @param solution Output Paths structure receiving offset result
     * @param delta Offset distance (positive = expand, negative = shrink)
     *
     * @example
     * const offset = new ClipperLib.ClipperOffset();
     * offset.MiterLimit = 2.0;
     * offset.ArcTolerance = 0.25;
     * offset.AddPath(polygon, ClipperLib.JoinType.jtRound, ClipperLib.EndType.etClosedPolygon);
     *
     * const solution = new ClipperLib.Paths();
     * offset.Execute(solution, 10);   // Expand by 10 units
     *
     * // For shrinking (negative delta):
     * const shrunkSolution = new ClipperLib.Paths();
     * offset.Execute(shrunkSolution, -5);   // Shrink by 5 units
     *
     * @see {@link #AddPath}
     * @see {@link #AddPaths}
     */
    Execute(solution: Paths, delta: number): void;

    /**
     * Executes the offsetting operation into a PolyTree structure.
     *
     * Alternative to Paths output. PolyTree provides hierarchical
     * parent-child relationships and open/closed path information.
     * About 5-10% slower than Paths output but more informative.
     *
     * @param polytree Output PolyTree structure receiving offset result
     * @param delta Offset distance (positive = expand, negative = shrink)
     *
     * @example
     * const polytree = new ClipperLib.PolyTree();
     * offset.Execute(polytree, 10);
     * const paths = ClipperLib.Clipper.PolyTreeToPaths(polytree);
     *
     * @see {@link PolyTree}
     * @see {@link Clipper.PolyTreeToPaths}
     */
    Execute(polytree: PolyTree, delta: number): void;

    /**
     * Rounds a floating point number to the nearest integer.
     * @internal
     */
    static Round(value: number): number;
}

// ============================
// ExPolygon Types
// ============================

/**
 * ExPolygon represents a polygon with holes
 */
export class ExPolygon {
    outer: Path;
    holes: Path[];
}

/**
 * Collection of ExPolygon structures
 */
export type ExPolygons = ExPolygon[];

export function ExPolygons(): ExPolygons;

// ============================
// Internal Edge Structure
// ============================

export class TEdge {
    Bot: IntPoint;
    Curr: IntPoint;
    Top: IntPoint;
    Delta: IntPoint;
    Dx: number;
    PolyTyp: PolyType;
    Side: EdgeSide;
    WindDelta: number;
    WindCnt: number;
    WindCnt2: number;
    OutIdx: number;
    Next: TEdge | null;
    Prev: TEdge | null;
    NextInLML: TEdge | null;
    NextInAEL: TEdge | null;
    PrevInAEL: TEdge | null;
    NextInSEL: TEdge | null;
    PrevInSEL: TEdge | null;
}

export class IntersectNode {
    Edge1: TEdge | null;
    Edge2: TEdge | null;
    Pt: IntPoint;
}

export class LocalMinima {
    Y: number;
    LeftBound: TEdge | null;
    RightBound: TEdge | null;
    Next: LocalMinima | null;
}

export class Scanbeam {
    Y: number;
    Next: Scanbeam | null;
}

export class Maxima {
    X: number;
    Next: Maxima | null;
    Prev: Maxima | null;
}

export class OutRec {
    Idx: number;
    IsHole: boolean;
    IsOpen: boolean;
    FirstLeft: OutRec | null;
    Pts: OutPt | null;
    BottomPt: OutPt | null;
    PolyNode: PolyNode | null;
}

export class OutPt {
    Idx: number;
    Pt: IntPoint;
    Next: OutPt | null;
    Prev: OutPt | null;
}

export class Join {
    OutPt1: OutPt | null;
    OutPt2: OutPt | null;
    OffPt: IntPoint;
}

// ============================
// JS Namespace - Utility Functions
// ============================

/**
 * JavaScript namespace providing utility functions for working with Clipper paths.
 * These functions assist with common polygon operations and transformations.
 *
 * @example
 * const area = ClipperLib.JS.AreaOfPolygon(polygon);
 * const cleaned = ClipperLib.JS.Clean(polygon, 1.1);
 * ClipperLib.JS.ScaleUpPath(path, 1000);
 */
export namespace JS {
    /**
     * Calculates the signed area of a polygon.
     *
     * @param poly Polygon path to measure
     * @param scale Optional scaling factor to apply to result
     * @returns Signed area (positive or negative depending on orientation)
     *
     * @example
     * const area = ClipperLib.JS.AreaOfPolygon(polygon);
     * const scaledArea = ClipperLib.JS.AreaOfPolygon(polygon, 1000);  // Scale result
     *
     * @see {@link Clipper.Area}
     * @see {@link Clipper.Orientation}
     */
    function AreaOfPolygon(poly: Path, scale?: number): number;

    /**
     * Calculates the total area of multiple polygons.
     *
     * @param polys Array of polygon paths
     * @param scale Optional scaling factor
     * @returns Sum of all polygon areas
     *
     * @see {@link AreaOfPolygon}
     */
    function AreaOfPolygons(polys: Paths, scale?: number): number;

    /**
     * Gets the axis-aligned bounding rectangle of a single path.
     *
     * @param path Path to measure
     * @param scale Optional scaling factor to apply
     * @returns Bounding rectangle (IntRect)
     *
     * @example
     * const bounds = ClipperLib.JS.BoundsOfPath(path);
     * console.log(`Left: ${bounds.left}, Top: ${bounds.top}, Right: ${bounds.right}, Bottom: ${bounds.bottom}`);
     *
     * @see {@link BoundsOfPaths}
     * @see {@link Clipper.GetBounds}
     */
    function BoundsOfPath(path: Path, scale?: number): IntRect;

    /**
     * Gets the axis-aligned bounding rectangle of multiple paths.
     *
     * @param paths Paths to measure
     * @param scale Optional scaling factor
     * @returns Bounding rectangle encompassing all paths
     *
     * @see {@link BoundsOfPath}
     */
    function BoundsOfPaths(paths: Paths, scale?: number): IntRect;

    /**
     * Creates a deep copy of a single path.
     *
     * @param path Path to clone
     * @returns Independent copy of the path
     *
     * @example
     * const original = [{X:10,Y:10}, {X:110,Y:110}];
     * const copy = ClipperLib.JS.Clone(original);
     * copy[0].X = 20;  // Does not affect original
     *
     * @see {@link Clone}  // Overload for Paths
     */
    function Clone(path: Path): Path;
    /**
     * Creates a deep copy of multiple paths.
     *
     * @param paths Paths to clone
     * @returns Independent copy of all paths
     *
     * @overload
     */
    function Clone(paths: Paths): Paths;

    /**
     * Removes vertices that are too close together from a polygon.
     *
     * This is a simple vertex-merging function useful for cleaning up
     * polygons with excessive vertices or artifacts.
     *
     * @param polygon Polygon to clean
     * @param delta Minimum distance between vertices (default: ~1.414)
     * @returns Cleaned polygon
     *
     * @example
     * const dirty = [{X:10,Y:10}, {X:10.1,Y:10.1}, {X:110,Y:110}];
     * const clean = ClipperLib.JS.Clean(dirty, 1);
     *
     * @see {@link Clipper.CleanPolygon}
     */
    function Clean(polygon: Path, delta?: number): Path;

    /**
     * Reduces polygon vertices using the Ramer-Douglas-Peucker algorithm.
     *
     * This simplification algorithm removes unnecessary vertices while
     * maintaining the overall shape, useful for reducing file size or
     * improving rendering performance.
     *
     * @param polygon Polygon to simplify
     * @param tolerance Simplification tolerance (epsilon value)
     * @returns Simplified polygon with fewer vertices
     *
     * @example
     * const detailed = [{X:0,Y:0}, {X:1,Y:0.1}, {X:2,Y:0}, {X:3,Y:1}];
     * const simplified = ClipperLib.JS.Lighten(detailed, 0.5);
     *
     * @see {@link Lighten}  // Overload for multiple polygons
     */
    function Lighten(polygon: Path, tolerance?: number): Path;
    /**
     * Reduces vertices in multiple polygons.
     *
     * @param polygons Polygons to simplify
     * @param tolerance Simplification tolerance
     * @returns Simplified polygons
     *
     * @overload
     */
    function Lighten(polygons: Paths, tolerance?: number): Paths;

    /**
     * Calculates the perimeter of a single path.
     *
     * @param path Path to measure
     * @param closed true if path is closed (polygon), false if open (line)
     * @param scale Optional scaling factor to divide by result
     * @returns Perimeter length
     *
     * @example
     * const pathPerimeter = ClipperLib.JS.PerimeterOfPath(polygon, true);
     * const lineLength = ClipperLib.JS.PerimeterOfPath(line, false);
     *
     * @see {@link PerimeterOfPaths}
     */
    function PerimeterOfPath(path: Path, closed: boolean, scale?: number): number;

    /**
     * Calculates the total perimeter of multiple paths.
     *
     * @param paths Paths to measure
     * @param closed true if paths are closed
     * @param scale Optional scaling factor
     * @returns Total perimeter length
     *
     * @see {@link PerimeterOfPath}
     */
    function PerimeterOfPaths(paths: Paths, closed: boolean, scale?: number): number;

    /**
     * Scales down path coordinates (divides by scale).
     *
     * Modifies the path in-place. Useful when working with scaled coordinate systems.
     *
     * @param path Path to scale
     * @param scale Scaling divisor (default: 1)
     *
     * @example
     * const path = [{X:1000,Y:2000}, {X:3000,Y:4000}];
     * ClipperLib.JS.ScaleDownPath(path, 100);  // Now {X:10,Y:20}, {X:30,Y:40}
     *
     * @see {@link ScaleDownPaths}
     * @see {@link ScaleUpPath}
     */
    function ScaleDownPath(path: Path, scale?: number): void;

    /**
     * Scales down multiple paths (divides by scale).
     *
     * Modifies all paths in-place.
     *
     * @param paths Paths to scale
     * @param scale Scaling divisor
     *
     * @see {@link ScaleDownPath}
     * @see {@link ScaleUpPaths}
     */
    function ScaleDownPaths(paths: Paths, scale?: number): void;

    /**
     * Scales up path coordinates (multiplies by scale).
     *
     * Modifies the path in-place. Coordinates are rounded to integers.
     * Useful for converting floating-point coordinates to integer coordinates
     * for use with Clipper (which requires integer coordinates for robustness).
     *
     * @param path Path to scale
     * @param scale Scaling multiplier (default: 1)
     *
     * @example
     * // Convert floating point to integer coordinates
     * const floatPath = [{X:1.5,Y:2.3}, {X:3.7,Y:4.1}];
     * ClipperLib.JS.ScaleUpPath(floatPath, 1000);
     * // Now {X:1500,Y:2300}, {X:3700,Y:4100}
     *
     * @see {@link ScaleUpPaths}
     * @see {@link ScaleDownPath}
     */
    function ScaleUpPath(path: Path, scale?: number): void;

    /**
     * Scales up multiple paths (multiplies by scale).
     *
     * Modifies all paths in-place. Useful for batch scaling of floating-point
     * coordinate systems.
     *
     * @param paths Paths to scale
     * @param scale Scaling multiplier
     *
     * @see {@link ScaleUpPath}
     * @see {@link ScaleDownPaths}
     */
    function ScaleUpPaths(paths: Paths, scale?: number): void;

    /**
     * Converts a PolyTree structure to ExPolygons format.
     *
     * ExPolygon structures explicitly represent outer polygons and their
     * hole polygons in a single structure, contrasting with PolyTree's
     * hierarchical parent-child representation.
     *
     * @param polytree PolyTree to convert
     * @returns Array of ExPolygon structures
     *
     * @example
     * const expolygons = ClipperLib.JS.PolyTreeToExPolygons(polytree);
     * for (const expolygon of expolygons) {
     *   console.log('Outer:', expolygon.outer);
     *   console.log('Holes:', expolygon.holes);
     * }
     *
     * @see {@link ExPolygonsToPaths}
     * @see {@link PolyTree}
     */
    function PolyTreeToExPolygons(polytree: PolyTree): ExPolygons;

    /**
     * Converts ExPolygons format to Paths format.
     *
     * Flattens the explicit outer/hole representation into a simple
     * sequence of paths.
     *
     * @param expolygons ExPolygons array to convert
     * @returns Paths containing all outer polygons and their holes
     *
     * @example
     * const paths = ClipperLib.JS.ExPolygonsToPaths(expolygons);
     *
     * @see {@link PolyTreeToExPolygons}
     */
    function ExPolygonsToPaths(expolygons: ExPolygons): Paths;

    /**
     * Recursively adds outer PolyNodes and their hole children to ExPolygons.
     *
     * Internal helper function used by PolyTreeToExPolygons.
     *
     * @param polynode PolyNode to process
     * @param expolygons Output ExPolygons array
     *
     * @internal
     * @see {@link PolyTreeToExPolygons}
     */
    function AddOuterPolyNodeToExPolygons(polynode: PolyNode, expolygons: ExPolygons): void;
}

// ============================
// Utility Functions
// ============================

/**
 * Throws an error with the given message
 */
export function Error(message: string): void;

/**
 * Clears an array
 */
export function Clear(arr: any[]): void;

/**
 * Math absolute value functions
 */
export function Math_Abs_Int64(a: number): number;
export function Math_Abs_Int32(a: number): number;
export function Math_Abs_Double(a: number): number;

/**
 * Returns the maximum of two numbers
 */
export function Math_Max_Int32_Int32(a: number, b: number): number;

/**
 * Cast to 32-bit integer
 */
export function Cast_Int32(a: number): number;

/**
 * Cast to 64-bit integer
 */
export function Cast_Int64(a: number): number;

// ============================
// Constants
// ============================

export const PI: number;
export const PI2: number;

