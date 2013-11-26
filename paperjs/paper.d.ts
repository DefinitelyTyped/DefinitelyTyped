// Type definitions for Paper.js v0.9.11
// Project: http://paperjs.org/
// Definitions by: Chris Dallaire <3dsorcery@gmail.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
  
// NOTE: This defintion file is written for typescript 0.8.3. Due to the rapid
// breaking changes that are still happening in Typescript, if you choose to 
// modify it to work with a newer version, please split it out into a new
// defition file.

declare module paper {

    export function setup(canvas: HTMLCanvasElement): void;

    export interface KeyModifiers {

        //#region Fields
        shift: bool;
        control: bool;
        option: bool;
        command: bool;
        capsLock: bool;
        //#endregion
        
    }

    export class PaperScope {

        //#region Fields
        version: number;
        project: Project;
        projects: Project[];
        view: View;
        views: View[];
        tool: Tool;
        tools: Tool[];
        //#endregion

        //#region Constructors
        constructor();
        //#endregion

        //#region Public Methods
        install(scope: any);
        setup(canvas: HTMLCanvasElement);
        clear();
        remove();
        //#endregion

        //#region Static Methods
        static get (id: string): PaperScope;
        static each(iter: () => any);
        //#endregion

    }

    export class PaperScript {

        //#region Static Methods
        static compile(code: string): string;
        static evaluate(code: string, scope: PaperScope): {};
        //#endregion
                
    }

    export class Point {

        //#region Fields
        x: number;
        y: number;
        length: number;
        angle: number;
        angleInRadians: number;
        quadrant: number;
        selected: bool;
        //#endregion

        //#region Constructors
        constructor(x: number, y: number);
        constructor(values: any[]);
        constructor(object: {});
        constructor(size: Size);
        constructor(point: Point);
        //#endregion
        
        //#region Operators
        add(point: Point): Point;
        add(x: number, y: number): Point;
        add(value: number): Point;

        subtract(point: Point): Point;
        subtract(x: number, y: number): Point;
        subtract(value: number): Point;

        multiply(point: Point): Point;
        multiply(x: number, y: number): Point;
        multiply(value: number): Point;

        divide(point: Point): Point;
        divide(x: number, y: number): Point;
        divide(value: number): Point;
        //#endregion

        //#region Public Methods
        clone(): Point;
        toString(): string;
        transform(matrix: Matrix): Point;

        getDistance(point: Point, squared: bool): number;
        normalize(length?: number);

        getAngle(): number;
        getAngleInRadians(): number;
        getDirectedAngle(point: Point): number;
        rotate(angle: number, center: Point): Point;

        isInside(rect: Rectangle): bool;
        isClose(point: Point, tolerance: number): bool;
        isColinear(point: Point): bool;
        isOrthogonal(point: Point): bool;
        isZero(): bool;
        isNan(): bool;

        dot(point: Point): number;
        cross(point: Point): number;
        project(point: Point): Point;
        //#endregion
                                                          
        //#region Static Methods
        static min(point1: Point, point2: Point): Point;
        static max(point1: Point, point2: Point): Point;
        //#endregion
                     
    }

    export class Size {

        //#region Fields
        width: number;
        height: number;
        //#endregion
        
        //#region Public Methods
        toString(): string;
        clone(): Size;

        isZero(): bool;
        isNan(): bool;

        round(): Size;
        ceil(): Size;
        floor(): Size;
        abs(): Size;
        //#endregion

        //#region Static Methods
        static min(size1: Size, size2: Size): Size;
        static max(size1: Size, size2: Size): Size;
        static random(): Size;
        //#endregion
       
    }

    export class Rectangle {

        //#region Fields
        x: number;
        y: number;
        width: number;
        height: number;
        point: Point;
        size: Size;
        left: number;
        top: number;
        right: number;
        bottom: number;
        center: Point;
        topLeft: Point;
        topRight: Point;
        bottomLeft: Point;
        bottomRight: Point;
        leftCenter: Point;
        topCenter: Point;
        rightCenter: Point;
        bottomCenter: Point;
        //#endregion

