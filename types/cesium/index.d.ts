// Type definitions for cesium 1.46
// Project: http://cesiumjs.org
// Definitions by: Aigars Zeiza <https://github.com/Zuzon>
//                 Harry Nicholls <https://github.com/hnipps>
//                 Jared Szechy <https://github.com/szechyjs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// tslint:disable-next-line:export-just-namespace
export = Cesium;
export as namespace Cesium;

declare namespace Cesium {
    type RenderState = any;

    interface Proxy {
        getURL(resource: string): string;
    }

    class ArcGisImageServerTerrainProvider extends TerrainProvider {
        constructor(options: { url: string; token?: string; proxy?: any; tilingScheme?: TilingScheme; ellipsoid?: Ellipsoid; credit?: Credit | string });
    }

    class AssociativeArray {
        length: number;
        values: any[];
        contains(key: string | number): boolean;
        set(key: string | number, value: any): void;
        get(key: string | number): any;
        remove(key: string | number): boolean;
        removeAll(): void;
    }

    class AxisAlignedBoundingBox {
        minimum: Cartesian3;
        maximum: Cartesian3;
        center: Cartesian3;
        constructor(minimum?: Cartesian3, maximum?: Cartesian3, center?: Cartesian3);
        clone(result?: AxisAlignedBoundingBox): AxisAlignedBoundingBox;
        intersect(plane: Cartesian4): Intersect;
        equals(right?: AxisAlignedBoundingBox): boolean;
        static fromPoints(positions: Cartesian3[], result?: AxisAlignedBoundingBox): AxisAlignedBoundingBox;
        static clone(box: AxisAlignedBoundingBox, result?: AxisAlignedBoundingBox): AxisAlignedBoundingBox;
        static equals(left?: AxisAlignedBoundingBox, right?: AxisAlignedBoundingBox): boolean;
        static intersect(box: AxisAlignedBoundingBox, plane: Cartesian4): Intersect;
    }

