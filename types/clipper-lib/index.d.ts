export as namespace ClipperLib;

// --- Preprocessor flags ---
export var use_int32: boolean;
export var use_xyz: boolean;
export var use_lines: boolean;
export var use_deprecated: boolean;

// --- Types ---

export interface IntPoint {
    X: number;
    Y: number;
    Z?: number;
}

export interface IntRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

export type Path = IntPoint[];
export type Paths = Path[];

export interface ExPolygon {
    outer: Path;
    holes: Paths;
}

export type ExPolygons = ExPolygon[];

// --- Enums ---

export enum ClipType {
    ctIntersection = 0,
    ctUnion = 1,
    ctDifference = 2,
    ctXor = 3,
}

export enum PolyType {
    ptSubject = 0,
    ptClip = 1,
}

export enum PolyFillType {
    pftEvenOdd = 0,
    pftNonZero = 1,
    pftPositive = 2,
    pftNegative = 3,
}

export enum JoinType {
    jtSquare = 0,
    jtRound = 1,
    jtMiter = 2,
}

export enum EndType {
    etClosedPolygon = 0,
    etClosedLine = 1,
    etOpenButt = 2,
    etOpenSquare = 3,
    etOpenRound = 4,
}

export enum EndType_ {
    etSquare = 0,
    etRound = 1,
    etButt = 2,
    etSingle = 3,
}

export enum InitOptions {
    ioReverseSolution = 1,
    ioStrictlySimple = 2,
    ioPreserveCollinear = 4,
}

// --- PolyNode ---

export class PolyNode {
    IsOpen: boolean;
    ChildCount(): number;
    Childs(): PolyNode[];
    Contour(): Path;
    GetNext(): PolyNode;
    IsHole(): boolean;
    Parent(): PolyNode;
}

// --- PolyTree ---

export class PolyTree extends PolyNode {
    Clear(): void;
    GetFirst(): PolyNode;
    Total(): number;
}

// --- Clipper ---

export class Clipper {
    constructor(initOptions?: number);

    PreserveCollinear: boolean;
    ReverseSolution: boolean;
    StrictlySimple: boolean;
    ZFillFunction:
        | ((bot1: IntPoint, top1: IntPoint, bot2: IntPoint, top2: IntPoint, pt: IntPoint) => void)
        | null;

    AddPath(path: Path, polyType: PolyType, closed: boolean): boolean;
    AddPaths(paths: Paths, polyType: PolyType, closed: boolean): boolean;
    Clear(): void;
    Execute(clipType: ClipType, solution: Paths, subjFillType?: PolyFillType, clipFillType?: PolyFillType): boolean;
    Execute(
        clipType: ClipType,
        solution: PolyTree,
        subjFillType?: PolyFillType,
        clipFillType?: PolyFillType,
    ): boolean;
    GetBounds(): IntRect;

    static Area(poly: Path): number;
    static CleanPolygon(path: Path, distance?: number): Path;
    static CleanPolygons(polys: Paths, distance?: number): Paths;
    static ClosedPathsFromPolyTree(polytree: PolyTree): Paths;
    static MinkowskiDiff(poly1: Path, poly2: Path): Paths;
    static MinkowskiSum(pattern: Path, path: Path, pathIsClosed: boolean): Paths;
    static MinkowskiSum(pattern: Path, paths: Paths, pathIsClosed: boolean): Paths;
    static OffsetPaths(polys: Paths, delta: number, joinType?: JoinType, endType?: EndType_, limit?: number): Paths;
    static OpenPathsFromPolyTree(polytree: PolyTree): Paths;
    static Orientation(poly: Path): boolean;
    static PointInPolygon(pt: IntPoint, path: Path): number;
    static PolyTreeToPaths(polytree: PolyTree): Paths;
    static ReversePath(path: Path): void;
    static ReversePaths(paths: Paths): void;
    static SimplifyPolygon(poly: Path, fillType?: PolyFillType): Paths;
    static SimplifyPolygons(polys: Paths, fillType?: PolyFillType): Paths;
}

// --- ClipperOffset ---

export class ClipperOffset {
    constructor(miterLimit?: number, arcTolerance?: number);

    ArcTolerance: number;
    MiterLimit: number;

    AddPath(path: Path, joinType: JoinType, endType: EndType): void;
    AddPaths(paths: Paths, joinType: JoinType, endType: EndType): void;
    Clear(): void;
    Execute(solution: Paths, delta: number): void;
    Execute(solution: PolyTree, delta: number): void;
}

// --- JS Helper functions ---

export namespace JS {
    function AreaOfPolygon(poly: Path, scale?: number): number;
    function AreaOfPolygons(polys: Paths, scale?: number): number;
    function BoundsOfPath(path: Path): IntRect;
    function BoundsOfPaths(paths: Paths): IntRect;
    function Clone(paths: Paths): Paths;
    function Clean(path: Path, delta: number): Path;
    function Lighten(path: Path, tolerance: number): Path;
    function PerimeterOfPath(path: Path, closed: boolean, scale?: number): number;
    function PerimeterOfPaths(paths: Paths, closed: boolean, scale?: number): number;
    function ScaleDownPath(path: Path, scale: number): void;
    function ScaleDownPaths(paths: Paths, scale: number): void;
    function ScaleUpPath(path: Path, scale: number): void;
    function ScaleUpPaths(paths: Paths, scale: number): void;
    function PolyTreeToExPolygons(polytree: PolyTree): ExPolygons;
    function ExPolygonsToPaths(exPolygons: ExPolygons): Paths;
}
