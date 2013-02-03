/**
 * three.d.ts (https://github.com/kontan/three.d.ts)
 *
 * Type definitions for three.js r55 (http://mrdoob.github.com/three.js/)
 * 
 * Copyright (c) 2012- Kon (http://phyzkit.net/)
 * 
 */

interface WebGLRenderingContext {};

module THREE {
    export var REVISION: string;

    // GL STATE CONSTANTS

    export enum CullFace { }
    export var CullFaceNone: CullFace;
    export var CullFaceBack: CullFace;
    export var CullFaceFront: CullFace;
    export var CullFaceFrontBack: CullFace;

    export enum FrontFaceDirection { }
    export var FrontFaceDirectionCW: FrontFaceDirection;
    export var FrontFaceDirectionCCW: FrontFaceDirection;

    // SHADOWING TYPES

    export enum ShadowMapType { }
    export var BasicShadowMap: ShadowMapType;
    export var PCFShadowMap: ShadowMapType;
    export var PCFSoftShadowMap: ShadowMapType;

    // MATERIAL CONSTANTS

    // side
    export enum Side { }
    export var FrontSide: Side;
    export var BackSide: Side;
    export var DoubleSide: Side;

    // shading
    export enum Shading { }
    export var NoShading: Shading;
    export var FlatShading: Shading;
    export var SmoothShading: Shading;

    // colors
    export enum Colors { }
    export var NoColors: Colors;
    export var FaceColors: Colors;
    export var VertexColors: Colors;

    // blending modes
    export enum Blending { }
    export var NoBlending: Blending;
    export var NormalBlending: Blending;
    export var AdditiveBlending: Blending;
    export var SubtractiveBlending: Blending;
    export var MultiplyBlending: Blending;
    export var CustomBlending: Blending;

    // custom blending equations
    // (numbers start from 100 not to clash with other
    //  mappings to OpenGL constants defined in Texture.js)
    export enum BlendingEquation { }
    export var AddEquation: BlendingEquation;
    export var SubtractEquation: BlendingEquation;
    export var ReverseSubtractEquation: BlendingEquation;

    // custom blending destination factors
    export enum BlendingDstFactor { }
    export var ZeroFactor: BlendingDstFactor;
    export var OneFactor: BlendingDstFactor;
    export var SrcColorFactor: BlendingDstFactor;
    export var OneMinusSrcColorFactor: BlendingDstFactor;
    export var SrcAlphaFactor: BlendingDstFactor;
    export var OneMinusSrcAlphaFactor: BlendingDstFactor;
    export var DstAlphaFactor: BlendingDstFactor;
    export var OneMinusDstAlphaFactor: BlendingDstFactor;

    // custom blending source factors
    export enum BlendingSrcFactor { }
    export var DstColorFactor: BlendingSrcFactor;
    export var OneMinusDstColorFactor: BlendingSrcFactor;
    export var SrcAlphaSaturateFactor: BlendingSrcFactor;

    // TEXTURE CONSTANTS
    export enum Combine { }
    export var MultiplyOperation: Combine;
    export var MixOperation: Combine;
    export var AddOperation: Combine;

    // Mapping modes
    export enum Mapping { }
    export var UVMapping: Mapping;
    export var CubeReflectionMapping: Mapping;
    export var CubeRefractionMapping: Mapping;
    export var SphericalReflectionMapping: Mapping;
    export var SphericalRefractionMapping: Mapping;

    // Wrapping modes
    export enum Wrapping { }
    export var RepeatWrapping: Wrapping;
    export var ClampToEdgeWrapping: Wrapping;
    export var MirroredRepeatWrapping: Wrapping;

    // Filters
    export enum TextureFilter { }
    export var NearestFilter: TextureFilter;
    export var NearestMipMapNearestFilter: TextureFilter;
    export var NearestMipMapLinearFilter: TextureFilter;
    export var LinearFilter: TextureFilter;
    export var LinearMipMapNearestFilter: TextureFilter;
    export var LinearMipMapLinearFilter: TextureFilter;

    // Data types
    export enum TextureDataType { }
    export var UnsignedByteType: TextureDataType;
    export var ByteType: TextureDataType;
    export var ShortType: TextureDataType;
    export var UnsignedShortType: TextureDataType;
    export var IntType: TextureDataType;
    export var UnsignedIntType: TextureDataType;
    export var FloatType: TextureDataType;

    // Pixel types
    export enum PixelType { }
    //    export var UnsignedByteType:number;
    export var UnsignedShort4444Type: PixelType;
    export var UnsignedShort5551Type: PixelType;
    export var UnsignedShort565Type: PixelType;

    // Pixel formats
    export enum PixelFormat { }
    export var AlphaFormat: PixelFormat;
    export var RGBFormat: PixelFormat;
    export var RGBAFormat: PixelFormat;
    export var LuminanceFormat: PixelFormat;
    export var LuminanceAlphaFormat: PixelFormat;

    // Compressed texture formats
    export enum CompressedPixelFormat { }
    export var RGB_S3TC_DXT1_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT1_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT3_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT5_Format: CompressedPixelFormat;


    // Potential future PVRTC compressed texture formats
    // export enum CompressedTextureFormats {}
    // export var RGB_PVRTC_4BPPV1_Format :CompressedTextureFormats;
    // export var RGB_PVRTC_2BPPV1_Format :CompressedTextureFormats;
    // export var RGBA_PVRTC_4BPPV1_Format:CompressedTextureFormats;
    // export var RGBA_PVRTC_2BPPV1_Format:CompressedTextureFormats;


    // Following enums don't be contained by three.js

    // export enum EulerOrder {}
    // export var XYZ:EulerOrder;
    // export var XZY:EulerOrder;
    // export var YXZ:EulerOrder;
    // export var YZX:EulerOrder;
    // export var ZXY:EulerOrder;
    // export var ZYX:EulerOrder;

    // enum UniformType {}
    //    i,        // single integer
    //    f,        // single float
    //    v2,        // single THREE.Vector2
    //    v3,        // single THREE.Vector3
    //    v4,        // single THREE.Vector4
    //    c,        // single THREE.Color
    //    iv1,    // flat array of integers (JS or typed array)
    //    iv,        // flat array of integers with 3 x N size (JS or typed array)
    //    fv1,    // flat array of floats (JS or typed array)
    //    fv,        // flat array of floats with 3 x N size (JS or typed array)
    //    v2v,    // array of THREE.Vector2
    //    v3v,    // array of THREE.Vector3
    //    v4v,    // array of THREE.Vector4
    //    m4,        // single THREE.Matrix4
    //    m4v,    // array of THREE.Matrix4
    //    t,         // single THREE.Texture (2d or cube)
    //    tv,        // array of THREE.Texture (2d)
    // }

    // Core ///////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * This is a superefficent class for geometries because it saves all data in buffers. 
     * It reduces memory costs and cpu cycles. But it is not as easy to work with because of all the nessecary buffer calculations.
     * It is mainly interesting when working with static objects.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js">src/core/BufferGeometry.js</a>
     */
    export class BufferGeometry {
        /**
         * This creates a new BufferGeometry. It also sets several properties to an default value.
         */
        constructor();

        /**
         * Unique number of this buffergeometry instance
         */
        id: number;

        /**
         * This hashmap has as id the name of the attribute to be set and as value the buffer to set it to.
         */
        attributes: { [name: string]: any; };

        /**
         * When set, it holds certain buffers in memory to have faster updates for this object. When unset, it deletes those buffers and saves memory.
         */
        dynamic: bool;

        /**
         * Bounding box.
         */
        boundingBox: BoundingBox3D;

        /**
         * Bounding sphere.
         */
        boundingSphere: BoundingSphere;

        hasTangents: bool;
        morphTargets: any[];

        /**
         * Bakes matrix transform directly into vertex coordinates.
         */
        applyMatrix(matrix: Matrix4): void;

        verticesNeedUpdate: bool;

        /**
         * Computes bounding box of the geometry, updating Geometry.boundingBox attribute.
         * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are null.
         */
        computeBoundingBox(): void;

        /**
         * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
         * Bounding spheres aren't' computed by default. They need to be explicitly computed, otherwise they are null.
         */
        computeBoundingSphere(): void;

        /**
         * Computes vertex normals by averaging face normals.
         */
        computeVertexNormals(): void;

        normalizeNormals(): void;

        /**
         * Computes vertex tangents.
         * Based on http://www.terathon.com/code/tangent.html
         * Geometry must have vertex UVs (layer 0 will be used).
         */
        computeTangents(): void;

        /**
         * Disposes the object from memory. 
         * You need to call this when you want the bufferGeometry removed while the application is running.
         */
        dispose(): void;
    }

    /**
     * Object for keeping track of time.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js">src/core/Clock.js</a>
     */
    export class Clock {
        /**
         * @param autoStart Automatically start the clock.
         */
        constructor(autoStart?: bool);

        /**
         * If set, starts the clock automatically when the first update is called.
         */
        autoStart: bool;

        /**
         * When the clock is running, It holds the starttime of the clock. 
         * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
        startTime: number;

        /**
         * When the clock is running, It holds the previous time from a update.
         * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
        oldTime: number;

        /**
         * When the clock is running, It holds the time elapsed btween the start of the clock to the previous update.
         * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
        elapsedTime: number;

        /**
         * This property keeps track whether the clock is running or not.
         */
        running: bool;

        /**
         * Starts clock.
         */
        start(): void;

        /**
         * Stops clock.
         */
        stop(): void;

        /**
         * Get milliseconds passed since the clock started.
         */
        getElapsedTime(): number;

        /**
         * Get the milliseconds passed since the last call to this method.
         */
        getDelta(): number;
    }

    export interface HSV {
        h: number;
        s: number;
        v: number;
    }

    /**
     * Represents a color. See also {@link ColorUtils}.
     *
     * @example 
     * var color = new THREE.Color( 0xff0000 );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Color.js">src/math/Color.js</a>
     */
    export class Color {
        constructor(hex?: string);

        /**
         * @param hex initial color in hexadecimal
         */
        constructor(hex?: number);

        /**
         * Red channel value between 0 and 1. Default is 1.
         */
        r: number;

        /**
         * Green channel value between 0 and 1. Default is 1.
         */
        g: number;

        /**
         * Blue channel value between 0 and 1. Default is 1.
         */
        b: number;
        set (value: number): void;
        set (value: string): void;
        setHex(hex: number): Color;

        /**
         * Sets this color from RGB values.
         * @param r Red channel value between 0 and 1.
         * @param g Green channel value between 0 and 1.
         * @param b Blue channel value between 0 and 1.
         */
        setRGB(r: number, g: number, b: number): Color;

        /**
         * Sets this color from HSV values.
         * Based on MochiKit implementation by Bob Ippolito.
         *
         * @param h Hue channel value between 0 and 1.
         * @param s Saturation value channel between 0 and 1.
         * @param v Value channel value between 0 and 1.
         */
        setHSV(h: number, s: number, v: number): Color;

        /**
         * Sets this color from a CSS context style string.
         * @param contextStyle Color in CSS context style format.
         */
        setStyle(style: string): Color;

        /**
         * Copies given color.
         * @param color Color to copy.
         */
        copy(color: Color): Color;

        /**
         * Copies given color making conversion from gamma to linear space.
         * @param color Color to copy.
         */
        copyGammaToLinear(color: Color): Color;

        /**
         * Copies given color making conversion from linear to gamma space.
         * @param color Color to copy.
         */
        copyLinearToGamma(color: Color): Color;

        /**
         * Converts this color from gamma to linear space.
         */
        convertGammaToLinear(): Color;

        /**
         * Converts this color from linear to gamma space.
         */
        convertLinearToGamma(): Color;

        /**
         * Returns the hexadecimal value of this color.
         */
        getHex(): number;

        /**
         * Returns the string formated hexadecimal value of this color.
         */
        getHexString(): string;

        /** 
         * Returns the value of this color in CSS context style.
         * Example: rgb(r, g, b)
         */
        getStyle(): string;

        getHSV(hsv?: HSV): HSV;
        add(color: Color): Color;
        addColors(color1: Color, color2: Color): Color;
        addScalar(s: number): Color;
        multiply(color: Color): Color;
        multiplyScalar(s: number): Color;
        lerp(color: Color, alpha: number): Color;

        /**
         * Clones this color.
         */
        clone(): Color;
    }

    var ColorKeywords: {
        [name: string]: number;
        aliceblue: number;
        antiquewhite: number;
        aqua: number;
        aquamarine: number;
        azure: number;
        beige: number;
        bisque: number;
        black: number;
        blanchedalmond: number;
        blue: number;
        blueviolet: number;
        brown: number;
        burlywood: number;
        cadetblue: number;
        chartreuse: number;
        chocolate: number;
        coral: number;
        cornflowerblue: number;
        cornsilk: number;
        crimson: number;
        cyan: number;
        darkblue: number;
        darkcyan: number;
        darkgoldenrod: number;
        darkgray: number;
        darkgreen: number;
        darkgrey: number;
        darkkhaki: number;
        darkmagenta: number;
        darkolivegreen: number;
        darkorange: number;
        darkorchid: number;
        darkred: number;
        darksalmon: number;
        darkseagreen: number;
        darkslateblue: number;
        darkslategray: number;
        darkslategrey: number;
        darkturquoise: number;
        darkviolet: number;
        deeppink: number;
        deepskyblue: number;
        dimgray: number;
        dimgrey: number;
        dodgerblue: number;
        firebrick: number;
        floralwhite: number;
        forestgreen: number;
        fuchsia: number;
        gainsboro: number;
        ghostwhite: number;
        gold: number;
        goldenrod: number;
        gray: number;
        green: number;
        greenyellow: number;
        grey: number;
        honeydew: number;
        hotpink: number;
        indianred: number;
        indigo: number;
        ivory: number;
        khaki: number;
        lavender: number;
        lavenderblush: number;
        lawngreen: number;
        lemonchiffon: number;
        lightblue: number;
        lightcoral: number;
        lightcyan: number;
        lightgoldenrodyellow: number;
        lightgray: number;
        lightgreen: number;
        lightgrey: number;
        lightpink: number;
        lightsalmon: number;
        lightseagreen: number;
        lightskyblue: number;
        lightslategray: number;
        lightslategrey: number;
        lightsteelblue: number;
        lightyellow: number;
        lime: number;
        limegreen: number;
        linen: number;
        magenta: number;
        maroon: number;
        mediumaquamarine: number;
        mediumblue: number;
        mediumorchid: number;
        mediumpurple: number;
        mediumseagreen: number;
        mediumslateblue: number;
        mediumspringgreen: number;
        mediumturquoise: number;
        mediumvioletred: number;
        midnightblue: number;
        mintcream: number;
        mistyrose: number;
        moccasin: number;
        navajowhite: number;
        navy: number;
        oldlace: number;
        olive: number;
        olivedrab: number;
        orange: number;
        orangered: number;
        orchid: number;
        palegoldenrod: number;
        palegreen: number;
        paleturquoise: number;
        palevioletred: number;
        papayawhip: number;
        peachpuff: number;
        peru: number;
        pink: number;
        plum: number;
        powderblue: number;
        purple: number;
        red: number;
        rosybrown: number;
        royalblue: number;
        saddlebrown: number;
        salmon: number;
        sandybrown: number;
        seagreen: number;
        seashell: number;
        sienna: number;
        silver: number;
        skyblue: number;
        slateblue: number;
        slategray: number;
        slategrey: number;
        snow: number;
        springgreen: number;
        steelblue: number;
        tan: number;
        teal: number;
        thistle: number;
        tomato: number;
        turquoise: number;
        violet: number;
        wheat: number;
        white: number;
        whitesmoke: number;
        yellow: number;
        yellowgreen: number;
    };

    export class EventDispatcher {
        constructor();
        addEventListener(type: string, listener: (event: any) => void ): void;
        dispatchEvent(event: { type:string; target: any; }): void;
        removeEventListener(type: string, listener: (event: any) => void ): void;
    }

    export interface Face {
        /**
         * Face normal.
         */
        normal: Vector3;

        /**
         * Face color.
         */
        color: Color;

        /**
         * Array of 4 vertex normals.
         */
        vertexNormals: Vector3[];

        /**
         * Array of 4 vertex normals.
         */
        vertexColors: Color[];

        /**
         * Array of 4 vertex tangets.
         */
        vertexTangents: number[];

        /**
         * Material index (points to {@link Geometry.materials}).
         */
        materialIndex: number;

        /**
         * Face centroid.
         */
        centroid: Vector3;

        clone(): Face;
    }