        //#region Constructors
        constructor(point: Point, size: Size);
        constructor(x: number, y: number, width: number, height: number);
        constructor(point1: Point, point2: Point);
        constructor(rect: Rectangle);
        //#endregion

        //#region Public Methods
        isEmpty(): bool;
        toString(): string;
        contains(point: Point): bool;
        contains(rect: Rectangle): bool;
        intersects(rect: Rectangle): bool;
        intersect(rect: Rectangle): Rectangle;
        unite(rect: Rectangle): Rectangle;
        include(point: Point);
        //#endregion

    }

    export class Matrix {

        //#region Fields
        scaleX: number;
        scaleY: number;
        shearX: number;
        shearY: number;
        translateX: number;
        translateY: number;
        values: number[];
        rotation: number;
        //#endregion

        //#region Constructors
        constructor(a: number, c: number, b: number, d: number, tx: number, ty: number);
        //#endregion

        //#region Public Methods
        clone(): Matrix;
        set (a: number, c: number, b: number, d: number, tx: number, ty: number): Matrix;
        scale(scale: number, center?: Point): Matrix;
        scale(hor: number, ver: number, center?: Point): Matrix;
        translate(point: Point): Matrix;
        translate(dx: number, dy: number): Matrix;
        rotate(angle: number, center: Point): Matrix;
        rotate(angle: number, x: number, y: number): Matrix;
        shear(point: Point, center?: Point): Matrix;
        shear(hor: number, ver: number, center?: Point): Matrix;
        toString(): string;
        concatenate(mx: Matrix): Matrix;
        preConcatenate(mx: Matrix): Matrix;
        transform(point: Point): Matrix;
        transform(src: number[], srcOff: number, dst: number[], dstOff: number, numPts: number): number[];
        inverseTransform(point: Point): Matrix;
        isIdentity(): bool;
        isInvertible(): bool;
        isSingular(): bool;
        createInverse(): Matrix;
        setToScale(hor: number, ver: number): Matrix;
        setToTranslation(dx: number, dy: number): Matrix;
        setToShear(hor: number, ver: number): Matrix;
        setToRotation(angle: number, x: number, y: number): Matrix;
        applyToContext(ctx: any, reset?: bool);
        //#endregion

        //#region Static Methods
        static getScaleInstance(hor: number, ver: number): Matrix;
        static getTranslateInstance(dx: number, dy: number): Matrix;
        static getShearInstance(hor: number, ver: number, center: Point): Matrix;
        static getRotateInstance(angle: number, x: number, y: number): Matrix;
        //#endregion
    
    }

    export class Item {

        //#region Fields
        id: number;
        name: string;
        position: Point;
        style: PathStyle;
        visible: bool;
        blendMode: string;
        opacity: number;
        guide: number;
        selected: bool;
        clipMask: bool;

        project: Project;
        layer: Layer;
        parent: Item;
        children: Item[];
        firstChild: Item;
        lastChild: Item;
        nextSibling: Item;
        previousSibling: Item;
        index: number;

        bounds: Rectangle;
        strokeBounds: Rectangle;
        handleBounds: Rectangle;

        strokeColor: any;
        strokeWidth: number;
        strokeCap: string;
        strokeJoin: string;
        dashOffset: number;
        dashArray: number[];
        miterLimit: number;

        fillColor: Color;
        //#endregion
       
        //#region Public Methods
        addChild(item: Item);
        insertChild(index, item: Item);
        addChildren(items: Item[]);
        insertChildren(index, items: Item[]);
        insertAbove(item: Item): bool;
        insertBelow(item: Item): bool;
        remove(): bool;
        removeChildren(): Item[];
        removeChildren(from: number, to?: number): Item[];
        reverseChildren();

        hasChildren(): bool;
        isAbove(item: Item): bool;
        isBelow(item: Item): bool;
        isParent(item: Item): bool;
        isChild(item: Item): bool;
        isDescendant(item: Item): bool;
        isAncestor(item: Item): bool;
        isGroupedWith(item: Item): bool;

        scale(scale: number, center: Point);
        scale(hor: number, ver: number, center?: Point);
        translate(delta: number);
        rotate(angle: number, center: Point);
        shear(point: Point, center: Point);
        shear(hor: number, ver: number, center: Point);
        transform(matrix: Matrix, flags?: any[]);
        fitBounds(rectangle: Rectangle, fill?: bool);

