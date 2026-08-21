export as namespace obelisk;

export var version: string;
export var author: string;

export class Matrix {
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
}

export class Point {
    constructor(x?: number, y?: number);

    x: number;
    y: number;
}

export class Point3D {
    constructor(x?: number, y?: number, z?: number);

    x: number;
    y: number;
    z: number;

    toGlobalCoordinates(offset?: obelisk.Point): obelisk.Point;
}

export class ColorGeom {
    static get32(color: number): number;
    static applyBrightness(color: number, brightness: number, highlight?: boolean): number;
}

export class ColorPattern {
    static GRASS_GREEN: number;
    static YELLOW: number;
    static WINE_RED: number;
    static PINK: number;
    static PURPLE: number;
    static BLUE: number;
    static GRAY: number;
    static BLACK: number;
    static FINE_COLORS: number[];

    static getRandomComfortableColor(): number;
}

export class CanvasTool {
    static getPixel(imageData: ImageData, x: number, y: number): number;
}

export class CanvasManager {
    static defaultCanvas: HTMLCanvasElement;

    static getDefaultCanvas(): HTMLCanvasElement;
    static getNewCanvas(): HTMLCanvasElement;
}

export class AbstractColor {
    constructor();

    inner: number;
    border: number;
    borderHighlight: number;
    left: number;
    right: number;
    horizontal: number;
    leftSlope: number;
    rightSlope: number;
}

export class CubeColor extends AbstractColor {
    constructor(border?: number, borderHighlight?: number, left?: number, right?: number, horizontal?: number);

    BRIGHTNESS_GAIN: number;

    getByHorizontalColor(horizontal: number): CubeColor;
}

export class PyramidColor extends AbstractColor {
    constructor(border?: number, borderHighlight?: number, left?: number, right?: number);

    BRIGHTNESS_GAIN: number;

    getByRightColor(horizontal: number): PyramidColor;
}

export class SideColor extends AbstractColor {
    constructor(border?: number, inner?: number);

    BRIGHTNESS_GAIN: number;

    getByInnerColor(inner: number): SideColor;
}

export class SlopeColor extends AbstractColor {
    constructor(
        border?: number,
        borderHighlight?: number,
        left?: number,
        right?: number,
        leftSlope?: number,
        rightSlope?: number,
    );

    BRIGHTNESS_GAIN: number;

    getByHorizontalColor(horizontal: number): SlopeColor;
}

export class LineColor extends AbstractColor {
    constructor(border?: number, inner?: number);
}

export class AbstractDimension {
    constructor();

    xAxis: number;
    yAxis: number;
    zAxis: number;
    tall: boolean;
}

export class BrickDimension extends AbstractDimension {
    constructor(xAxis?: number, yAxis?: number);
}

export class CubeDimension extends AbstractDimension {
    constructor(xAxis?: number, yAxis?: number, zAxis?: number);
}

export class PyramidDimension extends AbstractDimension {
    constructor(axis?: number, tall?: boolean);
}

export class SideXDimension extends AbstractDimension {
    constructor(xAxis?: number, zAxis?: number);
}

export class SideYDimension extends AbstractDimension {
    constructor(yAxis?: number, zAxis?: number);
}

export class SlopeDimension extends AbstractDimension {
    constructor(xAxis?: number, yAxis?: number);
}

export class LineXDimension extends AbstractDimension {
    constructor(axis?: number);
}

export class LineYDimension extends AbstractDimension {
    constructor(axis?: number);
}

export class LineZDimension extends AbstractDimension {
    constructor(axis?: number);
}

export class BitmapData {
    constructor(w: number, h: number, useDefaultCanvas?: boolean);

    imageData: ImageData;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    setPixel(posX: number, posY: number, color: number): void;
    setPixelByIndex(index: number, color: number): void;
    checkPixelAvailable(x: number, y: number): boolean;
    floodFill(posX: number, posY: number, color: number): void;
}

export class PixelObject {
    constructor(primitive: AbstractPrimitive, point3D?: Point3D);

    x: number;
    y: number;
    canvas: HTMLCanvasElement;
}

export class PixelView {
    constructor(canvas: HTMLCanvasElement, point?: Point);

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    point: Point;

    renderObject(primitive: AbstractPrimitive, point3D?: Point3D): void;
    clear(): void;
}

export class AbstractPrimitive {
    constructor();

    canvas: HTMLCanvasElement;
    w: number;
    h: number;
    dimension: AbstractDimension;
    color: AbstractColor;
    border: boolean;
    bitmapData: BitmapData;
    useDefaultCanvas: boolean;
    matrix: Matrix;
}

export class Brick extends AbstractPrimitive {
    constructor(dimension?: BrickDimension, color?: SideColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class Cube extends AbstractPrimitive {
    constructor(dimension?: CubeDimension, color?: CubeColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class Pyramid extends AbstractPrimitive {
    constructor(dimension?: PyramidDimension, color?: PyramidColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class SideX extends AbstractPrimitive {
    constructor(dimension?: SideXDimension, color?: SideColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class SideY extends AbstractPrimitive {
    constructor(dimension?: SideYDimension, color?: SideColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class SlopeEast extends AbstractPrimitive {
    constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class SlopeNorth extends AbstractPrimitive {
    constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class SlopeSouth extends AbstractPrimitive {
    constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class SlopeWest extends AbstractPrimitive {
    constructor(dimension?: SlopeDimension, color?: SlopeColor, border?: boolean, useDefaultCanvas?: boolean);
}

export class LineX extends AbstractPrimitive {
    constructor(dimension?: LineXDimension, color?: LineColor, useDefaultCanvas?: boolean);
}

export class LineY extends AbstractPrimitive {
    constructor(dimension?: LineYDimension, color?: LineColor, useDefaultCanvas?: boolean);
}

export class LineZ extends AbstractPrimitive {
    constructor(dimension?: LineZDimension, color?: LineColor, useDefaultCanvas?: boolean);
}