    class BoundingRectangle {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x?: number, y?: number, width?: number, height?: number);
        clone(result?: BoundingRectangle): BoundingRectangle;
        intersect(right: BoundingRectangle): Intersect;
        equals(right?: BoundingRectangle): boolean;
        static fromPoints(positions: Cartesian2[], result?: BoundingRectangle): BoundingRectangle;
        static fromRectangle(rectangle: Rectangle, projection?: any, result?: BoundingRectangle): BoundingRectangle;
        static clone(rectangle: BoundingRectangle, result?: BoundingRectangle): BoundingRectangle;
        static union(left: BoundingRectangle, right: BoundingRectangle, result?: BoundingRectangle): BoundingRectangle;
        static expand(rectangle: BoundingRectangle, point: Cartesian2, result?: BoundingRectangle): BoundingRectangle;
        static intersect(left: BoundingRectangle, right: BoundingRectangle): Intersect;
        static equals(left?: BoundingRectangle, right?: BoundingRectangle): boolean;
    }

    class BoundingSphere extends Packable {
        center: Cartesian3;
        radius: number;
        constructor(center?: Cartesian3, radius?: number);
        intersect(plane: Cartesian4): Intersect;
        equals(right?: BoundingSphere): boolean;
        clone(result?: BoundingSphere): BoundingSphere;
        static fromPoints(positions: Cartesian3[], result?: BoundingSphere): BoundingSphere;
        static fromRectangle2D(rectangle: Rectangle, projection?: any, result?: BoundingSphere): BoundingSphere;
        static fromRectangleWithHeights2D(rectangle: Rectangle, projection?: any, minimumHeight?: number, maximumHeight?: number, result?: BoundingSphere): BoundingSphere;
        static fromRectangle3D(rectangle: Rectangle, ellipsoid?: Ellipsoid, surfaceHeight?: number, result?: BoundingSphere): BoundingSphere;
        static fromVertices(positions: Cartesian3[], center?: Cartesian3, stride?: number, result?: BoundingSphere): BoundingSphere;
        static fromCornerPoints(corner?: number, oppositeCorner?: number, result?: BoundingSphere): BoundingSphere;
        static fromEllipsoid(ellipsoid: Ellipsoid, result?: BoundingSphere): BoundingSphere;
        static fromBoundingSpheres(boundingSpheres: BoundingSphere[], result?: BoundingSphere): BoundingSphere;
        static clone(sphere: BoundingSphere, result?: BoundingSphere): BoundingSphere;
        static pack(value: BoundingSphere, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: BoundingSphere): BoundingSphere;
        static union(left: BoundingSphere, right: BoundingSphere, result?: BoundingSphere): BoundingSphere;
        static expand(sphere: BoundingSphere, point: Cartesian3, result?: BoundingSphere): BoundingSphere;
        static intersect(sphere: BoundingSphere, plane: Cartesian4): Intersect;
        static transform(sphere: BoundingSphere, transform: Matrix4, result?: BoundingSphere): BoundingSphere;
        static distanceSquaredTo(sphere: BoundingSphere, cartesian: Cartesian3): number;
        static transformWithoutScale(sphere: BoundingSphere, transform: Matrix4, result?: BoundingSphere): BoundingSphere;
        static computePlaneDistances(sphere: BoundingSphere, position: Cartesian3, direction: Cartesian3, result?: Cartesian2): Interval;
        static projectTo2D(sphere: BoundingSphere, projection?: any, result?: BoundingSphere): BoundingSphere;
        static equals(left?: BoundingSphere, right?: BoundingSphere): boolean;
    }

    class BoxGeometry extends Packable {
        constructor(options: { minimumCorner: Cartesian3; maximumCorner: Cartesian3; vertexFormat?: VertexFormat });
        static fromDimensions(): void;
        static unpack(array: number[], startingIndex?: number, result?: BoxGeometry): BoxGeometry;
        static createGeometry(boxGeometry: BoxGeometry): Geometry;
    }

    class BoxOutlineGeometry extends Packable {
        constructor();
        static fromDimensions(): void;
        static unpack(array: number[], startingIndex?: number, result?: BoxOutlineGeometry): BoxOutlineGeometry;
        static createGeometry(boxGeometry: BoxOutlineGeometry): Geometry;
    }

    class Cartesian2 extends Packable {
        x: number;
        y: number;
        static ZERO: Cartesian2;
        static UNIT_X: Cartesian2;
        static UNIT_Y: Cartesian2;
        constructor(x?: number, y?: number);
        clone(result?: Cartesian2): Cartesian2;
        equals(right?: Cartesian2): boolean;
        equalsEpsilon(right: Cartesian2, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
        toString(): string;
        static fromElements(x: number, y: number, result?: Cartesian2): Cartesian2;
        static clone(cartesian: Cartesian2, result?: Cartesian2): Cartesian2;
        static fromCartesian3(cartesian: Cartesian3, result?: Cartesian2): Cartesian2;
        static fromCartesian4(cartesian: Cartesian4, result?: Cartesian2): Cartesian2;
        static pack(value: Cartesian2, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Cartesian2): Cartesian2;
        static fromArray(array: number[], startingIndex?: number, result?: Cartesian2): Cartesian2;
        static maximumComponent(cartesian: Cartesian2): number;
        static minimumComponent(cartesian: Cartesian2): number;
        static minimumByComponent(first: Cartesian2, second: Cartesian2, result: Cartesian2): Cartesian2;
        static maximumByComponent(first: Cartesian2, second: Cartesian2, result: Cartesian2): Cartesian2;
        static magnitudeSquared(cartesian: Cartesian2): number;
        static magnitude(cartesian: Cartesian2): number;
        static distance(left: Cartesian2, right: Cartesian2): number;
        static distanceSquared(left: Cartesian2, right: Cartesian2): number;
        static normalize(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static dot(left: Cartesian2, right: Cartesian2): number;
        static multiplyComponents(left: Cartesian2, right: Cartesian2, result: Cartesian2): Cartesian2;
        static add(left: Cartesian2, right: Cartesian2, result: Cartesian2): Cartesian2;
        static subtract(left: Cartesian2, right: Cartesian2, result: Cartesian2): Cartesian2;
        static multiplyByScalar(cartesian: Cartesian2, scalar: number, result: Cartesian2): Cartesian2;
        static divideByScalar(cartesian: Cartesian2, scalar: number, result: Cartesian2): Cartesian2;
        static negate(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static abs(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static lerp(start: Cartesian2, end: Cartesian2, t: number, result: Cartesian2): Cartesian2;
        static angleBetween(left: Cartesian2, right: Cartesian2): number;
        static mostOrthogonalAxis(cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static equals(left?: Cartesian2, right?: Cartesian2): boolean;
        static equalsEpsilon(left: Cartesian2, right: Cartesian2, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
    }

    class Cartesian3 extends Packable implements PositionProperty {
        x: number;
        y: number;
        z: number;
        static ZERO: Cartesian3;
        static UNIT_X: Cartesian3;
        static UNIT_Y: Cartesian3;
        static UNIT_Z: Cartesian3;
        constructor(x?: number, y?: number, z?: number);
        clone(result?: Cartesian3): Cartesian3;
        equals(right?: Cartesian3): boolean;
        equalsEpsilon(right: Cartesian3, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
        toString(): string;
        static fromSpherical(spherical: Spherical, result?: Cartesian3): Cartesian3;
        static fromElements(x: number, y: number, z: number, result?: Cartesian3): Cartesian3;
        static clone(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        static fromCartesian4(cartesian: Cartesian4, result?: Cartesian3): Cartesian3;
        static pack(value: Cartesian3, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Cartesian3): Cartesian3;
        static fromArray(array: number[], startingIndex?: number, result?: Cartesian3): Cartesian3;
        static maximumComponent(cartesian: Cartesian3): number;
        static minimumComponent(cartesian: Cartesian3): number;
        static minimumByComponent(first: Cartesian3, second: Cartesian3, result: Cartesian3): Cartesian3;
        static maximumByComponent(first: Cartesian3, second: Cartesian3, result: Cartesian3): Cartesian3;
        static magnitudeSquared(cartesian: Cartesian3): number;
        static magnitude(cartesian: Cartesian3): number;
        static distance(left: Cartesian3, right: Cartesian3): number;
        static distanceSquared(left: Cartesian3, right: Cartesian3): number;
        static normalize(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static dot(left: Cartesian3, right: Cartesian3): number;
        static multiplyComponents(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static add(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static subtract(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static multiplyByScalar(cartesian: Cartesian3, scalar: number, result: Cartesian3): Cartesian3;
        static divideByScalar(cartesian: Cartesian3, scalar: number, result: Cartesian3): Cartesian3;
        static negate(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static abs(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static lerp(start: Cartesian3, end: Cartesian3, t: number, result: Cartesian3): Cartesian3;
        static angleBetween(left: Cartesian3, right: Cartesian3): number;
        static mostOrthogonalAxis(cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static equals(left?: Cartesian3, right?: Cartesian3): boolean;
        static equalsEpsilon(left: Cartesian3, right: Cartesian3, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
        static cross(left: Cartesian3, right: Cartesian3, result: Cartesian3): Cartesian3;
        static fromDegrees(longitude: number, latitude: number, height?: number, ellipsoid?: Ellipsoid, result?: Cartesian3): Cartesian3;
        static fromRadians(longitude: number, latitude: number, height?: number, ellipsoid?: Ellipsoid, result?: Cartesian3): Cartesian3;
        static fromDegreesArray(coordinates: number[], ellipsoid?: Ellipsoid, result?: Cartesian3[]): Cartesian3[];
        static fromRadiansArray(coordinates: number[], ellipsoid?: Ellipsoid, result?: Cartesian3[]): Cartesian3[];
        static fromDegreesArrayHeights(coordinates: number[], ellipsoid?: Ellipsoid, result?: Cartesian3[]): Cartesian3[];
        static fromRadiansArrayHeights(coordinates: number[], ellipsoid?: Ellipsoid, result?: Cartesian3[]): Cartesian3[];
        isConstant: boolean;
        definitionChanged: Event;
        referenceFrame: ReferenceFrame;
        getValue(time: JulianDate, result?: Cartesian3): Cartesian3;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
    }

    class Cartesian4 extends Packable {
        x: number;
        y: number;
        z: number;
        w: number;
        static ZERO: Cartesian4;
        static UNIT_X: Cartesian4;
        static UNIT_Y: Cartesian4;
        static UNIT_Z: Cartesian4;
        static UNIT_W: Cartesian4;
        constructor(x?: number, y?: number, z?: number, w?: number);
        clone(result?: Cartesian4): Cartesian4;
        equals(right?: Cartesian4): boolean;
        equalsEpsilon(right: Cartesian4, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
        toString(): string;
        static fromElements(x: number, y: number, z: number, w: number, result?: Cartesian4): Cartesian4;
        static fromColor(color: Color, result?: Cartesian4): Cartesian4;
        static clone(cartesian: Cartesian4, result?: Cartesian4): Cartesian4;
        static pack(value: Cartesian4, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Cartesian4): Cartesian4;
        static fromArray(array: number[], startingIndex?: number, result?: Cartesian4): Cartesian4;
        static maximumComponent(cartesian: Cartesian4): number;
        static minimumComponent(cartesian: Cartesian4): number;
        static minimumByComponent(first: Cartesian4, second: Cartesian4, result: Cartesian4): Cartesian4;
        static maximumByComponent(first: Cartesian4, second: Cartesian4, result: Cartesian4): Cartesian4;
        static magnitudeSquared(cartesian: Cartesian4): number;
        static magnitude(cartesian: Cartesian4): number;
        static distance(left: Cartesian4, right: Cartesian4): number;
        static distanceSquared(left: Cartesian4, right: Cartesian4): number;
        static normalize(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static dot(left: Cartesian4, right: Cartesian4): number;
        static multiplyComponents(left: Cartesian4, right: Cartesian4, result: Cartesian4): Cartesian4;
        static add(left: Cartesian4, right: Cartesian4, result: Cartesian4): Cartesian4;
        static subtract(left: Cartesian4, right: Cartesian4, result: Cartesian4): Cartesian4;
        static multiplyByScalar(cartesian: Cartesian4, scalar: number, result: Cartesian4): Cartesian4;
        static divideByScalar(cartesian: Cartesian4, scalar: number, result: Cartesian4): Cartesian4;
        static negate(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static abs(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static lerp(start: Cartesian4, end: Cartesian4, t: number, result: Cartesian4): Cartesian4;
        static mostOrthogonalAxis(cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static equals(left?: Cartesian4, right?: Cartesian4): boolean;
        static equalsEpsilon(left: Cartesian4, right: Cartesian4, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
    }

    class Cartographic {
        longitude: number;
        latitude: number;
        height: number;
        static ZERO: Cartographic;
        constructor(longitude?: number, latitude?: number, height?: number);
        clone(result?: Cartographic): Cartographic;
        equals(right?: Cartographic): boolean;
        equalsEpsilon(right: Cartographic, epsilon: number): boolean;
        toString(): string;
        static fromRadians(longitude: number, latitude: number, height?: number, result?: Cartographic): Cartographic;
        static fromDegrees(longitude: number, latitude: number, height?: number, result?: Cartographic): Cartographic;
        static clone(cartographic: Cartographic, result?: Cartographic): Cartographic;
        static equals(left?: Cartographic, right?: Cartographic): boolean;
        static equalsEpsilon(left: Cartographic, right: Cartographic, epsilon: number): boolean;
    }

    class CatmullRomSpline {
        times: number[];
        points: Cartesian3[];
        firstTangent: Cartesian3;
        lastTangent: Cartesian3;
        constructor(options: { times: number[]; points: Cartesian3[]; firstTangent?: Cartesian3; lastTangent?: Cartesian3 });
        findTimeInterval(time: number): number;
        evaluate(time: number, result?: Cartesian3): Cartesian3;
    }

    class CesiumTerrainProvider extends TerrainProvider {
        requestVertexNormals: boolean;
        requestWaterMask: boolean;
        constructor(options: { url: string; proxy?: Proxy; requestVertexNormals?: boolean; requestWaterMask?: boolean; ellipsoid?: Ellipsoid; credit?: Credit | string });
    }

    class CircleGeometry extends Packable {
        constructor(options: {
            center: Cartesian3;
            radius: number;
            ellipsoid?: Ellipsoid;
            height?: number;
            granularity?: number;
            vertexFormat?: VertexFormat;
            extrudedHeight?: number;
            stRotation?: number
        });
        static unpack(array: number[], startingIndex?: number, result?: CircleGeometry): number[];
        static createGeometry(circleGeometry: CircleGeometry): Geometry;
    }

    class CircleOutlineGeometry extends Packable {
        constructor(options: { center: Cartesian3; radius: number; ellipsoid?: Ellipsoid; height?: number; granularity?: number; extrudedHeight?: number; numberOfVerticalLines?: number });
        static unpack(array: number[], startingIndex?: number, result?: CircleOutlineGeometry): number[];
        static createGeometry(circleGeometry: CircleOutlineGeometry): Geometry;
    }

    class Clock {
        startTime: JulianDate;
        stopTime: JulianDate;
        currentTime: JulianDate;
        multiplier: number;
        clockStep: ClockStep;
        clockRange: ClockRange;
        canAnimate: boolean;
        shouldAnimate: boolean;
        onTick: Event;
        constructor(options: {
            startTime?: JulianDate;
            stopTime?: JulianDate;
            currentTime?: JulianDate;
            multiplier?: number;
            clockStep?: ClockStep;
            clockRange?: ClockRange;
            canAnimate?: boolean;
            shouldAnimate?:
            boolean
        });
        tick(): JulianDate;
    }

    class Color extends Packable {
        red: number;
        green: number;
        blue: number;
        alpha: number;
        static ALICEBLUE: Color;
        static ANTIQUEWHITE: Color;
        static AQUA: Color;
        static AQUAMARINE: Color;
        static AZURE: Color;
        static BEIGE: Color;
        static BISQUE: Color;
        static BLACK: Color;
        static BLANCHEDALMOND: Color;
        static BLUE: Color;
        static BLUEVIOLET: Color;
        static BROWN: Color;
        static BURLYWOOD: Color;
        static CADETBLUE: Color;
        static CHARTREUSE: Color;
        static CHOCOLATE: Color;
        static CORAL: Color;
        static CORNFLOWERBLUE: Color;
        static CORNSILK: Color;
        static CRIMSON: Color;
        static CYAN: Color;
        static DARKBLUE: Color;
        static DARKCYAN: Color;
        static DARKGOLDENROD: Color;
        static DARKGRAY: Color;
        static DARKGREEN: Color;
        static DARKGREY: Color;
        static DARKKHAKI: Color;
        static DARKMAGENTA: Color;
        static DARKOLIVEGREEN: Color;
        static DARKORANGE: Color;
        static DARKORCHID: Color;
        static DARKRED: Color;
        static DARKSALMON: Color;
        static DARKSEAGREEN: Color;
        static DARKSLATEBLUE: Color;
        static DARKSLATEGRAY: Color;
        static DARKSLATEGREY: Color;
        static DARKTURQUOISE: Color;
        static DARKVIOLET: Color;
        static DEEPPINK: Color;
        static DEEPSKYBLUE: Color;
        static DIMGRAY: Color;
        static DIMGREY: Color;
        static DODGERBLUE: Color;
        static FIREBRICK: Color;
        static FLORALWHITE: Color;
        static FORESTGREEN: Color;
        static FUSCHIA: Color;
        static GAINSBORO: Color;
        static GHOSTWHITE: Color;
        static GOLD: Color;
        static GOLDENROD: Color;
        static GRAY: Color;
        static GREEN: Color;
        static GREENYELLOW: Color;
        static GREY: Color;
        static HONEYDEW: Color;
        static HOTPINK: Color;
        static INDIANRED: Color;
        static INDIGO: Color;
        static IVORY: Color;
        static KHAKI: Color;
        static LAVENDER: Color;
        static LAVENDAR_BLUSH: Color;
        static LAWNGREEN: Color;
        static LEMONCHIFFON: Color;
        static LIGHTBLUE: Color;
        static LIGHTCORAL: Color;
        static LIGHTCYAN: Color;
        static LIGHTGOLDENRODYELLOW: Color;
        static LIGHTGRAY: Color;
        static LIGHTGREEN: Color;
        static LIGHTGREY: Color;
        static LIGHTPINK: Color;
        static LIGHTSEAGREEN: Color;
        static LIGHTSKYBLUE: Color;
        static LIGHTSLATEGRAY: Color;
        static LIGHTSLATEGREY: Color;
        static LIGHTSTEELBLUE: Color;
        static LIGHTYELLOW: Color;
        static LIME: Color;
        static LIMEGREEN: Color;
        static LINEN: Color;
        static MAGENTA: Color;
        static MAROON: Color;
        static MEDIUMAQUAMARINE: Color;
        static MEDIUMBLUE: Color;
        static MEDIUMORCHID: Color;
        static MEDIUMPURPLE: Color;
        static MEDIUMSEAGREEN: Color;
        static MEDIUMSLATEBLUE: Color;
        static MEDIUMSPRINGGREEN: Color;
        static MEDIUMTURQUOISE: Color;
        static MEDIUMVIOLETRED: Color;
        static MIDNIGHTBLUE: Color;
        static MINTCREAM: Color;
        static MISTYROSE: Color;
        static MOCCASIN: Color;
        static NAVAJOWHITE: Color;
        static NAVY: Color;
        static OLDLACE: Color;
        static OLIVE: Color;
        static OLIVEDRAB: Color;
        static ORANGE: Color;
        static ORANGERED: Color;
        static ORCHID: Color;
        static PALEGOLDENROD: Color;
        static PALEGREEN: Color;
        static PALETURQUOISE: Color;
        static PALEVIOLETRED: Color;
        static PAPAYAWHIP: Color;
        static PEACHPUFF: Color;
        static PERU: Color;
        static PINK: Color;
        static PLUM: Color;
        static POWDERBLUE: Color;
        static PURPLE: Color;
        static RED: Color;
        static ROSYBROWN: Color;
        static ROYALBLUE: Color;
        static SADDLEBROWN: Color;
        static SALMON: Color;
        static SANDYBROWN: Color;
        static SEAGREEN: Color;
        static SEASHELL: Color;
        static SIENNA: Color;
        static SILVER: Color;
        static SKYBLUE: Color;
        static SLATEBLUE: Color;
        static SLATEGRAY: Color;
        static SLATEGREY: Color;
        static SNOW: Color;
        static SPRINGGREEN: Color;
        static STEELBLUE: Color;
        static TAN: Color;
        static TEAL: Color;
        static THISTLE: Color;
        static TOMATO: Color;
        static TURQUOISE: Color;
        static VIOLET: Color;
        static WHEAT: Color;
        static WHITE: Color;
        static WHITESMOKE: Color;
        static YELLOW: Color;
        static YELLOWGREEN: Color;
        static TRANSPARENT: Color;
        static add(left: Color, right: Color, result?: Color): Color;
        static byteToFloat(number: number): number;
        static clone(color: Color, result?: Color): Color;
        static divide(left: Color, right: Color, result?: Color): Color;
        static divideByScalar(color: Color, scalar: number, result?: Color): Color;
        static equals(left: Color, right: Color): boolean;
        static floatToByte(number: number): number;
        static fromAlpha(color: Color, alpha: number, result?: Color): Color;
        static fromBytes(red?: number, green?: number, blue?: number, alpha?: number, result?: Color): Color;
        static fromCartesian4(cartesian: Cartesian4, result?: Color): Color;
        static fromCssColorString(color: string): Color;
        static fromHsl(hue?: number, saturation?: number, lightness?: number, alpha?: number): Color;
        static fromRandom(options?: {
                red?: number;
                minimumRed?: number;
                maximumRed?: number;
                green?: number;
                minimumGreen?: number;
                maximumGreen?: number;
                blue?: number;
                minimumBlue?: number;
                maximumBlue?: number;
                alpha?: number;
                minimumAlpha?: number;
                maximumAlpha?: number
            }, result?: Color): Color;
        static fromRgba(rgba: number): Color;
        static mod(left: Color, right: Color, result?: Color): Color;
        static multiply(left: Color, right: Color, result?: Color): Color;
        static multiplyByScalar(color: Color, scalar: number, result?: Color): Color;
        static pack(value: Color, array: number[], startingIndex?: number): number[];
        static subtract(left: Color, right: Color, result?: Color): Color;
        static unpack(array: number[], startingIndex?: number, result?: Color): Color;
        constructor(red?: number, green?: number, blue?: number, alpha?: number);
        brighten(magnitude: number, result: Color): Color;
        clone(result?: Color): Color;
        darken(magnitude: number, result: Color): Color;
        equals(other: Color): boolean;
        equalsEpsilon(other: Color, epsilon?: number): boolean;
        toBytes(result?: number[]): number[];
        toCssColorString(): string;
        toRgba(): number;
        toString(): string;
        withAlpha(alpha: number, result?: Color): Color;
    }

    class ColorGeometryInstanceAttribute {
        value: Uint8Array;
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        constructor(red?: number, green?: number, blue?: number, alpha?: number);
        static fromColor(color: Color): ColorGeometryInstanceAttribute;
        static toValue(color: Color, result?: Uint8Array): Uint8Array;
    }

    class CorridorGeometry extends Packable {
        constructor(options: {
            positions: Cartesian3[];
            width: number;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            height?: number;
            extrudedHeight?: number;
            vertexFormat?: VertexFormat;
            cornerType?: CornerType
        });
        static unpack(array: number[], startingIndex?: number, result?: CorridorGeometry): CorridorGeometry;
        static createGeometry(corridorGeometry: CorridorGeometry): Geometry;
    }

    class CorridorOutlineGeometry extends Packable {
        constructor(options: {
            positions: Cartesian3[];
            width: number;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            height?: number;
            extrudedHeight?: number;
            cornerType?: CornerType
        });
        static unpack(array: number[], startingIndex?: number, result?: CorridorOutlineGeometry): CorridorOutlineGeometry;
        static createGeometry(corridorOutlineGeometry: CorridorOutlineGeometry): Geometry;
    }

    class Credit {
        readonly element: HTMLElement;
        readonly html: string;
        readonly imageUrl: string;
        readonly link: string;
        readonly showOnScreen: boolean;
        readonly text: string;
        constructor(html: string, showOnScreen?: boolean);
        static equals(left: Credit, right: Credit): boolean;
        equals(credits: Credit): boolean;
        hasImage(): boolean;
        hasLink(): boolean;
    }

    class CylinderGeometry extends Packable {
        constructor(options: { length: number; topRadius: number; bottomRadius: number; slices?: number; vertexFormat?: VertexFormat });
        static unpack(array: number[], startingIndex?: number, result?: CylinderGeometry): CylinderGeometry;
        static createGeometry(cylinderGeometry: CylinderGeometry): Geometry;
    }

    class CylinderOutlineGeometry extends Packable {
        constructor(options: { length: number; topRadius: number; bottomRadius: number; slices?: number; numberOfVerticalLines?: number });
        static unpack(array: number[], startingIndex?: number, result?: CylinderOutlineGeometry): CylinderOutlineGeometry;
        static createGeometry(cylinderGeometry: CylinderOutlineGeometry): Geometry;
    }

    class DefaultProxy {
        constructor(proxy: string);
        getURL(resource: string): string;
    }

    class DeveloperError {
        name: string;
        message: string;
        stack: string;
        constructor(message?: string);
    }

    class EllipseGeometry extends Packable {
        constructor(options: {
            center: Cartesian3;
            semiMajorAxis: number;
            semiMinorAxis: number;
            ellipsoid?: Ellipsoid;
            height?: number;
            extrudedHeight?: number;
            rotation?: number;
            stRotation?: number;
            granularity?: number;
            vertexFormat?: VertexFormat
        });
        static unpack(array: number[], startingIndex?: number, result?: EllipseGeometry): EllipseGeometry;
        static createGeometry(ellipseGeometry: EllipseGeometry): Geometry;
    }

    class EllipseOutlineGeometry extends Packable {
        constructor(options: {
            center: Cartesian3;
            semiMajorAxis: number;
            semiMinorAxis: number;
            ellipsoid?: Ellipsoid;
            height?: number;
            extrudedHeight?: number;
            rotation?: number;
            granularity?: number;
            numberOfVerticalLines?: number
        });
        static unpack(array: number[], startingIndex?: number, result?: EllipseOutlineGeometry): EllipseOutlineGeometry;
        static createGeometry(ellipseGeometry: EllipseOutlineGeometry): Geometry;
    }

    class Ellipsoid extends Packable {
        radii: Cartesian3;
        radiiSquared: Cartesian3;
        radiiToTheFourth: Cartesian3;
        oneOverRadii: Cartesian3;
        oneOverRadiiSquared: Cartesian3;
        minimumRadius: number;
        maximumRadius: number;
        static WGS84: Ellipsoid;
        static UNIT_SPHERE: Ellipsoid;
        static MOON: Ellipsoid;
        constructor(x?: number, y?: number, z?: number);
        clone(result?: Ellipsoid): Ellipsoid;
        geocentricSurfaceNormal(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        geodeticSurfaceNormalCartographic(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        geodeticSurfaceNormal(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        cartographicToCartesian(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        cartographicArrayToCartesianArray(cartographics: Cartographic[], result?: Cartesian3[]): Cartesian3[];
        cartesianToCartographic(cartesian: Cartesian3, result?: Cartographic): Cartographic;
        cartesianArrayToCartographicArray(cartesians: Cartesian3[], result?: Cartographic[]): Cartographic[];
        scaleToGeodeticSurface(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        scaleToGeocentricSurface(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        transformPositionToScaledSpace(position: Cartesian3, result?: Cartesian3): Cartesian3;
        transformPositionFromScaledSpace(position: Cartesian3, result?: Cartesian3): Cartesian3;
        equals(right?: Ellipsoid): boolean;
        toString(): string;
        static clone(ellipsoid: Ellipsoid, result?: Ellipsoid): Ellipsoid;
        static fromCartesian3(radii?: Cartesian3): Ellipsoid;
        static unpack(array: number[], startingIndex?: number, result?: Ellipsoid): Ellipsoid;
    }

    class EllipsoidGeodesic {
        surfaceDistance: number;
        start: Cartographic;
        end: Cartographic;
        startHeading: number;
        endHeading: number;
        constructor(start?: Cartographic, end?: Cartographic, ellipsoid?: Ellipsoid);
        setEndPoints(start: Cartographic, end: Cartographic): void;
        interpolateUsingFraction(fraction: number): Cartographic;
        interpolateUsingSurfaceDistance(distance: number): Cartographic;
    }

    class EllipsoidGeometry extends Packable {
        constructor(options?: { radii?: Cartesian3; stackPartitions?: number; slicePartitions?: number; vertexFormat?: VertexFormat });
        static unpack(array: number[], startingIndex?: number, result?: EllipsoidGeometry): EllipsoidGeometry;
        static createGeometry(ellipsoidGeometry: EllipsoidGeometry): Geometry;
    }

    class EllipsoidOutlineGeometry extends Packable {
        constructor(options?: { radii?: Cartesian3; stackPartitions?: number; slicePartitions?: number; subdivisions?: number });
        static unpack(array: number[], startingIndex?: number, result?: EllipsoidOutlineGeometry): EllipsoidOutlineGeometry;
        static createGeometry(ellipsoidGeometry: EllipsoidOutlineGeometry): Geometry;
    }

    class EllipsoidTangentPlane {
        ellipsoid: Ellipsoid;
        origin: Cartesian3;
        constructor(ellipsoid: Ellipsoid, origin: Cartesian3);
        projectPointOntoPlane(cartesian: Cartesian3, result?: Cartesian2): Cartesian2;
        projectPointsOntoPlane(cartesians: Cartesian3[], result?: Cartesian2[]): Cartesian2[];
        projectPointsOntoEllipsoid(cartesians: Cartesian2[], result?: Cartesian3[]): Cartesian3[];
        static fromPoints(ellipsoid: Ellipsoid, cartesians: Cartesian3): EllipsoidTangentPlane;
    }

    class EllipsoidTerrainProvider extends TerrainProvider {
        constructor(options?: { tilingScheme?: TilingScheme; ellipsoid?: Ellipsoid });
    }

    class Event {
        numberOfListeners: number;
        addEventListener(listener: () => void, scope?: any): Event.RemoveCallback;
        removeEventListener(listener: () => void, scope?: any): boolean;
        raiseEvent(...args: any[]): void;
    }

    namespace Event {
        type RemoveCallback = () => void;
    }

    class EventHelper {
        add(event: Event, listener: () => void, scope?: any): EventHelper.RemoveCallback;
        removeAll(): void;
    }

    namespace EventHelper {
        type RemoveCallback = () => void;
    }

    class GeographicProjection {
        ellipsoid: Ellipsoid;
        constructor(ellipsoid?: Ellipsoid);
        project(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        unproject(cartesian: Cartesian3, result?: Cartographic): Cartographic;
    }

    class GeographicTilingScheme {
        ellipsoid: Ellipsoid;
        rectangle: Rectangle;
        projection: MapProjection;
        constructor(options?: { ellipsoid?: Ellipsoid; rectangle?: Rectangle; numberOfLevelZeroTilesX?: number; numberOfLevelZeroTilesY?: number });
        getNumberOfXTilesAtLevel(level: number): number;
        getNumberOfYTilesAtLevel(level: number): number;
        rectangleToNativeRectangle(rectangle: Rectangle, result?: Rectangle): Rectangle;
        tileXYToNativeRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        tileXYToRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        positionToTileXY(position: Cartographic, level: number, result?: Cartesian2): Cartesian2;
    }

    class Geometry {
        attributes: GeometryAttributes;
        indices: any[];
        primitiveType: PrimitiveType;
        boundingSphere: BoundingSphere;
        constructor(options: { attributes: GeometryAttributes; primitiveType?: PrimitiveType; indices?: Uint16Array | Uint32Array; boundingSphere?: BoundingSphere });
        static computeNumberOfVertices(geometry: Cartesian3): number;
    }

    class GeometryAttribute {
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        values: any[];
        constructor(options?: { componentDatatype?: ComponentDatatype; componentsPerAttribute?: number; normalize?: boolean; values?: number[] });
    }

    class GeometryAttributes {
        position: GeometryAttribute;
        normal: GeometryAttribute;
        st: GeometryAttribute;
        binormal: GeometryAttribute;
        tangent: GeometryAttribute;
        color: GeometryAttribute;
    }

    class GeometryInstance {
        geometry: Geometry;
        modelMatrix: Matrix4;
        id: any;
        attributes: any;
        constructor(options: { geometry: Geometry; modelMatrix?: Matrix4; id?: any; attributes?: any });
    }

    class GeometryInstanceAttribute {
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        value: number[];
        constructor(options: { componentDatatype?: ComponentDatatype; componentsPerAttribute?: number; normalize?: boolean; value?: number[] });
    }

    class GregorianDate {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
        isLeapSecond: boolean;
    }

    class HeightmapTerrainData {
        waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;
        constructor(options: {
            buffer: Int8Array | Uint8Array | Int16Array | Uint16Array | Float32Array | Float64Array;
            width: number;
            height: number;
            childTileMask?: number;
            structure?: any;
            structureheightScale?: number;
            structureheightOffset?: number;
            structureelementsPerHeight?: number;
            structurestride?: number;
            structureelementMultiplier?: number;
            structureisBigEndian?: boolean;
            createdByUpsampling?: boolean
        });
        createMesh(tilingScheme: TilingScheme, x: number, y: number, level: number): Promise<TerrainMesh>;
        interpolateHeight(rectangle: Rectangle, longitude: number, latitude: number): number;
        upsample(tilingScheme: TilingScheme, thisX: number, thisY: number, thisLevel: number, descendantX: number, descendantY: number, descendantLevel: number): Promise<HeightmapTerrainData>;
        isChildAvailable(thisX: number, thisY: number, childX: number, childY: number): boolean;
        wasCreatedByUpsampling(): boolean;
    }

    class HermiteSpline {
        times: number[];
        points: Cartesian3[];
        inTangents: Cartesian3[];
        outTangents: Cartesian3[];
        constructor(options: { times: number[]; points: Cartesian3[]; inTangents: Cartesian3[]; outTangents: Cartesian3[] });
        findTimeInterval(time: number): number;
        evaluate(time: number, result?: Cartesian3): Cartesian3;
        static createC1(): HermiteSpline;
        static createNaturalCubic(): HermiteSpline | LinearSpline;
        static createClampedCubic(): HermiteSpline | LinearSpline;
    }

    class IonImageryProvider extends ImageryProvider {
      constructor(options: {assetId: number, accessToken?: string, server?: string})
    }

    class Interval {
        start: number;
        stop: number;
        constructor(start?: number, stop?: number);
    }

    class JulianDate {
        dayNumber: number;
        secondsOfDay: number;
        static leapSeconds: LeapSecond[];
        constructor(julianDayNumber?: number, secondsOfDay?: number, timeStandard?: TimeStandard);
        clone(result?: JulianDate): JulianDate;
        equals(right?: JulianDate): boolean;
        equalsEpsilon(right: JulianDate, epsilon: number): boolean;
        toString(): string;
        static fromDate(date: Date, result?: JulianDate): JulianDate;
        static fromIso8601(iso8601String: string, result?: JulianDate): JulianDate;
        static now(result?: JulianDate): JulianDate;
        static toGregorianDate(julianDate: JulianDate, result?: GregorianDate): GregorianDate;
        static toDate(julianDate: JulianDate): Date;
        static toIso8601(julianDate: JulianDate, precision?: number): string;
        static clone(julianDate: JulianDate, result?: JulianDate): JulianDate;
        static compare(left: JulianDate, right: JulianDate): number;
        static equals(left?: JulianDate, right?: JulianDate): boolean;
        static equalsEpsilon(left: JulianDate, right: JulianDate, epsilon: number): boolean;
        static totalDays(julianDate: JulianDate): number;
        static secondsDifference(left: JulianDate, right: JulianDate): number;
        static daysDifference(left: JulianDate, right: JulianDate): number;
        static computeTaiMinusUtc(julianDate: JulianDate): number;
        static addSeconds(julianDate: JulianDate, seconds: number, result: JulianDate): JulianDate;
        static addMinutes(julianDate: JulianDate, minutes: number, result: JulianDate): JulianDate;
        static addHours(julianDate: JulianDate, hours: number, result: JulianDate): JulianDate;
        static addDays(julianDate: JulianDate, days: number, result: JulianDate): JulianDate;
        static lessThan(left: JulianDate, right: JulianDate): boolean;
        static lessThanOrEquals(left: JulianDate, right: JulianDate): boolean;
        static greaterThan(left: JulianDate, right: JulianDate): boolean;
        static greaterThanOrEquals(left: JulianDate, right: JulianDate): boolean;
    }

    class LeapSecond {
        julianDate: JulianDate;
        offset: number;
        constructor(date?: JulianDate, offset?: number);
    }

    class LinearSpline {
        times: number[];
        points: Cartesian3[];
        constructor();
        findTimeInterval(time: number): number;
        evaluate(time: number, result?: Cartesian3): Cartesian3;
    }

    class MapProjection {
        ellipsoid: Ellipsoid;
        project(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        unproject(cartesian: Cartesian3, result?: Cartographic): Cartographic;
    }

    class Matrix2 extends Packable {
        static IDENTITY: Matrix2;
        static COLUMN0ROW0: number;
        static COLUMN0ROW1: number;
        static COLUMN1ROW0: number;
        static COLUMN1ROW1: number;
        constructor(column0Row0?: number, column1Row0?: number, column0Row1?: number, column1Row1?: number);
        clone(result?: Matrix2): Matrix2;
        equals(right?: Matrix2): boolean;
        equalsEpsilon(right: Matrix2, epsilon: number): boolean;
        toString(): string;
        static pack(value: Matrix2, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Matrix2): Matrix2;
        static clone(matrix: Matrix2, result?: Matrix2): Matrix2;
        static fromArray(array: number[], startingIndex?: number, result?: Matrix2): Matrix2;
        static fromColumnMajorArray(values: number[], result?: Matrix2): Matrix2;
        static fromRowMajorArray(values: number[], result?: Matrix2): Matrix2;
        static fromScale(scale: Cartesian2, result?: Matrix2): Matrix2;
        static fromUniformScale(scale: number, result?: Matrix2): Matrix2;
        static fromRotation(angle: number, result?: Matrix2): Matrix2;
        static toArray(matrix: Matrix2, result?: number[]): number[];
        static getElementIndex(row: number, column: number): number;
        static getColumn(matrix: Matrix2, index: number, result: Cartesian2): Cartesian2;
        static setColumn(matrix: Matrix2, index: number, cartesian: Cartesian2, result: Cartesian2): Matrix2;
        static getRow(matrix: Matrix2, index: number, result: Cartesian2): Cartesian2;
        static setRow(matrix: Matrix2, index: number, cartesian: Cartesian2, result: Matrix2): Matrix2;
        static getScale(matrix: Matrix2, result: Cartesian2): Cartesian2;
        static getMaximumScale(matrix: Matrix2): number;
        static multiply(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2;
        static add(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2;
        static subtract(left: Matrix2, right: Matrix2, result: Matrix2): Matrix2;
        static multiplyByVector(matrix: Matrix2, cartesian: Cartesian2, result: Cartesian2): Cartesian2;
        static multiplyByScalar(matrix: Matrix2, scalar: number, result: Matrix2): Matrix2;
        static negate(matrix: Matrix2, result: Matrix2): Matrix2;
        static transpose(matrix: Matrix2, result: Matrix2): Matrix2;
        static abs(matrix: Matrix2, result: Matrix2): Matrix2;
        static equals(left?: Matrix2, right?: Matrix2): boolean;
        static equalsEpsilon(left: Matrix2, right: Matrix2, epsilon: number): boolean;
    }

    class Matrix3 extends Packable {
        static IDENTITY: Matrix3;
        static COLUMN0ROW0: number;
        static COLUMN0ROW1: number;
        static COLUMN0ROW2: number;
        static COLUMN1ROW0: number;
        static COLUMN1ROW1: number;
        static COLUMN1ROW2: number;
        static COLUMN2ROW0: number;
        static COLUMN2ROW1: number;
        static COLUMN2ROW2: number;
        constructor(column0Row0?: number, column1Row0?: number, column2Row0?: number, column0Row1?: number, column1Row1?: number,
                    column2Row1?: number, column0Row2?: number, column1Row2?: number, column2Row2?: number);
        clone(result?: Matrix3): Matrix3;
        equals(right?: Matrix3): boolean;
        equalsEpsilon(right: Matrix3, epsilon: number): boolean;
        toString(): string;
        static pack(value: Matrix3, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Matrix3): Matrix3;
        static clone(matrix: Matrix3, result?: Matrix3): Matrix3;
        static fromArray(array: number[], startingIndex?: number, result?: Matrix3): Matrix3;
        static fromColumnMajorArray(values: number[], result?: Matrix3): Matrix3;
        static fromRowMajorArray(values: number[], result?: Matrix3): Matrix3;
        static fromQuaternion(quaternion: Quaternion): Matrix3;
        static fromScale(scale: Cartesian3, result?: Matrix3): Matrix3;
        static fromUniformScale(scale: number, result?: Matrix3): Matrix3;
        static fromCrossProduct(the: Cartesian3, result?: Matrix3): Matrix3;
        static fromRotationX(angle: number, result?: Matrix3): Matrix3;
        static fromRotationY(angle: number, result?: Matrix3): Matrix3;
        static fromRotationZ(angle: number, result?: Matrix3): Matrix3;
        static toArray(matrix: Matrix3, result?: number[]): number[];
        static getElementIndex(row: number, column: number): number;
        static getColumn(matrix: Matrix3, index: number, result: Cartesian3): Cartesian3;
        static setColumn(matrix: Matrix3, index: number, cartesian: Cartesian3, result: Cartesian3): Matrix3;
        static getRow(matrix: Matrix3, index: number, result: Cartesian3): Cartesian3;
        static setRow(matrix: Matrix3, index: number, cartesian: Cartesian3, result: Cartesian3): Matrix3;
        static getScale(matrix: Matrix3, result: Cartesian3): Cartesian3;
        static getMaximumScale(matrix: Matrix3): number;
        static multiply(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3;
        static add(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3;
        static subtract(left: Matrix3, right: Matrix3, result: Matrix3): Matrix3;
        static multiplyByVector(matrix: Matrix3, cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static multiplyByScalar(matrix: Matrix3, scalar: number, result: Matrix3): Matrix3;
        static negate(matrix: Matrix3, result: Matrix3): Matrix3;
        static transpose(matrix: Matrix3, result: Matrix3): Matrix3;
        static computeEigenDecomposition(matrix: Matrix3, result?: any): any;
        static abs(matrix: Matrix3, result: Matrix3): Matrix3;
        static determinant(matrix: Matrix3): number;
        static inverse(matrix: Matrix3, result: Matrix3): Matrix3;
        static equals(left?: Matrix3, right?: Matrix3): boolean;
        static equalsEpsilon(left: Matrix3, right: Matrix3, epsilon: number): boolean;
    }

    class Matrix4 extends Packable {
        static IDENTITY: Matrix4;
        static COLUMN0ROW0: number;
        static COLUMN0ROW1: number;
        static COLUMN0ROW2: number;
        static COLUMN0ROW3: number;
        static COLUMN1ROW0: number;
        static COLUMN1ROW1: number;
        static COLUMN1ROW2: number;
        static COLUMN1ROW3: number;
        static COLUMN2ROW0: number;
        static COLUMN2ROW1: number;
        static COLUMN2ROW2: number;
        static COLUMN2ROW3: number;
        static COLUMN3ROW0: number;
        static COLUMN3ROW1: number;
        static COLUMN3ROW2: number;
        static COLUMN3ROW3: number;
        constructor(column0Row0?: number, column1Row0?: number, column2Row0?: number, column3Row0?: number, column0Row1?: number,
                    column1Row1?: number, column2Row1?: number, column3Row1?: number, column0Row2?: number, column1Row2?: number,
                    column2Row2?: number, column3Row2?: number, column0Row3?: number, column1Row3?: number, column2Row3?: number,
                    column3Row3?: number);
        clone(result?: Matrix4): Matrix4;
        equals(right?: Matrix4): boolean;
        equalsEpsilon(right: Matrix4, epsilon: number): boolean;
        toString(): string;
        static pack(value: Matrix4, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Matrix4): Matrix4;
        static clone(matrix: Matrix4, result?: Matrix4): Matrix4;
        static fromArray(array: number[], startingIndex?: number, result?: Matrix4): Matrix4;
        static fromColumnMajorArray(values: number[], result?: Matrix4): Matrix4;
        static fromRowMajorArray(values: number[], result?: Matrix4): Matrix4;
        static fromRotationTranslation(rotation: Matrix3, translation?: Cartesian3, result?: Matrix4): Matrix4;
        static fromTranslationQuaternionRotationScale(translation: Cartesian3, rotation: Quaternion, scale: Cartesian3, result?: Matrix4): Matrix4;
        static fromTranslation(translation: Cartesian3, result?: Matrix4): Matrix4;
        static fromScale(scale: Cartesian3, result?: Matrix4): Matrix4;
        static fromUniformScale(scale: number, result?: Matrix4): Matrix4;
        static fromCamera(camera: Camera, result?: Matrix4): Matrix4;
        static computePerspectiveFieldOfView(fovY: number, aspectRatio: number, near: number, far: number, result: Matrix4): Matrix4;
        static computeOrthographicOffCenter(left: number, right: number, bottom: number, top: number, near: number, far: number, result: Matrix4): Matrix4;
        static computePerspectiveOffCenter(left: number, right: number, bottom: number, top: number, near: number, far: number, result: Matrix4): Matrix4;
        static computeInfinitePerspectiveOffCenter(left: number, right: number, bottom: number, top: number, near: number, far: number, result: Matrix4): Matrix4;
        static computeViewportTransformation(viewport: any, nearDepthRange: number, farDepthRange: number, result: Matrix4): Matrix4;
        static toArray(matrix: Matrix4, result?: number[]): number[];
        static getElementIndex(row: number, column: number): number;
        static getColumn(matrix: Matrix4, index: number, result: Cartesian4): Cartesian4;
        static setColumn(matrix: Matrix4, index: number, cartesian: Cartesian4, result: Cartesian4): Matrix4;
        static getRow(matrix: Matrix4, index: number, result: Cartesian4): Cartesian4;
        static setRow(matrix: Matrix4, index: number, cartesian: Cartesian4, result: Cartesian4): Matrix4;
        static getScale(matrix: Matrix4, result: Cartesian3): Cartesian3;
        static getMaximumScale(matrix: Matrix4): number;
        static multiply(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static add(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static subtract(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static multiplyTransformation(left: Matrix4, right: Matrix4, result: Matrix4): Matrix4;
        static multiplyByMatrix3(matrix: Matrix4, rotation: Matrix3, result: Matrix4): Matrix4;
        static multiplyByTranslation(matrix: Matrix4, translation: Cartesian3, result: Matrix4): Matrix4;
        static multiplyByUniformScale(matrix: Matrix4, scale: number, result: Matrix4): Matrix4;
        static multiplyByScale(matrix: Matrix4, scale: Cartesian3, result: Matrix4): Matrix4;
        static multiplyByVector(matrix: Matrix4, cartesian: Cartesian4, result: Cartesian4): Cartesian4;
        static multiplyByPointAsVector(matrix: Matrix4, cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static multiplyByPoint(matrix: Matrix4, cartesian: Cartesian3, result: Cartesian3): Cartesian3;
        static multiplyByScalar(matrix: Matrix4, scalar: number, result: Matrix4): Matrix4;
        static negate(matrix: Matrix4, result: Matrix4): Matrix4;
        static transpose(matrix: Matrix4, result: Matrix4): Matrix4;
        static abs(matrix: Matrix4, result: Matrix4): Matrix4;
        static equals(left?: Matrix4, right?: Matrix4): boolean;
        static equalsEpsilon(left: Matrix4, right: Matrix4, epsilon: number): boolean;
        static getTranslation(matrix: Matrix4, result: Cartesian3): Cartesian3;
        static getRotation(matrix: Matrix4, result: Matrix3): Matrix3;
        static inverse(matrix: Matrix4, result: Matrix4): Matrix4;
        static inverseTransformation(matrix: Matrix4, result: Matrix4): Matrix4;
    }

    class NearFarScalar extends Packable {
        near: number;
        nearValue: number;
        far: number;
        farValue: number;
        constructor(near?: number, nearValue?: number, far?: number, farValue?: number);
        clone(result?: NearFarScalar): NearFarScalar;
        equals(right?: NearFarScalar): boolean;
        static clone(nearFarScalar: NearFarScalar, result?: NearFarScalar): NearFarScalar;
        static pack(value: NearFarScalar, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: NearFarScalar): NearFarScalar;
        static equals(left?: NearFarScalar, right?: NearFarScalar): boolean;
    }

    class ObjectOrientedBoundingBox {
        rotation: Matrix3;
        translation: Cartesian3;
        scale: Cartesian3;
        constructor(rotation?: Matrix3, translation?: Cartesian3, scale?: Cartesian3);
        clone(result?: ObjectOrientedBoundingBox): ObjectOrientedBoundingBox;
        equals(right?: ObjectOrientedBoundingBox): boolean;
        static fromPoints(positions: Cartesian3[], result?: ObjectOrientedBoundingBox): ObjectOrientedBoundingBox;
        static fromBoundingRectangle(boundingRectangle: BoundingRectangle, rotation?: number): ObjectOrientedBoundingBox;
        static clone(box: ObjectOrientedBoundingBox, result?: ObjectOrientedBoundingBox): ObjectOrientedBoundingBox;
        static intersect(left: ObjectOrientedBoundingBox, right: ObjectOrientedBoundingBox): boolean;
        static equals(left: ObjectOrientedBoundingBox, right: ObjectOrientedBoundingBox): boolean;
    }

    class Occluder {
        position: Cartesian3;
        radius: number;
        cameraPosition: Cartesian3;
        constructor(occluderBoundingSphere: BoundingSphere, cameraPosition: Cartesian3);
        isPointVisible(occludee: Cartesian3): boolean;
        isBoundingSphereVisible(occludee: BoundingSphere): boolean;
        computeVisibility(occludeeBS: BoundingSphere): number;
        static fromBoundingSphere(occluderBoundingSphere: BoundingSphere, cameraPosition: Cartesian3, result?: Occluder): Occluder;
        static computeOccludeePoint(occluderBoundingSphere: BoundingSphere, occludeePosition: Cartesian3, positions: Cartesian3[]): any;
        static computeOccludeePointFromRectangle(rectangle: Rectangle, ellipsoid?: Ellipsoid): any;
    }

    class PinBuilder {
        fromColor(color: Color, size: number): HTMLCanvasElement;
        fromUrl(url: string, color: Color, size: number): HTMLCanvasElement | Promise<HTMLCanvasElement>;
        fromMakiIconId(id: string, color: Color, size: number): HTMLCanvasElement | Promise<HTMLCanvasElement>;
        fromText(text: string, color: Color, size: number): HTMLCanvasElement;
    }

    class Plane {
        normal: Cartesian3;
        distance: number;
        constructor(normal: Cartesian3, distance: number);
        static fromPointNormal(point: Cartesian3, normal: Cartesian3, result?: Plane): Plane;
        static getPointDistance(plane: Plane, point: Cartesian3): number;
    }

    class PolygonGeometry extends Packable {
        constructor(options: {
            polygonHierarchy: PolygonHierarchy;
            height?: number;
            extrudedHeight?: number;
            vertexFormat?: VertexFormat;
            stRotation?: number;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            perPositionHeight?: boolean
        });
        static fromPositions(options?: {
            positions: Cartesian3[];
            height?: number;
            extrudedHeight?: number;
            vertexFormat?: VertexFormat;
            stRotation?: number;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            perPositionHeight?: boolean;
            closeTop?: boolean;
            closeBottom?: boolean;
        }): PolygonGeometry;
        static unpack(array: number[], startingIndex?: number, result?: PolygonGeometry): PolygonGeometry;
        static createGeometry(polygonGeometry: PolygonGeometry): Geometry;
    }

    class PolygonHierarchy extends Property {
        positions: Cartesian3[];
        holes: PolygonHierarchy[];
        constructor(positions?: Cartesian3[], holes?: PolygonHierarchy[]);
    }

    class PolygonOutlineGeometry extends Packable {
        constructor(options: {
            polygonHierarchy: any;
            height?: number;
            extrudedHeight?: number;
            vertexFormat?: VertexFormat;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            perPositionHeight?: boolean
        });
        static unpack(array: number[], startingIndex?: number, result?: PolygonOutlineGeometry): PolygonOutlineGeometry;
        static fromPositions(options?: {
            positions: Cartesian3[];
            height?: number;
            extrudedHeight?: number;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            perPositionHeight?: boolean;
        }): PolygonOutlineGeometry;
        static createGeometry(polygonGeometry: PolygonOutlineGeometry): Geometry;
    }

    class PolylineGeometry extends Packable {
        constructor(options: { positions: Cartesian3[]; width?: number; colors?: Color[]; colorsPerVertex?: boolean; followSurface?: boolean; granularity?: number; ellipsoid?: Ellipsoid });
        static unpack(array: number[], startingIndex?: number, result?: PolylineGeometry): PolylineGeometry;
        static createGeometry(polylineGeometry: PolylineGeometry): Geometry;
    }

    class PolylineVolumeGeometry extends Packable {
        constructor(options: { polylinePositions: Cartesian3[]; shapePositions: Cartesian2[]; ellipsoid?: Ellipsoid; granularity?: number; vertexFormat?: VertexFormat; cornerType?: CornerType });
        static unpack(array: number[], startingIndex?: number, result?: PolylineVolumeGeometry): PolylineVolumeGeometry;
        static createGeometry(polylineVolumeGeometry: PolylineVolumeGeometry): Geometry;
    }

    class PolylineVolumeOutlineGeometry extends Packable {
        constructor(options: { polylinePositions: Cartesian3[]; shapePositions: number; ellipsoid?: Ellipsoid; granularity?: number; cornerType?: CornerType });
        static unpack(array: number[], startingIndex?: number, result?: PolylineVolumeOutlineGeometry): PolylineVolumeOutlineGeometry;
        static createGeometry(polylineVolumeOutlineGeometry: PolylineVolumeOutlineGeometry): Geometry;
    }

    class QuantizedMeshTerrainData {
        waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;
        constructor(options: {
            quantizedVertices: Uint16Array;
            indices: Uint16Array | Uint32Array;
            minimumHeight: number;
            maximumHeight: number;
            boundingSphere: BoundingSphere;
            horizonOcclusionPoint: Cartesian3;
            westIndices: number[];
            southIndices: number[];
            eastIndices: number[];
            northIndices: number[];
            westSkirtHeight: number;
            southSkirtHeight: number;
            eastSkirtHeight: number;
            northSkirtHeight: number;
            childTileMask?: number;
            createdByUpsampling?: boolean;
            encodedNormals?: Uint8Array;
            waterMask?: Uint8Array
        });
        createMesh(tilingScheme: TilingScheme, x: number, y: number, level: number): Promise<TerrainMesh>;
        upsample(tilingScheme: TilingScheme, thisX: number, thisY: number, thisLevel: number, descendantX: number, descendantY: number, descendantLevel: number): Promise<QuantizedMeshTerrainData>;
        interpolateHeight(rectangle: Rectangle, longitude: number, latitude: number): number;
        isChildAvailable(thisX: number, thisY: number, childX: number, childY: number): boolean;
        wasCreatedByUpsampling(): boolean;
    }

    class Quaternion extends Packable {
        x: number;
        y: number;
        z: number;
        w: number;
        static packedInterpolationLength: number;
        static ZERO: Quaternion;
        static IDENTITY: Quaternion;
        constructor(x?: number, y?: number, z?: number, w?: number);
        clone(result?: Quaternion): Quaternion;
        equals(right?: Quaternion): boolean;
        equalsEpsilon(right: Quaternion, epsilon: number): boolean;
        toString(): string;
        static fromAxisAngle(axis: Cartesian3, angle: number, result?: Quaternion): Quaternion;
        static fromRotationMatrix(matrix: Matrix3, result?: Quaternion): Quaternion;
        static fromHeadingPitchRoll(heading: number, pitch: number, roll: number, result: Quaternion): Quaternion;
        static pack(value: Quaternion, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Quaternion): Quaternion;
        static convertPackedArrayForInterpolation(packedArray: number[], startingIndex?: number, lastIndex?: number, result?: number[]): void;
        static unpackInterpolationResult(array: number[], sourceArray: number[], startingIndex?: number, lastIndex?: number, result?: Quaternion): Quaternion;
        static clone(quaternion: Quaternion, result?: Quaternion): Quaternion;
        static conjugate(quaternion: Quaternion, result: Quaternion): Quaternion;
        static magnitudeSquared(quaternion: Quaternion): number;
        static magnitude(quaternion: Quaternion): number;
        static normalize(quaternion: Quaternion, result: Quaternion): Quaternion;
        static inverse(quaternion: Quaternion, result: Quaternion): Quaternion;
        static add(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion;
        static subtract(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion;
        static negate(quaternion: Quaternion, result: Quaternion): Quaternion;
        static dot(left: Quaternion, right: Quaternion): number;
        static multiply(left: Quaternion, right: Quaternion, result: Quaternion): Quaternion;
        static multiplyByScalar(quaternion: Quaternion, scalar: number, result: Quaternion): Quaternion;
        static divideByScalar(quaternion: Quaternion, scalar: number, result: Quaternion): Quaternion;
        static computeAxis(quaternion: Quaternion, result: Cartesian3): Cartesian3;
        static computeAngle(quaternion: Quaternion): number;
        static lerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): Quaternion;
        static slerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): Quaternion;
        static log(quaternion: Quaternion, result: Cartesian3): Cartesian3;
        static exp(cartesian: Cartesian3, result: Quaternion): Quaternion;
        static computeInnerQuadrangle(q0: Quaternion, q1: Quaternion, q2: Quaternion, result: Quaternion): Quaternion;
        static squad(q0: Quaternion, q1: Quaternion, s0: Quaternion, s1: Quaternion, t: number, result: Quaternion): Quaternion;
        static fastSlerp(start: Quaternion, end: Quaternion, t: number, result: Quaternion): Quaternion;
        static fastSquad(q0: Quaternion, q1: Quaternion, s0: Quaternion, s1: Quaternion, t: number, result?: Quaternion): Quaternion;
        static equals(left?: Quaternion, right?: Quaternion): boolean;
        static equalsEpsilon(left: Quaternion, right: Quaternion, epsilon: number): boolean;
    }

    class QuaternionSpline {
        times: number[];
        points: Quaternion[];
        innerQuadrangles: Quaternion[];
        constructor(options: { times: number[]; points: Quaternion[]; firstInnerQuadrangle?: Quaternion; lastInnerQuadrangle?: Quaternion });
        findTimeInterval(time: number): number;
        evaluate(time: number, result?: Quaternion): Quaternion;
    }

    class Queue {
        readonly length: number;
        enqueue(item: any): void;
        dequeue(): any;
        contains(item: any): boolean;
        clear(): void;
        peek(): any;
        sort(compareFunction: Queue.Comparator): void;
    }

    namespace Queue {
        type Comparator = (a: any, b: any) => number;
    }

    class Ray {
        origin: Cartesian3;
        direction: Cartesian3;
        constructor(origin?: Cartesian3, direction?: Cartesian3);
        static getPoint(t: number, result?: Cartesian3): Cartesian3;
    }

    class Rectangle extends Packable {
        west: number;
        south: number;
        east: number;
        north: number;
        width: number;
        height: number;
        static MAX_VALUE: Rectangle;
        constructor(west?: number, south?: number, east?: number, north?: number);
        clone(result?: Rectangle): Rectangle;
        equals(other?: Rectangle): boolean;
        equalsEpsilon(other: Rectangle, epsilon: number): boolean;
        static pack(value: Rectangle, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: Rectangle): Rectangle;
        static computeWidth(rectangle: Rectangle): number;
        static computeHeight(rectangle: Rectangle): number;
        static fromDegrees(west?: number, south?: number, east?: number, north?: number, result?: Rectangle): Rectangle;
        static fromCartographicArray(cartographics: Cartographic[], result?: Rectangle): Rectangle;
        static clone(rectangle: Rectangle, result?: Rectangle): Rectangle;
        static equals(left?: Rectangle, right?: Rectangle): boolean;
        static validate(rectangle: Rectangle): void;
        static southwest(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static northwest(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static northeast(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static southeast(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static center(rectangle: Rectangle, result?: Cartographic): Cartographic;
        static intersection(rectangle: Rectangle, otherRectangle: Rectangle, result?: Rectangle): Rectangle;
        static contains(rectangle: Rectangle, cartographic: Cartographic): boolean;
        static subsample(rectangle: Rectangle, ellipsoid?: Ellipsoid, surfaceHeight?: number, result?: Cartesian3[]): Cartesian3[];
    }

    class RectangleGeometry extends Packable {
        constructor(options: {
            rectangle: Rectangle;
            vertexFormat?: VertexFormat;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            height?: number;
            rotation?: number;
            stRotation?: number;
            extrudedHeight?: number
        });
        static pack(value: BoundingSphere, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: RectangleGeometry): RectangleGeometry;
        static createGeometry(rectangleGeometry: RectangleGeometry): Geometry;
    }

    class RectangleOutlineGeometry extends Packable {
        constructor(options: {
            rectangle: Rectangle;
            ellipsoid?: Ellipsoid;
            granularity?: number;
            height?: number;
            rotation?: number;
            extrudedHeight?: number
        });
        static pack(value: BoundingSphere, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: RectangleGeometry): RectangleOutlineGeometry;
        static createGeometry(rectangleGeometry: RectangleOutlineGeometry): Geometry;
    }

    class RequestErrorEvent {
        statusCode: number;
        response: any;
        responseHeaders: any;
        constructor(statusCode?: number, response?: any, responseHeaders?: string | object);
        toString(): string;
    }

    class RuntimeError {
        name: string;
        message: string;
        stack: string;
        constructor(message?: string);
    }

    class ScreenSpaceEventHandler {
        constructor(element?: HTMLCanvasElement);
        setInputAction(action: () => void, type: number, modifier?: number): void;
        getInputAction(type: number, modifier?: number): () => void;
        removeInputAction(type: number, modifier?: number): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class ShowGeometryInstanceAttribute {
        value: Uint8Array;
        componentDatatype: ComponentDatatype;
        componentsPerAttribute: number;
        normalize: boolean;
        constructor(show?: boolean);
        static toValue(show: boolean, result?: Uint8Array): Uint8Array;
    }

    class SimplePolylineGeometry extends Packable {
        constructor(options: { positions: Cartesian3[]; colors?: Color[]; colorsPerVertex?: boolean; followSurface?: boolean; granularity?: number; ellipsoid?: Ellipsoid });
        static unpack(array: number[], startingIndex?: number, result?: SimplePolylineGeometry): SimplePolylineGeometry;
        static createGeometry(simplePolylineGeometry: SimplePolylineGeometry): Geometry;
    }

    class SphereGeometry extends Packable {
        constructor(options?: { radius?: number; stackPartitions?: number; slicePartitions?: number; vertexFormat?: VertexFormat });
        static unpack(array: number[], startingIndex?: number, result?: SphereGeometry): SphereGeometry;
        static createGeometry(sphereGeometry: SphereGeometry): Geometry;
    }

    class SphereOutlineGeometry extends Packable {
        constructor(options?: { radius?: number; stackPartitions?: number; slicePartitions?: number; subdivisions?: number });
        static unpack(array: number[], startingIndex?: number, result?: SphereOutlineGeometry): SphereOutlineGeometry;
        static createGeometry(sphereGeometry: SphereOutlineGeometry): Geometry;
    }

    class Spherical {
        constructor(clock?: number, cone?: number, magnitude?: number);
        equals(other: Spherical): boolean;
        clone(result?: Spherical): Spherical;
        equalsEpsilon(other: Spherical, epsilon: number): boolean;
        toString(): string;
        static fromCartesian3(cartesian3: Cartesian3, spherical?: Spherical): Spherical;
        static clone(spherical: Spherical, result?: Spherical): Spherical;
        static normalize(spherical: Spherical, result?: Spherical): Spherical;
        static equals(left: Spherical, right: Spherical): boolean;
        static equalsEpsilon(left: Spherical, right: Spherical, epsilon?: number): boolean;
    }

    class Spline {
        times: number[];
        points: Cartesian3[] | Quaternion[];
        evaluate(time: number, result?: Cartesian3 | Quaternion): Cartesian3 | Quaternion;
        findTimeInterval(time: number, startIndex: number): number;
    }

    class TaskProcessor {
        constructor(workerName: string, maximumActiveTasks?: number);
        scheduleTask(parameters: any, transferableObjects?: any[]): Promise<any>;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class TerrainData {
        credits: Credit[];
        waterMask: Uint8Array | HTMLImageElement | HTMLCanvasElement;
        interpolateHeight(rectangle: Rectangle, longitude: number, latitude: number): number;
        isChildAvailable(thisX: number, thisY: number, childX: number, childY: number): boolean;
        upsample(tilingScheme: TilingScheme, thisX: number, thisY: number, thisLevel: number, descendantX: number, descendantY: number, descendantLevel: number): Promise<TerrainData>;
        wasCreatedByUpsampling(): boolean;
    }

    class TerrainMesh {
        center: Cartesian3;
        vertices: Float32Array;
        stride: number;
        indices: Uint16Array | Uint32Array;
        minimumHeight: number;
        maximumHeight: number;
        boundingSphere3D: BoundingSphere;
        occludeePointInScaledSpace: Cartesian3;
        constructor(center: Cartesian3, vertices: Float32Array, indices: Uint16Array | Uint32Array, minimumHeight: number,
                    maximumHeight: number, boundingSphere3D: BoundingSphere, occludeePointInScaledSpace: Cartesian3, vertexStride?: number);
    }

    abstract class TerrainProvider {
        availability: TileAvailability;
        credit: Credit;
        errorEvent: Event;
        hasVertexNormals: boolean;
        hasWaterMask: boolean;
        ready: boolean;
        readonly readyPromise: Promise<boolean>;
        tilingScheme: TilingScheme;
        static heightmapTerrainQuality: number;
        static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid: Ellipsoid, tileImageWidth: number, numberOfTilesAtLevelZero: number): number;
        static getRegularGridIndices(width: number, height: number): Uint16Array;
        getLevelMaximumGeometricError(level: number): number;
        getTileDataAvailable(x: number, y: number, level: number): boolean;
        requestTileGeometry(x: number, y: number, level: number, throttleRequests?: boolean): Promise<TerrainData>;
    }

    class TileAvailability {
        constructor(tilingScheme: TilingScheme, maximumLevel: number);
        addAvailableTileRange(level: number, startX: number, startY: number, endX: number, endY: number): void;
        computeBestAvailableLevelOverRectangle(rectangle: Rectangle): number;
        computeChildMaskForTile(level: number, x: number, y: number): number;
        computeMaximumLevelAtPosition(position: Cartographic): number;
        isTileAvailable(level: number, x: number, y: number): boolean;
    }

    class TileProviderError {
        provider: ImageryProvider | TerrainProvider;
        message: string;
        x: number;
        y: number;
        level: number;
        timesRetried: number;
        retry: boolean;
        error: Error;
        constructor(provider: ImageryProvider | TerrainProvider, message: string, x?: number, y?: number, level?: number, timesRetried?: number, error?: Error);
        static handleError(previousError: TileProviderError, provider: ImageryProvider | TerrainProvider, event: Event,
                            message: string, x: number, y: number, level: number, retryFunction: TileProviderError.RetryFunction,
                            errorDetails?: Error): TileProviderError;
        static handleSuccess(previousError: TileProviderError): void;
    }

    namespace TileProviderError {
        type RetryFunction = () => void;
    }

    class TilingScheme {
        ellipsoid: Ellipsoid;
        rectangle: Rectangle;
        projection: MapProjection;
        getNumberOfXTilesAtLevel(level: number): number;
        getNumberOfYTilesAtLevel(level: number): number;
        rectangleToNativeRectangle(rectangle: Rectangle, result?: Rectangle): Rectangle;
        tileXYToNativeRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        tileXYToRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        positionToTileXY(position: Cartographic, level: number, result?: Cartesian2): Cartesian2;
    }

    class TimeInterval {
        start: JulianDate;
        stop: JulianDate;
        data: any;
        isStartIncluded: boolean;
        isStopIncluded: boolean;
        isEmpty: boolean;
        static EMPTY: TimeInterval;
        constructor(options?: { start?: JulianDate; stop?: JulianDate; isStartIncluded?: boolean; isStopIncluded?: boolean; data?: any });
        clone(result?: TimeInterval): TimeInterval;
        equals(right?: TimeInterval, dataComparer?: TimeInterval.DataComparer): boolean;
        equalsEpsilon(right: TimeInterval, epsilon: number, dataComparer?: TimeInterval.DataComparer): boolean;
        toString(): string;
        static fromIso8601(options: { iso8601: string; isStartIncluded?: boolean; isStopIncluded?: boolean; data?: any }, result?: TimeInterval): TimeInterval;
        static toIso8601(timeInterval: TimeInterval, precision?: number): string;
        static clone(timeInterval?: TimeInterval, result?: TimeInterval): TimeInterval;
        static equals(left?: TimeInterval, right?: TimeInterval, dataComparer?: TimeInterval.DataComparer): boolean;
        static equalsEpsilon(left: TimeInterval, right: TimeInterval, epsilon: number, dataComparer?: TimeInterval.DataComparer): boolean;
        static intersect(left: TimeInterval, right: TimeInterval, result: TimeInterval, mergeCallback?: TimeInterval.MergeCallback): TimeInterval;
        static contains(timeInterval: TimeInterval, julianDate: JulianDate): boolean;
    }

    namespace TimeInterval {
        type MergeCallback = (leftData: any, rightData: any) => any;
        type DataComparer = (leftData: any, rightData: any) => boolean;
    }

    class TimeIntervalCollection {
        readonly changedEvent: Event;
        readonly start: JulianDate;
        readonly isStartIncluded: boolean;
        readonly stop: JulianDate;
        readonly isStopIncluded: boolean;
        readonly length: number;
        readonly isEmpty: boolean;
        constructor(intervals?: TimeInterval[]);
        equals(right?: TimeIntervalCollection, dataComparer?: TimeInterval.DataComparer): boolean;
        get(index: number): TimeInterval;
        removeAll(): void;
        findIntervalContainingDate(date: JulianDate): TimeInterval | undefined;
        findDataForIntervalContainingDate(date: JulianDate): any;
        contains(julianDate: JulianDate): boolean;
        indexOf(date: JulianDate): number;
        findInterval(options?: { start?: JulianDate; stop?: JulianDate; isStartIncluded?: boolean; isStopIncluded?: boolean }): TimeInterval;
        addInterval(interval: TimeInterval, dataComparer?: TimeInterval.DataComparer): void;
        removeInterval(interval: TimeInterval): void;
        intersect(other: TimeIntervalCollection, dataComparer?: TimeInterval.DataComparer, mergeCallback?: TimeInterval.MergeCallback): TimeIntervalCollection;
    }

    class VRTheWorldTerrainProvider extends TerrainProvider {
        constructor(options: { url: string; proxy?: any; ellipsoid?: Ellipsoid; credit?: Credit | string });
    }

    class VertexFormat extends Packable {
        position: boolean;
        normal: boolean;
        st: boolean;
        binormal: boolean;
        tangent: boolean;
        color: boolean;
        static POSITION_ONLY: VertexFormat;
        static POSITION_AND_NORMAL: VertexFormat;
        static POSITION_NORMAL_AND_ST: VertexFormat;
        static POSITION_AND_ST: VertexFormat;
        static POSITION_AND_COLOR: VertexFormat;
        static ALL: VertexFormat;
        static DEFAULT: VertexFormat;
        constructor(options?: any);
        static unpack(array: number[], startingIndex?: number, result?: VertexFormat): VertexFormat;
        static clone(cartesian: VertexFormat, result?: VertexFormat): VertexFormat;
    }

    class WallGeometry extends Packable {
        constructor(options: { positions: Cartesian3[]; granularity?: number; maximumHeights?: number[]; minimumHeights?: number[]; ellipsoid?: Ellipsoid; vertexFormat?: VertexFormat });
        static unpack(array: number[], startingIndex?: number, result?: WallGeometry): WallGeometry;
        static fromConstantHeights(positions: Cartesian3[], maximumHeight?: number, minimumHeight?: number, ellipsoid?: Ellipsoid): WallGeometry;
        static createGeometry(wallGeometry: WallGeometry): Geometry;
    }

    class WallOutlineGeometry extends Packable {
        constructor(options: { positions: Cartesian3[]; granularity?: number; maximumHeights?: number[]; minimumHeights?: number[]; ellipsoid?: Ellipsoid });
        static unpack(array: number[], startingIndex?: number, result?: WallOutlineGeometry): WallOutlineGeometry;
        static fromConstantHeights(positions: Cartesian3[], maximumHeight?: number, minimumHeight?: number, ellipsoid?: Ellipsoid): WallOutlineGeometry;
        static createGeometry(wallGeometry: WallOutlineGeometry): Geometry;
    }

    class WebMercatorProjection {
        ellipsoid: Ellipsoid;
        static MaximumLatitude: number;
        constructor(ellipsoid?: Ellipsoid);
        project(cartographic: Cartographic, result?: Cartesian3): Cartesian3;
        unproject(cartesian: Cartesian3, result?: Cartographic): Cartographic;
        static mercatorAngleToGeodeticLatitude(mercatorAngle: number): number;
        static geodeticLatitudeToMercatorAngle(latitude: number): number;
    }

    class WebMercatorTilingScheme {
        ellipsoid: Ellipsoid;
        rectangle: Rectangle;
        projection: MapProjection;
        constructor(options?: { ellipsoid?: Ellipsoid;
            numberOfLevelZeroTilesX?: number;
            numberOfLevelZeroTilesY?: number;
            rectangleSouthwestInMeters?: Cartesian2;
            rectangleNortheastInMeters?: Cartesian2
        });
        getNumberOfXTilesAtLevel(level: number): number;
        getNumberOfYTilesAtLevel(level: number): number;
        rectangleToNativeRectangle(rectangle: Rectangle, result?: Rectangle): Rectangle;
        tileXYToNativeRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        tileXYToRectangle(x: number, y: number, level: number, result?: any): Rectangle;
        positionToTileXY(position: Cartographic, level: number, result?: Cartesian2): Cartesian2;
    }

    class BillboardGraphics {
        definitionChanged: Event;
        image: Property;
        imageSubRegion: Property;
        scale: Property;
        rotation: Property;
        alignedAxis: Property;
        horizontalOrigin: Property;
        verticalOrigin: Property;
        color: Property;
        eyeOffset: Property;
        pixelOffset: Property;
        show: Property;
        width: Property;
        height: Property;
        scaleByDistance: Property;
        translucencyByDistance: Property;
        pixelOffsetScaleByDistance: Property;
        constructor(options?: { image?: Property;
            show?: Property;
            scale?: Property;
            horizontalOrigin?: Property;
            verticalOrigin?: Property;
            eyeOffset?: Property;
            pixelOffset?: Property;
            rotation?: Property;
            alignedAxis?: Property;
            width?: Property;
            height?: Property;
            color?: Property;
            scaleByDistance?: Property;
            translucencyByDistance?: Property;
            pixelOffsetScaleByDistance?: Property;
            imageSubRegion?: Property
        });
        clone(result?: BillboardGraphics): BillboardGraphics;
        merge(source: BillboardGraphics): BillboardGraphics;
    }

    class BillboardVisualizer extends Visualizer {
        constructor(entityCluster: EntityCluster, entityCollection: EntityCollection);
    }

    class BoxGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
    }

    class BoxGraphics {
        definitionChanged: Event;
        show: Property;
        dimensions: Property;
        material: MaterialProperty;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        constructor(options?: {
            dimensions?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property
        });
        clone(result?: BoxGraphics): BoxGraphics;
        merge(source: BoxGraphics): BoxGraphics;
    }

    class CallbackProperty extends Property {
        constructor(callback: CallbackProperty.Callback, isConstant: boolean);
        setCallback(callback: CallbackProperty.Callback, isConstant: boolean): void;
    }

    namespace CallbackProperty {
        type Callback = (time?: JulianDate, result?: any) => any;
    }

    class CheckerboardMaterialProperty extends MaterialProperty {
        evenColor: Color;
        oddColor: Color;
        repeat: Property;
        constructor(options?: { evenColor?: Color; oddColor?: Color; repeat?: Property });
    }

    class ColorMaterialProperty extends MaterialProperty {
        color: Color;
        constructor(color?: Color);
    }

    class CompositeEntityCollection {
        collectionChanged: Event;
        id: string;
        values: Entity[];
        constructor(collections?: EntityCollection[]);
        addCollection(collection: EntityCollection, index?: number): void;
        removeCollection(collection: EntityCollection): boolean;
        removeAllCollections(): void;
        containsCollection(collection: EntityCollection): boolean;
        contains(entity: Entity): boolean;
        indexOfCollection(collection: EntityCollection): number;
        getCollection(index: number): EntityCollection;
        getCollectionsLength(): number;
        raiseCollection(collection: EntityCollection): void;
        lowerCollection(collection: EntityCollection): void;
        raiseCollectionToTop(collection: EntityCollection): void;
        lowerCollectionToBottom(collection: EntityCollection): void;
        suspendEvents(): void;
        resumeEvents(): void;
        computeAvailability(): TimeInterval;
        getById(id: any): Entity;
    }

    class CompositeMaterialProperty extends MaterialProperty {
        intervals: TimeIntervalCollection;
    }

    class CompositePositionProperty {
        isConstant: boolean;
        definitionChanged: Event;
        intervals: TimeIntervalCollection;
        referenceFrame: ReferenceFrame;
        getValue(time: JulianDate, result?: any): any;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
        equals(other?: Property): boolean;
    }

    class CompositeProperty extends Property {
        intervals: TimeIntervalCollection;
    }

    class ConstantPositionProperty {
        isConstant: boolean;
        definitionChanged: Event;
        referenceFrame: ReferenceFrame;
        constructor(value?: Cartesian3, referenceFrame?: ReferenceFrame);
        getValue(time: JulianDate, result?: any): any;
        setValue(value: Cartesian3, referenceFrame?: ReferenceFrame): void;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
        equals(other?: Property): boolean;
    }

    class ConstantProperty extends Property {
        constructor(value?: any);
        setValue(value: any): void;
    }

    class CorridorGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
    }

    class CorridorGraphics {
        definitionChanged: Event;
        show: Property;
        material: MaterialProperty;
        positions: Property;
        height: Property;
        extrudedHeight: Property;
        granularity: Property;
        width: Property;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        cornerType: Property;
        constructor(options?: {
            positions?: Property;
            width?: Property;
            cornerType?: Property;
            height?: Property;
            extrudedHeight?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            granularity?: Property
        });
        clone(result?: CorridorGraphics): CorridorGraphics;
        merge(source: CorridorGraphics): CorridorGraphics;
    }

    class CustomDataSource extends DataSource {
        constructor(name?: string);
    }

    class CylinderGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
    }

    class CylinderGraphics {
        definitionChanged: Event;
        length: Property;
        topRadius: Property;
        bottomRadius: Property;
        numberOfVerticalLines: Property;
        slices: Property;
        show: Property;
        material: MaterialProperty;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        constructor(options?: { length?: Property;
            topRadius?: Property;
            bottomRadius?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            numberOfVerticalLines?: Property;
            slices?: Property
        });
        clone(result?: CylinderGraphics): CylinderGraphics;
        merge(source: CylinderGraphics): CylinderGraphics;
    }

    class CzmlDataSource extends DataSource {
        static updaters: any[];
        static load(czml: Resource | string | object, options?: { sourceUri?: string }): Promise<CzmlDataSource>;
        static processMaterialPacketData(object: object, propertyName: string, packetData: object, interval: TimeInterval, sourceUri: string, entityCollection: EntityCollection): void;
        static processPacketData(type: () => any, object: object, propertyName: string, packetData: object, interval: TimeInterval, sourceUri: string, entityCollection: EntityCollection): void;
        static processPositionPacketData(object: object, propertyName: string, packetData: object, interval: TimeInterval, sourceUri: string, entityCollection: EntityCollection): void;
        constructor(name?: string);
        load(czml: Resource | string | object, options?: { sourceUri?: string }): Promise<CzmlDataSource>;
        process(czml: Resource | string | object, options?: { sourceUri?: string }): Promise<CzmlDataSource>;
    }

    abstract class DataSource {
        changedEvent: Event;
        clock: DataSourceClock;
        clustering: EntityCluster;
        entities: EntityCollection;
        errorEvent: Event;
        isLoading: boolean;
        loadingEvent: Event;
        name: string;
        show: boolean;
        update(time: JulianDate): boolean;
    }

    class DataSourceClock {
        definitionChanged: Event;
        startTime: JulianDate;
        stopTime: JulianDate;
        currentTime: JulianDate;
        clockRange: ClockRange;
        clockStep: ClockStep;
        multiplier: number;
        clone(result?: DataSourceClock): DataSourceClock;
        equals(other: DataSourceClock): boolean;
        merge(source: DataSourceClock): DataSourceClock;
        getValue(): Clock;
    }

    class DataSourceCollection {
        length: number;
        dataSourceAdded: Event;
        dataSourceRemoved: Event;
        add(dataSource: DataSource | Promise<DataSource>): Promise<DataSource>;
        remove(dataSource: DataSource, destroy?: boolean): boolean;
        removeAll(destroy?: boolean): void;
        contains(dataSource: DataSource): boolean;
        indexOf(dataSource: DataSource): number;
        get(index: number): DataSource;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class DataSourceDisplay {
        scene: Scene;
        dataSources: DataSourceCollection;
        defaultDataSource: CustomDataSource;
        static defaultVisualizersCallback: DataSourceDisplay.VisualizersCallback;
        constructor(options: { scene: Scene; dataSourceCollection: DataSourceCollection; visualizersCallback?: DataSourceDisplay.VisualizersCallback });
        isDestroyed(): boolean;
        destroy(): void;
        update(time: JulianDate): boolean;
    }

    namespace DataSourceDisplay {
        type VisualizersCallback = (scene: Scene, dataSource: DataSource) => Visualizer[];
    }

    class DynamicGeometryUpdater {
        update(time: JulianDate): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class EllipseGeometryUpdater extends GeometryUpdater {
        readonly onTerrain: boolean;
        constructor(entity: Entity, scene: Scene);
    }

    class EllipseGraphics {
        definitionChanged: Event;
        semiMajorAxis: Property;
        semiMinorAxis: Property;
        rotation: Property;
        show: Property;
        material: MaterialProperty;
        height: Property;
        extrudedHeight: Property;
        granularity: Property;
        stRotation: Property;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        numberOfVerticalLines: Property;
        constructor(options?: {
            semiMajorAxis?: number;
            semiMinorAxis?: number;
            height?: Property;
            extrudedHeight?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            numberOfVerticalLines?: Property;
            rotation?: Property;
            stRotation?: Property;
            granularity?: Property
        });
        clone(result?: EllipseGraphics): EllipseGraphics;
        merge(source: EllipseGraphics): EllipseGraphics;
    }

    class EllipsoidGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
        createFillGeometryInstance(time: JulianDate, skipModelMatrix?: boolean, modelMatrixResult?: Matrix4): GeometryInstance;
        createOutlineGeometryInstance(time: JulianDate, skipModelMatrix?: boolean, modelMatrixResult?: Matrix4): GeometryInstance;
    }

    class EllipsoidGraphics {
        definitionChanged: Event;
        show: Property;
        radii: Property;
        material: MaterialProperty;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        stackPartitions: Property;
        slicePartitions: Property;
        subdivisions: Property;
        constructor(options?: {
            radii?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            subdivisions?: Property;
            stackPartitions?: Property;
            slicePartitions?: Property
        });
        clone(result?: EllipsoidGraphics): EllipsoidGraphics;
        merge(source: EllipsoidGraphics): EllipsoidGraphics;
    }

    class Entity {
        availability: TimeIntervalCollection;
        billboard: BillboardGraphics;
        box: BoxGraphics;
        corridor: CorridorGraphics;
        cylinder: CylinderGraphics;
        readonly definitionChanged: Event;
        description: Property;
        ellipse: EllipseGraphics;
        ellipsoid: EllipsoidGraphics;
        entityCollection: EntityCollection;
        id: string;
        isShowing: boolean;
        label: LabelGraphics;
        model: ModelGraphics;
        name: string;
        orientation: Property;
        parent: Entity;
        path: PathGraphics;
        plane: any;
        point: PointGraphics;
        polygon: PolygonGraphics;
        polyline: PolylineGraphics;
        polylineVolume: PolylineVolumeGraphics;
        position: PositionProperty;
        properties: any;
        propertyNames: any[];
        rectangle: RectangleGraphics;
        show: boolean;
        viewFrom: Property;
        wall: WallGraphics;
        constructor(options?: {
          id?: string;
          name?: string;
          availability?: TimeIntervalCollection;
          show?: boolean;
          description?: Property;
          position?: PositionProperty;
          orientation?: Property;
          viewFrom?: Property;
          parent?: Entity;
          billboard?: BillboardGraphics;
          box?: BoxGraphics;
          corridor?: CorridorGraphics;
          cylinder?: CylinderGraphics;
          ellipse?: EllipseGraphics;
          ellipsoid?: EllipsoidGraphics;
          label?: LabelGraphics;
          model?: ModelGraphics;
          path?: PathGraphics;
          plane?: any;
          point?: PointGraphics;
          polygon?: PolygonGraphics;
          polyline?: PolylineGraphics;
          polylineVolume?: PolylineVolumeGraphics;
          rectangle?: RectangleGraphics;
          wall?: WallGraphics
        });
        addProperty(propertyName: string): void;
        computeModelMatrix(time: JulianDate, result?: Matrix4): Matrix4;
        isAvailable(time: JulianDate): boolean;
        merge(source: Entity): Entity;
        removeProperty(propertyName: string): void;
    }

    class EntityCluster {
      clusterBillboards: boolean;
      clusterEvent: Event;
      clusterLabels: boolean;
      clusterPoints: boolean;
      enabled: boolean;
      minimumClusterSize: number;
      pixelRange: number;
      constructor(options?: { enabled?: boolean; pixelRange?: number; minimumClusterSize?: number; clusterBillboards?: boolean; clusterLabels?: boolean; clusterPoints?: boolean });
      destroy(): void;
      // newClusterCallback(clusteredEntities, cluster)
    }

    class EntityCollection {
        readonly collectionChanged: Event;
        readonly id: string;
        readonly owner: DataSource | CompositeEntityCollection;
        show: boolean;
        readonly values: Entity[];
        static collectionChangedEventCallback(collection: EntityCollection, added: Entity[], removed: Entity[], changed: Entity[]): void;
        constructor(owner: DataSource | CompositeEntityCollection);
        add(entity: Entity): Entity;
        computeAvailability(): TimeInterval;
        contains(entity: Entity): boolean;
        getById(id: string): Entity;
        getOrCreateEntity(id: string): Entity;
        remove(entity: Entity): boolean;
        removeAll(): void;
        removeById(id: string): boolean;
        resumeEvents(): void;
        suspendEvents(): void;
    }

    class EntityView {
        entity: Entity;
        scene: Scene;
        ellipsoid: Ellipsoid;
        boundingSphere: Entity;
        static defaultOffset3D: Cartesian3;
        constructor(entity: Entity, scene: Scene, ellipsoid?: Ellipsoid, boundingSphere?: BoundingSphere);
        update(time: JulianDate): void;
    }

    class GeoJsonDataSource extends DataSource {
        static clampToGround: boolean;
        static crsLinkHrefs: any;
        static crsLinkTypes: any;
        static crsNames: any;
        static fill: Color;
        static markerColor: Color;
        static markerSize: number;
        static markerSymbol: string;
        static stroke: Color;
        static strokeWidth: number;
        static load(data: Resource | string | object, options?: {
            sourceUri?: string;
            markerSize?: number;
            markerSymbol?: string;
            markerColor?: Color;
            stroke?: Color;
            strokeWidth?: number;
            fill?: Color;
            clampToGround?: boolean
        }): Promise<GeoJsonDataSource>;
        constructor(name?: string);
        load(data: Resource | string | object, options?: {
            sourceUri?: string;
            markerSize?: number;
            markerSymbol?: string;
            markerColor?: Color;
            stroke?: Color;
            strokeWidth?: number;
            fill?: Color;
            clampToGround?: boolean
        }): Promise<GeoJsonDataSource>;
    }

    class GeometryUpdater {
      readonly classificationTypeProperty: Property;
      readonly readonlydistanceDisplayConditionProperty: Property;
      readonly entity: Entity;
      readonly fillEnabled: boolean;
      readonly fillMaterialProperty: MaterialProperty;
      readonly geometryChanged: boolean;
      readonly hasConstantFill: boolean;
      readonly hasConstantOutline: boolean;
      readonly id: string;
      readonly isClosed: boolean;
      readonly isDynamic: boolean;
      readonly outlineColorProperty: Property;
      readonly outlineEnabled: boolean;
      readonly outlineWidth: number;
      readonly shadowsProperty: Property;
      constructor(options: { entity: Entity; scene: Scene; geometryOptions: any; geometryPropertyName: string; observedPropertyNames: string[] });
      createDynamicUpdater(primitives: PrimitiveCollection, groundPrimitives: PrimitiveCollection): DynamicGeometryUpdater;
      destroy(): void;
      isDestroyed(): boolean;
      isFilled(time: JulianDate): boolean;
      isOutlineVisible(time: JulianDate): boolean;
      createFillGeometryInstance(time: JulianDate): GeometryInstance;
      createOutlineGeometryInstance(time: JulianDate): GeometryInstance;
    }

    class GeometryVisualizer extends Visualizer {
        constructor(scene: Scene, entityCollection: EntityCollection, primitives?: PrimitiveCollection, groundPrimitives?: PrimitiveCollection);
    }

    class GridMaterialProperty extends MaterialProperty {
        color: Color;
        cellAlpha: Property;
        lineCount: Property;
        lineThickness: Property;
        lineOffset: Property;
        constructor(options?: { color?: Property; cellAlpha?: Property; lineCount?: Property; lineThickness?: Property; lineOffset?: Property });
    }

    class ImageMaterialProperty extends MaterialProperty {
        image: Property;
        repeat: Property;
        constructor(options?: { image?: Property; repeat?: Property });
    }

    class KmlDataSource extends DataSource {
        refreshEvent: Event;
        unsupportedNodeEvent: Event;
        constructor(options?: {camera?: Camera, canvas?: HTMLCanvasElement; ellipsoid?: Ellipsoid});
        static load(data: Resource | string | Document | Blob,
            options?: { camera: Camera, canvas: HTMLCanvasElement; sourceUri?: string, clampToGround?: boolean; ellipsoid?: Ellipsoid }): Promise<KmlDataSource>;
        load(data: Resource | string | Document | Blob, options?: { sourceUri?: string, clampToGround?: boolean, ellipsoid?: Ellipsoid }): Promise<KmlDataSource>;
    }

    class KmlFeatureData {
        author: { name: string; uri: string; email: string };
        link: { href: string; hreflang: string; rel: string; type: string; title: string; length: string };
        address: string;
        phoneNumber: string;
        snippet: string;
        extendedData: string;
    }

    class LabelGraphics {
        definitionChanged: Event;
        text: Property;
        font: Property;
        style: Property;
        fillColor: Property;
        outlineColor: Property;
        outlineWidth: Property;
        horizontalOrigin: Property;
        verticalOrigin: Property;
        eyeOffset: Property;
        pixelOffset: Property;
        scale: Property;
        show: Property;
        translucencyByDistance: Property;
        pixelOffsetScaleByDistance: Property;
        constructor(options?: {
            text?: Property;
            font?: Property;
            style?: Property;
            fillColor?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            show?: Property;
            scale?: Property;
            horizontalOrigin?: Property;
            verticalOrigin?: Property;
            eyeOffset?: Property;
            pixelOffset?: Property;
            translucencyByDistance?: Property;
            pixelOffsetScaleByDistance?: Property
        });
        clone(result?: LabelGraphics): LabelGraphics;
        merge(source: LabelGraphics): LabelGraphics;
    }

    class LabelVisualizer extends Visualizer {
        constructor(entityCluster: EntityCluster, entityCollection: EntityCollection);
    }

    class MaterialProperty extends Property {
        getType(time: JulianDate): string;
    }

    class ModelGraphics {
        clampAnimations: Property | boolean;
        clippingPlanes: Property;
        color: Property;
        colorBlendAmount: Property | number;
        colorBlendMode: Property;
        readonly definitionChanged: Event;
        distanceDisplayCondition: Property;
        heightReference: Property;
        incrementallyLoadTextures: Property | boolean;
        maximumScale: Property | number;
        minimumScale: Property | number;
        minimumPixelSize: Property | number;
        nodeTransformations: any; // PropertyBag
        runAnimations: Property | boolean;
        scale: Property | number;
        shadows: Property;
        show: Property | boolean;
        silhouetteColor: Property;
        silhouetteSize: Property | number;
        uri: Property | string;
        constructor(options?: {
          uri?: Property | string;
          show?: Property | boolean;
          scale?: Property | number;
          minimumPixelSize?: Property | number;
          maximumScale?: Property | number;
          incrementallyLoadTextures?: Property | boolean;
          runAnimations?: Property | boolean;
          clampAnimations?: Property | boolean;
          nodeTransformations?: Property;
          shadows?: Property;
          heightReference?: Property;
          distanceDisplayCondition?: Property;
          silhouetteColor?: Property;
          silhouetteSize?: Property | number;
          color?: Property;
          colorBlendMode?: Property;
          colorBlendAmount?: Property | number;
          clippingPlanes?: Property;
        });
        clone(result?: ModelGraphics): ModelGraphics;
        merge(source: ModelGraphics): ModelGraphics;
    }

    class ModelVisualizer extends Visualizer {
        constructor(scene: Scene, entityCollection: EntityCollection);
    }

    class PathGraphics {
        readonly definitionChanged: Event;
        distanceDisplayCondition: Property;
        leadTime: Property | number;
        material: MaterialProperty;
        resolution: Property | number;
        trailTime: Property | number;
        show: Property | boolean;
        width: Property | number;
        constructor(options?: {
          leadTime?: Property | number;
          trailTime?: Property | number;
          show?: Property | boolean;
          width?: Property | number;
          material?: MaterialProperty;
          resolution?: Property | number;
          distanceDisplayCondition?: Property;
        });
        clone(result?: PathGraphics): PathGraphics;
        merge(source: PathGraphics): PathGraphics;
    }

    class PathVisualizer extends Visualizer {
        constructor(scene: Scene, entityCollection: EntityCollection);
    }

    class PointGraphics {
        color: Property;
        readonly definitionChanged: Event;
        disableDepthTestDistance: Property;
        distanceDisplayCondition: Property;
        heightReference: Property;
        outlineColor: Property;
        outlineWidth: Property;
        pixelSize: Property;
        scaleByDistance: Property;
        show: Property;
        translucencyByDistance: Property;
        constructor(options?: {
          color?: Color;
          pixelSize?: number;
          outlineColor?: Color;
          outlineWidth?: number;
          show?: boolean;
          scaleByDistance?: Property;
          translucencyByDistance?: Property;
          heightReference?: HeightReference;
          distanceDisplayCondition?: Property;
          disableDepthTestDistance?: Property
        });
        clone(result?: PointGraphics): PointGraphics;
        merge(source: PointGraphics): PointGraphics;
    }

    class PointVisualizer extends Visualizer {
        constructor(entityCluster: EntityCluster, entityCollection: EntityCollection);
    }

    class PolygonGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
    }

    class PolygonGraphics {
        definitionChanged: Event;
        show: Property;
        material: MaterialProperty;
        positions: Property;
        hierarchy: Property;
        height: Property;
        extrudedHeight: Property;
        granularity: Property;
        stRotation: Property;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        perPositionHeight: Property;
        constructor(options?: {
            hierarchy?: Property;
            height?: number;
            extrudedHeight?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: boolean;
            outlineColor?: Property;
            outlineWidth?: number;
            stRotation?: Property;
            granularity?: Property;
            perPositionHeight?: Property
        });
        clone(result?: PolygonGraphics): PolygonGraphics;
        merge(source: PolygonGraphics): PolygonGraphics;
    }

    class PolylineArrowMaterialProperty extends MaterialProperty {
        color: Property;
        constructor(color?: Property);
    }

    class PolylineGeometryUpdater extends GeometryUpdater {
        readonly depthFailMaterialProperty: MaterialProperty;
        readonly distanceDisplayConditionProperty: Property;
        constructor(entity: Entity, scene: Scene);
    }

    class PolylineGlowMaterialProperty extends MaterialProperty {
        color: Color;
        glowPower: Property;
        constructor(options?: { color?: Property; glowPower?: Property });
    }

    class PolylineGraphics {
        definitionChanged: Event;
        show: Property;
        material: MaterialProperty;
        positions: Property;
        width: number;
        followSurface: Property;
        granularity: Property;
        constructor(options?: { positions?: Cartesian3[]; followSurface?: Property; width?: number; show?: Property; material?: MaterialProperty; granularity?: Property });
        clone(result?: PolylineGraphics): PolylineGraphics;
        merge(source: PolylineGraphics): PolylineGraphics;
    }

    class PolylineOutlineMaterialProperty extends MaterialProperty {
        color: Color;
        outlineColor: Color;
        outlineWidth: Property;
        constructor(options?: { color?: Property; outlineColor?: Property; outlineWidth?: Property });
    }

    class PolylineVolumeGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
    }

    class PolylineVolumeGraphics {
        definitionChanged: Event;
        show: Property;
        material: MaterialProperty;
        positions: Property;
        shape: Property;
        granularity: Property;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        cornerType: Property;
        constructor(options?: {
            positions?: Property;
            shape?: Property;
            cornerType?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            granularity?: Property
        });
        clone(result?: PolylineVolumeGraphics): PolylineVolumeGraphics;
        merge(source: PolylineVolumeGraphics): PolylineVolumeGraphics;
    }

    abstract class PositionProperty extends Property {
        referenceFrame: ReferenceFrame;
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
    }

    class PositionPropertyArray extends PositionProperty {
        constructor(value?: Property[]);
        getValue(time?: JulianDate, result?: Cartesian3[]): Cartesian3[];
        setValue(value: Property[]): void;
    }

    abstract class Property {
        readonly isConstant: boolean;
        readonly definitionChanged: Event;
        getValue(time: JulianDate, result?: any): any;
        equals(other?: Property): boolean;
    }

    class PropertyArray extends Property {
        constructor(value?: Property[]);
        getValue(time?: JulianDate, result?: any[]): any[];
        setValue(value: Property[]): void;
    }

    class RectangleGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
    }

    class RectangleGraphics {
        definitionChanged: Event;
        show: Property;
        coordinates: Property;
        material: MaterialProperty;
        height: Property;
        extrudedHeight: Property;
        granularity: Property;
        stRotation: Property;
        rotation: Property;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        closeTop: Property;
        closeBottom: Property;
        constructor(options?: {
            coordinates?: Property;
            height?: Property;
            extrudedHeight?: Property;
            closeTop?: Property;
            closeBottom?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            rotation?: Property;
            stRotation?: Property;
            granularity?: Property
        });
        clone(result?: RectangleGraphics): RectangleGraphics;
        merge(source: RectangleGraphics): RectangleGraphics;
    }

    class ReferenceProperty extends Property {
        readonly referenceFrame: ReferenceFrame;
        readonly targetId: string;
        readonly targetCollection: EntityCollection;
        readonly targetPropertyNames: string[];
        readonly resolvedProperty: Property;
        constructor(targetCollection: EntityCollection, targetId: string, targetPropertyNames: string);
        getValueInReferenceFrame(time: JulianDate, referenceFrame: ReferenceFrame, result?: Cartesian3): Cartesian3;
        getType(time: JulianDate): string;
        static fromString(targetCollection: Entity, referenceString: string): ReferenceProperty;
    }

    class SampledPositionProperty extends SampledProperty {
        numberOfDerivatives: boolean;
        constructor(referenceFrame?: ReferenceFrame, numberOfDerivatives?: number);
        addSample(time: JulianDate, position: Cartesian3, derivatives?: Cartesian3[]): void;
        addSamples(times: JulianDate[], positions: Cartesian3[], derivatives?: any[][]): void;
        addSamplesPackedArray(packedSamples: number[], epoch?: JulianDate): void;
    }

    class SampledProperty extends PositionProperty {
        type: any;
        derivativeTypes: Packable[];
        interpolationDegree: number;
        interpolationAlgorithm: InterpolationAlgorithm;
        forwardExtrapolationType: ExtrapolationType;
        forwardExtrapolationDuration: number;
        backwardExtrapolationType: ExtrapolationType;
        backwardExtrapolationDuration: number;
        constructor(type: number | Packable, derivativeTypes?: Packable[]);
        setInterpolationOptions(options?: { interpolationAlgorithm?: InterpolationAlgorithm; interpolationDegree?: number }): void;
        addSample(time: JulianDate, value: Packable, derivatives?: Packable[]): void;
        addSamples(times: JulianDate[], values: Packable[], derivativeValues?: any[][]): void;
        addSamplesPackedArray(packedSamples: number[], epoch?: JulianDate): void;
    }

    class StripeMaterialProperty extends MaterialProperty {
        orientation: Property;
        evenColor: Color;
        oddColor: Color;
        offset: Property;
        repeat: number;
        constructor(options?: { evenColor?: Property; oddColor?: Property; repeat?: Property; offset?: Property; orientation?: Property });
    }

    class TimeIntervalCollectionPositionProperty extends PositionProperty {
        intervals: TimeIntervalCollection;
        constructor(referenceFrame?: ReferenceFrame);
    }

    class TimeIntervalCollectionProperty extends Property {
        intervals: TimeIntervalCollection;
    }

    class VelocityOrientationProperty extends Property {
        position: Property;
        ellipsoid: Property;
        constructor(position?: Property, ellipsoid?: Ellipsoid);
        getValue(time?: JulianDate, result?: Quaternion): Quaternion;
    }

    abstract class Visualizer {
        update(time: JulianDate): boolean;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class WallGeometryUpdater extends GeometryUpdater {
        constructor(entity: Entity, scene: Scene);
    }

    class WallGraphics {
        readonly definitionChanged: Event;
        show: Property;
        material: MaterialProperty;
        positions: Property;
        minimumHeights: Property;
        maximumHeights: Property;
        granularity: Property;
        fill: Property;
        outline: Property;
        outlineColor: Property;
        outlineWidth: Property;
        constructor(options?: {
            positions?: Property;
            maximumHeights?: Property;
            minimumHeights?: Property;
            show?: Property;
            fill?: Property;
            material?: MaterialProperty;
            outline?: Property;
            outlineColor?: Property;
            outlineWidth?: Property;
            granularity?: Property
        });
        clone(result?: WallGraphics): WallGraphics;
        merge(source: WallGraphics): WallGraphics;
    }

    class Appearance {
        readonly closed: boolean;
        readonly fragmentShaderSource: string;
        material: Material;
        readonly renderState: any;
        translucent: boolean;
        readonly vertexShaderSource: string;
        constructor(options?: { translucent?: boolean; closed?: boolean; material?: Material; vertexShaderSource?: string; fragmentShaderSource?: string; renderState?: RenderState });
        getFragmentShaderSource(): string;
        isTranslucent(): boolean;
        getRenderState(): any;
    }

    class ArcGisMapServerImageryProvider extends ImageryProvider {
        url: string;
        usingPrecachedTiles: boolean;
        constructor(options: {
            url: string;
            tileDiscardPolicy?: TileDiscardPolicy;
            proxy?: Proxy;
            usePreCachedTilesIfAvailable?: boolean;
            enablePickFeatures?: boolean;
            rectangle?: Rectangle;
            tilingScheme?: TilingScheme;
            ellipsoid?: Ellipsoid;
            tileWidth?: number;
            tileHeight?: number;
            maximumLevel?: number
        }, layers?: string);
    }

    class DistanceDisplayCondition extends Packable {
        far: number;
        near: number;
        constructor(near: number, far: number);
        static clone(value?: DistanceDisplayCondition, result?: DistanceDisplayCondition): DistanceDisplayCondition;
        static equals(left: DistanceDisplayCondition, right: DistanceDisplayCondition): boolean;
        static pack(value: DistanceDisplayCondition, array: number[], startingIndex: number): number[];
        static unpack(array: number[], startingIndex: number, result: DistanceDisplayCondition): DistanceDisplayCondition;
        clone(result: DistanceDisplayCondition): DistanceDisplayCondition;
        equals(other: DistanceDisplayCondition): boolean;
    }

    class Billboard {
      alignedAxis: Cartesian3;
      color: Color;
      disableDepthTestDistance: number;
      distanceDisplayCondition: DistanceDisplayCondition;
      eyeOffset: Cartesian3;
      height: number;
      heightReference: HeightReference;
      horizontalOrigin: HorizontalOrigin;
      id: any;
      image: string;
      pixelOffset: Cartesian2;
      pixelOffsetScaleByDistance: NearFarScalar;
      position: Cartesian3;
      readonly ready: boolean;
      rotation: number;
      scale: number;
      scaleByDistance: NearFarScalar;
      show: boolean;
      sizeInMeters: boolean;
      translucencyByDistance: NearFarScalar;
      verticalOrigin: VerticalOrigin;
      width: number;
      computeScreenSpacePosition(scene: Scene, result?: Cartesian2): Cartesian2;
      equals(other: Billboard): boolean;
      setImage(id: string, image: HTMLImageElement | HTMLCanvasElement | string | Billboard.CreateImageCallback): void;
      setImageSubRegion(id: string, subRegion: BoundingRectangle): void;
    }

    namespace Billboard {
        type CreateImageCallback = (id: string) => HTMLImageElement | HTMLCanvasElement | Promise<HTMLImageElement | HTMLCanvasElement>;
    }

    class BillboardCollection {
        blendOption: BlendOption;
        debugShowBoundingVolume: boolean;
        length: number;
        modelMatrix: Matrix4;
        constructor(options?: { modelMatrix?: Matrix4; debugShowBoundingVolume?: boolean; scene?: Scene; blendOption?: BlendOption });
        add(billboard?: any): Billboard;
        contains(billboard?: Billboard): boolean;
        destroy(): void;
        get(index: number): Billboard;
        isDestroyed(): boolean;
        remove(billboard: Billboard): boolean;
        removeAll(): void;
        update(): void;
    }

    class BingMapsImageryProvider extends ImageryProvider {
        readonly url: string;
        readonly key: string;
        readonly mapStyle: BingMapsStyle;
        readonly culture: string;
        constructor(options: { url: string; key?: string; tileProtocol?: string; mapStyle?: string; culture?: string; ellipsoid?: Ellipsoid; tileDiscardPolicy?: TileDiscardPolicy; proxy?: Proxy });
        static tileXYToQuadKey(x: number, y: number, level: number): string;
        static quadKeyToTileXY(quadkey: string): {x: number, y: number, level: number};
    }

    // tslint:disable-next-line no-unnecessary-class
    class EasingFunction {
        static BACK_IN: EasingFunction.Callback;
        static BACK_IN_OUT: EasingFunction.Callback;
        static BACK_OUT: EasingFunction.Callback;
        static BOUNCE_IN: EasingFunction.Callback;
        static BOUNCE_IN_OUT: EasingFunction.Callback;
        static BOUNCE_OUT: EasingFunction.Callback;
        static CIRCULAR_IN: EasingFunction.Callback;
        static CIRCULAR_IN_OUT: EasingFunction.Callback;
        static CIRCULAR_OUT: EasingFunction.Callback;
        static CUBIC_IN: EasingFunction.Callback;
        static CUBIC_IN_OUT: EasingFunction.Callback;
        static CUBIR_OUT: EasingFunction.Callback;
        static ELASTIC_IN: EasingFunction.Callback;
        static ELASTIC_IN_OUT: EasingFunction.Callback;
        static ELASTIC_OUT: EasingFunction.Callback;
        static EXPONENTIAL_IN: EasingFunction.Callback;
        static EXPONENTIAL_IN_OUT: EasingFunction.Callback;
        static EXPONENTIAL_OUT: EasingFunction.Callback;
        static LINEAR_NONE: EasingFunction.Callback;
        static QUADRATIC_IN: EasingFunction.Callback;
        static QUADRATIC_IN_OUT: EasingFunction.Callback;
        static QUADRATIC_OUT: EasingFunction.Callback;
        static QUARTIC_IN: EasingFunction.Callback;
        static QUARTIC_IN_OUT: EasingFunction.Callback;
        static QUARTIC_OUT: EasingFunction.Callback;
        static QUINTIC_IN: EasingFunction.Callback;
        static QUINTIC_IN_OUT: EasingFunction.Callback;
        static QUINTIC_OUT: EasingFunction.Callback;
        static SINUSOIDAL_IN: EasingFunction.Callback;
        static SINUSOIDAL_IN_OUT: EasingFunction.Callback;
        static SINUSOIDAL_OUT: EasingFunction.Callback;
    }

    namespace EasingFunction {
        type Callback = (time: number) => number;
    }

    class Camera {
        position: Cartesian3;
        direction: Cartesian3;
        up: Cartesian3;
        right: Cartesian3;
        frustum: Frustum;
        defaultMoveAmount: number;
        defaultLookAmount: number;
        defaultRotateAmount: number;
        defaultZoomAmount: number;
        constrainedAxis: Cartesian3;
        maximumTranslateFactor: number;
        maximumZoomFactor: number;
        readonly transform: Matrix4;
        readonly inverseTransform: Matrix4;
        readonly viewMatrix: Matrix4;
        readonly inverseViewMatrix: Matrix4;
        readonly positionCartographic: Cartographic;
        readonly positionWC: Cartesian3;
        percentageChanged: number;
        readonly directionWC: Cartesian3;
        readonly upWC: Cartesian3;
        readonly rightWC: Cartesian3;
        readonly heading: number;
        readonly pitch: number;
        readonly roll: number;
        readonly moveStart: Event;
        readonly moveEnd: Event;
        static DEFAULT_OFFSET: HeadingPitchRange;
        static DEFAULT_VIEW_RECTANGLE: Rectangle;
        static DEFAULT_VIEW_FACTOR: number;
        readonly changed: Event;
        constructor(scene: Scene);
        cameraToWorldCoordinates(cartesian: Cartesian4, result?: Cartesian4): Cartesian4;
        cameraToWorldCoordinatesPoint(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        cameraToWorldCoordinatesVector(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        cancelFlight(): void;
        computeViewRectangle(ellipsoid?: Ellipsoid, result?: Rectangle): Rectangle | undefined;
        distanceToBoundingSphere(boundingSphere: BoundingSphere): number;
        flyHome(duration: number): void;
        flyTo(options: {
            destination: Cartesian3 | Rectangle;
            orientation?: any;
            duration?: number;
            complete?: Camera.FlightCompleteCallback;
            cancel?: Camera.FlightCancelledCallback;
            endTransform?: Matrix4;
            maximumHeight?: number;
            pitchAdjustHeight?: number;
            flyOverLongitude?: number;
            flyOverLongitudeWeight?: number;
            easingFunction?: EasingFunction
        }): void;
        flyToBoundingSphere(boundingSphere: BoundingSphere, options?: {
            duration?: number;
            offset?: HeadingPitchRange;
            complete?: Camera.FlightCompleteCallback;
            cancel?: Camera.FlightCancelledCallback;
            endTransform?: Matrix4;
            maximumHeight?: number;
            pitchAdjustHeight?: number;
            flyOverLongitude?: number;
            flyOverLongitudeWeight?: number;
            easingFunction?: EasingFunction
        }): void;
        getMagnitude(): number;
        getPickRay(windowPosition: Cartesian2, result?: Ray): Ray;
        getPixelSize(boundingSphere: BoundingSphere, drawingBufferWidth: number, drawingBufferHeight: number): number;
        getRectangleCameraCoordinates(rectangle: Rectangle, result?: Cartesian3): Cartesian3;
        look(axis: Cartesian3, angle?: number): void;
        lookAt(target: Cartesian3, offset: Cartesian3 | HeadingPitchRange): void;
        lookAtTransform(transform: Matrix4, offset: Cartesian3 | HeadingPitchRange): void;
        lookDown(amount?: number): void;
        lookLeft(amount?: number): void;
        lookRight(amount?: number): void;
        lookUp(amount?: number): void;
        move(direction: Cartesian3, amount?: number): void;
        moveBackward(amount?: number): void;
        moveDown(amount?: number): void;
        moveForward(amount?: number): void;
        moveLeft(amount?: number): void;
        moveRight(amount?: number): void;
        moveUp(amount?: number): void;
        pickEllipsoid(windowPosition: Cartesian2, ellipsoid?: Ellipsoid, result?: Cartesian3): Cartesian3;
        rotate(axis: Cartesian3, angle?: number): void;
        rotateDown(angle?: number): void;
        rotateLeft(angle?: number): void;
        rotateRight(angle?: number): void;
        rotateUp(angle?: number): void;
        setView(options: {destination?: Cartesian3 | Rectangle; orientation?: any; endTransform?: Matrix4}): void;
        switchToOrthographicFrustum(): void;
        switchToPerspectiveFrustum(): void;
        twistLeft(amount?: number): void;
        twistRight(amount?: number): void;
        viewBoundingSphere(boundingSphere: BoundingSphere, offset?: HeadingPitchRange): void;
        worldToCameraCoordinates(cartesian: Cartesian4, result?: Cartesian4): Cartesian4;
        worldToCameraCoordinatesPoint(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        worldToCameraCoordinatesVector(cartesian: Cartesian3, result?: Cartesian3): Cartesian3;
        zoomIn(amount?: number): void;
        zoomOut(amount?: number): void;
    }

    namespace Camera {
        type FlightCancelledCallback = () => void;
        type FlightCompleteCallback = () => void;
    }

    class CameraEventAggregator {
        currentMousePosition: Cartesian2;
        anyButtonDown: boolean;
        constructor(element?: HTMLCanvasElement);
        isMoving(type: CameraEventType, modifier?: KeyboardEventModifier): boolean;
        getMovement(type: CameraEventType, modifier?: KeyboardEventModifier): any;
        getLastMovement(type: CameraEventType, modifier?: KeyboardEventModifier): any;
        isButtonDown(type: CameraEventType, modifier?: KeyboardEventModifier): boolean;
        getStartMousePosition(type: CameraEventType, modifier?: KeyboardEventModifier): Cartesian2;
        getButtonPressTime(type: CameraEventType, modifier?: KeyboardEventModifier): Date;
        getButtonReleaseTime(type: CameraEventType, modifier?: KeyboardEventModifier): Date;
        reset(): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class CreditDisplay {
        static cesiumCredit: Credit;
        container: HTMLElement;
        constructor(container: HTMLElement, delimiter?: string, viewport?: HTMLElement);
        addCredit(credit: Credit): void;
        addDefaultCredit(credit: Credit): void;
        beginFrame(credit: Credit): void;
        destroy(): void;
        endFrame(credit: Credit): void;
        isDestroyed(): boolean;
        removeDefaultCredit(credit: Credit): void;
        update(): void;
    }

    class CullingVolume {
        planes: Cartesian4[];
        constructor(planes: Cartesian4[]);
        computeVisibility(boundingVolume: any): Intersect;
    }

    class DebugAppearance extends Appearance {
        readonly attributeName: string;
        readonly glslDatatype: string;
        constructor(options: { attributeName: string; glslDatatype?: string; vertexShaderSource?: string; fragmentShaderSource?: string; renderState?: RenderState });
    }

    class DebugModelMatrixPrimitive {
        length: number;
        width: number;
        show: boolean;
        modelMatrix: Matrix4;
        id: any;
        constructor(options?: { length?: number; width?: number; modelMatrix?: Matrix4; show?: boolean; id?: any });
        isDestroyed(): boolean;
        destroy(): void;
    }

    class DiscardMissingTileImagePolicy {
        constructor(options: { missingImageUrl: Resource | string; pixelsToCheck: Cartesian2[]; disableCheckIfAllPixelsAreTransparent?: boolean });
        isReady(): boolean;
        shouldDiscardImage(image: HTMLImageElement): boolean;
    }

    class EllipsoidPrimitive {
        center: Cartesian3;
        radii: Cartesian3;
        modelMatrix: Matrix4;
        show: boolean;
        material: Material;
        id: any;
        debugShowBoundingVolume: boolean;
        constructor(options?: { center?: Cartesian3; radii?: Cartesian3; modelMatrix?: Matrix4; show?: boolean; material?: Material; id?: any; debugShowBoundingVolume?: boolean });
        update(): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class EllipsoidSurfaceAppearance extends Appearance {
        readonly vertexFormat: VertexFormat;
        readonly flat: boolean;
        readonly faceForward: boolean;
        readonly aboveGround: boolean;
        static VERTEX_FORMAT: VertexFormat;
        constructor(options?: {
            flat?: boolean;
            faceForward?: boolean;
            translucent?: boolean;
            aboveGround?: boolean;
            material?: Material;
            vertexShaderSource?: string;
            fragmentShaderSource?: string;
            renderState?: RenderState
        });
    }

    class FrameRateMonitor {
        samplingWindow: number;
        quietPeriod: number;
        warmupPeriod: number;
        minimumFrameRateDuringWarmup: number;
        minimumFrameRateAfterWarmup: number;
        scene: Scene;
        lowFrameRate: Event;
        nominalFrameRate: Event;
        lastFramesPerSecond: number;
        static defaultSettings: any;
        constructor(options?: {
            scene: Scene;
            samplingWindow?: number;
            quietPeriod?: number;
            warmupPeriod?: number;
            minimumFrameRateDuringWarmup?: number;
            minimumFrameRateAfterWarmup?: number
        });
        pause(): void;
        unpause(): void;
        isDestroyed(): boolean;
        destroy(): void;
        static fromScene(scene: Scene): FrameRateMonitor;
    }

    // tslint:disable-next-line no-unnecessary-class
    class GetFeatureInfoFormat {
        constructor(type: string, format?: string, callback?: (res: any) => any);
    }

    class Globe {
        terrainProvider: TerrainProvider;
        northPoleColor: Cartesian3;
        southPoleColor: Cartesian3;
        show: boolean;
        oceanNormalMapUrl: string;
        depthTestAgainstTerrain: boolean;
        maximumScreenSpaceError: number;
        tileCacheSize: number;
        enableLighting: boolean;
        lightingFadeOutDistance: number;
        lightingFadeInDistance: number;
        showWaterEffect: boolean;
        ellipsoid: Ellipsoid;
        imageryLayers: ImageryLayerCollection;
        baseColor: Color;
        constructor(ellipsoid?: Ellipsoid);
        pick(ray: Ray, scene: Scene, result?: Cartesian3): Cartesian3;
        getHeight(cartographic: Cartographic): number;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class GoogleEarthEnterpriseMetadata {
        imageryPresent: boolean;
        key: ArrayBuffer;
        negativeAltitudeExponentBias: number;
        negativeAltitudeThreshold: number;
        protoImagery: boolean;
        readonly proxy: Proxy;
        readonly readyPromise: Promise<boolean>;
        readonly resource: Resource;
        terrainPresent: boolean;
        readonly url: string;
        constructor(resourceOrUrl: Resource | string);
        static quadKeyToTileXY(quadkey: string): {x: number, y: number, level: number};
        static tileXYToQuadKey(x: number, y: number, level: number): string;
    }

    class GoogleEarthEnterpriseImageryProvider extends ImageryProvider {
        readonly url: string;
        constructor(options: {
            url: Resource | string;
            metadata: GoogleEarthEnterpriseMetadata;
            ellipsoid?: Ellipsoid;
            tileDiscardPolicy?: TileDiscardPolicy;
            credit?: Credit | string;
        });
    }

    class GoogleEarthEnterpriseMapsProvider extends ImageryProvider {
        readonly channel: number;
        readonly path: string;
        readonly requestType: string;
        readonly url: string;
        readonly version: number;
        static logoUrl: string;
        constructor(options: {
            url: Resource | string;
            channel: number;
            path?: string;
            maximumLevel?: number;
            tileDiscardPolicy?: TileDiscardPolicy;
            ellipsoid?: Ellipsoid;
        });
    }

    class GoogleEarthEnterpriseTerrainData extends TerrainData {
        constructor(options: {
            buffer: ArrayBuffer;
            negativeAltitudeExponentBias: number;
            negativeElevationThreshold: number;
            childTileMask?: number;
            createdByUpsampling?: boolean;
            credits?: Credit[];
        });
    }

    class GoogleEarthEnterpriseTerrainProvider {
        static heightmapTerrainQuality: number;
        availability: TileAvailability;
        credit: Credit;
        errorEvent: Event;
        hasVertexNormals: boolean;
        hasWaterMask: boolean;
        ready: boolean;
        readonly readyPromise: Promise<boolean>;
        tilingScheme: TilingScheme;
        constructor(options: {
            url: Resource | string;
            metadata: GoogleEarthEnterpriseMetadata;
            ellipsoid?: Ellipsoid;
            credit?: Credit | string;
        })
        static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid: Ellipsoid, tileImageWidth: number, numberOfTilesAtLevelZero: number): number;
        static getRegularGridIndices(width: number, height: number): Uint16Array;
        getLevelMaximumGeometricError(level: number): number;
        getTileDataAvailable(x: number, y: number, level: number): boolean;
        requestTileGeometry(x: number, y: number, level: number, request?: Request): Promise<TerrainData>;
    }

    class GridImageryProvider extends ImageryProvider {
        constructor(options?: {
            tilingScheme?: TilingScheme;
            ellipsoid?: Ellipsoid;
            cells?: number;
            color?: Color;
            glowColor?: Color;
            glowWidth?: number;
            tileWidth?: number;
            tileHeight?: number;
            canvasSize?: number
        }, backgroundColor?: Color);
    }

    class HeadingPitchRange {
        heading: number;
        pitch: number;
        range: number;
        constructor(heading?: number, pitch?: number, range?: number);
        static clone(hpr: HeadingPitchRange, result?: HeadingPitchRange): HeadingPitchRange;
    }

    class ImageryLayer {
        alpha: number;
        brightness: number;
        contrast: number;
        hue: number;
        saturation: number;
        gamma: number;
        show: boolean;
        imageryProvider: ImageryProvider;
        rectangle: Rectangle;
        static DEFAULT_BRIGHTNESS: number;
        static DEFAULT_CONTRAST: number;
        static DEFAULT_HUE: number;
        static DEFAULT_SATURATION: number;
        static DEFAULT_GAMMA: number;
        constructor(imageryProvider: ImageryProvider, options?: {
            rectangle?: Rectangle;
            alpha?: number | ImageryLayer.ValueFunc;
            brightness?: number | ImageryLayer.ValueFunc;
            contrast?: number | ImageryLayer.ValueFunc;
            hue?: number | ImageryLayer.ValueFunc;
            saturation?: number | ImageryLayer.ValueFunc;
            gamma?: number | ImageryLayer.ValueFunc;
            show?: boolean;
            maximumAnisotropy?: number;
            minimumTerrainLevel?: number;
            maximumTerrainLevel?: number
        });
        isBaseLayer(): boolean;
        isDestroyed(): boolean;
        destroy(): void;
    }

    namespace ImageryLayer {
        type ValueFunc = (frameState: any, layer: ImageryLayer, x: number, y: number, level: number) => number;
    }

    class ImageryLayerCollection {
        layerAdded: Event;
        layerRemoved: Event;
        layerMoved: Event;
        layerShownOrHidden: Event;
        length: number;
        add(layer: ImageryLayer, index?: number): void;
        addImageryProvider(imageryProvider: ImageryProvider, index?: number): ImageryLayer;
        remove(layer: ImageryLayer, destroy?: boolean): boolean;
        removeAll(destroy?: boolean): void;
        contains(layer: ImageryLayer): boolean;
        indexOf(layer: ImageryLayer): number;
        get(index: number): ImageryLayer;
        raise(layer: ImageryLayer): void;
        lower(layer: ImageryLayer): void;
        raiseToTop(layer: ImageryLayer): void;
        lowerToBottom(layer: ImageryLayer): void;
        pickImageryLayerFeatures(ray: Ray, scene: Scene): Promise<ImageryLayerFeatureInfo[]> | undefined;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class ImageryLayerFeatureInfo {
        name: string;
        description: string;
        position: Cartographic;
        data: any;
        configureNameFromProperties(properties: any): void;
        configureDescriptionFromProperties(properties: any): void;
    }

    abstract class ImageryProvider {
        credit: Credit;
        defaultAlpha: number;
        defaultBrightness: number;
        defaultContrast: number;
        defaultGamma: number;
        defaultHue: number;
        defaultSaturation: number;
        defaultMagnificationFilter: any;
        defaultMinificationFilter: any;
        readonly errorEvent: Event;
        readonly hasAlphaChannel: boolean;
        readonly maximumLevel: number;
        readonly minimumLevel: number;
        readonly proxy: Proxy;
        readonly ready: boolean;
        readonly readyPromise: Promise<boolean>;
        readonly rectangle: Rectangle;
        readonly tileDiscardPolicy: TileDiscardPolicy;
        readonly tileWidth: number;
        readonly tileHeight: number;
        readonly tilingScheme: TilingScheme;
        getTileCredits(x: number, y: number, level: number): Credit[];
        requestImage(x: number, y: number, level: number): Promise<HTMLImageElement | HTMLCanvasElement>;
        pickFeatures(x: number, y: number, level: number, longitude: number, latitude: number): Promise<ImageryLayerFeatureInfo[]>;
        static loadImage(url: string): Promise<HTMLImageElement | HTMLCanvasElement>;
    }

    class Label {
        show: boolean;
        position: Cartesian3;
        text: string;
        font: string;
        fillColor: Color;
        outlineColor: Color;
        outlineWidth: number;
        style: LabelStyle;
        pixelOffset: Cartesian2;
        translucencyByDistance: NearFarScalar;
        pixelOffsetScaleByDistance: NearFarScalar;
        eyeOffset: Cartesian3;
        horizontalOrigin: HorizontalOrigin;
        verticalOrigin: VerticalOrigin;
        scale: number;
        id: any;
        computeScreenSpacePosition(scene: Scene, result?: Cartesian2): Cartesian2;
        equals(other: Label): boolean;
        isDestroyed(): boolean;
    }

    class LabelCollection {
        modelMatrix: Matrix4;
        debugShowBoundingVolume: boolean;
        length: number;
        constructor(options?: { modelMatrix?: Matrix4; debugShowBoundingVolume?: boolean });
        add(options?: any): Label;
        remove(label: Label): boolean;
        removeAll(): void;
        contains(label: Label): boolean;
        get(index: number): Label;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class Material {
        type: string;
        shaderSource: string;
        materials: any;
        uniforms: any;
        translucent: boolean;
        static DefaultImageId: string;
        static DefaultCubeMapId: string;
        static ColorType: string;
        static ImageType: string;
        static DiffuseMapType: string;
        static AlphaMapType: string;
        static SpecularMapType: string;
        static EmissionMapType: string;
        static BumpMapType: string;
        static NormalMapType: string;
        static GridType: string;
        static StripeType: string;
        static CheckerboardType: string;
        static DotType: string;
        static WaterType: string;
        static RimLightingType: string;
        static FadeType: string;
        static PolylineArrowType: string;
        static PolylineGlowType: string;
        static PolylineOutlineType: string;
        constructor(options?: { strict?: boolean; translucent?: boolean; fabric: any });
        isTranslucent(): boolean;
        isDestroyed(): boolean;
        destroy(): void;
        static fromType(type: string, uniforms?: any): Material;
    }

    class MaterialAppearance extends Appearance {
        readonly materialSupport: MaterialAppearance.MaterialSupport;
        readonly vertexFormat: VertexFormat;
        readonly flat: boolean;
        readonly faceForward: boolean;
        constructor(options?: {
            flat?: boolean;
            faceForward?: boolean;
            translucent?: boolean;
            closed?: boolean;
            materialSupport?: MaterialAppearance.MaterialSupport;
            material?: Material;
            vertexShaderSource?: string;
            fragmentShaderSource?: string;
            renderState?: RenderState
        });
    }

    namespace MaterialAppearance {
        enum MaterialSupport {
            BASIC,
            TEXTURED,
            ALL
        }
    }

    class Model {
        show: boolean;
        modelMatrix: Matrix4;
        scale: number;
        minimumPixelSize: number;
        id: any;
        activeAnimations: ModelAnimationCollection;
        debugShowBoundingVolume: boolean;
        debugWireframe: boolean;
        gltf: any;
        basePath: string;
        boundingSphere: BoundingSphere;
        ready: boolean;
        readyPromise: Promise<Model>;
        asynchronous: boolean;
        allowPicking: boolean;
        constructor(options?: {
            gltf?: any;
            basePath?: string;
            show?: boolean;
            modelMatrix?: Matrix4;
            scale?: number;
            minimumPixelSize?: number;
            id?: any;
            allowPicking?: boolean;
            asynchronous?: boolean;
            debugShowBoundingVolume?: boolean;
            debugWireframe?: boolean
        });
        getNode(name: string): ModelNode;
        getMesh(name: string): ModelMesh;
        getMaterial(name: string): ModelMaterial;
        update(): void;
        isDestroyed(): boolean;
        destroy(): void;
        static fromGltf(options: {
            url: string;
            headers?: any;
            show?: boolean;
            modelMatrix?: Matrix4;
            scale?: number;
            minimumPixelSize?: number;
            allowPicking?: boolean;
            asynchronous?: boolean;
            debugShowBoundingVolume?: boolean;
            debugWireframe?: boolean
        }): Model;
    }

    class ModelAnimation {
        removeOnStop: boolean;
        start: Event;
        update: Event;
        stop: Event;
        name: string;
        startTime: JulianDate;
        delay: number;
        stopTime: JulianDate;
        speedup: number;
        reverse: boolean;
        loop: ModelAnimationLoop;
    }

    class ModelAnimationCollection {
        animationAdded: Event;
        animationRemoved: Event;
        length: number;
        add(options: {
            name: string;
            startTime?: JulianDate;
            delay?: number;
            stopTime?: JulianDate;
            removeOnStop?: boolean;
            speedup?: number;
            reverse?: boolean;
            loop?: ModelAnimationLoop
        }): ModelAnimation;
        addAll(options?: {
            startTime?: JulianDate;
            delay?: number;
            stopTime?: JulianDate;
            removeOnStop?: boolean;
            speedup?: number;
            reverse?: boolean;
            loop?: ModelAnimationLoop
        }): ModelAnimation[];
        remove(animation: ModelAnimation): boolean;
        removeAll(): void;
        contains(animation: ModelAnimation): boolean;
        get(index: number): ModelAnimation;
    }

    class ModelMaterial {
        readonly name: string;
        readonly id: string;
        setValue(name: string, value?: any): void;
        getValue(name: string): any;
    }

    class ModelMesh {
        name: string;
        id: string;
        materials: ModelMaterial[];
    }

    class ModelNode {
        name: string;
        id: string;
        show: boolean;
        matrix: Matrix4;
    }

    class Moon {
        show: boolean;
        textureUrl: string;
        onlySunLighting: boolean;
        ellipsoid: Ellipsoid;
        constructor(options?: { show?: boolean; textureUrl?: string; ellipsoid?: Ellipsoid; onlySunLighting?: boolean });
        isDestroyed(): boolean;
        destroy(): void;
    }

    class NeverTileDiscardPolicy {
        isReady(): boolean;
        shouldDiscardImage(image: HTMLImageElement | Promise<HTMLImageElement>): Promise<boolean>;
    }

    class PerInstanceColorAppearance extends Appearance {
        readonly vertexFormat: VertexFormat;
        readonly flat: boolean;
        readonly faceForward: boolean;
        static VERTEX_FORMAT: VertexFormat;
        static FLAT_VERTEX_FORMAT: VertexFormat;
        constructor(options?: { flat?: boolean;
            faceForward?: boolean;
            translucent?: boolean;
            closed?: boolean;
            vertexShaderSource?: string;
            fragmentShaderSource?: string;
            renderState?: RenderState
        });
    }

    abstract class Frustum {
        near: number;
        far: number;
        readonly projectionMatrix: Matrix4;
        computeCullingVolume(position: Cartesian3, direction: Cartesian3, up: Cartesian3): CullingVolume;
        getPixelDimensions(drawingBufferWidth: number, drawingBufferHeight: number, distance: number, result: Cartesian2): Cartesian2;
    }

    class OrthographicFrustum extends Frustum {
        aspectRatio: number;
        width: number;
        static packedLength: number;
        constructor(options?: {width: number; aspectRatio: number; near: number; far: number});
        pack(value: OrthographicFrustum, array: number[], startingIndex: number): number[];
        unpack(array: number[], startingIndex: number, result: OrthographicFrustum): OrthographicFrustum;
        clone(result?: OrthographicFrustum): OrthographicFrustum;
        equals(other?: OrthographicFrustum): boolean;
    }

    class PerspectiveFrustum extends Frustum {
        fov: number;
        aspectRatio: number;
        xOffset: number;
        yOffset: number;
        readonly infiniteProjectionMatrix: Matrix4;
        readonly fovy: number;
        static packedLength: number;
        constructor(options?: {fov: number; aspectRatio: number; near: number; far: number; xOffset: number; yOffset: number});
        pack(value: PerspectiveFrustum, array: number[], startingIndex: number): number[];
        unpack(array: number[], startingIndex: number, result: PerspectiveFrustum): PerspectiveFrustum;
        clone(result?: PerspectiveFrustum): PerspectiveFrustum;
        equals(other?: PerspectiveFrustum): boolean;
    }

    class PerspectiveOffCenterFrustum extends Frustum {
        left: number;
        right: number;
        top: number;
        bottom: number;
        readonly infiniteProjectionMatrix: Matrix4;
        constructor(options?: {left: number; right: number; top: number; bottom: number; near: number; far: number});
        clone(result?: PerspectiveOffCenterFrustum): PerspectiveOffCenterFrustum;
        equals(other?: PerspectiveOffCenterFrustum): boolean;
    }

    class PointPrimitive {
        color: Color;
        disableDepthTestDistance: number;
        distanceDisplayCondition: DistanceDisplayCondition;
        id: any;
        outlineColor: Color;
        outlineWidth: number;
        pixelSize: number;
        position: Cartesian3;
        scaleByDistance: NearFarScalar;
        show: boolean;
        translucencyByDistance: NearFarScalar;
        computeScreenSpacePosition(scene: Scene, result?: Cartesian2): Cartesian2;
        equals(other: PointPrimitive): boolean;
    }

    class PointPrimitiveCollection {
        blendOption: BlendOption;
        debugShowBoundingVolume: boolean;
        length: number;
        modelMatrix: Matrix4;
        constructor(options?: { modelMatrix?: Matrix4; debugShowBoundingVolume?: boolean, blendOption?: BlendOption });
        add(pointPrimitive?: any): PointPrimitive;
        contains(pointPrimitive?: PointPrimitive): boolean;
        destroy(): void;
        get(index: number): PointPrimitive;
        isDestroyed(): boolean;
        remove(pointPrimitive: PointPrimitive): boolean;
        removeAll(): void;
    }

    class Polyline {
        show: boolean;
        positions: Cartesian3[];
        material: Material;
        width: number;
        loop: boolean;
        id: any;
        constructor(options?: { show?: boolean; width?: number; loop?: boolean; material?: Material; positions?: Cartesian3[]; id?: any });
    }

    class PolylineCollection {
        modelMatrix: Matrix4;
        debugShowBoundingVolume: boolean;
        length: number;
        constructor(options?: { modelMatrix?: Matrix4; debugShowBoundingVolume?: boolean });
        add(polyline?: any): Polyline;
        remove(polyline: Polyline): boolean;
        removeAll(): void;
        contains(polyline: Polyline): boolean;
        get(index: number): Polyline;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class PolylineColorAppearance extends Appearance {
        readonly vertexFormat: VertexFormat;
        static VERTEX_FORMAT: VertexFormat;
        constructor(options?: { translucent?: boolean; vertexShaderSource?: string; fragmentShaderSource?: string; renderState?: RenderState });
    }

    class PolylineMaterialAppearance extends Appearance {
        readonly vertexFormat: VertexFormat;
        static VERTEX_FORMAT: VertexFormat;
        constructor(options?: { translucent?: boolean; material?: Material; vertexShaderSource?: string; fragmentShaderSource?: string; renderState?: RenderState });
    }

    class Primitive {
        readonly allowPicking: boolean;
        appearance: Appearance;
        readonly asynchronous: boolean;
        readonly compressVertices: boolean;
        cull: boolean;
        debugShowBoundingVolume: boolean;
        depthFailAppearance: Appearance;
        readonly geometryInstances: GeometryInstance[] | GeometryInstance;
        readonly interleave: boolean;
        modelMatrix: Matrix4;
        readonly ready: boolean;
        readonly readyPromise: Promise<Primitive>;
        readonly releaseGeometryInstances: boolean;
        shadows: ShadowMode;
        show: boolean;
        readonly vertexCacheOptimize: boolean;
        constructor(options?: {
            geometryInstances?: any[] | GeometryInstance;
            appearance?: Appearance;
            show?: boolean;
            modelMatrix?: Matrix4;
            vertexCacheOptimize?: boolean;
            interleave?: boolean;
            compressVertices?: boolean;
            releaseGeometryInstances?: boolean;
            allowPicking?: boolean;
            cull?: boolean;
            asynchronous?: boolean;
            debugShowBoundingVolume?: boolean;
            shadows: ShadowMode
        });
        destroy(): void;
        getGeometryInstanceAttributes(id: any): any;
        isDestroyed(): boolean;
        update(): void;
    }

    class PrimitiveCollection {
        show: boolean;
        destroyPrimitives: boolean;
        readonly length: number;
        constructor(options?: { show?: boolean; destroyPrimitives?: boolean });
        add(primitive: any): any;
        remove(primitive?: any): boolean;
        removeAll(): void;
        contains(primitive?: any): boolean;
        raise(primitive?: any): void;
        raiseToTop(primitive?: any): void;
        lower(primitive?: any): void;
        lowerToBottom(primitive?: any): void;
        get(index: number): any;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class RectanglePrimitive {
        ellipsoid: Ellipsoid;
        rectangle: Rectangle;
        granularity: number;
        height: number;
        rotation: number;
        textureRotationAngle: number;
        show: boolean;
        material: Material;
        id: any;
        asynchronous: boolean;
        debugShowBoundingVolume: boolean;
        constructor(options?: {
            ellipsoid?: Ellipsoid;
            rectangle?: Rectangle;
            granularity?: number;
            height?: number;
            rotation?: number;
            textureRotationAngle?: number;
            show?: boolean;
            material?: Material;
            id?: any;
            asynchronous?: boolean;
            debugShowBoundingVolume?: boolean
        });
        update(): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class Scene {
        backgroundColor: Color;
        readonly camera: Camera;
        readonly canvas: Element;
        completeMorphOnUserInput: boolean;
        debugCommandFilter: (command: any) => boolean;
        readonly debugFrustumStatistics: any;
        debugShowCommands: boolean;
        debugShowDepthFrustum: number;
        debugShowFramesPerSecond: boolean;
        debugShowFrustumPlanes: boolean;
        debugShowFrustums: boolean;
        readonly drawingBufferHeight: number;
        readonly drawingBufferWidth: number;
        eyeSeparation: number;
        farToNearRatio: number;
        focalLength: number;
        fog: Fog;
        fxaa: boolean;
        globe: Globe;
        readonly groundPrimitives: PrimitiveCollection;
        readonly id: string;
        readonly imageryLayers: ImageryLayerCollection;
        imagerySplitPosition: number;
        invertClassification: boolean;
        invertClassificationColor: Color;
        readonly lastRenderTime: JulianDate;
        logarithmicDepthFarToNearRatio: number;
        mapMode2D: boolean;
        readonly mapProjection: MapProjection;
        readonly maximumAliasedLineWidth: number;
        readonly maximumCubeMapSize: number;
        maximumRenderTimeChange: number;
        minimumDisableDepthTestDistance: number;
        mode: SceneMode;
        moon: Moon;
        morphComplete: Event;
        morphStart: Event;
        morphTime: number;
        nearToFarDistance2D: number;
        readonly orderIndependentTranslucency: boolean;
        readonly pickPositionSupported: boolean;
        pickTranslucentDepth: boolean;
        readonly postRender: Event;
        readonly preRender: Event;
        readonly preUpdate: Event;
        readonly primitives: PrimitiveCollection;
        readonly renderError: Event;
        requestRenderMode: boolean;
        rethrowRenderErrors: boolean;
        readonly scene3DOnly: boolean;
        readonly screenSpaceCameraController: ScreenSpaceCameraController;
        shadowMap: ShadowMap;
        skyAtmosphere: SkyAtmosphere;
        skyBox: SkyBox;
        sun: Sun;
        sunBloom: boolean;
        terrainExaggeration: number;
        terrainProvider: TerrainProvider;
        readonly terrainProviderChanged: Event;
        useDepthPicking: boolean;
        useWebVR: boolean;
        constructor(options?: {
            canvas: HTMLCanvasElement;
            contextOptions?: any;
            creditContainer?: Element;
            creditViewport?: Element;
            mapProjection?: MapProjection;
            orderIndependentTranslucency?: boolean;
            scene3DOnly?: boolean;
            terrainExaggeration?: number;
            shadows?: boolean;
            mapMode2D?: MapMode2D;
            requestRenderMode?: boolean;
            maximumRenderTimeChange?: number
        });
        cartesianToCanvasCoordinates(position: Cartesian3, result?: Cartesian2): Cartesian2;
        completeMorph(): void;
        destroy(): void;
        drillPick(windowPosition: Cartesian2, limit?: number): any[];
        getCompressedTextureFormatSupported(format: string): boolean;
        isDestroyed(): boolean;
        morphTo2D(duration?: number): void;
        morphTo3D(duration?: number): void;
        morphToColumbusView(duration?: number): void;
        pick(windowPosition: Cartesian2, width?: number, height?: number): any;
        pickPosition(windowPosition: Cartesian2, result?: Cartesian3): Cartesian3;
        requestRender(): void;
    }

    class ScreenSpaceCameraController {
        enableInputs: boolean;
        enableTranslate: boolean;
        enableZoom: boolean;
        enableRotate: boolean;
        enableTilt: boolean;
        enableLook: boolean;
        inertiaSpin: number;
        inertiaTranslate: number;
        inertiaZoom: number;
        maximumMovementRatio: number;
        bounceAnimationTime: number;
        minimumZoomDistance: number;
        maximumZoomDistance: number;
        translateEventTypes: CameraEventType | any[];
        zoomEventTypes: CameraEventType | any[];
        rotateEventTypes: CameraEventType | any[];
        tiltEventTypes: CameraEventType | any[];
        lookEventTypes: CameraEventType | any[];
        minimumPickingTerrainHeight: number;
        minimumCollisionTerrainHeight: number;
        minimumTrackBallHeight: number;
        enableCollisionDetection: boolean;
        constructor(scene: Scene);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class SingleTileImageryProvider extends ImageryProvider {
        url: string;
        constructor(options: { url: string; rectangle?: Rectangle; credit?: Credit | string; ellipsoid?: Ellipsoid; proxy?: any });
    }

    class SkyAtmosphere {
        show: boolean;
        ellipsoid: Ellipsoid;
        constructor(ellipsoid?: Ellipsoid);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class SkyBox {
        sources: any;
        show: boolean;
        constructor(options: { sources?: any; show?: boolean });
        update(): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class Sun {
        show: boolean;
        glowFactor: number;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class Fog {
        density: number;
        enabled: boolean;
        minimumBrightness: number;
        screenSpaceErrorFactor: number;
    }

    class TileCoordinatesImageryProvider extends ImageryProvider {
        constructor(options?: { tilingScheme?: TilingScheme; ellipsoid?: Ellipsoid; color?: Color; tileWidth?: number; tileHeight?: number });
    }

    class TileDiscardPolicy {
        isReady(): boolean;
        shouldDiscardImage(image: HTMLImageElement | Promise<HTMLImageElement>): Promise<boolean>;
    }

    class TileMapServiceImageryProvider extends ImageryProvider {
        url: string;
        constructor(options?: {
            url?: string;
            fileExtension?: string;
            proxy?: any;
            credit?: Credit | string;
            minimumLevel?: number;
            maximumLevel?: number;
            rectangle?: Rectangle;
            tilingScheme?: TilingScheme;
            ellipsoid?: Ellipsoid;
            tileWidth?: number;
            tileHeight?: number
        });
    }

    class ViewportQuad {
        show: boolean;
        rectangle: BoundingRectangle;
        material: Material;
        constructor(rectangle?: BoundingRectangle, material?: Material);
        update(): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class WebMapServiceImageryProvider extends ImageryProvider {
        readonly url: string;
        static DefaultParameters: {service: string, version: string, request: string, styles: string, format: string};
        static GetFeatureInfoDefaultParameters: {service: string, version: string, request: string};
        constructor(options: {
            url: string;
            layers: string;
            parameters?: any;
            getFeatureInfoParameters?: any;
            enablePickFeatures?: boolean;
            getFeatureInfoFormats?: GetFeatureInfoFormat[];
            rectangle?: Rectangle;
            tilingScheme?: TilingScheme;
            ellipsoid?: Ellipsoid;
            tileWidth?: number;
            tileHeight?: number;
            minimumLevel?: number;
            maximumLevel?: number;
            crs?: string;
            srs?: string;
            credit?: Credit | string;
            subdomains?: string | string[]
        });
    }

    class WebMapTileServiceImageryProvider extends ImageryProvider {
        clock: Clock;
        dimensions: any;
        readonly format: string;
        times: TimeIntervalCollection;
        readonly url: string;
        constructor(options: {
            url: string;
            format?: string;
            layer: string;
            style: string;
            tileMatrixSetID: string;
            tileMatrixLabels?: any[];
            clock?: Clock;
            times?: TimeIntervalCollection;
            dimensions?: any;
            tileWidth?: number;
            tileHeight?: number;
            tilingScheme?: TilingScheme;
            rectangle?: Rectangle;
            minimumLevel?: number;
            maximumLevel?: number;
            ellipsoid?: Ellipsoid;
            credit?: Credit | string;
            subdomains?: string | string[]
        });
    }

    class Animation {
        readonly container: Element;
        readonly viewModel: AnimationViewModel;
        constructor(container: Element | string, viewModel: AnimationViewModel);
        isDestroyed(): boolean;
        destroy(): void;
        resize(): void;
        applyThemeChanges(): void;
    }

    class AnimationViewModel {
        shuttleRingDragging: boolean;
        snapToTicks: boolean;
        timeLabel: string;
        dateLabel: string;
        multiplierLabel: string;
        shuttleRingAngle: number;
        slower: Command;
        faster: Command;
        clockViewModel: ClockViewModel;
        pauseViewModel: ToggleButtonViewModel;
        playReverseViewModel: ToggleButtonViewModel;
        playForwardViewModel: ToggleButtonViewModel;
        playRealtimeViewModel: ToggleButtonViewModel;
        dateFormatter: AnimationViewModel.DateFormatter;
        timeFormatter: AnimationViewModel.TimeFormatter;
        static defaultDateFormatter: AnimationViewModel.DateFormatter;
        static defaultTicks: number[];
        static defaultTimeFormatter: AnimationViewModel.TimeFormatter;
        constructor(clockViewModel: ClockViewModel);
        getShuttleRingTicks(): number[];
        setShuttleRingTicks(positiveTicks: number[]): void;
    }

    namespace AnimationViewModel {
        type DateFormatter = (date: JulianDate, viewModel: AnimationViewModel) => string;
        type TimeFormatter = (date: JulianDate, viewModel: AnimationViewModel) => string;
    }

    class BaseLayerPicker {
        container: Element;
        viewModel: BaseLayerPickerViewModel;
        constructor(container: Element, options: {
            globe: Globe;
            imageryProviderViewModels?: ProviderViewModel[];
            selectedImageryProviderViewModel?: ProviderViewModel;
            terrainProviderViewModels?: ProviderViewModel[];
            selectedTerrainProviderViewModel?: ProviderViewModel
        });
        isDestroyed(): boolean;
        destroy(): void;
    }

    class BaseLayerPickerViewModel {
        imageryProviderViewModels: ProviderViewModel[];
        terrainProviderViewModels: ProviderViewModel[];
        dropDownVisible: boolean;
        buttonTooltip: string;
        buttonImageUrl: string;
        selectedImagery: ProviderViewModel;
        selectedTerrain: ProviderViewModel;
        toggleDropDown: Command;
        globe: Globe;
        constructor(options: {
            globe: Globe;
            imageryProviderViewModels?: ProviderViewModel[];
            selectedImageryProviderViewModel?: ProviderViewModel;
            terrainProviderViewModels?: ProviderViewModel[];
            selectedTerrainProviderViewModel?: ProviderViewModel
        });
    }

    class ProviderViewModel {
        name: string;
        tooltip: string;
        iconUrl: string;
        creationCommand: Command;
        constructor(options: { name: string; tooltip: string; iconUrl: string; creationFunction: ProviderViewModel.CreationFunction | Command });
    }

    namespace ProviderViewModel {
        type CreationFunction = () => ImageryProvider | TerrainProvider | ImageryProvider[] | TerrainProvider[];
    }

    class CesiumInspector {
        container: Element;
        viewModel: CesiumInspectorViewModel;
        constructor(container: Element | string, scene: Scene);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class CesiumInspectorViewModel {
        frustums: boolean;
        performance: boolean;
        shaderCacheText: string;
        primitiveBoundingSphere: boolean;
        primitiveReferenceFrame: boolean;
        filterPrimitive: boolean;
        tileBoundingSphere: boolean;
        filterTile: boolean;
        wireframe: boolean;
        suspendUpdates: boolean;
        tileCoordinates: boolean;
        frustumStatisticText: string;
        tileText: string;
        hasPickedPrimitive: boolean;
        hasPickedTile: boolean;
        pickPimitiveActive: boolean;
        pickTileActive: boolean;
        dropDownVisible: boolean;
        generalVisible: boolean;
        primitivesVisible: boolean;
        terrainVisible: boolean;
        generalSwitchText: string;
        primitivesSwitchText: string;
        terrainSwitchText: string;
        scene: Scene;
        performanceContainer: Element;
        toggleDropDown: Command;
        showFrustums: Command;
        showPerformance: Command;
        showPrimitiveBoundingSphere: Command;
        showPrimitiveReferenceFrame: Command;
        doFilterPrimitive: Command;
        showWireframe: Command;
        doSuspendUpdates: Command;
        showTileCoordinates: Command;
        showTileBoundingSphere: Command;
        doFilterTile: Command;
        toggleGeneral: Command;
        togglePrimitives: Command;
        toggleTerrain: Command;
        pickPrimitive: Command;
        pickTile: Command;
        selectParent: Command;
        selectNW: Command;
        selectNE: Command;
        selectSW: Command;
        selectSE: Command;
        primitive: Command;
        tile: Command;
        constructor(scene: Scene);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class CesiumWidget {
        container: Element;
        canvas: HTMLCanvasElement;
        creditContainer: Element;
        creditViewport: Element;
        scene: Scene;
        readonly imageryLayers: ImageryLayerCollection;
        terrainProvider: TerrainProvider;
        readonly camera: Camera;
        clock: Clock;
        screenSpaceEventHandler: ScreenSpaceEventHandler;
        targetFrameRate: number;
        useDefaultRenderLoop: boolean;
        resolutionScale: number;
        constructor(container: Element | string, options?: {
            clock?: Clock;
            imageryProvider?: ImageryProvider;
            terrainProvider?: TerrainProvider;
            skyBox?: SkyBox;
            skyAtmosphere?: SkyAtmosphere;
            sceneMode?: SceneMode;
            scene3DOnly?: boolean;
            orderIndependentTranslucency?: boolean;
            mapProjection?: MapProjection;
            globe?: Globe;
            useDefaultRenderLoop?: boolean;
            targetFrameRate?: number;
            showRenderLoopErrors?: boolean;
            contextOptions?: any;
            creditContainer?: Element | string;
            creditViewport?: Element | string;
            terrainExaggeration?: number;
            shadows?: boolean;
            terrainShadows?: ShadowMode;
            mapMode2D?: MapMode2D;
            requestRenderMode?: boolean;
            maximumRenderTimeChange?: number
        });
        showErrorPanel(title: string, message: string, error?: string): void;
        isDestroyed(): boolean;
        destroy(): void;
        resize(): void;
        render(): void;
    }

    class ClockViewModel {
        systemTime: JulianDate;
        startTime: JulianDate;
        stopTime: JulianDate;
        currentTime: JulianDate;
        multiplier: number;
        clockStep: ClockStep;
        clockRange: ClockRange;
        canAnimate: boolean;
        shouldAnimate: boolean;
        clock: Clock;
        constructor(clock?: Clock);
        synchronize(): void;
        isDestroyed(): boolean;
        destroy(): void;
    }

    class Command {
        canExecute: boolean;
        beforeExecute: Event;
        afterExecute: Event;
    }

    class FullscreenButton {
        container: Element;
        viewModel: FullscreenButtonViewModel;
        constructor(container: Element | string, fullscreenElement?: Element | string);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class FullscreenButtonViewModel {
        isFullscreen: boolean;
        isFullscreenEnabled: boolean;
        tooltip: string;
        fullscreenElement: Element;
        command: Command;
        constructor(fullscreenElement?: Element | string);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class Geocoder {
        container: Element;
        viewModel: GeocoderViewModel;
        constructor(options: { container: Element | string; scene: Scene; url?: string; key?: string; flightDuration?: number });
        isDestroyed(): boolean;
        destroy(): void;
    }

    class GeocoderViewModel {
        isSearchInProgress: boolean;
        searchText: string;
        flightDuration: number;
        url: string;
        key: string;
        complete: Event;
        scene: Scene;
        search: Command;
        constructor(options: { scene: Scene; url?: string; key?: string; flightDuration?: number });
    }

    class HomeButton {
        container: Element;
        viewModel: HomeButtonViewModel;
        constructor(container: Element | string, scene: Scene, duration?: number);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class HomeButtonViewModel {
        tooltip: string;
        scene: Scene;
        command: Command;
        duration: number;
        constructor(scene: Scene, duration?: number);
    }

    class VRButton {
        container: Element;
        viewModel: VRButtonViewModel;
        constructor(container: Element | string, scene: Scene, vrElement: Element | string);
        destroy(): void;
        isDestroyed(): boolean;
    }

    class VRButtonViewModel {
        command: Command;
        isVREnabled: boolean;
        isVRMode: boolean;
        tooltip: string;
        vrElement: Element;
        constructor(scene: Scene, vrElement: Element | string);
        destroy(): void;
        isDestroyed(): boolean;
    }

    class InfoBox {
        container: Element;
        viewModel: InfoBoxViewModel;
        frame: HTMLIFrameElement;
        constructor(container: Element | string);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class InfoBoxViewModel {
        maxHeight: number;
        enableCamera: boolean;
        isCameraTracking: boolean;
        showInfo: boolean;
        titleText: string;
        description: string;
        cameraIconPath: string;
        cameraClicked: Event;
        closeClicked: Event;
        maxHeightOffset(offset: number): string;
    }

    class NavigationHelpButton {
        container: Element;
        viewModel: NavigationHelpButtonViewModel;
        constructor(options: { container: Element | string; instructionsInitiallyVisible?: boolean });
        isDestroyed(): boolean;
        destroy(): void;
    }

    class NavigationHelpButtonViewModel {
        showInstructions: boolean;
        tooltip: string;
        command: Command;
        showClick: Command;
        showTouch: Command;
    }

    class PerformanceWatchdog {
        container: Element;
        viewModel: PerformanceWatchdogViewModel;
        constructor(options?: { container: Element | string; scene: Scene; lowFrameRateMessage?: string });
        isDestroyed(): boolean;
        destroy(): void;
    }

    class PerformanceWatchdogViewModel {
        lowFrameRateMessage: string;
        lowFrameRateMessageDismissed: boolean;
        showingLowFrameRateMessage: boolean;
        scene: Scene;
        dismissMessage: Command;
        constructor(options?: { scene: Scene; lowFrameRateMessage?: string });
    }

    class ProjectionPicker {
        container: Element;
        viewModel: ProjectionPickerViewModel;
        constructor(container: Element | string, scene: Scene);
        destroy(): void;
        isDestroyed(): boolean;
    }

    class ProjectionPickerViewModel {
        dropDownVisible: boolean;
        isOrthographicProjection: Command;
        scene: Scene;
        sceneMode: SceneMode;
        selectedTooltip: string;
        switchToOrthographic: Command;
        switchToPerspective: Command;
        toggleDropdown: Command;
        tooltipOrthographic: string;
        tooltipPerspective: string;
        constructor(scene: Scene);
        destroy(): void;
        isDestroyed(): boolean;
    }

    class SceneModePicker {
        container: Element;
        viewModel: SceneModePickerViewModel;
        constructor(container: Element | string, scene: Scene, duration?: number);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class SceneModePickerViewModel {
        sceneMode: SceneMode;
        dropDownVisible: boolean;
        tooltip2D: string;
        tooltip3D: string;
        tooltipColumbusView: string;
        selectedTooltip: string;
        scene: Scene;
        duration: number;
        toggleDropDown: Command;
        morphTo2D: Command;
        morphTo3D: Command;
        morphToColumbusView: Command;
        constructor(scene: Scene, duration?: number);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class SelectionIndicator {
        container: Element;
        viewModel: SelectionIndicatorViewModel;
        constructor(container: Element | string, scene: Scene);
        isDestroyed(): boolean;
        destroy(): void;
    }

    class SelectionIndicatorViewModel {
        position: Cartesian3;
        showSelection: boolean;
        isVisible: boolean;
        computeScreenSpacePosition: SelectionIndicatorViewModel.ComputeScreenSpacePosition;
        container: Element;
        selectionIndicatorElement: Element;
        scene: Scene;
        constructor(scene: Scene, selectionIndicatorElement: Element, container: Element);
        update(): void;
        animateAppear(): void;
        animateDepart(): void;
    }

    namespace SelectionIndicatorViewModel {
        type ComputeScreenSpacePosition = (position: Cartesian3, result: Cartesian2) => Cartesian2;
    }

    class Timeline {
        container: Element;
        constructor(container: Element, clock: Clock);
        isDestroyed(): boolean;
        destroy(): void;
        zoomTo(startTime: JulianDate, stopTime: JulianDate): void;
        resize(): void;
    }

    class ToggleButtonViewModel {
        toggled: boolean;
        tooltip: string;
        command: Command;
        constructor(command: Command, options?: { toggled?: boolean; tooltip?: string });
    }

    class Viewer {
        readonly container: Element;
        readonly bottomContainer: Element;
        readonly cesiumWidget: CesiumWidget;
        readonly selectionIndicator: SelectionIndicator;
        readonly infoBox: InfoBox;
        readonly geocoder: Geocoder;
        readonly homeButton: HomeButton;
        readonly sceneModePicker: SceneModePicker;
        readonly projectionPicker: ProjectionPicker;
        readonly navigationHelpButton: NavigationHelpButton;
        readonly baseLayerPicker: BaseLayerPicker;
        readonly animation: Animation;
        readonly timeline: Timeline;
        readonly fullscreenButton: FullscreenButton;
        readonly dataSourceDisplay: DataSourceDisplay;
        readonly entities: EntityCollection;
        readonly dataSources: DataSourceCollection;
        readonly canvas: HTMLCanvasElement;
        readonly scene: Scene;
        readonly imageryLayers: ImageryLayerCollection;
        terrainProvider: TerrainProvider;
        terrainShadows: ShadowMode;
        readonly camera: Camera;
        clockTrackedDataSource: DataSource;
        readonly clockViewModel: ClockViewModel;
        readonly clock: Clock;
        readonly screenSpaceEventHandler: ScreenSpaceEventHandler;
        targetFrameRate: number;
        useDefaultRenderLoop: boolean;
        resolutionScale: number;
        allowDataSourcesToSuspendAnimation: boolean;
        trackedEntity: Entity;
        selectedEntity: Entity;
        readonly trackedEntityChanged: Event;
        readonly selectedEntityChanged: Event;
        readonly shadowMap: ShadowMap;
        readonly vrButton: VRButton;
        shadows: boolean;
        constructor(container: Element | string, options?: {
            animation?: boolean;
            baseLayerPicker?: boolean;
            fullscreenButton?: boolean;
            vrButton?: boolean;
            geocoder?: boolean;
            homeButton?: boolean;
            infoBox?: boolean;
            sceneModePicker?: boolean;
            selectionIndicator?: boolean;
            timeline?: boolean;
            navigationHelpButton?: boolean;
            navigationInstructionsInitiallyVisible?: boolean;
            scene3DOnly?: boolean;
            shouldAnimate?: boolean;
            clockViewModel?: ClockViewModel;
            selectedImageryProviderViewModel?: ProviderViewModel;
            imageryProviderViewModels?: ProviderViewModel[];
            selectedTerrainProviderViewModel?: ProviderViewModel;
            terrainProviderViewModels?: ProviderViewModel[];
            imageryProvider?: ImageryProvider;
            terrainProvider?: TerrainProvider;
            skyBox?: SkyBox;
            skyAtmosphere?: SkyAtmosphere;
            fullscreenElement?: Element | string;
            useDefaultRenderLoop?: boolean;
            targetFrameRate?: number;
            showRenderLoopErrors?: boolean;
            automaticallyTrackDataSourceClocks?: boolean;
            contextOptions?: any;
            sceneMode?: SceneMode;
            mapProjection?: MapProjection;
            globe?: Globe;
            orderIndependentTranslucency?: boolean;
            creditContainer?: Element | string;
            creditViewport?: Element | string;
            dataSources?: DataSourceCollection;
            terrainExaggeration?: number;
            shadows?: boolean;
            terrainShadows?: ShadowMode;
            mapMode2D?: MapMode2D;
            projectionPicker?: boolean;
            requestRenderMode?: boolean;
            maximumRenderTimeChange?: number
        });
        extend(mixin: Viewer.ViewerMixin, options: any): void;
        resize(): void;
        forceResize(): void;
        render(): void;
        isDestroyed(): boolean;
        destroy(): void;
        zoomTo(target: Entity | Entity[] | EntityCollection | DataSource | Promise<Entity | Entity[] | EntityCollection | DataSource>, offset?: HeadingPitchRange): Promise<boolean>;
        flyTo(target: Entity | Entity[] | EntityCollection | DataSource | Promise<Entity | Entity[] | EntityCollection | DataSource>,
                options?: { duration?: number; maximumHeight?: number; offset?: HeadingPitchRange }): Promise<boolean>;
    }

    namespace Viewer {
        type ViewerMixin = (viewer: Viewer, options: any) => void;
    }

    function barycentricCoordinates(point: Cartesian2 | Cartesian3, p0: Cartesian2 | Cartesian3, p1: Cartesian2 | Cartesian3, p2: Cartesian2 | Cartesian3, result?: Cartesian3): Cartesian3;

    function binarySearch(array: any[], itemToFind: any, comparator: binarySearch.Comparator): number;

    namespace binarySearch {
        type Comparator = (a: any, b: any) => number;
    }

    function cancelAnimationFrame(requestID: number): undefined;

    function clone(object: any, deep?: boolean): any;

    function combine(object1?: any, object2?: any, deep?: boolean): any;

    function destroyObject(object: any, message?: string): undefined;

    function formatError(object: any): string;

    function getFilenameFromUri(uri: string): string;

    function getImagePixels(image: HTMLImageElement): number[];

    function isArray(value: any): boolean;

    function isLeapYear(year: number): boolean;

    function jsonp(url: string, options?: { parameters?: any; callbackParameterName?: string; proxy?: any }): Promise<any>;

    function loadArrayBuffer(url: string | Promise<string>, headers?: any): Promise<ArrayBuffer>;

    function loadBlob(url: string | Promise<string>, headers?: any): Promise<Blob>;

    function loadImage(url: string | Promise<string>, allowCrossOrigin?: boolean): Promise<HTMLImageElement>;

    function loadImageViaBlob(url: string | Promise<string>): Promise<HTMLImageElement>;

    function loadJson(url: string | Promise<string>, headers?: any): Promise<any>;

    function loadText(url: string | Promise<string>, headers?: any): Promise<string>;

    function loadWithXhr(options: { url: string | Promise<string>; responseType?: string; method?: string; data?: string; headers?: any; overrideMimeType?: string }): Promise<any>;

    function loadXML(url: string | Promise<string>, headers?: any): Promise<XMLDocument>;

    function mergeSort(array: any[], comparator: mergeSort.Comparator, userDefinedObject?: any): undefined;

    namespace mergeSort {
        type Comparator = (a: any, b: any, userDefinedObject?: any) => number;
    }

    function objectToQuery(obj: any): string;

    function pointInsideTriangle(point: Cartesian2 | Cartesian3, p0: Cartesian2 | Cartesian3, p1: Cartesian2 | Cartesian3, p2: Cartesian2 | Cartesian3): boolean;

    function queryToObject(queryString: string): any;

    function requestAnimationFrame(callback: requestAnimationFrame.Callback): number;

    namespace requestAnimationFrame {
        type Callback = (timestamp: number) => void;
    }

    function sampleTerrain(terrainProvider: TerrainProvider, level: number, positions: Cartographic[]): Promise<Cartographic[]>;

    function subdivideArray(array: any[], numberOfArrays: number): undefined;

    function throttleRequestByServer(url: string, requestFunction: throttleRequestByServer.RequestFunction): Promise<any>;

    namespace throttleRequestByServer {
        type RequestFunction = (url: string) => Promise<any>;
    }

    function createTangentSpaceDebugPrimitive(options: { geometry: Geometry; length?: number; modelMatrix?: Matrix4 }): Primitive;

    function viewerCesiumInspectorMixin(viewer: Viewer): undefined;

    function viewerDragDropMixin(viewer: Viewer, options?: { dropTarget?: Element | string; clearOnDrop?: boolean; flyToOnDrop?: boolean; clampToGround?: boolean; proxy?: DefaultProxy }): undefined;

    function viewerPerformanceWatchdogMixin(viewer: Viewer): undefined;

    function createCommand(func: () => any, canExecute?: boolean): Command;

    function createTaskProcessorWorker(workerFunction: createTaskProcessorWorker.WorkerFunction): createTaskProcessorWorker.TaskProcessorWorkerFunction;

    namespace createTaskProcessorWorker {
        type WorkerFunction = (parameters: any, transferableObjects: any[]) => any;
        type TaskProcessorWorkerFunction = (event: any) => void;
    }

    enum ClockRange {
        UNBOUNDED,
        CLAMPED,
        LOOP_STOP,
    }

    enum ClockStep {
        TICK_DEPENDENT,
        SYSTEM_CLOCK_MULTIPLIER,
        SYSTEM_CLOCK,
    }

    enum ComponentDatatype {
        BYTE,
        UNSIGNED_BYTE,
        SHORT,
        UNSIGNED_SHORT,
        FLOAT,
        DOUBLE,
    }

    namespace ComponentDatatype {
        function getSizeInBytes(componentDatatype: ComponentDatatype): number;
        function fromTypedArray(array: Int8Array | Uint8Array | Int16Array | Uint16Array | Float32Array | Float64Array): ComponentDatatype;
        function validate(componentDatatype: ComponentDatatype): boolean;
        function createTypedArray(componentDatatype: ComponentDatatype, valuesOrLength: number | any[]): Int8Array | Uint8Array | Int16Array | Uint16Array | Float32Array | Float64Array;
        function createArrayBufferView(componentDatatype: ComponentDatatype, buffer: ArrayBuffer, byteOffset?: number, length?: number):
            Int8Array | Uint8Array | Int16Array | Uint16Array | Float32Array | Float64Array;
    }

    enum CornerType {
        ROUNDED,
        MITERED,
        BEVELED,
    }

    namespace CubicRealPolynomial {
        function computeDiscriminant(a: number, b: number, c: number, d: number): number;
        function computeRealRoots(a: number, b: number, c: number, d: number): number[];
    }

    enum ExtrapolationType {
        NONE,
        HOLD,
        EXTRAPOLATE,
    }

    namespace FeatureDetection {
        function supportsFullscreen(): boolean;
        function supportsTypedArrays(): boolean;
        function supportsWebAssembly(): boolean;
        function supportsWebWorkers(): boolean;
    }

    enum Fullscreen {
        element,
        changeEventName,
        errorEventName,
        enabled,
        fullscreen,
    }

    namespace Fullscreen {
        function supportsFullscreen(): boolean;
        function requestFullscreen(element: any): undefined;
        function exitFullscreen(): undefined;
    }

    namespace GeometryPipeline {
        function toWireframe(geometry: Geometry): Geometry;
        function createLineSegmentsForVectors(geometry: Geometry, attributeName?: string, length?: number): Geometry;
        function createAttributeLocations(geometry: Geometry): any;
        function reorderForPreVertexCache(geometry: Geometry): Geometry;
        function reorderForPostVertexCache(geometry: Geometry, cacheCapacity?: number): Geometry;
        function fitToUnsignedShortIndices(geometry: Geometry): Geometry[];
        function projectTo2D(geometry: Geometry, attributeName: string, attributeName3D: string, attributeName2D: string, projection?: any): Geometry;
        function encodeAttribute(geometry: Geometry, attributeName: string, attributeHighName: string, attributeLowName: string): Geometry;
        function transformToWorldCoordinates(instance: GeometryInstance): GeometryInstance;
        function computeNormal(geometry: Geometry): Geometry;
        function computeBinormalAndTangent(geometry: Geometry): Geometry;
        function compressVertices(geometry: Geometry): Geometry;
    }

    enum HeightmapTessellator {
        DEFAULT_STRUCTURE,
    }

    namespace HeightmapTessellator {
        function computeVertices(options: {
            vertices: any[] | Float32Array;
            heightmap: Int8Array | Uint8Array | Int16Array | Uint16Array | Float32Array | Float64Array;
            width: number;
            height: number;
            skirtHeight: number;
            nativeRectangle: Rectangle;
            rectangle?: Rectangle;
            isGeographic?: boolean;
            relativetoCenter?: Cartesian3;
            ellipsoid?: Ellipsoid;
            structure?: any;
            structureheightScale?: number;
            structureheightOffset?: number;
            structureelementsPerHeight?: number;
            structurestride?: number;
            structureelementMultiplier?: number;
            structureisBigEndian?: boolean
        }): undefined;
    }

    enum HeightReference {
        CLAMP_TO_GROUND,
        NONE,
        RELATIVE_TO_GROUND
    }

    class HermitePolynomialApproximation extends InterpolationAlgorithm {
        static getRequiredDataPoints(degree: number, inputOrder?: number): number;
    }

    enum IndexDatatype {
        UNSIGNED_BYTE,
        UNSIGNED_SHORT,
        UNSIGNED_INT,
    }

    namespace IndexDatatype {
        function getSizeInBytes(indexDatatype: IndexDatatype): number;
        function validate(indexDatatype: IndexDatatype): boolean;
        function createTypedArray(numberOfVertices: number, indicesLengthOrArray: any): Uint16Array | Uint32Array;
        function createTypedArrayFromArrayBuffer(numberOfVertices: number, sourceArray: ArrayBuffer, byteOffset: number, length: number): Uint16Array | Uint32Array;
    }

    // tslint:disable-next-line no-unnecessary-class
    class InterpolationAlgorithm {
        static type: string;
        static getRequiredDataPoints(degree: number): number;
        static interpolateOrderZero(x: number, xTable: number[], yTable: number[], yStride: number, result?: number[]): number[];
        static interpolate(x: number, xTable: number[], yTable: number[], yStride: number, inputOrder: number, outputOrder: number, result?: number[]): number[];
    }

    enum Intersect {
        OUTSIDE,
        INTERSECTING,
        INSIDE,
    }

    namespace IntersectionTests {
        function rayPlane(ray: Ray, plane: Plane, result?: Cartesian3): Cartesian3;
        function rayTriangle(ray: Ray, p0: Cartesian3, p1: Cartesian3, p2: Cartesian3, cullBackFaces?: boolean, result?: Cartesian3): Cartesian3;
        function lineSegmentTriangle(v0: Cartesian3, v1: Cartesian3, p0: Cartesian3, p1: Cartesian3, p2: Cartesian3, cullBackFaces?: boolean, result?: Cartesian3): Cartesian3;
        function raySphere(ray: Ray, sphere: BoundingSphere, result?: any): any;
        function lineSegmentSphere(p0: Cartesian3, p1: Cartesian3, sphere: BoundingSphere, result?: any): any;
        function rayEllipsoid(ray: Ray, ellipsoid: Ellipsoid): any;
        function grazingAltitudeLocation(ray: Ray, ellipsoid: Ellipsoid): Cartesian3;
        function lineSegmentPlane(endPoint0: Cartesian3, endPoint1: Cartesian3, plane: Plane, result?: Cartesian3): Cartesian3;
        function trianglePlaneIntersection(p0: Cartesian3, p1: Cartesian3, p2: Cartesian3, plane: Plane): any;
    }

    namespace Intersections2D {
        function clipTriangleAtAxisAlignedThreshold(threshold: number, keepAbove: boolean, u0: number, u1: number, u2: number, result?: number[]): number[];
        function computeBarycentricCoordinates(x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, result?: Cartesian3): Cartesian3;
    }

    enum Iso8601 {
        MINIMUM_VALUE,
        MAXIMUM_VALUE,
        MAXIMUM_INTERVAL,
    }

    enum KeyboardEventModifier {
        SHIFT,
        CTRL,
        ALT,
    }

    class LagrangePolynomialApproximation extends InterpolationAlgorithm {}

    class LinearApproximation extends InterpolationAlgorithm {}

    enum MapMode2D {
        INFINITE_SCROLL,
        ROTATE
    }

    enum Math {
        EPSILON1,
        EPSILON2,
        EPSILON3,
        EPSILON4,
        EPSILON5,
        EPSILON6,
        EPSILON7,
        EPSILON8,
        EPSILON9,
        EPSILON10,
        EPSILON11,
        EPSILON12,
        EPSILON13,
        EPSILON14,
        EPSILON15,
        EPSILON16,
        EPSILON17,
        EPSILON18,
        EPSILON19,
        EPSILON20,
        GRAVITATIONALPARAMETER,
        SOLAR_RADIUS,
        LUNAR_RADIUS,
        SIXTY_FOUR_KILOBYTES,
        PI,
        ONE_OVER_PI,
        PI_OVER_TWO,
        PI_OVER_THREE,
        PI_OVER_FOUR,
        PI_OVER_SIX,
        THREE_PI_OVER_TWO,
        TWO_PI,
        ONE_OVER_TWO_PI,
        RADIANS_PER_DEGREE,
        DEGREES_PER_RADIAN,
        RADIANS_PER_ARCSECOND,
    }

    namespace Math {
        function sign(value: number): number;
        function signNotZero(value: number): number;
        function toSNorm(value: number): number;
        function fromSNorm(value: number): number;
        function sinh(value: number): number;
        function cosh(value: number): number;
        function lerp(p: number, q: number, time: number): number;
        function toRadians(degrees: number): number;
        function toDegrees(radians: number): number;
        function convertLongitudeRange(angle: number): number;
        function negativePiToPi(angle: number): number;
        function zeroToTwoPi(angle: number): number;
        function mod(m: number, n: number): number;
        function equalsEpsilon(left: number, right: number, relativeEpsilon: number, absoluteEpsilon?: number): boolean;
        function factorial(n: number): number;
        function incrementWrap(n?: number, maximumValue?: number, minimumValue?: number): number;
        function isPowerOfTwo(n: number): boolean;
        function nextPowerOfTwo(n: number): number;
        function clamp(value: number, min: number, max: number): number;
        function setRandomNumberSeed(seed: number): undefined;
        function nextRandomNumber(): number;
        function acosClamped(value: number): number;
        function asinClamped(value: number): number;
        function chordLength(angle: number, radius: number): number;
    }

    // tslint:disable-next-line no-unnecessary-class
    abstract class Packable {
        static packedLength: number;
        static pack(value: any, array: number[], startingIndex?: number): number[];
        static unpack(array: number[], startingIndex?: number, result?: any): Packable;
    }

    enum PackableForInterpolation {
        packedInterpolationLength,
    }

    namespace PackableForInterpolation {
        function convertPackedArrayForInterpolation(packedArray: number[], startingIndex?: number, lastIndex?: number, result?: number[]): number[];
        function unpackInterpolationResult(array: number[], sourceArray: number[], startingIndex?: number, lastIndex?: number, result?: any): any;
    }

    enum PixelFormat {
        DEPTH_COMPONENT,
        DEPTH_STENCIL,
        ALPHA,
        RGB,
        RGBA,
        LUMINANCE,
        LUMINANCE_ALPHA,
    }

    enum PrimitiveType {
        POINTS,
        LINES,
        LINE_LOOP,
        LINE_STRIP,
        TRIANGLES,
        TRIANGLE_STRIP,
        TRIANGLE_FAN,
    }

    namespace QuadraticRealPolynomial {
        function computeDiscriminant(a: number, b: number, c: number): number;
        function computeRealRoots(a: number, b: number, c: number): number[];
    }

    namespace QuarticRealPolynomial {
        function computeDiscriminant(a: number, b: number, c: number, d: number, e: number): number;
        function computeRealRoots(a: number, b: number, c: number, d: number, e: number): number[];
    }

    enum ReferenceFrame {
        FIXED,
        INERTIAL,
    }

    enum ScreenSpaceEventType {
        LEFT_DOWN,
        LEFT_UP,
        LEFT_CLICK,
        LEFT_DOUBLE_CLICK,
        RIGHT_DOWN,
        RIGHT_UP,
        RIGHT_CLICK,
        RIGHT_DOUBLE_CLICK,
        MIDDLE_DOWN,
        MIDDLE_UP,
        MIDDLE_CLICK,
        MIDDLE_DOUBLE_CLICK,
        MOUSE_MOVE,
        WHEEL,
        PINCH_START,
        PINCH_END,
        PINCH_MOVE,
    }

    namespace Simon1994PlanetaryPositions {
        function computeSunPositionInEarthInertialFrame(julianDate?: JulianDate, result?: Cartesian3): Cartesian3;
        function computeMoonPositionInEarthInertialFrame(julianDate?: JulianDate, result?: Cartesian3): Cartesian3;
    }

    class ShadowMap {
        darkness: number;
        enabled: boolean;
        maximumDistance: number;
        normalOffset: boolean;
        size: number;
        softShadows: boolean;
        constructor(obtions: {
            lightCamera: Camera;
            enabled?: boolean;
            isPointLight?: boolean;
            pointLightRadius?: number;
            cascadesEnabled?: boolean;
            numberOfCascades?: number;
            maximumDistance?: number;
            size?: number;
            softShadows?: boolean;
            darkness?: number;
            normalOffset?: boolean
        });
    }

    enum ShadowMode {
        CAST_ONLY,
        DISABLED,
        ENABLED,
        RECEIVE_ONLY
    }

    enum TimeStandard {
        UTC,
        TAI,
    }

    namespace Transforms {
        function eastNorthUpToFixedFrame(origin: Cartesian3, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        function northEastDownToFixedFrame(origin: Cartesian3, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        function northUpEastToFixedFrame(origin: Cartesian3, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        function headingPitchRollToFixedFrame(origin: Cartesian3, heading: number, pitch: number, roll: number, ellipsoid?: Ellipsoid, result?: Matrix4): Matrix4;
        function headingPitchRollQuaternion(origin: Cartesian3, heading: number, pitch: number, roll: number, ellipsoid?: Ellipsoid, result?: Quaternion): Quaternion;
        function computeTemeToPseudoFixedMatrix(date: JulianDate, result?: Matrix3): Matrix3;
        function preloadIcrfFixed(timeInterval: TimeInterval): Promise<void>;
        function computeIcrfToFixedMatrix(date: JulianDate, result?: Matrix3): Matrix3;
        function computeFixedToIcrfMatrix(date: JulianDate, result?: Matrix3): Matrix3;
        function pointToWindowCoordinates(modelViewProjectionMatrix: Matrix4, viewportTransformation: Matrix4, point: Cartesian3, result?: Cartesian2): Cartesian2;
    }

    namespace TridiagonalSystemSolver {
        function solve(diagonal: number[], lower: number[], upper: number[], right: Cartesian3[]): Cartesian3[];
    }

    enum Visibility {
        NONE,
        PARTIAL,
        FULL,
    }

    enum WindingOrder {
        CLOCKWISE,
        COUNTER_CLOCKWISE,
    }

    enum StripeOrientation {
        HORIZONTAL,
        VERTICAL,
    }

    enum BingMapsStyle {
        AERIAL,
        AERIAL_WITH_LABELS,
        ROAD,
        ORDNANCE_SURVEY,
        COLLINS_BART,
    }

    enum BlendEquation {
        ADD,
        SUBTRACT,
        REVERSE_SUBTRACT,
    }

    enum BlendFunction {
        ZERO,
        ONE,
        SOURCE_COLOR,
        ONE_MINUS_SOURCE_COLOR,
        DESTINATION_COLOR,
        ONE_MINUS_DESTINATION_COLOR,
        SOURCE_ALPHA,
        ONE_MINUS_SOURCE_ALPHA,
        DESTINATION_ALPHA,
        ONE_MINUS_DESTINATION_ALPHA,
        CONSTANT_COLOR,
        ONE_MINUS_CONSTANT_COLOR,
        CONSTANT_ALPHA,
        ONE_MINUS_CONSTANT_ALPHA,
        SOURCE_ALPHA_SATURATE,
    }

    enum BlendingState {
        DISABLED,
        ALPHA_BLEND,
        PRE_MULTIPLIED_ALPHA_BLEND,
        ADDITIVE_BLEND,
    }

    enum BlendOption {
        OPAQUE,
        OPAQUE_AND_TRANSLUCENT,
        TRANSLUCENT
    }

    enum CameraEventType {
        LEFT_DRAG,
        RIGHT_DRAG,
        MIDDLE_DRAG,
        WHEEL,
        PINCH,
    }

    enum CullFace {
        FRONT,
        BACK,
        FRONT_AND_BACK,
    }

    enum DepthFunction {
        NEVER,
        LESS,
        EQUAL,
        LESS_OR_EQUAL,
        GREATER,
        NOT_EQUAL,
        GREATER_OR_EQUAL,
        ALWAYS,
    }

    enum HorizontalOrigin {
        CENTER,
        LEFT,
        RIGHT,
    }

    enum LabelStyle {
        FILL,
        OUTLINE,
        FILL_AND_OUTLINE,
    }

    enum ModelAnimationLoop {
        NONE,
        REPEAT,
        MIRRORED_REPEAT,
    }

    enum SceneMode {
        MORPHING,
        COLUMBUS_VIEW,
        SCENE2D,
        SCENE3D,
    }

    namespace SceneMode {
        function getMorphTime(value: SceneMode): number;
    }

    namespace SceneTransforms {
        function wgs84ToWindowCoordinates(scene: Scene, position: Cartesian3, result?: Cartesian2): Cartesian2;
        function wgs84ToDrawingBufferCoordinates(scene: Scene, position: Cartesian3, result?: Cartesian2): Cartesian2;
    }

    enum StencilFunction {
        NEVER,
        LESS,
        EQUAL,
        LESS_OR_EQUAL,
        GREATER,
        NOT_EQUAL,
        GREATER_OR_EQUAL,
        ALWAYS,
    }

    enum StencilOperation {
        ZERO,
        KEEP,
        REPLACE,
        INCREMENT,
        DECREMENT,
        INVERT,
        INCREMENT_WRAP,
        DECREMENT_WRAP,
    }

    enum VerticalOrigin {
        CENTER,
        BOTTOM,
        TOP,
    }

    function createOpenStreetMapImageryProvider(options: {
        url?: string,
        fileExtension?: string,
        rectangle?: Rectangle,
        minimumLevel?: number,
        maximumLevel?: number,
        ellipsoid?: Ellipsoid,
        credit?: Credit | string
    }): UrlTemplateImageryProvider;

    function createTileMapServiceImageryProvider(options: {
        url?: string,
        fileExtension?: string,
        credit?: Credit | string,
        minimumLevel?: number,
        maximumLevel?: number,
        rectangle?: Rectangle,
        tilingScheme?: TilingScheme,
        ellipsoid?: Ellipsoid,
        tileWidth?: number,
        tileHeight?: number,
        flipXY?: boolean
    }): UrlTemplateImageryProvider;

    function createWorldImagery(options: {
        style?: any // IonWorldImageryStyle
    }): IonImageryProvider;

    function createWorldTerrain(options: {
        requestVertexNormals?: boolean,
        requestWaterMask?: boolean
    }): CesiumTerrainProvider;

    class UrlTemplateImageryProvider extends ImageryProvider {
        url: string;
        pickFeaturesUrl: string;
        urlSchemeZeroPadding: {};
        subdomains: string | string[];
        ellipsoid: Ellipsoid;
        getFeatureInfoFormats: GetFeatureInfoFormat[];
        enablePickFeatures: boolean;

        constructor(options: {
            url: string,
            pickFeaturesUrl?: string,
            urlSchemeZeroPadding?: {},
            subdomains?: string | string[]
            proxy?: {},
            credit?: Credit | string,
            minimumLevel?: number,
            maximumLevel?: number,
            rectangle?: Rectangle,
            tilingScheme?: TilingScheme,
            ellipsoid?: Ellipsoid,
            tileWidth?: number,
            tileHeight?: number,
            hasAlphaChannel?: boolean,
            getFeatureInfoFormats?: GetFeatureInfoFormat[],
            enablePickFeatures?: boolean
        });
        reinitialize(options: Promise<object> | object): void;
    }

    class Resource {
      static DEFAULT: Resource;
      static readonly isBlobSupported: boolean;
      readonly extension: string;
      hasHeaders: boolean;
      headers: any;
      isBlobUri: boolean;
      isCrossOriginUrl: boolean;
      isDataUri: boolean;
      proxy: DefaultProxy;
      readonly queryParameters: any;
      request: Request;
      retryAttempts: number;
      retryCallback: () => void;
      readonly templateValues: any;
      url: string;
      static delete(options?: { url: string; data?: any; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; responseType?: string; overrideMimeType?: string }): Promise<any> | undefined;
      static fetch(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; responseType?: string; overrideMimeType?: string }): Promise<any> | undefined;
      static fetchArrayBuffer(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request }): Promise<ArrayBuffer> | undefined;
      static fetchBlob(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request }): Promise<Blob> | undefined;
      static fetchImage(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; preferBlob?: boolean }): Promise<any> | undefined;
      static fetchJson(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request }): Promise<any> | undefined;
      static fetchJsonp(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; callbackParameterName?: string }): Promise<any> | undefined;
      static fetchText(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request }): Promise<string> | undefined;
      static fetchXml(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request }): Promise<XMLDocument> | undefined;
      static head(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; responseType?: string; overrideMimeType?: string }): Promise<any> | undefined;
      static options(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; responseType?: string; overrideMimeType?: string }): Promise<any> | undefined;
      static patch(options?: { url: string; data?: any; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; responseType?: string; overrideMimeType?: string }): Promise<any> | undefined;
      static post(options?: { url: string; data?: any; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; responseType?: string; overrideMimeType?: string }): Promise<any> | undefined;
      static put(options?: { url: string; data?: any; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request; responseType?: string; overrideMimeType?: string }): Promise<any> | undefined;
      constructor(options?: { url: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                    retryAttempts?: number; request?: Request });
      addQueryParameters(params: any, useAsDefault: boolean): void;
      addTemplateValues(template: any, useAsDefault: boolean): void;
      appendForwardSlash(): void;
      appendQueryParameters(params: any): void;
      clone(result: Resource): Resource;
      delete(options?: { responseType?: string; headers?: any; overrideMimeType?: string }): Promise<any> | undefined;
      fetch(options?: { responseType?: string; headers?: any; overrideMimeType?: string }): Promise<any> | undefined;
      fetchArrayBuffer(): Promise<ArrayBuffer> | undefined;
      fetchBlob(): Promise<Blob> | undefined;
      fetchImage(preferBlob: boolean): Promise<any> | undefined;
      fetchJson(): Promise<any> | undefined;
      fetchJsonp(callbackParameterName: string): Promise<any> | undefined;
      fetchText(): Promise<string> | undefined;
      fetchXml(): Promise<XMLDocument> | undefined;
      getBaseUri(includeQuery: boolean): string;
      getDerivedResource(options: {url?: string; queryParameters?: any; templateValues?: any; headers?: any; proxy?: DefaultProxy; retryCallback?: Resource.RetryCallback;
                            retryAttempts?: number; request?: Request; preserveQueryParameters?: boolean}): Resource;
      getUrlComponent(query: boolean, proxy: boolean): string;
      head(options?: {responseType?: string; headers?: any; overrideMimeType?: string}): Promise<any> | undefined;
      options(options?: { responseType?: string; headers?: any; overrideMimeType?: string }): Promise<any> | undefined;
      patch(data: any, options?: { responseType?: string; headers?: any; overrideMimeType?: string }): Promise<any> | undefined;
      post(data: any, options?: { data?: any; responseType?: string; headers?: any; overrideMimeType?: string }): Promise<any> | undefined;
      put(data: any, options?: { responseType?: string; headers?: any; overrideMimeType?: string }): Promise<any> | undefined;
      setQueryParameters(params: any, useAsDefault: boolean): void;
      setTemplateValues(template: any, useAsDefault: boolean): void;
    }

    namespace Resource {
        type RetryCallback = (resource: Resource, error: Error) => void;
    }

    function defined(value: any): boolean;

    namespace buildModuleUrl {
      function setBaseUrl(value: string): undefined;
    }
}