        removeOn(object: {});
        removeOnMove();
        removeOnDown();
        removeOnDrag();
        removeOnUp();
        //#endregion

    }

    export class Group extends Item {

        //#region Fields
        clipped: bool;
        //#endregion

        //#region Constructors
        constructor(children: Item[]);
        //#endregion

    }

    export class Layer extends Group {

        //#region Constructors
        constructor();
        constructor(children: Item[]);
        //#endregion
              
        //#region Public Methods
        activate();
        //#endregion
 
    }

    export class PlacedItem extends Item {

        //#region Fields
        matrix: Matrix;
        //#endregion

    }

    export class Raster extends PlacedItem {

        //#region Fields
        size: Size;
        width: number;
        height: number;
        ppi: number;
        context: {};
        image: HTMLImageElement;
        //#endregion

        //#region Constructors
        constructor(imageId: string);
        //#endregion
   
        //#region Public Methods
        getSubImage(rect: Rectangle): HTMLCanvasElement;
        drawImage(image: HTMLImageElement, point: Point);
        drawImage(image: HTMLCanvasElement, point: Point);
        getAverageColor(path: Path): Color;
        getAverageColor(rect: Rectangle): Color;
        getAverageColor(point: Point): Color;


        getPixel(x: number, y: number): RgbColor;
        getPixel(point: Point): RgbColor;
        setPixel(x: number, y: number, color: Color);
        setPixel(point: Point, color: Color);

        createData(size: Size): {};
        getData(rect: Rectangle): {};
        setData(data: {}, point: Point): {};
        //#endregion

    }

    export class PlacedSymbol extends PlacedItem {

        //#region Fields
        symbol: Symbol;
        //#endregion

        //#region Constructors
        constructor(symbol: Symbol, matrix?: Matrix);
        constructor(symbol: Symbol, point?: Point);
        //#endregion

    }

    export class HitResult {

        //#region Fields
        type: string;
        name: string;
        item: Item;
        location: CurveLocation;
        segment: Segment;
        point: Point;
        //#endregion

    }

    export class PathItem extends Item {

        //#region Public Methods
        smooth();

        moveTo(point: Point);
        moveTo(x: number, y: number);
        lineTo(point: Point);
        lineTo(x: number, y: number);
        cubicCurveTo(handle1: Point, handle2: Point, to: Point);
        quadraticCurveTo(handle: Point, to: Point);
        curveTo(through: Point, to: Point, parameter?: any);
        arcTo(through: Point, to: Point);
        arcTo(to: Point, clockwise?: bool);
        closePath();

        moveBy(point: Point);
        moveBy(x: number, y: number);
        lineBy(vector: Point);
        lineBy(x: number, y: number);
        curveBy(throughVector: Point, toVector: Point, parameter?: any);
        arcBy(throughVector: Point, toVector: Point);
        //#endregion

    }

    export class Path extends PathItem {

        //#region Fields
        segments: Segment[];
        firstSegment: Segment;
        lastSegment: Segment;
        curves: Curve[];
        firstCurve: Curve;
        lastCurve: Curve;
        closed: bool;
        fullySelected: bool;
        clockwise: bool;
        length: number;
        //#endregion

        //#region Constructors
        constructor();
        constructor(segments: Segment[]);
        //#endregion

        //#region Public Methods
        add(segment: Segment): Segment;
        insert(index: number, segment: Segment): Segment;
        addSegments(segments: Segment[]): Segment[];
        insertSegments(index: number, segments: Segment[]): Segment[];
        removeSegment(index: number): Segment;
        removeSegments(): Segment[];
        removeSegments(from: number, to?: number): Segment[];
        flatten(maxDistance: number);
        simplify(tolerance?: number);
        reverse();
        join(path: Path);

        getLocationAt(offset: number, isParameter?: bool): CurveLocation;
        getPointAt(offset: number, isParameter?: bool): Point;
        getTangentAt(offset: number, isParameter?: bool): Point;
        getNormalAt(offset: number, isParameter?: bool): Point;
        getNearestLocation(point: Point): CurveLocation;
        getNearestPoint(point: Point): Point;
        //#endregion

