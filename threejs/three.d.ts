// Type definitions for three.js r71
// Project: http://mrdoob.github.com/three.js/
// Definitions by: Kon <http://phyzkit.net/>, Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface WebGLRenderingContext {}

declare module THREE {
    export var REVISION: string;

    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button
    export enum MOUSE {LEFT, MIDDLE, RIGHT}

    // GL STATE CONSTANTS
    export enum CullFace { }
    export var CullFaceNone: CullFace;
    export var CullFaceBack: CullFace;
    export var CullFaceFront: CullFace;
    export var CullFaceFrontBack: CullFace;

    export enum FrontFaceDirection { }
    export var FrontFaceDirectionCW: FrontFaceDirection;
    export var FrontFaceDirectionCCW: FrontFaceDirection;

    // Shadowing Type
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
    export var MinEquation: BlendingEquation;
    export var MaxEquation: BlendingEquation;

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

   // custom blending src factors
    export enum BlendingSrcFactor { }
    export var DstColorFactor: BlendingSrcFactor;
    export var OneMinusDstColorFactor: BlendingSrcFactor;
    export var SrcAlphaSaturateFactor: BlendingSrcFactor;

    // TEXTURE CONSTANTS
    // Operations
    export enum Combine { }
    export var MultiplyOperation: Combine;
    export var MixOperation: Combine;
    export var AddOperation: Combine;

    // Mapping modes
    export enum Mapping { }
    export var UVMapping: Mapping;
    export var CubeReflectionMapping: Mapping;
    export var CubeRefractionMapping: Mapping;
    export var EquirectangularReflectionMapping: Mapping;
    export var EquirectangularRefractionMapping: Mapping;
    export var SphericalReflectionMapping: Mapping;

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
    export var HalfFloatType: TextureDataType;

    // Pixel types
    export enum PixelType { }
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
    export var RGBEFormat: PixelFormat;

    // Compressed texture formats
    // DDS / ST3C Compressed texture formats
    export enum CompressedPixelFormat { }
    export var RGB_S3TC_DXT1_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT1_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT3_Format: CompressedPixelFormat;
    export var RGBA_S3TC_DXT5_Format: CompressedPixelFormat;

    // PVRTC compressed texture formats
    export var RGB_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    export var RGB_PVRTC_2BPPV1_Format: CompressedPixelFormat;
    export var RGBA_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    export var RGBA_PVRTC_2BPPV1_Format: CompressedPixelFormat;

    // log handlers
    export function warn(message?: any, ...optionalParams: any[]): void;
    export function error(message?: any, ...optionalParams: any[]): void;
    export function log(message?: any, ...optionalParams: any[]): void;


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

        getWorldDirection(optionalTarget?: Vector3): Vector3;

        /**
         * This make the camera look at the vector position in local space.
         * @param vector point to look at
         */
        lookAt(vector: Vector3): void;

