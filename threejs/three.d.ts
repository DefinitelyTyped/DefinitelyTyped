// Type definitions for three.js r79
// Project: http://mrdoob.github.com/three.js/
// Definitions by: Kon <http://phyzkit.net/>, Satoru Kimura <https://github.com/gyohk>, Florent Poujol <https://github.com/florentpoujol>, SereznoKot <https://github.com/SereznoKot>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace THREE {
    export const REVISION: string;

    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button
    export enum MOUSE { LEFT, MIDDLE, RIGHT }

    // GL STATE CONSTANTS
    export enum CullFace { }
    export const CullFaceNone: CullFace;
    export const CullFaceBack: CullFace;
    export const CullFaceFront: CullFace;
    export const CullFaceFrontBack: CullFace;

    export enum FrontFaceDirection { }
    export const FrontFaceDirectionCW: FrontFaceDirection;
    export const FrontFaceDirectionCCW: FrontFaceDirection;

    // Shadowing Type
    export enum ShadowMapType { }
    export const BasicShadowMap: ShadowMapType;
    export const PCFShadowMap: ShadowMapType;
    export const PCFSoftShadowMap: ShadowMapType;

    // MATERIAL CONSTANTS

    // side
    export enum Side { }
    export const FrontSide: Side;
    export const BackSide: Side;
    export const DoubleSide: Side;

    // shading
    export enum Shading { }
    export const FlatShading: Shading;
    export const SmoothShading: Shading;

    // colors
    export enum Colors { }
    export const NoColors: Colors;
    export const FaceColors: Colors;
    export const VertexColors: Colors;

    // blending modes
    export enum Blending { }
    export const NoBlending: Blending;
    export const NormalBlending: Blending;
    export const AdditiveBlending: Blending;
    export const SubtractiveBlending: Blending;
    export const MultiplyBlending: Blending;
    export const CustomBlending: Blending;

    // custom blending equations
    // (numbers start from 100 not to clash with other
    //  mappings to OpenGL constants defined in Texture.js)
    export enum BlendingEquation { }
    export const AddEquation: BlendingEquation;
    export const SubtractEquation: BlendingEquation;
    export const ReverseSubtractEquation: BlendingEquation;
    export const MinEquation: BlendingEquation;
    export const MaxEquation: BlendingEquation;

    // custom blending destination factors
    export enum BlendingDstFactor { }
    export const ZeroFactor: BlendingDstFactor;
    export const OneFactor: BlendingDstFactor;
    export const SrcColorFactor: BlendingDstFactor;
    export const OneMinusSrcColorFactor: BlendingDstFactor;
    export const SrcAlphaFactor: BlendingDstFactor;
    export const OneMinusSrcAlphaFactor: BlendingDstFactor;
    export const DstAlphaFactor: BlendingDstFactor;
    export const OneMinusDstAlphaFactor: BlendingDstFactor;

   // custom blending src factors
    export enum BlendingSrcFactor { }
    export const DstColorFactor: BlendingSrcFactor;
    export const OneMinusDstColorFactor: BlendingSrcFactor;
    export const SrcAlphaSaturateFactor: BlendingSrcFactor;

    // depth modes
    export enum DepthModes { }
    export const NeverDepth: DepthModes;
    export const AlwaysDepth: DepthModes;
    export const LessDepth: DepthModes;
    export const LessEqualDepth: DepthModes;
    export const EqualDepth: DepthModes;
    export const GreaterEqualDepth: DepthModes;
    export const GreaterDepth: DepthModes;
    export const NotEqualDepth: DepthModes;

    // TEXTURE CONSTANTS
    // Operations
    export enum Combine { }
    export const MultiplyOperation: Combine;
    export const MixOperation: Combine;
    export const AddOperation: Combine;

    // Tone Mapping modes
    export enum ToneMapping { }
    export const NoToneMapping: ToneMapping;
    export const LinearToneMapping: ToneMapping;
    export const ReinhardToneMapping: ToneMapping;
    export const Uncharted2ToneMapping: ToneMapping;
    export const CineonToneMapping: ToneMapping;

    // Mapping modes
    export enum Mapping { }
    export const UVMapping: Mapping;
    export const CubeReflectionMapping: Mapping;
    export const CubeRefractionMapping: Mapping;
    export const EquirectangularReflectionMapping: Mapping;
    export const EquirectangularRefractionMapping: Mapping;
    export const SphericalReflectionMapping: Mapping;
    export const CubeUVReflectionMapping: Mapping;
    export const CubeUVRefractionMapping: Mapping;

    // Wrapping modes
    export enum Wrapping { }
    export const RepeatWrapping: Wrapping;
    export const ClampToEdgeWrapping: Wrapping;
    export const MirroredRepeatWrapping: Wrapping;

    // Filters
    export enum TextureFilter { }
    export const NearestFilter: TextureFilter;
    export const NearestMipMapNearestFilter: TextureFilter;
    export const NearestMipMapLinearFilter: TextureFilter;
    export const LinearFilter: TextureFilter;
    export const LinearMipMapNearestFilter: TextureFilter;
    export const LinearMipMapLinearFilter: TextureFilter;

    // Data types
    export enum TextureDataType { }
    export const UnsignedByteType: TextureDataType;
    export const ByteType: TextureDataType;
    export const ShortType: TextureDataType;
    export const UnsignedShortType: TextureDataType;
    export const IntType: TextureDataType;
    export const UnsignedIntType: TextureDataType;
    export const FloatType: TextureDataType;
    export const HalfFloatType: TextureDataType;

    // Pixel types
    export enum PixelType { }
    export const UnsignedShort4444Type: PixelType;
    export const UnsignedShort5551Type: PixelType;
    export const UnsignedShort565Type: PixelType;

    // Pixel formats
    export enum PixelFormat { }
    export const AlphaFormat: PixelFormat;
    export const RGBFormat: PixelFormat;
    export const RGBAFormat: PixelFormat;
    export const LuminanceFormat: PixelFormat;
    export const LuminanceAlphaFormat: PixelFormat;
    export const RGBEFormat: PixelFormat;
    export const DepthFormat: PixelFormat;

    // Compressed texture formats
    // DDS / ST3C Compressed texture formats
    export enum CompressedPixelFormat { }
    export const RGB_S3TC_DXT1_Format: CompressedPixelFormat;
    export const RGBA_S3TC_DXT1_Format: CompressedPixelFormat;
    export const RGBA_S3TC_DXT3_Format: CompressedPixelFormat;
    export const RGBA_S3TC_DXT5_Format: CompressedPixelFormat;

    // PVRTC compressed texture formats
    export const RGB_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    export const RGB_PVRTC_2BPPV1_Format: CompressedPixelFormat;
    export const RGBA_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    export const RGBA_PVRTC_2BPPV1_Format: CompressedPixelFormat;

    // ETC compressed texture formats
    export const RGB_ETC1_Format: CompressedPixelFormat;

    // Loop styles for AnimationAction
    export enum AnimationActionLoopStyles { }
    export const LoopOnce: AnimationActionLoopStyles;
    export const LoopRepeat: AnimationActionLoopStyles;
    export const LoopPingPong: AnimationActionLoopStyles;

    // Interpolation
    export enum InterpolationModes { }
    export const InterpolateDiscrete: InterpolationModes;
    export const InterpolateLinear: InterpolationModes;
    export const InterpolateSmooth: InterpolationModes;

    // Interpolant ending modes
    export enum InterpolationEndingModes { }
    export const ZeroCurvatureEnding: InterpolationEndingModes;
    export const ZeroSlopeEnding: InterpolationEndingModes;
    export const WrapAroundEnding: InterpolationEndingModes;

    // Triangle Draw modes
    export enum TrianglesDrawModes { }
    export const TrianglesDrawModesMode: TrianglesDrawModes;
    export const TriangleStripDrawMode: TrianglesDrawModes;
    export const TriangleFanDrawMode: TrianglesDrawModes;

    // Texture Encodings
    export enum TextureEncoding { }
    export const LinearEncoding: TextureEncoding;
    export const sRGBEncoding: TextureEncoding;
    export const GammaEncoding: TextureEncoding;
    export const RGBEEncoding: TextureEncoding;
    export const LogLuvEncoding: TextureEncoding;
    export const RGBM7Encoding: TextureEncoding;
    export const RGBM16Encoding: TextureEncoding;
    export const RGBDEncoding: TextureEncoding;

    // Depth packing strategies
    export enum DepthPackingStrategies { }
    export const BasicDepthPacking: DepthPackingStrategies;
    export const RGBADepthPacking: DepthPackingStrategies;

    // log handlers
    export function warn(message?: any, ...optionalParams: any[]): void;
    export function error(message?: any, ...optionalParams: any[]): void;
    export function log(message?: any, ...optionalParams: any[]): void;

    // Animation ////////////////////////////////////////////////////////////////////////////////////////

    export class AnimationAction {
        loop: boolean;
        time: number;
        timeScale: number;
        weight: number;
        repetitions: number;
        paused: boolean;
        enabled: boolean;
        clampWhenFinished: boolean;
        zeroSlopeAtStart: boolean;
        zeroSlopeAtEnd: boolean;

        play(): AnimationAction;
        stop(): AnimationAction;
        reset(): AnimationAction;
        isRunning(): boolean;
        startAt(time: number): AnimationAction;
        setLoop(mode: boolean, repetitions: number): AnimationAction;
        setEffectiveWeight(weight: number): AnimationAction;
        getEffectiveWeight(): number;
        fadeIn(duration: number): AnimationAction;
        fadeOut(duration: number): AnimationAction;
        crossFadeFrom(fadeOutAction: AnimationAction,duration: number, warp: boolean): AnimationAction;
        crossFadeTo(fadeInAction: AnimationAction,duration: number, warp: boolean): AnimationAction;
        stopFading(): AnimationAction;
        setEffectiveTimeScale(timeScale: number): AnimationAction;
        getEffectiveTimeScale(): number;
        setDuration(duration: number): AnimationAction;
        syncWith(action: AnimationAction): AnimationAction;
        halt(duration: number): AnimationAction;
        warp(statTimeScale: number, endTimeScale: number, duration: number): AnimationAction;
        stopWarping(): AnimationAction;
        getMixer(): AnimationMixer;
        getClip(): AnimationClip;
        getRoot(): any;
    }

    export class AnimationClip {
        constructor( name?: string, duration?: number, tracks?: KeyframeTrack[] );

        name: string;
        tracks: KeyframeTrack[];
        duration: number;
        uuid: string;
        results: any[];

        resetDuration(): void;
        trim(): AnimationClip;
        optimize(): AnimationClip;

        static CreateFromMorphTargetSequence( name: string, morphTargetSequence: MorphTarget[], fps: number, noLoop: boolean ): AnimationClip;
        static findByName( clipArray: AnimationClip, name: string ): AnimationClip;
        static CreateClipsFromMorphTargetSequences( morphTargets: MorphTarget[], fps: number, noLoop: boolean ): AnimationClip[];
        static parse( json: any ): AnimationClip;
        static parseAnimation( animation: any, bones: Bone[], nodeName: string ): AnimationClip;
        static toJSON(): any;
    }

    export class AnimationMixer extends EventDispatcher {
        constructor(root: any);

        time: number;
        timeScale: number;

        clipAction(clip: AnimationClip, root?: any): AnimationAction;
        existingAction(clip: AnimationClip, root?: any): AnimationAction;
        stopAllAction(clip: AnimationClip, root?: any): AnimationMixer;
        update(deltaTime: number): AnimationMixer;
        getRoot(): any;
        uncacheClip(clip: AnimationClip): void;
        uncacheRoot(root: any): void;
        uncacheAction(clip: AnimationClip, root?: any): void;
    }

    export class AnimationObjectGroup {
        constructor(...args: any[]);

        uuid: string;
        stats: {
            bindingsPerObject: number;
            objects: {
                total: number;
                inUse: number;
            }
        };

        add(...args: any[]): void;
        remove(...args: any[]): void;
        uncache(...args: any[]): void;
    }

    export namespace AnimationUtils {
        export function arraySlice(array: any, from: number, to: number): any;
        export function convertArray(array: any, type: any, forceClone: boolean): any;
        export function isTypedArray(object: any): boolean;
        export function getKeyFrameOrder(times: number): number[];
        export function sortedArray(values: any[], stride: number, order: number[]): any[];
        export function flattenJSON(jsonKeys: string[], times: any[], values: any[], valuePropertyName: string): void;
    }

    export class KeyframeTrack {
        constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);

        name: string;
        times: any[];
        values: any[];

        ValueTypeName: string;
        TimeBufferType: Float32Array;
        ValueBufferType: Float32Array;

        DefaultInterpolation: InterpolationModes;

        InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
        InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
        InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;

        setInterpolation(interpolation: InterpolationModes): void;
        getInterpolation(): InterpolationModes;

        getValuesize(): number;

        shift( timeOffset: number ): KeyframeTrack;
        scale( timeScale: number ): KeyframeTrack;
        trim( startTime: number, endTime: number ): KeyframeTrack;
        validate(): boolean;
        optimize(): KeyframeTrack;

        static parse(json: any): KeyframeTrack;
        static toJSON(track: KeyframeTrack): any;
    }

    export class PropertyBinding {
        constructor(rootNode: any, path: string, parsedPath?: any);

        path: string;
        parsedPath: any;
        node: any;
        rootNode: any;

        getValue(targetArray: any, offset: number): any;
        setValue(sourceArray: any, offset: number): void;
        bind(): void;
        unbind(): void;

        BindingType: { [bindingType: string]: number };
        Versioning: { [versioning: string]: number };

        GetterByBindingType: Function[];
        SetterByBindingTypeAndVersioning: Array<Function[]>;

        static create(root: any, path: any, parsedPath?: any): PropertyBinding|PropertyBinding.Composite;
        static parseTrackName(trackName: string): any;
        static findNode(root: any, nodeName: string): any;
    }

    export namespace PropertyBinding {
        export class Composite {
            constructor(targetGroup: any, path: any, parsedPath?: any);

            getValue(array: any, offset: number): any;
            setValue(array: any, offset: number): void;
            bind(): void;
            unbind(): void;
        }
    }

    export class PropertyMixer {
        constructor(binding: any, typeName: string, valueSize: number);

        binding: any;
        valueSize: number;
        buffer: any;
        cumulativeWeight: number;
        useCount: number;
        referenceCount: number;

        accumulate(accuIndex: number, weight: number): void;
        apply(accuIndex: number): void;
        saveOriginalState(): void;
        restoreOriginalState(): void;
    }

    export class BooleanKeyframeTrack extends KeyframeTrack {
        constructor(name: string, times: any[], values: any[]);
    }

    export class ColorKeyframeTrack extends KeyframeTrack {
        constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);
    }

    export class NumberKeyframeTrack extends KeyframeTrack {
        constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);
    }

    export class QuaternionKeyframeTrack extends KeyframeTrack {
        constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);
    }

    export class StringKeyframeTrack extends KeyframeTrack {
        constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);
    }

    export class VectorKeyframeTrack extends KeyframeTrack {
        constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);
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

        getWorldDirection(optionalTarget?: Vector3): Vector3;

        /**
         * This make the camera look at the vector position in local space.
         * @param vector point to look at
         */
        lookAt(vector: Vector3): void;

        clone(): Camera;
        copy(camera?: Camera): Camera;
    }

    export class CubeCamera extends Object3D {
        constructor(near?: number, far?: number, cubeResolution?: number);

        renderTarget: WebGLRenderTargetCube;

        updateCubeMap(renderer: Renderer, scene: Scene): void;
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
        view: {
          fullWidth: number,
          fullHeight: number,
          offsetX: number,
          offsetY: number,
          width: number,
          height: number
        };

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
        setViewOffset(fullWidth: number, fullHeight: number, offsetX: number, offsetY: number, width: number, height: number): void;
        clearViewOffset(): void;
        clone(): OrthographicCamera;
        copy(source: OrthographicCamera): OrthographicCamera;
        toJSON(meta?: any): any;
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

        focus: number;
        view: {
            fullWidth: number,
            fullHeight: number,
            offsetX: number,
            offsetY: number,
            width: number,
            height: number
        };
        filmGauge: number;
        filmOffset: number;

        setFocalLength(focalLength: number): void;
        getFocalLength(): number;
        getEffectiveFOV(): number;
        getFilmWidth(): number;
        getFilmHeight(): number;
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
        clearViewOffset(): void;

        /**
         * Updates the camera projection matrix. Must be called after change of parameters.
         */
        updateProjectionMatrix(): void;
        clone(): PerspectiveCamera;
        toJSON(meta?: any): any;

        // deprecated
        setLens(focalLength: number, frameHeight?: number): void;
    }

    export class StereoCamera extends Camera {
        constructor();

        aspect: number;
        cameraL: PerspectiveCamera;
        cameraR: PerspectiveCamera;

        update(camera: PerspectiveCamera): void;
    }

    // Core ///////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js">src/core/BufferAttribute.js</a>
     */
    export class BufferAttribute {
        constructor(array: ArrayLike<number>, itemSize: number, normalized?: boolean); // array parameter should be TypedArray.

        uuid: string;
        array: ArrayLike<number>;
        itemSize: number;
        dynamic: boolean;
        updateRange: {offset:number, count:number};
        version: number;
        normalized: boolean;
        needsUpdate: boolean;
        count: number;

        setDynamic(dynamic: boolean): BufferAttribute;
        clone(): BufferAttribute;
        copy(source: BufferAttribute): BufferAttribute;
        copyAt(index1: number, attribute: BufferAttribute, index2: number): BufferAttribute;
        copyArray(array: ArrayLike<number>): BufferAttribute;
        copyColorsArray(colors: {r:number, g:number, b:number}[]): BufferAttribute;
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

        length: number; // deprecated, use count
    }

    export class Int8Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Uint8Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Uint8ClampedAttribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Int16Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Uint16Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Int32Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Uint32Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Float32Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    export class Float64Attribute extends BufferAttribute {
        constructor(array: any, itemSize: number);
    }

    // deprecated, use new THREE.BufferAttribute().setDynamic( true )
    export class DynamicBufferAttribute extends BufferAttribute {}

    /**
     * This is a superefficent class for geometries because it saves all data in buffers.
     * It reduces memory costs and cpu cycles. But it is not as easy to work with because of all the nessecary buffer calculations.
     * It is mainly interesting when working with static objects.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js">src/core/BufferGeometry.js</a>
     */
    export class BufferGeometry extends EventDispatcher {
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
        index: BufferAttribute;
        attributes: BufferAttribute|InterleavedBufferAttribute[];
        morphAttributes: any;
        groups: {start: number, count: number, materialIndex?: number}[];
        boundingBox: Box3;
        boundingSphere: Sphere;
        drawRange: { start: number, count: number };

        getIndex(): BufferAttribute;
        setIndex( index: BufferAttribute ): void;

        addAttribute(name: string, attribute: BufferAttribute|InterleavedBufferAttribute): BufferGeometry;

        getAttribute(name: string): BufferAttribute|InterleavedBufferAttribute;
        removeAttribute(name: string): BufferGeometry;

        addGroup(start: number, count: number, materialIndex?: number): void;
        clearGroups(): void;

        setDrawRange(start: number, count: number): void;

        /**
         * Bakes matrix transform directly into vertex coordinates.
         */
        applyMatrix(matrix: Matrix4): BufferGeometry;

        rotateX(angle: number): BufferGeometry;
        rotateY(angle: number): BufferGeometry;
        rotateZ(angle: number): BufferGeometry;
        translate(x: number, y: number, z: number): BufferGeometry;
        scale(x: number, y: number, z: number): BufferGeometry;
        lookAt(v: Vector3): void;

        center(): Vector3;

        setFromObject(object: Object3D) : void;
        updateFromObject(object: Object3D) : void;

        fromGeometry(geometry: Geometry, settings?: any): BufferGeometry;

        fromDirectGeometry(geometry: DirectGeometry): BufferGeometry;

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

        merge(geometry: BufferGeometry, offset: number): BufferGeometry;
        normalizeNormals(): void;

        toNonIndexed(): BufferGeometry;

        toJSON(): any;
        clone(): BufferGeometry;
        copy(source: BufferGeometry): BufferGeometry;

        /**
         * Disposes the object from memory.
         * You need to call this when you want the bufferGeometry removed while the application is running.
         */
        dispose(): void;

        // deprecated
        drawcalls: any;
        offsets: any;

        addIndex(index: any): void;
        addDrawCall(start: any, count: any, indexOffset?: any): void;
        clearDrawCalls(): void;
        addAttribute(name: any, array: any, itemSize: any): any;
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
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/DirectGeometry.js">src/core/DirectGeometry.js</a>
     */
    export class DirectGeometry extends EventDispatcher {
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
        boundingSphere: Sphere;
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

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: Event) => void ): void;
        hasEventListener(type: string, listener: (event: Event) => void): void;
        removeEventListener(type: string, listener: (event: Event) => void): void;
        dispatchEvent(event: { type: string; [attachment: string]: any; }): void;
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
        addEventListener(type: string, listener: (event: Event) => void ): void;

        /**
         * Adds a listener to an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
        hasEventListener(type: string, listener: (event: Event) => void): void;

        /**
         * Removes a listener from an event type.
         * @param type The type of the listener that gets removed.
         * @param listener The listener function that gets removed.
         */
        removeEventListener(type: string, listener: (event: Event) => void): void;

        /**
         * Fire an event type.
         * @param type The type of event that gets fired.
         */
        dispatchEvent(event: { type: string; [attachment: string]: any; }): void;

        // deprecated
        apply(target: any): void;
    }

    export interface Event {
        type: string;
        target: any;
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
         * Material index (points to {@link Geometry.materials}).
         */
        materialIndex: number;

        clone(): Face3;
        copy(source: Face3): Face3;
    }

    export class Face4 extends Face3 {} // deprecated, use Face3

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

    export let GeometryIdCount: number;

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
    export class Geometry extends EventDispatcher {
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
        boundingSphere: Sphere;

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
        applyMatrix(matrix: Matrix4): Geometry;

        rotateX(angle: number): Geometry;
        rotateY(angle: number): Geometry;
        rotateZ(angle: number): Geometry;

        translate(x: number, y: number, z: number): Geometry;
        scale(x: number, y: number, z: number): Geometry;
        lookAt( vector: Vector3 ): void;

        fromBufferGeometry(geometry: BufferGeometry): Geometry;

        center(): Vector3;

        normalize(): Geometry;

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

        merge(geometry: Geometry, matrix: Matrix, materialIndexOffset?: number): void;

        mergeMesh(mesh: Mesh): void;

        /**
         * Checks for duplicate vertices using hashmap.
         * Duplicated vertices are removed and faces' vertices are updated.
         */
        mergeVertices(): number;

        sortFacesByMaterialIndex(): void;

        toJSON(): any;

        /**
         * Creates a new clone of the Geometry.
         */
        clone(): Geometry;

        copy(source: Geometry): Geometry;

        /**
         * Removes The object from memory.
         * Don't forget to call this method when you remove an geometry because it can cuase meomory leaks.
         */
        dispose(): void;


        //These properties do not exist in a normal Geometry class, but if you use the instance that was passed by JSONLoader, it will be added.
        bones: Bone[];
        animation: AnimationClip;
        animations: AnimationClip[];

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: Event) => void ): void;
        hasEventListener(type: string, listener: (event: Event) => void): void;
        removeEventListener(type: string, listener: (event: Event) => void): void;
        dispatchEvent(event: { type: string; [attachment: string]: any; }): void;
    }

    export namespace GeometryUtils { // deprecated
        export function merge(geometry1: any, geometry2: any, materialIndexOffset?: any): any; // deprecated, use geometry.merge( geometry2, matrix, materialIndexOffset )
        export function center(geometry: any): any; // deprecated, use geometry.center()
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js">src/core/InstancedBufferAttribute.js</a>
     */
    export class InstancedBufferAttribute extends BufferAttribute {
        constructor(data: ArrayLike<number>, itemSize: number, meshPerAttribute?: number);
        
        meshPerAttribute: number;

        clone(): InstancedBufferAttribute;
        copy(source: InstancedBufferAttribute): InstancedBufferAttribute;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js">src/core/InstancedBufferGeometry.js</a>
     */
    export class InstancedBufferGeometry extends BufferGeometry {
        constructor();

        groups: {start:number, count:number, instances:number}[];
        maxInstancedCount: number;
        
        addGroup(start: number, count: number, instances: number): void;
        clone(): InstancedBufferGeometry;
        copy(source: InstancedBufferGeometry): InstancedBufferGeometry;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js">src/core/InterleavedBuffer.js</a>
     */
    export class InterleavedBuffer {
        constructor(array: ArrayLike<number>, stride: number);

        array: ArrayLike<number>;
        stride: number;
        dynamic: boolean;
        updateRange: { offset: number; count: number };
        version: number;
        length: number;
        count: number;
        needsUpdate: boolean;

        setDynamic(dynamic: boolean): InterleavedBuffer;
        clone(): InterleavedBuffer;
        copy(source: InterleavedBuffer): InterleavedBuffer;
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

        clone(): InstancedInterleavedBuffer;
        copy(source: InstancedInterleavedBuffer): InstancedInterleavedBuffer;
    }

    /**
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js">src/core/InterleavedBufferAttribute.js</a>
     */
    export class InterleavedBufferAttribute {
        constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized: boolean);

        uuid: string;
        data: InterleavedBuffer;
        itemSize: number;
        offset: number;
        count: number;
        normalized: boolean;
        array: any[];

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

        length: number; // deprecated, use count instead
    }

    export let Object3DIdCount: number;

    /**
     * Base class for scene graph objects
     */
    export class Object3D extends EventDispatcher {
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

        modelViewMatrix: Matrix4;

        normalMatrix: Matrix3;

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

        layers: Layers;
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
        static DefaultMatrixAutoUpdate: boolean;

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
        setRotationFromEuler(euler: Euler): void;

        /**
         *
         */
        setRotationFromMatrix(m: Matrix4): void;

        /**
         *
         */
        setRotationFromQuaternion(q: Quaternion): void;

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

        raycast(raycaster: Raycaster, intersects: any): void;

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

        toJSON(meta?: { geometries: any, materials: any, textures: any, images: any }): any;

        clone(recursive?: boolean): Object3D;

        /**
         *
         * @param object
         * @param recursive
         */
        copy(source: Object3D, recursive?: boolean): Object3D;

        // deprecated
        eulerOrder: string;
        getChildByName(name: string): Object3D;
        translate(distance: number, axis: Vector3): Object3D;
    }

    export interface Intersection {
        distance: number;
        distanceToRay: number;
        point: Vector3;
        index: number;
        face: Face3;
        faceIndex: number;
        object: Object3D;
    }

    export interface RaycasterParameters {
        Mesh?: any;
        Line?: any;
        LOD?: any;
        Points?: { threshold: number };
        Sprite?: any;
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

    export class Layers {
        constructor();

        mask: number;

        set(channel: number): void;
        enable(channel: number): void;
        toggle(channel: number): void;
        disable(channel: number): void;
        test(layers: Layers): boolean;
    }

    export class Font {
        constructor(jsondata: string);

        data: string;

        generateShapes(text: string, size: number, divisions: number): any[];
    }

    // Lights //////////////////////////////////////////////////////////////////////////////////

    /**
     * Abstract base class for lights.
     */
    export class Light extends Object3D {
        constructor(hex?: number|string, intensity?: number);

        color: Color;
        intensity: number;
        receiveShadow: boolean;
        shadow: LightShadow;
        shadowCameraFov: any; // deprecated, use shadow.camera.fov
        shadowCameraLeft: any; // deprecated, use shadow.camera.left
        shadowCameraRight: any; // deprecated, use shadow.camera.right
        shadowCameraTop: any; // deprecated, use shadow.camera.top
        shadowCameraBottom: any; // deprecated, use shadow.camera.bottom
        shadowCameraNear: any; // deprecated, use shadow.camera.near
        shadowCameraFar: any; // deprecated, use shadow.camera.far
        shadowBias: any; // deprecated, use shadow.bias
        shadowMapWidth: any; // deprecated, use shadow.mapSize.width
        shadowMapHeight: any; // deprecated, use shadow.mapSize.height

        copy(source: Light): Light;
        clone(recursive?: boolean): Light;
    }

    export class LightShadow {
        constructor(camera: Camera);

        camera: Camera;
        bias: number;
        radius: number;
        mapSize: Vector2;
        map: RenderTarget;
        matrix: Matrix4;

        copy(source: LightShadow): LightShadow;
        clone(recursive?: boolean): LightShadow;
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
        constructor(hex?: number|string, intensity?: number);

        castShadow: boolean;

        copy(source: AmbientLight): AmbientLight;
        clone(recursive?: boolean): AmbientLight;
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
        constructor(hex?: number|string, intensity?: number);

        /**
         * Target used for shadow camera orientation.
         */
        target: Object3D;

        /**
         * Light's intensity.
         * Default — 1.0.
         */
        intensity: number;

        shadow: LightShadow;

        copy(source: DirectionalLight): DirectionalLight;
        clone(recursive?: boolean): HemisphereLight;
    }

    export class DirectionalLightShadow extends LightShadow {}

    export class HemisphereLight extends Light {
        constructor(skyColorHex?: number|string, groundColorHex?: number|string, intensity?: number);

        groundColor: Color;
        intensity: number;

        copy(source: HemisphereLight): HemisphereLight;
        clone(recursive?: boolean): HemisphereLight;
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
        constructor(hex?: number|string, intensity?: number, distance?: number, decay?: number);

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
        shadow: LightShadow;
        power: number;

        copy(source: PointLight): PointLight;
        clone(recursive?: boolean): PointLight;
    }

    /**
     * A point light that can cast shadow in one direction.
     */
    export class SpotLight extends Light {
        constructor(hex?: number|string, intensity?: number, distance?: number, angle?: number, exponent?: number, decay?: number);

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
        shadow: SpotLightShadow;
        power: number;
        penumbra: number;

        clone(recursive?: boolean): SpotLight;
        copy(source: PointLight): SpotLight;
    }

    export class SpotLightShadow extends LightShadow {
        update(light: Light): void;
    }

    // Loaders //////////////////////////////////////////////////////////////////////////////////

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
         * Will be called when load completes.
         * The default is a function with empty body.
         */
        onLoadComplete: () => void;

        /**
         * default — null.
         * If set, assigns the crossOrigin attribute of the image to the value of crossOrigin, prior to starting the load.
         */
        crossOrigin: string;

        extractUrlBase(url: string): string;
        initMaterials(materials: Material[], texturePath: string): Material[];
        createMaterial(m: Material, texturePath: string, crossOrigin?: string): boolean;

        static Handlers: LoaderHandler;
    }

    export interface LoaderHandler{
        handlers: (RegExp | Loader)[];

        add(regex: RegExp, loader: Loader): void;
        get(file: string): Loader;
    }

    export class XHRLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        path: string;
        responseType: string;
        withCredentials: boolean;

        load(url: string, onLoad?: (responseText: string) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): any;
        setPath(path: string): XHRLoader;
        setResponseType(responseType: string): XHRLoader;
        setWithCredentials(withCredentials: boolean): XHRLoader;
    }

    export class FontLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;

        load(url: string, onLoad?: (responseText: string) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
        parse(json: string): Font;
    }

    /**
     * A loader for loading an image.
     * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
     */
    export class ImageLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        crossOrigin: string;
        path: string;

        /**
         * Begin loading from url
         * @param url
         */
        load(url: string, onLoad?: (image: HTMLImageElement) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): HTMLImageElement;
        setCrossOrigin(crossOrigin: string): ImageLoader;
        setPath(value: any): ImageLoader;
    }

    /**
     * A loader for loading objects in JSON format.
     */
    export class JSONLoader extends Loader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        withCredentials: boolean;

        load(url: string, onLoad?: (geometry: Geometry, materials: Material[]) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
        setTexturePath( value: string ): void;
        parse(json: any, texturePath?: string): { geometry: Geometry; materials?: Material[] };
    }

    /**
     * Handles and keeps track of loaded and pending data.
     */
    export class LoadingManager {
        constructor(onLoad?: () => void, onProgress?: (url: string, loaded: number, total: number) => void, onError?: () => void);

        onStart: () => void;

        /**
         * Will be called when load starts.
         * The default is a function with empty body.
         */
        onLoad: () => void;

        /**
         * Will be called while load progresses.
         * The default is a function with empty body.
         */
        onProgress: (item: any, loaded: number, total: number) => void;

        /**
         * Will be called when each element in the scene completes loading.
         * The default is a function with empty body.
         */
        onError: () => void;

        itemStart(url: string): void;
        itemEnd(url: string): void;
        itemError(url: string): void;
    }

    export const DefaultLoadingManager: LoadingManager;

    export class BufferGeometryLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;

        load(url: string, onLoad: (bufferGeometry: BufferGeometry) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
        parse(json: any): BufferGeometry;
    }

    export class MaterialLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        textures: { [key: string]: Texture };

        load(url: string, onLoad: (material: Material) => void): void;
        setTextures(textures: { [key: string]: Texture }): void;
        getTexture(name: string): Texture;
        parse(json: any): Material;
    }

    export class ObjectLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        texturePass: string;
        crossOrigin: string;

        load(url: string, onLoad?: (object: Object3D) => void): void;
        setTexturePath( value: string ): void;
        setCrossOrigin(crossOrigin: string): void;
        parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
        parseGeometries(json: any): any[]; // Array of BufferGeometry or Geometry or Geometry2.
        parseMaterials(json: any, textures: Texture[]): Material[]; // Array of Classes that inherits from Matrial.
        parseAnimations(json: any): AnimationClip[];
        parseImages(json: any, onLoad: () => void): any[];
        parseTextures(json: any, images: any): Texture[];
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
        path: string;

        /**
         * Begin loading from url
         *
         * @param url
         */
        load(url: string, onLoad?: (texture: Texture) => void): Texture;
        setCrossOrigin(crossOrigin: string): TextureLoader;
        setPath(path: string): TextureLoader;
    }

    export class CubeTextureLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        corssOrigin: string;
        path: string;

        load(urls: Array<string>, onLoad?: (texture: CubeTexture) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
        setCrossOrigin(crossOrigin: string): CubeTextureLoader;
        setPath(path: string): CubeTextureLoader;
    }

    export class BinaryTextureLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;

        load(url: string, onLoad: (dataTexture: DataTexture) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
    }
    export class DataTextureLoader extends BinaryTextureLoader {}

    export class CompressedTextureLoader {
        constructor(manager?: LoadingManager);

        manager: LoadingManager;
        path: string;

        load(url: string, onLoad: (texture: CompressedTexture) => void, onProgress?: (event: any) => void, onError?: (event: any) => void): void;
        setPath(path: string): CompressedTextureLoader;
    }

    export class AudioLoader {
        constructor(manager?: LoadingManager);

        load(url: string, onLoad: Function, onPrgress: Function, onError: Function): void;
    }

    export namespace Cache {
        export let enabled: boolean;
        export let files: any;

        export function add(key: string, file: any): void;
        export function get(key: string): any;
        export function remove(key: string): void;
        export function clear(): void;
    }

    // Materials //////////////////////////////////////////////////////////////////////////////////
    export let MaterialIdCount: number;

    export interface MaterialParameters {
        name?: string;
        side?: Side;
        opacity?: number;
        transparent?: boolean;
        blending?: Blending;
        blendSrc?: BlendingDstFactor;
        blendDst?: BlendingSrcFactor;
        blendEquation?: BlendingEquation;
        blendSrcAlpha?: number;
        blendDstAlpha?: number;
        blendEquationAlpha?: number;
        depthFunc?: DepthModes;
        depthTest?: boolean;
        depthWrite?: boolean;
        colorWrite?: boolean;
        precision?: number;
        polygonOffset?: boolean;
        polygonOffsetFactor?: number;
        polygonOffsetUnits?: number;
        alphaTest?: number;
        premultipliedAlpha?: boolean;
        overdraw?: number;
        visible?: boolean;
        fog?: boolean;
        lights?: boolean;
        shading?: Shading;
        vertexColors?: Colors;
    }

    /**
     * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
     */
    export class Material extends EventDispatcher {
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

        depthFunc: DepthModes;

        /**
         * Whether to have depth test enabled when rendering this material. Default is true.
         */
        depthTest: boolean;

        /**
         * Whether rendering this material has any effect on the depth buffer. Default is true.
         * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
         */
        depthWrite: boolean;

        clippingPlanes: any;
        clipShadows: boolean;

        colorWrite: boolean;

        precision: any;

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

        premultipliedAlpha: boolean;

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

        fog: boolean;
        lights: boolean;
        shading: Shading;
        vertexColors: Colors;

        setValues(parameters: MaterialParameters): void;
        toJSON(meta?: any): any;
        clone(): Material;
        copy(source: Material): Material;
        update(): void;
        dispose(): void;

        // deprecated
        warpRGB: Color;
    }

    export interface LineBasicMaterialParameters extends MaterialParameters {
        color?: number|string;
        linewidth?: number;
        linecap?: string;
        linejoin?: string;
    }

    export class LineBasicMaterial extends Material {
        constructor(parameters?: LineBasicMaterialParameters);

        color: Color;
        linewidth: number;
        linecap: string;
        linejoin: string;

        setValues(parameters: LineBasicMaterialParameters): void;
        clone(): LineBasicMaterial;
        copy(source: LineBasicMaterial): LineBasicMaterial;
    }

    export interface LineDashedMaterialParameters extends MaterialParameters {
        color?: number|string;
        linewidth?: number;
        scale?: number;
        dashSize?: number;
        gapSize?: number;
    }

    export class LineDashedMaterial extends Material {
        constructor(parameters?: LineDashedMaterialParameters);

        color: Color;
        linewidth: number;
        scale: number;
        dashSize: number;
        gapSize: number;

        setValues(parameters: LineDashedMaterialParameters): void;
        clone(): LineDashedMaterial;
        copy(source: LineDashedMaterial): LineDashedMaterial;
    }

    /**
     * parameters is an object with one or more properties defining the material's appearance.
     */
    export interface MeshBasicMaterialParameters extends MaterialParameters {
        color?: number|string;
        opacity?: number;
        map?: Texture;
        aoMap?: Texture;
        aoMapIntensity?: number;
        specularMap?: Texture;
        alphaMap?: Texture;
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        shading?: Shading;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        skinning?: boolean;
        morphTargets?: boolean;
    }

    export class MeshBasicMaterial extends Material {
        constructor(parameters?: MeshBasicMaterialParameters);

        color: Color;
        map: Texture;
        aoMap: Texture;
        aoMapIntensity: number;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        shading: Shading;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        skinning: boolean;
        morphTargets: boolean;

        setValues(parameters: MeshBasicMaterialParameters): void;
        clone(): MeshBasicMaterial;
        copy(source: MeshBasicMaterial): MeshBasicMaterial;
    }

    export interface MeshDepthMaterialParameters extends MaterialParameters {
        wireframe?: boolean;
        wireframeLinewidth?: number;
    }

    export class MeshDepthMaterial extends Material {
        constructor(parameters?: MeshDepthMaterialParameters);

        wireframe: boolean;
        wireframeLinewidth: number;

        setValues(parameters: MeshDepthMaterialParameters): void;
        clone(): MeshDepthMaterial;
        copy(source: MeshDepthMaterial): MeshDepthMaterial;
    }

    export interface MeshLambertMaterialParameters extends MaterialParameters {
        color?: number|string;
        emissive?: number|string;
        emissiveIntensity?: number;
        emissiveMap?: Texture;
        map?: Texture;
        lighhtMap?: Texture;
        lightMapIntensity?: number;
        aoMap?: Texture;
        aoMapIntensity?: number;
        specularMap?: Texture;
        alphaMap?: Texture;
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        skinning?: boolean;
        morphTargets?: boolean;
        morphNormals?: boolean;
    }

    export class MeshLambertMaterial extends Material {
        constructor(parameters?: MeshLambertMaterialParameters);

        color: Color;
        emissive: number|string;
        emissiveIntensity: number;
        emissiveMap: Texture;
        map: Texture;
        lighhtMap: Texture;
        lightMapIntensity: number;
        aoMap: Texture;
        aoMapIntensity: number;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        setValues(parameters: MeshLambertMaterialParameters): void;
        clone(): MeshLambertMaterial;
        copy(source: MeshLambertMaterial): MeshLambertMaterial;
    }

    export interface MeshStandardMaterialParameters extends MaterialParameters {
        color?: number|string;
        roughness?: number;
        metalness?: number;
        map?: Texture;
        lighhtMap?: Texture;
        lightMapIntensity?: number;
        aoMap?: Texture;
        aoMapIntensity?: number;
        emissive?: Color;
        emissiveIntensity?: number;
        emissiveMap?: Texture;
        bumpMap?: Texture;
        bumpScale?: number;
        normalMap?: Texture;
        normalScale?: number;
        displacementMap?: Texture;
        displacementScale?: number;
        displacementBias?: number;
        roughnessMap?: Texture;
        metalMap?: Texture;
        alphaMap?: Texture;
        envMap?: Texture;
        envMapIntensity?: number;
        refractionRatio?: number;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        skinning?: boolean;
        morphTargets?: boolean;
        morphNormals?: boolean;
    }

    export class MeshStandardMaterial extends Material {
        constructor(parameters?: MeshStandardMaterialParameters);

        defines: any;
        color: Color;
        roughness: number;
        metalness: number;
        map: Texture;
        lighhtMap: Texture;
        lightMapIntensity: number;
        aoMap: Texture;
        aoMapIntensity: number;
        emissive: Color;
        emissiveIntensity: number;
        emissiveMap: Texture;
        bumpMap: Texture;
        bumpScale: number;
        normalMap: Texture;
        normalScale: number;
        displacementMap: Texture;
        displacementScale: number;
        displacementBias: number;
        roughnessMap: Texture;
        metalMap: Texture;
        alphaMap: Texture;
        envMap: Texture;
        envMapIntensity: number;
        refractionRatio: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;

        setValues(parameters: MeshStandardMaterialParameters): void;
        clone(): MeshStandardMaterial;
        copy(source: MeshStandardMaterial): MeshStandardMaterial;
    }

    export interface MeshNormalMaterialParameters extends MaterialParameters {
        /** Render geometry as wireframe. Default is false (i.e. render as smooth shaded). */
        wireframe?: boolean;
        /** Controls wireframe thickness. Default is 1. */
        wireframeLinewidth?: number;
        morphTargets?: boolean;
    }

    export class MeshNormalMaterial extends Material {
        constructor(parameters?: MeshNormalMaterialParameters);

        wireframe: boolean;
        wireframeLinewidth: number;
        morphTargets: boolean;

        setValues(parameters: MeshNormalMaterialParameters): void;
        clone(): MeshNormalMaterial;
        copy(source: MeshNormalMaterial): MeshNormalMaterial;
    }

    export interface MeshPhongMaterialParameters extends MaterialParameters {
        /** geometry color in hexadecimal. Default is 0xffffff. */
        color?: number|string;
        specular?: number;
        shininess?: number;
        opacity?: number;
        map?: Texture;
        lightMap?: Texture;
        lightMapIntensity?: number;
        aoMap?: Texture;
        aoMapIntensity?: number;
        emissive?: number;
        emissiveIntensity?: number;
        emissiveMap?: Texture;
        bumpMap?: Texture;
        bumpScale?: number;
        normalMap?: Texture;
        normalScale?: Vector2;
        displacementMap?: Texture;
        displacementScale?: number;
        displacementBias?: number;
        specularMap?: Texture;
        alphaMap?: Texture;
        envMap?: Texture;
        combine?: Combine;
        reflectivity?: number;
        refractionRatio?: number;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        wireframeLinecap?: string;
        wireframeLinejoin?: string;
        skinning?: boolean;
        morphTargets?: boolean;
        morphNormals?: boolean;
    }

    export class MeshPhongMaterial extends Material {
        constructor(parameters?: MeshPhongMaterialParameters);

        color: Color; // diffuse
        specular: Color;
        shininess: number;
        map: Texture;
        lightMap: Texture;
        lightMapIntensity: number;
        aoMap: Texture;
        aoMapIntensity: number;
        emissive: Color;
        emissiveIntensity: number;
        emissiveMap: Texture;
        bumpMap: Texture;
        bumpScale: number;
        normalMap: Texture;
        normalScale: Vector2;
        displacementMap: Texture;
        displacementScale: number;
        displacementBias: number;
        specularMap: Texture;
        alphaMap: Texture;
        envMap: Texture;
        combine: Combine;
        reflectivity: number;
        refractionRatio: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;
        metal: boolean; // deprecated

        setValues(parameters: MeshPhongMaterialParameters): void;
        clone(): MeshPhongMaterial;
        copy(source: MeshPhongMaterial): MeshPhongMaterial;
    }

    export interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
        reflectivity?: number;
        clearCoat?: number;
        clearCoatRoughness?: number;
    }

    export class MeshPhysicalMaterial extends MeshStandardMaterial {
        constructor(parameters: MeshPhysicalMaterialParameters);

        defines: any;
        reflectivity: number;
        clearCoat: number;
        clearCoatRoughness: number;
    }

    // MultiMaterial does not inherit the Material class in the original code. However, it should treat as Material class.
    // See tests/canvas/canvas_materials.ts.
    export class MultiMaterial extends Material {
        constructor(materials?: Material[]);

        materials: Material[];

        toJSON(meta: any): any;
        clone(): MultiMaterial;
    }

    export class MeshFaceMaterial extends MultiMaterial {} // deprecated, use MultiMaterial

    export interface PointsMaterialParameters extends MaterialParameters {
        color?: number|string;
        map?: Texture;
        size?: number;
        sizeAttenuation?: boolean;
    }

    export class PointsMaterial extends Material {
        constructor(parameters?: PointsMaterialParameters);

        color: Color;
        map: Texture;
        size: number;
        sizeAttenuation: boolean;

        setValues(parameters: PointsMaterialParameters): void;
        clone(): PointsMaterial;
        copy(source: PointsMaterial): PointsMaterial;
    }

    export class PointCloudMaterial extends PointsMaterial {} // deprecated
    export class ParticleBasicMaterial extends PointsMaterial {} // deprecated
    export class ParticleSystemMaterial extends PointsMaterial {} // deprecated

    export interface ShaderMaterialParameters extends MaterialParameters {
        defines?: any;
        uniforms?: any; 
        vertexShader?: string;
        fragmentShader?: string;
        lineWidth?: number;
        wireframe?: boolean;
        wireframeLinewidth?: number;
        lights?: boolean;
        clipping?: boolean;
        skinning?: boolean;
        morphTargets?: boolean;
        morphNormals?: boolean;
    }

    export class ShaderMaterial extends Material {
        constructor(parameters?: ShaderMaterialParameters);

        defines: any;
        uniforms: any; // type should be  { [uniform: string]: { value: any }; };    but gives "Index signature is missing in type" error during compilation
        vertexShader: string;
        fragmentShader: string;
        linewidth: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        lights: boolean;
        clipping: boolean;
        skinning: boolean;
        morphTargets: boolean;
        morphNormals: boolean;
        derivatives: any; // deprecated, use extensions.derivatives
        extensions: { derivatives: boolean; fragDepth: boolean; drawBuffers: boolean; shaderTextureLOD: boolean };
        defaultAttributeValues: any;
        index0AttributeName: string;

        setValues(parameters: ShaderMaterialParameters): void;
        clone(): ShaderMaterial;
        copy(source: ShaderMaterial): ShaderMaterial;
        toJSON(meta: any): any;
    }

    export class RawShaderMaterial extends ShaderMaterial {
        constructor(parameters?: ShaderMaterialParameters);
    }

    export interface SpriteMaterialParameters extends MaterialParameters {
        color?: number|string;
        map?: Texture;
        rotation?: number;
    }

    export class SpriteMaterial extends Material {
        constructor(parameters?: SpriteMaterialParameters);

        color: Color;
        map: Texture;
        rotation: number;

        setValues(parameters: SpriteMaterialParameters): void;
        clone(): SpriteMaterial;
        copy(source: SpriteMaterial): SpriteMaterial;
    }

    export class ShadowMaterial extends ShaderMaterial {
        constructor(parameters?: ShaderMaterialParameters);
    }

    // Math //////////////////////////////////////////////////////////////////////////////////

    export class Box2 {
        constructor(min?: Vector2, max?: Vector2);

        max: Vector2;
        min: Vector2;

        set(min: Vector2, max: Vector2): Box2;
        setFromPoints(points: Vector2[]): Box2;
        setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
        clone(): Box2;
        copy(box: Box2): Box2;
        makeEmpty(): Box2;
        isEmpty(): boolean;
        center(optionalTarget?: Vector2): Vector2;
        size(optionalTarget?: Vector2): Vector2;
        expandByPoint(point: Vector2): Box2;
        expandByVector(vector: Vector2): Box2;
        expandByScalar(scalar: number): Box2;
        containsPoint(point: Vector2): boolean;
        containsBox(box: Box2): boolean;
        getParameter(point: Vector2): Vector2;
        intersectsBox(box: Box2): boolean;
        clampPoint(point: Vector2, optionalTarget?: Vector2): Vector2;
        distanceToPoint(point: Vector2): number;
        intersect(box: Box2): Box2;
        union(box: Box2): Box2;
        translate(offset: Vector2): Box2;
        equals(box: Box2): boolean;

        empty(): any; // deprecated, use isEmpty()
        isIntersectionBox(b: any): any; // deprecated, use intersectsBox()
    }

    export class Box3 {
        constructor(min?: Vector3, max?: Vector3);

        max: Vector3;
        min: Vector3;

        set(min: Vector3, max: Vector3): Box3;
        setFromArray(array: ArrayLike<number>): Box3;
        setFromPoints(points: Vector3[]): Box3;
        setFromCenterAndSize(center: Vector3, size: Vector3): Box3;
        setFromObject(object: Object3D): Box3;
        clone(): Box3;
        copy(box: Box3): Box3;
        makeEmpty(): Box3;
        isEmpty(): boolean;
        center(optionalTarget?: Vector3): Vector3;
        size(optionalTarget?: Vector3): Vector3;
        expandByPoint(point: Vector3): Box3;
        expandByVector(vector: Vector3): Box3;
        expandByScalar(scalar: number): Box3;
        containsPoint(point: Vector3): boolean;
        containsBox(box: Box3): boolean;
        getParameter(point: Vector3): Vector3;
        intersectsBox(box: Box3): boolean;
        intersectsSphere(sphere: Sphere): boolean;
        intersectsPlane(plane: Plane): boolean;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        distanceToPoint(point: Vector3): number;
        getBoundingSphere(optionalTarget?: Sphere): Sphere;
        intersect(box: Box3): Box3;
        union(box: Box3): Box3;
        applyMatrix4(matrix: Matrix4): Box3;
        translate(offset: Vector3): Box3;
        equals(box: Box3): boolean;
        
        empty(): any; // deprecated, use isEmpty()
        isIntersectionBox(b: any): any; // deprecated, use intersectsBox()
        isIntersectionSphere(s: any): any; // deprecated, use intersectsSphere()
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
        setScalar(scalar: number): Color;
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
         * Clones this color.
         */
        clone(): Color;

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
        sub(color: Color): Color;
        multiply(color: Color): Color;
        multiplyScalar(s: number): Color;
        lerp(color: Color, alpha: number): Color;
        equals(color: Color): boolean;
        fromArray(rgb: number[], offset?: number): Color;
        toArray(array?: number[], offset?: number): number[];
    }

    export namespace ColorKeywords {
        export const aliceblue: number;
        export const antiquewhite: number;
        export const aqua: number;
        export const aquamarine: number;
        export const azure: number;
        export const beige: number;
        export const bisque: number;
        export const black: number;
        export const blanchedalmond: number;
        export const blue: number;
        export const blueviolet: number;
        export const brown: number;
        export const burlywood: number;
        export const cadetblue: number;
        export const chartreuse: number;
        export const chocolate: number;
        export const coral: number;
        export const cornflowerblue: number;
        export const cornsilk: number;
        export const crimson: number;
        export const cyan: number;
        export const darkblue: number;
        export const darkcyan: number;
        export const darkgoldenrod: number;
        export const darkgray: number;
        export const darkgreen: number;
        export const darkgrey: number;
        export const darkkhaki: number;
        export const darkmagenta: number;
        export const darkolivegreen: number;
        export const darkorange: number;
        export const darkorchid: number;
        export const darkred: number;
        export const darksalmon: number;
        export const darkseagreen: number;
        export const darkslateblue: number;
        export const darkslategray: number;
        export const darkslategrey: number;
        export const darkturquoise: number;
        export const darkviolet: number;
        export const deeppink: number;
        export const deepskyblue: number;
        export const dimgray: number;
        export const dimgrey: number;
        export const dodgerblue: number;
        export const firebrick: number;
        export const floralwhite: number;
        export const forestgreen: number;
        export const fuchsia: number;
        export const gainsboro: number;
        export const ghostwhite: number;
        export const gold: number;
        export const goldenrod: number;
        export const gray: number;
        export const green: number;
        export const greenyellow: number;
        export const grey: number;
        export const honeydew: number;
        export const hotpink: number;
        export const indianred: number;
        export const indigo: number;
        export const ivory: number;
        export const khaki: number;
        export const lavender: number;
        export const lavenderblush: number;
        export const lawngreen: number;
        export const lemonchiffon: number;
        export const lightblue: number;
        export const lightcoral: number;
        export const lightcyan: number;
        export const lightgoldenrodyellow: number;
        export const lightgray: number;
        export const lightgreen: number;
        export const lightgrey: number;
        export const lightpink: number;
        export const lightsalmon: number;
        export const lightseagreen: number;
        export const lightskyblue: number;
        export const lightslategray: number;
        export const lightslategrey: number;
        export const lightsteelblue: number;
        export const lightyellow: number;
        export const lime: number;
        export const limegreen: number;
        export const linen: number;
        export const magenta: number;
        export const maroon: number;
        export const mediumaquamarine: number;
        export const mediumblue: number;
        export const mediumorchid: number;
        export const mediumpurple: number;
        export const mediumseagreen: number;
        export const mediumslateblue: number;
        export const mediumspringgreen: number;
        export const mediumturquoise: number;
        export const mediumvioletred: number;
        export const midnightblue: number;
        export const mintcream: number;
        export const mistyrose: number;
        export const moccasin: number;
        export const navajowhite: number;
        export const navy: number;
        export const oldlace: number;
        export const olive: number;
        export const olivedrab: number;
        export const orange: number;
        export const orangered: number;
        export const orchid: number;
        export const palegoldenrod: number;
        export const palegreen: number;
        export const paleturquoise: number;
        export const palevioletred: number;
        export const papayawhip: number;
        export const peachpuff: number;
        export const peru: number;
        export const pink: number;
        export const plum: number;
        export const powderblue: number;
        export const purple: number;
        export const red: number;
        export const rosybrown: number;
        export const royalblue: number;
        export const saddlebrown: number;
        export const salmon: number;
        export const sandybrown: number;
        export const seagreen: number;
        export const seashell: number;
        export const sienna: number;
        export const silver: number;
        export const skyblue: number;
        export const slateblue: number;
        export const slategray: number;
        export const slategrey: number;
        export const snow: number;
        export const springgreen: number;
        export const steelblue: number;
        export const tan: number;
        export const teal: number;
        export const thistle: number;
        export const tomato: number;
        export const turquoise: number;
        export const violet: number;
        export const wheat: number;
        export const white: number;
        export const whitesmoke: number;
        export const yellow: number;
        export const yellowgreen: number;
    }

    export class Euler {
        constructor(x?: number, y?: number, z?: number, order?: string);
        
        x: number;
        y: number;
        z: number;
        order: string;
        onChangeCallback: Function;

        set(x: number, y: number, z: number, order?: string): Euler;
        clone(): Euler;
        copy(euler: Euler): Euler;
        setFromRotationMatrix(m: Matrix4, order?: string, update?: boolean): Euler;
        setFromQuaternion(q:Quaternion, order?: string, update?: boolean): Euler;
        setFromVector3( v: Vector3, order?: string ): Euler;
        reorder(newOrder: string): Euler;
        equals(euler: Euler): boolean;
        fromArray(xyzo: any[]): Euler;
        toArray(array?: number[], offset?: number): number[];
        toVector3(optionalResult?: Vector3): Vector3;
        onChange(callback: Function): void;

        static RotationOrders: string[];
        static DefaultOrder: string;
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
        clone(): Frustum;
        copy(frustum: Frustum): Frustum;
        setFromMatrix(m: Matrix4): Frustum;
        intersectsObject(object: Object3D): boolean;
        intersectsObject(sprite: Sprite): boolean;
        intersectsSphere(sphere: Sphere): boolean;
        intersectsBox(box: Box3): boolean;
        containsPoint(point: Vector3): boolean;
    }

    export class Line3 {
        constructor(start?: Vector3, end?: Vector3);

        start: Vector3;
        end: Vector3;

        set(start?: Vector3, end?: Vector3): Line3;
        clone(): Line3;
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
    }

    /**
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Math.js">src/math/Math.js</a>
     */
    export namespace Math {
        export const DEG2RAD: number;
        export const RAD2DEG: number;

        export function generateUUID(): string;

        /**
         * Clamps the x to be between a and b.
         *
         * @param value Value to be clamped.
         * @param min Minimum value
         * @param max Maximum value.
         */
        export function clamp(value: number, min: number, max: number): number;
        export function euclideanModulo( n: number, m: number ): number;

        /**
         * Linear mapping of x from range [a1, a2] to range [b1, b2].
         *
         * @param x Value to be mapped.
         * @param a1 Minimum value for range A.
         * @param a2 Maximum value for range A.
         * @param b1 Minimum value for range B.
         * @param b2 Maximum value for range B.
         */
        export function mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;

        export function smoothstep(x: number, min: number, max: number): number;

        export function smootherstep(x: number, min: number, max: number): number;

        /**
         * Random float from 0 to 1 with 16 bits of randomness.
         * Standard Math.random() creates repetitive patterns when applied over larger space.
         */
        export function random16(): number; // deprecated, use Math.random()

        /**
         * Random integer from low to high interval.
         */
        export function randInt(low: number, high: number): number;

        /**
         * Random float from low to high interval.
         */
        export function randFloat(low: number, high: number): number;

        /**
         * Random float from - range / 2 to range / 2 interval.
         */
        export function randFloatSpread(range: number): number;

        export function degToRad(degrees: number): number;

        export function radToDeg(radians: number): number;

        export function isPowerOfTwo(value: number): boolean;

        export function nearestPowerOfTwo(value: number): number;

        export function nextPowerOfTwo(value: number): number;
    }

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
         * Float32Array with matrix values.
         */
        elements: Float32Array;

        set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): Matrix3;
        identity(): Matrix3;
        clone(): Matrix3;
        copy(m: Matrix3): Matrix3;
        setFromMatrix4(m: Matrix4): Matrix3;
        applyToVector3Array(array: ArrayLike<number>, offset?: number, length?: number): ArrayLike<number>;
        applyToBuffer(buffer: BufferAttribute, offset?: number, length?: number): BufferAttribute;
        multiplyScalar(s: number): Matrix3;
        determinant(): number;
        getInverse(matrix: Matrix3, throwOnDegenerate?: boolean): Matrix3;

        /**
         * Transposes this matrix in place.
         */
        transpose(): Matrix3;
        getNormalMatrix(matrix4: Matrix4): Matrix3;

        /**
         * Transposes this matrix into the supplied array r, and returns itself.
         */
        transposeIntoArray(r: number[]): number[];
        fromArray(array: number[]): Matrix3;
        toArray(): number[];

        // deprecated
        multiplyVector3(vector: Vector3): any;
        multiplyVector3Array(a: any): any;
        getInverse(matrix: Matrix4, throwOnDegenerate?: boolean): Matrix3;
        flattenToArrayOffset(array: number[], offset: number): number[];
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
        constructor();

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
        clone(): Matrix4;
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

        premultiply(m: Matrix4): Matrix4;

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
        applyToVector3Array(array: ArrayLike<number>, offset?: number, length?: number): ArrayLike<number>;
        applyToBuffer( buffer: BufferAttribute, offset?: number, length?: number): BufferAttribute;
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
         * Sets the position component for this matrix from vector v.
         */
        setPosition(v: Vector3): Matrix4;
        

        /**
         * Sets this matrix to the inverse of matrix m.
         * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm.
         */
        getInverse(m: Matrix4, throwOnDegeneratee?: boolean): Matrix4;

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
        equals( matrix: Matrix4 ): boolean;
        fromArray(array: number[]): Matrix4;
        toArray(): number[];

        // deprecated
        extractPosition(m: Matrix4): Matrix4;
        setRotationFromQuaternion(q: Quaternion): Matrix4;
        multiplyVector3(v: any): any;
        multiplyVector4(v: any): any;
        multiplyVector3Array(array: number[]): number[];
        rotateAxis(v: any): void;
        crossVector(v: any): void;
        flattenToArrayOffset(array: number[], offset: number): number[];
    }

    export class Plane {
        constructor(normal?: Vector3, constant?: number);

        normal: Vector3;
        constant: number;

        set(normal: Vector3, constant: number): Plane;
        setComponents(x: number, y: number, z: number, w: number): Plane;
        setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
        setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
        clone(): Plane;
        copy(plane: Plane): Plane;
        normalize(): Plane;
        negate(): Plane;
        distanceToPoint(point: Vector3): number;
        distanceToSphere(sphere: Sphere): number;
        projectPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        orthoPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        intersectLine(line: Line3, optionalTarget?: Vector3): Vector3;
        intersectsLine(line: Line3): boolean;
        intersectsBox(box: Box3): boolean;
        coplanarPoint(optionalTarget?: boolean): Vector3;
        applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
        translate(offset: Vector3): Plane;
        equals(plane: Plane): boolean;

        // deprecated
        isIntersectionLine(l: any): any;
    }

    export class Spherical {
        constructor(radius?: number, phi?: number, theta?: number);

        set(radius: number, phi: number, theta: number): Spherical;
        clone(): Spherical;
        copy(other: Spherical): Spherical;
        makeSafe(): void;
        setFromVector3(vec3: Vector3): Spherical;
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
         * Clones this quaternion.
         */
        clone(): Quaternion;

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
        premultiply(q: Quaternion): Quaternion;

        /**
         * Sets this quaternion to a x b
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
         */
        multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;


        slerp(qb: Quaternion, t: number): Quaternion;
        equals(v: Quaternion): boolean;
        fromArray(n: number[]): Quaternion;
        toArray(): number[];

        fromArray(xyzw: number[], offset?: number): Quaternion;
        toArray(xyzw?: number[], offset?: number): number[];

        onChange(callback: Function): Quaternion;
        onChangeCallback: Function;

        /**
         * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
         */
        static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;
        
        static slerpFlat(dst: number[], dstOffset: number, src0: number[], srcOffset: number, src1: number[], stcOffset1: number, t: number): Quaternion;

        // deprecated
        multiplyVector3(v: any): any;
    }

    export class Ray {
        constructor(origin?: Vector3, direction?: Vector3);

        origin: Vector3;
        direction: Vector3;

        set(origin: Vector3, direction: Vector3): Ray;
        clone(): Ray;
        copy(ray: Ray): Ray;
        at(t: number, optionalTarget?: Vector3): Vector3;
        lookAt(v: Vector3): Vector3;
        recast(t: number): Ray;
        closestPointToPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        distanceToPoint(point: Vector3): number;
        distanceSqToPoint(point: Vector3): number;
        distanceSqToSegment(v0: Vector3, v1: Vector3, optionalPointOnRay?: Vector3, optionalPointOnSegment?: Vector3): number;
        intersectSphere(sphere: Sphere, optionalTarget?: Vector3): Vector3;
        intersectsSphere(sphere: Sphere): boolean;
        distanceToPlane(plane: Plane): number;
        intersectPlane(plane: Plane, optionalTarget?: Vector3): Vector3;
        intersectsPlane(plane: Plane): boolean;
        intersectBox(box: Box3, optionalTarget?: Vector3): Vector3;
        intersectsBox(box: Box3): boolean;
        intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, optionalTarget?: Vector3): Vector3;
        applyMatrix4(matrix4: Matrix4): Ray;
        equals(ray: Ray): boolean;
        
        // deprecated
        isIntersectionBox(b: any): any;
        isIntersectionPlane(p: any): any;
        isIntersectionSphere(s: any): any;
    }

    export class Sphere {
        constructor(center?: Vector3, radius?: number);

        center: Vector3;
        radius: number;

        set(center: Vector3, radius: number): Sphere;
        setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
        clone(): Sphere;
        copy(sphere: Sphere): Sphere;
        empty(): boolean;
        containsPoint(point: Vector3): boolean;
        distanceToPoint(point: Vector3): number;
        intersectsSphere(sphere: Sphere): boolean;
        intersectsBox(box: Box3): boolean;
        intersectsPlane(plane: Plane): boolean;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        getBoundingBox(optionalTarget?: Box3): Box3;
        applyMatrix4(matrix: Matrix4): Sphere;
        translate(offset: Vector3): Sphere;
        equals(sphere: Sphere): boolean;
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
        clone(): Triangle;
        copy(triangle: Triangle): Triangle;
        area(): number;
        midpoint(optionalTarget?: Vector3): Vector3;
        normal(optionalTarget?: Vector3): Vector3;
        plane(optionalTarget?: Vector3): Plane;
        barycoordFromPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        containsPoint(point: Vector3): boolean;
        closestPointToPoint(): Vector3;
        equals(triangle: Triangle): boolean;

        static normal(a: Vector3, b: Vector3, c: Vector3, optionalTarget?: Vector3): Vector3;
        static barycoordFromPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3, optionalTarget: Vector3): Vector3;
        static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
    }

    /**
     * ( interface Vector&lt;T&gt; )
     *
     * Abstract interface of Vector2, Vector3 and Vector4.
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
        width: number;
        height: number;

        /**
         * Sets value of this vector.
         */
        set(x: number, y: number): Vector2;

        setScalar(scalar: number): Vector2;

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
         * Clones this vector.
         */
        clone(): Vector2;
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
        addScaledVector( v: Vector2, s: number ): Vector2;
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
        multiplyScalar(scalar: number): Vector2;

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
        clampLength(min: number, max: number): Vector2;
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
        lengthManhattan(): number;

        /**
         * Normalizes this vector.
         */
        normalize(): Vector2;

        /**
         * computes the angle in radians with respect to the positive x-axis
         */
        angle(): number;

        /**
         * Computes distance of this vector to v.
         */
        distanceTo(v: Vector2): number;

        /**
         * Computes squared distance of this vector to v.
         */
        distanceToSquared(v: Vector2): number;
        distanceToManhattan(v: Vector2): number;

        /**
         * Normalizes this vector and multiplies it by l.
         */
        setLength(length: number): Vector2;

        lerp(v: Vector2, alpha: number): Vector2;

        lerpVectors(v1: Vector2, v2: Vector2, alpha: number): Vector2;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector2): boolean;

        fromArray(xy: number[], offset?: number): Vector2;

        toArray(xy?: number[], offset?: number): number[];

        fromAttribute( attribute: BufferAttribute, index: number, offset?: number): Vector2;

        rotateAround( center: Vector2, angle: number ): Vector2;
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
         * Sets all values of this vector.
         */
        setScalar(scalar: number): Vector3;

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
         * Clones this vector.
         */
        clone(): Vector3;
        /**
         * Copies value of v to this vector.
         */
        copy(v: Vector3): Vector3;

        /**
         * Adds v to this vector.
         */
        add(a: Vector3): Vector3;
        addScalar(s: number): Vector3;
        addScaledVector(v: Vector3, s: number): Vector3;

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
        clampLength(min: number, max: number): Vector3;
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
        distanceToManhattan(v: Vector3): number;

        setFromSpherical(s: Spherical): Matrix3;
        setFromMatrixPosition(m: Matrix4): Vector3;
        setFromMatrixScale(m: Matrix4): Vector3;
        setFromMatrixColumn(matrix: Matrix4, index: number): Vector3;

        /**
         * Checks for strict equality of this vector and v.
         */
        equals(v: Vector3): boolean;

        fromArray(xyz: number[], offset?: number): Vector3;
        toArray(xyz?: number[], offset?: number): number[];
        fromAttribute( attribute: BufferAttribute, index: number, offset?: number): Vector3;

        // deprecated
        getPositionFromMatrix(m: Matrix4): Vector3;
        getScaleFromMatrix(m: Matrix4): Vector3;
        getColumnFromMatrix(index: number, matrix: Matrix4): Vector3;
    }

    export class Vertex extends Vector3 {} // deprecated

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
         * Sets all values of this vector.
         */
        setScalar(scalar: number): Vector4;
        
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
         * Clones this vector.
         */
        clone(): Vector4;
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
        addScaledVector( v: Vector4, s: number ): Vector4;
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
        setLength(length: number): Vector4;

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
    }

    export abstract class Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        parameterPositions: any;
        samplesValues: any;
        valueSize: number;
        resultBuffer: any;

        evaluate(time: number): any;
    }

    export class CubicInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }
    
    export class DiscreteInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    export class LinearInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    export class QuaternionLinearInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    // Objects //////////////////////////////////////////////////////////////////////////////////

    export class Bone extends Object3D {
        constructor(skin: SkinnedMesh);

        skin: SkinnedMesh;

        clone(): Bone;
        copy(source: Bone): Bone;
    }

    export class Group extends Object3D {
        constructor();
    }

    export class LOD extends Object3D {
        constructor();

        levels: any[];

        addLevel(object: Object3D, distance?: number): void;
        getObjectForDistance(distance: number): Object3D;
        raycast(raycaster: Raycaster, intersects: any): void;
        update(camera: Camera): void;
        clone(): LOD;
        copy(source: LOD): LOD;
        toJSON(meta: any): any;

        // deprecated
        objects: any[];
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

        add(object: Object3D): void;
        add(texture: Texture, size?: number, distance?: number, blending?: Blending, color?: Color): void;
        updateLensFlares(): void;
        clone(): LensFlare;
        copy(source: LensFlare): LensFlare;
    }

    export class Line extends Object3D {
        constructor(
            geometry?: Geometry | BufferGeometry,
            material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial,
            mode?: number
        );

        geometry: Geometry|BufferGeometry;
        material: Material; // LineDashedMaterial or LineBasicMaterial or ShaderMaterial

        raycast(raycaster: Raycaster, intersects: any): void;
        clone(): Line;
        copy(source: Line): Line;
    }

    export const LineStrip: number; // deprecated
    export const LinePieces: number; // deprecated

    export class LineSegments extends Line {
        constructor(
            geometry?: Geometry | BufferGeometry,
            material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial,
            mode?: number
        );

        clone(): LineSegments;
        copy(source: LineSegments): LineSegments;
    }

    enum LineMode {}

    export class Mesh extends Object3D {
        constructor(geometry?: Geometry, material?: Material);
        constructor(geometry?: BufferGeometry, material?: Material);

        geometry: Geometry|BufferGeometry;
        material: Material;
        drawMode: TrianglesDrawModes;

        setDrawMode(drawMode: TrianglesDrawModes): void;
        updateMorphTargets(): void;
        getMorphTargetIndexByName(name: string): number;
        raycast(raycaster: Raycaster, intersects: any): void;
        clone(): Mesh;
        copy(source: Mesh): Mesh;
    }

    /**
     * A class for displaying particles in the form of variable size points. For example, if using the WebGLRenderer, the particles are displayed using GL_POINTS.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/objects/ParticleSystem.js">src/objects/ParticleSystem.js</a>
     */
    export class Points extends Object3D {

        /**
         * @param geometry An instance of Geometry or BufferGeometry.
         * @param material An instance of Material (optional).
         */
        constructor(
            geometry?: Geometry | BufferGeometry,
            material?: Material
        );

        /**
         * An instance of Geometry or BufferGeometry, where each vertex designates the position of a particle in the system.
         */
        geometry: Geometry | BufferGeometry;

        /**
         * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
         */
        material: Material;

        raycast(raycaster: Raycaster, intersects: any): void;
        clone(): Points;
        copy(source: Points): Points;
    }

    export class PointCloud extends Points {} // deprecated
    export class ParticleSystem extends Points {} // deprecated

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
        clone(): Skeleton;
    }

    export class SkinnedMesh extends Mesh {
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshBasicMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshDepthMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MultiMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshLambertMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshNormalMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: MeshPhongMaterial, useVertexTexture?: boolean);
        constructor(geometry?: Geometry|BufferGeometry, material?: ShaderMaterial, useVertexTexture?: boolean);

        bindMode: string;
        bindMatrix: Matrix4;
        bindMatrixInverse: Matrix4;
        skeleton: Skeleton;

        bind( skeleton: Skeleton, bindMatrix?: Matrix4 ): void;
        pose(): void;
        normalizeSkinWeights(): void;
        updateMatrixWorld(force?: boolean): void;
        clone(): SkinnedMesh;
        copy(source: SkinnedMesh): SkinnedMesh;
    }

    export class Sprite extends Object3D {
        constructor(material?: Material);

        geometry: BufferGeometry;
        material: SpriteMaterial;

        raycast(raycaster: Raycaster, intersects: any): void;
        clone(): Sprite;
        copy(source: Sprite): Sprite;
    }

    export class Particle extends Sprite {} // deprecated


    // Renderers //////////////////////////////////////////////////////////////////////////////////

    export interface Renderer {
        domElement: HTMLCanvasElement;

        render(scene: Scene, camera: Camera): void;
        setSize(width:number, height:number, updateStyle?:boolean): void;
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

        /**
         * default is false.
         */
        logarithmicDepthBuffer?: boolean;
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
        context: WebGLRenderingContext;

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

        clippingPlanes: any[];
        localClippingEnabled: boolean;

        extensions: WebGLExtensions;

        /**
         * Default is false.
         */
        gammaInput: boolean;

        /**
         * Default is false.
         */
        gammaOutput: boolean;

        physicallyCorrectLights: boolean;
        toneMapping: ToneMapping;
        toneMappingExposure: number;
        toneMappingWhitePoint: number;

        /**
         * Default is false.
         */
        shadowMapDebug: boolean;

        /**
         * Default is 8.
         */
        maxMorphTargets: number;

        /**
         * Default is 4.
         */
        maxMorphNormals: number;

        /**
         * An object with a series of statistical information about the graphics board memory and the rendering process. Useful for debugging or just for the sake of curiosity. The object contains the following fields:
         */
        info: {
            memory: {
                geometries: number;
                textures: number;
            };
            render: {
                calls: number;
                vertices: number;
                faces: number;
                points: number;
            };
            programs: number;
        };

        shadowMap: WebGLShadowMap;

        pixelRation: number;

        capabilities: WebGLCapabilities;
        properties: WebGLProperties;
        state: WebGLState;
        allocTextureUnit: any;

        /**
         * Return the WebGL context.
         */
        getContext(): WebGLRenderingContext;
        getContextAttributes(): any;
        forceContextLoss(): void;

        getMaxAnisotropy(): number;
        getPrecision(): string;
        getPixelRatio(): number;
        setPixelRatio(value: number): void;
        
        getSize(): { width: number; height: number; };

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
        setScissorTest(enable: boolean): void;

        /**
         * Returns a THREE.Color instance with the current clear color.
         */
        getClearColor(): Color;

        /**
         * Sets the clear color, using color for the color and alpha for the opacity.
         */
        setClearColor(color: Color, alpha?: number): void;
        setClearColor(color: string, alpha?: number): void;
        setClearColor(color: number, alpha?: number): void;
        
        /**
         * Returns a float with the current clear alpha. Ranges from 0 to 1.
         */
        getClearAlpha(): number;
        
        setClearAlpha(alpha: number): void;

        /**
         * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
         * Arguments default to true
         */
        clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

        clearColor(): void;
        clearDepth(): void;
        clearStencil(): void;
        clearTarget(renderTarget:WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;
        resetGLState(): void;
        dispose(): void;

        /**
         * Tells the shadow map plugin to update using the passed scene and camera parameters.
         *
         * @param scene an instance of Scene
         * @param camera — an instance of Camera
         */
        renderBufferImmediate(object: Object3D, program: Object, material: Material): void;

        renderBufferDirect(camera: Camera, fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;

        /**
         * Render a scene using a camera.
         * The render is done to the renderTarget (if specified) or to the canvas as usual.
         * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
         */
        render(scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean): void;

        /**
         * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
         * If cullFace is false, culling will be disabled.
         * @param cullFace "back", "front", "front_and_back", or false.
         * @param frontFace "ccw" or "cw
         */
        setFaceCulling(cullFace?: CullFace, frontFace?: FrontFaceDirection): void;
        setTexture(texture: Texture, slot: number): void; // deprecated
        setTexture2D(texture: Texture, slot: number): void;
        setTextureCube(texture: Texture, slot: number): void;
        getCurrentRenderTarget(): RenderTarget;
        setRenderTarget(renderTarget: RenderTarget): void;
        readRenderTargetPixels( renderTarget: RenderTarget, x: number, y: number, width: number, height: number, buffer: any ): void;

        // deprecated
        gammaFactor: number;
        shadowMapEnabled: boolean;
        shadowMapType: ShadowMapType;
        shadowMapCullFace: CullFace;

        supportsFloatTextures(): any;
        supportsHalfFloatTextures(): any;
        supportsStandardDerivatives(): any;
        supportsCompressedTextureS3TC(): any;
        supportsCompressedTexturePVRTC(): any;
        supportsBlendMinMax(): any;
        supportsVertexTextures(): any;
        supportsInstancedArrays(): any;
        enableScissorTest(boolean: any): any;
    }

    export interface RenderTarget {} // not defined in the code, used in LightShadow and WebGRenderer classes

    export interface WebGLRenderTargetOptions {
        wrapS?: Wrapping;
        wrapT?: Wrapping;
        magFilter?: TextureFilter;
        minFilter?: TextureFilter;
        format?: number; // RGBAFormat;
        type?: TextureDataType; // UnsignedByteType;
        anisotropy?: number; // 1;
        depthBuffer?: boolean; // true;
        stencilBuffer?: boolean; // true;
    }

    export class WebGLRenderTarget extends EventDispatcher {
        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);

        uuid: string;
        width: number;
        height: number;
        scissor: Vector4;
        scissorTest: boolean;
        viewpport: Vector4;
        texture: Texture;
        depthBuffer: boolean;
        stencilBuffer: boolean;
        depthTexture: Texture;
        wrapS: any; // deprecated, use texture.wrapS
        wrapT: any; // deprecated, use texture.wrapT
        magFilter: any; // deprecated, use texture.magFilter
        minFilter: any; // deprecated, use texture.minFilter
        anisotropy: any; // deprecated, use texture.anisotropy
        offset: any; // deprecated, use texture.offset
        repeat: any; // deprecated, use texture.repeat
        format: any; // deprecated, use texture.format
        type: any; // deprecated, use texture.type
        generateMipmaps: any; // deprecated, use texture.generateMipmaps

        setSize(width: number, height: number): void;
        clone(): WebGLRenderTarget;
        copy(source: WebGLRenderTarget): WebGLRenderTarget;
        dispose(): void;
    }

    export class WebGLRenderTargetCube extends WebGLRenderTarget {
        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);

        activeCubeFace: number; // PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
        activeMipMapLevel: number;
    }

    // Renderers / Shaders /////////////////////////////////////////////////////////////////////
    export let ShaderChunk: {
        [name: string]: string;

        alphamap_fragment: string;
        alphamap_pars_fragment: string;
        alphatest_fragment: string;
        aomap_fragment: string;
        aomap_pars_fragment: string;
        begin_vertex: string;
        beginnormal_vertex: string;
        bsdfs: string;
        bumpmap_pars_fragment: string;
        clipping_planes_fragment: string;
        clipping_planes_pars_fragment: string;
        clipping_planes_pars_vertex: string;
        clipping_planes_vertex: string;
        color_fragment: string;
        color_pars_fragment: string;
        color_pars_vertex: string;
        color_vertex: string;
        common: string;
        cube_frag: string;
        cube_vert: string;
        cube_uv_reflection_fragment: string;
        defaultnormal_vertex: string;
        depth_frag: string;
        depth_vert: string;
        distanceRGBA_frag: string;
        distanceRGBA_vert: string;
        displacementmap_vertex: string;
        displacementmap_pars_vertex: string;
        emissivemap_fragment: string;
        emissivemap_pars_fragment: string;
        encodings_pars_fragment: string;
        encodings_fragment: string;
        envmap_fragment: string;
        envmap_pars_fragment: string;
        envmap_pars_vertex: string;
        envmap_vertex: string;
        equirect_frag: string;
        equirect_vert: string;
        fog_fragment: string;
        fog_pars_fragment: string;
        linedashed_frag: string;
        linedashed_vert: string;
        lightmap_fragment: string;
        lightmap_pars_fragment: string;
        lights_lambert_vertex: string;
        lights_pars: string;
        lights_phong_fragment: string;
        lights_phong_pars_fragment: string;
        lights_physical_fragment: string;
        lights_physical_pars_fragment: string;
        lights_template: string;
        logdepthbuf_fragment: string;
        logdepthbuf_pars_fragment: string;
        logdepthbuf_pars_vertex: string;
        logdepthbuf_vertex: string;
        map_fragment: string;
        map_pars_fragment: string;
        map_particle_fragment: string;
        map_particle_pars_fragment: string;
        meshbasic_frag: string;
        meshbasic_vert: string;
        meshlambert_frag: string;
        meshlambert_vert: string;
        meshphong_frag: string;
        meshphong_vert: string;
        meshphysical_frag: string;
        meshphysical_vert: string;
        metalnessmap_fragment: string;
        metalnessmap_pars_fragment: string;
        morphnormal_vertex: string;
        morphtarget_pars_vertex: string;
        morphtarget_vertex: string;
        normal_flip: string;
        normal_frag: string;
        normal_fragment: string;
        normal_vert: string;
        normalmap_pars_fragment: string;
        packing: string;
        points_frag: string;
        points_vert: string;
        shadow_frag: string;
        shadow_vert: string;

        premultiplied_alpha_fragment: string;
        project_vertex: string;
        roughnessmap_fragment: string;
        roughnessmap_pars_fragment: string;
        shadowmap_pars_fragment: string;
        shadowmap_pars_vertex: string;
        shadowmap_vertex: string;
        shadowmask_pars_fragment: string;
        skinbase_vertex: string;
        skinning_pars_vertex: string;
        skinning_vertex: string;
        skinnormal_vertex: string;
        specularmap_fragment: string;
        specularmap_pars_fragment: string;
        tonemapping_fragment: string;
        tonemapping_pars_fragment: string;
        uv2_pars_fragment: string;
        uv2_pars_vertex: string;
        uv2_vertex: string;
        uv_pars_fragment: string;
        uv_pars_vertex: string;
        uv_vertex: string;
        worldpos_vertex: string;
    }

    export interface Shader {
        uniforms: IUniform;
        vertexShader: string;
        fragmentShader: string;
    }

    export let ShaderLib: {
        [name: string]: Shader;
        basic: Shader;
        lambert: Shader;
        phong: Shader;
        standard: Shader;
        points: Shader;
        dashed: Shader;
        depth: Shader;
        normal: Shader;
        cube: Shader;
        equirect: Shader;
        depthRGBA: Shader;
        distanceRGBA: Shader;
        physical: Shader;
    };

    export interface IUniform {
        value: any;
    }

    export let UniformsLib: {
        common: {
            diffuse: IUniform;
            opacity: IUniform;
            map: IUniform;
            offsetRepeat: IUniform;
            specularMap: IUniform;
            alphaMap: IUniform;
            envMap: IUniform;
            flipEnvMap: IUniform;
            reflectivity: IUniform;
            refractionRation: IUniform;
        };
        aomap: {
            aoMap: IUniform;
            aoMapIntensity: IUniform;
        };
        lightmap: {
            lightMap: IUniform;
            lightMapIntensity: IUniform;
        };
        emissivemap: { emissiveMap: IUniform };
        bumpmap: {
            bumpMap: IUniform;
            bumpScale: IUniform;
        };
        normalmap: {
            normalMap: IUniform;
            normalScale: IUniform;
        };
        displacementmap: {
            displacementMap: IUniform;
            displacementScale: IUniform;
            displacementBias: IUniform;
        };
        roughnessmap: { roughnessMap: IUniform };
        metalnessmap: { metalnessMap: IUniform };
        fog: {
            fogDensity: IUniform;
            fogNear: IUniform;
            fogFar: IUniform;
            fogColor: IUniform;
        };
        lights: {
            ambientLightColor: IUniform
            directionalLights: {
                value: any[];
                properties: {
                    direction: {};
                    color: {};
                    shadow: {};
                    shadowBias: {};
                    shadowRadius: {};
                    shadowMapSize: {};
                };
            };
            directionalShadowMap: IUniform;
            directionalShadowMatrix: IUniform;
            spotLights: {
                value: any[];
                properties: {
                    color: {};
                    position: {};
                    direction: {};
                    distance: {};
                    coneCos: {};
                    penumbraCos: {};
                    decay: {};
                    shadow: {};
                    shadowBias: {};
                    shadowRadius: {};
                    shadowMapSize: {};
                };
            };
            spotShadowMap: IUniform;
            spotShadowMatrix: IUniform;
            pointLights: {
                value: any[];
                properties: {
                    color: {};
                    position: {};
                    decay: {};
                    distance: {};
                    shadow: {};
                    shadowBias: {};
                    shadowRadius: {};
                    shadowMapSize: {};
                };
            };
            pointShadowMap: IUniform;
            pointShadowMatrix: IUniform;
            hemisphereLigtts: {
                value: any[];
                properties: {
                    direction: {};
                    skycolor: {};
                    groundColor: {};
                };
            };
        };
        points: {
            diffuse: IUniform;
            opacity: IUniform;
            size: IUniform;
            scale: IUniform;
            map: IUniform;
            offsetRepeat: IUniform;
        };
    };

    export namespace UniformsUtils {
        export function merge(uniforms: any[]): any;
        export function clone(uniforms_src: any): any;
    }

    export class Uniform { 
        constructor(value: any);
        constructor(type: string, value: any); // deprecated

        type: string; // deprecated
        value: any;
        dynamic: boolean;
        onUpdateCallback: Function;

        onUpdate(callback: Function): Uniform;
    }

    // Renderers / WebGL /////////////////////////////////////////////////////////////////////
    export class WebGLBufferRenderer {
        constructor(_gl: WebGLRenderingContext, extensions: any, _infoRender: any);

        setMode(value: any): void;
        render(start: any, count: number): void;
        renderInstances(geometry: any): void;
    }

    export class WebGLClipping {
        uniform: { value: any, needsUpdate: boolean };
        numPlanes: number;

        init(planes: any[], enableLocalClipping: boolean, camera: Camera): boolean;
        beginShadows(): void;
        endShadows(): void;
        setState(planes: any[], clipShadows: boolean, camera: Camera, cache: boolean, fromCache: boolean): void; 
    }

    export interface WebGLCapabilitiesParameters {
        precision?: any;
        logarithmicDepthBuffer?: any;
    }

    export class WebGLCapabilities {
        constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters);

        precision: any;
        logarithmicDepthBuffer: any;
        maxTextures: any;
        maxVertexTextures: any;
        maxTextureSize: any;
        maxCubemapSize: any;
        maxAttributes: any;
        maxVertexUniforms: any;
        maxVaryings: any;
        maxFragmentUniforms: any;
        vertexTextures: any;
        floatFragmentTextures: any;
        floatVertexTextures: any;

        getMaxAnisotropy(): number;
        getMaxPrecision(precision: string): string;
    }

    export class WebGLExtensions {
        constructor(gl: WebGLRenderingContext);

        get(name: string): any;
    }

    export class WebGLGeometries {
        constructor(gl: WebGLRenderingContext, extensions: any, _infoRender: any);

        get(object: any): any;
    }

    export class WebGLLights {
        constructor(gl: WebGLRenderingContext, properties: any, info: any);
        
        get(light: any): any;
    }

    export class WebGLIndexedBufferRenderer {
        constructor(gl: WebGLRenderingContext, properties: any, info: any);

        setMode(value: any): void;
        setIndex(index: any): void;
        render(start: any, count: number): void;
        renderInstances(geometry: any, start: any, count: number): void;
    }
    
    export class WebGLObjects {
        constructor(gl: WebGLRenderingContext, properties: any, info: any);

        getAttributeBuffer(attribute: any): any;
        getWireframeAttribute(geometry: any): any;
        update(object: any): void;
    }

    export class WebGLProgram {
        constructor(renderer: WebGLRenderer, code: string, material: ShaderMaterial, parameters: WebGLRendererParameters);
        
        id: number;
        code: string;
        usedTimes: number;
        program: any;
        vertexShader: WebGLShader;
        fragmentShader: WebGLShader;
        uniforms: any; // deprecated, use getUniforms()
        attributes: any; // deprecated, use getAttributes()

        getUniforms(): WebGLUniforms;
        getAttributes(): any;
        destroy(): void;
    }

    export class WebGLPrograms {
        constructor(renderer: WebGLRenderer, capabilities: any);

        programs: any[];

        getParameters(material: ShaderMaterial, lights: any, fog: any, nClipPlanes: number, object: any): any;
        getProgramCode(material: ShaderMaterial, parameters: any): string;
        acquireProgram(material: ShaderMaterial, parameters: any, code: string): WebGLProgram;
        releaseProgram(program: WebGLProgram): void;
    }

    export class WebGLTextures {
        constructor(gl: any, extensions: any, state: any, properties:any, capabilities: any, paramThreeToGL: Function, info: any);

        setTexture2D(texture: any, slot: number): void;
        setTextureCube(texture: any, slot: number): void;
        setTextureCubeDynamic(texture: any, slot: number): void;
        setupRenderTarget(renderTarget: any): void;
        updateRenderTargetMipmap(renderTarget: any): void;
    }

    export class WebGLUniforms {
        constructor(gl: any, program: WebGLProgram, renderer: WebGLRenderer);

        renderer: WebGLRenderer;

        setValue(gl: any, value: any, renderer?: any): void;
        set(gl: any, object: any, name: string): void;
        setOptional(gl: any, object: any, name: string): void;

        static upload(gl: any, seq: any, values: any[], renderer: any): void;
        static seqWithValue(seq: any, values: any[]): any[];
        static splitDynamic(seq: any, values: any[]): any[];
        static evalDynamic(seq: any, values: any[], object: any, camera: any): any[];
    }
    
    export class WebGLProperties {
        constructor();

        get(object: any): any;
        delete(object: any): void;
        clear(): void;
    }

    export class WebGLShader {
        constructor(gl: any, type: string, string: string);
    }

    export class WebGLShadowMap {
        constructor(_renderer: Renderer, _lights: any[], _objects: any[], capabilities: any);

        enabled: boolean;
        autoUpdate: boolean;
        needsUpdate: boolean;
        type: ShadowMapType;
        renderReverseSided: boolean;
        renderSingleSided: boolean;

        render(scene: Scene, camera: Camera): void;

        // deprecated
        cullFace: any;
    }
    
    export class WebGLState {
        constructor(gl: any, extensions: any, paramThreeToGL: Function);

        buffers: {
            color: WebGLColorBuffer,
            depth: WebGLDepthBuffer,
            stencil: WebGLStencilBuffer,
        };

        init(): void;
        initAttributes(): void;
        enableAttribute(attribute: string): void;
        enableAttributeAndDivisor(attribute: string, meshPerAttribute: any, extension: any): void;
        disableUnusedAttributes(): void;
        enable(id: string): void;
        disable(id: string): void;
        getCompressedTextureFormats(): any[];
        setBlending(blending: number, blendEquation: number, blendSrc: number, blendDst: number, blendEquationAlpha: number, blendSrcAlpha: number, blendDstAlpha: number): void;
        setColorWrite(colorWrite: number): void;
        setDepthTest(depthTest: number): void;
        setDepthWrite(depthWrite: number): void;
        setDepthFunc(depthFunc: Function): void;
        setStencilTest(stencilTest: boolean): void;
        setStencilWrite(stencilWrite: any): void;
        setStencilFunc(stencilFunc: Function, stencilRef: any, stencilMask: number): void;
        setStencilOp(stencilFail: any, stencilZFail: any, stencilZPass: any): void;
        setFlipSided(flipSided: number): void;
        setCullFace(cullFace: CullFace): void;
        setLineWidth(width: number): void;
        setPolygonOffset(polygonoffset: number, factor: number, units: number): void;
        setScissorTest(scissorTest: boolean): void;
        getScissorTest(): boolean;
        activeTexture(webglSlot: any): void;
        bindTexture(webglType: any, webglTexture: any): void;
        compressedTexImage2D(): void;
        texImage2D(): void;
        clearColor(r: number, g: number, b: number, a: number): void;
        clearDepth(depth: number): void;
        clearStencil(stencil: any): void;
        scissor(scissor: any): void;
        viewport(viewport: any): void;
        reset(): void;
    }

    export class WebGLColorBuffer {
        constructor(gl: any, state: any);

        setMask(colorMask: number): void;
        setLocked(lock: boolean): void;
        setClear(r: number, g: number, b: number, a: number): void;
        reset(): void;
    }

    export class WebGLDepthBuffer {
        constructor(gl: any, state: any);

        setTest(depthTest: boolean): void;
        sertMask(depthMask: number): void;
        setFunc(depthFunc: Function): void;
        setLocked(lock: boolean): void;
        setClear(depth: any): void;
        reset(): void;
    }

    export class WebGLStencilBuffer {
        constructor(gl: any, state: any);

        setTest(stencilTest: boolean): void;
        sertMask(stencilMask: number): void;
        setFunc(stencilFunc: Function, stencilRef: any, stencilMask: number): void;
        setOp(stencilFail: any, stencilZFail: any, stencilZPass: any): void;
        setLocked(lock: boolean): void;
        setClear(stencil: any): void;
        reset(): void;
    }

    // Renderers / WebGL / Plugins /////////////////////////////////////////////////////////////////////
    export class LensFlarePlugin {
        constructor(renderer: WebGLRenderer, flares: any[]);
        
        render(scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number): void;
    }

    export class SpritePlugin {
        constructor(renderer: WebGLRenderer, sprites: any[]);

        render(scene: Scene, camera: Camera, viewportWidth: number, viewportHeight: number): void;
    }

    // Scenes /////////////////////////////////////////////////////////////////////
    
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
        background: any;

        copy(source: Scene, recursive?: boolean): Scene;
    }

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
        constructor(hex: number|string, density?: number);

        name: string;
        color: Color;

        /**
         * Defines how fast the fog will grow dense.
         * Default is 0.00025.
         */
        density: number;

        clone(): FogExp2;
    }

    // Textures /////////////////////////////////////////////////////////////////////
    export let TextureIdCount: number;

    export class Texture extends EventDispatcher {
        constructor(
            image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number,
            encoding?: TextureEncoding
            );

        id: number;
        uuid: string;
        name: string;
        sourceFile: string;
        image: any; // HTMLImageElement or ImageData or { width: number, height: number } in some children;
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
        encoding: TextureEncoding;
        version: number;
        needsUpdate: boolean;
        onUpdate: () => void;
        static DEFAULT_IMAGE: any;
        static DEFAULT_MAPPING: any;

        clone(): Texture;
        copy(source: Texture): Texture;
        toJSON(meta: any): any;
        dispose(): void;
        transformUv(uv: Vector): void;
    }

    export class DepthTexture extends Texture {
        constructor(
            width: number,
            heighht: number,
            type?: TextureDataType,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            anisotropy?: number
        );

        image: { width: number, height: number };
    }

    export class CanvasTexture extends Texture {
        constructor(
            canvas: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number
        );

        clone(): CanvasTexture;
        copy(source: CanvasTexture): CanvasTexture;
    }

    export class CubeTexture extends Texture {
        constructor(
            images?: any[], // HTMLImageElement or HTMLCanvasElement
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            format?: PixelFormat,
            type?: TextureDataType,
            anisotropy?: number,
            encoding?: TextureEncoding
        );

        images: any; // returns and sets the value of Texture.image in the codde ?

        copy(source: CubeTexture): CubeTexture;
    }

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
            anisotropy?: number,
            encoding?: TextureEncoding
        );

        image: { width: number; height: number; };

        clone(): CompressedTexture;
        copy(source: CompressedTexture): CompressedTexture;
    }

    export class DataTexture extends Texture {
        constructor(
            data: ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array,
            width: number,
            height: number,
            format: PixelFormat,
            type: TextureDataType,
            mapping: Mapping,
            wrapS: Wrapping,
            wrapT: Wrapping,
            magFilter: TextureFilter,
            minFilter: TextureFilter,
            anisotropy?: number,
            encoding?: TextureEncoding
        );

        image: { data: ImageData; width: number; height: number; };

        clone(): DataTexture;
        copy(source: DataTexture): DataTexture;
    }

    export class VideoTexture extends Texture {
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

        clone(): VideoTexture;
        copy(source: VideoTexture): VideoTexture;
    }

    // Extras /////////////////////////////////////////////////////////////////////
    export namespace CurveUtils {
        export function tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
        export function tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
        export function tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
        export function interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
    }

    export namespace ImageUtils { // deprecated
        export let crossOrigin: string;

        export function loadTexture(url: string, mapping?: Mapping, onLoad?: (texture: Texture) => void, onError?: (message: string) => void): Texture;
        export function loadTextureCube(array: string[], mapping?: Mapping, onLoad?: (texture: Texture) => void , onError?: (message: string) => void ): Texture;
    }

    export namespace SceneUtils {
        export function createMultiMaterialObject(geometry: Geometry, materials: Material[]): Object3D;
        export function detach(child: Object3D, parent: Object3D, scene: Scene): void;
        export function attach(child: Object3D, scene: Scene, parent: Object3D): void;
    }

    export namespace ShapeUtils {
        export function area(contour: number[]): number;
        export function triangulate(contour: number[], indices: boolean): number[];
        export function triangulateShape(contour: number[], holes: any[]): number[];
        export function isClockWise(pts: number[]): boolean;
        export function b2(t: number, p0: number, p1: number, p2: number): number;
        export function b3(t: number, p0: number, p1: number, p2: number, p3: number): number;
    }

    // Extras / Audio /////////////////////////////////////////////////////////////////////

    export class Audio extends Object3D {
        constructor(listener: AudioListener);

        type: string;
        context: AudioContext;
        source: AudioBufferSourceNode;
        gain: GainNode;
        autoplay: boolean;
        startTime: number;
        playbackRate: number;
        hasPlaybackControl: boolean;
        isPlaying: boolean;
        sourceType: string;
        filters: any[];

        getOutput(): GainNode;
        setNodeSource(audioNode: AudioBufferSourceNode): Audio;
        setBuffer(audioBuffer: AudioBuffer): Audio;
        play(): Audio;
        pause(): Audio;
        stop(): Audio;
        connect(): Audio;
        disconnect(): Audio;
        getFilters(): any[];
        setFilter(value: any[]): Audio;
        getFilter(): any;
        setFilter(filter: any): Audio;
        setPlaybackRate(value: number): Audio;
        getPlaybackRate(): number;
        onEnded(): void;
        getLoop(): boolean;
        setLoop(value: boolean): void;
        getVolume(): number;
        setVolume(value: number): Audio;
        load(file: string): Audio; // deprecated, use the AudioLoader class
    }

    export class AudioAnalyser {
        constructor(audio: any, fftSize: number);

        analyser: any;
        data: Uint8Array;

        getFrequencyData(): Uint8Array;
        getAverageFrequency(): number;

        // deprecated
        getData(file: any): any;
    }

    export const AudioContext: AudioContext;

    export class AudioBuffer {
        constructor(context: any);

        context: any;
        ready: boolean;
        readyCallbacks: Function[];

        load(file: string): AudioBuffer;
        onReady(callback: Function): void;
    }

    export class PositionalAudio extends Audio {
        constructor(listener: AudioListener);

        panner: PannerNode;

        setRefDistance(value: number): void;
        getRefDistance(): number;
        setRolloffFactor(value: number): void;
        getRolloffFactor(): number;
        setDistanceModel(value: number): void;
        getDistanceModel(): number;
        setMaxDistance(value: number): void;
        getMaxDistance(): number;
    }

    export class AudioListener extends Object3D {
        constructor();

        type: string;
        context: AudioContext;
        gain: GainNode;

        getInput(): GainNode;
        removeFilter(): void;
        setFilter(value: any): void;
        getFilter(): any;
        setMasterVolume(value: number): void;
        getMasterVolume(): number;
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

        static create(constructorFunc: Function, getPointFunc: Function): Function;
    }

    export class CurvePath<T extends Vector> extends Curve<T> {
        constructor();

        curves: Curve<T>[];
        autoClose: boolean;

        add(curve: Curve<T>): void;
        checkConnection(): boolean;
        closePath(): void;
        getPoint(t: number): T;
        getLength(): number;
        updateArcLengths(): void;
        getCurveLengths(): number[];
        getSpacedPoints(divisions?: number): T[];
        getPoints(divisions?: number): T[];
        createPointsGeometry(divisions: number): Geometry;
        createSpacedPointsGeometry(divisions: number): Geometry;
        createGeometry(points: T[]): Geometry;
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

        currentPoint: Vector2;

        fromPoints(vectors: Vector2[]): void;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Vector2[]): void;
        arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): void;
        ellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number): void;
        absellipse(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number): void;
    }

    export class ShapePath {
        constructor();

        subPaths: any[];
        currentPath: any;

        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): void;
        bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): void;
        splineThru(pts: Vector2[]): void;
        toShapes(isCCW: boolean, noHoles: any): Shape[];
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
        extractAllPoints(divisions: number): {
            shape: Vector2[];
            holes: Vector2[][];
        };
        extractPoints(divisions: number): Vector2[];
    }

    // Extras / Curves /////////////////////////////////////////////////////////////////////
    export class CatmullRomCurve3 extends Curve<Vector3> {
        constructor(points?: Vector3[]);

        points: Vector3[];

        getPoint(t: number): Vector3;
    }

    export class ClosedSplineCurve3 extends CatmullRomCurve3 {} // deprecated, use CatmullRomCurve3
    export class SplineCurve3 extends CatmullRomCurve3 {} // will be deprecated, use CatmullRomCurve3
        
    export class CubicBezierCurve extends Curve<Vector2> {
        constructor(v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2);

        v0: Vector2;
        v1: Vector2;
        v2: Vector2;
        v3: Vector2;
    }

    export class CubicBezierCurve3 extends Curve<Vector3> {
        constructor(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3);

        v0: Vector3;
        v1: Vector3;
        v2: Vector3;
        v3: Vector3;

        getPoint(t: number): Vector3;
    }
    
    export class EllipseCurve extends Curve<Vector2> {
        constructor(aX: number, aY: number, xRadius: number, yRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean, aRotation: number);

        aX: number;
        aY: number;
        xRadius: number;
        yRadius: number;
        aStartAngle: number;
        aEndAngle: number;
        aClockwise: boolean;
        aRotation: number;
    }
    export class ArcCurve extends EllipseCurve {
        constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean );
    }

    export class LineCurve extends Curve<Vector2> {
        constructor( v1: Vector2, v2: Vector2 );

        v1: Vector2;
        v2: Vector2;
    }

    export class LineCurve3 extends Curve<Vector3> {
        constructor(v1: Vector3, v2: Vector3);

        v1: Vector3;
        v2: Vector3;

        getPoint(t: number): Vector3;
    }
    
    export class QuadraticBezierCurve extends Curve<Vector2> {
        constructor( v0: Vector2, v1: Vector2, v2: Vector2 );

        v0: Vector2;
        v1: Vector2;
        v2: Vector2;
    }

    export class QuadraticBezierCurve3 extends Curve<Vector3> {
        constructor(v0: Vector3, v1: Vector3, v2: Vector3);

        v0: Vector3;
        v1: Vector3;
        v2: Vector3;

        getPoint(t: number): Vector3;
    }

    export class SplineCurve extends Curve<Vector2> {
        constructor(points?: Vector2[]);

        points: Vector2[];
    }
    

    // Extras / Geometries /////////////////////////////////////////////////////////////////////
    export class BoxBufferGeometry extends BufferGeometry {
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

        clone(): BoxGeometry;
    }

    export class CubeGeometry extends BoxGeometry {} // deprecated, use BoxGeometry

    export class CircleBufferGeometry extends BufferGeometry {
        constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);

        parameters: {
            radius: number;
            segments: number;
            thetaStart: number;
            thetaLength: number;
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

    export class CylinderBufferGeometry extends BufferGeometry {
        constructor(radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);

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

    export class ConeBufferGeometry extends BufferGeometry {
        constructor(radius?: number, height?: number, radialSegment?: number, heightSegment?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);
    }

    export class ConeGeometry extends CylinderGeometry {
        constructor(radius?: number, height?: number, radialSegment?: number, heightSegment?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);
    }

    export class DodecahedronGeometry extends Geometry {
        constructor(radius: number, detail: number);

        parameters: {
            radius: number;
            detail: number;
        };
    }

    export class EdgesGeometry extends BufferGeometry {
        constructor(geometry: BufferGeometry, thresholdAngle: number);

        clone(): EdgesGeometry;
    }

    export class ExtrudeGeometry extends Geometry {
        constructor(shape?: Shape, options?: any);
        constructor(shapes?: Shape[], options?: any);

        static WorldUVGenerator: {
            generateTopUV(geometry: Geometry, indexA: number, indexB: number, indexC: number): Vector2[];
            generateSideWallUV(geometry: Geometry, indexA: number, indexB: number, indexC: number, indexD: number): Vector2[];
        };

        addShapeList(shapes: Shape[], options?: any): void;
        addShape(shape: Shape, options?: any): void;
    }

    export class IcosahedronGeometry extends PolyhedronGeometry {
        constructor(radius: number, detail: number);
    }

    export class LatheBufferGeometry extends BufferGeometry {
        constructor(points: Vector3[], segments?: number, phiStart?: number, phiLength?: number);

        parameters: {
            points: Vector3[];
            segments: number;
            phiStart: number;
            phiLength: number;
        };
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
        boundingSphere: Sphere;
    }

    export class RingBufferGeometry extends BufferGeometry {
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

    export class SphereBufferGeometry extends BufferGeometry {
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
        font: Font;
        size: number;
        height: number;
        curveSegments: number;
        bevelEnabled: boolean;
        bevelThickness: number;
        bevelSize: number;
    }

    export class TextGeometry extends ExtrudeGeometry {
        constructor(text: string, parameters?: TextGeometryParameters);

        parameters: {
            font: Font;
            size: number;
            height: number;
            curveSegments: number;
            bevelEnabled: boolean;
            bevelThickness: number;
            bevelSize: number;
        }
    }

    export class TorusBufferGeometry extends BufferGeometry {
        constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);

        parameters: {
            radius: number;
            tube: number;
            radialSegments: number;
            tubularSegments: number;
            arc: number;
        };
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

    export class TorusKnotBufferGeometry extends BufferGeometry {
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

    export class WireframeGeometry extends BufferGeometry {
        constructor(geometry: Geometry | BufferGeometry);
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

    export class AxisHelper extends LineSegments {
        constructor(size?: number);
    }

    export class BoundingBoxHelper extends Mesh {
        constructor(object?: Object3D, hex?: number);

        object: Object3D;
        box: Box3;

        update(): void;
    }

    export class BoxHelper extends LineSegments {
        constructor(object?: Object3D, color?: Color);

        update(object?: Object3D): void;
    }

    export class CameraHelper extends LineSegments {
        constructor(camera: Camera);

        camera: Camera;
        pointMap: { [id: string]: number[]; };

        update(): void;
    }

    export class DirectionalLightHelper extends Object3D {
        constructor(light: Light, size?: number);

        light: Light;
        lightPlane: Line;

        dispose(): void;
        update(): void;
    }

    export class EdgesHelper extends LineSegments {
        constructor(object: Object3D, hex?: number, thresholdAngle?: number);
    }

    export class FaceNormalsHelper extends LineSegments {
        constructor(object: Object3D, size?: number, hex?: number, linewidth?: number);

        object: Object3D;
        size: number;

        update(object?: Object3D): void;
    }

    export class GridHelper extends LineSegments {
        constructor(size: number, divisions: number, color1?: Color|number, color2?: Color|number);

        setColors(color1?: Color|number, color2?: Color|number): void; // deprecated
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

    export class SkeletonHelper extends LineSegments {
        constructor(bone: Object3D);

        bones: Bone[];
        root: Object3D;

        getBoneList(object: Object3D): Bone[];
        update(): void;
    }

    export class SpotLightHelper extends Object3D {
        constructor(light: Light);

        light: Light;

        dispose(): void;
        update(): void;
    }

    export class VertexNormalsHelper extends LineSegments {
        constructor(object: Object3D, size?: number, hex?: number, linewidth?: number);

        object: Object3D;
        size: number;

        update(object?: Object3D): void;
    }

    export class WireframeHelper extends LineSegments {
        constructor(object: Object3D, hex?: number);
    }

    // Extras / Objects /////////////////////////////////////////////////////////////////////

    export class ImmediateRenderObject extends Object3D {
        constructor(material: Material);

        material: Material;
        render(renderCallback: Function): void;
    }

    export interface MorphBlendMeshAnimation {
        start: number;
        end: number;
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
    export = THREE;
}