        //#region Static Methods
        static Line(pt1: Point, pt2: Point): Path;
        static Rectangle(point: Point, size): Path;
        static Rectangle(point1: Point, point2: Point): Path;
        static Rectangle(rect: Rectangle): Path;
        static RoundRectangle(rect: Rectangle, size: Size): Path;
        static Oval(rect: Rectangle, circumscribed?: bool): Path;
        static Circle(center: Point, radius: number): Path;
        static Arc(from: Point, through: Point, to: Point): Path;
        static RegularPolygon(center: Point, numSides: number, radius: number): Path;
        static Star(center: Point, numPoints: number, radius1: number, radius2: number): Path;
        //#endregion
        
    }

    export class CompoundPath extends PathItem {

        //#region Fields
        simplify();
        //#endregion

        //#region Constructors
        constructor(paths: Path[]);
        //#endregion

    }

    export class Segment {

        //#region Fields
        point: Point;
        handleIn: Point;
        handleOut: Point;
        selected: bool;

        index: number;
        path: Path;
        curve: Curve;

        next: Segment;
        previous: Segment;
        //#endregion

        //#region Constructors
        constructor(point?: Point, handleIn?: Point, handleOut?: Point);
        //#endregion

        //#region Public Methods
        reverse(): Segment;
        remove();
        toString(): string;
        //#endregion

    }

    export class SegmentPoint extends Point {

        //#region Public Methods
        set (x: number, y: number): SegmentPoint;
        getX(): number;
        setX(x: number);
        getY(): number;
        setY(y: number);
        isZero(): bool;
        setSelected(selected: bool);
        isSelected(): bool;
        //#endregion

    }

    

    export class Curve {

        //#region Fields
        point1: Point;
        point2: Point;
        handle1: Point;
        handle2: Point;
        segment1: Segment;
        segment2: Segment;
        path: Path;
        index: number;
        next: Curve;
        previous: Curve;
        selected: bool;
        length: number;
        //#endregion

        //#region Constructors
        constructor(segment1: Segment, segment2: Segment);
        //#endregion

        //#region Public Methods
        isLinear(): bool;
        getParameterAt(offset: number, start?: number): number;
        getPoint(parameter: number): Point;
        getTangent(parameter: number): Point;
        getNormal(parameter: number): Point;
        getParameter(point: Point): number;
        reverse(): Curve;
        clone(): Curve;
        toString(): string;
        //#endregion

    }

    export class PathStyle {

        //#region Fields
        strokeColor: any;
        strokeWidth: number;
        strokeCap: string;
        strokeJoin: string;
        dashOffset: number;
        dashArray: number[];
        miterLimit: number;
        fillColor: Color;
        //#endregion

    }

    export class CurveLocation {

        //#region Fields
        segment: Segment;
        curve: Curve;
        path: Path;
        index: number;
        offset: number;
        curveOffset: number;
        parameter: number;
        point: Point;
        tangent: Point;
        normal: Point;
        distance: number;
        //#endregion

        //#region Constructors
        constructor(curve: Curve, parameter: number, point: Point, distance: number);
        //#endregion

        //#region Public Methods
        toString(): string;
        //#endregion

    }

    export class Project {

        //#region Fields
        currentStyle: PathStyle;
        index: number;
        selectedItems: Item[];

        layers: Layer[];
        activeLayer: Layer;
        symbols: Symbol[];
        views: View[];
        activeView: View;
        //#endregion

        //#region Constructors
        constructor();
        //#endregion

        //#region Public Methods
        activate();
        remove();
        selectAll();
        deselectAll();
        hitTest(point: Point, options?: {}): HitResult;
        //#endregion

    }

    export class Symbol {

        //#region Fields
        project: Project;
        definition: Item;
        //#endregion

        //#region Constructors
        constructor(item: Item);
        //#endregion

        //#region Public Methods
        place(position?: Point): PlacedSymbol;
        clone(): Symbol;
        //#endregion

    }

    export class Color {

        //#region Fields
        type: string;
        alpha: number;