        clone(camera?: Camera): Camera;
    }

    export class CubeCamera extends Object3D {
        constructor( near?: number, far?: number, cubeResolution?: number);

        renderTarget: WebGLRenderTargetCube;

        updateCubeMap( renderer: Renderer, scene: Scene ): void;

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

        zoom: number;

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

        clone(): OrthographicCamera;
    }

    /**
     * Camera with perspective projection.
     *
     * # example
     *     var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
     *     scene.add( camera );
     *
     * @source https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js
     */
    export class PerspectiveCamera extends Camera {
        /**
         * @param fov Camera frustum vertical field of view. Default value is 50.
         * @param aspect Camera frustum aspect ratio. Default value is 1.
         * @param near Camera frustum near plane. Default value is 0.1.
         * @param far Camera frustum far plane. Default value is 2000.
         */
        constructor(fov?: number, aspect?: number, near?: number, far?: number);

        zoom: number;

        /**
         * Camera frustum vertical field of view, from bottom to top of view, in degrees.
         */
        fov: number;

        /**
         * Camera frustum aspect ratio, window width divided by window height.
         */
        aspect: number;

        /**
         * Camera frustum near plane.
         */
        near: number;

        /**
         * Camera frustum far plane.
         */
        far: number;

        /**
         * Uses focal length (in mm) to estimate and set FOV 35mm (fullframe) camera is used if frame size is not specified.
         * Formula based on http://www.bobatkins.com/photography/technical/field_of_view.html
         * @param focalLength focal length
         * @param frameHeight frame size. Default value is 24.
         */
        setLens(focalLength: number, frameHeight?: number): void;

        /**
         * Sets an offset in a larger frustum. This is useful for multi-window or multi-monitor/multi-machine setups.
         * For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this:
         *
         *     +---+---+---+
         *     | A | B | C |
         *     +---+---+---+
         *     | D | E | F |
         *     +---+---+---+
         *
         * then for each monitor you would call it like this:
         *
         *     var w = 1920;
         *     var h = 1080;
         *     var fullWidth = w * 3;
         *     var fullHeight = h * 2;
         *
         *     // A
         *     camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
         *     // B
         *     camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
         *     // C
         *     camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
         *     // D
         *     camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
         *     // E
         *     camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
         *     // F
         *     camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h ); Note there is no reason monitors have to be the same size or in a grid.
         *
         * @param fullWidth full width of multiview setup
         * @param fullHeight full height of multiview setup
         * @param x horizontal offset of subcamera
         * @param y vertical offset of subcamera
         * @param width width of subcamera
         * @param height height of subcamera
         */
        setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;

        /**
         * Updates the camera projection matrix. Must be called after change of parameters.
         */
        updateProjectionMatrix(): void;
        clone(): PerspectiveCamera;
    }

    // Core ///////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js">src/core/InterleavedBuffer.js</a>
     */
    export class InterleavedBuffer {
        constructor(array: ArrayLike<number>, stride: number);
        array: ArrayLike<number>;
        stride: number;
        dynamic: boolean;
        updateRange: {offset:number, count:number};
        version: number;
        length: number;
        count: number;
        needsUpdate: boolean;

        setDynamic(dynamic: boolean): InterleavedBuffer;
        copy(source: InterleavedBuffer): void;
        copyAt(index1: number, attribute: InterleavedBufferAttribute, index2: number): InterleavedBuffer;
        set(value: ArrayLike<number>, index: number): InterleavedBuffer;
        clone(): InterleavedBuffer;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js">src/core/InstancedInterleavedBuffer.js</a>
     */
    export class InstancedInterleavedBuffer extends InterleavedBuffer {
        constructor(array: ArrayLike<number>, stride: number, meshPerAttribute?: number);
        meshPerAttribute: number;
        copy(source: InstancedInterleavedBuffer): InstancedInterleavedBuffer;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js">src/core/BufferAttribute.js</a>
     */
    export class BufferAttribute {
        constructor(array: ArrayLike<number>, itemSize: number); // array parameter should be TypedArray.

        array: ArrayLike<number>;
        itemSize: number;
        dynamic: boolean;
        updateRange: {offset:number, count:number};
        needsUpdate: boolean;
        /** Deprecated, use count instead */
        length: number;
        count: number;

        setDynamic(dynamic: boolean): BufferAttribute;
        copy(source: BufferAttribute): BufferAttribute;
        copyAt(index1: number, attribute: BufferAttribute, index2: number): BufferAttribute;
        copyArray(array: ArrayLike<number>): BufferAttribute;
        copyColorArray(colors: {r:number, g:number, b:number}[]): BufferAttribute;
        copyIndicesArray(indices: {a:number, b:number, c:number}[]): BufferAttribute;
        copyVector2sArray(vectors: {x:number, y:number}[]): BufferAttribute;
        copyVector3sArray(vectors: {x:number, y:number, z:number}[]): BufferAttribute;
        copyVector4sArray(vectors: {x:number, y:number, z:number, w:number}[]): BufferAttribute;
        set(value: ArrayLike<number>, offset?: number): BufferAttribute;
        getX(index: number): number;
        setX(index: number, x: number): BufferAttribute;
        getY(index: number): number;
        setY(index: number, y: number): BufferAttribute;
        getZ(index: number): number;
        setZ(index: number, z: number): BufferAttribute;
        getW(index: number): number;
        setW(index: number, z: number): BufferAttribute;
        setXY(index: number, x: number, y: number): BufferAttribute;
        setXYZ(index: number, x: number, y: number, z: number): BufferAttribute;
        setXYZW(index: number, x: number, y: number, z: number, w: number): BufferAttribute;
        clone(): BufferAttribute;
    }

    // deprecated (are these actually deprecated?)
    export class Int8Attribute extends BufferAttribute{
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Uint8Attribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Uint8ClampedAttribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Int16Attribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Uint16Attribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Int32Attribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Uint32Attribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Float32Attribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    // deprecated
    export class Float64Attribute extends BufferAttribute {
        constructor(data: any, itemSize: number);
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js">src/core/InstancedBufferAttribute.js</a>
     */
    export class InstancedBufferAttribute extends BufferAttribute {
        constructor(data: ArrayLike<number>, itemSize: number, meshPerAttribute?: number);
        meshPerAttribute: number;
        copy(source: InstancedBufferAttribute): InstancedBufferAttribute;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js">src/core/InterleavedBufferAttribute.js</a>
     */
    export class InterleavedBufferAttribute {
        constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number);

        uuid: string;
        data: InterleavedBuffer;
        itemSize: number;
        offset: number;
        /** Deprecated, use count instead */
        length: number;
        count: number;

        getX(index: number): number;
        setX(index: number, x: number): InterleavedBufferAttribute;
        getY(index: number): number;
        setY(index: number, y: number): InterleavedBufferAttribute;
        getZ(index: number): number;
        setZ(index: number, z: number): InterleavedBufferAttribute;
        getW(index: number): number;
        setW(index: number, z: number): InterleavedBufferAttribute;
        setXY(index: number, x: number, y: number): InterleavedBufferAttribute;
        setXYZ(index: number, x: number, y: number, z: number): InterleavedBufferAttribute;
        setXYZW(index: number, x: number, y: number, z: number, w: number): InterleavedBufferAttribute;
    }

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

        static MaxIndex: number;

        /**
         * Unique number of this buffergeometry instance
         */
        id: number;
        uuid: string;
        name: string;
        type: string;
        attributes: BufferAttribute|InterleavedBufferAttribute[];
        attributesKeys: string[];
        /** Deprecated. Use groups instead. */
        drawcalls: { start: number; count: number; index: number; }[];
        /** Deprecated. Use groups instead. */
        offsets: { start: number; count: number; index: number; }[];
        groups: {start: number, count: number, materialIndex?: number}[]
        boundingBox: Box3;
        boundingSphere: BoundingSphere;
        /** Deprecated. This overloaded method is deprecated. */
        addAttribute(name: string, array: any, itemSize: number): any;
        addAttribute(name: string, attribute: BufferAttribute|InterleavedBufferAttribute): void;
        getAttribute(name: string): BufferAttribute|InterleavedBufferAttribute;
        removeAttribute(name: string): void;

        setIndex(index: BufferAttribute): void;
        getIndex(): BufferAttribute;

        /** Deprecated. Use addGroup */
        addDrawCall(start: number, count: number, index: number): void;
        addGroup(start: number, count: number, materialIndex?: number): void;
        clearGroups(): void;

        setDrawRange(start:number, count:number): void;

        /**
         * Bakes matrix transform directly into vertex coordinates.
         */
        applyMatrix(matrix: Matrix4): void;

        rotateX(angle: number): BufferGeometry;
        rotateY(angle: number): BufferGeometry;
        rotateZ(angle: number): BufferGeometry;
        translate(x:number, y:number, z:number): BufferGeometry;
        scale(x:number, y:number, z:number): BufferGeometry;
        lookAt(v:Vector3): void;

        center(): Vector3;

        setFromObject(object: Object3D) : void;
        updateFromObject(object: Object3D) : void;

        fromGeometry(geometry: Geometry, settings?: any): BufferGeometry;

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

        // deprecated
        computeFaceNormals(): void;

        /**
         * Computes vertex normals by averaging face normals.
         */
        computeVertexNormals(): void;

        /**
         * Computes vertex tangents.
         * Based on http://www.terathon.com/code/tangent.html
         * Geometry must have vertex UVs (layer 0 will be used).
         */
        computeTangents(): void;

        computeOffsets(size: number): void;
        merge(geometry: BufferGeometry, offset: number): BufferGeometry;
        normalizeNormals(): void;
        reorderBuffers(indexBuffer: number, indexMap: number[], vertexCount: number): void;
        toJSON(): any;
        clone(): BufferGeometry;

        /**
         * Disposes the object from memory.
         * You need to call this when you want the bufferGeometry removed while the application is running.
         */
        dispose(): void;


        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void ): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js">src/core/InstancedBufferGeometry.js</a>
     */
    export class InstancedBufferGeometry extends BufferGeometry {
        constructor();
        groups: {start:number, count:number, instances:number}[];
        addGroup(start: number, count: number, instances: number): void;
        copy(source: InstancedBufferGeometry): InstancedBufferGeometry;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/DirectGeometry.js">src/core/DirectGeometry.js</a>
     */
    export class DirectGeometry {
        constructor();
        id: number;
        uuid: string;
        name: string;
        type: string;
        indices: number[];
        vertices: Vector3[];
        normals: Vector3[];
        colors: Color[];
        uvs: Vector2[];
        uvs2: Vector2[];
        groups: {start: number, materialIndex: number}[];
        morphTargets: MorphTarget[];
        skinWeights: number[];
        skinIndices: number[];
        boundingBox: Box3;
        boundingSphere: BoundingSphere;
        verticesNeedUpdate: boolean;
        normalsNeedUpdate: boolean;
        colorsNeedUpdate: boolean;
        uvsNeedUpdate: boolean;
        groupsNeedUpdate: boolean;
        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        computeGroups(geometry: Geometry): void;
        fromGeometry(geometry: Geometry): DirectGeometry;
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
        constructor(autoStart?: boolean);

        /**
         * If set, starts the clock automatically when the first update is called.
         */
        autoStart: boolean;

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
         * When the clock is running, It holds the time elapsed between the start of the clock to the previous update.
         * This parameter is in seconds of three decimal places.
         */
        elapsedTime: number;

        /**
         * This property keeps track whether the clock is running or not.
         */
        running: boolean;

        /**
         * Starts clock.
         */
        start(): void;

        /**
         * Stops clock.
         */
        stop(): void;

        /**
         * Get the seconds passed since the clock started.
         */
        getElapsedTime(): number;

        /**
         * Get the seconds passed since the last call to this method.
         */
        getDelta(): number;
    }

    /**
     * Deprecated. Use new THREE.BufferAttribute().setDynamic(true) instead.
     */
    export class DynamicBufferAttribute extends BufferAttribute{
        constructor(array: any, itemSize: number);

        updateRange: {
            offset: number;
            count: number;
        }

        clone(): DynamicBufferAttribute;
    }

    /**
     * JavaScript events for custom objects
     *
     * # Example
     *     var Car = function () {
     *
     *         EventDispatcher.call( this );
     *         this.start = function () {
     *
     *             this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
     *
     *         };
     *
     *     };
     *
     *     var car = new Car();
     *     car.addEventListener( 'start', function ( event ) {
     *
     *         alert( event.message );
     *
     *     } );
     *     car.start();
     *
     * @source src/core/EventDispatcher.js
     */
    export class EventDispatcher {
        /**
         * Creates eventDispatcher object. It needs to be call with '.call' to add the functionality to an object.
         */
        constructor();

        /**
         * Adds a listener to an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
        addEventListener(type: string, listener: (event: any) => void ): void;

        /**
         * Adds a listener to an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
        hasEventListener(type: string, listener: (event: any) => void): void;

        /**
         * Removes a listener from an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
        removeEventListener(type: string, listener: (event: any) => void): void;

        /**
         * Fire an event type.
         * @param type The type of event that gets fired.
         */
        dispatchEvent(event: { type: string; target: any; }): void;
    }

    /**
     * Triangle face.
     *
     * # Example
     *     var normal = new THREE.Vector3( 0, 1, 0 );
     *     var color = new THREE.Color( 0xffaa00 );
     *     var face = new THREE.Face3( 0, 1, 2, normal, color, 0 );
     *
     * @source https://github.com/mrdoob/three.js/blob/master/src/core/Face3.js
     */
    export class Face3 {
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

        /**
         * Face normal.
         */
        normal: Vector3;

        /**
         * Array of 4 vertex normals.
         */
        vertexNormals: Vector3[];

        /**
         * Face color.
         */
        color: Color;

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

        clone(): Face3;
    }

    export interface MorphTarget {
        name: string;
        vertices: Vector3[];
    }

    export interface MorphColor {
        name: string;
        colors: Color[];
    }

    export interface MorphNormals {
        name: string;
        normals: Vector3[];
    }

    export interface BoundingSphere {
        radius: number;
    }


    /**
     * Base class for geometries
     *
     * # Example
     *     var geometry = new THREE.Geometry();
     *     geometry.vertices.push( new THREE.Vector3( -10, 10, 0 ) );
     *     geometry.vertices.push( new THREE.Vector3( -10, -10, 0 ) );
     *     geometry.vertices.push( new THREE.Vector3( 10, -10, 0 ) );
     *     geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
     *     geometry.computeBoundingSphere();
     *
     * @see https://github.com/mrdoob/three.js/blob/master/src/core/Geometry.js
     */
    export class Geometry {
        constructor();

        /**
         * Unique number of this geometry instance
         */
        id: number;

        uuid: string;

        /**
         * Name for this geometry. Default is an empty string.
         */
        name: string;

        type: string;

        /**
         * The array of vertices hold every position of points of the model.
         * To signal an update in this array, Geometry.verticesNeedUpdate needs to be set to true.
         */
        vertices: Vector3[];

        /**
         * Array of vertex colors, matching number and order of vertices.
         * Used in ParticleSystem, Line and Ribbon.
         * Meshes use per-face-use-of-vertex colors embedded directly in faces.
         * To signal an update in this array, Geometry.colorsNeedUpdate needs to be set to true.
         */
        colors: Color[];

        /**
         * Array of triangles or/and quads.
         * The array of faces describe how each vertex in the model is connected with each other.
         * To signal an update in this array, Geometry.elementsNeedUpdate needs to be set to true.
         */
        faces: Face3[];

        /**
         * Array of face UV layers.
         * Each UV layer is an array of UV matching order and number of vertices in faces.
         * To signal an update in this array, Geometry.uvsNeedUpdate needs to be set to true.
         */
        faceVertexUvs: Vector2[][][];

        /**
         * Array of morph targets. Each morph target is a Javascript object:
         *
         *     { name: "targetName", vertices: [ new THREE.Vector3(), ... ] }
         *
         * Morph vertices match number and order of primary vertices.
         */
        morphTargets: MorphTarget[];

        /**
         * Array of morph colors. Morph colors have similar structure as morph targets, each color set is a Javascript object:
         *
         *     morphColor = { name: "colorName", colors: [ new THREE.Color(), ... ] }
         */
        morphColors: MorphColor[];

        /**
         * Array of morph normals. Morph normals have similar structure as morph targets, each normal set is a Javascript object:
         *
         *     morphNormal = { name: "NormalName", normals: [ new THREE.Vector3(), ... ] }
         */
        morphNormals: MorphNormals[];

        /**
         * Array of skinning weights, matching number and order of vertices.
         */
        skinWeights: number[];

        /**
         * Array of skinning indices, matching number and order of vertices.
         */
        skinIndices: number[];

        /**
         *
         */
        lineDistances: number[];

        /**
         * Bounding box.
         */
        boundingBox: Box3;

        /**
         * Bounding sphere.
         */
        boundingSphere: BoundingSphere;

        /**
         * True if geometry has tangents. Set in Geometry.computeTangents.
         */
        hasTangents: boolean;

        /**
         * Set to true if attribute buffers will need to change in runtime (using "dirty" flags).
         * Unless set to true internal typed arrays corresponding to buffers will be deleted once sent to GPU.
         * Defaults to true.
         */
        dynamic: boolean;

        /**
         * Set to true if the vertices array has been updated.
         */
        verticesNeedUpdate: boolean;

        /**
         * Set to true if the faces array has been updated.
         */
        elementsNeedUpdate: boolean;

        /**
         * Set to true if the uvs array has been updated.
         */
        uvsNeedUpdate: boolean;

        /**
         * Set to true if the normals array has been updated.
         */
        normalsNeedUpdate: boolean;

        /**
         * Set to true if the tangents in the faces has been updated.
         */
        tangentsNeedUpdate: boolean;

        /**
         * Set to true if the colors array has been updated.
         */
        colorsNeedUpdate: boolean;

        /**
         * Set to true if the linedistances array has been updated.
         */
        lineDistancesNeedUpdate: boolean;

        /**
         *
         */
        groupsNeedUpdate: boolean;

        /**
         * Bakes matrix transform directly into vertex coordinates.
         */
        applyMatrix(matrix: Matrix4): void;

        fromBufferGeometry(geometry: BufferGeometry): Geometry;

        /**
         *
         */
        center(): Vector3;

        /**
         * Computes face normals.
         */
        computeFaceNormals(): void;

        /**
         * Computes vertex normals by averaging face normals.
         * Face normals must be existing / computed beforehand.
         */
        computeVertexNormals(areaWeighted?: boolean): void;

        /**
         * Computes morph normals.
         */
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

        merge( geometry: Geometry, matrix: Matrix, materialIndexOffset: number): void;

        mergeMesh( mesh: Mesh ): void;

        /**
         * Checks for duplicate vertices using hashmap.
         * Duplicated vertices are removed and faces' vertices are updated.
         */
        mergeVertices(): number;

        toJSON(): any;

        /**
         * Creates a new clone of the Geometry.
         */
        clone(): Geometry;

        /**
         * Removes The object from memory.
         * Don't forget to call this method when you remove an geometry because it can cuase meomory leaks.
         */
        dispose(): void;


        //These properties do not exist in a normal Geometry class, but if you use the instance that was passed by JSONLoader, it will be added.
        bones: Bone[];
        animation: AnimationData;
        animations: AnimationData[];

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void ): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;
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
         *
         */
        uuid: string;

        /**
         * Optional name of the object (doesn't need to be unique).
         */
        name: string;

        type: string;

        /**
         * Object's parent in the scene graph.
         */
        parent: Object3D;

        /**
         * Array with object's children.
         */
        children: Object3D[];

        /**
         * Up direction.
         */
        up: Vector3;

        /**
         * Object's local position.
         */
        position: Vector3;

        /**
         * Object's local rotation (Euler angles), in radians.
         */
        rotation: Euler;

        /**
         * Global rotation.
         */
        quaternion: Quaternion;

        /**
         * Object's local scale.
         */
        scale: Vector3;

        /**
         * When this is set, then the rotationMatrix gets calculated every frame.
         */
        rotationAutoUpdate: boolean;

        /**
         * Local transform.
         */
        matrix: Matrix4;

        /**
         * The global transform of the object. If the Object3d has no parent, then it's identical to the local transform.
         */
        matrixWorld: Matrix4;

        /**
         * When this is set, it calculates the matrix of position, (rotation or quaternion) and scale every frame and also recalculates the matrixWorld property.
         */
        matrixAutoUpdate: boolean;

        /**
         * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
         */
        matrixWorldNeedsUpdate: boolean;

        /**
         * Object gets rendered if true.
         */
        visible: boolean;

        /**
         * Gets rendered into shadow map.
         */
        castShadow: boolean;

        /**
         * Material gets baked in shadow receiving.
         */
        receiveShadow: boolean;

        /**
         * When this is set, it checks every frame if the object is in the frustum of the camera. Otherwise the object gets drawn every frame even if it isn't visible.
         */
        frustumCulled: boolean;

        renderOrder: number;

        /**
         * An object that can be used to store custom data about the Object3d. It should not hold references to functions as these will not be cloned.
         */
        userData: any;

        /**
         *
         */
        static DefaultUp: Vector3;


        /**
         * Order of axis for Euler angles.
         */
        // deprecated
        eulerOrder: string;


        /**
         * This updates the position, rotation and scale with the matrix.
         */
        applyMatrix(matrix: Matrix4): void;

        /**
         *
         */
        setRotationFromAxisAngle(axis: Vector3, angle: number): void;

        /**
         *
         */
        setRotationFromEuler(euler: Euler ): void;

        /**
         *
         */
        setRotationFromMatrix(m: Matrix4): void;

        /**
         *
         */
        setRotationFromQuaternion( q: Quaternion ): void;

        /**
         * Rotate an object along an axis in object space. The axis is assumed to be normalized.
         * @param axis  A normalized vector in object space.
         * @param angle  The angle in radians.
         */
        rotateOnAxis(axis: Vector3, angle: number): Object3D;

        /**
         *
         * @param angle
         */
        rotateX(angle: number): Object3D;

        /**
         *
         * @param angle
         */
        rotateY(angle: number): Object3D;

        /**
         *
         * @param angle
         */
        rotateZ(angle: number): Object3D;

        /**
         * @param axis  A normalized vector in object space.
         * @param distance  The distance to translate.
         */
        translateOnAxis(axis: Vector3, distance: number): Object3D;

        /**
         *
         * @param distance
         * @param axis
         */
        translate( distance: number, axis: Vector3 ): Object3D;

        /**
         * Translates object along x axis by distance.
         * @param distance Distance.
         */
        translateX(distance: number): Object3D;

        /**
         * Translates object along y axis by distance.
         * @param distance Distance.
         */
        translateY(distance: number): Object3D;

        /**
         * Translates object along z axis by distance.
         * @param distance Distance.
         */
        translateZ(distance: number): Object3D;

        /**
         * Updates the vector from local space to world space.
         * @param vector A local vector.
         */
        localToWorld(vector: Vector3): Vector3;

        /**
         * Updates the vector from world space to local space.
         * @param vector A world vector.
         */
        worldToLocal(vector: Vector3): Vector3;

        /**
         * Rotates object to face point in space.
         * @param vector A world vector to look at.
         */
        lookAt(vector: Vector3): void;

        /**
         * Adds object as child of this object.
         */
        add(object: Object3D): void;

        /**
         * Removes object as child of this object.
         */
        remove(object: Object3D): void;

        /* deprecated */
        getChildByName( name: string ): Object3D;

        /**
         * Searches through the object's children and returns the first with a matching id, optionally recursive.
         * @param id  Unique number of the object instance
         */
        getObjectById(id: number): Object3D;

        /**
         * Searches through the object's children and returns the first with a matching name, optionally recursive.
         * @param name  String to match to the children's Object3d.name property.
         */
        getObjectByName(name: string): Object3D;

        getObjectByProperty( name: string, value: string ): Object3D;

        getWorldPosition(optionalTarget?: Vector3): Vector3;
        getWorldQuaternion(optionalTarget?: Quaternion): Quaternion;
        getWorldRotation(optionalTarget?: Euler): Euler;
        getWorldScale(optionalTarget?: Vector3): Vector3;
        getWorldDirection(optionalTarget?: Vector3): Vector3;

        /**
         * Translates object along arbitrary axis by distance.
         * @param distance Distance.
         * @param axis Translation direction.
         */
        traverse(callback: (object: Object3D) => any): void;

        traverseVisible(callback: (object: Object3D) => any): void;

        traverseAncestors(callback: (object: Object3D) => any): void;

        /**
         * Updates local transform.
         */
        updateMatrix(): void;

        /**
         * Updates global transform of the object and its children.
         */
        updateMatrixWorld(force: boolean): void;

        toJSON(): any;

        /**
         *
         * @param object
         * @param recursive
         */
        clone(object?: Object3D, recursive?: boolean): Object3D;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void ): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;

    }

    export interface Intersection {
        distance: number;
        point: Vector3;
        face: Face3;
        object: Object3D;
    }

    export interface RaycasterParameters {
        Sprite?: any;
        Mesh?: any;
        PointCloud?: any;
        LOD?: any;
        Line?: any;
    }

    export class Raycaster {
        constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);

        ray: Ray;
        near: number;
        far: number;
        params: RaycasterParameters;
        precision: number;
        linePrecision: number;
        set(origin: Vector3, direction: Vector3): void;
        setFromCamera(coords: { x: number; y: number;}, camera: Camera ): void;
        intersectObject(object: Object3D, recursive?: boolean): Intersection[];
        intersectObjects(objects: Object3D[], recursive?: boolean): Intersection[];
    }

    // Lights //////////////////////////////////////////////////////////////////////////////////

    /**
     * Abstract base class for lights.
     */
    export class Light extends Object3D {
        constructor(hex?: number);

        color: Color;

        clone(light?: Light): Light;
    }

    /**
     * This light's color gets applied to all the objects in the scene globally.
     *
     * # example
     *     var light = new THREE.AmbientLight( 0x404040 ); // soft white light
     *     scene.add( light );
     *
     * @source https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js
     */
    export class AmbientLight extends Light {
        /**
         * This creates a Ambientlight with a color.
         * @param hex Numeric value of the RGB component of the color.
         */
        constructor(hex?: number);

        clone(): AmbientLight;
    }

    export class AreaLight extends Light{
        constructor(hex: number, intensity?: number);

        normal: Vector3;
        right: Vector3;
        intensity: number;
        width: number;
        height: number;
        constantAttenuation: number;
        linearAttenuation: number;
        quadraticAttenuation: number;

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
        castShadow: boolean;

        /**
         * If set to true light will only cast shadow but not contribute any lighting (as if intensity was 0 but cheaper to compute).
         * Default — false.
         */
        onlyShadow: boolean;

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
        shadowCameraVisible: boolean;

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
        shadowCascade: boolean;

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

        clone(): DirectionalLight;
    }

    export class HemisphereLight extends Light {
        constructor(skyColorHex?: number, groundColorHex?: number, intensity?: number);

        groundColor: Color;
        intensity: number;

        clone(): HemisphereLight;
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
        constructor(hex?: number, intensity?: number, distance?: number, decay?: number);

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

        decay: number;

        clone(): PointLight;
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
        constructor(hex?: number, intensity?: number, distance?: number, angle?: number, exponent?: number, decay?: number);

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

        decay: number;

        /**
         * If set to true light will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right.
         * Default — false.
         */
        castShadow: boolean;

        /**
         * If set to true light will only cast shadow but not contribute any lighting (as if intensity was 0 but cheaper to compute).
         * Default — false.
         */
        onlyShadow: boolean;

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
        shadowCameraVisible: boolean;

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

        clone(): SpotLight;
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
        constructor(showStatus?: boolean);

        /**
         * If true, show loading status in the statusDomElement.
         */
        showStatus: boolean;

        /**
         * This is the recipient of status messages.
         */
        statusDomElement: HTMLElement;

        imageLoader: ImageLoader;

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
        needsTangents(materials: Material[]): boolean;
        createMaterial(m: Material, texturePath: string): boolean;

        static Handlers:LoaderHandler;
    }

    export interface LoaderHandler{
        handlers:any[];
        add(regex:string, loader:Loader):void;
        get(file: string):Loader;
    }

    export class BinaryTextureLoader {
        constructor();

        load(url: string, onLoad: (dataTexture: DataTexture) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
    }

    export class BufferGeometryLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        load(url: string, onLoad: (bufferGeometry: BufferGeometry) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
        setCrossOrigin(crossOrigin: string): void;
        parse(json: any): BufferGeometry;
    }

    export interface Cache{
        files: any[];

        add(key: string, file: any): void;
        get(key: string): any;
        remove(key: string): void;
        clear(): void;
    }
    export var Cache:Cache;

    export class CompressedTextureLoader{
        constructor();

        load(url: string, onLoad: (bufferGeometry: BufferGeometry) => void, onError?: (event: any) => void): void;
    }

    export class DataTextureLoader extends BinaryTextureLoader {
        // alias for BinaryTextureLoader.
    }

    /*
     * GeometryLoader class is experimental, and it is not yet included in the compiled source code.
     *
     export class GeometryLoader {

     }
     */

    /**
     * A loader for loading an image.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    export class ImageLoader {
        constructor(manager?: LoadingManager);

        cache: Cache;
        manager: LoadingManager;
        crossOrigin: string;

        /**
         * Begin loading from url
         * @param url
         */
        load(url: string, onLoad?: (image: HTMLImageElement) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): HTMLImageElement;

        setCrossOrigin(crossOrigin: string): void;
    }

    /**
     * A loader for loading objects in JSON format.
     */
    export class JSONLoader extends Loader {
        constructor(showStatus?: boolean);

        withCredentials: boolean;

        /**
         * @param url
         * @param callback. This function will be called with the loaded model as an instance of geometry when the load is completed.
         * @param texturePath If not specified, textures will be assumed to be in the same folder as the Javascript model file.
         */
        load(url: string, callback: (geometry: Geometry, materials: Material[]) => void , texturePath?: string): void;

        loadAjaxJSON(context: JSONLoader, url: string, callback: (geometry: Geometry, materials: Material[]) => void , texturePath?: string, callbackProgress?: (progress: Progress) => void ): void;

        parse(json: any, texturePath?: string): { geometry: Geometry; materials?: Material[] };
    }

    /**
     * Handles and keeps track of loaded and pending data.
     */
    export class LoadingManager {
        constructor(onLoad?: () => void, onProgress?: (url: string, loaded: number, total: number) => void, onError?: () => void);

        /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
        onLoad: () => void;

        /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
        onProgress: (item:any, loaded:number, total:number) => void;

        /**
         * Will be called when each element in the scene completes loading.
         * The default is a function with empty body.
         */
        onError: () => void;

        itemStart(url: string): void;
        itemEnd(url: string): void;

    }

    export class MaterialLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;

        load(url: string, onLoad: (material: Material) => void): void;
        setCrossOrigin(crossOrigin: string): void;
        parse(json: any): Material;
    }

    export class ObjectLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        texturePass: string;

        load(url: string, onLoad?: (object: Object3D) => void): void;
        setTexturePath( value: string ): void;
        setCrossOrigin(crossOrigin: string): void;
        parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
        parseGeometries(json: any): any[]; // Array of BufferGeometry or Geometry or Geometry2.
        parseMaterials(json: any, textures: Texture[]): Material[]; // Array of Classes that inherits from Matrial.
        parseImages( json: any, onLoad: () => void ): any[];
        parseTextures( json: any, images: any ): Texture[];
        parseObject<T extends Object3D>(data: any, geometries: any[], materials: Material[]): T;

    }

    /**
     * Class for loading a texture.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    export class TextureLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        crossOrigin: string;

        /**
         * Begin loading from url
         *
         * @param url
         */
        load(url: string, onLoad: (texture: Texture) => void): void;
        setCrossOrigin(crossOrigin: string): void;
    }

    export class XHRLoader {
        constructor(manager?: LoadingManager);

        cache: Cache;
        manager: LoadingManager;
        responseType: string;
        crossOrigin: string;

        load(url: string, onLoad?: (responseText: string) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
        setResponseType(responseType: string): void;
        setCrossOrigin(crossOrigin: string): void;
    }

    // Materials //////////////////////////////////////////////////////////////////////////////////
    export interface MaterialParameters {
        name?: string;
        side?: Side;
        opacity?: number;
        transparent?: boolean;
        blending?: Blending;
        blendSrc?: BlendingDstFactor;
        blendDst?: BlendingSrcFactor;
        blendEquation?: BlendingEquation;
        depthTest?: boolean;
        depthWrite?: boolean;
        polygonOffset?: boolean;
        polygonOffsetFactor?: number;
        polygonOffsetUnits?: number;
        alphaTest?: number;
        overdraw?: number;
        visible?: boolean;
        needsUpdate?: boolean;
    }

    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
    export class Material {
        constructor();

        /**
         * Unique number of this material instance.
         */
        id: number;

        uuid: string;

        /**
         * Material name. Default is an empty string.
         */
        name: string;

        type: string;

        /**
         * Defines which of the face sides will be rendered - front, back or both.
         * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
         */
        side: Side;

        /**
         * Opacity. Default is 1.
         */
        opacity: number;

        /**
         * Defines whether this material is transparent. This has an effect on rendering, as transparent objects need an special treatment, and are rendered after the opaque (i.e. non transparent) objects. For a working example of this behaviour, check the {@link WebGLRenderer} code.
         * Default is false.
         */
        transparent: boolean;

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

        blendSrcAlpha: number;
        blendDstAlpha: number;
        blendEquationAlpha: number;

        /**
         * Whether to have depth test enabled when rendering this material. Default is true.
         */
        depthTest: boolean;

        /**
         * Whether rendering this material has any effect on the depth buffer. Default is true.
         * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
         */
        depthWrite: boolean;

        colorWrite: boolean;

        /**
         * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
         */
        polygonOffset: boolean;

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
         * Enables/disables overdraw. If greater than zero, polygons are drawn slightly bigger in order to fix antialiasing gaps when using the CanvasRenderer. Default is 0.
         */
        overdraw: number;

        /**
         * Defines whether this material is visible. Default is true.
         */
        visible: boolean;

        /**
         * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
         * This property is automatically set to true when instancing a new material.
         */
        needsUpdate: boolean;

        setValues(values: Object): void;
        toJSON(): any;
        clone(material?:Material): Material;
        update(): void;
        dispose(): void;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void ): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;
    }

    export interface LineBasicMaterialParameters extends MaterialParameters {
        color?: number;
        linewidth?: number;
        linecap?: string;
        linejoin?: string;
        vertexColors?: Colors;
        fog?: boolean;
    }

    export class LineBasicMaterial extends Material {
        constructor(parameters?: LineBasicMaterialParameters);

        color: Color;
        linewidth: number;
        linecap: string;
        linejoin: string;
        vertexColors: Colors;
        fog: boolean;

        clone(): LineBasicMaterial;
    }

    export interface LineDashedMaterialParameters extends MaterialParameters {
        color?: number;
        linewidth?: number;
        scale?: number;
        dashSize?: number;
        gapSize?: number;
        vertexColors?: Colors;
        fog?: boolean;
    }

    export class LineDashedMaterial extends Material {
        constructor(parameters?: LineDashedMaterialParameters);

        color: Color;
        linewidth: number;
        scale: number;
        dashSize: number;
        gapSize: number;
        vertexColors: Colors;
        fog: boolean;

        clone(): LineDashedMaterial;
    }

    /**
     * parameters is an object with one or more properties defining the material's appearance.
     */
    export interface MeshBasicMaterialParameters extends MaterialParameters{
        color?: number;
        map?: Texture;
        lightMap?: Texture;
        specularMap?: Texture;
        alphaMap?: Texture;
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        fog?: boolean;
        shading?: Shading;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        vertexColors?: Colors;
        skinning?: boolean;
        morphTargets?: boolean;
    }

    export class MeshBasicMaterial extends Material {
        constructor(parameters?: MeshBasicMaterialParameters);

        color: Color;
        map: Texture;
        lightMap: Texture;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        fog: boolean;
        shading: Shading;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        skinning: boolean;
        morphTargets: boolean;

        clone(): MeshBasicMaterial;
    }

    export interface MeshDepthMaterialParameters extends MaterialParameters{
        wireframe?: boolean;
        wireframeLinewidth?: number;
    }

    export class MeshDepthMaterial extends Material {
        constructor(parameters?: MeshDepthMaterialParameters);

        wireframe: boolean;
        wireframeLinewidth: number;

        clone(): MeshDepthMaterial;
    }

    // MeshFaceMaterial does not inherit the Material class in the original code. However, it should treat as Material class.
    // See tests/canvas/canvas_materials.ts.
    export class MeshFaceMaterial extends Material {
        constructor(materials?: Material[]);
        materials: Material[];

        toJSON(): any;
        clone(): MeshFaceMaterial;
    }

    export interface MeshLambertMaterialParameters extends MaterialParameters{
        color?: number;
        emissive?: number;
        wrapAround?: boolean;
        wrapRGB?: Vector3;
        map?: Texture;
        lightMap?: Texture;
        specularMap?: Texture;
        alphaMap?: Texture;
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        fog?: boolean;
        shading?: Shading;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        vertexColors?: Colors;
        skinning?: boolean;
        morphTargets?: boolean;
        morphNormals?: boolean;
    }

    export class MeshLambertMaterial extends Material {
        constructor(parameters?: MeshLambertMaterialParameters);
        color: Color;
        emissive: Color;
        wrapAround: boolean;
        wrapRGB: Vector3;
        map: Texture;
        lightMap: Texture;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        fog: boolean;
        shading: Shading;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        clone(): MeshLambertMaterial;
    }

    export interface MeshNormalMaterialParameters extends MaterialParameters{
        /** Line color in hexadecimal. Default is 0xffffff. */
        color?: number;
        /** Sets the texture map. Default is null  */
        map?: Texture;
        /** Set light map. Default is null. */
        lightMap?: Texture;
        /** Set specular map. Default is null. */
        specularMap?: Texture;
        /** Set alpha map. Default is null. */
        alphaMap?: Texture;
        /** Set env map. Default is null. */
        envMap?: Texture;
        /** Define whether the material color is affected by global fog settings. Default is false. */
        fog?: boolean;
        /** How the triangles of a curved surface are rendered. Default is THREE.SmoothShading. */
        shading?: Shading;
        /** Render geometry as wireframe. Default is false (i.e. render as smooth shaded). */
        wireframe?: boolean;
        /** Controls wireframe thickness. Default is 1. */
        wireframeLinewidth?: number;
        /** Define appearance of line ends. Default is 'round'. */
        wireframeLinecap?: string;
        /** Define appearance of line joints. Default is 'round'. */
        wireframeLinejoin?: string;
        /** Define how the vertices gets colored. Default is THREE.NoColors. */
        vertexColors?: Colors;
        /** Define whether the material uses skinning. Default is false. */
        skinning?: boolean;
        /** Define whether the material uses morphTargets. Default is false. */
        morphTargets?: boolean;
    }

    export class MeshNormalMaterial extends Material {
        constructor(parameters?: MeshNormalMaterialParameters);

        wireframe: boolean;
        wireframeLinewidth: number;
        morphTargets: boolean;

        clone(): MeshNormalMaterial;
    }

    export interface MeshPhongMaterialParameters extends MaterialParameters {
        /** geometry color in hexadecimal. Default is 0xffffff. */
        color?: number;
        /** Sets the texture map. Default is null */
        map?: Texture;
        /** Set light map. Default is null */
        lightMap?: Texture;
        /** Set specular map. Default is null */
        specularMap?: Texture;
        /** Set alpha map. Default is null */
        alphaMap?: Texture;
        /** Set env map. Default is null */
        envMap?: Texture;
        /** Define whether the material color is affected by global fog settings. Default is true */
        fog?: boolean;
        /** Define shading type. Default is THREE.SmoothShading */
        shading?: Shading;
        /** render geometry as wireframe. Default is false */
        wireframe?: string;
        /** Line thickness. Default is 1. */
        wireframeLinewidth?: number;
        /** Define appearance of line ends. Default is 'round' */
        wireframeLinecap?: string;
        /** Define appearance of line joints. Default is 'round'. */
        wireframeLinejoin?: string;
        /** Define how the vertices gets colored. Default is THREE.NoColors. */
        vertexColors?: Colors;
        /** Define whether the material uses skinning. Default is false. */
        skinning?: boolean;

        /** Define whether the material uses morphTargets. Default is false. */
        morphTargets?: boolean;

        emissive?: number;
        specular?: number;
        shininess?: number;
        metal?: boolean;
        wrapAround?: boolean;
        wrapRGB?: Vector3;
        bumpMap?: Texture;
        bumpScale?: number;
        normalMap?: Texture;
        normalScale?: Vector2;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        morphNormals?: boolean;
    }

    export class MeshPhongMaterial extends Material {
        constructor(parameters?: MeshPhongMaterialParameters);

        color: Color; // diffuse
        emissive: Color;
        specular: Color;
        shininess: number;
        metal: boolean;
        wrapAround: boolean;
        wrapRGB: Vector3;
        map: Texture;
        lightMap: Texture;
        bumpMap: Texture;
        bumpScale: number;
        normalMap: Texture;
        normalScale: Vector2;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        fog: boolean;
        shading: Shading;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        vertexColors: Colors;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        clone(): MeshPhongMaterial;
    }

    export interface PointCloudMaterialParameters extends MaterialParameters{
        color?: number;
        map?: Texture;
        size?: number;
        sizeAttenuation?: boolean;
        vertexColors?: Colors;
        fog?: boolean;
    }

    export class PointCloudMaterial extends Material {
        constructor(parameters?: PointCloudMaterialParameters);

        color: Color;
        map: Texture;
        size: number;
        sizeAttenuation: boolean;
        vertexColors: boolean;
        fog: boolean;

        clone(): PointCloudMaterial;
    }

    // deprecated
    export class ParticleBasicMaterial extends PointCloudMaterial{

    }

    // deprecated
    export class ParticleSystemMaterial extends PointCloudMaterial{

    }

    export class RawShaderMaterial extends ShaderMaterial {
        constructor(parameters?: ShaderMaterialParameters);

    }

    export interface ShaderMaterialParameters extends MaterialParameters{
        defines?: any;
        uniforms?: any;
        attributes?: any;
        vertexShader?: string;
        fragmentShader?: string;
        shading?: Shading;
        linewidth?: number;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        fog?: boolean;
        lights?: boolean;
        vertexColors?: Colors;
        skinning?: boolean;
        morphTargets?: boolean;
        morphNormals?: boolean;
    }

    export class ShaderMaterial extends Material {
        constructor(parameters?: ShaderMaterialParameters);

        defines: any;
        uniforms: any;
        attributes: any;
        vertexShader: string;
        fragmentShader: string;
        shading: Shading;
        linewidth: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        fog: boolean;
        lights: boolean;
        vertexColors: Colors;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        clone(): ShaderMaterial;
    }

    export interface SpriteMaterialParameters extends MaterialParameters{
        color?: number;
        map?: Texture;
        rotation?: number;
        fog?: boolean;
    }

    export class SpriteMaterial extends Material {
        constructor(parameters?: SpriteMaterialParameters);

        color: Color;
        map: Texture;
        rotation: number;
        fog: boolean;

        clone(): SpriteMaterial;
    }

    // Math //////////////////////////////////////////////////////////////////////////////////

    export class Box2 {
        constructor(min?: Vector2, max?: Vector2);

        max: Vector2;
        min: Vector2;

        set(min: Vector2, max: Vector2): Box2;
        setFromPoints(points: Vector2[]): Box2;
        setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
        copy(box: Box2): Box2;
        makeEmpty(): Box2;
        empty(): boolean;
        center(optionalTarget?: Vector2): Vector2;
        size(optionalTarget?: Vector2): Vector2;
        expandByPoint(point: Vector2): Box2;
        expandByVector(vector: Vector2): Box2;
        expandByScalar(scalar: number): Box2;
        containsPoint(point: Vector2): boolean;
        containsBox(box: Box2): boolean;
        getParameter(point: Vector2): Vector2;
        isIntersectionBox(box: Box2): boolean;
        clampPoint(point: Vector2, optionalTarget?: Vector2): Vector2;
        distanceToPoint(point: Vector2): number;
        intersect(box: Box2): Box2;
        union(box: Box2): Box2;
        translate(offset: Vector2): Box2;
        equals(box: Box2): boolean;
        clone(): Box2;
    }

    export class Box3 {
        constructor(min?: Vector3, max?: Vector3);

        max: Vector3;
        min: Vector3;

        set(min: Vector3, max: Vector3): Box3;
        setFromPoints(points: Vector3[]): Box3;
        setFromCenterAndSize(center: Vector3, size: Vector3): Box3;
        setFromObject(object: Object3D): Box3;
        copy(box: Box3): Box3;
        makeEmpty(): Box3;
        empty(): boolean;
        center(optionalTarget?: Vector3): Vector3;
        size(optionalTarget?: Vector3): Vector3;
        expandByPoint(point: Vector3): Box3;
        expandByVector(vector: Vector3): Box3;
        expandByScalar(scalar: number): Box3;
        containsPoint(point: Vector3): boolean;
        containsBox(box: Box3): boolean;
        getParameter(point: Vector3): Vector3;
        isIntersectionBox(box: Box3): boolean;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        distanceToPoint(point: Vector3): number;
        getBoundingSphere(optionalTarget?: Sphere): Sphere;
        intersect(box: Box3): Box3;
        union(box: Box3): Box3;
        applyMatrix4(matrix: Matrix4): Box3;
        translate(offset: Vector3): Box3;
        equals(box: Box3): boolean;
        clone(): Box3;
    }

    export interface HSL {
        h: number;
        s: number;
        l: number;
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
        constructor(color?: Color);
        constructor(color?: string);
        constructor(color?: number);
        constructor(r: number, g: number, b: number);

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

        set(color: Color): Color;
        set(color: number): Color;
        set(color: string): Color;
        setHex(hex: number): Color;

        /**
         * Sets this color from RGB values.
         * @param r Red channel value between 0 and 1.
         * @param g Green channel value between 0 and 1.
         * @param b Blue channel value between 0 and 1.
         */
        setRGB(r: number, g: number, b: number): Color;

        /**
         * Sets this color from HSL values.
         * Based on MochiKit implementation by Bob Ippolito.
         *
         * @param h Hue channel value between 0 and 1.
         * @param s Saturation value channel between 0 and 1.
         * @param l Value channel value between 0 and 1.
         */
        setHSL(h: number, s: number, l: number): Color;

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
        copyGammaToLinear(color: Color, gammaFactor?: number): Color;

        /**
         * Copies given color making conversion from linear to gamma space.
         * @param color Color to copy.
         */
        copyLinearToGamma(color: Color, gammaFactor?: number): Color;

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

        getHSL(): HSL;

        /**
         * Returns the value of this color in CSS context style.
         * Example: rgb(r, g, b)
         */
        getStyle(): string;

        offsetHSL(h: number, s: number, l: number): Color;

        add(color: Color): Color;
        addColors(color1: Color, color2: Color): Color;
        addScalar(s: number): Color;
        multiply(color: Color): Color;
        multiplyScalar(s: number): Color;
        lerp(color: Color, alpha: number): Color;
        equals(color: Color): boolean;
        fromArray(rgb: number[]): Color;
        toArray(array?: number[], offset?: number): number[];

        /**
         * Clones this color.
         */
        clone(): Color;
    }

    export class ColorKeywords {
        static aliceblue: number;
        static antiquewhite: number;
        static aqua: number;
        static aquamarine: number;
        static azure: number;
        static beige: number;
        static bisque: number;
        static black: number;
        static blanchedalmond: number;
        static blue: number;
        static blueviolet: number;
        static brown: number;
        static burlywood: number;
        static cadetblue: number;
        static chartreuse: number;
        static chocolate: number;
        static coral: number;
        static cornflowerblue: number;
        static cornsilk: number;
        static crimson: number;
        static cyan: number;
        static darkblue: number;
        static darkcyan: number;
        static darkgoldenrod: number;
        static darkgray: number;
        static darkgreen: number;
        static darkgrey: number;
        static darkkhaki: number;
        static darkmagenta: number;
        static darkolivegreen: number;
        static darkorange: number;
        static darkorchid: number;
        static darkred: number;
        static darksalmon: number;
        static darkseagreen: number;
        static darkslateblue: number;
        static darkslategray: number;
        static darkslategrey: number;
        static darkturquoise: number;
        static darkviolet: number;
        static deeppink: number;
        static deepskyblue: number;
        static dimgray: number;
        static dimgrey: number;
        static dodgerblue: number;
        static firebrick: number;
        static floralwhite: number;
        static forestgreen: number;
        static fuchsia: number;
        static gainsboro: number;
        static ghostwhite: number;
        static gold: number;
        static goldenrod: number;
        static gray: number;
        static green: number;
        static greenyellow: number;
        static grey: number;
        static honeydew: number;
        static hotpink: number;
        static indianred: number;
        static indigo: number;
        static ivory: number;
        static khaki: number;
        static lavender: number;
        static lavenderblush: number;
        static lawngreen: number;
        static lemonchiffon: number;
        static lightblue: number;
        static lightcoral: number;
        static lightcyan: number;
        static lightgoldenrodyellow: number;
        static lightgray: number;
        static lightgreen: number;
        static lightgrey: number;
        static lightpink: number;
        static lightsalmon: number;
        static lightseagreen: number;
        static lightskyblue: number;
        static lightslategray: number;
        static lightslategrey: number;
        static lightsteelblue: number;
        static lightyellow: number;
        static lime: number;
        static limegreen: number;
        static linen: number;
        static magenta: number;
        static maroon: number;
        static mediumaquamarine: number;
        static mediumblue: number;
        static mediumorchid: number;
        static mediumpurple: number;
        static mediumseagreen: number;
        static mediumslateblue: number;
        static mediumspringgreen: number;
        static mediumturquoise: number;
        static mediumvioletred: number;
        static midnightblue: number;
        static mintcream: number;
        static mistyrose: number;
        static moccasin: number;
        static navajowhite: number;
        static navy: number;
        static oldlace: number;
        static olive: number;
        static olivedrab: number;
        static orange: number;
        static orangered: number;
        static orchid: number;
        static palegoldenrod: number;
        static palegreen: number;
        static paleturquoise: number;
        static palevioletred: number;
        static papayawhip: number;
        static peachpuff: number;
        static peru: number;
        static pink: number;
        static plum: number;
        static powderblue: number;
        static purple: number;
        static red: number;
        static rosybrown: number;
        static royalblue: number;
        static saddlebrown: number;
        static salmon: number;
        static sandybrown: number;
        static seagreen: number;
        static seashell: number;
        static sienna: number;
        static silver: number;
        static skyblue: number;
        static slateblue: number;
        static slategray: number;
        static slategrey: number;
        static snow: number;
        static springgreen: number;
        static steelblue: number;
        static tan: number;
        static teal: number;
        static thistle: number;
        static tomato: number;
        static turquoise: number;
        static violet: number;
        static wheat: number;
        static white: number;
        static whitesmoke: number;
        static yellow: number;
        static yellowgreen: number;
    }

    export class Euler {
        constructor(x?: number, y?: number, z?: number, order?: string);

        x: number;
        y: number;
        z: number;
        order: string;

        set(x: number, y: number, z: number, order?: string): Euler;
        copy(euler: Euler): Euler;
        setFromRotationMatrix(m: Matrix4, order?: string, update?: boolean): Euler;
        setFromQuaternion(q:Quaternion, order?: string, update?: boolean): Euler;
        setFromVector3( v: Vector3, order?: string ): Euler;
        reorder(newOrder: string): Euler;
        equals(euler: Euler): boolean;
        fromArray(xyzo: any[]): Euler;
        toArray(array?: number[], offset?: number): number[];
        toVector3(optionalResult?: Vector3): Vector3;
        onChange: () => void;

        clone(): Euler;
    }

    /**
     * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
     */
    export class Frustum {
        constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);

        /**
         * Array of 6 vectors.
         */
        planes: Plane[];

        set(p0?: number, p1?: number, p2?: number, p3?: number, p4?: number, p5?: number): Frustum;
        copy(frustum: Frustum): Frustum;
        setFromMatrix(m: Matrix4): Frustum;
        intersectsObject(object: Object3D): boolean;
        intersectsSphere(sphere: Sphere): boolean;
        intersectsBox(box: Box3): boolean;
        containsPoint(point: Vector3): boolean;
        clone(): Frustum;

    }

    export class Line3 {
        constructor(start?: Vector3, end?: Vector3);
        start: Vector3;
        end: Vector3;

        set(start?: Vector3, end?: Vector3): Line3;
        copy(line: Line3): Line3;
        center(optionalTarget?: Vector3): Vector3;
        delta(optionalTarget?: Vector3): Vector3;
        distanceSq(): number;
        distance(): number;
        at(t: number, optionalTarget?: Vector3): Vector3;
        closestPointToPointParameter(point: Vector3, clampToLine?: boolean): number;
        closestPointToPoint(point: Vector3, clampToLine?: boolean, optionalTarget?: Vector3): Vector3;
        applyMatrix4(matrix: Matrix4): Line3;
        equals(line: Line3): boolean;
        clone(): Line3;
    }

    interface Math {
        generateUUID(): string;

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

        smoothstep(x: number, min: number, max: number): number;

        smootherstep(x: number, min: number, max: number): number;

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

        degToRad(degrees: number): number;

        radToDeg(radians: number): number;

        isPowerOfTwo(value: number): boolean;

        nextPowerOfTwo(value: number): number;
    }

    /**
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Math.js">src/math/Math.js</a>
     */
    export var Math: Math;

    /**
     * ( interface Matrix&lt;T&gt; )
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

        /**
         * multiplyScalar(s:number):T;
         */
        multiplyScalar(s: number): Matrix;

        determinant(): number;

        /**
         * getInverse(matrix:T, throwOnInvertible?:boolean):T;
         */
        getInverse(matrix: Matrix, throwOnInvertible?: boolean): Matrix;

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
     * ( class Matrix3 implements Matrix&lt;Matrix3&gt; )
     */
    export class Matrix3 implements Matrix {
        /**
         * Creates an identity matrix.
         */
        constructor();

        /**
         * Initialises the matrix with the supplied n11..n33 values.
         */
        constructor(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number);

        /**
         * Float32Array with matrix values.
         */
        elements: Float32Array;

        set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): Matrix3;
        identity(): Matrix3;
        copy(m: Matrix3): Matrix3;
        applyToVector3Array(array: number[], offset?: number, length?: number): number[];
        multiplyScalar(s: number): Matrix3;
        determinant(): number;
        getInverse(matrix: Matrix3, throwOnInvertible?: boolean): Matrix3;
        getInverse(matrix: Matrix4, throwOnInvertible?: boolean): Matrix3;

        /**
         * Transposes this matrix in place.
         */
        transpose(): Matrix3;
        flattenToArrayOffset(array: number[], offset: number): number[];
        getNormalMatrix(m: Matrix4): Matrix3;

        /**
         * Transposes this matrix into the supplied array r, and returns itself.
         */
        transposeIntoArray(r: number[]): number[];
        fromArray(array: number[]): Matrix3;
        toArray(): number[];
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
         * Initialises the matrix with the supplied n11..n44 values.
         */
        constructor(n11?: number, n12?: number, n13?: number, n14?: number, n21?: number, n22?: number, n23?: number, n24?: number, n31?: number, n32?: number, n33?: number, n34?: number, n41?: number, n42?: number, n43?: number, n44?: number);

        /**
         * Float32Array with matrix values.
         */
        elements: Float32Array;

        /**
         * Sets all fields of this matrix.
         */
        set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): Matrix4;

        /**
         * Resets this matrix to identity.
         */
        identity(): Matrix4;

        /**
         * Copies a matrix m into this matrix.
         */
        copy(m: Matrix4): Matrix4;
        copyPosition(m: Matrix4): Matrix4;

        extractBasis( xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
        makeBasis( xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;

        /**
         * Copies the rotation component of the supplied matrix m into this matrix rotation component.
         */
        extractRotation(m: Matrix4): Matrix4;
        makeRotationFromEuler(euler: Euler): Matrix4;
        makeRotationFromQuaternion(q: Quaternion): Matrix4;
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
        applyToVector3Array(array: number[], offset?: number, length?: number): number[];

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
         * Flattens this matrix into supplied flat array starting from offset position in the array.
         */
        flattenToArrayOffset(array: number[], offset: number): number[];

        /**
         * Sets the position component for this matrix from vector v.
         */
        setPosition(v: Vector3): Vector3;

        /**
         * Sets this matrix to the inverse of matrix m.
         * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm.
         */
        getInverse(m: Matrix4, throwOnInvertible?: boolean): Matrix4;

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
         * Sets this matrix to the transformation composed of translation, rotation and scale.
         */
        compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

        /**
         * Decomposes this matrix into the translation, rotation and scale components.
         * If parameters are not passed, new instances will be created.
         */
        decompose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3): Object[]; // [Vector3, Quaternion, Vector3]

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
        fromArray(array: number[]): Matrix4;
        toArray(): number[];
        /**
         * Clones this matrix.
         */
        clone(): Matrix4;
    }

    export class Plane {
        constructor(normal?: Vector3, constant?: number);

        normal: Vector3;
        constant: number;

        set(normal: Vector3, constant: number): Plane;
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
        isIntersectionLine(line: Line3): boolean;
        intersectLine(line: Line3, optionalTarget?: Vector3): Vector3;
        coplanarPoint(optionalTarget?: boolean): Vector3;
        applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
        translate(offset: Vector3): Plane;
        equals(plane: Plane): boolean;
        clone(): Plane;
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
        set(x: number, y: number, z: number, w: number): Quaternion;

        /**
         * Copies values of q to this quaternion.
         */
        copy(q: Quaternion): Quaternion;

        /**
         * Sets this quaternion from rotation specified by Euler angles.
         */
        setFromEuler(euler: Euler, update?: boolean): Quaternion;

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
        setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
        /**
         * Inverts this quaternion.
         */
        inverse(): Quaternion;

        conjugate(): Quaternion;
        dot(v: Vector3): number;
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

        /**
          * Deprecated. Use Vector3.applyQuaternion instead
          */
        multiplyVector3(vector: Vector3): Vector3;
        slerp(qb: Quaternion, t: number): Quaternion;
        equals(v: Quaternion): boolean;
        fromArray(n: number[]): Quaternion;
        toArray(): number[];

        fromArray(xyzw: number[], offset?: number): Quaternion;
        toArray(xyzw?: number[], offset?: number): number[];

        onChange: () => void;

        /**
         * Clones this quaternion.
         */
        clone(): Quaternion;

        /**
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
         */
        static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;
    }

    export class Ray {
        constructor(origin?: Vector3, direction?: Vector3);

        origin: Vector3;
        direction: Vector3;

        set(origin: Vector3, direction: Vector3): Ray;
        copy(ray: Ray): Ray;
        at(t: number, optionalTarget?: Vector3): Vector3;
        recast(t: number): Ray;
        closestPointToPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        distanceToPoint(point: Vector3): number;
        distanceSqToSegment(v0: Vector3, v1: Vector3, optionalPointOnRay?: Vector3, optionalPointOnSegment?: Vector3): number;
        isIntersectionSphere(sphere: Sphere): boolean;
        intersectSphere(sphere: Sphere, optionalTarget?: Vector3): Vector3;
        isIntersectionPlane(plane: Plane): boolean;
        distanceToPlane(plane: Plane): number;
        intersectPlane(plane: Plane, optionalTarget?: Vector3): Vector3;
        isIntersectionBox(box: Box3): boolean;
        intersectBox(box: Box3, optionalTarget?: Vector3): Vector3;
        intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, optionalTarget?: Vector3): Vector3;
        applyMatrix4(matrix4: Matrix4): Ray;
        equals(ray: Ray): boolean;
        clone(): Ray;
    }

    export class Sphere {
        constructor(center?: Vector3, radius?: number);

        center: Vector3;
        radius: number;

        set(center: Vector3, radius: number): Sphere;
        setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
        copy(sphere: Sphere): Sphere;
        empty(): boolean;
        containsPoint(point: Vector3): boolean;
        distanceToPoint(point: Vector3): number;
        intersectsSphere(sphere: Sphere): boolean;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        getBoundingBox(optionalTarget?: Box3): Box3;
        applyMatrix4(matrix: Matrix4): Sphere;
        translate(offset: Vector3): Sphere;
        equals(sphere: Sphere): boolean;

        clone(): Sphere;
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

    class Triangle {
        constructor(a?: Vector3, b?: Vector3, c?: Vector3);

        a: Vector3;
        b: Vector3;
        c: Vector3;

        set(a: Vector3, b: Vector3, c: Vector3): Triangle;
        setFromPointsAndIndices(points: Vector3[], i0: number, i1: number, i2: number): Triangle;
        copy(triangle: Triangle): Triangle;
        area(): number;
        midpoint(optionalTarget?: Vector3): Vector3;
        normal(optionalTarget?: Vector3): Vector3;
        plane(optionalTarget?: Vector3): Plane;
        barycoordFromPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        containsPoint(point: Vector3): boolean;
        equals(triangle: Triangle): boolean;
        clone(): Triangle;

        static normal(a: Vector3, b: Vector3, c: Vector3, optionalTarget?: Vector3): Vector3;
        static barycoordFromPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3, optionalTarget: Vector3): Vector3;
        static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
    }


    /**
     * ( interface Vector&lt;T&gt; )
     *
     * Abstruct interface of Vector2, Vector3 and Vector4.
     * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
     * Those definitions will be changed when TypeScript innovates Generics to be type safe.
     *
     * @example
     * var v:THREE.Vector = new THREE.Vector3();
     * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3));    // invalid but compiled successfully
     */
    export interface Vector {
        setComponent(index: number, value: number): void;

        getComponent(index: number): number;

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
        distanceTo?(v: Vector): number;

        /**
         * NOTE: Vector4 doesn't have the property.
         *
         * distanceToSquared(v:T):number;
         */
        distanceToSquared?(v: Vector): number;

        /**
         * setLength(l:number):T;
         */
        setLength(l: number): Vector;

        /**
         * lerp(v:T, alpha:number):T;
         */
        lerp(v: Vector, alpha: number): Vector;

        /**
         * equals(v:T):boolean;
         */
        equals(v: Vector): boolean;

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
        set(x: number, y: number): Vector2;

        /**
         * Sets X component of this vector.
         */
        setX(x: number): Vector2;

        /**
         * Sets Y component of this vector.
         */
        setY(y: number): Vector2;

        /**
         * Sets a component of this vector.
         */
        setComponent(index: number, value: number): void;

        /**
         * Gets a component of this vector.
         */
        getComponent(index: number): number;

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
        addScalar(s: number): Vector2;
        addVectors(a: Vector2, b: Vector2): Vector2;

        /**
         * Subtracts v from this vector.
         */
        sub(v: Vector2): Vector2;

        /**
         * Sets this vector to a - b.
         */
        subVectors(a: Vector2, b: Vector2): Vector2;

        multiply(v: Vector2): Vector2;
        /**
         * Multiplies this vector by scalar s.
         */
        multiplyScalar(s: number): Vector2;

        divide(v: Vector2): Vector2;
        /**
         * Divides this vector by scalar s.
         * Set vector to ( 0, 0 ) if s == 0.
         */
        divideScalar(s: number): Vector2;

        min(v: Vector2): Vector2;

        max(v: Vector2): Vector2;
        clamp(min: Vector2, max: Vector2): Vector2;
        clampScalar(min: number, max: number): Vector2;
        floor(): Vector2;
        ceil(): Vector2;
        round(): Vector2;
        roundToZero(): Vector2;

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

        lerpVectors(v1: Vector2, v2: Vector2, alpha: number): Vector2;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector2): boolean;

        fromArray(xy: number[], offset?: number): Vector2;

        toArray(xy?: number[], offset?: number): number[];

        fromAttribute( attribute: BufferAttribute, index: number, offset?: number): Vector2;

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
        set(x: number, y: number, z: number): Vector3;

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
        add(a: Vector3): Vector3;
        addScalar(s: number): Vector3;

        /**
         * Sets this vector to a + b.
         */
        addVectors(a: Vector3, b: Vector3): Vector3;

        /**
         * Subtracts v from this vector.
         */
        sub(a: Vector3): Vector3;

        subScalar( s: number ): Vector3;

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
        applyEuler(euler: Euler): Vector3;
        applyAxisAngle(axis: Vector3, angle: number): Vector3;
        applyMatrix3(m: Matrix3): Vector3;
        applyMatrix4(m: Matrix4): Vector3;
        applyProjection(m: Matrix4): Vector3;
        applyQuaternion(q: Quaternion): Vector3;
        project(camrea: Camera): Vector3;
        unproject(camera: Camera): Vector3;
        transformDirection(m: Matrix4): Vector3;
        divide(v: Vector3): Vector3;

        /**
         * Divides this vector by scalar s.
         * Set vector to ( 0, 0, 0 ) if s == 0.
         */
        divideScalar(s: number): Vector3;
        min(v: Vector3): Vector3;
        max(v: Vector3): Vector3;
        clamp(min: Vector3, max: Vector3): Vector3;
        clampScalar(min: number, max: number): Vector3;
        floor(): Vector3;
        ceil(): Vector3;
        round(): Vector3;
        roundToZero(): Vector3;

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

        lerpVectors(v1: Vector3, v2: Vector3, alpha: number): Vector3;

        /**
         * Sets this vector to cross product of itself and v.
         */
        cross(a: Vector3): Vector3;

        /**
         * Sets this vector to cross product of a and b.
         */
        crossVectors(a: Vector3, b: Vector3): Vector3;
        projectOnVector(v: Vector3): Vector3;
        projectOnPlane(planeNormal: Vector3): Vector3;
        reflect(vector: Vector3): Vector3;
        angleTo(v: Vector3): number;

        /**
         * Computes distance of this vector to v.
         */
        distanceTo(v: Vector3): number;

        /**
         * Computes squared distance of this vector to v.
         */
        distanceToSquared(v: Vector3): number;

        setFromMatrixPosition(m: Matrix4): Vector3;
        setFromMatrixScale(m: Matrix4): Vector3;
        setFromMatrixColumn(index: number, matrix: Matrix4): Vector3;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector3): boolean;

        fromArray(xyz: number[], offset?: number): Vector3;

        toArray(xyz?: number[], offset?: number): number[];

        fromAttribute( attribute: BufferAttribute, index: number, offset?: number): Vector3;

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
        set(x: number, y: number, z: number, w: number): Vector4;

        /**
         * Sets X component of this vector.
         */
        setX(x: number): Vector4;

        /**
         * Sets Y component of this vector.
         */
        setY(y: number): Vector4;

        /**
         * Sets Z component of this vector.
         */
        setZ(z: number): Vector4;

        /**
         * Sets w component of this vector.
         */
        setW(w: number): Vector4;

        setComponent(index: number, value: number): void;
        getComponent(index: number): number;

        /**
         * Copies value of v to this vector.
         */
        copy(v: Vector4): Vector4;

        /**
         * Adds v to this vector.
         */
        add(v: Vector4): Vector4;
        addScalar(s: number): Vector4;

        /**
         * Sets this vector to a + b.
         */
        addVectors(a: Vector4, b: Vector4): Vector4;

        /**
         * Subtracts v from this vector.
         */
        sub(v: Vector4): Vector4;

        subScalar(s: number): Vector4;

        /**
         * Sets this vector to a - b.
         */
        subVectors(a: Vector4, b: Vector4): Vector4;

        /**
         * Multiplies this vector by scalar s.
         */
        multiplyScalar(s: number): Vector4;
        applyMatrix4(m: Matrix4): Vector4;

        /**
         * Divides this vector by scalar s.
         * Set vector to ( 0, 0, 0 ) if s == 0.
         */
        divideScalar(s: number): Vector4;

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

        min(v: Vector4): Vector4;
        max(v: Vector4): Vector4;
        clamp(min: Vector4, max: Vector4): Vector4;
        clampScalar(min: number, max: number): Vector4;
        floor(): Vector4;
        ceil(): Vector4;
        round(): Vector4;
        roundToZero(): Vector4;

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
         * Computes length of this vector.
         */
        length(): number;
        lengthManhattan(): number;

        /**
         * Normalizes this vector.
         */
        normalize(): Vector4;
        /**
         * Normalizes this vector and multiplies it by l.
         */
        setLength(l: number): Vector4;

        /**
         * Linearly interpolate between this vector and v with alpha factor.
         */
        lerp(v: Vector4, alpha: number): Vector4;

        lerpVectors(v1: Vector4, v2: Vector4, alpha: number): Vector4;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector4): boolean;

        fromArray(xyzw: number[], offset?: number): Vector4;

        toArray(xyzw?: number[], offset?: number): number[];

        fromAttribute( attribute: BufferAttribute, index: number, offset?: number): Vector4;

        /**
         * Clones this vector.
         */
        clone(): Vector4;
    }

    // Objects //////////////////////////////////////////////////////////////////////////////////

    export class Bone extends Object3D {
        constructor(skin: SkinnedMesh);

        skin: SkinnedMesh;
    }

    export class Group extends Object3D {
        constructor();
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
        constructor(texture?: Texture, size?: number, distance?: number, blending?: Blending, color?: Color);

        lensFlares: LensFlareProperty[];
        positionScreen: Vector3;
        customUpdateCallback: (object: LensFlare) => void;

        add(texture: Texture, size?: number, distance?: number, blending?: Blending, color?: Color): void;
        add(obj: Object3D): void;


        updateLensFlares(): void;
    }

    export class Line extends Object3D {
        constructor(geometry?: Geometry, material?: LineDashedMaterial, mode?: number);
        constructor(geometry?: Geometry, material?: LineBasicMaterial, mode?: number);
        constructor(geometry?: Geometry, material?: ShaderMaterial, mode?: number);
        constructor(geometry?: BufferGeometry, material?: LineDashedMaterial, mode?: number);
        constructor(geometry?: BufferGeometry, material?: LineBasicMaterial, mode?: number);
        constructor(geometry?: BufferGeometry, material?: ShaderMaterial, mode?: number);

        geometry: any; // Geometry or BufferGeometry;
        material: Material; // LineDashedMaterial or LineBasicMaterial or ShaderMaterial
        mode: LineMode;

        raycast(raycaster: Raycaster, intersects: any): void;
        clone(object?: Line): Line;
    }

    export class LineSegments extends Line {
        constructor(geometry?: Geometry, material?: LineDashedMaterial);
        constructor(geometry?: Geometry, material?: LineBasicMaterial);
        constructor(geometry?: Geometry, material?: ShaderMaterial);
        constructor(geometry?: BufferGeometry, material?: LineDashedMaterial);
        constructor(geometry?: BufferGeometry, material?: LineBasicMaterial);
        constructor(geometry?: BufferGeometry, material?: ShaderMaterial);

        geometry: any; // Geometry or BufferGeometry;
        material: Material; // LineDashedMaterial or LineBasicMaterial or ShaderMaterial

        raycast(raycaster: Raycaster, intersects: any): void;
        clone(object?: LineSegments): LineSegments;
    }

    enum LineMode{}
    var LineStrip: LineMode;
    var LinePieces: LineMode;

    export class LOD extends Object3D {
        constructor();

        objects: any[];

        addLevel(object: Object3D, distance?: number): void;
        getObjectForDistance(distance: number): Object3D;
        raycast(raycaster: Raycaster, intersects: any): void;
        update(camera: Camera): void;
        clone(object?: LOD): LOD;
    }

    export class Mesh extends Object3D {
        constructor(geometry?: Geometry, material?: Material);
        constructor(geometry?: BufferGeometry, material?: Material);

        geometry: Geometry;
        material: Material;

        updateMorphTargets(): void;
        getMorphTargetIndexByName(name: string): number;
        raycast(raycaster: Raycaster, intersects: any): void;
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
        mirroredLoop: boolean;
        time: number;
        lastKeyframe: number;
        currentKeyframe: number;
        direction: number;
        directionBackwards: boolean;

        startKeyframe: number;
        endKeyframe: number;
        length: number;

        setFrameRange(start: number, end: number): void;
        setDirectionForward(): void;
        setDirectionBackward(): void;
        parseAnimations(): void;
        setAnimationLabel(label: string, start: number, end: number): void;
        playAnimation(label: string, fps: number): void;
        updateAnimation(delta: number): void;
        interpolateTargets( a: number, b: number, t: number ): void;
        clone(object?: MorphAnimMesh): MorphAnimMesh;
    }

    /**
     * A class for displaying particles in the form of variable size points. For example, if using the WebGLRenderer, the particles are displayed using GL_POINTS.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/objects/ParticleSystem.js">src/objects/ParticleSystem.js</a>
     */
    export class PointCloud extends Object3D {

        /**
         * @param geometry An instance of Geometry.
         * @param material An instance of Material (optional).
         */
        constructor(geometry: Geometry, material?: PointCloudMaterial);
        constructor(geometry: Geometry, material?: ShaderMaterial);
        constructor(geometry: BufferGeometry, material?: PointCloudMaterial);
        constructor(geometry: BufferGeometry, material?: ShaderMaterial);

        /**
         * An instance of Geometry, where each vertex designates the position of a particle in the system.
         */
        geometry: Geometry;

        /**
         * An instance of Material, defining the object's appearance. Default is a ParticleBasicMaterial with randomised colour.
         */
        material: Material;

        raycast(raycaster: Raycaster, intersects: any): void;
        clone(object?: PointCloud): PointCloud;
    }

    export class Skeleton {
        constructor(bones: Bone[], boneInverses?: Matrix4[], useVertexTexture?: boolean);

        useVertexTexture: boolean;
        identityMatrix: Matrix4;
        bones: Bone[];
        boneTextureWidth: number;
        boneTextureHeight: number;
        boneMatrices: Float32Array;
        boneTexture: DataTexture;
        boneInverses: Matrix4[];

        calculateInverses(bone: Bone): void;
        pose(): void;
        update(): void;
    }

    export class SkinnedMesh extends Mesh {
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshBasicMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshDepthMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshFaceMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshLambertMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshNormalMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshPhongMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: ShaderMaterial, useVertexTexture?: boolean);

        bindMode: string;
        bindMatrix: Matrix4;
        bindMatrixInverse: Matrix4;

        bind( skeleton: Skeleton, bindMatrix?: Matrix4 ): void;
        pose(): void;
        normalizeSkinWeights(): void;
        updateMatrixWorld(force?: boolean): void;
        clone(object?: SkinnedMesh): SkinnedMesh;

        skeleton: Skeleton;
    }

    export class Sprite extends Object3D {
        constructor(material?: Material);

        geometry: BufferGeometry;
        material: SpriteMaterial;

        raycast(raycaster: Raycaster, intersects: any): void;
        clone(object?: Sprite): Sprite;
    }


    // Renderers //////////////////////////////////////////////////////////////////////////////////

    export interface Renderer {
        render(scene: Scene, camera: Camera): void;
        setSize(width:number, height:number, updateStyle?:boolean): void;
        domElement: HTMLCanvasElement;
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
        alpha?: boolean;

        /**
         * default is true.
         */
        premultipliedAlpha?: boolean;

        /**
         * default is false.
         */
        antialias?: boolean;

        /**
         * default is true.
         */
        stencil?: boolean;

        /**
         * default is false.
         */
        preserveDrawingBuffer?: boolean;

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
        autoClear: boolean;

        /**
         * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
         */
        autoClearColor: boolean;

        /**
         * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
         */
        autoClearDepth: boolean;

        /**
         * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
         */
        autoClearStencil: boolean;

        /**
         * Defines whether the renderer should sort objects. Default is true.
         */
        sortObjects: boolean;

        gammaFactor: number;

        /**
         * Default is false.
         */
        gammaInput: boolean;

        /**
         * Default is false.
         */
        gammaOutput: boolean;

        /**
         * Default is false.
         */
        shadowMapEnabled: boolean;

        /**
         * Defines shadow map type (unfiltered, percentage close filtering, percentage close filtering with bilinear filtering in shader)
         * Options are THREE.BasicShadowMap, THREE.PCFShadowMap, THREE.PCFSoftShadowMap. Default is THREE.PCFShadowMap.
         */
        shadowMapType: ShadowMapType;

        /**
         * Default is true
         */
        shadowMapCullFace: CullFace;

        /**
         * Default is false.
         */
        shadowMapDebug: boolean;

        /**
         * Default is false.
         */
        shadowMapCascade: boolean;

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
        autoScaleCubemaps: boolean;

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

        shadowMapPlugin: ShadowMapPlugin;

        /**
         * Return the WebGL context.
         */
        getContext(): WebGLRenderingContext;

        forceContextLoss(): void;

        /**
         * Return a Boolean true if the context supports vertex textures.
         */
        supportsVertexTextures(): boolean;
        supportsFloatTextures(): boolean;
        supportsStandardDerivatives(): boolean;
        supportsCompressedTextureS3TC(): boolean;
        supportsCompressedTexturePVRTC(): boolean;
        supportsBlendMinMax(): boolean;
        getMaxAnisotropy(): number;
        getPrecision(): string;
        getPixelRatio(): number;
        setPixelRatio(value: number): void;

        /**
         * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
         */
        setSize(width: number, height: number, updateStyle?: boolean): void;

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
        enableScissorTest(enable: boolean): void;

        /**
         * Sets the clear color, using color for the color and alpha for the opacity.
         */
        setClearColor(color: Color, alpha?: number): void;
        setClearColor(color: string, alpha?: number): void;
        setClearColor(color: number, alpha?: number): void;

        setClearAlpha(alpha: number): void;

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
        clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

        clearColor(): void;
        clearDepth(): void;
        clearStencil(): void;
        clearTarget(renderTarget:WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;
        resetGLState(): void;

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
        render(scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean): void;
        renderImmediateObject(camera: Camera, lights: Light[], fog: Fog, material: Material, object: Object3D): void;

        /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param cullFace "back", "front", "front_and_back", or false.
         * @param frontFace "ccw" or "cw
         */
        setFaceCulling(cullFace?: CullFace, frontFace?: FrontFaceDirection): void;
        setMaterialFaces(material: Material): void;
        setDepthTest(depthTest: boolean): void;
        setDepthWrite(depthWrite: boolean): void;
        setBlending(blending: Blending, blendEquation: BlendingEquation, blendSrc: BlendingSrcFactor, blendDst: BlendingDstFactor): void;
        uploadTexture(texture: Texture): void;
        setTexture(texture: Texture, slot: number): void;
        setRenderTarget(renderTarget: RenderTarget): void;
        readRenderTargetPixels( renderTarget: RenderTarget, x: number, y: number, width: number, height: number, buffer: any ): void;
    }

    export interface RenderTarget {
    }

    export interface WebGLRenderTargetOptions {
        wrapS?: Wrapping;
        wrapT?: Wrapping;
        magFilter?: TextureFilter;
        minFilter?: TextureFilter;
        anisotropy?: number; // 1;
        format?: number; // RGBAFormat;
        type?: TextureDataType; // UnsignedByteType;
        depthBuffer?: boolean; // true;
        stencilBuffer?: boolean; // true;
    }

    export class WebGLRenderTarget implements RenderTarget {
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
        depthBuffer: boolean;
        stencilBuffer: boolean;
        generateMipmaps: boolean;
        shareDepthFrom: any;

        setSize(width: number, height: number): void;
        clone(): WebGLRenderTarget;
        dispose(): void;


        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void ): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;
    }

    export class WebGLRenderTargetCube extends WebGLRenderTarget {
        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);

        activeCubeFace: number; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
    }

    // Renderers / Shaders /////////////////////////////////////////////////////////////////////
    export interface ShaderChunk {
        [name: string]: string;

        common: string;
        alphamap_fragment: string;
        alphamap_pars_fragment: string;
        alphatest_fragment: string;
        bumpmap_pars_fragment: string;
        color_fragment: string;
        color_pars_fragment: string;
        color_pars_vertex: string;
        color_vertex: string;
        default_vertex: string;
        defaultnormal_vertex: string;
        envmap_fragment: string;
        envmap_pars_fragment: string;
        envmap_pars_vertex: string;
        envmap_vertex: string;
        fog_fragment: string;
        fog_pars_fragment: string;

        lightmap_fragment: string;
        lightmap_pars_fragment: string;
        lightmap_pars_vertex: string;
        lightmap_vertex: string;
        lights_lambert_pars_vertex: string;
        lights_lambert_vertex: string;
        lights_phong_fragment: string;
        lights_phong_pars_fragment: string;
        lights_phong_pars_vertex: string;
        lights_phong_vertex: string;
        linear_to_gamma_fragment: string;
        logdepthbuf_fragment: string;
        logdepthbuf_pars_fragment: string;
        logdepthbuf_pars_vertex: string;
        logdepthbuf_vertex: string;
        map_fragment: string;
        map_pars_fragment: string;
        map_pars_vertex: string;
        map_particle_fragment: string;
        map_particle_pars_fragment: string;
        map_vertex: string;
        morphnormal_vertex: string;
        morphtarget_pars_vertex: string;
        morphtarget_vertex: string;
        normalmap_pars_fragment: string;
        shadowmap_fragment: string;
        shadowmap_pars_fragment: string;
        shadowmap_pars_vertex: string;
        shadowmap_vertex: string;
        skinbase_vertex: string;
        skinning_pars_vertex: string;
        skinning_vertex: string;
        skinnormal_vertex: string;
        specularmap_fragment: string;
        specularmap_pars_fragment: string;
        worldpos_vertex: string;
    }

    export var ShaderChunk: ShaderChunk;

    export interface Shader {
        uniforms: any;
        vertexShader: string;
        fragmentShader: string;
    }

    export var ShaderLib: {
        [name: string]: Shader;
        basic: Shader;
        lambert: Shader;
        phong: Shader;
        particle_basic: Shader;
        dashed: Shader;
        depth: Shader;
        normal: Shader;
        normalmap: Shader;
        cube: Shader;
        equirect: Shader;
        depthRGBA: Shader;
    };

    export var UniformsLib: {
        common: any;
        bump: any;
        normalmap: any;
        fog: any;
        lights: any;
        particle: any;
        shadowmap: any;
    };

    export var UniformsUtils: {
        merge(uniforms: any[]): any;
        clone(uniforms_src: any): any;
    };

    // Renderers / WebGL /////////////////////////////////////////////////////////////////////
    export class WebGLExtensions{
        constructor(gl: any); // WebGLRenderingContext

        get(name: string): any;
    }

    export class WebGLProgram{
        constructor(renderer: WebGLRenderer, code: string, material: ShaderMaterial, parameters: WebGLRendererParameters);

        attributes: any;
        attributesKeys: string[];
        id: number;
        code: string;
        usedTimes: number;
        program: any;
        vertexShader: WebGLShader;
        fragmentShader: WebGLShader;
    }

    export class WebGLShader{
        constructor(gl: any, type: string, string: string);
    }

    interface WebGLStateInstance{
        new ( gl: any, paramThreeToGL: Function ): void;
        initAttributes(): void;
        enableAttribute(attribute: string): void;
        disableUnusedAttributes(): void;
        setBlending( blending: number, blendEquation: number, blendSrc: number, blendDst: number, blendEquationAlpha: number, blendSrcAlpha: number, blendDstAlpha: number ): void;
        setDepthTest( depthTest: number ): void;
        setDepthWrite( depthWrite: number ): void;
        setColorWrite( colorWrite: number ): void;
        setDoubleSided( doubleSided: number ): void;
        setFlipSided( flipSided: number ): void;
        setLineWidth( width: number ): void;
        setPolygonOffset(polygonoffset: number, factor: number, units: number): void;
        reset(): void;
    }
    interface WebGLStateStatic{
        ( gl: any, paramThreeToGL: Function ): WebGLStateInstance;
    }
    export var WebGLState: WebGLStateStatic;


    interface WebGLTexturesInstance{
        new (webgglcontext: any): WebGLTexturesInstance;

        get(texture: Texture): any; // it will return result of gl.createTexture().
        create(texture: Texture): any; // it will return result of gl.createTexture().
        delete(texture: Texture): void;
    }
    interface WebGLTexturesStatic{
        (webgglcontext: any): WebGLTexturesInstance;
    }
    export var WebGLTextures: WebGLTexturesStatic;


    // Renderers / WebGL / Plugins /////////////////////////////////////////////////////////////////////
    export interface RendererPlugin {
        init(renderer: WebGLRenderer): void;
        render(scene: Scene, camera: Camera, currentWidth: number, currentHeight: number): void;
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

        /**
         * Fog color.
         */
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
        constructor();

        /**
         * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
         */
        fog: IFog;

        /**
         * If not null, it will force everything in the scene to be rendered with that material. Default is null.
         */
        overrideMaterial: Material;
        autoUpdate: boolean;

        clone(): Scene;
    }

    // Textures /////////////////////////////////////////////////////////////////////
    export class CompressedTexture extends Texture {
        constructor(
            mipmaps: ImageData[],
            width: number,
            height: number,
            format?: PixelFormat,
            type?: TextureDataType,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            anisotropy?: number
        );

        image: { width: number; height: number; };
        mipmaps: ImageData[];
        flipY: boolean;
        generateMipmaps: boolean;

        clone(): CompressedTexture;
    }

    export class CubeTexture extends Texture {
        constructor(
            images: any[], // HTMLImageElement or HTMLCanvasElement
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
        );

        images: any[];

        clone(texture?: CubeTexture): CubeTexture;
    }

    export class DataTexture extends Texture {
        constructor(
            data: ImageData,
            width: number,
            height: number,
            format: PixelFormat,
            type: TextureDataType,
            mapping: Mapping,
            wrapS: Wrapping,
            wrapT: Wrapping,
            magFilter: TextureFilter,
            minFilter: TextureFilter,
            anisotropy?: number
        );

        image: { data: ImageData; width: number; height: number; };

        clone(): DataTexture;
    }

    export class Texture {
        constructor(
            image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
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
        uuid: string;
        name: string;
        sourceFile: string;
        image: any; // HTMLImageElement or ImageData ;
        mipmaps: ImageData[];
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
        generateMipmaps: boolean;
        premultiplyAlpha: boolean;
        flipY: boolean;
        unpackAlignment: number;
        needsUpdate: boolean;
        onUpdate: () => void;
        static DEFAULT_IMAGE: any;
        static DEFAULT_MAPPING: any;

        clone(): Texture;
        update(): void;
        dispose(): void;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void ): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;
    }

    class VideoTexture extends Texture {
        constructor(
            video: HTMLVideoElement,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
            );

        generateMipmaps: boolean;
    }

    // Extras /////////////////////////////////////////////////////////////////////

    export interface TypefaceData {
        familyName: string;
        cssFontWeight: string;
        cssFontStyle: string;
    }

    export var FontUtils: {
        faces: { [weight: string]: { [style: string]: Face3; }; };
        face: string;
        weight: string;
        style: string;
        size: number;
        divisions: number;

        getFace(): Face3;
        loadFace(data: TypefaceData): TypefaceData;
        drawText(text: string): { paths: Path[]; offset: number; };
        extractGlyphPoints(c: string, face: Face3, scale: number, offset: number, path: Path): { offset: number; path: Path; };

        generateShapes(text: string, parameters?: { size?: number; curveSegments?: number; font?: string; weight?: string; style?: string; }): Shape[];
        Triangulate: {
            (contour: Vector2[], indices: boolean): Vector2[];
            area(contour: Vector2[]): number;
        };
    };

    export var GeometryUtils: {
        // DEPRECATED
        merge(geometry1: Geometry, object2: Mesh, materialIndexOffset?: number): void;

        // DEPRECATED
        merge(geometry1: Geometry, object2: Geometry, materialIndexOffset?: number): void;

        // DEPRECATED
        center(geometry: Geometry): Vector3;
    };

    export var ImageUtils: {
        crossOrigin: string;

        loadTexture(url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void, onError?: (message: string) => void): Texture;
        loadTextureCube(array: string[], mapping?: Mapping, onLoad?: (texture: Texture) => void , onError?: (message: string) => void ): Texture;
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
        constructor(root: Mesh, data: AnimationData);

        root: Mesh;
        data: AnimationData;
        hierarchy: Bone[];
        currentTime: number;
        timeScale: number;
        isPlaying: boolean;
        loop: boolean;
        weight: number;
        interpolationType: number;

        play(startTime?: number, weight?: number): void;
        stop(): void;
        reset(): void;
        resetBlendWeights(): void;
        update(delta: number): void;
        getNextKeyWith(type: string, h: number, key: number): KeyFrame;
        getPrevKeyWith(type: string, h: number, key: number): KeyFrame;
    }

    export var AnimationHandler: {
        LINEAR: number;
        CATMULLROM: number;
        CATMULLROM_FORWARD: number;

        animations: any[];

        init(data: AnimationData): AnimationData;
        parse(root: Mesh): Object3D[];
        play(animation: Animation): void;
        stop(animation: Animation): void;
        update(deltaTimeMS: number): void;
    };

    export class KeyFrameAnimation {
        constructor(data: any);

        root: Mesh;
        data: AnimationData;
        hierarchy: KeyFrames[];
        currentTime: number;
        timeScale: number;
        isPlaying: boolean;
        isPaused: boolean;
        loop: boolean;

        play(startTime?: number): void;
        stop(): void;
        update(delta: number): void;
        getNextKeyWith(type: string, h: number, key: number): KeyFrame;
        getPrevKeyWith(type: string, h: number, key: number): KeyFrame;
    }

    export class MorphAnimation {
        constructor(mesh: Mesh);

        mesh: Mesh;
        frames: number;
        currentTime: number;
        duration: number;
        loop: boolean;
        lastFrame: number;
        currentFrame: number;
        isPlaying: boolean;

        play(): void;
        pause(): void;
        update(delta: number): void;
    }

    // Extras / Audio /////////////////////////////////////////////////////////////////////

    export class Audio extends Object3D {
        constructor(listener: AudioListener);
        type: string;
        context: AudioContext;
        source: AudioBufferSourceNode;
        gain: GainNode;
        panner: PannerNode;
        autoplay: boolean;
        startTime: number;
        isPlaying: boolean;

        load(file: string): Audio;
        play(): void;
        pause(): void;
        stop(): void;
        setLoop(value: boolean): void;
        setRefDistance(value: number): void;
        setRolloffFactor(value: number): void;
        setVolume(value: number): void;
        updateMatrixWorld(force?: boolean): void;
    }

    export class AudioListener extends Object3D {
        constructor();

        type: string;
        context: AudioContext;

        updateMatrixWorld(force?: boolean): void;
    }

    // Extras / Core /////////////////////////////////////////////////////////////////////

    /**
     * An extensible curve object which contains methods for interpolation
     * class Curve&lt;T extends Vector&gt;
     */
    export class Curve<T extends Vector> {
        /**
         * Returns a vector for point t of the curve where t is between 0 and 1
         * getPoint(t: number): T;
         */
        getPoint(t: number): T;

        /**
         * Returns a vector for point at relative position in curve according to arc length
         * getPointAt(u: number): T;
         */
        getPointAt(u: number):T;

        /**
         * Get sequence of points using getPoint( t )
         * getPoints(divisions?: number): T[];
         */
        getPoints(divisions?: number): T[];

        /**
         * Get sequence of equi-spaced points using getPointAt( u )
         * getSpacedPoints(divisions?: number): T[];
         */
        getSpacedPoints(divisions?: number): T[];

        /**
         * Get total curve arc length
         */
        getLength(): number;

        /**
         * Get list of cumulative segment lengths
         */
        getLengths(divisions?: number): number[];

        /**
         * Update the cumlative segment distance cache
         */
        updateArcLengths(): void;

        /**
         * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equi distance
         */
        getUtoTmapping(u: number, distance: number): number;

        /**
         * Returns a unit vector tangent at t. If the subclassed curve do not implement its tangent derivation, 2 points a small delta apart will be used to find its gradient which seems to give a reasonable approximation
         * getTangent(t: number): T;
         */
        getTangent(t: number): T;

        /**
         * Returns tangent at equidistance point u on the curve
         * getTangentAt(u: number): T;
         */
        getTangentAt(u: number): T;

        static Utils: {
            tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
            tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
            tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
            interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
        };

        static create(constructorFunc: Function, getPointFunc: Function): Function;
    }

    export interface BoundingBox {
        minX: number;
        minY: number;
        minZ?: number;
        maxX: number;
        maxY: number;
        maxZ?: number;
    }

    export class CurvePath<T extends Vector> extends Curve<T> {
        constructor();

        curves: Curve<T>[];
        bends: Path[];
        autoClose: boolean;

        add(curve: Curve<T>): void;
        checkConnection(): boolean;
        closePath(): void;
        getLength(): number;
        getCurveLengths(): number[];
        getBoundingBox(): BoundingBox;
        createPointsGeometry(divisions: number): Geometry;
        createSpacedPointsGeometry(divisions: number): Geometry;
        createGeometry(points: T[]): Geometry;
        addWrapPath(bendpath: Path): void;
        getTransformedPoints(segments: number, bends?: Path[]): T[];
        getTransformedSpacedPoints(segments: number, bends?: Path[]): T[];
        getWrapPoints(oldPts: T[], path: Path): T[];
    }

    export class Gyroscope extends Object3D {
        constructor();

        updateMatrixWorld(force?: boolean): void;
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

    export interface PathAction {
        action: PathActions;
        args: any;
    }

    /**
     * a 2d path representation, comprising of points, lines, and cubes, similar to the html5 2d canvas api. It extends CurvePath.
     */
    export class Path extends CurvePath<Vector2> {
        constructor(points?: Vector2[]);

        actions: PathAction[];

        fromPoints(vectors: Vector2[]): void;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Vector2[]): void;
        arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        ellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        getSpacedPoints(divisions?: number, closedPath?: boolean): Vector2[];
        getPoints(divisions?: number, closedPath?: boolean): Vector2[];
        toShapes(): Shape[];
    }

    /**
     * Defines a 2d shape plane using paths.
     */
    export class Shape extends Path {
        constructor(points?: Vector2[]);

        holes: Path[];

        extrude(options?: any): ExtrudeGeometry;
        makeGeometry(options?: any): ShapeGeometry;
        getPointsHoles(divisions: number): Vector2[][];
        getSpacedPointsHoles(divisions: number): Vector2[][];
        extractAllPoints(divisions: number): {
            shape: Vector2[];
            holes: Vector2[][];
        };
        extractPoints(divisions: number): Vector2[];
        extractAllSpacedPoints(divisions: Vector2): {
            shape: Vector2[];
            holes: Vector2[][];
        };

    }

    // Extras / Curves /////////////////////////////////////////////////////////////////////
    export class ArcCurve extends EllipseCurve {
        constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean );
    }

    export class ClosedSplineCurve3 extends Curve<Vector3> {
        constructor( points?:Vector3[] );

        points:Vector3[];
    }

    export class CubicBezierCurve extends Curve<Vector2> {
        constructor( v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2 );

        v0: Vector2;
        v1: Vector2;
        v2: Vector2;
        v3: Vector2;
    }
    export class CubicBezierCurve3 extends Curve<Vector3> {
        constructor( v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3 );

        v0: Vector3;
        v1: Vector3;
        v2: Vector3;
        v3: Vector3;
    }
    export class EllipseCurve extends Curve<Vector2> {
        constructor( aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean );

        aX: number;
        aY: number;
        xRadius: number;
        yRadius: number;
        aStartAngle: number;
        aEndAngle: number;
        aClockwise: boolean;
    }
    export class LineCurve extends Curve<Vector2> {
        constructor( v1: Vector2, v2: Vector2 );

        v1: Vector2;
        v2: Vector2;

    }
    export class LineCurve3 extends Curve<Vector3> {
        constructor( v1: Vector3, v2: Vector3 );

        v1: Vector3;
        v2: Vector3;
    }
    export class QuadraticBezierCurve extends Curve<Vector2> {
        constructor( v0: Vector2, v1: Vector2, v2: Vector2 );

        v0: Vector2;
        v1: Vector2;
        v2: Vector2;
    }
    export class QuadraticBezierCurve3 extends Curve<Vector3> {
        constructor( v0: Vector3, v1: Vector3, v2: Vector3 );

        v0: Vector3;
        v1: Vector3;
        v2: Vector3;
    }
    export class SplineCurve extends Curve<Vector2> {
        constructor( points?: Vector2[] );

        points:Vector2[];
    }
    export class SplineCurve3 extends Curve<Vector3> {
        constructor( points?: Vector3[] );

        points:Vector3[];
    }

    // Extras / Geomerties /////////////////////////////////////////////////////////////////////
    /**
     * BoxGeometry is the quadrilateral primitive geometry class. It is typically used for creating a cube or irregular quadrilateral of the dimensions provided within the (optional) 'width', 'height', & 'depth' constructor arguments.
     */
    export class BoxGeometry extends Geometry {
        /**
         * @param width — Width of the sides on the X axis.
         * @param height — Height of the sides on the Y axis.
         * @param depth — Depth of the sides on the Z axis.
         * @param widthSegments — Number of segmented faces along the width of the sides.
         * @param heightSegments — Number of segmented faces along the height of the sides.
         * @param depthSegments — Number of segmented faces along the depth of the sides.
         */
        constructor(width: number, height: number, depth: number, widthSegments?: number, heightSegments?: number, depthSegments?: number);

        parameters: {
            width: number;
            height: number;
            depth: number;
            widthSegments: number;
            heightSegments: number;
            depthSegments: number;
        };
    }

    export class CircleGeometry extends Geometry {
        constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);

        parameters: {
            radius: number;
            segments: number;
            thetaStart: number;
            thetaLength: number;
        };
    }

    // deprecated
    export class CubeGeometry extends BoxGeometry {
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
        constructor(radiusTop?: number, radiusBottom?: number, height?: number, radiusSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);

        parameters: {
            radiusTop: number;
            radiusBottom: number;
            height: number;
            radialSegments: number;
            heightSegments: number;
            openEnded: boolean;
            thetaStart: number;
            thetaLength: number;
        };
    }

    export class DodecahedronGeometry extends Geometry {
        constructor(radius: number, detail: number);

        parameters: {
            radius: number;
            detail: number;
        };
    }

    export class ExtrudeGeometry extends Geometry {
        constructor(shape?: Shape, options?: any);
        constructor(shapes?: Shape[], options?: any);

        WorldUVGenerator: {
            generateTopUV(geometry: Geometry, indexA: number, indexB: number, indexC: number): Vector2[];
            generateSideWallUV(geometry: Geometry, indexA: number, indexB: number, indexC: number, indexD: number): Vector2[];
        };

        addShapeList(shapes: Shape[], options?: any): void;
        addShape(shape: Shape, options?: any): void;
    }

    export class IcosahedronGeometry extends PolyhedronGeometry {
        constructor(radius: number, detail: number);
    }

    export class LatheGeometry extends Geometry {
        constructor(points: Vector3[], segments?: number, phiStart?: number, phiLength?: number);

        parameters: {
            points: Vector3[];
            segments: number;
            phiStart: number;
            phiLength: number;
        };
    }

    export class OctahedronGeometry extends PolyhedronGeometry {
        constructor(radius: number, detail: number);
    }

    export class ParametricGeometry extends Geometry {
        constructor(func: (u: number, v: number) => Vector3, slices: number, stacks: number);

        parameters: {
            func: (u: number, v: number) => Vector3;
            slices: number;
            stacks: number;
        };
    }

    export class PlaneBufferGeometry extends BufferGeometry {
        constructor(width: number, height: number, widthSegments?: number, heightSegments?: number);

        parameters: {
            width: number;
            height: number;
            widthSegments: number;
            heightSegments: number;
        };
    }

    export class PlaneGeometry extends Geometry {
        constructor(width: number, height: number, widthSegments?: number, heightSegments?: number);

        parameters: {
            width: number;
            height: number;
            widthSegments: number;
            heightSegments: number;
        };
    }

    export class PolyhedronGeometry extends Geometry {
        constructor(vertices: Vector3[], faces: Face3[], radius?: number, detail?: number);

        parameters: {
            vertices: Vector3[];
            faces: Face3[];
            radius: number;
            detail: number;
        };
    }

    export class RingGeometry extends Geometry {
        constructor(innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number);

        parameters: {
            innerRadius: number;
            outerRadius: number;
            thetaSegments: number;
            phiSegments: number;
            thetaStart: number;
            thetaLength: number;
        };
    }

    export class ShapeGeometry extends Geometry {
        constructor(shape: Shape, options?: any);
        constructor(shapes: Shape[], options?: any);


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
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
        constructor(radius: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number);

        parameters: {
            radius: number;
            widthSegments: number;
            heightSegments: number;
            phiStart: number;
            phiLength: number;
            thetaStart: number;
            thetaLength: number;
        };
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
        bevelEnabled?: boolean;   // turn on bevel
        bevelThickness?: number; // how deep into text bevel goes
        bevelSize?: number; // how far from text outline is bevel
    }

    export class TextGeometry extends ExtrudeGeometry {
        constructor(text: string, TextGeometryParameters?: TextGeometryParameters);
    }

    export class TorusGeometry extends Geometry {
        constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);

        parameters: {
            radius: number;
            tube: number;
            radialSegments: number;
            tubularSegments: number;
            arc: number;
        };
    }

    export class TorusKnotGeometry extends Geometry {
        constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, p?: number, q?: number, heightScale?: number);

        parameters: {
            radius: number;
            tube: number;
            radialSegments: number;
            tubularSegments: number;
            p: number;
            q: number;
            heightScale: number;
        };
    }


    export class TubeGeometry extends Geometry {
        constructor(path: Path, segments?: number, radius?: number, radiusSegments?: number, closed?: boolean, taper?: (u: number) => number);

        parameters: {
            path: Path;
            segments: number;
            radius: number;
            radialSegments: number;
            closed: boolean;
            taper: (u: number) => number; // NoTaper or SinusoidalTaper;
        };
        tangents: Vector3[];
        normals: Vector3[];
        binormals: Vector3[];

        static NoTaper(u?: number): number;
        static SinusoidalTaper(u: number): number;
        static FrenetFrames(path: Path, segments: number, closed: boolean): void;

    }

    // Extras / Helpers /////////////////////////////////////////////////////////////////////

    export class ArrowHelper extends Object3D {
        constructor(dir: Vector3, origin?: Vector3, length?: number, hex?: number, headLength?: number, headWidth?: number);

        line: Line;
        cone: Mesh;

        setDirection(dir: Vector3): void;
        setLength(length: number,  headLength?: number, headWidth?: number): void;
        setColor(hex: number): void;
    }

    export class AxisHelper extends Line {
        constructor(size?: number);
    }

    export class BoundingBoxHelper extends Mesh {
        constructor(object?: Object3D, hex?: number);

        object: Object3D;
        box: Box3;

        update(): void;
    }

    export class BoxHelper extends Line {
        constructor(object?: Object3D);

        update(object?: Object3D): void;
    }

    export class CameraHelper extends Line {
        constructor(camera: Camera);

        camera: Camera;
        pointMap: { [id: string]: number[]; };

        update(): void;
    }

    export class DirectionalLightHelper extends Object3D {
        constructor(light: Light, size?: number);

        light: Light;
        lightPlane: Line;
        targetLine: Line;

        dispose(): void;
        update(): void;
    }

    export class EdgesHelper extends Line {
        constructor(object: Object3D, hex?: number, thresholdAngle?: number);

    }

    export class FaceNormalsHelper extends Line {
        constructor(object: Object3D, size?: number, hex?: number, linewidth?: number);

        object: Object3D;
        size: number;
        normalMatrix: Matrix3;

        update(object?: Object3D): void;
    }

    export class GridHelper extends Line {
        constructor(size: number, step: number);

        color1: Color;
        color2: Color;

        setColors(colorCenterLine: number, colorGrid: number): void;
    }
    export class HemisphereLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number);

        light: Light;
        colors: Color[];
        lightSphere: Mesh;

        dispose(): void;
        update(): void;
    }

    export class PointLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number);

        light: Light;

        dispose(): void;
        update(): void;
    }

    export class SkeletonHelper extends Line {
        constructor(bone: Object3D);

        bones: Bone[];
        root: Object3D;

        getBoneList(object: Object3D): Bone[];
        update(): void;
    }

    export class SpotLightHelper extends Object3D {
        constructor(light: Light, sphereSize: number, arrowLength: number);

        light: Light;
        cone: Mesh;

        dispose(): void;
        update(): void;
    }

    export class VertexNormalsHelper extends Line {
        constructor(object: Object3D, size?: number, hex?: number, linewidth?: number);

        object: Object3D;
        size: number;
        normalMatrix: Matrix3;

        update(object?: Object3D): void;
    }

    export class VertexTangentsHelper extends Line {
        constructor(object: Object3D, size?: number, hex?: number, linewidth?: number);

        object: Object3D;
        size: number;

        update(object?: Object3D): void;
    }

    export class WireframeHelper extends Line {
        constructor(object: Object3D, hex?: number);

    }

    // Extras / Objects /////////////////////////////////////////////////////////////////////

    export class ImmediateRenderObject extends Object3D {
        constructor();

        render(renderCallback:Function): void;
    }

    export interface MorphBlendMeshAnimation {
        startFrame: number;
        endFrame: number;
        length: number;
        fps: number;
        duration: number;
        lastFrame: number;
        currentFrame: number;
        active: boolean;
        time: number;
        direction: number;
        weight: number;
        directionBackwards: boolean;
        mirroredLoop: boolean;
    }

    export class MorphBlendMesh extends Mesh {
        constructor(geometry: Geometry, material: Material);

        animationsMap: { [name: string]: MorphBlendMeshAnimation; };
        animationsList: MorphBlendMeshAnimation[];

        createAnimation(name: string, start: number, end: number, fps: number): void;
        autoCreateAnimations(fps: number): void;
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
}

declare module 'three' {
    export=THREE;
}