    /**
     * Triangle face.
     *
     * @example 
     * var normal = new THREE.Vector3( 0, 1, 0 ); 
     * var color = new THREE.Color( 0xffaa00 ); 
     * var face = new THREE.Face3( 0, 1, 2, normal, color, 0 );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/Face3.js">src/core/Face3.js</a>
     */
    export class Face3 implements Face {
        /**
         * @param a Vertex A index.
         * @param b Vertex B index.
         * @param c Vertex C index.
         * @param normal Face normal or array of vertex normals.
         * @param color Face color or array of vertex colors.
         * @param materialIndex Material index.
         */
        constructor(a: number, b: number, c: number, normal?: Vector3, color?: Color, materialIndex?: number);
        constructor(a: number, b: number, c: number, normal?: Vector3, vertexColors?: Color[], materialIndex?: number);
        constructor(a: number, b: number, c: number, vertexNormals?: Vector3[], color?: Color, materialIndex?: number);
        constructor(a: number, b: number, c: number, vertexNormals?: Vector3[], vertexColors?: Color[], materialIndex?: number);

        /**
         * Vertex A index.
         */
        a: number;

        /**
         * Vertex B index.
         */
        b: number;

        /**
         * Vertex C index.
         */
        c: number;

        clone(): Face3;

        // properties inherits from Face ///////////////////////////////////

        /**
         * Face normal.
         */
        normal: Vector3;

        /**
         * Face color.
         */
        color: Color;

        /**
         * Array of 4 vertex normals.
         */
        vertexNormals: Vector3[];

        /**
         * Array of 4 vertex normals.
         */
        vertexColors: Color[];

        /**
         * Array of 4 vertex tangets.
         */
        vertexTangents: number[];

        /**
         * Material index (points to {@link Geometry.materials}).
         */
        materialIndex: number;

        /**
         * Face centroid.
         */
        centroid: Vector3;
    }

    /**
     * Quad face.
     * 
     * @example 
     * var normal = new THREE.Vector3( 0, 1, 0 ); 
     * var color = new THREE.Color( 0xffaa00 ); 
     * var face = new THREE.Face4( 0, 1, 2, 3, normal, color, 0 );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/Face4.js">src/core/Face4.js</a>
     */
    export class Face4 implements Face {
        /**
         * @param a Vertex A index.
         * @param b Vertex B index.
         * @param c Vertex C index.
         * @param d Vertex D index.
         * @param normal Face normal or array of vertex normals.
         * @param color Face color or array of vertex colors.
         * @param materialIndex Material index.
         */
        constructor(a: number, b: number, c: number, d: number, normal?: Vector3, color?: Color, materialIndex?: number);
        constructor(a: number, b: number, c: number, d: number, normal?: Vector3, vertexColors?: Color[], materialIndex?: number);
        constructor(a: number, b: number, c: number, d: number, vertexNormals?: Vector3[], color?: Color, materialIndex?: number);
        constructor(a: number, b: number, c: number, d: number, vertexNormals?: Vector3[], vertexColors?: Color[], materialIndex?: number);

        /**
         * Vertex A index.
         */
        a: number;

        /**
         * Vertex B index.
         */
        b: number;

        /**
         * Vertex C index.
         */
        c: number;

        /**
         * Vertex D index.
         */
        d: number;

        clone(): Face4;



        // properties inherits from Face ///////////////////////////////////

        /**
         * Face normal.
         */
        normal: Vector3;

        /**
         * Face color.
         */
        color: Color;

        /**
         * Array of 4 vertex normals.
         */
        vertexNormals: Vector3[];

        /**
         * Array of 4 vertex normals.
         */
        vertexColors: Color[];

        /**
         * Array of 4 vertex tangets.
         */
        vertexTangents: number[];

        /**
         * Material index (points to {@link Geometry.materials}).
         */
        materialIndex: number;

        /**
         * Face centroid.
         */
        centroid: Vector3;
    }

    /**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     */
    export class Frustum {
        constructor(p0?: number, p1?: number, p2?: number, p3?: number, p4?: number, p5?: number);

        /**
         * Array of 6 vectors.
         */
        planes: Plane[];

        set (p0?: number, p1?: number, p2?: number, p3?: number, p4?: number, p5?: number): Frustum;
        copy(frustum: Frustum): Frustum;
        setFromMatrix(m: Matrix4): Frustum;

        /**
         * Checks whether the object is inside the Frustum.
         */
        intersectsObject(object: Object3D): bool;

        intersectsSphere(sphere: Sphere): bool;
        containsPoint(point: Vector3): bool;
        clone(): Frustum;
    }

    export class Plane {
        constructor(normal?: Vector3, constant?: number);
        normal: Vector3;
        constant: number;
        set (normal: Vector3, constant: number): Plane;
        setComponents(x: number, y: number, z: number, w: number): Plane;
        setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
        setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
        copy(plane: Plane): Plane;
        normalize(): Plane;
        negate(): Plane;
        distanceToPoint(point: Vector3): number;
        distanceToSphere(sphere: Sphere): number;
        projectPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        orthoPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        isIntersectionLine(startPoint: Vector3, endPoint: Vector3): bool;
        coplanarPoint(optionalTarget?: bool): Vector3;
        transform(matrix: Matrix3, optionalNormalMatrix?: Matrix3): Plane;
        translate(offset: Vector3): Plane;
        equals(plane: Plane): bool;
        clone(): Plane;
    }

    export class Sphere {
        constructor(center?: Vector3, radius?: number);
        center: Vector3;
        radius: number;
        set (center: Vector3, radius: number): Sphere;
        setFromCenterAndPoints(center: Vector3, points: Vector3[]): Sphere;
        copy(sphere: Sphere): Sphere;
        empty(): bool;
        containsPoint(point: Vector3): bool;
        distanceToPoint(point: Vector3): number;
        intersectsSphere(sphere: Sphere): bool;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Sphere;
        getBoundingBox(optionalTarget: Box3): Box3;
        transform(matrix: Matrix): Sphere;
        translate(offset: Vector3): Sphere;
        equals(sphere: Sphere): bool;
        clone(): Sphere;
    }


    export interface MorphTarget {
        name: string;
        vertices: Vector3[];
    }

    export interface MorphColor {
        name: string;
        color: Color[];
    }

    export interface BoundingBox3D {
        min: Vector3;
        max: Vector3;
    }

    export interface BoundingSphere {
        radius: number;
    }


    /**
     * Base class for geometries
     * 
     * @example
     * var geometry = new THREE.Geometry();
     * geometry.vertices.push( new THREE.Vector3( -10, 10, 0 ) ); 
     * geometry.vertices.push( new THREE.Vector3( -10, -10, 0 ) ); 
     * geometry.vertices.push( new THREE.Vector3( 10, -10, 0 ) );  
     * geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );  
     * geometry.computeBoundingSphere();
     *
     * @see <a link="https://github.com/mrdoob/three.js/blob/master/src/core/Geometry.js">src/core/Geometry.js</a>
     */
    export class Geometry {
        constructor();
        id: number;
        name: string;
        vertices: Vector3[];
        colors: Color[];
        materials: Material[];
        faces: Face[];
        faceUvs: Vector2[];
        faceVertexUvs: Vector2[][];
        morphTargets: MorphTarget[];
        morphColors: MorphColor[];
        skinWeights: number[];
        skinIndices: number[];
        boundingBox: BoundingBox3D;
        boundingSphere: BoundingSphere;
        hasTangents: bool;
        dynamic: bool;
        verticesNeedUpdate: bool;
        elementsNeedUpdate: bool;
        uvsNeedUpdate: bool;
        normalsNeedUpdate: bool;
        tangentsNeedUpdate: bool;
        colorsNeedUpdate: bool;
        lineDistancesNeedUpdate: bool;
        buffersNeedUpdate: bool;
        animation: AnimationData;

        /**
         * Bakes matrix transform directly into vertex coordinates.
         */
        applyMatrix(matrix: Matrix4): void;

        /**
         * Computes centroids for all faces.
         */
        computeCentroids(): void;

        /**
         * Computes face normals.
         */
        computeFaceNormals(): void;

        /**
         * Computes vertex normals by averaging face normals.
         * Face normals must be existing / computed beforehand.
         */
        computeVertexNormals(areaWeighted?: bool): void;

        computeMorphNormals(): void;

        /**
         * Computes vertex tangents.
         * Based on <a href="http://www.terathon.com/code/tangent.html">http://www.terathon.com/code/tangent.html</a>
         * Geometry must have vertex UVs (layer 0 will be used).
         */
        computeTangents(): void;

        computeLineDistances(): void;

        /**
         * Computes bounding box of the geometry, updating {@link Geometry.boundingBox} attribute.
         */
        computeBoundingBox(): void;

        /**
         * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
         * Neither bounding boxes or bounding spheres are computed by default. They need to be explicitly computed, otherwise they are null.
         */
        computeBoundingSphere(): void;

        /**
         * Checks for duplicate vertices using hashmap.
         * Duplicated vertices are removed and faces' vertices are updated.
         */
        mergeVertices(): number;

        clone(): Geometry;

        dispose(): void;
    }

    var GeometryIdCount: number;
    var GeometryLibrary: Geometry[];

    /**
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Math.js">src/math/Math.js</a>
     */
    export var Math: {
        /**
         * Clamps the x to be between a and b.
         *
         * @param x Value to be clamped.
         * @param a Minimum value
         * @param b Maximum value.
         */
        clamp(x: number, a: number, b: number): number;

        /**
         * Clamps the x to be larger than a.
         * 
         * @param x — Value to be clamped.
         * @param a — Minimum value
         */
        clampBottom(x: number, a: number): number;

        /**
         * Linear mapping of x from range [a1, a2] to range [b1, b2].
         * 
         * @param x Value to be mapped.
         * @param a1 Minimum value for range A.
         * @param a2 Maximum value for range A.
         * @param b1 Minimum value for range B.
         * @param b2 Maximum value for range B.
         */
        mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;

        /**
         * Random float from 0 to 1 with 16 bits of randomness.
         * Standard Math.random() creates repetitive patterns when applied over larger space.
         */
        random16(): number;

        /**
         * Random integer from low to high interval.
         */
        randInt(low: number, high: number): number;

        /**
         * Random float from low to high interval.
         */
        randFloat(low: number, high: number): number;

        /**
         * Random float from - range / 2 to range / 2 interval.
         */
        randFloatSpread(range: number): number;

        /**
         * Returns -1 if x is less than 0, 1 if x is greater than 0, and 0 if x is zero.
         */
        sign(x: number): number;
    };

    /**
     * A 3x3 matrix.
     *
     * ( interface Matrix<T> )
     */
    export interface Matrix {
        /**
         * Float32Array with matrix values.
         */
        elements: Float32Array;

        /**
         * identity():T;
         */
        identity(): Matrix;

        /**
         * copy(m:T):T;
         */
        copy(m: Matrix): Matrix;

        multiplyVector3Array(a: number[]): number[];

        /**
         * multiplyScalar(s:number):T;
         */
        multiplyScalar(s: number): Matrix;

        determinant(): number;

        /**
         * getInverse(matrix:T, throwOnInvertible?:bool):T;
         */
        getInverse(matrix: Matrix, throwOnInvertible?: bool): Matrix;

        /**
         * transpose():T;
         */
        transpose(): Matrix;

        /**
         * clone():T;
         */
        clone(): Matrix;
    }

    /**
     * ( class Matrix3 implements Matrix<Matrix3> )
     */
    export class Matrix3 implements Matrix {
        constructor(n11?: number, n12?: number, n13?: number, n21?: number, n22?: number, n23?: number, n31?: number, n32?: number, n33?: number);

        /**
         * Float32Array with matrix values.
         */
        elements: Float32Array;

        set (n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): Matrix3;
        identity(): Matrix3;
        copy(m: Matrix3): Matrix3;
        multiplyVector3Array(a: number[]): number[];
        multiplyScalar(s: number): Matrix3;
        determinant(): number;
        getInverse(matrix: Matrix3, throwOnInvertible?: bool): Matrix3;

        /**
         * Transposes this matrix in place.
         */
        transpose(): Matrix3;

        /**
         * Transposes this matrix into the supplied array r, and returns itself.
         */
        transposeIntoArray(r: number[]): number[];

        clone(): Matrix3;
    }

    /**
     * A 4x4 Matrix.
     *
     * @example
     * // Simple rig for rotating around 3 axes  
     * var m = new THREE.Matrix4();  
     * var m1 = new THREE.Matrix4(); 
     * var m2 = new THREE.Matrix4(); 
     * var m3 = new THREE.Matrix4();  
     * var alpha = 0; 
     * var beta = Math.PI; 
     * var gamma = Math.PI/2;  
     * m1.makeRotationX( alpha ); 
     * m2.makeRotationY( beta ); 
     * m3.makeRotationZ( gamma );  
     * m.multiplyMatrices( m1, m2 ); 
     * m.multiply( m3 ); 
     */
    export class Matrix4 implements Matrix {

        /**
         * Initialises the matrix with the supplied n11..n44 values, or just creates an identity matrix if no values are passed.
         */
        constructor(n11?: number, n12?: number, n13?: number, n14?: number, n21?: number, n22?: number, n23?: number, n24?: number, n31?: number, n32?: number, n33?: number, n34?: number, n41?: number, n42?: number, n43?: number, n44?: number);

        /**
         * Float32Array with matrix values.
         */
        elements: Float32Array;

        /** 
         * Sets all fields of this matrix.
         */
        set (n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): Matrix4;

        /**
         * Resets this matrix to identity.
         */
        identity(): Matrix4;

        /**
         * Copies a matrix m into this matrix.
         */
        copy(m: Matrix4): Matrix4;

        /**
         * Sets the rotation submatrix of this matrix to the rotation specified by Euler angles.
         * Default order is "XYZ".
         *
         * @param v Rotation vector. order — The order of rotations. Eg. "XYZ".
         */
        setRotationFromEuler(v: Vector3, order: string): Matrix4;

        /**
         * Sets the rotation submatrix of this matrix to the rotation specified by q.
         */
        setRotationFromQuaternion(q: Quaternion): Matrix4;

        /**
         * Constructs a rotation matrix, looking from eye towards center with defined up vector.
         */
        lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;

        /**
         * Multiplies this matrix by m.
         */
        multiply(m: Matrix4): Matrix4;

        /**
         * Sets this matrix to a x b.
         */
        multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;

        /**
         * Sets this matrix to a x b and stores the result into the flat array r.
         * r can be either a regular Array or a TypedArray.
         */
        multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;

        /**
         * Multiplies this matrix by s.
         */
        multiplyScalar(s: number): Matrix4;

        multiplyVector3Array(a: number[]): number[];

        rotateAxis(v: Vector3): Vector3;

        /**
         * Computes the cross product between this matrix and the Vector4 parameter a.
         */
        crossVector(a: Vector3): Vector4;

        /**
         * Computes determinant of this matrix.
         * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
         */
        determinant(): number;

        /**
         * Transposes this matrix.
         */
        transpose(): Matrix4;

        /** 
         * Flattens this matrix into supplied flat array.
         */
        flattenToArray(flat: number[]): number[];

        /**
         * Flattens this matrix into supplied flat array starting from offset position in the array.
         */
        flattenToArrayOffset(flat: number[], offset: number): number[];

        /**
         * Returns position component from this matrix.
         * Note: this method returns a reference to the internal class vector, make a copy or clone it if you don't use it right away.
         */
        getPosition(): Vector3;

        /**
         * Sets the position component for this matrix from vector v.
         */
        setPosition(v: Vector3): Vector3;

        /**
         * Returns x column component from this matrix.
         * Note: this method returns a reference to the internal class vector, make a copy or clone it if you don't use it right away.
         */
        getColumnX(): Vector3;

        /**
         * Returns y column component from this matrix.
         * Note: this method returns a reference to the internal class vector, make a copy or clone it if you don't use it right away.
         */
        getColumnY(): Vector3;

        /**
         * Returns z column component from this matrix.
         * Note: this method returns a reference to the internal class vector, make a copy or clone it if you don't use it right away.
         */
        getColumnZ(): Vector3;

        /**
         * Sets this matrix to the inverse of matrix m.
         * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm.
         */
        getInverse(m: Matrix4, throwOnInvertible?: bool): Matrix4;

        /**
         * Sets this matrix to the transformation composed of translation, rotation and scale.
         */
        compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

        /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         */
        decompose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3): Object[]; // [Vector3, Quaternion, Vector3]

        /**
         * Copies the translation component of the supplied matrix m into this matrix translation component.
         */
        extractPosition(m: Matrix4): Matrix4;

        /**
         * Copies the rotation component of the supplied matrix m into this matrix rotation component.
         */
        extractRotation(m: Matrix4): Matrix4;

        /**
         * Translates this matrix by vector v.
         */
        translate(v: Vector3): Matrix4;

        /**
         * Rotates this matrix around the x axis by angle.
         */
        rotateX(angle: number): Matrix4;

        /**
         * Rotates this matrix around the y axis by angle.
         */
        rotateY(angle: number): Matrix4;

        /**
         * Rotates this matrix around the z axis by angle.
         */
        rotateZ(angle: number): Matrix4;

        /**
         * Rotates this matrix around the supplied axis by angle.
         */
        rotateByAxis(axis: Vector3, angle: number): Matrix4;

