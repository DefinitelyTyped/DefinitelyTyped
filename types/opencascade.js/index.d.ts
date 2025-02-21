export default opencascade;
declare function opencascade<T>(target?: T): Promise<T & typeof opencascade>;

declare module opencascade {
    function destroy(obj: any): void;
    function _malloc(size: number): number;
    function _free(ptr: number): void;
    const HEAP8: Int8Array;
    const HEAP16: Int16Array;
    const HEAP32: Int32Array;
    const HEAPU8: Uint8Array;
    const HEAPU16: Uint16Array;
    const HEAPU32: Uint32Array;
    const HEAPF32: Float32Array;
    const HEAPF64: Float64Array;
    type Standard_Real = number;
    type Standard_Boolean = boolean;
    type Standard_Integer = number;
    type Standard_CString = string;
    class BRepBuilderAPI_MakeShape {
        Build(): void;
        Shape(): TopoDS_Shape;
        IsDeleted(S: TopoDS_Shape): Standard_Boolean;
    }
    class BRepPrimAPI_MakeOneAxis extends BRepBuilderAPI_MakeShape {
        Build(): void;
    }
    class BRepPrimAPI_MakeSphere extends BRepPrimAPI_MakeOneAxis {
        constructor(R: Standard_Real);
        constructor(Axes: gp_Ax2, R: Standard_Real);
        Sphere(): BRepPrim_Sphere;
    }
    class BRepPrimAPI_MakeCylinder extends BRepPrimAPI_MakeOneAxis {
        constructor(Axes: gp_Ax2, R: Standard_Real, H: Standard_Real);
    }
    class BRepPrim_Sphere {
    }
    class TopoDS_Shape {
        constructor();
        IsNull(): Standard_Boolean;
        Nullify(): void;
        Location(): TopLoc_Location;
        Located(theLoc: TopLoc_Location): TopoDS_Shape;
        Orientation(): TopAbs_Orientation;
        Oriented(theOrient: TopAbs_Orientation): TopoDS_Shape;
        ShapeType(): TopAbs_ShapeEnum;
        Free(): Standard_Boolean;
        Locked(): Standard_Boolean;
        Modified(): Standard_Boolean;
        Checked(): Standard_Boolean;
        Orientable(): Standard_Boolean;
        Closed(): Standard_Boolean;
        Infinite(): Standard_Boolean;
        Convex(): Standard_Boolean;
        Move(thePosition: TopLoc_Location): void;
        Moved(thePosition: TopLoc_Location): TopoDS_Shape;
        Reverse(): void;
        Reversed(): TopoDS_Shape;
        Complement(): void;
        Complemented(): TopoDS_Shape;
        Compose(theOrient: TopAbs_Orientation): void;
        Composed(theOrient: TopAbs_Orientation): TopoDS_Shape;
        NbChildren(): Standard_Integer;
        IsPartner(theOther: TopoDS_Shape): Standard_Boolean;
        IsSame(theOther: TopoDS_Shape): Standard_Boolean;
        IsEqual(theOther: TopoDS_Shape): Standard_Boolean;
        IsNotEqual(theOther: TopoDS_Shape): Standard_Boolean;
        HashCode(theUpperBound: Standard_Integer): Standard_Integer;
        EmptyCopy(): void;
        EmptyCopied(): TopoDS_Shape;
    }
    class GProp_GProps {
        constructor();
        constructor(SystemLocation: gp_Pnt);
        Mass(): Standard_Real;
        CentreOfMass(): gp_Pnt;
        MomentOfInertia(A1: gp_Ax1): Standard_Real;
        RadiusOfGyration(A: gp_Ax1): Standard_Real;
        StaticMoments(Ix: Standard_Real, Iy: Standard_Real, Iz: Standard_Real): void;
    }
    class BRepGProp {
        LinearProperties(S: TopoDS_Shape, LProps: GProp_GProps, SkipShared?: Standard_Boolean, UseTriangulation?: Standard_Boolean): void;
        SurfaceProperties(S: TopoDS_Shape, SProps: GProp_GProps, SkipShared?: Standard_Boolean, UseTriangulation?: Standard_Boolean): void;
        SurfaceProperties2(S: TopoDS_Shape, SProps: GProp_GProps, Eps: Standard_Real, SkipShared?: Standard_Boolean): Standard_Real;
        VolumeProperties(S: TopoDS_Shape, VProps: GProp_GProps, OnlyClosed?: Standard_Boolean, SkipShared?: Standard_Boolean, UseTriangulation?: Standard_Boolean): void;
        VolumeProperties2(S: TopoDS_Shape, VProps: GProp_GProps, Eps: Standard_Real, OnlyClosed?: Standard_Boolean, SkipShared?: Standard_Boolean): Standard_Real;
        VolumePropertiesGK(S: TopoDS_Shape, VProps: GProp_GProps, Eps?: Standard_Real, OnlyClosed?: Standard_Boolean, IsUseSpan?: Standard_Boolean, CGFlag?: Standard_Boolean, IFlag?: Standard_Boolean, SkipShared?: Standard_Boolean): Standard_Real;
        VolumePropertiesGK2(S: TopoDS_Shape, VProps: GProp_GProps, thePln: gp_Pln, Eps?: Standard_Real, OnlyClosed?: Standard_Boolean, IsUseSpan?: Standard_Boolean, CGFlag?: Standard_Boolean, IFlag?: Standard_Boolean, SkipShared?: Standard_Boolean): Standard_Real;
    }
    class gp_Pln {
        constructor();
        constructor(P: gp_Pnt, V: gp_Dir);
        Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real): void;
        SetAxis(A1: gp_Ax1): void;
        SetLocation(Loc: gp_Pnt): void;
        UReverse(): void;
        VReverse(): void;
        Direct(): Standard_Boolean;
        Axis(): gp_Ax1;
        Location(): gp_Pnt;
        Distance(P: gp_Pnt): Standard_Real;
        SquareDistance(P: gp_Pnt): Standard_Real;
        XAxis(): gp_Ax1;
        YAxis(): gp_Ax1;
        Contains(P: gp_Pnt, LinearTolerance: Standard_Real): Standard_Boolean;
        Contains(L: gp_Lin, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
        Mirror(P: gp_Pnt): void;
        Mirrored(P: gp_Pnt): gp_Pln;
        Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
        Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Pln;
        Scale(P: gp_Pnt, S: Standard_Real): void;
        Scaled(P: gp_Pnt, S: Standard_Real): gp_Pln;
        Transform(T: gp_Trsf): void;
        Transformed(T: gp_Trsf): gp_Pln;
        Translate(V: gp_Vec): void;
        Translated(V: gp_Vec): gp_Pln;
        Translate(P1: gp_Pnt, P2: gp_Pnt): void;
        Translated(P1: gp_Pnt, P2: gp_Pnt): gp_Pln;
    }
    class BRepMesh_IncrementalMesh {
        constructor();
        constructor(theShape: TopoDS_Shape, theLinDeflection: Standard_Real);
    }
    class Bnd_Box {
        constructor();
        constructor(theMin: gp_Pnt, theMax: gp_Pnt);
        SetWhole(): void;
        SetVoid(): void;
        Set(P: gp_Pnt): void;
        Set(P: gp_Pnt, D: gp_Dir): void;
        Update(aXMin: Standard_Real, aYMin: Standard_Real, aZMin: Standard_Real, aXMax: Standard_Real, aYMax: Standard_Real, aZMax: Standard_Real): void;
        Update(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
        GetGap(): Standard_Real;
        SetGap(Tol: Standard_Real): void;
        Enlarge(Tol: Standard_Real): void;
        GetXmin(): Standard_Real;
        GetXmax(): Standard_Real;
        GetYmin(): Standard_Real;
        GetYmax(): Standard_Real;
        GetZmin(): Standard_Real;
        GetZmax(): Standard_Real;
        CornerMin(): gp_Pnt;
        CornerMax(): gp_Pnt;
        OpenXmin(): void;
        OpenXmax(): void;
        OpenYmin(): void;
        OpenYmax(): void;
        OpenZmin(): void;
        OpenZmax(): void;
        IsOpen(): Standard_Boolean;
        IsOpenXmin(): Standard_Boolean;
        IsOpenXmax(): Standard_Boolean;
        IsOpenYmin(): Standard_Boolean;
        IsOpenYmax(): Standard_Boolean;
        IsOpenZmin(): Standard_Boolean;
        IsOpenZmax(): Standard_Boolean;
        IsWhole(): Standard_Boolean;
        IsVoid(): Standard_Boolean;
        IsXThin(tol: Standard_Real): Standard_Boolean;
        IsYThin(tol: Standard_Real): Standard_Boolean;
        IsZThin(tol: Standard_Real): Standard_Boolean;
        IsThin(tol: Standard_Real): Standard_Boolean;
        Transformed(T: gp_Trsf): Bnd_Box;
        Add(Other: Bnd_Box): void;
        Add(P: gp_Pnt, D: gp_Dir): void;
        IsOut(P: gp_Pnt): Standard_Boolean;
        IsOut(Other: Bnd_Box, T: gp_Trsf): Standard_Boolean;
        IsOut(T1: gp_Trsf, Other: Bnd_Box, T2: gp_Trsf): Standard_Boolean;
        Distance(Other: Bnd_Box): Standard_Real;
        Dump(): void;
        SquareExtent(): Standard_Real;
        FinitePart(): Bnd_Box;
        HasFinitePart(): Standard_Boolean;
    }
    class Bnd_OBB {
        constructor();
        constructor(theCenter: gp_Pnt, theXDirection: gp_Dir, theYDirection: gp_Dir, theZDirection: gp_Dir, theHXSize: Standard_Real, theHYSize: Standard_Real, theHZSize: Standard_Real);
        constructor(theBox: Bnd_Box);
        ReBuild(theListOfPoints: TColgp_Array1OfPnt, theListOfTolerances: TColStd_Array1OfReal, theIsOptimal?: Standard_Boolean): void;
        SetCenter(theCenter: gp_Pnt): void;
        SetXComponent(theXDirection: gp_Dir, theHXSize: Standard_Real): void;
        SetYComponent(theYDirection: gp_Dir, theHYSize: Standard_Real): void;
        SetZComponent(theZDirection: gp_Dir, theHZSize: Standard_Real): void;
        XHSize(): Standard_Real;
        YHSize(): Standard_Real;
        ZHSize(): Standard_Real;
        IsVoid(): Standard_Boolean;
        SetVoid(): void;
        SetAABox(theFlag: Standard_Boolean): void;
        IsAABox(): Standard_Boolean;
        Enlarge(theGapAdd: Standard_Real): void;
        GetVertex(theP: gp_Pnt): Standard_Boolean;
        SquareExtent(): Standard_Real;
        IsOut(theOther: Bnd_OBB): Standard_Boolean;
        IsCompletelyInside(theOther: Bnd_OBB): Standard_Boolean;
        Add(theOther: Bnd_OBB): void;
    }
    class BRepBndLib {
        constructor();
        Add(S: TopoDS_Shape, B: Bnd_Box, useTriangulation?: Standard_Boolean): void;
        AddClose(S: TopoDS_Shape, B: Bnd_Box): void;
        AddOptimal(S: TopoDS_Shape, B: Bnd_Box, useTriangulation?: Standard_Boolean, useShapeToerance?: Standard_Boolean): void;
        AddOBB(theS: TopoDS_Shape, theOBB: Bnd_OBB, theIsTriangulationUsed?: Standard_Boolean, theIsOptimal?: Standard_Boolean, theIsShapeToleranceUsed?: Standard_Boolean): void;
    }
    class BRepPrimAPI_MakePrism extends BRepPrimAPI_MakeSweep {
        constructor(S: TopoDS_Shape, V: gp_Vec);
    }
    class BRepPrimAPI_MakeSweep extends BRepBuilderAPI_MakeShape {
    }
    class gp_Vec {
        constructor(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real);
    }
    class gp_Pnt {
        constructor();
        constructor(Xp: Standard_Real, Yp: Standard_Real, Zp: Standard_Real);
        SetCoord(Index: Standard_Integer, Xi: Standard_Real): void;
        SetCoord(Xp: Standard_Real, Yp: Standard_Real, Zp: Standard_Real): void;
        SetX(X: Standard_Real): void;
        SetY(Y: Standard_Real): void;
        SetZ(Z: Standard_Real): void;
        Coord(Index: Standard_Integer): Standard_Real;
        X(): Standard_Real;
        Y(): Standard_Real;
        Z(): Standard_Real;
        BaryCenter(Alpha: Standard_Real, P: gp_Pnt, Beta: Standard_Real): void;
        IsEqual(Other: gp_Pnt, LinearTolerance: Standard_Real): Standard_Boolean;
        Distance(Other: gp_Pnt): Standard_Real;
        SquareDistance(Other: gp_Pnt): Standard_Real;
        Mirror(P: gp_Pnt): void;
        Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
        Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Pnt;
        Scale(P: gp_Pnt, S: Standard_Real): void;
        Scaled(P: gp_Pnt, S: Standard_Real): gp_Pnt;
        Transform(T: gp_Trsf): void;
        Transformed(T: gp_Trsf): gp_Pnt;
        Translated(V: gp_Vec): gp_Pnt;
        Translated(P1: gp_Pnt, P2: gp_Pnt): gp_Pnt;
    }
    class GC_MakeArcOfCircle {
        constructor(Circ: gp_Circ, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
        constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
        Value(): Handle_Geom_TrimmedCurve;
    }
    class GC_MakeSegment {
        constructor(P1: gp_Pnt, P2: gp_Pnt);
        constructor(Line: gp_Lin, U1: Standard_Real, U2: Standard_Real);
        Value(): Handle_Geom_TrimmedCurve;
    }
    class TopoDS_Edge extends TopoDS_Shape {
        constructor();
    }
    class TopoDS_Wire extends TopoDS_Shape {
        constructor();
    }
    class TopoDS_Compound extends TopoDS_Shape {
        constructor();
    }
    class TopoDS_Face extends TopoDS_Shape {
        constructor();
    }
    class TopoDS_Vertex extends TopoDS_Shape {
        constructor();
    }
    class gp_Ax1 {
        constructor();
    }
    class gp_Ax2 {
        constructor();
        constructor(P: gp_Pnt, V: gp_Dir);
    }
    class gp {
        OX(): gp_Ax1;
        DZ(): gp_Dir;
    }
    class gp_Dir {
        constructor();
        constructor(V: gp_Vec);
        constructor(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real);
        SetCoord(Index: Standard_Integer, Xi: Standard_Real): void;
        SetCoord(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real): void;
        SetX(X: Standard_Real): void;
        SetY(Y: Standard_Real): void;
        SetZ(Z: Standard_Real): void;
        Coord(Index: Standard_Integer): Standard_Real;
        X(): Standard_Real;
        Y(): Standard_Real;
        Z(): Standard_Real;
        IsEqual(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
        IsNormal(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
        IsOpposite(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
        IsParallel(Other: gp_Dir, AngularTolerance: Standard_Real): Standard_Boolean;
        Angle(Other: gp_Dir): Standard_Real;
        AngleWithRef(Other: gp_Dir, VRef: gp_Dir): Standard_Real;
        Cross(Right: gp_Dir): void;
        Crossed(Right: gp_Dir): gp_Dir;
        CrossCross(V1: gp_Dir, V2: gp_Dir): void;
        CrossCrossed(V1: gp_Dir, V2: gp_Dir): gp_Dir;
        Dot(Other: gp_Dir): Standard_Real;
        DotCross(V1: gp_Dir, V2: gp_Dir): Standard_Real;
        Reversed(): gp_Dir;
        Mirror(V: gp_Dir): void;
        Mirrored(V: gp_Dir): gp_Dir;
        Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
        Rotated(A1: gp_Ax1, Ang: Standard_Real): gp_Dir;
        Transform(T: gp_Trsf): void;
        Transformed(T: gp_Trsf): gp_Dir;
    }
    class gp_Trsf {
        constructor();
        SetMirror(A1: gp_Ax1): void;
    }
    class BRepBuilderAPI_Transform extends BRepBuilderAPI_ModifyShape {
        constructor(S: TopoDS_Shape, T: gp_Trsf, Copy?: Standard_Boolean);
    }
    class BRepBuilderAPI_ModifyShape extends BRepBuilderAPI_MakeShape {
    }
    class TopoDS {
        Vertex(S: TopoDS_Shape): TopoDS_Vertex;
        Edge(S: TopoDS_Shape): TopoDS_Edge;
        Wire(S: TopoDS_Shape): TopoDS_Wire;
        Face(S: TopoDS_Shape): TopoDS_Face;
        Shell(S: TopoDS_Shape): TopoDS_Shell;
        Solid(S: TopoDS_Shape): TopoDS_Solid;
        CompSolid(S: TopoDS_Shape): TopoDS_CompSolid;
        Compound(S: TopoDS_Shape): TopoDS_Compound;
    }
    class BRepBuilderAPI_MakeFace {
        constructor(W: TopoDS_Wire, OnlyPlane?: Standard_Boolean);
        Face(): TopoDS_Face;
    }
    class BRepFilletAPI_MakeFillet extends BRepFilletAPI_LocalOperation {
        constructor(S: TopoDS_Shape);
        Add(Radius: Standard_Real, E: TopoDS_Edge): void;
    }
    class BRepFilletAPI_LocalOperation extends BRepBuilderAPI_MakeShape {
    }
    class TopExp_Explorer {
        constructor();
        constructor(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid?: TopAbs_ShapeEnum);
        Init(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid?: TopAbs_ShapeEnum): void;
        More(): Standard_Boolean;
        Next(): void;
        Current(): TopoDS_Shape;
        ReInit(): void;
        Depth(): Standard_Integer;
        Clear(): void;
        Destroy(): void;
    }
    class TopLoc_Location {
        constructor();
        constructor(T: gp_Trsf);
        Identity(): void;
        FirstPower(): Standard_Integer;
        NextLocation(): TopLoc_Location;
        Transformation(): gp_Trsf;
    }
    class Adaptor3d_Curve {
        FirstParameter(): Standard_Real;
        LastParameter(): Standard_Real;
        IsClosed(): Standard_Boolean;
        IsPeriodic(): Standard_Boolean;
        Period(): Standard_Real;
        Value(U: Standard_Real): gp_Pnt;
        D0(U: Standard_Real, P: gp_Pnt): void;
        D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
        D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
        D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
        DN(U: Standard_Real, N: Standard_Integer): void;
        Resolution(R3d: Standard_Real): Standard_Real;
        Line(): gp_Lin;
        Circle(): gp_Circ;
        Degree(): Standard_Integer;
        IsRational(): Standard_Boolean;
        NbPoles(): Standard_Integer;
        NbKnots(): Standard_Integer;
    }
    class BRepAdaptor_Curve extends Adaptor3d_Curve {
        constructor();
        constructor(E: TopoDS_Edge);
        constructor(E: TopoDS_Edge, F: TopoDS_Face);
        Reset(): void;
        Initialize(E: TopoDS_Edge): void;
        Initialize(E: TopoDS_Edge, F: TopoDS_Face): void;
        Trsf(): gp_Trsf;
        Is3DCurve(): Standard_Boolean;
        IsCurveOnSurface(): Standard_Boolean;
        Edge(): TopoDS_Edge;
        Tolerance(): Standard_Real;
        FirstParameter(): Standard_Real;
        LastParameter(): Standard_Real;
        IsClosed(): Standard_Boolean;
        IsPeriodic(): Standard_Boolean;
        Period(): Standard_Real;
        Value(U: Standard_Real): gp_Pnt;
        D0(U: Standard_Real, P: gp_Pnt): void;
        D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
        D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
        D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
        DN(U: Standard_Real, N: Standard_Integer): void;
        Resolution(R3d: Standard_Real): Standard_Real;
        Line(): gp_Lin;
        Circle(): gp_Circ;
        Degree(): Standard_Integer;
        IsRational(): Standard_Boolean;
        NbPoles(): Standard_Integer;
        NbKnots(): Standard_Integer;
    }
    class GCPnts_TangentialDeflection {
        constructor();
        constructor(C: Adaptor3d_Curve, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints?: Standard_Integer, UTol?: Standard_Real, theMinLen?: Standard_Real);
        constructor(C: Adaptor3d_Curve, FirstParameter: Standard_Real, LastParameter: Standard_Real, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real);
        Initialize(C: Adaptor3d_Curve, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints?: Standard_Integer, UTol?: Standard_Real, theMinLen?: Standard_Real): void;
        Initialize(C: Adaptor3d_Curve, FirstParameter: Standard_Real, LastParameter: Standard_Real, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real): void;
        AddPoint(thePnt: gp_Pnt, theParam: Standard_Real, theIsReplace?: Standard_Boolean): Standard_Integer;
        NbPoints(): Standard_Integer;
        Parameter(I: Standard_Integer): Standard_Real;
        Value(I: Standard_Integer): gp_Pnt;
        ArcAngularStep(theRadius: Standard_Real, theLinearDeflection: Standard_Real, theAngularDeflection: Standard_Real, theMinLength: Standard_Real): Standard_Real;
    }
    class Geom_Curve {
        Reverse(): void;
        ReversedParameter(U: Standard_Real): Standard_Real;
        TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
        ParametricTransformation(T: gp_Trsf): Standard_Real;
        Reversed(): Handle_Geom_Curve;
        FirstParameter(): Standard_Real;
        LastParameter(): Standard_Real;
        IsClosed(): Standard_Boolean;
        IsPeriodic(): Standard_Boolean;
        Period(): Standard_Real;
        IsCN(N: Standard_Integer): Standard_Boolean;
        D0(U: Standard_Real, P: gp_Pnt): void;
        D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
        D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
        D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
        DN(U: Standard_Real, N: Standard_Integer): void;
        Value(U: Standard_Real): gp_Pnt;
    }
    class BRep_Tool {
        IsClosed(S: TopoDS_Shape): Standard_Boolean;
        Surface(F: TopoDS_Face): Handle_Geom_Surface;
        Triangulation(F: TopoDS_Face, L: TopLoc_Location): Handle_Poly_Triangulation;
        Tolerance(F: TopoDS_Face): Standard_Real;
        NaturalRestriction(F: TopoDS_Face): Standard_Boolean;
        IsGeometric(E: TopoDS_Edge): Standard_Boolean;
        Curve(E: TopoDS_Edge, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): Handle_Geom_Curve;
        Polygon3D(E: TopoDS_Edge, L: TopLoc_Location): Handle_Poly_Polygon3D;
        IsClosed(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
        IsClosed(E: TopoDS_Edge, T: Handle_Poly_Triangulation, L: TopLoc_Location): Standard_Boolean;
        SameParameter(E: TopoDS_Edge): Standard_Boolean;
        SameRange(E: TopoDS_Edge): Standard_Boolean;
        Degenerated(E: TopoDS_Edge): Standard_Boolean;
        Range(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): void;
        Range(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real): void;
        HasContinuity(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): Standard_Boolean;
        HasContinuity(E: TopoDS_Edge): Standard_Boolean;
        Parameter(V: TopoDS_Vertex, E: TopoDS_Edge): Standard_Real;
        Parameter(V: TopoDS_Vertex, E: TopoDS_Edge, F: TopoDS_Face): Standard_Real;
        MaxTolerance(theShape: TopoDS_Shape, theSubShape: TopAbs_ShapeEnum): Standard_Real;
    }
    class Poly_Polygon3D {
        constructor(Nodes: TColgp_Array1OfPnt);
        constructor(Nodes: TColgp_Array1OfPnt, Parameters: TColStd_Array1OfReal);
        Copy(): Handle_Poly_Polygon3D;
        Deflection(): Standard_Real;
        NbNodes(): Standard_Integer;
        Nodes(): TColgp_Array1OfPnt;
        HasParameters(): Standard_Boolean;
        Parameters(): TColStd_Array1OfReal;
        ChangeParameters(): TColStd_Array1OfReal;
    }
    class GCE2d_MakeSegment {
        constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
        Value(): Handle_Geom2d_TrimmedCurve;
    }
    class Geom_BoundedCurve extends Geom_Curve {
    }
    class Geom2d_Ellipse extends Geom2d_Conic {
        constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense?: Standard_Boolean);
    }
    class Geom2d_TrimmedCurve extends Geom2d_BoundedCurve {
        constructor(C: Handle_Geom2d_Curve, U1: Standard_Real, U2: Standard_Real, Sense?: Standard_Boolean, theAdjustPeriodic?: Standard_Boolean);
    }
    class Geom_TrimmedCurve extends Geom_BoundedCurve {
        constructor(C: Handle_Geom_Curve, U1: Standard_Real, U2: Standard_Real, Sense?: Standard_Boolean, theAdjustPeriodic?: Standard_Boolean);
        Reverse(): void;
        ReversedParameter(U: Standard_Real): Standard_Real;
        SetTrim(U1: Standard_Real, U2: Standard_Real, Sense?: Standard_Boolean, theAdjust?: Standard_Boolean): void;
        BasisCurve(): Handle_Geom_Curve;
        IsCN(N: Standard_Integer): Standard_Boolean;
        FirstParameter(): Standard_Real;
        IsClosed(): Standard_Boolean;
        IsPeriodic(): Standard_Boolean;
        Period(): Standard_Real;
        LastParameter(): Standard_Real;
        StartPoint(): gp_Pnt;
        D0(U: Standard_Real, P: gp_Pnt): void;
        D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
        D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
        D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
        DN(U: Standard_Real, N: Standard_Integer): void;
        Transform(T: gp_Trsf): void;
        TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
        ParametricTransformation(T: gp_Trsf): Standard_Real;
    }
    class Standard_Transient {
        get_type_name(): string;
        DynamicType(): Handle_Standard_Type;
    }
    class Standard_Type extends Standard_Transient {
        Name(): string;
    }
    class Geom_Geometry extends Standard_Transient {
    }
    class Geom_Surface extends Geom_Geometry {
    }
    class Geom_ElementarySurface extends Geom_Surface {
        Location(): gp_Pnt;
    }
    class Geom_Plane extends Geom_ElementarySurface {
    }
    class gp_Ax3 {
        constructor();
    }
    class gp_Pnt2d {
        constructor();
        constructor(Xp: Standard_Real, Yp: Standard_Real);
        X(): Standard_Real;
        Y(): Standard_Real;
    }
    class gp_Dir2d {
        constructor();
        constructor(Xv: Standard_Real, Yv: Standard_Real);
    }
    class gp_Ax2d {
        constructor();
        constructor(P: gp_Pnt2d, V: gp_Dir2d);
    }
    class Geom_CylindricalSurface {
        constructor(A3: gp_Ax3, Radius: Standard_Real);
    }
    class Geom2d_Curve {
        Period(): Standard_Real;
        Value(U: Standard_Real): gp_Pnt2d;
    }
    class Geom2d_BoundedCurve extends Geom2d_Curve {
    }
    class Geom2d_Conic extends Geom2d_Curve {
    }
    class Handle_Geom2d_TrimmedCurve {
        constructor();
        constructor(thePtr: Geom2d_TrimmedCurve);
        IsNull(): boolean;
        Nullify(): void;
        get(): Geom2d_TrimmedCurve;
    }
    class Handle_Geom2d_Curve {
        constructor();
        constructor(thePtr: Geom2d_Curve);
        IsNull(): boolean;
        Nullify(): void;
        get(): Geom2d_Curve;
    }
    class Handle_Standard_Type {
        constructor();
        constructor(thePtr: Standard_Type);
        IsNull(): boolean;
        Nullify(): void;
        get(): Standard_Type;
    }
    class Handle_Geom_Plane {
        constructor();
        constructor(thePtr: Geom_Plane);
        IsNull(): boolean;
        Nullify(): void;
        get(): Geom_Plane;
    }
    class Handle_Geom_Surface {
        constructor();
        constructor(thePtr: Geom_Surface);
        IsNull(): boolean;
        Nullify(): void;
        get(): Geom_Surface;
    }
    class Handle_Geom_Curve {
        constructor();
        constructor(thePtr: Geom_Curve);
        IsNull(): boolean;
        Nullify(): void;
        get(): Geom_Curve;
    }
    class Handle_Geom_TrimmedCurve {
        constructor();
        constructor(thePtr: Geom_TrimmedCurve);
        IsNull(): boolean;
        Nullify(): void;
        get(): Geom_TrimmedCurve;
    }
    class Handle_Poly_Polygon3D {
        constructor();
        constructor(thePtr: Poly_Polygon3D);
        IsNull(): boolean;
        Nullify(): void;
        get(): Poly_Polygon3D;
    }
    class Handle_ShapeFix_Shell {
        IsNull(): boolean;
        get(): ShapeFix_Shell;
    }
    class Handle_Poly_Triangulation {
        constructor();
        constructor(thePtr: Poly_Triangulation);
        IsNull(): boolean;
        Nullify(): void;
        get(): Poly_Triangulation;
    }
    class Handle_XSControl_WorkSession {
        constructor();
        constructor(thePtr: XSControl_WorkSession);
        IsNull(): boolean;
        Nullify(): void;
        get(): XSControl_WorkSession;
    }
    class Handle_Transfer_TransientProcess {
        constructor();
        constructor(thePtr: Transfer_TransientProcess);
        IsNull(): boolean;
        Nullify(): void;
        get(): Transfer_TransientProcess;
    }
    class Handle_Message_ProgressIndicator {
        constructor();
        constructor(thePtr: Message_ProgressIndicator);
        IsNull(): boolean;
        Nullify(): void;
        get(): Message_ProgressIndicator;
    }
    class TColgp_Array1OfPnt {
        constructor();
        constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
        Length(): Standard_Integer;
        Lower(): Standard_Integer;
        Upper(): Standard_Integer;
        Value(theIndex: Standard_Integer): gp_Pnt;
    }
    class TColgp_Array1OfDir {
        constructor();
        constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
        Length(): Standard_Integer;
        Lower(): Standard_Integer;
        Upper(): Standard_Integer;
        Value(theIndex: Standard_Integer): gp_Dir;
    }
    class Poly_Array1OfTriangle {
        constructor();
        constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
        Length(): Standard_Integer;
        Lower(): Standard_Integer;
        Upper(): Standard_Integer;
        Value(theIndex: Standard_Integer): Poly_Triangle;
    }
    class TColStd_Array1OfReal {
        constructor();
        constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
        Length(): Standard_Integer;
        Lower(): Standard_Integer;
        Upper(): Standard_Integer;
        Value(theIndex: Standard_Integer): Standard_Real;
    }
    class XSControl_WorkSession {
        constructor();
        ClearData(theMode: Standard_Integer): void;
        SelectNorm(theNormName: Standard_CString): Standard_Boolean;
        ClearContext(): void;
        InitTransferReader(theMode: Standard_Integer): void;
        MapReader(): Handle_Transfer_TransientProcess;
        SetMapReader(theTP: Handle_Transfer_TransientProcess): Standard_Boolean;
        TransferReadRoots(): Standard_Integer;
        TransferWriteShape(theShape: TopoDS_Shape, theCompGraph?: Standard_Boolean): IFSelect_ReturnStatus;
    }
    class Transfer_ProcessForTransient {
        constructor();
        GetProgress(): Handle_Message_ProgressIndicator;
        SetProgress(theProgess: Handle_Message_ProgressIndicator): void;
    }
    class Transfer_TransientProcess extends Transfer_ProcessForTransient {
        constructor(nb?: Standard_Integer);
        HasGraph(): Standard_Boolean;
    }
    class Message_ProgressIndicator {
        GetPosition(): Standard_Real;
        GetValue(): Standard_Real;
        NewScope(name: Standard_CString): Standard_Boolean;
        NewScope(span: Standard_Real, name: Standard_CString): Standard_Boolean;
        EndScope(): Standard_Boolean;
        Reset(): void;
    }
    class Poly_Triangulation {
        constructor(nbNodes: Standard_Integer, nbTriangles: Standard_Integer, UVNodes: Standard_Boolean);
        Copy(): Handle_Poly_Triangulation;
        constructor(theTriangulation: Handle_Poly_Triangulation);
        Deflection(theDeflection: Standard_Real): void;
        RemoveUVNodes(): void;
        NbNodes(): Standard_Integer;
        NbTriangles(): Standard_Integer;
        HasUVNodes(): Standard_Boolean;
        Nodes(): TColgp_Array1OfPnt;
        ChangeNodes(): TColgp_Array1OfPnt;
        Triangles(): Poly_Array1OfTriangle;
        ChangeTriangles(): Poly_Array1OfTriangle;
        HasNormals(): Standard_Boolean;
        Normal(theIndex: Standard_Integer): gp_Dir;
        SetNormal(theIndex: Standard_Integer, theNormal: gp_Dir): void;
    }
    class Poly_Triangle {
        constructor();
        constructor(N1: Standard_Integer, N2: Standard_Integer, N3: Standard_Integer);
        Set(N1: Standard_Integer, N2: Standard_Integer, N3: Standard_Integer): void;
        Set(Index: Standard_Integer, Node: Standard_Integer): void;
        Value(Index: Standard_Integer): Standard_Integer;
        ChangeValue(Index: Standard_Integer): Standard_Integer;
    }
    class Poly_Connect {
        constructor();
        constructor(theTriangulation: Handle_Poly_Triangulation);
        Load(theTriangulation: Handle_Poly_Triangulation): void;
        Triangulation(): Handle_Poly_Triangulation;
        Triangle(N: Standard_Integer): Standard_Integer;
        Triangles(T: Standard_Integer, t1: Standard_Integer, t2: Standard_Integer, t3: Standard_Integer): void;
        Nodes(T: Standard_Integer, t1: Standard_Integer, t2: Standard_Integer, t3: Standard_Integer): void;
        Initialize(N: Standard_Integer): void;
        More(): Standard_Boolean;
        Next(): void;
        Value(): Standard_Integer;
    }
    class StdPrs_ToolTriangulatedShape {
        constructor();
        IsTriangulated(theShape: TopoDS_Shape): Standard_Boolean;
        IsClosed(theShape: TopoDS_Shape): Standard_Boolean;
        ComputeNormals(theFace: TopoDS_Face, theTris: Handle_Poly_Triangulation): void;
        ComputeNormals(theFace: TopoDS_Face, theTris: Handle_Poly_Triangulation, thePolyConnect: Poly_Connect): void;
        Normal(theFace: TopoDS_Face, thePolyConnect: Poly_Connect, theNormals: TColgp_Array1OfDir): void;
    }
    class BRepBuilderAPI_Sewing {
        constructor(tolerance?: Standard_Real, option1?: Standard_Boolean, option2?: Standard_Boolean, option3?: Standard_Boolean, option4?: Standard_Boolean);
        Init(tolerance?: Standard_Real, option1?: Standard_Boolean, option2?: Standard_Boolean, option3?: Standard_Boolean, option4?: Standard_Boolean): void;
        Load(shape: TopoDS_Shape): void;
        Add(shape: TopoDS_Shape): void;
        Perform(thePI?: Handle_Message_ProgressIndicator): void;
        SewedShape(): TopoDS_Shape;
        NbFreeEdges(): Standard_Integer;
        FreeEdge(index: Standard_Integer): TopoDS_Edge;
        NbMultipleEdges(): Standard_Integer;
        MultipleEdge(index: Standard_Integer): TopoDS_Edge;
        NbContigousEdges(): Standard_Integer;
        ContigousEdge(index: Standard_Integer): TopoDS_Edge;
        IsSectionBound(section: TopoDS_Edge): Standard_Boolean;
        SectionToBoundary(section: TopoDS_Edge): TopoDS_Edge;
        NbDegeneratedShapes(): Standard_Integer;
        DegeneratedShape(index: Standard_Integer): TopoDS_Shape;
        IsDegenerated(shape: TopoDS_Shape): Standard_Boolean;
        IsModified(shape: TopoDS_Shape): Standard_Boolean;
        Modified(shape: TopoDS_Shape): TopoDS_Shape;
        IsModifiedSubShape(shape: TopoDS_Shape): Standard_Boolean;
        ModifiedSubShape(shape: TopoDS_Shape): TopoDS_Shape;
        Dump(): void;
        NbDeletedFaces(): Standard_Integer;
        DeletedFace(index: Standard_Integer): TopoDS_Face;
        WhichFace(theEdg: TopoDS_Edge, index?: Standard_Integer): TopoDS_Face;
        SameParameterMode(): Standard_Boolean;
        SetSameParameterMode(SameParameterMode: Standard_Boolean): void;
        Tolerance(): Standard_Real;
        SetTolerance(theToler: Standard_Real): void;
        MinTolerance(): Standard_Real;
        SetMinTolerance(theMinToler: Standard_Real): void;
        MaxTolerance(): Standard_Real;
        SetMaxTolerance(theMaxToler: Standard_Real): void;
        FaceMode(): Standard_Boolean;
        SetFaceMode(theFaceMode: Standard_Boolean): void;
        FloatingEdgesMode(): Standard_Boolean;
        SetFloatingEdgesMode(theFloatingEdgesMode: Standard_Boolean): void;
        LocalTolerancesMode(): Standard_Boolean;
        SetLocalTolerancesMode(theLocalTolerancesMode: Standard_Boolean): void;
        SetNonManifoldMode(theNonManifoldMode: Standard_Boolean): void;
        NonManifoldMode(): Standard_Boolean;
    }
    class TopoDS_Builder {
        MakeWire(W: TopoDS_Wire): void;
        MakeCompound(C: TopoDS_Compound): void;
        Add(S: TopoDS_Shape, C: TopoDS_Shape): void;
        Remove(S: TopoDS_Shape, C: TopoDS_Shape): void;
    }
    class BRep_Builder extends TopoDS_Builder {
        constructor();
        MakeFace(F: TopoDS_Face): void;
        MakeFace(F: TopoDS_Face, T: Handle_Poly_Triangulation): void;
        UpdateFace(F: TopoDS_Face, T: Handle_Poly_Triangulation): void;
        NaturalRestriction(F: TopoDS_Face, N: Standard_Boolean): void;
        MakeEdge(E: TopoDS_Edge): void;
        SameParameter(E: TopoDS_Edge, S: Standard_Boolean): void;
        SameRange(E: TopoDS_Edge, S: Standard_Boolean): void;
        Degenerated(E: TopoDS_Edge, D: Standard_Boolean): void;
        Range(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real, Only3d?: Standard_Boolean): void;
        Transfert(Ein: TopoDS_Edge, Eout: TopoDS_Edge): void;
        MakeVertex(V: TopoDS_Vertex): void;
        MakeVertex(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
        UpdateVertex(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
        UpdateVertex(Ve: TopoDS_Vertex, U: Standard_Real, V: Standard_Real, F: TopoDS_Face, Tol: Standard_Real): void;
        UpdateVertex(V: TopoDS_Vertex, Tol: Standard_Real): void;
        Transfert(Ein: TopoDS_Edge, Eout: TopoDS_Edge, Vin: TopoDS_Vertex, Vout: TopoDS_Vertex): void;
    }
    class BRepAdaptor_Surface {
        constructor();
        constructor(F: TopoDS_Face, R?: Standard_Boolean);
        Initialize(F: TopoDS_Face, R?: Standard_Boolean): void;
        Trsf(): gp_Trsf;
        Face(): TopoDS_Face;
        Tolerance(): Standard_Real;
        FirstUParameter(): Standard_Real;
        LastUParameter(): Standard_Real;
        FirstVParameter(): Standard_Real;
        LastVParameter(): Standard_Real;
        IsUClosed(): Standard_Boolean;
        IsVClosed(): Standard_Boolean;
        IsUPeriodic(): Standard_Boolean;
        UPeriod(): Standard_Real;
        IsVPeriodic(): Standard_Boolean;
        VPeriod(): Standard_Real;
        Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
        D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
        D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
        D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
        D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
        DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
        UResolution(R3d: Standard_Real): Standard_Real;
        VResolution(R3d: Standard_Real): Standard_Real;
        GetType(): GeomAbs_SurfaceType;
        Plane(): gp_Pln;
        UDegree(): Standard_Integer;
        NbUPoles(): Standard_Integer;
        VDegree(): Standard_Integer;
        NbVPoles(): Standard_Integer;
        NbUKnots(): Standard_Integer;
        NbVKnots(): Standard_Integer;
        IsURational(): Standard_Boolean;
        IsVRational(): Standard_Boolean;
        AxeOfRevolution(): gp_Ax1;
        Direction(): gp_Dir;
        OffsetValue(): Standard_Real;
    }
    class StlAPI_Reader {
        constructor();
        Read(theShape: TopoDS_Shape, theFileName: Standard_CString): Standard_Boolean;
    }
    type TopAbs_Orientation = "TopAbs_FORWARD" | "TopAbs_REVERSED" | "TopAbs_INTERNAL" | "TopAbs_EXTERNAL";
    type TopAbs_ShapeEnum = "TopAbs_COMPOUND" | "TopAbs_COMPSOLID" | "TopAbs_SOLID" | "TopAbs_SHELL" | "TopAbs_FACE" | "TopAbs_WIRE" | "TopAbs_EDGE" | "TopAbs_VERTEX" | "TopAbs_SHAPE";
    type GeomAbs_SurfaceType = "GeomAbs_Plane" | "GeomAbs_Cylinder" | "GeomAbs_Cone" | "GeomAbs_Sphere" | "GeomAbs_Torus" | "GeomAbs_BezierSurface" | "GeomAbs_BSplineSurface" | "GeomAbs_SurfaceOfRevolution" | "GeomAbs_SurfaceOfExtrusion" | "GeomAbs_OffsetSurface" | "GeomAbs_OtherSurface";
    class BRepAlgoAPI_Fuse extends BRepAlgoAPI_BooleanOperation {
        constructor(S1: TopoDS_Shape, S2: TopoDS_Shape);
    }
    class BRepAlgoAPI_Cut extends BRepAlgoAPI_BooleanOperation {
        constructor(S1: TopoDS_Shape, S2: TopoDS_Shape);
    }
    class BRepAlgoAPI_BooleanOperation extends BRepBuilderAPI_MakeShape {
    }
    class gp_Lin {
        constructor();
        constructor(A1: gp_Ax1);
    }
    class gp_Circ {
    }
    class gp_Elips {
    }
    class gp_Hypr {
    }
    class gp_Parab {
    }
    class BRepBuilderAPI_MakeEdge {
        constructor(C: Handle_Geom_Curve);
        constructor(L: Handle_Geom2d_Curve, S: Handle_Geom_Surface);
        Edge(): TopoDS_Edge;
    }
    class BRepBuilderAPI_MakeWire extends BRepBuilderAPI_MakeShape {
        constructor();
        constructor(E: TopoDS_Edge);
        constructor(E1: TopoDS_Edge, E2: TopoDS_Edge);
        constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge);
        Add(W: TopoDS_Wire): void;
        Wire(): TopoDS_Wire;
    }
    class BRepLib {
        BuildCurve3d(E: TopoDS_Edge, Tolerance?: Standard_Real, Continuity?: GeomAbs_Shape, MaxDegree?: Standard_Integer, MaxSegment?: Standard_Integer): Standard_Boolean;
        BuildCurves3d(S: TopoDS_Shape): Standard_Boolean;
    }
    class BRepOffsetAPI_ThruSections extends BRepBuilderAPI_MakeShape {
        constructor(isSolid?: Standard_Boolean, ruled?: Standard_Boolean, pres3d?: Standard_Real);
        AddWire(wire: TopoDS_Wire): void;
        CheckCompatibility(check?: Standard_Boolean): void;
    }
    class BRepBuilderAPI_MakeVertex extends BRepBuilderAPI_MakeShape {
        constructor(P: gp_Pnt);
        Vertex(): TopoDS_Vertex;
    }
    class BRepBuilderAPI_MakePolygon extends BRepBuilderAPI_MakeShape {
        constructor();
        constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
        constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, Close: Standard_Boolean);
        constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, V4: TopoDS_Vertex, Close: Standard_Boolean);
        Add(V: TopoDS_Vertex): void;
        Added(): Standard_Boolean;
        Close(): void;
        FirstVertex(): TopoDS_Vertex;
        LastVertex(): TopoDS_Vertex;
        IsDone(): Standard_Boolean;
        Edge(): TopoDS_Edge;
        Wire(): TopoDS_Wire;
    }
    type IFSelect_ReturnStatus = "IFSelect_RetVoid" | "IFSelect_RetDone" | "IFSelect_RetError" | "IFSelect_RetFail" | "IFSelect_RetStop";
    class XSControl_Reader {
        constructor();
        constructor(norm: Standard_CString);
        constructor(WS: Handle_XSControl_WorkSession, scratch: Standard_Boolean);
        SetNorm(norm: Standard_CString): Standard_Boolean;
        SetWS(WS: Handle_XSControl_WorkSession, scratch?: Standard_Boolean): void;
        WS(): Handle_XSControl_WorkSession;
        ReadFile(filename: string): IFSelect_ReturnStatus;
        NbRootsForTransfer(): Standard_Integer;
        TransferOneRoot(num?: Standard_Integer): Standard_Boolean;
        TransferOne(num: Standard_Integer): Standard_Boolean;
        TransferRoots(): Standard_Integer;
        ClearShapes(): void;
        NbShapes(): Standard_Integer;
        Shape(num?: Standard_Integer): TopoDS_Shape;
        OneShape(): TopoDS_Shape;
        PrintStatsTransfer(what: Standard_Integer, mode?: Standard_Integer): void;
    }
    class STEPControl_Reader extends XSControl_Reader {
        constructor();
    }
    class IGESControl_Reader extends XSControl_Reader {
        constructor();
    }
    class TopTools_ListOfShape {
        constructor();
        Append(theItem: TopoDS_Shape): TopoDS_Shape;
    }
    class BRepOffsetAPI_MakeOffsetShape extends BRepBuilderAPI_MakeShape {
    }
    class BRepOffsetAPI_MakeThickSolid extends BRepOffsetAPI_MakeOffsetShape {
        constructor();
        MakeThickSolidByJoin(S: TopoDS_Shape, ClosingFaces: TopTools_ListOfShape, Offset: Standard_Real, Tol: Standard_Real): void;
    }
    class ShapeFix_Face {
        constructor();
        constructor(face: TopoDS_Face);
        ClearModes(): void;
        Init(face: TopoDS_Face): void;
        SetPrecision(preci: Standard_Real): void;
        SetMinTolerance(mintol: Standard_Real): void;
        SetMaxTolerance(maxtol: Standard_Real): void;
        FixWireMode(): Standard_Integer;
        FixOrientationMode(): Standard_Integer;
        FixAddNaturalBoundMode(): Standard_Integer;
        FixMissingSeamMode(): Standard_Integer;
        FixSmallAreaWireMode(): Standard_Integer;
        RemoveSmallAreaFaceMode(): Standard_Integer;
        FixIntersectingWiresMode(): Standard_Integer;
        FixLoopWiresMode(): Standard_Integer;
        FixSplitFaceMode(): Standard_Integer;
        AutoCorrectPrecisionMode(): Standard_Integer;
        FixPeriodicDegeneratedMode(): Standard_Integer;
        Face(): TopoDS_Face;
        Result(): TopoDS_Shape;
        Add(wire: TopoDS_Wire): void;
        Perform(): Standard_Boolean;
        FixOrientation(): Standard_Boolean;
        FixAddNaturalBound(): Standard_Boolean;
        FixMissingSeam(): Standard_Boolean;
        FixSmallAreaWire(theIsRemoveSmallFace: Standard_Boolean): Standard_Boolean;
        FixIntersectingWires(): Standard_Boolean;
        FixWiresTwoCoincEdges(): Standard_Boolean;
        FixPeriodicDegenerated(): Standard_Boolean;
    }
    class ShapeFix_Shape {
        constructor();
        constructor(shape: TopoDS_Shape);
        Init(shape: TopoDS_Shape): void;
        Perform(theProgress?: Handle_Message_ProgressIndicator): Standard_Boolean;
        Shape(): TopoDS_Shape;
        FixShellTool(): Handle_ShapeFix_Shell;
        Status(status: ShapeExtend_Status): Standard_Boolean;
        SetPrecision(preci: Standard_Real): void;
        SetMinTolerance(mintol: Standard_Real): void;
        SetMaxTolerance(maxtol: Standard_Real): void;
        FixSolidMode(): Standard_Integer;
        FixFreeShellMode(): Standard_Integer;
        FixFreeFaceMode(): Standard_Integer;
        FixFreeWireMode(): Standard_Integer;
        FixSameParameterMode(): Standard_Integer;
        FixVertexPositionMode(): Standard_Integer;
        FixVertexTolMode(): Standard_Integer;
    }
    class TopoDS_Shell extends TopoDS_Shape {
    }
    class ShapeFix_Shell {
        constructor();
        constructor(shape: TopoDS_Shell);
        Init(shell: TopoDS_Shell): void;
        Perform(theProgress?: Handle_Message_ProgressIndicator): Standard_Boolean;
        FixFaceOrientation(shell: TopoDS_Shell, isAccountMultiConex?: Standard_Boolean, NonManifold?: Standard_Boolean): Standard_Boolean;
        Shell(): TopoDS_Shell;
        Shape(): TopoDS_Shape;
        NbShells(): Standard_Integer;
        ErrorFaces(): TopoDS_Compound;
        Status(status: ShapeExtend_Status): Standard_Boolean;
        SetPrecision(preci: Standard_Real): void;
        SetMinTolerance(mintol: Standard_Real): void;
        SetMaxTolerance(maxtol: Standard_Real): void;
        FixFaceMode(): Standard_Integer;
        FixOrientationMode(): Standard_Integer;
        SetNonManifoldFlag(isNonManifold: Standard_Boolean): void;
    }
    class TopoDS_CompSolid extends TopoDS_Shape {
        constructor();
    }
    class TopoDS_Solid extends TopoDS_Shape {
        constructor();
    }
    class BRepBuilderAPI_MakeSolid {
        constructor();
        constructor(S: TopoDS_CompSolid);
        constructor(S1: TopoDS_Shell, S2: TopoDS_Shell);
        constructor(S1: TopoDS_Shell, S2: TopoDS_Shell, S3: TopoDS_Shell);
        Add(S: TopoDS_Shell): void;
        IsDone(): Standard_Boolean;
        Solid(): TopoDS_Solid;
        IsDeleted(S: TopoDS_Shape): Standard_Boolean;
    }
    type BRepOffset_Mode = "BRepOffset_Skin" | "BRepOffset_Pipe" | "BRepOffset_RectoVerso";
    type GeomAbs_JoinType = "GeomAbs_Arc" | "GeomAbs_Tangent" | "GeomAbs_Intersection";
    type GeomAbs_Shape = "GeomAbs_C0" | "GeomAbs_G1" | "GeomAbs_C1" | "GeomAbs_G2" | "GeomAbs_C2" | "GeomAbs_C3" | "GeomAbs_CN";
    type ShapeExtend_Status = "ShapeExtend_OK" | "ShapeExtend_DONE1" | "ShapeExtend_DONE2" | "ShapeExtend_DONE3" | "ShapeExtend_DONE4" | "ShapeExtend_DONE5" | "ShapeExtend_DONE6" | "ShapeExtend_DONE7" | "ShapeExtend_DONE8" | "ShapeExtend_DONE" | "ShapeExtend_FAIL1" | "ShapeExtend_FAIL2" | "ShapeExtend_FAIL3" | "ShapeExtend_FAIL4" | "ShapeExtend_FAIL5" | "ShapeExtend_FAIL6" | "ShapeExtend_FAIL7" | "ShapeExtend_FAIL8" | "ShapeExtend_FAIL";
}