        red: number;
        green: number;
        blue: number;

        gray: number;

        hue: number;
        saturation: number;
        brightness: number;

        lightness: number;
        //#endregion
       
        //#region Public Methods
        clone(): Color;
        hasAlpha(): bool;

        toString(): string;
        toCssString(): string;
        //#endregion

    }

    export class GrayColor extends Color {
        constructor(gray: number, alpha?: number);
    }
    export class RgbColor extends Color {
        constructor(red: number, green: number, blue: number, alpha?: number);
    }
    export class HsbColor extends Color {
        constructor(hue: number, saturation: number, brightness: number, alpha?: number);
    }
    export class HlsColor extends Color {
        constructor(hue: number, saturation: number, lightness: number, alpha?: number);
    }

    export class GradientColor extends Color {

        //#region Fields
        origin: Point;
        destination: Point;
        hilite: bool;
        //#endregion

        //#region Constructors
        constructor(gradient: Gradient, origin: Point, destination: Point, hilight: bool);
        //#endregion

        //#region Public Methods
        clone(): GradientColor;
        equals(color: GradientColor): bool;
        transform(matrix);
        //#endregion

    }

    export class Gradient {

        //#region Fields
        stops: GradientStop[];
        //#endregion

        //#region Constructors
        constructor(stops: GradientStop[], type?: string);
        //#endregion

        //#region Public Methods
        clone(): Gradient;
        //#endregion
  
    }

    export class GradientStop {

        //#region Fields
        rampPoint: number;
        color: Color;
        //#endregion

        //#region Constructors
        constructor(color?: Color, rampPoint?: number);
        //#endregion

        //#region Public Methods
        clone(): GradientStop;
        //#endregion

    }

    export class View {

        //#region Fields
        canvas: HTMLCanvasElement;
        viewSize: Size;
        bounds: Rectangle;
        size: Size;
        center: Point;
        zoom: number;
        //#endregion

        //#region Constructors
        constructor(canvas: HTMLCanvasElement);
        //#endregion

        //#region Public Methods
        activate();
        remove();
        isVisible(): bool;
        scrollBy(point: Point);
        scrollBy(x: number, y: number);
        setViewSize(width: number, height: number);
        draw();
        //#endregion

        //#region Event Handlers
        onFrame: (e: {}) => any;
        onResize: (e: {}) => any;
        //#endregion
                
    }

    export class Tool {

        //#region Fields
        eventInterval: number;
        minDistance: number;
        maxDistance: number;
        fixedDistance: number;
        //#endregion

        //#region Public Methods
        activate();
        remove();
        //#endregion

        //#region Event Handlers
        onMouseDown: (e: ToolEvent) => void;
        onMouseDrag: (e: ToolEvent) => void;
        onMouseMove: (e: ToolEvent) => void;
        onMouseUp: (e: ToolEvent) => void;
        onKeyDown: (e: ToolEvent) => void;
        onKeyUp: (e: ToolEvent) => void;
        //#endregion

    }

    export class ToolEvent {

        //#region Fields
        type: string;
        point: Point;
        lastPoint: Point;
        downPoint: Point;
        middlePoint: Point;
        delta: Point;
        count: number;
        item: Item;
        //#endregion

        //#region Public Methods
        toString(): string;
        //#endregion

    }

    export class Key {

        //#region Static Methods
        static isDown(key: string): bool;
        //#endregion
        
    }

    export class KeyEvent {

        //#region Fields
        type: string;
        character: string;
        key: string;
        //#endregion

        //#region Public Methods
        toString(): string;
        //#endregion

    }

    export class TextItem extends Item {

        //#region Fields
        content: string;
        characterStyle: CharacterStyle;
        paragraphStyle: ParagraphStyle;
        //#endregion
        
    }

    export class PointText extends TextItem {

        //#region Fields
        point: Point;
        //#endregion

        //#region Constructors
        constructor(point: Point);
        //#endregion

    }

    export class CharacterStyle {

        //#region Fields
        font: string;
        fontSize: number;
        //#endregion

    }

    export class ParagraphStyle {

        //#region Fields
        justification: string;
        //#endregion

    }

}