        /**
         * Multiplies the columns of this matrix by vector v.
         */
        scale(v: Vector3): Matrix4;

        getMaxScaleOnAxis(): number;

        /**
         * Sets this matrix as translation transform.
         */
        makeTranslation(x: number, y: number, z: number): Matrix4;

        /**
         * Sets this matrix as rotation transform around x axis by theta radians.
         *
         * @param theta Rotation angle in radians.
         */
        makeRotationX(theta: number): Matrix4;

        /**
         * Sets this matrix as rotation transform around y axis by theta radians.
         * 
         * @param theta Rotation angle in radians.
         */
        makeRotationY(theta: number): Matrix4;

        /**
         * Sets this matrix as rotation transform around z axis by theta radians.
         *
         * @param theta Rotation angle in radians.
         */
        makeRotationZ(theta: number): Matrix4;

        /**
         * Sets this matrix as rotation transform around axis by angle radians.
         * Based on http://www.gamedev.net/reference/articles/article1199.asp.
         *
         * @param axis Rotation axis. 
         * @param theta Rotation angle in radians.
         */
        makeRotationAxis(axis: Vector3, angle: number): Matrix4;

        /**
         * Sets this matrix as scale transform.
         */
        makeScale(x: number, y: number, z: number): Matrix4;

        /** 
         * Creates a frustum matrix.
         */
        makeFrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;

        /**
         * Creates a perspective projection matrix.
         */
        makePerspective(fov: number, aspect: number, near: number, far: number): Matrix4;

        /**
         * Creates an orthographic projection matrix.
         */
        makeOrthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;

        /**
         * Clones this matrix.
         */
        clone(): Matrix4;
    }

    export class Ray {
        constructor(origin?: Vector3, direction?: Vector3);
        origin: Vector3;
        direction: Vector3;
        set (origin: Vector3, direction: Vector3): Ray;
        copy(ray: Ray): Ray;
        at(t: number, optionalTarget?: Vector3): Vector3;
        recastSelf(t: number): Ray;
        closestPointToPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        distanceToPoint(point: Vector3): number;
        isIntersectionSphere(sphere: Sphere): bool;
        isIntersectionPlane(plane: Plane): bool;
        distanceToPlane(plane: Plane): number;
        intersectPlane(plane: Plane, optionalTarget?: Vector3): Vector3;
        transform(matrix4: Matrix4): Ray;
        equals(ray: Ray): bool;
        clone(): Ray;
    }


    /**
     * Base class for scene graph objects
     */
    export class Object3D {
        constructor();

        /**
         * Unique number of this object instance.
         */
        id: number;

        /**
         * Optional name of the object (doesn't need to be unique).
         */
        name: string;

        properties: any;

        /**
         * Object's parent in the scene graph.
         */
        parent: Object3D;

        /**
         * Array with object's children.
         */
        children: Object3D[];

        /**
         * Object's local position.
         */
        position: Vector3;

        /**
         * Object's local rotation (Euler angles), in radians.
         */
        rotation: Vector3;

        /**
         * Order of axis for Euler angles.
         */
        eulerOrder: string;
        // eulerOrder:EulerOrder;

        /**
         * Object's local scale.
         */
        scale: Vector3;

        /**
         * Up direction.
         */
        up: Vector3;

        /**
         * Local transform.
         */
        matrix: Matrix4;

        /**
         * Global rotation.
         */
        matrixRotationWorld: Matrix4;

        /**
         * Global rotation.
         */
        quaternion: Quaternion;

        /**
         * Use quaternion instead of Euler angles for specifying local rotation.
         */
        useQuaternion: bool;

        /**
         * Default is 0.0.
         */
        boundRadius: number;

        /**
         * Maximum scale from x, y, z scale components.
         */
        boundRadiusScale: number;

        /**
         * Override depth-sorting order if non null.
         */
        renderDepth: number;

        /**
         * Object gets rendered if true.
         */
        visible: bool;

        /**
         * Gets rendered into shadow map.
         */
        castShadow: bool;

        /**
         * Material gets baked in shadow receiving.
         */
        receiveShadow: bool;

        frustumCulled: bool;
        matrixAutoUpdate: bool;
        matrixWorldNeedsUpdate: bool;
        rotationAutoUpdate: bool;
        applyMatrix(matrix: Matrix4): void;
        translate(distance: number, axis: Vector3): void;
        translateX(distance: number): void;
        translateY(distance: number): void;
        translateZ(distance: number): void;
        localToWorld(vector: Vector3): Vector3;
        worldToLocal(vector: Vector3): Vector3;
        lookAt(vector: Vector3): void;

        /**
         * Adds object as child of this object.
         */
        add(object: Object3D): void;

        /**
         * Removes object as child of this object.
         */
        remove(object: Object3D): void;

        /**
         * Translates object along arbitrary axis by distance.
         * @param distance Distance.
         * @param axis Translation direction.
         */
        traverse(callback: (object: Object3D) => any): void;

        /**
         * Gets first child with name matching the argument. Searches whole subgraph recursively if recursive is true.
         * @param name Object name.
         * @param recursive Whether check in the objects's children.
         */
        getChildByName(name: string, recursive: bool): Object3D;

        /**
         * Searches whole subgraph recursively to add all objects in the array.
         * @param array optional argument that returns the the array with descendants.
         */
        getDescendants(array?: Object3D[]): Object3D[];

        /**
         * Updates local transform.
         */
        updateMatrix(): void;

        /**
         * Updates global transform of the object and its children.
         */
        updateMatrixWorld(force: bool): void;
        clone(object?: Object3D): Object3D;
        deallocate(): void;

        static defaultEulerOrder: string;
        // static defaultEulerOrder:EulerOrder;
    }

    var Object3DIdCount: number;
    var Object3DLibrary: Object3D[];

    /**
     * Projects points between spaces.
     */
    export class Projector {

        constructor();

        projectVector(vector: Vector3, camera: Camera): Vector3;

        unprojectVector(vector: Vector3, camera: Camera): Vector3;

        /**
         * Translates a 2D point from NDC (Normalized Device Coordinates) to a Raycaster that can be used for picking. NDC range from [-1..1] in x (left to right) and [1.0 .. -1.0] in y (top to bottom).
         */
        pickingRay(vector: Vector3, camera: Camera): Raycaster;

        /**
         * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
         * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer). 
         *
         * @param scene scene to project.
         * @param camera camera to use in the projection.
         * @param sort select whether to sort elements using the Painter's algorithm.
         */
        projectScene(scene: Scene, camera: Camera, sortObjects: bool, sortElements?: bool): {
            objects: Object3D[];     // Mesh, Line or other object  
            sprites: Object3D[];    // Sprite or Particle 
            lights: Light[];
            elements: Face[];    // Line, Particle, Face3 or Face4 
        };
    }

    /**
     * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
     *
     * @example
     * var quaternion = new THREE.Quaternion(); 
     * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );  
     * var vector = new THREE.Vector3( 1, 0, 0 ); 
     * vector.applyQuaternion( quaternion );
     */
    export class Quaternion {
        /**
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate
         * @param w w coordinate
         */
        constructor(x?: number, y?: number, z?: number, w?: number);

        x: number;
        y: number;
        z: number;
        w: number;

        /**
         * Sets values of this quaternion.
         */
        set (x: number, y: number, z: number, w: number): Quaternion;

        /**
         * Copies values of q to this quaternion.
         */
        copy(q: Quaternion): Quaternion;

        /**
         * Sets this quaternion from rotation specified by Euler angles.
         */
        setFromEuler(v: Vector3, order: string): Quaternion;

        /**
         * Sets this quaternion from rotation specified by axis and angle.
         * Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm.
         * Axis have to be normalized, angle is in radians.
         */
        setFromAxisAngle(axis: Vector3, angle: number): Quaternion;

        /**
         * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
         */
        setFromRotationMatrix(m: Matrix4): Quaternion;

        /**
         * Inverts this quaternion.
         */
        inverse(): Quaternion;

        conjugate(): Quaternion;

        lengthSq(): number;

        /**
         * Computes length of this quaternion.
         */
        length(): number;

        /**
         * Normalizes this quaternion.
         */
        normalize(): Quaternion;

        /**
         * Multiplies this quaternion by b.
         */
        multiply(q: Quaternion): Quaternion;

        /**
         * Sets this quaternion to a x b
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
         */
        multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;

        slerp(qb: Quaternion, t: number): Quaternion;

        equals(v: Quaternion): bool;

        /**
         * Clones this quaternion.
         */
        clone(): Quaternion;

        /**
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
         */
        static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;
    }

    export interface Intersection {
        distance: number;
        point: Vector3;
        face: Face;
        object: Object3D;
    }

    export class Raycaster {
        constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);
        origin: Vector3;
        direction: Vector3;
        near: number;
        far: number;
        precision: number;
        set (origin: Vector3, direction: Vector3): void;
        intersectObject(object: Object3D, recursive?: bool): Intersection[];
        intersectObjects(objects: Object3D[], recursive?: bool): Intersection[];
    }

    export interface SplineControlPoint {
        x: number;
        y: number;
        z: number;
    }

    /**
     * Represents a spline.
     * 
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Spline.js">src/math/Spline.js</a>
     */
    export class Spline {
        /**
         * Initialises the spline with points, which are the places through which the spline will go.
         */
        constructor(points: SplineControlPoint[]);

        points: SplineControlPoint[];

        /**
         * Initialises using the data in the array as a series of points. Each value in a must be another array with three values, where a[n] is v, the value for the nth point, and v[0], v[1] and v[2] are the x, y and z coordinates of that point n, respectively.
         *
         * @param a array of triplets containing x, y, z coordinates
         */
        initFromArray(a: number[][]): void;

        /**
         * Return the interpolated point at k.
         *
         * @param k point index
         */
        getPoint(k: number): SplineControlPoint;

        /**
         * Returns an array with triplets of x, y, z coordinates that correspond to the current control points.
         */
        getControlPointsArray(): number[][];

        /**
         * Returns the length of the spline when using nSubDivisions.
         * @param nSubDivisions number of subdivisions between control points. Default is 100.
         */
        getLength(nSubDivisions?: number): { chunks: number[]; total: number; };

        /**
         * Modifies the spline so that it looks similar to the original but has its points distributed in such way that moving along the spline it's done at a more or less constant speed. The points should also appear more uniformly spread along the curve.
         * This is done by resampling the original spline, with the density of sampling controlled by samplingCoef. Here it's interesting to note that denser sampling is not necessarily better: if sampling is too high, you may get weird kinks in curvature.
         *
         * @param samplingCoef how many intermediate values to use between spline points
         */
        reparametrizeByArcLength(samplingCoef: number): void;
    }


    /**
     * ( interface Vector<T> )
     *
     * Abstruct interface of Vector2, Vector3 and Vector4.
     * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
     * Those definitions will be changed when TypeScript innovocates Generics to be type safe.
     *
     * @example
     * var v:THREE.Vector = new THREE.Vector3();
     * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3));    // invalid but compiled successfully
     */
    export interface Vector {
        /**
         * copy(v:T):T;
         */
        copy(v: Vector): Vector;

        /**
         * add(v:T):T;
         */
        add(v: Vector): Vector;

        /**
         * addVectors(a:T, b:T):T;
         */
        addVectors(a: Vector, b: Vector): Vector;

        /**
         * sub(v:T):T;
         */
        sub(v: Vector): Vector;

        /**
         * subVectors(a:T, b:T):T;
         */
        subVectors(a: Vector, b: Vector): Vector;

        /**
         * multiplyScalar(s:number):T;
         */
        multiplyScalar(s: number): Vector;

        /**
         * divideScalar(s:number):T;
         */
        divideScalar(s: number): Vector;

        /**
         * negate():T;
         */
        negate(): Vector;

        /**
         * dot(v:T):T;
         */
        dot(v: Vector): number;

        /**
         * lengthSq():number;
         */
        lengthSq(): number;

        /**
         * length():number;
         */
        length(): number;

        /**
         * normalize():T;
         */
        normalize(): Vector;

        /**
         * NOTE: Vector4 doesn't have the property.
         * 
         * distanceTo(v:T):number;
         */
        distanceTo(v: Vector): number;

        /**
         * NOTE: Vector4 doesn't have the property.
         *
         * distanceToSquared(v:T):number;
         */
        distanceToSquared(v: Vector): number;

        /**
         * setLength(l:number):T;
         */
        setLength(l: number): Vector;

        /**
         * lerp(v:T, alpha:number):T;
         */
        lerp(v: Vector, alpha: number): Vector;

        /**
         * equals(v:T):bool;
         */
        equals(v: Vector): bool;

        /**
         * clone():T;
         */
        clone(): Vector;
    }

    /**
     * 2D vector.
     * 
     * ( class Vector2 implements Vector<Vector2> )
     */
    export class Vector2 implements Vector {

        constructor(x?: number, y?: number);

        x: number;

        y: number;

        /**
         * Sets value of this vector.
         */
        set (x: number, y: number): Vector2;

        /**
         * Copies value of v to this vector.
         */
        copy(v: Vector2): Vector2;

        /**
         * Adds v to this vector.
         */
        add(v: Vector2): Vector2;

        /**
         * Sets this vector to a + b.
         */
        addVectors(a: Vector2, b: Vector2): Vector2;

        /**
         * Subtracts v from this vector.
         */
        sub(v: Vector2): Vector2;

        /**
         * Sets this vector to a - b.
         */
        subVectors(a: Vector2, b: Vector2): Vector2;

        /**
         * Multiplies this vector by scalar s.
         */
        multiplyScalar(s: number): Vector2;

        /**
         * Divides this vector by scalar s.
         * Set vector to ( 0, 0 ) if s == 0.
         */
        divideScalar(s: number): Vector2;

        /** 
         * Inverts this vector.
         */
        negate(): Vector2;

        /**
         * Computes dot product of this vector and v.
         */
        dot(v: Vector2): number;

        /**
         * Computes squared length of this vector.
         */
        lengthSq(): number;

        /**
         * Computes length of this vector.
         */
        length(): number;

        /**
         * Normalizes this vector.
         */
        normalize(): Vector2;

        /**
         * Computes distance of this vector to v.
         */
        distanceTo(v: Vector2): number;

        /**
         * Computes squared distance of this vector to v.
         */
        distanceToSquared(v: Vector2): number;

        /**
         * Normalizes this vector and multiplies it by l.
         */
        setLength(l: number): Vector2;

        lerp(v: Vector2, alpha: number): Vector2;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector2): bool;

        /**
         * Clones this vector.
         */
        clone(): Vector2;
    }

    /**
     * 3D vector.
     *
     * @example
     * var a = new THREE.Vector3( 1, 0, 0 ); 
     * var b = new THREE.Vector3( 0, 1, 0 );  
     * var c = new THREE.Vector3(); 
     * c.crossVectors( a, b );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js">src/math/Vector3.js</a>
     *
     * ( class Vector3 implements Vector<Vector3> )
     */
    export class Vector3 implements Vector {

        constructor(x?: number, y?: number, z?: number);

        x: number;

        y: number;

        z: number;

        /**
         * Sets value of this vector.
         */
        set (x: number, y: number, z: number): Vector3;

        /**
         * Sets x value of this vector.
         */
        setX(x: number): Vector3;

        /**
         * Sets y value of this vector.
         */
        setY(y: number): Vector3;

        /**
         * Sets z value of this vector.
         */
        setZ(z: number): Vector3;

        setComponent(index: number, value: number): void;

        getComponent(index: number): number;

        /**
         * Copies value of v to this vector.
         */
        copy(v: Vector3): Vector3;

        /**
         * Adds v to this vector.
         */
        add(a: Object): Vector3;

        addScalar(s: number): Vector3;

        /**
         * Sets this vector to a + b.
         */
        addVectors(a: Vector3, b: Vector3): Vector3;

        /** 
         * Subtracts v from this vector.
         */
        sub(a: Vector3): Vector3;

        /**
         * Sets this vector to a - b.
         */
        subVectors(a: Vector3, b: Vector3): Vector3;

        multiply(v: Vector3): Vector3;

        /** 
         * Multiplies this vector by scalar s.
         */
        multiplyScalar(s: number): Vector3;

        multiplyVectors(a: Vector3, b: Vector3): Vector3;
        applyMatrix3(m: Matrix3): Vector3;
        applyMatrix4(m: Matrix4): Vector3;
        applyProjection(m: Matrix4): Vector3;
        applyQuaternion(q: Quaternion): Vector3;

        // applyEuler(v:Vector3, eulerOrder:EulerOrder):Vector3; 
        applyEuler(v: Vector3, eulerOrder: string): Vector3;

        applyAxisAngle(axis: Vector3, angle: number): Vector3;
        projectPoint(m: Matrix4): Vector3;
        divide(v: Vector3): Vector3;

        /**
         * Divides this vector by scalar s.
         * Set vector to ( 0, 0, 0 ) if s == 0.
         */
        divideScalar(s: number): Vector3;

        min(v: Vector3): Vector3;
        max(v: Vector3): Vector3;

        clamp(min: Vector3, max: Vector3): Vector3;

        /**
         * Inverts this vector.
         */
        negate(): Vector3;

        /**
         * Computes dot product of this vector and v.
         */
        dot(v: Vector3): number;

        /**
         * Computes squared length of this vector.
         */
        lengthSq(): number;

        /**
         * Computes length of this vector.
         */
        length(): number;

        /**
         * Computes Manhattan length of this vector.
         * http://en.wikipedia.org/wiki/Taxicab_geometry
         */
        lengthManhattan(): number;

        /**
         * Normalizes this vector.
         */
        normalize(): Vector3;

        /**
         * Normalizes this vector and multiplies it by l.
         */
        setLength(l: number): Vector3;

        lerp(v: Vector3, alpha: number): Vector3;

        /**
         * Sets this vector to cross product of itself and v.
         */
        cross(a: Vector3): Vector3;

        /**
         * Sets this vector to cross product of a and b.
         */
        crossVectors(a: Vector3, b: Vector3): Vector3;

        angleTo(v: Vector3): number;

        /**
         * Computes distance of this vector to v.
         */
        distanceTo(v: Vector3): number;

        /**
         * Computes squared distance of this vector to v.
         */
        distanceToSquared(v: Vector3): number;

        /**
         * Sets this vector extracting position from matrix transform.
         */
        getPositionFromMatrix(m: Matrix4): Vector3;

        setEulerFromRotationMatrix(m: Matrix4, order: string): Vector3;

        setEulerFromQuaternion(q: Quaternion, order: string): Vector3;

        /**
         * Sets this vector extracting scale from matrix transform.
         */
        getScaleFromMatrix(m: Matrix4): Vector3;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector3): bool;

        /**
         * Clones this vector.
         */
        clone(): Vector3;
    }

    /**
     * 4D vector.
     *
     * ( class Vector4 implements Vector<Vector4> )
     */
    export class Vector4 implements Vector {
        constructor(x?: number, y?: number, z?: number, w?: number);
        x: number;
        y: number;
        z: number;
        w: number;

        /**
         * Sets value of this vector.
         */
        set (x: number, y: number, z: number, w: number): Vector4;

        /**
         * Copies value of v to this vector.
         */
        copy(v: Vector4): Vector4;

        /**
         * Adds v to this vector.
         */
        add(v: Vector4): Vector4;

        /**
         * Sets this vector to a + b.
         */
        addVectors(a: Vector4, b: Vector4): Vector4;

        /**
         * Subtracts v from this vector.
         */
        sub(v: Vector4): Vector4;

        /**
         * Sets this vector to a - b.
         */
        subVectors(a: Vector4, b: Vector4): Vector4;

        /**
         * Multiplies this vector by scalar s.
         */
        multiplyScalar(s: number): Vector4;

        /**
         * Divides this vector by scalar s.
         * Set vector to ( 0, 0, 0 ) if s == 0.
         */
        divideScalar(s: number): Vector4;

        /**
         * Inverts this vector.
         */
        negate(): Vector4;

        /**
         * Computes dot product of this vector and v.
         */
        dot(v: Vector4): number;

        /** 
         * Computes squared length of this vector.
         */
        lengthSq(): number;

        /**
         * Computes dot product of this vector and v.
         */
        dot(v: Vector4): Vector4;

        /**
         * Computes length of this vector.
         */
        length(): number;

        lengthManhattan(): number;

        /**
         * Normalizes this vector.
         */
        normalize(): Vector4;

        /**
         * NOTE: Vector4 doesn't have the property.
         * Computes distance of this vector to v.
         */
        distanceTo(v: Vector3): number;

        /**
         * NOTE: Vector4 doesn't have the property.
         * Computes squared distance of this vector to v.
         */
        distanceToSquared(v: Vector3): number;


        /**
         * Normalizes this vector and multiplies it by l.
         */
        setLength(l: number): Vector4;

        /**
         * Linearly interpolate between this vector and v with alpha factor.
         */
        lerp(v: Vector4, alpha: number): Vector4;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector4): bool;

        /**
         * Clones this vector.
         */
        clone(): Vector4;

        /**
         * http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
         * @param q is assumed to be normalized
         */
        setAxisAngleFromQuaternion(q: Quaternion): Vector4;

        /**
         * http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
         * @param m assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
         */
        setAxisAngleFromRotationMatrix(m: Matrix3): Vector4;
    }

    export class Box2 {
        constructor(min?: Vector2, max?: Vector2);
        set (min: Vector2, max: Vector2): Box2;
        setFromPoints(points: Vector2[]): Box2;
        setFromCenterAndSize(center: Vector2, size: number): Box2;
        copy(box: Box2): Box2;
        makeEmpty(): Box2;
        empty(): bool;
        center(optionalTarget?: Vector2): Vector2;
        size(optionalTarget?: Vector2): Vector2;
        expandByPoint(point: Vector2): Box2;
        expandByVector(vector: Vector2): Box2;
        expandByScalar(scalar: number): Box2;
        containsPoint(point: Vector2): bool;
        containsBox(box: Box2): bool;
        getParameter(point: Vector2): Vector2;
        isIntersectionBox(box: Box2): bool;
        clampPoint(point: Vector2, optionalTarget?: Vector2): Vector2;
        distanceToPoint(point: Vector2): Vector2;
        intersect(box: Box2): Box2;
        union(box: Box2): Box2;
        translate(offset: Vector2): Box2;
        equals(box: Box2): bool;
        clone(): Box2;
    }

    export class Box3 {
        constructor(min?: Vector3, max?: Vector3);
        set (min: Vector3, max: Vector3): Box3;
        setFromPoints(points: Vector3[]): Box3;
        setFromCenterAndSize(center: Vector3, size: number): Box3;
        copy(box: Box3): Box3;
        makeEmpty(): Box3;
        empty(): bool;
        center(optionalTarget?: Vector3): Vector3;
        size(optionalTarget?: Vector3): Vector3;
        expandByPoint(point: Vector3): Box3;
        expandByVector(vector: Vector3): Box3;
        expandByScalar(scalar: number): Box3;
        containsPoint(point: Vector3): bool;
        containsBox(box: Box3): bool;
        getParameter(point: Vector3): Vector3;
        isIntersectionBox(box: Box3): bool;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        distanceToPoint(point: Vector3): Vector3;
        intersect(box: Box3): Box3;
        union(box: Box3): Box3;
        transform(matrix: Matrix4): Box3;
        translate(offset: Vector3): Box3;
        equals(box: Box3): bool;
        clone(): Box3;
    }

    // Cameras ////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Abstract base class for cameras. This class should always be inherited when you build a new camera.
     */
    export class Camera extends Object3D {

        /**
         * This constructor sets following properties to the correct type: matrixWorldInverse, projectionMatrix and projectionMatrixInverse.
         */
        constructor();

        /**
         * This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.
         */
        matrixWorldInverse: Matrix4;

        /**
         * This is the matrix which contains the projection.
         */
        projectionMatrix: Matrix4;

        /**
         * This is the inverse of projectionMatrix.
         */
        projectionMatrixInverse: Matrix4;

        /**
         * This make the camera look at the vector position in local space.
         * @param vector point to look at
         */
        lookAt(vector: Vector3): void;
    }

    /**
     * Camera with orthographic projection
     *
     * @example 
     * var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 ); 
     * scene.add( camera );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js">src/cameras/OrthographicCamera.js</a>
     */
    export class OrthographicCamera extends Camera {
        /**
         * @param left Camera frustum left plane.
         * @param right Camera frustum right plane.
         * @param top Camera frustum top plane.
         * @param bottom Camera frustum bottom plane.
         * @param near Camera frustum near plane.
         * @param far Camera frustum far plane.
         */
        constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number);

        /**
         * Camera frustum left plane.
         */
        left: number;

        /**
         * Camera frustum right plane.
         */
        right: number;

        /**
         * Camera frustum top plane.
         */
        top: number;

        /**
         * Camera frustum bottom plane.
         */
        bottom: number;

        /**
         * Camera frustum near plane.
         */
        near: number;

        /**
         * Camera frustum far plane.
         */
        far: number;

        /**
         * Updates the camera projection matrix. Must be called after change of parameters.
         */
        updateProjectionMatrix(): void;
    }

    /**
     * Camera with perspective projection.
     *
     * @example
     * var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
     * scene.add( camera );
     *
     * @see <a  href="https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js">src/cameras/PerspectiveCamera.js</a>
     */
    export class PerspectiveCamera extends Camera {
        constructor(fov?: number, aspect?: number, near?: number, far?: number);
        fov: number;
        aspect: number;
        near: number;
        far: number;
        setLens(focalLength: number, frameHeight?: number): void;
        setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
        updateProjectionMatrix(): void;
    }

    // Lights //////////////////////////////////////////////////////////////////////////////////

    /**
     * Abstract base class for lights.
     */
    export class Light extends Object3D {
        constructor(hex?: number);
        color: Color;
    }

    /**
     * This light's color gets applied to all the objects in the scene globally.
     * 
     * @example
     * var light = new THREE.AmbientLight( 0x404040 ); // soft white light 
     * scene.add( light );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js">src/lights/AmbientLight.js</a>
     */
    export class AmbientLight extends Light {
        constructor(hex?: number);
    }

    export class RenderTarget {
    }

    /**
     * Affects objects using MeshLambertMaterial or MeshPhongMaterial.
     *
     * @example
     * // White directional light at half intensity shining from the top.  
     * var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 ); 
     * directionalLight.position.set( 0, 1, 0 ); 
     * scene.add( directionalLight );
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js">src/lights/DirectionalLight.js</a>
     */
    export class DirectionalLight extends Light {

        constructor(hex?: number, intensity?: number);

        /**
         * Direction of the light is normalized vector from position to (0,0,0).
         * Default — new THREE.Vector3().
         */
        position: Vector3;

        /**
         * Target used for shadow camera orientation.
         */
        target: Object3D;

        /**
         * Light's intensity.
         * Default — 1.0.
         */
        intensity: number;

        /**
         * If set to true light will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right.
         * Default — false.
         */
        castShadow: bool;

        /**
         * If set to true light will only cast shadow but not contribute any lighting (as if intensity was 0 but cheaper to compute).
         * Default — false.
         */
        onlyShadow: bool;

        /**
         * Orthographic shadow camera frustum parameter.
         * Default — 50.
         */
        shadowCameraNear: number;

        /**
         * Orthographic shadow camera frustum parameter.
         * Default — 5000.
         */
        shadowCameraFar: number;

        /**
         * Orthographic shadow camera frustum parameter.
         * Default — -500.
         */
        shadowCameraLeft: number;

        /**
         * Orthographic shadow camera frustum parameter.
         * Default — 500.
         */
        shadowCameraRight: number;

        /**
         * Orthographic shadow camera frustum parameter.
         * Default — 500.
         */
        shadowCameraTop: number;

        /**
         * Orthographic shadow camera frustum parameter.
         * Default — -500.
         */
        shadowCameraBottom: number;

        /**
         * Show debug shadow camera frustum.
         * Default — false.
         */
        shadowCameraVisible: bool;

        /**
         * Shadow map bias.
         * Default — 0.
         */
        shadowBias: number;

        /**
         * Darkness of shadow casted by this light (from 0 to 1).
         * Default — 0.5.
         */
        shadowDarkness: number;

        /**
         * Shadow map texture width in pixels.
         * Default — 512.
         */
        shadowMapWidth: number;

        /**
         * Shadow map texture height in pixels.
        * Default — 512.
         */
        shadowMapHeight: number;

        /**
         * Default — false.
         */
        shadowCascade: bool;

        /**
         * Three.Vector3( 0, 0, -1000 ).
         */
        shadowCascadeOffset: Vector3;

        /**
         * Default — 2.
         */
        shadowCascadeCount: number;

        /**
         * Default — [ 0, 0, 0 ].
         */
        shadowCascadeBias: number[];

        /**
         * Default — [ 512, 512, 512 ].
         */
        shadowCascadeWidth: number[];

        /**
         * Default — [ 512, 512, 512 ].
         */
        shadowCascadeHeight: number[];

        /**
         * Default — [ -1.000, 0.990, 0.998 ].
         */
        shadowCascadeNearZ: number[];

        /**
         * Default — [ 0.990, 0.998, 1.000 ].
         */
        shadowCascadeFarZ: number[];

        /**
         * Default — [ ].
         */
        shadowCascadeArray: DirectionalLight[];

        /**
         * Default — null.
         */
        shadowMap: RenderTarget;

        /**
         * Default — null.
         */
        shadowMapSize: number;

        /**
         * Default — null.
         */
        shadowCamera: Camera;

        /**
         * Default — null.
         */
        shadowMatrix: Matrix4;
    }

    export class HemisphereLight extends Light {
        constructor(skyColorHex?: number, groundColorHex?: number, intensity?: number);
        groundColor: Color;
        position: Vector3;
        intensity: number;
    }

    /**
     * Affects objects using {@link MeshLambertMaterial} or {@link MeshPhongMaterial}.
     *
     * @example
     * var light = new THREE.PointLight( 0xff0000, 1, 100 );
     * light.position.set( 50, 50, 50 ); 
     * scene.add( light );
     */
    export class PointLight extends Light {
        constructor(hex?: number, intensity?: number, distance?: number);

        /**
         * Light's position.
         * Default — new THREE.Vector3().
         */
        position: Vector3;

        /*
         * Light's intensity.
         * Default - 1.0.
         */
        intensity: number;

        /**
         * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
         * Default — 0.0.
         */
        distance: number;
    }

    /**
     * A point light that can cast shadow in one direction.
     *
     * @example
     * // white spotlight shining from the side, casting shadow  
     * var spotLight = new THREE.SpotLight( 0xffffff );
     * spotLight.position.set( 100, 1000, 100 );
     * spotLight.castShadow = true; 
     * spotLight.shadowMapWidth = 1024;
     * spotLight.shadowMapHeight = 1024; 
     * spotLight.shadowCameraNear = 500;
     * spotLight.shadowCameraFar = 4000; 
     * spotLight.shadowCameraFov = 30; 
     * scene.add( spotLight );
     */
    export class SpotLight extends Light {
        constructor(hex?: number, intensity?: number, distance?: number, angle?: number, exponent?: number);

        /**
         * Light's position.
         * Default — new THREE.Vector3().
         */
        position: Vector3;

        /**
         * Spotlight focus points at target.position.
         * Default position — (0,0,0).
         */
        target: Object3D;

        /**
         * Light's intensity.
         * Default — 1.0.
         */
        intensity: number;

        /**
         * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
         * Default — 0.0.
         */
        distance: number;

        /*
         * Maximum extent of the spotlight, in radians, from its direction.
         * Default — Math.PI/2.
         */
        angle: number;

        /**
         * Rapidity of the falloff of light from its target direction.
         * Default — 10.0.
         */
        exponent: number;

        /**
         * If set to true light will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right.
         * Default — false.
         */
        castShadow: bool;

        /**
         * If set to true light will only cast shadow but not contribute any lighting (as if intensity was 0 but cheaper to compute).
         * Default — false.
         */
        onlyShadow: bool;

        /**
         * Perspective shadow camera frustum near parameter.
         * Default — 50.
         */
        shadowCameraNear: number;

        /**
         * Perspective shadow camera frustum far parameter.
         * Default — 5000.
         */
        shadowCameraFar: number;

        /**
         * Perspective shadow camera frustum field of view parameter.
         * Default — 50.
         */
        shadowCameraFov: number;

        /**
         * Show debug shadow camera frustum.
         * Default — false.
         */
        shadowCameraVisible: bool;

        /**
         * Shadow map bias.
         * Default — 0.
         */
        shadowBias: number;

        /**
         * Darkness of shadow casted by this light (from 0 to 1).
         * Default — 0.5.
         */
        shadowDarkness: number;

        /**
         * Shadow map texture width in pixels.
         * Default — 512.
         */
        shadowMapWidth: number;

        /**
         * Shadow map texture height in pixels.
         * Default — 512.
         */
        shadowMapHeight: number;

        shadowMap: RenderTarget;
        shadowMapSize: Vector2;
        shadowCamera: Camera;
        shadowMatrix: Matrix4;
    }

    // Loaders //////////////////////////////////////////////////////////////////////////////////

    export interface Progress {
        total: number;
        loaded: number;
    }

    /**
     * Base class for implementing loaders.
     *
     * Events:
     *     load
     *         Dispatched when the image has completed loading
     *         content — loaded image
     * 
     *     error
     *
     *          Dispatched when the image can't be loaded
     *          message — error message
     */
    export class Loader {
        constructor(showStatus?: bool);

        /**
         * If true, show loading status in the statusDomElement.
         */
        showStatus: bool;

        /**
         * This is the recipient of status messages.
         */
        statusDomElement: HTMLElement;

        /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
        onLoadStart: () => void;

        /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
        onLoadProgress: () => void;

        /**
         * Will be called when load completes.
         * The default is a function with empty body.
         */
        onLoadComplete: () => void;

        /**
         * default — null.
         * If set, assigns the crossOrigin attribute of the image to the value of crossOrigin, prior to starting the load.
         */
        crossOrigin: string;
        addStatusElement(): HTMLElement;
        updateProgress(progress: Progress): void;
        extractUrlBase(url: string): string;
        initMaterials(materials: Material[], texturePath: string): Material[];
        needsTangents(materials: Material[]): bool;
        createMaterial(m: Material, texturePath: string): bool;
    }

    /**
     * A loader for loading an image.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    export class ImageLoader extends EventDispatcher {
        constructor();
        crossOrigin: string;

        /**
         * Begin loading from url
         * @param url
         */
        load(url: string, image?: HTMLImageElement): void;
    }


    /**
     * A loader for loading objects in JSON format.
     */
    export class JSONLoader extends Loader {
        constructor(showStatus?: bool);
        withCredentials: bool;

        /**
         * @param url
         * @param callback. This function will be called with the loaded model as an instance of geometry when the load is completed.
         * @param texturePath If not specified, textures will be assumed to be in the same folder as the Javascript model file.
         */
        load(url: string, callback: (geometry: Geometry, materials: Material[]) => void , texturePath?: string): void;

        loadAjaxJSON(context: JSONLoader, url: string, callback: (geometry: Geometry, materials: Material[]) => void , texturePath?: string, callbackProgress?: (progress: Progress) => void ): void;
        createModel(json: any, callback: (geometry: Geometry, materials: Material[]) => void , texturePath?: string): void;
    }

    export class LoadingMonitor extends EventDispatcher {
        constructor();
        add(loader: Loader): void;
    }

    /**
     * A loader for loading a complete scene out of a JSON file.
     */
    export class SceneLoader {
        constructor();

        /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
        onLoadStart: () => void;

        /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
        onLoadProgress: () => void;

        /**
         * Will be called when each element in the scene completes loading.
         * The default is a function with empty body.
         */
        onLoadComplete: () => void;

        /**
         * Will be called when load completes.
         * The default is a function with empty body.
         */
        callbackSync: () => void;

        /**
         * Will be called as load progresses.
         * The default is a function with empty body.
         */
        callbackProgress: () => void;

        /**
         * @param url
         * @param callbackFinished This function will be called with the loaded model as an instance of scene when the load is completed.
         */
        load(url: string, callbackFinished: (scene: Scene) => void ): void;
    }

    /**
     * Class for loading a texture.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    export class TextureLoader extends EventDispatcher {
        constructor();

        /**
         * Begin loading from url
         *
         * @param url
         */
        load(url: string): void;
    }

    // Materials //////////////////////////////////////////////////////////////////////////////////

    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
    export class Material {
        constructor();

        /**
         * Unique number of this material instance.
         */
        id: number;

        /**
         * Material name. Default is an empty string.
         */
        name: string;

        /**
         * Opacity. Default is 1.
         */
        opacity: number;

        /**
         * Defines whether this material is transparent. This has an effect on rendering, as transparent objects need an special treatment, and are rendered after the opaque (i.e. non transparent) objects. For a working example of this behaviour, check the {@link WebGLRenderer} code.
         * Default is false.
         */
        transparent: bool;

        /**
         * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
         */
        blending: Blending;

        /**
         * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
         */
        blendSrc: BlendingDstFactor;

        /**
         * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
         */
        blendDst: BlendingSrcFactor;

        /**
         * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is AddEquation.
         */
        blendEquation: BlendingEquation;

        /**
         * Whether to have depth test enabled when rendering this material. Default is true.
         */
        depthTest: bool;

        /**
         * Whether rendering this material has any effect on the depth buffer. Default is true.
         * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
         */
        depthWrite: bool;

        /**
         * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
         */
        polygonOffset: bool;

        /**
         * Sets the polygon offset factor. Default is 0.
         */
        polygonOffsetFactor: number;

        /** 
         * Sets the polygon offset units. Default is 0.
         */
        polygonOffsetUnits: number;

        /** 
         * Sets the alpha value to be used when running an alpha test. Default is 0.
         */
        alphaTest: number;

        /**
         * Enables/disables overdraw. If enabled, polygons are drawn slightly bigger in order to fix antialiasing gaps when using the CanvasRenderer. Default is false.
         */
        overdraw: bool;

        /**
         * Defines whether this material is visible. Default is true.
         */
        visible: bool;

        /**
         * Defines which of the face sides will be rendered - front, back or both.
         * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
         */
        side: Side;

        /**
         * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
         * This property is automatically set to true when instancing a new material.
         */
        needsUpdate: bool;

        clone(): Material;

        dispose(): void;
    }

    var MaterialLibrary: Material[];
    var MaterialIdCount: number;

    export interface LineBasicMaterialParameters {
        color?: number;
        opacity?: number;
        blending?: Blending;
        depthTest?: bool;
        linewidth?: number;
        linecap?: string;
        linejoin?: string;
        vertexColors?: bool;
        fog?: bool;
    }

    export class LineBasicMaterial extends Material {
        constructor(parameters?: LineBasicMaterialParameters);
        color: Color;
        linewidth: number;
        linecap: string;
        linejoin: string;
        vertexColors: bool;
        fog: bool;
        clone(): LineBasicMaterial;
    }

    export interface LineDashedMaterialParameters {
        color?: number;
        opacity?: number;
        blending?: Blending;
        depthTest?: bool;
        linewidth?: number;
        scale?: number;
        dashSize?: number;
        gapSize?: number;
        vertexColors?: number;
        fog?: bool;
    }

    export class LineDashedMaterial extends Material {
        constructor(parameters?: LineDashedMaterialParameters);
        color: Color;
        linewidth: number;
        scale: number;
        dashSize: number;
        gapSize: number;
        vertexColors: bool;
        fog: bool;
        clone(): LineDashedMaterial;
    }


    /**
     * parameters is an object with one or more properties defining the material's appearance.
     */
    export interface MeshBasicMaterialParameters {
        /**
         * geometry color in hexadecimal. Default is 0xffffff.
         */
        color?: number;
        opacity?: number;
        map?: Texture;
        /**
         * Default is null.
         */
        lightMap?: Texture;
        /**
         * Default is null.
         */
        specularMap?: Texture;
        /**
         * Default is null.
         */
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        /** 
         * Define shading type. Default is THREE.SmoothShading.
         */
        shading?: Shading;
        blending?: Blending;
        depthTest?: bool;
        /**
         * render geometry as wireframe. Default is false.
         */
        wireframe?: bool;
        /**
         * Line thickness. Default is 1.
         */
        wireframeLinewidth?: number;
        /**
         *  Define whether the material uses vertex colors, or not. Default is false.
         */
        vertexColors?: Colors;
        /**
         * Default is false.
         */
        skinning?: bool;
        /**
         * Default is false.
         */
        morphTargets?: bool;
        /**
         * Define whether the material color is affected by global fog settings. Default is true.
         */
        fog?: bool;
    }

    export class MeshBasicMaterial extends Material {
        constructor(parameters?: MeshBasicMaterialParameters);
        color: Color;
        map: Texture;
        lightMap: Texture;
        specularMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        fog: bool;
        shading: Shading;
        wireframe: bool;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        skinning: bool;
        morphTargets: bool;
        clone(): MeshBasicMaterial;
    }

    export interface MeshDepthMaterialParameters {
        opacity?: number;
        blending?: Blending;
        depthTest?: bool;
        wireframe?: bool;
        wireframeLinewidth?: number;
    }

    export class MeshDepthMaterial extends Material {
        constructor(parameters?: MeshDepthMaterialParameters);
        wireframe: bool;
        wireframeLinewidth: number;
        clone(): MeshDepthMaterial;
    }

    export class MeshFaceMaterial extends Material {
        constructor(materials?: Material[]);
        materials: Material[];
        clone(): MeshFaceMaterial;
    }

    export interface MeshLambertMaterialParameters {
        color?: number;
        ambient?: number;
        emissive?: number;
        opacity?: number;
        map?: Texture;
        lightMap?: Texture;
        specularMap?: Texture;
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        shading?: Shading;
        blending?: Blending;
        depthTest?: bool;
        wireframe?: bool;
        wireframeLinewidth?: number;
        vertexColors?: Colors;
        skinning?: bool;
        morphTargets?: bool;
        morphNormals?: bool;
        fog?: bool;
    }

    export class MeshLambertMaterial extends Material {
        constructor(parameters?: MeshLambertMaterialParameters);
        color: Color;
        ambient: Color;
        emissive: Color;
        wrapAround: bool;
        wrapRGB: Vector3;
        map: Texture;
        lightMap: Texture;
        specularMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        fog: bool;
        shading: Shading;
        wireframe: bool;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        skinning: bool;
        morphTargets: bool;
        morphNormals: bool;
        clone(): MeshLambertMaterial;
    }

    export interface MeshNormalMaterialParameters {
        opacity?: number;
        shading?: Shading;
        blending?: Blending;
        depthTest?: bool;
        wireframe?: bool;
        wireframeLinewidth?: number;
    }

    export class MeshNormalMaterial extends Material {
        constructor(parameters?: MeshNormalMaterialParameters);
        shading: Shading;
        wireframe: bool;
        wireframeLinewidth: number;
        clone(): MeshNormalMaterial;
    }

    export interface MeshPhongMaterialParameters {
        color?: number;
        ambient?: number;
        emissive?: number;
        specular?: number;
        shininess?: number;
        opacity?: number;
        map?: Texture;
        lightMap?: Texture;
        bumpMap?: Texture;
        bumpScale?: number;
        normalMap?: Texture;
        normalScale?: Vector2;
        specularMap?: Texture;
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        shading?: Shading;
        blending?: Blending;
        depthTest?: bool;
        wireframe?: bool;
        wireframeLinewidth?: number;
        vertexColors?: Colors;
        skinning?: bool;
        morphTargets?: bool;
        morphNormals?: bool;
        fog?: bool;
    }

    export class MeshPhongMaterial extends Material {
        constructor(parameters?: MeshPhongMaterialParameters);
        color: Color; // diffuse
        ambient: Color;
        emissive: Color;
        specular: Color;
        shininess: number;
        metal: bool;
        perPixel: bool;
        wrapAround: bool;
        wrapRGB: Vector3;
        map: Texture;
        lightMap: Texture;
        bumpMap: Texture;
        bumpScale: number;
        normalMap: Texture;
        normalScale: Vector2;
        specularMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        fog: bool;
        shading: Shading;
        wireframe: bool;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        skinning: bool;
        morphTargets: bool;
        morphNormals: bool;
        clone(): MeshPhongMaterial;
    }

    export interface ParticleBasicMaterialParameters {
        color?: number;
        opacity?: number;
        map?: Texture;
        size?: number;
        blending?: Blending;
        depthTest?: bool;
        vertexColors?: bool;
        fog?: bool;
    }

    export class ParticleBasicMaterial extends Material {
        constructor(parameters?: ParticleBasicMaterialParameters);
        color: Color;
        map: Texture;
        size: number;
        sizeAttenuation: bool;
        vertexColors: bool;
        fog: bool;
        clone(): ParticleBasicMaterial;
    }

    export interface ParticleCanvasMaterialParameters {
        color?: number;
        program?: (context: CanvasRenderingContext2D, color: Color) => void;
        opacity?: number;
        blending?: Blending;
    }

    export class ParticleCanvasMaterial extends Material {
        constructor(parameters?: ParticleCanvasMaterialParameters);
        color: Color;
        program: (context: CanvasRenderingContext2D, color: Color) => void;
        clone(): ParticleCanvasMaterial;
    }

    export class ParticleDOMMaterial extends Material {
        constructor(element: HTMLElement);
        clone(): ParticleDOMMaterial;
    }




    export interface Uniforms {
        [name: string]: { type: string; value: Object; };
        //[name:string]:{type:UniformType;value:Object;};
    }

    export interface ShaderMaterialParameters {
        fragmentShader?: string;
        vertexShader?: string;
        uniforms?: Uniforms;
        defines?: { [label: string]: string; };
        shading?: Shading;
        blending?: Blending;
        depthTest?: bool;
        wireframe?: bool;
        wireframeLinewidth?: number;
        lights?: bool;
        vertexColors?: Colors;
        skinning?: bool;
        morphTargets?: bool;
        morphNormals?: bool;
        fog?: bool;
    }

    export class ShaderMaterial extends Material {
        constructor(parameters?: ShaderMaterialParameters);
        fragmentShader: string;
        vertexShader: string;
        uniforms: Uniforms;
        defines: { [label: string]: string; };
        attributes: { [name: string]: Object; };
        shading: Shading;
        wireframe: bool;
        wireframeLinewidth: number;
        fog: bool;
        lights: bool;
        vertexColors: Colors;
        skinning: bool;
        morphTargets: bool;
        morphNormals: bool;
        clone(): ShaderMaterial;
    }

    // Objects //////////////////////////////////////////////////////////////////////////////////

    export class Bone extends Object3D {
        constructor(belongsToSkin: SkinnedMesh);
        skin: SkinnedMesh;
        skinMatrix: Matrix4;
        update(parentSkinMatrix?: Matrix4, forceUpdate?: bool): void;
    }

    export class Line extends Object3D {
        constructor(geometry?: Geometry, material?: LineDashedMaterial, type?: number);
        constructor(geometry?: Geometry, material?: LineBasicMaterial, type?: number);
        constructor(geometry?: Geometry, material?: ShaderMaterial, type?: number);
        geometry: Geometry;
        material: Material;
        type: number;
        clone(object?: Line): Line;
    }

    export class LOD extends Object3D {
        constructor();
        LODs: Object3D[];
        addLevel(object3D: Object3D, visibleAtDistance?: number): void;
        update(camera: Camera): void;
        clone(): LOD;
    }

    export class Mesh extends Object3D {
        constructor(geometry?: Geometry, material?: MeshBasicMaterial);
        constructor(geometry?: Geometry, material?: MeshDepthMaterial);
        constructor(geometry?: Geometry, material?: MeshFaceMaterial);
        constructor(geometry?: Geometry, material?: MeshLambertMaterial);
        constructor(geometry?: Geometry, material?: MeshNormalMaterial);
        constructor(geometry?: Geometry, material?: MeshPhongMaterial);
        constructor(geometry?: Geometry, material?: ShaderMaterial);
        geometry: Geometry;
        material: Material;
        morphTargetBase: number;
        morphTargetForcedOrder: number;
        morphTargetInfluences: number[];
        morphTargetDictionary: { [key: string]: number; };
        updateMorphTargets(): void;
        getMorphTargetIndexByName(name: string): number;
        clone(object?: Mesh): Mesh;
    }

    export class MorphAnimMesh extends Mesh {
        constructor(geometry?: Geometry, material?: MeshBasicMaterial);
        constructor(geometry?: Geometry, material?: MeshDepthMaterial);
        constructor(geometry?: Geometry, material?: MeshFaceMaterial);
        constructor(geometry?: Geometry, material?: MeshLambertMaterial);
        constructor(geometry?: Geometry, material?: MeshNormalMaterial);
        constructor(geometry?: Geometry, material?: MeshPhongMaterial);
        constructor(geometry?: Geometry, material?: ShaderMaterial);
        duration: number; // milliseconds
        mirroredLoop: bool;
        time: number;
        lastKeyframe: number;
        currentKeyframe: number;
        direction: number;
        directionBackwards: bool;
        setFrameRange(start: number, end: number): void;
        setDirectionForward(): void;
        setDirectionBackward(): void;
        parseAnimations(): void;
        setAnimationLabel(label: string, start: number, end: number): void;
        playAnimation(label: string, fps: number): void;
        updateAnimation(delta: number): void;
        clone(object?: MorphAnimMesh): MorphAnimMesh;
    }

    export class Particle extends Object3D {
        constructor(material: Material);
        clone(object?: Particle): Particle;
    }

    /**
     * A class for displaying particles in the form of variable size points. For example, if using the WebGLRenderer, the particles are displayed using GL_POINTS.
     * 
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/objects/ParticleSystem.js">src/objects/ParticleSystem.js</a>
     */
    export class ParticleSystem extends Object3D {

        /**
         * @param geometry An instance of Geometry.
         * @param material An instance of Material (optional).
         */
        constructor(geometry: Geometry, material?: ParticleBasicMaterial);
        constructor(geometry: Geometry, material?: ParticleCanvasMaterial);
        constructor(geometry: Geometry, material?: ParticleDOMMaterial);
        constructor(geometry: Geometry, material?: ShaderMaterial);

        /**
         * An instance of Geometry, where each vertex designates the position of a particle in the system.
         */
        geometry: Geometry;

        /**
         * An instance of Material, defining the object's appearance. Default is a ParticleBasicMaterial with randomised colour.
         */
        material: Material;

        /**
         * Specifies whether the particle system will be culled if it's outside the camera's frustum. By default this is set to false.
         */
        sortParticles: bool;

        clone(object?: ParticleSystem): ParticleSystem;
    }

    export class Ribbon extends Object3D {
        constructor(geometry: Geometry, material: Material);
        geometry: Geometry;
        material: Material;
        clone(object?: Ribbon): Ribbon;
    }

    export class SkinnedMesh extends Mesh {
        constructor(geometry?: Geometry, material?: MeshBasicMaterial);
        constructor(geometry?: Geometry, material?: MeshDepthMaterial);
        constructor(geometry?: Geometry, material?: MeshFaceMaterial);
        constructor(geometry?: Geometry, material?: MeshLambertMaterial);
        constructor(geometry?: Geometry, material?: MeshNormalMaterial);
        constructor(geometry?: Geometry, material?: MeshPhongMaterial);
        constructor(geometry?: Geometry, material?: ShaderMaterial);
        useVertexTexture: bool;
        identityMatrix: Matrix4;
        bones: Bone[];
        boneMatrices: Float32Array;
        boneTextureWidth: number;
        boneTextureHeight: number;
        boneTexture: DataTexture;
        addBone(bone?: Bone): Bone;
        updateMatrixWorld(force?: bool): void;
        pose(): void;
        clone(object?: SkinnedMesh): SkinnedMesh;
        static offsetMatrix: Matrix4;
    }

    export interface SpriteParameters {
        color?: Color;
        map?: Texture;
        blending?: Blending;
        blendSrc?: BlendingSrcFactor;
        blendDst?: BlendingDstFactor;
        blendEquation?: BlendingEquation;
        useScreenCoordinates?: bool;
        mergeWith3D?: bool;
        affectedByDistance?: bool;
        alignment?: Vector2;
        fog?: bool;
        uvOffset?: Vector2;
        uvScale?: Vector2;
        depthTest?: bool;
        sizeAttenuation?: bool;
        scaleByViewport?: bool;
    }

    export class SpriteMaterial extends Material {
        constructor(parameters?: SpriteParameters);
        color: Color;
        map: Texture;
        blending: Blending;
        blendEquation: BlendingEquation;
        useScreenCoordinates: bool;
        scaleByViewport: bool;
        alignment: Vector2;
        fog: bool;
        uvOffset: Vector2;
        uvScale: Vector2;
        depthTest: bool;
        sizeAttenuation: bool;
        clone(): SpriteMaterial;
    }

    export class Sprite extends Object3D {
        constructor(material?: SpriteMaterial);
        updateMatrix(): void;
        clone(object?: Sprite): Sprite;
    }
    export class SpriteAlignment {
        static topLeft: Vector2;
        static topCenter: Vector2;
        static topRight: Vector2;
        static centerLeft: Vector2;
        static center: Vector2;
        static centerRight: Vector2;
        static bottomLeft: Vector2;
        static bottomCenter: Vector2;
        static bottomRight: Vector2;
    }

    // Renderers //////////////////////////////////////////////////////////////////////////////////

    export interface Renderer {
        render(scene: Scene, camera: Camera): void;
    }

    export interface CanvasRendererParameters {
        canvas?: HTMLCanvasElement;
        devicePixelRatio?: number;
    }

    export class CanvasRenderer implements Renderer {
        constructor(parameters?: CanvasRendererParameters);
        domElement: HTMLCanvasElement;
        autoClear: bool;
        sortObjects: bool;
        sortElements: bool;
        devicePixelRatio: number;
        info: { render: { vertices: number; faces: number; }; };
        setSize(width: number, height: number): void;
        setClearColor(color: Color, opacity?: number): void;
        setClearColorHex(hex: number, opacity?: number): void;
        getMaxAnisotropy(): number;
        clear(): void;
        render(scene: Scene, camera: Camera): void;
    }

    export interface ShaderChunk {
        [name: string]: string;
        fog_pars_fragment: string;
        fog_fragment: string;
        envmap_pars_fragment: string;
        envmap_fragment: string;
        envmap_pars_vertex: string;
        worldpos_vertex: string;
        envmap_vertex: string;
        map_particle_pars_fragment: string;
        map_particle_fragment: string;
        map_pars_vertex: string;
        map_pars_fragment: string;
        map_vertex: string;
        map_fragment: string;
        lightmap_pars_fragment: string;
        lightmap_pars_vertex: string;
        lightmap_fragment: string;
        lightmap_vertex: string;
        bumpmap_pars_fragment: string;
        normalmap_pars_fragment: string;
        specularmap_pars_fragment: string;
        specularmap_fragment: string;
        lights_lambert_pars_vertex: string;
        lights_lambert_vertex: string;
        lights_phong_pars_vertex: string;
        lights_phong_vertex: string;
        lights_phong_pars_fragment: string;
        lights_phong_fragment: string;
        color_pars_fragment: string;
        color_fragment: string;
        color_pars_vertex: string;
        color_vertex: string;
        skinning_pars_vertex: string;
        skinbase_vertex: string;
        skinning_vertex: string;
        morphtarget_pars_vertex: string;
        morphtarget_vertex: string;
        default_vertex: string;
        morphnormal_vertex: string;
        skinnormal_vertex: string;
        defaultnormal_vertex: string;
        shadowmap_pars_fragment: string;
        shadowmap_fragment: string;
        shadowmap_pars_vertex: string;
        shadowmap_vertex: string;
        alphatest_fragment: string;
        linear_to_gamma_fragment: string;
    }

    export var ShaderChunk: ShaderChunk;

    export interface RendererPlugin {
        init(renderer: WebGLRenderer): void;
        render(scene: Scene, camera: Camera, currentWidth: number, currentHeight: number): void;
    }

    export interface WebGLRendererParameters {
        /** 
         * A Canvas where the renderer draws its output.
         */
        canvas?: HTMLCanvasElement;

        /**
         *  shader precision. Can be "highp", "mediump" or "lowp".
         */
        precision?: string;

        /**
         * default is true.
         */
        alpha?: bool;

        /**
         * default is true.
         */
        premultipliedAlpha?: bool;

        /**
         * default is false.
         */
        antialias?: bool;

        /**
         * default is true.
         */
        stencil?: bool;

        /**
         * default is false.
         */
        preserveDrawingBuffer?: bool;

        /**
         * default is 0x000000.
         */
        clearColor?: number;

        /**
         * default is 0.
         */
        clearAlpha?: number;

        devicePixelRatio?: number;
    }


    /**
     * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
     * This renderer has way better performance than CanvasRenderer.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js">src/renderers/WebGLRenderer.js</a>
     */
    export class WebGLRenderer implements Renderer {
        /**
         * parameters is an optional object with properties defining the renderer's behaviour. The constructor also accepts no parameters at all. In all cases, it will assume sane defaults when parameters are missing.
         */
        constructor(parameters?: WebGLRendererParameters);

        /**
         * A Canvas where the renderer draws its output.
         * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
         */
        domElement: HTMLCanvasElement;

        /**
         * The HTML5 Canvas's 'webgl' context obtained from the canvas where the renderer will draw.
         */
        //  If you are using three.d.ts with other complete definitions of webgl, context:WebGLRenderingContext is suitable.
        //context:WebGLRenderingContext;
        context: any;

        /**
         * Defines whether the renderer should automatically clear its output before rendering.
         */
        autoClear: bool;

        /**
         * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
         */
        autoClearColor: bool;

        /**
         * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
         */
        autoClearDepth: bool;

        /**
         * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
         */
        autoClearStencil: bool;

        /**
         * Defines whether the renderer should sort objects. Default is true.
         */
        sortObjects: bool;

        /**
         * Defines whether the renderer should auto update objects. Default is true.
         */
        autoUpdateObjects: bool;

        /**
         * Defines whether the renderer should auto update the scene. Default is true.
         */
        autoUpdateScene: bool;

        /**
         * Default is false.
         */
        gammaInput: bool;

        /** 
         * Default is false.
         */
        gammaOutput: bool;

        /**
         * Default is false.
         */
        physicallyBasedShading: bool;

        /**
         * Default is false.
         */
        shadowMapEnabled: bool;

        /**
         * Default is true.
         */
        shadowMapAutoUpdate: bool;

        /**
         * Defines shadow map type (unfiltered, percentage close filtering, percentage close filtering with bilinear filtering in shader)
         * Options are THREE.BasicShadowMap, THREE.PCFShadowMap, THREE.PCFSoftShadowMap. Default is THREE.PCFShadowMap.
         */
        shadowMapType: ShadowMapType;

        shadowMapSoft: bool;

        /**
         * Default is true
         */
        shadowMapCullFace: CullFace;

        /**
         * Default is false.
         */
        shadowMapDebug: bool;

        /**
         * Default is false. 
         */
        shadowMapCascade: bool;

        /**
         * Default is 8.
         */
        maxMorphTargets: number;

        /**
         * Default is 4.
         */
        maxMorphNormals: number;

        /**
         * Default is true.
         */
        autoScaleCubemaps: bool;

        /**
         * An array with render plugins to be applied before rendering.
         * Default is an empty array, or [].
         */
        renderPluginsPre: RendererPlugin[];

        /**
         * An array with render plugins to be applied after rendering.
         * Default is an empty array, or [].
         */
        renderPluginsPost: RendererPlugin[];

        devicePixelRatio: number;

        /**
         * An object with a series of statistical information about the graphics board memory and the rendering process. Useful for debugging or just for the sake of curiosity. The object contains the following fields:
         */
        info: {
            memory: {
                programs: number;
                geometries: number;
                textures: number;
            };
            render: {
                calls: number;
                vertices: number;
                faces: number;
                points: number;
            };
        };

        /**
         * Return the WebGL context.
         */
        getContext(): WebGLRenderingContext;

        /**
         * Return a Boolean true if the context supports vertex textures.
         */
        supportsVertexTextures(): bool;

        getMaxAnisotropy(): number;

        /**
         * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
         */
        setSize(width: number, height: number): void;

        /**
         * Sets the viewport to render from (x, y) to (x + width, y + height).
         */
        setViewport(x?: number, y?: number, width?: number, height?: number): void;

        /**
         * Sets the scissor area from (x, y) to (x + width, y + height).
         */
        setScissor(x: number, y: number, width: number, height: number): void;

        /** 
         * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
         */
        enableScissorTest(enable: bool): void;

        /**
         * Sets the clear color, using hex for the color and alpha for the opacity.
         * 
         * @example
         * // Creates a renderer with black background 
         * var renderer = new THREE.WebGLRenderer(); 
         * renderer.setSize(200, 100); 
         * renderer.setClearColorHex(0x000000, 1);
         */
        setClearColorHex(hex: number, alpha: number): void;

        /**
         * Sets the clear color, using color for the color and alpha for the opacity.
         */
        setClearColor(color: Color, alpha: number): void;

        /**
         * Returns a THREE.Color instance with the current clear color.
         */
        getClearColor(): Color;

        /**
         * Returns a float with the current clear alpha. Ranges from 0 to 1.
         */
        getClearAlpha(): number;

        /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * If no parameters are passed, no buffer will be cleared.
         */
        clear(color?: bool, depth?: bool, stencil?: bool): void;

        /**
         * Initialises the postprocessing plugin, and adds it to the renderPluginsPost array.
         */
        addPostPlugin(plugin: RendererPlugin): void;

        /**
         * Initialises the preprocessing plugin, and adds it to the renderPluginsPre array.
         */
        addPrePlugin(plugin: RendererPlugin): void;

        deallocateObject(object: Object3D): void;

        deallocateTexture(texture: Texture): void;

        deallocateRenderTarget(renderTarget: RenderTarget): void;

        /**
         * Tells the shadow map plugin to update using the passed scene and camera parameters.
         * 
         * @param scene an instance of Scene
         * @param camera — an instance of Camera
         */
        updateShadowMap(scene: Scene, camera: Camera): void;

        renderBufferImmediate(object: Object3D, program: Object, material: Material): void;

        renderBufferDirect(camera: Camera, lights: Light[], fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;

        renderBuffer(camera: Camera, lights: Light[], fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;

        /**
         * Render a scene using a camera.
         * The render is done to the renderTarget (if specified) or to the canvas as usual.
         * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
         */
        render(scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: bool): void;
        renderImmediateObject(camera: Camera, lights: Light[], fog: Fog, material: Material, object: Object3D): void;
        initWebGLObjects(scene: Scene): void;
        initMaterial(material: Material, lights: Light[], fog: Fog, object: Object3D): void;

        /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param cullFace "back", "front", "front_and_back", or false. 
         * @param frontFace "ccw" or "cw
         */
        setFaceCulling(cullFace?: string, frontFace?: FrontFaceDirection): void;
        setMaterialFaces(material: Material): void;
        setDepthTest(depthTest: bool): void;
        setDepthWrite(depthWrite: bool): void;
        setBlending(blending: Blending, blendEquation: BlendingEquation, blendSrc: BlendingSrcFactor, blendDst: BlendingDstFactor): void;
        setTexture(texture: Texture, slot: number): void;
        setRenderTarget(renderTarget: RenderTarget): void;
    }

    export class WebGLRenderer2 implements Renderer {
        constructor(parameters?: WebGLRendererParameters);
        domElement: HTMLCanvasElement;
        context: WebGLRenderingContext;
        autoClear: bool;
        autoClearColor: bool;
        autoClearDepth: bool;
        autoClearStencil: bool;
        sortObjects: bool;
        autoUpdateObjects: bool;
        autoUpdateScene: bool;
        gammaInput: bool;
        gammaOutput: bool;
        physicallyBasedShading: bool;
        shadowMapEnabled: bool;
        shadowMapAutoUpdate: bool;
        shadowMapType: ShadowMapType;
        shadowMapSoft: bool;
        shadowMapCullFace: CullFace;
        shadowMapDebug: bool;
        shadowMapCascade: bool;
        maxMorphTargets: number;
        maxMorphNormals: number;
        autoScaleCubemaps: bool;
        renderPluginsPre: RendererPlugin[];
        renderPluginsPost: RendererPlugin[];
        devicePixelRatio: number;
        info: {
            memory: {
                programs: number;
                geometries: number;
                textures: number;
            };
            render: {
                calls: number;
                vertices: number;
                faces: number;
                points: number;
            };
        };
        getContext(): WebGLRenderingContext;
        supportsVertexTextures(): bool;
        getMaxAnisotropy(): number;
        setSize(width: number, height: number): void;
        setViewport(x?: number, y?: number, width?: number, height?: number): void;
        setScissor(x: number, y: number, width: number, height: number): void;
        enableScissorTest(enable: bool): void;
        setClearColorHex(hex: number, alpha: number): void;
        setClearColor(color: Color, alpha: number): void;
        getClearColor(): Color;
        getClearAlpha(): number;
        clear(color?: bool, depth?: bool, stencil?: bool): void;
        addPostPlugin(plugin: RendererPlugin): void;
        addPrePlugin(plugin: RendererPlugin): void;
        deallocateObject(object: Object3D): void;
        deallocateTexture(texture: Texture): void;
        deallocateRenderTarget(renderTarget: RenderTarget): void;
        updateShadowMap(scene: Scene, camera: Camera): void;
        renderBufferImmediate(object: Object3D, program: Object, material: Material): void;
        renderBufferDirect(camera: Camera, lights: Light[], fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;
        renderBuffer(camera: Camera, lights: Light[], fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;
        render(scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: bool): void;
        renderImmediateObject(camera: Camera, lights: Light[], fog: Fog, material: Material, object: Object3D): void;
        initWebGLObjects(scene: Scene): void;
        initMaterial(material: Material, lights: Light[], fog: Fog, object: Object3D): void;
        setFaceCulling(cullFace?: string, frontFace?: FrontFaceDirection): void;
        setMaterialFaces(material: Material): void;
        setDepthTest(depthTest: bool): void;
        setDepthWrite(depthWrite: bool): void;
        setBlending(blending: Blending, blendEquation: BlendingEquation, blendSrc: BlendingSrcFactor, blendDst: BlendingDstFactor): void;
        setTexture(texture: Texture, slot: number): void;
        setRenderTarget(renderTarget: RenderTarget): void;
    }

    export interface WebGLRenderTargetOptions {
        wrapS?: Wrapping;
        wrapT?: Wrapping;
        magFilter?: TextureFilter;
        minFilter?: TextureFilter;
        anisotropy?: number; // 1;
        format?: number; // RGBAFormat;
        type?: TextureDataType; // UnsignedByteType;
        depthBuffer?: bool; // true;
        stencilBuffer?: bool; // true;
    }

    export class WebGLRenderTarget extends RenderTarget {
        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);
        width: number;
        height: number;
        wrapS: Wrapping;
        wrapT: Wrapping;
        magFilter: TextureFilter;
        minFilter: TextureFilter;
        anisotropy: number;
        offset: Vector2;
        repeat: Vector2;
        format: number;
        type: number;
        depthBuffer: bool;
        stencilBuffer: bool;
        generateMipmaps: bool;
        clone(): WebGLRenderTarget;
        dispose(): void;
    }

    export class WebGLRenderTargetCube extends WebGLRenderTarget {
        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);
        activeCubeFace: number; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
    }

    // Renderers / Renderables /////////////////////////////////////////////////////////////////////

    export class RenderableFace3 {
        constructor();
        v1: RenderableVertex;
        v2: RenderableVertex;
        v3: RenderableVertex;
        centroidWorld: Vector3;
        centroidScreen: Vector3;
        normalWorld: Vector3;
        vertexNormalsWorld: Vector3[];
        vertexNormalsLength: number;
        color: number;
        material: Material;
        uvs: Vector2[][];
        z: number;
    }

    export class RenderableFace4 {
        constructor();
        v1: RenderableVertex;
        v2: RenderableVertex;
        v3: RenderableVertex;
        v4: RenderableVertex;
        centroidWorld: Vector3;
        centroidScreen: Vector3;
        normalWorld: Vector3;
        vertexNormalsWorld: Vector3[];
        vertexNormalsLength: number;
        color: number;
        material: Material;
        uvs: Vector2[][];
        z: number;
    }

    export class RenderableLine {
        constructor();
        z: number;
        v1: RenderableVertex;
        v2: RenderableVertex;
        material: Material;
    }

    export class RenderableObject {
        constructor();
        object: Object;
        z: number;
    }

    export class RenderableParticle {
        constructor();
        object: Object;
        x: number;
        y: number;
        z: number;
        rotation: number;
        scale: Vector2;
        material: Material;
    }

    export class RenderableVertex {
        constructor();
        positionWorld: Vector3;
        positionScreen: Vector4;
        visible: bool;
        copy(vertex: RenderableVertex): void;
    }

    // Scenes /////////////////////////////////////////////////////////////////////

    export interface IFog {
        name:string;
        color: Color;        
        clone():IFog;
    }


    /**
     * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
     */
    export class Fog implements IFog {
        constructor(hex: number, near?: number, far?: number);
        name:string;
        color: Color;

        /**
         * The minimum distance to start applying fog. Objects that are less than 'near' units from the active camera won't be affected by fog.
         */
        near: number;

        /**
         * The maximum distance at which fog stops being calculated and applied. Objects that are more than 'far' units away from the active camera won't be affected by fog.
         * Default is 1000.
         */
        far: number;

        clone(): Fog;
    }

    /**
     * This class contains the parameters that define linear fog, i.e., that grows exponentially denser with the distance.
     */
    export class FogExp2 implements IFog {
        constructor(hex: number, density?: number);
        name: string;
        color: Color;

        /**
         * Defines how fast the fog will grow dense.
         * Default is 0.00025.
         */
        density: number;

        clone(): FogExp2;
    }

    /**
     * Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
     */
    export class Scene extends Object3D {

        /**
         * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
         */
        fog: IFog;

        /**
         * If not null, it will force everything in the scene to be rendered with that material. Default is null.
         */
        overrideMaterial: Material;

        /**
         * Default is false.
         */
        matrixAutoUpdate: bool;

        constructor();
    }

    // Textures /////////////////////////////////////////////////////////////////////

    export class Texture {
        constructor(
            image: HTMLImageElement,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
        );
        id: number;
        name: string;
        image: Object; // HTMLImageElement or ImageData ;
        mapping: Mapping;
        wrapS: Wrapping;
        wrapT: Wrapping;
        magFilter: TextureFilter;
        minFilter: TextureFilter;
        anisotropy: number;
        format: PixelFormat;
        type: TextureDataType;
        offset: Vector2;
        repeat: Vector2;
        generateMipmaps: bool;
        premultiplyAlpha: bool;
        flipY: bool;
        needsUpdate: bool;
        onUpdate: () => void;
        clone(): Texture;
        dispose(): void;
    }
    var TextureIdCount: number;
    var TextureLibrary: Texture[];


    export class CompressedTexture extends Texture {
        constructor(mipmaps: ImageData[], width: number, height: number, format?: PixelFormat, type?: TextureDataType, mapping?: Mapping, wrapS?: Wrapping, wrapT?: Wrapping, magFilter?: TextureFilter, minFilter?: TextureFilter);
        mipmaps: ImageData[];
        clone(): CompressedTexture;
    }

    export class DataTexture extends Texture {
        constructor(data: ImageData, width: number, height: number, format: PixelFormat, type: TextureDataType, mapping: Mapping, wrapS: Wrapping, wrapT: Wrapping, magFilter: TextureFilter, minFilter: TextureFilter);
        clone(): DataTexture;
    }

    // Extras /////////////////////////////////////////////////////////////////////
    export var ColorUtils: {
        /**
         * Taking a color as input, converts it to HSV, and applies the h, s, v parameters in place, i.e. no new color is returned but the original object is modified.
         * 
         * @param color source color to be adjusted
         * @param h hue change amount
         * @param s saturation change amount
         * @param v value change amount
         */
        adjustHSV(color: Color, h: number, s: number, v: number): void;
    };

    export interface TypefaceData {
        familyName: string;
        cssFontWeight: string;
        cssFontStyle: string;
    }

    export var FontUtils: {
        faces: { [weight: string]: { [style: string]: Face; }; };
        face: string;
        weight: string;
        style: string;
        size: number;
        divisions: number;
        getFace(): Face;
        loadFace(data: TypefaceData): TypefaceData;
        drawText(text: string): { paths: Path[]; offset: number; };
        extractGlyphPoints(c: string, face: Face, scale: number, offset: number, path: Path): { offset: number; path: Path; };
        generateShapes(text: string, parameters?: { size?: number; curveSegments?: number; font?: string; weight?: string; style?: string; }): Shape[];
        Triangulate: {
            (contour: Vector2[], indices: bool): Vector2[];
            area(contour: Vector2[]): number;
        };
    };

    export var GeometryUtils: {
        merge(geometry1: Geometry, object2: Mesh): void;
        merge(geometry1: Geometry, object2: Geometry): void;
        removeMaterials(geometry: Geometry, materialIndexArray: number[]): void;
        randomPointInTriangle(vectorA: Vector3, vectorB: Vector3, vectorC: Vector3): Vector3;
        randomPointInFace(face: Face, geometry: Geometry, useCachedAreas: bool): Vector3;
        randomPointsInGeometry(geometry: Geometry, n: number): Vector3;
        triangleArea(vectorA: Vector3, vectorB: Vector3, vectorC: Vector3): number;
        center(geometry: Geometry): Vector3;
        normalizeUVs(geometry: Geometry): void;
        triangulateQuads(geometry: Geometry): void;
        setMaterialIndex(geometry: Geometry, index: number, startFace?: number, endFace?: number);
    };

    export var ImageUtils: {
        crossOrigin: string;
        loadTexture(url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void , onError?: (message: string) => void ): Texture;
        loadCompressedTexture(url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void , onError?: (message: string) => void ): Texture;
        loadTextureCube(array: string[], mapping?: Mapping, onLoad?: () => void , onError?: (message: string) => void ): Texture;
        loadCompressedTextureCube(array: string[], mapping?: Mapping, onLoad?: () => void , onError?: (message: string) => void ): Texture;
        parseDDS(buffer: ArrayBuffer, loadMipmaps: bool): { mipmaps: { data: Uint8Array; width: number; height: number; }[]; width: number; height: number; format: number; mipmapCount: number; };
        getNormalMap(image: HTMLImageElement, depth?: number): HTMLCanvasElement;
        generateDataTexture(width: number, height: number, color: Color): DataTexture;
    };

    export var SceneUtils: {
        createMultiMaterialObject(geometry: Geometry, materials: Material[]): Object3D;
        detach(child: Object3D, parent: Object3D, scene: Scene): void;
        attach(child: Object3D, scene: Scene, parent: Object3D): void;
    };

    // Extras / Animation /////////////////////////////////////////////////////////////////////

    export interface KeyFrame {
        pos: number[];
        rot: number[];
        scl: number[];
        time: number;
    }

    export interface KeyFrames {
        keys: KeyFrame[];
        parent: number;
    }

    export interface AnimationData {
        JIT: number;
        fps: number;
        hierarchy: KeyFrames[];
        length: number;
        name: string;
    }

    export class Animation {
        constructor(root: Mesh, name: string, interpolationType?: AnimationInterpolation);

        interpolateCatmullRom(points: Vector3[], scale: number): Vector3[];
        interpolate(p0: number, p1: number, p2: number, p3: number, t: number, t2: number, t3: number): number;

        root: Mesh;
        data: AnimationData;
        hierarchy: Bone[];
        currentTime: number;
        timeScale: number;
        isPlaying: bool;
        isPaused: bool;
        loop: bool;
        interpolationType: AnimationInterpolation;
        points: Vector3[];
        target: Vector3;
        play(loop?: bool, startTimeMS?: number): void;
        pause(): void;
        stop(): void;
        update(deltaTimeMS: number): void;

        getNextKeyWith(type: string, h: number, key: number): KeyFrame;    // ????
        getPrevKeyWith(type: string, h: number, key: number): KeyFrame;
    }

    export class AnimationInterpolation { }

    export var AnimationHandler: {
        update(deltaTimeMS: number): void;
        addToUpdate(animation: Animation): void;
        removeFromUpdate(animation: Animation): void;
        add(data: AnimationData): void;
        get (name: string): AnimationData;
        parse(root: SkinnedMesh): Object3D[];

        LINEAR: AnimationInterpolation;
        CATMULLROM: AnimationInterpolation;
        CATMULLROM_FORWARD: AnimationInterpolation;
    };

    export class AnimationMorphTarget {
        constructor(root: Bone, data: any);
        influence: number;

        root: Bone;
        data: Object;
        hierarchy: KeyFrames[];
        currentTime: number;
        timeScale: number;
        isPlaying: bool;
        isPaused: bool;
        loop: bool;
        play(loop?: bool, startTimeMS?: number): void;
        pause(): void;
        stop(): void;
        update(deltaTimeMS: number): void;
    }

    export class KeyFrameAnimation {
        constructor(root: Mesh, data: any, JITCompile?: bool);
        JITCompile: number;

        root: Mesh;
        data: Object;
        hierarchy: KeyFrames[];
        currentTime: number;
        timeScale: number;
        isPlaying: number;
        isPaused: number;
        loop: number;
        play(loop?: number, startTimeMS?: number): void;
        pause(): void;
        stop(): void;
        update(deltaTimeMS: number): void;

        getNextKeyWith(type: string, h: number, key: number): KeyFrame;    // ????
        getPrevKeyWith(type: string, h: number, key: number): KeyFrame;
    }

    // Extras / Cameras /////////////////////////////////////////////////////////////////////

    export class CombinedCamera extends Camera {
        constructor(width: number, height: number, fov: number, near: number, far: number, orthoNear: number, orthoFar: number);
        fov: number;
        left: number;
        right: number;
        top: number;
        bottom: number;
        cameraO: OrthographicCamera;
        cameraP: PerspectiveCamera;
        zoom: number;
        near: number;
        far: number;
        inPerspectiveMode: bool;
        inOrthographicMode: bool;
        toPerspective(): void;
        toOrthographic(): void;
        setSize(width: number, height: number): void;
        setFov(fov: number): void;
        updateProjectionMatrix(): void;
        setLens(focalLength: number, frameHeight?: number): number;
        setZoom(zoom: number): void;
        toFrontView(): void;
        toBackView(): void;
        toLeftView(): void;
        toRightView(): void;
        toTopView(): void;
        toBottomView(): void;
    }

    export class CubeCamera extends Object3D {
        constructor(near: number, far: number, cubeResolution: number);
        renderTarget: WebGLRenderTargetCube;
        updateCubeMap(renderer: Renderer, scene: Scene): void;
    }

    // Extras / Core /////////////////////////////////////////////////////////////////////

    /**
     * An extensible curve object which contains methods for interpolation
     * class Curve<T extends Vector>
     */
    export class Curve {
        constructor();

        /**
         * Returns a vector for point t of the curve where t is between 0 and 1
         * getPoint(t: number): T;
         */
        getPoint(t: number): Vector;

        /**
         * Returns a vector for point at relative position in curve according to arc length
         * getPointAt(u: number): T;
         */
        getPointAt(u: number): Vector;

        /**
         * Get sequence of points using getPoint( t )
         * getPoints(divisions?: number): T[];
         */
        getPoints(divisions?: number): Vector[];

        /**
         * Get sequence of equi-spaced points using getPointAt( u )
         * getSpacedPoints(divisions?: number): T[];
         */
        getSpacedPoints(divisions?: number): Vector[];

        /**
         * Get total curve arc length
         */
        getLength(): number;

        /**
         * Get list of cumulative segment lengths
         */
        getLengths(divisions?: number): number[];

        needsUpdate: bool;

        /**
         * Update the cumlative segment distance cache
         */
        updateArcLengths(): void;

        /**
         * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equi distance
         */
        getUtoTmapping(u: number, distance: number): number;

        /**
         * getNormalVector(t: number): T;
         */
        getNormalVector(t: number): Vector;

        /**
         * Returns a unit vector tangent at t. If the subclassed curve do not implement its tangent derivation, 2 points a small delta apart will be used to find its gradient which seems to give a reasonable approximation
         * getTangent(t: number): T;
         */
        getTangent(t: number): Vector;

        /**
         * Returns tangent at equidistance point u on the curve
         * getTangentAt(u: number): T;
         */
        getTangentAt(u: number): Vector;

        static Utils: {
            tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
            tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
            tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
            interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
        };

        static create(constructorFunc: Function, getPointFunc: Function): Function;
    }

    /**
     * class LineCurve extends Curve<Vector2>
     */
    export class LineCurve extends Curve {
        constructor(v1: Vector2, v2: Vector2);
        getPoint(t: number): Vector2;
        getPointAt(u: number): Vector2;
        getPoints(divisions?: number): Vector2[];
        getSpacedPoints(divisions?: number): Vector2[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector2;
        getTangent(t: number): Vector2;
        getTangentAt(u: number): Vector2;        
    }

    /**
     * class QuadraticBezierCurve extends Curve<Vector2>
     */
    export class QuadraticBezierCurve extends Curve {
        constructor(v0: Vector2, v1: Vector2, v2: Vector2);
        getPoint(t: number): Vector2;
        getPointAt(u: number): Vector2;
        getPoints(divisions?: number): Vector2[];
        getSpacedPoints(divisions?: number): Vector2[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector2;
        getTangent(t: number): Vector2;
        getTangentAt(u: number): Vector2;          
    }
    /**
     * class CubicBezierCurve extends Curve<Vector2>
     */
    export class CubicBezierCurve extends Curve {
        constructor(v0: number, v1: number, v2: number, v3: number);
        getPoint(t: number): Vector2;
        getPointAt(u: number): Vector2;
        getPoints(divisions?: number): Vector2[];
        getSpacedPoints(divisions?: number): Vector2[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector2;
        getTangent(t: number): Vector2;
        getTangentAt(u: number): Vector2;          
    }
    /**
     * class SplineCurve extends Curve<Vector2>
     */
    export class SplineCurve extends Curve {
        constructor(points?: Vector2[]);
        getPoint(t: number): Vector2;
        getPointAt(u: number): Vector2;
        getPoints(divisions?: number): Vector2[];
        getSpacedPoints(divisions?: number): Vector2[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector2;
        getTangent(t: number): Vector2;
        getTangentAt(u: number): Vector2;          
    }
    /**
     * class EllipseCurve extends Curve<Vector2>
     */
    export class EllipseCurve extends Curve {
        constructor(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: bool);
        aX: number;
        aY: number;
        xRadius: number;
        yRadius: number;
        aStartAngle: number;
        aEndAngle: number;
        aClockwise: bool;

        getPoint(t: number): Vector2;
        getPointAt(u: number): Vector2;
        getPoints(divisions?: number): Vector2[];
        getSpacedPoints(divisions?: number): Vector2[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector2;
        getTangent(t: number): Vector2;
        getTangentAt(u: number): Vector2;          
    }
    /**
     * class ArcCurve extends EllipseCurve
     */
    export class ArcCurve extends EllipseCurve {
        constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: bool);
        getPoint(t: number): Vector2;
        getPointAt(u: number): Vector2;
        getPoints(divisions?: number): Vector2[];
        getSpacedPoints(divisions?: number): Vector2[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector2;
        getTangent(t: number): Vector2;
        getTangentAt(u: number): Vector2;  
    }

    /**
     * class LineCurve3 extends Curve<Vector3>
     */
    export class LineCurve3 extends Curve {
        constructor(v1: Vector3, v2: Vector3);
        getPoint(t: number): Vector3;
        getPointAt(u: number): Vector3;
        getPoints(divisions?: number): Vector3[];
        getSpacedPoints(divisions?: number): Vector3[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector3;
        getTangent(t: number): Vector3;
        getTangentAt(u: number): Vector3;
    }

    /**
     * class QuadraticBezierCurve3 extends Curve<Vector3>
     */
    export class QuadraticBezierCurve3 extends Curve {
        constructor(v0: Vector3, v1: Vector3, v2: Vector3);
        getPoint(t: number): Vector3;
        getPointAt(u: number): Vector3;
        getPoints(divisions?: number): Vector3[];
        getSpacedPoints(divisions?: number): Vector3[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector3;
        getTangent(t: number): Vector3;
        getTangentAt(u: number): Vector3;
    }

    /**
     * class CubicBezierCurve3 extends Curve<Vector3>
     */
    export class CubicBezierCurve3 extends Curve {
        constructor(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3);
        getPoint(t: number): Vector3;
        getPointAt(u: number): Vector3;
        getPoints(divisions?: number): Vector3[];
        getSpacedPoints(divisions?: number): Vector3[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector3;
        getTangent(t: number): Vector3;
        getTangentAt(u: number): Vector3;
    }

    /**
     * class SplineCurve3 extends Curve<Vector3>
     */
    export class SplineCurve3 extends Curve {
        constructor(points?: Vector3[]);
        points: Vector3[];
        getPoint(t: number): Vector3;
        getPointAt(u: number): Vector3;
        getPoints(divisions?: number): Vector3[];
        getSpacedPoints(divisions?: number): Vector3[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector3;
        getTangent(t: number): Vector3;
        getTangentAt(u: number): Vector3;
    }

    /**
     * class ClosedSplineCurve3 extends Curve<Vector3>
     */
    export class ClosedSplineCurve3 extends Curve {
        constructor(points?: Vector3[]);
        points: Vector3[];
        getPoint(t: number): Vector3;
        getPointAt(u: number): Vector3;
        getPoints(divisions?: number): Vector3[];
        getSpacedPoints(divisions?: number): Vector3[];
        getLength(): number;
        getLengths(divisions?: number): number[];
        needsUpdate: bool;
        updateArcLengths(): void;
        getUtoTmapping(u: number, distance: number): number;
        getNormalVector(t: number): Vector3;
        getTangent(t: number): Vector3;
        getTangentAt(u: number): Vector3;
    }

    export interface BoundingBox {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        centroid: Vector;
    }

    export class CurvePath extends Curve {
        constructor();
        curves: Curve[];
        bends: Path[];
        autoClose: bool;
        add(curve: Curve): void;
        checkConnection(): bool;
        closePath(): void;
        getBoundingBox(): BoundingBox;
        createPointsGeometry(divisions: number): Geometry;
        createSpacedPointsGeometry(divisions: number): Geometry;
        createGeometry(points: Vector2[]): Geometry;
        addWrapPath(bendpath: Path): void;
        getTransformedPoints(segments: number, bends?: Path): Vector2[];
        getTransformedSpacedPoints(segments: number, bends?: Path[]): Vector2[];
        getWrapPoints(oldPts: Vector2[], path: Path): Vector2[];
    }

    export enum PathActions {
        MOVE_TO,
        LINE_TO,
        QUADRATIC_CURVE_TO, // Bezier quadratic curve
        BEZIER_CURVE_TO,     // Bezier cubic curve
        CSPLINE_THRU,        // Catmull-rom spline
        ARC,                // Circle
        ELLIPSE,
    }

    /**
     * a 2d path representation, comprising of points, lines, and cubes, similar to the html5 2d canvas api. It extends CurvePath.
     */
    export class Path extends CurvePath {
        constructor(points?: Vector2);
        actions: PathActions[];
        fromPoints(vectors: Vector2[]): void;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Vector2[]): void;
        arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: bool): void;
        absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: bool): void;
        ellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: bool): void;
        absellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: bool): void;
        toShapes(): Shape[];
    }

    export class Gyroscope extends Object3D {
        constructor();
        updateMatrixWorld(force?: bool): void;
        translationWorld: Vector3;
        translationObject: Vector3;
        rotationWorld: Quaternion;
        rotationObject: Quaternion;
        scaleWorld: Vector3;
        scaleObject: Vector3;
    }

    /**
     * Defines a 2d shape plane using paths.
     */
    export class Shape extends Path {
        constructor();
        holes: Vector2[][];
        extrude(options?: any): ExtrudeGeometry;
        makeGeometry(options?: any): ShapeGeometry;
        getPointsHoles(divisions: number): Vector2[][];
        getSpacedPointsHoles(divisions: number): Vector2[][];
        extractAllPoints(divisions: number): {
            shape: Vector2[];
            holes: Vector2[][];
        };
        useSpacedPoints: bool;
        extractPoints(divisions: number): Vector2[];
        extractAllSpacedPoints(divisions: Vector2): {
            shape: Vector2[];
            holes: Vector2[][];
        };

        static Utils: {
            removeHoles(contour: Vector2[], holes: Vector2[][]): {
                shape: Shape;
                isolatedPts: Vector2[];
                allpoints: Vector2[];
            };
            triangulateShape(contour: Vector2[], holes: Vector2[][]): Vector2[];
            isClockWise(pts: Vector2[]): bool;
            b2p0(t: number, p: number): number;
            b2p1(t: number, p: number): number;
            b2p2(t: number, p: number): number;
            b2(t: number, p0: number, p1: number, p2: number): number;
            b3p0(t: number, p: number): number;
            b3p1(t: number, p: number): number;
            b3p2(t: number, p: number): number;
            b3p3(t: number, p: number): number;
            b3(t: number, p0: number, p1: number, p2: number, p3: number): number;
        };
    }



    // Extras / Geomerties /////////////////////////////////////////////////////////////////////

    export class AsteriskGeometry extends Geometry {
        constructor(innerRadius: number, outerRadius: number);
    }

    export class CircleGeometry extends Geometry {
        constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);
    }

    export class ConvexGeometry extends Geometry {
        constructor(vertices: Vector3);
    }

    /**
     * CubeGeometry is the quadrilateral primitive geometry class. It is typically used for creating a cube or irregular quadrilateral of the dimensions provided within the (optional) 'width', 'height', & 'depth' constructor arguments.
     */
    export class CubeGeometry extends Geometry {
        /**
         * @param width — Width of the sides on the X axis.
         * @param height — Height of the sides on the Y axis.
         * @param depth — Depth of the sides on the Z axis.
         * @param widthSegments — Number of segmented faces along the width of the sides.
         * @param heightSegments — Number of segmented faces along the height of the sides.
         * @param depthSegments — Number of segmented faces along the depth of the sides.
         */
        constructor(width: number, height: number, depth: number, widthSegments?: number, heightSegments?: number, depthSegments?: number);
    }

    export class CylinderGeometry extends Geometry {
        /**
         * @param radiusTop — Radius of the cylinder at the top.
         * @param radiusBottom — Radius of the cylinder at the bottom.
         * @param height — Height of the cylinder.
         * @param radiusSegments — Number of segmented faces around the circumference of the cylinder.
         * @param heightSegments — Number of rows of faces along the height of the cylinder.
         * @param openEnded - A Boolean indicating whether or not to cap the ends of the cylinder.
          */
        constructor(radiusTop?: number, radiusBottom?: number, height?: number, radiusSegments?: number, heightSegments?: number, openEnded?: bool);
    }

    export class ExtrudeGeometry extends Geometry {
        constructor(shape?: Shape, options?: any);
        constructor(shapes?: Shape[], options?: any);
        shapebb: BoundingBox;
        addShapeList(shapes: Shape[], options?: any): void;
        addShape(shape: Shape, options?: any): void;
        static WorldUVGenerator: {
            generateTopUV(geometry: Geometry, extrudedShape: Shape, extrudeOptions: Object, indexA: number, indexB: number, indexC: number): Vector2[];
            generateBottomUV(geometry: Geometry, extrudedShape: Shape, extrudeOptions: Object, indexA: number, indexB: number, indexC: number): Vector2[];
            generateSideWallUV(geometry: Geometry, extrudedShape: Shape, wallContour: Object, extrudeOptions: Object,
                indexA: number, indexB: number, indexC: number, indexD: number, stepIndex: number, stepsLength: number,
                contourIndex1: number, contourIndex2: number): Vector2[];
        };
    }

    export class IcosahedronGeometry extends PolyhedronGeometry {
        constructor(radius: number, detail: number);
    }

    export class LatheGeometry extends Geometry {
        constructor(points: Vector3[], steps?: number, angle?: number);
    }

    export class OctahedronGeometry extends PolyhedronGeometry {
        constructor(radius: number, detail: number);
    }

    export class ParametricGeometry extends Geometry {
        constructor(func: (u: number, v: number) => Vector3, slices: number, stacks: number, useTris?: bool);
    }

    export class PlaneGeometry extends Geometry {
        constructor(width: number, height: number, widthSegments?: number, heightSegments?: number);
        width: number;
        height: number;
        widthSegments: number;
        heightSegments: number;
    }

    export class PolyhedronGeometry extends Geometry {
        constructor(vertices: Vector3[], faces: Face[], radius?: number, detail?: number);
    }

    export class ShapeGeometry extends Geometry {
        constructor(shape: Shape, options: any);
        constructor(shapes: Shape[], options: any);
        shapebb: BoundingBox;
        addShapeList(shapes: Shape[], options: any): ShapeGeometry;
        addShape(shape: Shape, options?: any): void;
    }

    /**
     * A class for generating sphere geometries
     */
    export class SphereGeometry extends Geometry {
        /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param segmentsWidth — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param segmentsHeight — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
        constructor(radius: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number);
        radius: number;
        widthSegments: number;
        heightSegments: number;
        phiStart: number;
        phiLength: number;
        thetaStart: number;
        thetaLength: number;
    }

    export class TetrahedronGeometry extends PolyhedronGeometry {
        constructor(radius?: number, detail?: number);
    }

    export interface TextGeometryParameters {
        size?: number; // size of the text
        height?: number; // thickness to extrude text
        curveSegments?: number; // number of points on the curves
        font?: string; // font name
        weight?: string; // font weight (normal, bold)
        style?: string; // font style  (normal, italics)
        bevelEnabled?: bool;   // turn on bevel
        bevelThickness?: number; // how deep into text bevel goes
        bevelSize?: number; // how far from text outline is bevel
    }

    export class TextGeometry extends ExtrudeGeometry {
        constructor(text: string, TextGeometryParameters?: TextGeometryParameters);
    }

    export class TorusGeometry extends Geometry {
        constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);
        radius: number;
        tube: number;
        radialSegments: number;
        tubularSegments: number;
        arc: number;
    }

    export class TorusKnotGeometry extends Geometry {
        constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, p?: number, q?: number, heightScale?: number);
        radius: number;
        tube: number;
        radialSegments: number;
        tubularSegments: number;
        p: number;
        q: number;
        heightScale: number;
        grid: number[][];
    }

    export class TubeGeometry extends Geometry {
        constructor(path: Path, segments?: number, radius?: number, radiusSegments?: number, closed?: bool, debug?: ArrowHelper[]);
        path: Path;
        segments: number;
        radius: number;
        radiusSegments: number;
        closed: bool;
        grid: number[][];
        tangents: Vector3[];
        normals: Vector3[];
        binormals: Vector3[];
        FrenetFrames(path: Path, segments: number, closed: bool): void;
    }

    // Extras / Helpers /////////////////////////////////////////////////////////////////////

    export class AxisHelper extends Line {
        constructor(size: number);
    }

    export class ArrowHelper extends Object3D {
        constructor(dir: Vector3, origin?: Vector3, length?: number, hex?: number);
        line: Line;
        cone: Mesh;
        setDirection(dir: Vector3): void;
        setLength(length: number): void;
        setColor(hex: number): void;
    }

    export class CameraHelper extends Line {
        constructor(camera: Camera);
        pointMap: { [id: string]: number[]; };
        camera: Camera;
    }

    export class DirectionalLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number, arrowLength: number);
        light: Light;
        direction: Vector3;
        color: Color;
        lightArrow: ArrowHelper;
        lightSphere: Mesh;
        lightRays: Line;
        targetSphere: Mesh;
        targetLine: Line;
    }

    export class HemisphereLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number, arrowLength: number, domeSize: number);
        light: Light;
        color: Color;
        groundColor: Color;
        lightSphere: Mesh;
        lightArrow: ArrowHelper;
        lightArrowGround: ArrowHelper;
        target: Vector3;
    }

    export class PointLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number);
        light: Light;
        color: Color;
        lightSphere: Mesh;
        lightRays: Line;
        lightDistance: Mesh;
    }

    export class SpotLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number, arrowLength: number);
        light: Light;
        direction: Vector3;
        color: Color;
        lightArrow: ArrowHelper;
        lightSphere: Mesh;
        lightCone: Mesh;
        lightRays: Line;
        gyroscope: Gyroscope;
        targetSphere: Mesh;
        targetLine: Line;
    }

    // Extras / Objects /////////////////////////////////////////////////////////////////////

    export class ImmediateRenderObject extends Object3D {
        constructor();
        // render(renderCallback):void;
    }

    export interface LensFlareProperty {
        texture: Texture;             // Texture
        size: number;             // size in pixels (-1 = use texture.width)
        distance: number;             // distance (0-1) from light source (0=at light source)
        x: number;
        y: number;
        z: number;            // screen position (-1 =>  1) z = 0 is ontop z = 1 is back
        scale: number;             // scale
        rotation: number;             // rotation
        opacity: number;            // opacity
        color: Color;                // color
        blending: Blending;
    }

    export class LensFlare extends Object3D {
        constructor(texture?: Texture, size?: number, distance?: number, blending?: Blending, color?: number);
        lensFlares: LensFlareProperty[];
        positionScreen: Vector3;
        customUpdateCallback: () => void;
        add(texture?: Texture, size?: number, distance?: number, blending?: Blending, color?: number, opacity?: number): void;
        updateLensFlares(): void;
    }

    export interface MorphBlendMeshAnimation {
        startFrame: number;
        endFrame: number;
        length: number;
        fps: number;
        duration: number;
        lastFrame: number;
        currentFrame: number;
        active: bool;
        time: number;
        direction: number;
        weight: number;
        directionBackwards: bool;
        mirroredLoop: bool;
    }

    export class MorphBlendMesh extends Mesh {
        constructor(geometry: Geometry, material: Material);
        animationsMap: { [name: string]: MorphBlendMeshAnimation; };
        animationsList: MorphBlendMeshAnimation[];
        createAnimation(name: string, start: number, end: number, fps: number): void;
        autoCreateAnimations(fps: number): void;
        firstAnimation: string;
        setAnimationDirectionForward(name: string): void;
        setAnimationDirectionBackward(name: string): void;
        setAnimationFPS(name: string, fps: number): void;
        setAnimationDuration(name: string, duration: number): void;
        setAnimationWeight(name: string, weight: number): void;
        setAnimationTime(name: string, time: number): void;
        getAnimationTime(name: string): number;
        getAnimationDuration(name: string): number;
        playAnimation(name: string): void;
        stopAnimation(name: string): void;
        update(delta: number): void;
    }

    // Extras / Renderers / Plugins /////////////////////////////////////////////////////////////////////

    export class DepthPassPlugin implements RendererPlugin {
        constructor();
        enabled: bool;
        renderTarget: RenderTarget;
        init(renderer: Renderer): void;
        render(scene: Scene, camera: Camera): void;
        update(scene: Scene, camera: Camera): void;
    }

    export class LensFlarePlugin implements RendererPlugin {
        constructor();
        init(renderer: Renderer): void;
        render(scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number): void;
    }

    export class ShadowMapPlugin implements RendererPlugin {
        constructor();
        init(renderer: Renderer): void;
        render(scene: Scene, camera: Camera): void;
        update(scene: Scene, camera: Camera): void;
    }

    export class SpritePlugin implements RendererPlugin {
        constructor();
        init(renderer: Renderer): void;
        render(scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number): void;
    }

    // renderers  /////////////////////////////////////////////////////////////////////

    export interface ShaderLibrary {
        [name: string]: {
            vertexShader: string;
            fragmentShader: string;
        };
    }
    export var ShaderFlares: ShaderLibrary;
    export var ShaderSprite: ShaderLibrary;

    export var UniformsUtils: {
        merge(uniforms: Object[]): Uniforms;
        merge(uniforms: Uniforms[]): Uniforms;
        clone(uniforms_src: Object[][]): Object[][];
    };

    export var UniformsLib: {
        common: Uniforms;
        bump: Uniforms;
        normalmap: Uniforms;
        fog: Uniforms;
        lights: Uniforms;
        particle: Uniforms;
        shadowmap: Uniforms;
    };

    export interface Shader {
        uniforms: Uniforms;
        vertexShader: string;
        fragmentShader: string;
    }

    export var ShaderLib: {
        [name: string]: Shader;
        basic: Shader;
        lambert: Shader;
        phong: Shader;
        particle_basic: Shader;
        depth: Shader;
        dashed: Shader;
        normal: Shader;
        normalmap: Shader;
        cube: Shader;
        depthRGBA: Shader;
    };
}



