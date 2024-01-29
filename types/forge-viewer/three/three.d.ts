// minimal types for three.js (r71)
// Forge viewer is built on older version of three.js
// this package contains only types used by Forge viewer and may be incomplete

declare namespace THREE {
    const REVISION: string;

    enum MOUSE {}
    const LEFT: MOUSE;
    const MIDDLE: MOUSE;
    const RIGHT: MOUSE;

    // GL STATE CONSTANTS
    enum CullFace {}
    const CullFaceNone: CullFace;
    const CullFaceBack: CullFace;
    const CullFaceFront: CullFace;
    const CullFaceFrontBack: CullFace;

    enum FrontFaceDirection {}
    const FrontFaceDirectionCW: FrontFaceDirection;
    const FrontFaceDirectionCCW: FrontFaceDirection;

    // Shadowing Type
    enum ShadowMapType {}
    const BasicShadowMap: ShadowMapType;
    const PCFShadowMap: ShadowMapType;
    const PCFSoftShadowMap: ShadowMapType;

    // side
    enum Side {}
    const FrontSide: Side;
    const BackSide: Side;
    const DoubleSide: Side;

    // shading
    enum Shading {}
    const FlatShading: Shading;
    const SmoothShading: Shading;

    // colors
    enum Colors {}
    const NoColors: Colors;
    const FaceColors: Colors;
    const VertexColors: Colors;

    // blending modes
    enum Blending {}
    const NoBlending: Blending;
    const NormalBlending: Blending;
    const AdditiveBlending: Blending;
    const SubtractiveBlending: Blending;
    const MultiplyBlending: Blending;
    const CustomBlending: Blending;

    // custom blending equations
    // (numbers start from 100 not to clash with other
    //  mappings to OpenGL constants defined in Texture.js)
    enum BlendingEquation {}
    const AddEquation: BlendingEquation;
    const SubtractEquation: BlendingEquation;
    const ReverseSubtractEquation: BlendingEquation;
    const MinEquation: BlendingEquation;
    const MaxEquation: BlendingEquation;

    // custom blending destination factors
    enum BlendingDstFactor {}
    const ZeroFactor: BlendingDstFactor;
    const OneFactor: BlendingDstFactor;
    const SrcColorFactor: BlendingDstFactor;
    const OneMinusSrcColorFactor: BlendingDstFactor;
    const SrcAlphaFactor: BlendingDstFactor;
    const OneMinusSrcAlphaFactor: BlendingDstFactor;
    const DstAlphaFactor: BlendingDstFactor;
    const OneMinusDstAlphaFactor: BlendingDstFactor;

    // custom blending src factors
    enum BlendingSrcFactor {}
    const DstColorFactor: BlendingSrcFactor;
    const OneMinusDstColorFactor: BlendingSrcFactor;
    const SrcAlphaSaturateFactor: BlendingSrcFactor;

    // depth modes
    enum DepthModes {}
    const NeverDepth: DepthModes;
    const AlwaysDepth: DepthModes;
    const LessDepth: DepthModes;
    const LessEqualDepth: DepthModes;
    const EqualDepth: DepthModes;
    const GreaterEqualDepth: DepthModes;
    const GreaterDepth: DepthModes;
    const NotEqualDepth: DepthModes;

    // TEXTURE CONSTANTS
    // Operations
    enum Combine {}
    const MultiplyOperation: Combine;
    const MixOperation: Combine;
    const AddOperation: Combine;

    // Tone Mapping modes
    enum ToneMapping {}
    const NoToneMapping: ToneMapping;
    const LinearToneMapping: ToneMapping;
    const ReinhardToneMapping: ToneMapping;
    const Uncharted2ToneMapping: ToneMapping;
    const CineonToneMapping: ToneMapping;

    // Mapping modes
    enum Mapping {}
    const UVMapping: Mapping;
    const CubeReflectionMapping: Mapping;
    const CubeRefractionMapping: Mapping;
    const EquirectangularReflectionMapping: Mapping;
    const EquirectangularRefractionMapping: Mapping;
    const SphericalReflectionMapping: Mapping;

    // Wrapping modes
    enum Wrapping {}
    const RepeatWrapping: Wrapping;
    const ClampToEdgeWrapping: Wrapping;
    const MirroredRepeatWrapping: Wrapping;

    // Filters
    enum TextureFilter {}
    const NearestFilter: TextureFilter;
    const NearestMipMapNearestFilter: TextureFilter;
    const NearestMipMapLinearFilter: TextureFilter;
    const LinearFilter: TextureFilter;
    const LinearMipMapNearestFilter: TextureFilter;
    const LinearMipMapLinearFilter: TextureFilter;

    enum InterpolationModes {}
    const InterpolateDiscrete: InterpolationModes;
    const InterpolateLinear: InterpolationModes;
    const InterpolateSmooth: InterpolationModes;

    // Interpolant ending modes
    enum InterpolationEndingModes {}
    const ZeroCurvatureEnding: InterpolationEndingModes;
    const ZeroSlopeEnding: InterpolationEndingModes;
    const WrapAroundEnding: InterpolationEndingModes;

    // Triangle Draw modes
    enum TrianglesDrawModes {}
    const TrianglesDrawModesMode: TrianglesDrawModes;
    const TriangleStripDrawMode: TrianglesDrawModes;
    const TriangleFanDrawMode: TrianglesDrawModes;

    // Texture Encodings
    enum TextureEncoding {}
    const LinearEncoding: TextureEncoding;
    const sRGBEncoding: TextureEncoding;
    const GammaEncoding: TextureEncoding;
    const RGBEEncoding: TextureEncoding;
    const LogLuvEncoding: TextureEncoding;
    const RGBM7Encoding: TextureEncoding;
    const RGBM16Encoding: TextureEncoding;
    const RGBDEncoding: TextureEncoding;

    // Data types
    enum TextureDataType {}
    const UnsignedByteType: TextureDataType;
    const ByteType: TextureDataType;
    const ShortType: TextureDataType;
    const UnsignedShortType: TextureDataType;
    const IntType: TextureDataType;
    const UnsignedIntType: TextureDataType;
    const FloatType: TextureDataType;
    const HalfFloatType: TextureDataType;

    // Pixel types
    enum PixelType {}
    const UnsignedShort4444Type: PixelType;
    const UnsignedShort5551Type: PixelType;
    const UnsignedShort565Type: PixelType;

    // Pixel formats
    enum PixelFormat {}
    const AlphaFormat: PixelFormat;
    const RGBFormat: PixelFormat;
    const RGBAFormat: PixelFormat;
    const LuminanceFormat: PixelFormat;
    const LuminanceAlphaFormat: PixelFormat;
    const RGBEFormat: PixelFormat;

    // Compressed texture formats
    // DDS / ST3C Compressed texture formats
    enum CompressedPixelFormat {}
    const RGB_S3TC_DXT1_Format: CompressedPixelFormat;
    const RGBA_S3TC_DXT1_Format: CompressedPixelFormat;
    const RGBA_S3TC_DXT3_Format: CompressedPixelFormat;
    const RGBA_S3TC_DXT5_Format: CompressedPixelFormat;

    // PVRTC compressed texture formats
    const RGB_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    const RGB_PVRTC_2BPPV1_Format: CompressedPixelFormat;
    const RGBA_PVRTC_4BPPV1_Format: CompressedPixelFormat;
    const RGBA_PVRTC_2BPPV1_Format: CompressedPixelFormat;

    class AmbientLight extends Light {
        castShadow: boolean;

        constructor(hex?: number | string, intensity?: number);

        clone(recursive?: boolean): AmbientLight;
        copy(source: AmbientLight): AmbientLight;
    }

    class AnimationClip {
        duration: number;
        name: string;
        results: any[];
        tracks: KeyframeTrack[];
        uuid: string;

        constructor(name?: string, duration?: number, tracks?: KeyframeTrack[]);
        optimize(): AnimationClip;
        resetDuration(): void;
        trim(): AnimationClip;

        static CreateClipsFromMorphTargetSequences(
            morphTargets: MorphTarget[],
            fps: number,
            noLoop: boolean,
        ): AnimationClip[];
        static CreateFromMorphTargetSequence(
            name: string,
            morphTargetSequence: MorphTarget[],
            fps: number,
            noLoop: boolean,
        ): AnimationClip;
        static findByName(clipArray: AnimationClip, name: string): AnimationClip;
        static parse(json: any): AnimationClip;
        static parseAnimation(animation: any, bones: Bone[], nodeName: string): AnimationClip;
        static toJSON(): any;
    }

    class Bone extends Object3D {
        skin: SkinnedMesh;

        constructor(skin: SkinnedMesh);

        clone(): Bone;
        copy(source: Bone): Bone;
    }

    class Box2 {
        min: Vector2;
        max: Vector2;

        constructor(min?: Vector2, max?: Vector2);

        center(optionalTarget?: Vector2): Vector2;
        clampPoint(point: Vector2, optionalTarget?: Vector2): Vector2;
        clone(): Box2;
        containsBox(box: Box2): boolean;
        containsPoint(point: Vector2): boolean;
        copy(box: Box2): Box2;
        distanceToPoint(point: Vector2): number;
        empty(): boolean;
        equals(box: Box2): boolean;
        expandByPoint(point: Vector2): Box2;
        expandByScalar(scalar: number): Box2;
        expandByVector(vector: Vector2): Box2;
        getParameter(point: Vector2): Vector2;
        getSize(optionalTarget?: Vector2): Vector2;
        intersect(box: Box2): Box2;
        isIntersectionBox(box: Box2): boolean;
        makeEmpty(): Box2;
        set(min: Vector2, max: Vector2): Box2;
        setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
        setFromPoints(points: Vector2[]): Box2;
        size(optionalTarget?: Vector2): Vector2;
        translate(offset: Vector2): Box2;
        union(box: Box2): Box2;
    }

    class Box3 {
        min: Vector3;
        max: Vector3;

        constructor(min?: Vector3, max?: Vector3);

        applyMatrix4(matrix: Matrix4): Box3;
        // deprecated
        center(): Vector3;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        clone(): Box3;
        containsBox(box: Box3): boolean;
        containsPoint(point: Vector3): boolean;
        copy(box: Box3): Box3;
        distanceToPoint(point: Vector3): number;
        // deprecated
        empty(): boolean;
        equals(box: Box3): boolean;
        expandByPoint(point: Vector3): Box3;
        expandByScalar(scalar: number): Box3;
        expandByVector(vector: Vector3): Box3;
        getBoundingSphere(optionalTarget?: Sphere): Sphere;
        getCenter(optionalTarget?: Vector3): Vector3;
        getParameter(point: Vector3): Vector3;
        getSize(optionalTarget?: Vector3): Vector3;
        intersect(box: Box3): Box3;
        intersectsBox(box: Box3): true;
        isEmpty(): boolean;
        isIntersectionBox(box: Box3): boolean;
        makeEmpty(): Box3;
        set(min: Vector3, max: Vector3): Box3;
        setFromCenterAndSize(center: Vector3, size: Vector3): Box3;
        setFromObject(object: Object3D): Box3;
        setFromPoints(points: Vector3[]): Box3;
        size(optionalTarget?: Vector3): Vector3;
        translate(offset: Vector3): Box3;
        union(box: Box3): Box3;
    }

    class BoxGeometry extends Geometry {
        parameters: {
            width: number;
            height: number;
            depth: number;
            widthSegments: number;
            heightSegments: number;
            depthSegments: number;
        };

        constructor(
            width: number,
            height: number,
            depth: number,
            widthSegments?: number,
            heightSegments?: number,
            depthSegments?: number,
        );

        clone(): BoxGeometry;
    }

    class BufferAttribute {
        array: number[];
        itemSize: number;
        length: number;
        needsUpdate: boolean;

        constructor(array: any, itemSize: number);

        clone(): BufferAttribute;
        copyAt(index1: number, attribute: BufferAttribute, index2: number): void;
        set(value: number, offset?: number): BufferAttribute;
        setX(index: number, x: number): BufferAttribute;
        setY(index: number, y: number): BufferAttribute;
        setZ(index: number, z: number): BufferAttribute;
        setXY(index: number, x: number, y: number): BufferAttribute;
        setXYZ(index: number, x: number, y: number, z: number): BufferAttribute;
        setXYZW(index: number, x: number, y: number, z: number, w: number): BufferAttribute;
    }

    class BufferGeometry {
        attributes: BufferAttribute | InterleavedBufferAttribute[];
        boundingBox: Box3;
        boundingSphere: Sphere;
        drawRange: { start: number; count: number };
        groups: Array<{ start: number; count: number; materialIndex?: number | undefined }>;
        id: number;
        index: BufferAttribute;
        morphAttributes: any;
        name: string;
        type: string;
        uuid: string;
        // deprecated
        drawcalls: any;
        offsets: any;

        static MaxIndex: number;

        constructor();

        addAttribute(name: string, attribute: BufferAttribute): any;
        addAttribute(name: string, attribute: BufferAttribute | InterleavedBufferAttribute): BufferGeometry;
        addAttribute(name: any, array: any, itemSize: any): any;
        addDrawCall(start: any, count: any, indexOffset?: any): void;
        addGroup(start: number, count: number, materialIndex?: number): void;
        addIndex(index: any): void;
        applyMatrix(matrix: Matrix4): BufferGeometry;
        center(): Vector3;
        clearDrawCalls(): void;
        clearGroups(): void;
        clone(): BufferGeometry;
        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        computeVertexNormals(): void;
        copy(source: BufferGeometry): BufferGeometry;
        dispose(): void;
        fromDirectGeometry(geometry: DirectGeometry): BufferGeometry;
        fromGeometry(geometry: Geometry, settings?: any): BufferGeometry;
        getAttribute(name: string): BufferAttribute | InterleavedBufferAttribute;
        getIndex(): BufferAttribute;
        lookAt(v: Vector3): void;
        merge(geometry: BufferGeometry, offset: number): BufferGeometry;
        normalizeNormals(): void;
        removeAttribute(name: string): BufferGeometry;
        rotateX(angle: number): BufferGeometry;
        rotateY(angle: number): BufferGeometry;
        rotateZ(angle: number): BufferGeometry;
        scale(x: number, y: number, z: number): BufferGeometry;
        setDrawRange(start: number, count: number): void;
        setFromObject(object: Object3D): void;
        setIndex(index: BufferAttribute): void;
        toJSON(): any;
        toNonIndexed(): BufferGeometry;
        translate(x: number, y: number, z: number): BufferGeometry;
        updateFromObject(object: Object3D): void;
    }

    class Camera extends Object3D {
        matrixWorldInverse: Matrix4;
        projectionMatrix: Matrix4;

        constructor();

        clone(recursive?: boolean): Object3D;
        clone(recursive?: boolean): Object3D;
        getWorldDirection(optionalTarget?: Vector3): Vector3;
        lookAt(vector: Vector3): void;
    }

    class CatmullRomCurve3 extends Curve<Vector3> {
        points: Vector3[];

        constructor(points?: Vector3[]);

        getPoint(t: number): Vector3;
    }

    /**
     * @deprecated Use CatmullRomCurve3
     */
    class ClosedSplineCurve3 extends CatmullRomCurve3 {
    }

    class Color {
        r: number;
        g: number;
        b: number;

        constructor(color?: Color | string | number);
        constructor(r: number, g: number, b: number);

        clone(): Color;
        copy(color: Color): Color;
        set(color: Color | string | number): Color;
        setHex(hex: number): Color;
        setHSL(h: number, s: number, l: number): Color;
        setRGB(r: number, g: number, b: number): Color;
        setStyle(style: string): Color;
        getHexString(): string;
        equals(color: Color): boolean;
    }

    class CylinderBufferGeometry extends BufferGeometry {
        parameters: {
            height: number;
            heightSegments: number;
            openEnded: boolean;
            radialSegments: number;
            radiusBottom: number;
            radiusTop: number;
            thetaLength: number;
            thetaStart: number;
        };

        constructor(
            radiusTop?: number,
            radiusBottom?: number,
            height?: number,
            radialSegments?: number,
            heightSegments?: number,
            openEnded?: boolean,
            thetaStart?: number,
            thetaLength?: number,
        );
    }

    class CylinderGeometry extends Geometry {
        parameters: {
            height: number;
            heightSegments: number;
            openEnded: boolean;
            radialSegments: number;
            radiusBottom: number;
            radiusTop: number;
            thetaLength: number;
            thetaStart: number;
        };

        constructor(
            radiusTop?: number,
            radiusBottom?: number,
            height?: number,
            radiusSegments?: number,
            heightSegments?: number,
            openEnded?: boolean,
            thetaStart?: number,
            thetaLength?: number,
        );
    }

    class CubicInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class Curve<T extends Vector> {
        getLength(): number;
        getLengths(divisions?: number): number[];
        getPoint(t: number): T;
        getPointAt(u: number): T;
        getPoints(divisions?: number): T[];
        getSpacedPoints(divisions?: number): T[];
        getTangent(t: number): T;
        getTangentAt(u: number): T;
        getUtoTmapping(u: number, distance: number): number;
        updateArcLengths(): void;

        static create(constructorFunc: any, getPointFunc: any): any;
    }

    class DataTexture extends Texture {
        image: { data: ImageData; width: number; height: number };

        constructor(
            data:
                | ArrayBuffer
                | Int8Array
                | Uint8Array
                | Uint8ClampedArray
                | Int16Array
                | Uint16Array
                | Int32Array
                | Uint32Array
                | Float32Array
                | Float64Array,
            width: number,
            height: number,
            format: PixelFormat,
            type?: TextureDataType,
            mapping?: Mapping,
            wrapS?: Wrapping,
            wrapT?: Wrapping,
            magFilter?: TextureFilter,
            minFilter?: TextureFilter,
            anisotropy?: number,
            encoding?: TextureEncoding,
        );

        clone(): DataTexture;
        copy(source: DataTexture): DataTexture;
    }

    class DirectGeometry {
        boundingBox: Box3;
        boundingSphere: Sphere;
        colors: Color[];
        colorsNeedUpdate: boolean;
        groups: Array<{ start: number; materialIndex: number }>;
        groupsNeedUpdate: boolean;
        id: number;
        indices: number[];
        morphTargets: MorphTarget[];
        name: string;
        normals: Vector3[];
        normalsNeedUpdate: boolean;
        skinIndices: number[];
        skinWeights: number[];
        type: string;
        uuid: string;
        uvs: Vector2[];
        uvs2: Vector2[];
        uvsNeedUpdate: boolean;
        vertices: Vector3[];
        verticesNeedUpdate: boolean;

        constructor();

        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        computeGroups(geometry: Geometry): void;
        dispose(): void;
        fromGeometry(geometry: Geometry): DirectGeometry;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: Event) => void): void;
        dispatchEvent(event: { type: string; [attachment: string]: any }): void;
        hasEventListener(type: string, listener: (event: Event) => void): void;
        removeEventListener(type: string, listener: (event: Event) => void): void;
    }

    class DirectionalLight extends Light {
        intensity: number;
        shadow: LightShadow;
        target: Object3D;

        constructor(hex?: number | string, intensity?: number);

        clone(recursive?: boolean): HemisphereLight;
        copy(source: DirectionalLight): DirectionalLight;
    }

    class DirectionalLightShadow extends LightShadow {
    }

    class DiscreteInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class Euler {
        x: number;
        y: number;
        z: number;
        order: string;

        constructor(x?: number, y?: number, z?: number, order?: string);

        setFromQuaternion(q: Quaternion, order?: string, update?: boolean): Euler;
    }

    class ExtrudeGeometry extends Geometry {
        constructor(shapes?: Shape | Shape[], options?: any);

        WorldUVGenerator: {
            generateSideWallUV(
                geometry: Geometry,
                indexA: number,
                indexB: number,
                indexC: number,
                indexD: number,
            ): Vector2[];
            generateTopUV(geometry: Geometry, indexA: number, indexB: number, indexC: number): Vector2[];
        };

        addShape(shape: Shape, options?: any): void;
        addShapeList(shapes: Shape[], options?: any): void;
    }

    class Face3 {
        a: number;
        b: number;
        c: number;
        color: Color;
        materialIndex: number;
        normal: Vector3;
        vertexColors: Color[];
        vertexNormals: Vector3[];
        vertexTangents: number[];

        constructor(
            a: number,
            b: number,
            c: number,
            normal?: Vector3 | Vector3[],
            color?: Color | Color[],
            materialIndex?: number,
        );

        clone(): Face3;
    }

    interface Fog {
        color: Color;
        name: string;

        clone(): Fog;
    }

    class Fog implements Fog {
        color: Color;
        far: number;
        name: string;
        near: number;

        constructor(hex: number, near?: number, far?: number);

        clone(): Fog;
    }

    class Geometry {
        boundingBox: Box3;
        boundingSphere: Sphere;
        colors: Color[];
        colorsNeedUpdate: boolean;
        elementsNeedUpdate: boolean;
        faces: Face3[];
        faceVertexUvs: Vector2[][][];
        groupsNeedUpdate: boolean;
        id: number;
        lineDistances: number[];
        lineDistancesNeedUpdate: boolean;
        morphTargets: MorphTarget[];
        morphNormals: MorphNormals[];
        name: string;
        normalsNeedUpdate: boolean;
        skinIndices: Vector4[];
        skinWeights: Vector4[];
        type: string;
        uuid: string;
        uvsNeedUpdate: boolean;
        vertices: Vector3[];
        verticesNeedUpdate: boolean;
        // These properties do not exist in a normal Geometry class, but if you use the instance that was passed by JSONLoader, it will be added.
        animation: AnimationClip;
        animations: AnimationClip[];
        bones: Bone[];

        constructor();

        applyMatrix(matrix: Matrix4): Geometry;
        center(): Vector3;
        clone(): Geometry;
        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        computeFaceNormals(): void;
        computeLineDistances(): void;
        computeMorphNormals(): void;
        computeVertexNormals(areaWeighted?: boolean): void;
        copy(source: Geometry): Geometry;
        dispose(): void;
        fromBufferGeometry(geometry: BufferGeometry): Geometry;
        lookAt(vector: Vector3): void;
        merge(geometry: Geometry, matrix: Matrix, materialIndexOffset?: number): void;
        mergeMesh(mesh: Mesh): void;
        mergeVertices(): number;
        normalize(): Geometry;
        rotateX(angle: number): Geometry;
        rotateY(angle: number): Geometry;
        rotateZ(angle: number): Geometry;
        scale(x: number, y: number, z: number): Geometry;
        sortFacesByMaterialIndex(): void;
        toJSON(): any;
        translate(x: number, y: number, z: number): Geometry;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: Event) => void): void;
        dispatchEvent(event: { type: string; [attachment: string]: any }): void;
        hasEventListener(type: string, listener: (event: Event) => void): void;
        removeEventListener(type: string, listener: (event: Event) => void): void;
    }

    class Group extends Object3D {
        constructor();
    }

    class HemisphereLight extends Light {
        groundColor: Color;
        intensity: number;

        constructor(skyColorHex?: number | string, groundColorHex?: number | string, intensity?: number);

        clone(recursive?: boolean): HemisphereLight;
        copy(source: HemisphereLight): HemisphereLight;
    }

    class ImageLoader {
        crossOrigin: string;
        manager: LoadingManager;
        path: string;

        constructor(manager?: LoadingManager);

        load(
            url: string,
            onLoad?: (image: HTMLImageElement) => void,
            onProgress?: (event: any) => void,
            onError?: (event: any) => void,
        ): HTMLImageElement;
        setCrossOrigin(crossOrigin: string): ImageLoader;
        setPath(value: any): ImageLoader;
    }

    class InstancedInterleavedBuffer extends InterleavedBuffer {
        meshPerAttribute: number;

        constructor(array: ArrayLike<number>, stride: number, meshPerAttribute?: number);

        clone(): InstancedInterleavedBuffer;
        copy(source: InstancedInterleavedBuffer): InstancedInterleavedBuffer;
    }

    class InterleavedBuffer {
        array: ArrayLike<number>;
        count: number;
        dynamic: boolean;
        length: number;
        needsUpdate: boolean;
        stride: number;
        updateRange: { offset: number; count: number };
        version: number;

        constructor(array: ArrayLike<number>, stride: number);

        clone(): InterleavedBuffer;
        copy(source: InterleavedBuffer): InterleavedBuffer;
        copyAt(index1: number, attribute: InterleavedBufferAttribute, index2: number): InterleavedBuffer;
        set(value: ArrayLike<number>, index: number): InterleavedBuffer;
        setDynamic(dynamic: boolean): InterleavedBuffer;
    }

    class InterleavedBufferAttribute {
        array: any[];
        count: number;
        data: InterleavedBuffer;
        itemSize: number;
        length: number; // deprecated, use count instead
        normalized: boolean;
        offset: number;
        uuid: string;

        constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized: boolean);

        getX(index: number): number;
        getY(index: number): number;
        getZ(index: number): number;
        getW(index: number): number;
        setX(index: number, x: number): InterleavedBufferAttribute;
        setXY(index: number, x: number, y: number): InterleavedBufferAttribute;
        setXYZ(index: number, x: number, y: number, z: number): InterleavedBufferAttribute;
        setXYZW(index: number, x: number, y: number, z: number, w: number): InterleavedBufferAttribute;
        setY(index: number, y: number): InterleavedBufferAttribute;
        setZ(index: number, z: number): InterleavedBufferAttribute;
        setW(index: number, z: number): InterleavedBufferAttribute;
    }

    abstract class Interpolant {
        parameterPositions: any;
        resultBuffer: any;
        samplesValues: any;
        valueSize: number;

        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        evaluate(time: number): any;
    }

    interface Intersection {
        distance: number;
        distanceToRay: number;
        face: Face3;
        faceIndex: number;
        index: number;
        object: Object3D;
        point: Vector3;
    }

    class KeyframeTrack {
        name: string;
        times: any[];
        values: any[];

        ValueTypeName: string;
        TimeBufferType: Float32Array;
        ValueBufferType: Float32Array;

        DefaultInterpolation: InterpolationModes;

        constructor(name: string, times: any[], values: any[], interpolation: InterpolationModes);

        InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
        InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
        InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;

        getInterpolation(): InterpolationModes;
        getValuesize(): number;
        optimize(): KeyframeTrack;
        scale(timeScale: number): KeyframeTrack;
        setInterpolation(interpolation: InterpolationModes): void;
        shift(timeOffset: number): KeyframeTrack;
        trim(startTime: number, endTime: number): KeyframeTrack;
        validate(): boolean;

        static parse(json: any): KeyframeTrack;
        static toJSON(track: KeyframeTrack): any;
    }

    class Light extends Object3D {
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

        constructor(hex?: number | string, intensity?: number);

        clone(recursive?: boolean): Light;
        copy(source: Light): Light;
    }

    class LightShadow {
        bias: number;
        camera: Camera;
        map: any;
        mapSize: Vector2;
        matrix: Matrix4;
        radius: number;

        constructor(camera: Camera);

        clone(recursive?: boolean): LightShadow;
        copy(source: LightShadow): LightShadow;
    }

    class Line extends Object3D {
        geometry: Geometry | BufferGeometry;
        material: Material; // LineDashedMaterial or LineBasicMaterial or ShaderMaterial

        constructor(
            geometry?: Geometry | BufferGeometry,
            material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial,
            mode?: number,
        );

        clone(): Line;
        copy(source: Line): Line;
        raycast(raycaster: Raycaster, intersects: any): void;
    }

    class Line3 {
    }

    class LineBasicMaterial extends Material {
        color: Color;
        linecap: string;
        linejoin: string;
        linewidth: number;

        constructor(parameters?: LineBasicMaterialParameters);

        clone(): LineBasicMaterial;
        copy(source: LineBasicMaterial): LineBasicMaterial;
        setValues(parameters: LineBasicMaterialParameters): void;
    }

    interface LineBasicMaterialParameters extends MaterialParameters {
        color?: number | string | Color | undefined;
        linecap?: string | undefined;
        linejoin?: string | undefined;
        linewidth?: number | undefined;
    }

    class LineDashedMaterial extends Material {
        color: Color;
        dashSize: number;
        gapSize: number;
        linewidth: number;
        scale: number;

        constructor(parameters?: LineDashedMaterialParameters);

        clone(): LineDashedMaterial;
        copy(source: LineDashedMaterial): LineDashedMaterial;
        setValues(parameters: LineDashedMaterialParameters): void;
    }

    interface LineDashedMaterialParameters extends MaterialParameters {
        color?: number | string | Color | undefined;
        dashSize?: number | undefined;
        gapSize?: number | undefined;
        linewidth?: number | undefined;
        scale?: number | undefined;
    }

    class LineSegments extends Line {
        constructor(
            geometry?: Geometry | BufferGeometry,
            material?: LineDashedMaterial | LineBasicMaterial | ShaderMaterial,
            mode?: number,
        );

        clone(): LineSegments;
        copy(source: LineSegments): LineSegments;
    }

    class LinearInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class Loader {
        crossOrigin: string;

        constructor();

        createMaterial(m: Material, texturePath: string, crossOrigin?: string): boolean;
        extractUrlBase(url: string): string;
        initMaterials(materials: Material[], texturePath: string): Material[];
        onLoadComplete: () => void;
        onLoadProgress: () => void;
        onLoadStart: () => void;

        static Handlers: LoaderHandler;
    }

    interface LoaderHandler {
        handlers: Array<RegExp | Loader>;

        add(regex: RegExp, loader: Loader): void;
        get(file: string): Loader;
    }

    class LoadingManager {
        constructor(
            onLoad?: () => void,
            onProgress?: (url: string, loaded: number, total: number) => void,
            onError?: () => void,
        );

        itemEnd(url: string): void;
        itemError(url: string): void;
        itemStart(url: string): void;
        onError: () => void;
        onLoad: () => void;
        onProgress: (item: any, loaded: number, total: number) => void;
        onStart: () => void;
    }

    namespace Math {
        function degToRad(degree: number): number;
        function radToDeg(radians: number): number;
    }

    class Material {
        id: number;
        uuid: string;
        name: string;
        type: string;
        side: Side;
        opacity: number;
        blending: Blending;
        blendSrc: BlendingDstFactor;
        blendDst: BlendingSrcFactor;
        blendEquation: BlendingEquation;
        blendSrcAlpha: number;
        blendDstAlpha: number;
        blendEquationAlpha: number;
        depthTest: boolean;
        depthWrite: boolean;
        colorWrite: boolean;
        polygonOffset: boolean;
        polygonOffsetFactor: number;
        polygonOffsetUnits: number;
        alphaTest: number;
        overdraw: number;
        visible: boolean;
        needsUpdate: boolean;

        constructor();

        clone(material?: Material): Material;
        copy(source: Material): Material;
        dispose(): void;
        dispose(): void;
        setValues(parameters: MaterialParameters): void;
        toJSON(meta?: any): any;
        update(): void;
        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any }): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
    }

    interface MaterialParameters {
        alphaTest?: number | undefined;
        blending?: Blending | undefined;
        blendEquation?: BlendingEquation | undefined;
        blendSrc?: BlendingDstFactor | undefined;
        blendDst?: BlendingSrcFactor | undefined;
        blendSrcAlpha?: number | undefined;
        blendDstAlpha?: number | undefined;
        blendEquationAlpha?: number | undefined;
        colorWrite?: boolean | undefined;
        depthFunc?: DepthModes | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        lights?: boolean | undefined;
        name?: string | undefined;
        opacity?: number | undefined;
        overdraw?: number | undefined;
        precision?: number | undefined;
        polygonOffset?: boolean | undefined;
        polygonOffsetFactor?: number | undefined;
        polygonOffsetUnits?: number | undefined;
        premultipliedAlpha?: boolean | undefined;
        shading?: Shading | undefined;
        side?: Side | undefined;
        transparent?: boolean | undefined;
        vertexColors?: Colors | undefined;
        visible?: boolean | undefined;
    }

    interface Matrix {
        elements: Float32Array;

        clone(): Matrix;
        copy(m: Matrix): Matrix;
        determinant(): number;
        getInverse(matrix: Matrix, throwOnInvertible?: boolean): Matrix;
        identity(): Matrix;
        multiplyScalar(s: number): Matrix;
        transpose(): Matrix;
    }

    class Matrix3 implements Matrix {
        elements: Float32Array;

        constructor(
            n11?: number,
            n12?: number,
            n13?: number,
            n21?: number,
            n22?: number,
            n23?: number,
            n31?: number,
            n32?: number,
            n33?: number,
        );

        applyToVector3Array(array: number[], offset?: number, length?: number): number[];
        clone(): Matrix3;
        copy(m: Matrix3): Matrix3;
        determinant(): number;
        flattenToArrayOffset(array: number[], offset: number): number[];
        fromArray(array: number[]): Matrix3;
        getInverse(matrix: Matrix3 | Matrix4, throwOnInvertible?: boolean): Matrix3;
        getNormalMatrix(m: Matrix4): Matrix3;
        identity(): Matrix3;
        multiplyScalar(s: number): Matrix3;
        set(
            n11: number,
            n12: number,
            n13: number,
            n21: number,
            n22: number,
            n23: number,
            n31: number,
            n32: number,
            n33: number,
        ): Matrix3;
        toArray(): number[];
        transpose(): Matrix3;
        transposeIntoArray(r: number[]): number[];
    }

    class Matrix4 {
        elements: Float32Array;

        constructor(
            n11?: number,
            n12?: number,
            n13?: number,
            n14?: number,
            n21?: number,
            n22?: number,
            n23?: number,
            n24?: number,
            n31?: number,
            n32?: number,
            n33?: number,
            n34?: number,
            n41?: number,
            n42?: number,
            n43?: number,
            n44?: number,
        );

        applyToVector3Array(array: number[], offset?: number, length?: number): number[];
        clone(): Matrix4;
        compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;
        copy(m: Matrix4): Matrix4;
        copyPosition(m: Matrix4): Matrix4;
        decompose(translation?: Vector3, rotation?: Quaternion, scale?: Vector3): object[];
        determinant(): number;
        extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
        extractRotation(m: Matrix4): Matrix4;
        flattenToArrayOffset(array: number[], offset: number): number[];
        getInverse(m: Matrix4, throwOnInvertible?: boolean): Matrix4;
        getMaxScaleOnAxis(): number;
        identity(): Matrix4;
        invert(): Matrix4;
        lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;
        makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
        makeRotationAxis(axis: Vector3, angle: number): Matrix4;
        makeRotationFromEuler(euler: Euler): Matrix4;
        makeRotationFromQuaternion(q: Quaternion): Matrix4;
        makeRotationX(theta: number): Matrix4;
        makeRotationY(theta: number): Matrix4;
        makeRotationZ(theta: number): Matrix4;
        makeScale(x: number, y: number, z: number): Matrix4;
        makeTranslation(x: number, y: number, z: number): Matrix4;
        multiply(m: Matrix4): Matrix4;
        multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;
        multiplyScalar(s: number): Matrix4;
        multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;
        scale(v: Vector3): Matrix4;
        set(
            n11: number,
            n12: number,
            n13: number,
            n14: number,
            n21: number,
            n22: number,
            n23: number,
            n24: number,
            n31: number,
            n32: number,
            n33: number,
            n34: number,
            n41: number,
            n42: number,
            n43: number,
            n44: number,
        ): Matrix4;
        setPosition(v: Vector3): Matrix4;
        transpose(): Matrix4;
    }

    class Mesh extends Object3D {
        drawMode: TrianglesDrawModes;
        geometry: Geometry | BufferGeometry;
        material: Material;
        dbId?: number;

        constructor(geometry?: Geometry | BufferGeometry, material?: Material);

        clone(): Mesh;
        copy(source: Mesh): Mesh;
        getMorphTargetIndexByName(name: string): number;
        raycast(raycaster: Raycaster, intersects: any): void;
        setDrawMode(drawMode: TrianglesDrawModes): void;
        updateMorphTargets(): void;
    }

    class MeshBasicMaterial extends Material {
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

        constructor(parameters?: MeshBasicMaterialParameters);

        clone(): MeshBasicMaterial;
        copy(source: MeshBasicMaterial): MeshBasicMaterial;
        setValues(parameters: MeshBasicMaterialParameters): void;
    }

    interface MeshBasicMaterialParameters extends MaterialParameters {
        color?: number | string | Color | undefined;
        opacity?: number | undefined;
        map?: Texture | undefined;
        aoMap?: Texture | undefined;
        aoMapIntensity?: number | undefined;
        specularMap?: Texture | undefined;
        alphaMap?: Texture | undefined;
        envMap?: Texture | undefined;
        combine?: Combine | undefined;
        reflectivity?: number | undefined;
        refractionRatio?: number | undefined;
        shading?: Shading | undefined;
        wireframe?: boolean | undefined;
        wireframeLinewidth?: number | undefined;
        wireframeLinecap?: string | undefined;
        wireframeLinejoin?: string | undefined;
        skinning?: boolean | undefined;
        morphTargets?: boolean | undefined;
    }

    class MeshDepthMaterial extends Material {
        wireframe: boolean;
        wireframeLinewidth: number;

        constructor(parameters?: MeshDepthMaterialParameters);

        clone(): MeshDepthMaterial;
        copy(source: MeshDepthMaterial): MeshDepthMaterial;
        setValues(parameters: MeshDepthMaterialParameters): void;
    }

    /**
     * @deprecated Use MultiMaterial
     */
    class MeshFaceMaterial extends MultiMaterial {
    }

    class MeshLambertMaterial extends Material {
        color: Color;
        emissive: number | string;
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

        constructor(parameters?: MeshLambertMaterialParameters);

        clone(): MeshLambertMaterial;
        copy(source: MeshLambertMaterial): MeshLambertMaterial;
        setValues(parameters: MeshLambertMaterialParameters): void;
    }

    interface MeshLambertMaterialParameters extends MaterialParameters {
        color?: number | string | Color | undefined;
        emissive?: number | string | undefined;
        emissiveIntensity?: number | undefined;
        emissiveMap?: Texture | undefined;
        map?: Texture | undefined;
        lighhtMap?: Texture | undefined;
        lightMapIntensity?: number | undefined;
        aoMap?: Texture | undefined;
        aoMapIntensity?: number | undefined;
        specularMap?: Texture | undefined;
        alphaMap?: Texture | undefined;
        envMap?: Texture | undefined;
        combine?: Combine | undefined;
        reflectivity?: number | undefined;
        refractionRatio?: number | undefined;
        wireframe?: boolean | undefined;
        wireframeLinewidth?: number | undefined;
        wireframeLinecap?: string | undefined;
        wireframeLinejoin?: string | undefined;
        skinning?: boolean | undefined;
        morphTargets?: boolean | undefined;
        morphNormals?: boolean | undefined;
    }

    interface MeshDepthMaterialParameters extends MaterialParameters {
        wireframe?: boolean | undefined;
        wireframeLinewidth?: number | undefined;
    }
    interface MeshNormalMaterialParameters extends MaterialParameters {
        morphTargets?: boolean | undefined;
        /** Render geometry as wireframe. Default is false (i.e. render as smooth shaded). */
        wireframe?: boolean | undefined;
        /** Controls wireframe thickness. Default is 1. */
        wireframeLinewidth?: number | undefined;
    }

    class MeshNormalMaterial extends Material {
        morphTargets: boolean;
        wireframe: boolean;
        wireframeLinewidth: number;

        constructor(parameters?: MeshNormalMaterialParameters);

        clone(): MeshNormalMaterial;
        copy(source: MeshNormalMaterial): MeshNormalMaterial;
        setValues(parameters: MeshNormalMaterialParameters): void;
    }

    class MeshPhongMaterial extends Material {
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

        constructor(parameters?: MeshPhongMaterialParameters);

        clone(): MeshPhongMaterial;
        copy(source: MeshPhongMaterial): MeshPhongMaterial;
        setValues(parameters: MeshPhongMaterialParameters): void;
    }

    interface MeshPhongMaterialParameters extends MaterialParameters {
        /** geometry color in hexadecimal. Default is 0xffffff. */
        color?: number | string | Color | undefined;
        specular?: number | undefined;
        shininess?: number | undefined;
        opacity?: number | undefined;
        map?: Texture | undefined;
        lightMap?: Texture | undefined;
        lightMapIntensity?: number | undefined;
        aoMap?: Texture | undefined;
        aoMapIntensity?: number | undefined;
        emissive?: number | undefined;
        emissiveIntensity?: number | undefined;
        emissiveMap?: Texture | undefined;
        bumpMap?: Texture | undefined;
        bumpScale?: number | undefined;
        normalMap?: Texture | undefined;
        normalScale?: Vector2 | undefined;
        displacementMap?: Texture | undefined;
        displacementScale?: number | undefined;
        displacementBias?: number | undefined;
        specularMap?: Texture | undefined;
        alphaMap?: Texture | undefined;
        envMap?: Texture | undefined;
        combine?: Combine | undefined;
        reflectivity?: number | undefined;
        refractionRatio?: number | undefined;
        wireframe?: boolean | undefined;
        wireframeLinewidth?: number | undefined;
        wireframeLinecap?: string | undefined;
        wireframeLinejoin?: string | undefined;
        skinning?: boolean | undefined;
        morphTargets?: boolean | undefined;
        morphNormals?: boolean | undefined;
    }

    class MeshPhysicalMaterial extends MeshStandardMaterial {
        defines: any;
        reflectivity: number;
        clearCoat: number;
        clearCoatRoughness: number;

        constructor(parameters: MeshPhysicalMaterialParameters);
    }

    interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
        clearCoat?: number | undefined;
        clearCoatRoughness?: number | undefined;
        reflectivity?: number | undefined;
    }

    class MeshStandardMaterial extends Material {
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

        constructor(parameters?: MeshStandardMaterialParameters);

        clone(): MeshStandardMaterial;
        copy(source: MeshStandardMaterial): MeshStandardMaterial;
        setValues(parameters: MeshStandardMaterialParameters): void;
    }

    interface MeshStandardMaterialParameters extends MaterialParameters {
        color?: number | string | Color | undefined;
        roughness?: number | undefined;
        metalness?: number | undefined;
        map?: Texture | undefined;
        lighhtMap?: Texture | undefined;
        lightMapIntensity?: number | undefined;
        aoMap?: Texture | undefined;
        aoMapIntensity?: number | undefined;
        emissive?: Color | undefined;
        emissiveIntensity?: number | undefined;
        emissiveMap?: Texture | undefined;
        bumpMap?: Texture | undefined;
        bumpScale?: number | undefined;
        normalMap?: Texture | undefined;
        normalScale?: number | undefined;
        displacementMap?: Texture | undefined;
        displacementScale?: number | undefined;
        displacementBias?: number | undefined;
        roughnessMap?: Texture | undefined;
        metalMap?: Texture | undefined;
        alphaMap?: Texture | undefined;
        envMap?: Texture | undefined;
        envMapIntensity?: number | undefined;
        refractionRatio?: number | undefined;
        wireframe?: boolean | undefined;
        wireframeLinewidth?: number | undefined;
        skinning?: boolean | undefined;
        morphTargets?: boolean | undefined;
        morphNormals?: boolean | undefined;
    }

    interface MorphColor {
        name: string;
        colors: Color[];
    }

    interface MorphNormals {
        name: string;
        normals: Vector3[];
    }

    interface MorphTarget {
        name: string;
        vertices: Vector3[];
    }

    class MultiMaterial extends Material {
        materials: Material[];

        constructor(materials?: Material[]);

        clone(): MultiMaterial;
        toJSON(meta: any): any;
    }

    class Object3D {
        id: number;
        uuid: string;
        name: string;
        type: string;
        parent: Object3D;
        children: Object3D[];
        up: Vector3;
        rotation: Euler;
        quaternion: Quaternion;
        scale: Vector3;
        modelViewMatrix: Matrix4;
        normalMatrix: Matrix3;
        matrix: Matrix4;
        matrixWorld: Matrix4;
        matrixAutoUpdate: boolean;
        matrixWorldNeedsUpdate: boolean;
        visible: boolean;
        castShadow: boolean;
        receiveShadow: boolean;
        frustumCulled: boolean;
        renderOrder: number;
        /**
         * @deprecated
         */
        eulerOrder: string;
        position: Vector3;
        userData: any;

        static DefaultUp: Vector3;
        static DefaultMatrixAutoUpdate: boolean;

        constructor();

        applyMatrix(matrix: Matrix4): void;
        setRotationFromAxisAngle(axis: Vector3, angle: number): void;
        setRotationFromEuler(euler: Euler): void;
        setRotationFromMatrix(m: Matrix4): void;
        setRotationFromQuaternion(q: Quaternion): void;
        rotateOnAxis(axis: Vector3, angle: number): Object3D;
        rotateX(angle: number): Object3D;
        rotateY(angle: number): Object3D;
        rotateZ(angle: number): Object3D;
        translateOnAxis(axis: Vector3, distance: number): Object3D;
        translateX(distance: number): Object3D;
        translateY(distance: number): Object3D;
        translateZ(distance: number): Object3D;
        localToWorld(vector: Vector3): Vector3;
        worldToLocal(vector: Vector3): Vector3;
        lookAt(vector: Vector3): void;
        add(object: Object3D): void;
        remove(object: Object3D): void;
        getObjectById(id: number): Object3D;
        getObjectByName(name: string): Object3D;
        getObjectByProperty(name: string, value: string): Object3D;
        getWorldPosition(optionalTarget?: Vector3): Vector3;
        getWorldQuaternion(optionalTarget?: Quaternion): Quaternion;
        getWorldRotation(optionalTarget?: Euler): Euler;
        getWorldScale(optionalTarget?: Vector3): Vector3;
        getWorldDirection(optionalTarget?: Vector3): Vector3;
        raycast(raycaster: Raycaster, intersects: any): void;
        traverse(callback: (object: Object3D) => any): void;
        traverseVisible(callback: (object: Object3D) => any): void;
        traverseAncestors(callback: (object: Object3D) => any): void;
        updateMatrix(): void;
        updateMatrixWorld(force: boolean): void;
        toJSON(meta?: { geometries: any; materials: any; textures: any; images: any }): any;
        clone(recursive?: boolean): Object3D;
        copy(source: Object3D, recursive?: boolean): Object3D;
        getChildByName(name: string): Object3D;
        translate(distance: number, axis: Vector3): Object3D;
    }

    class OrthographicCamera extends Camera {
        bottom: number;
        far: number;
        left: number;
        near: number;
        right: number;
        top: number;
        view: {
            fullWidth: number;
            fullHeight: number;
            offsetX: number;
            offsetY: number;
            width: number;
            height: number;
        };
        zoom: number;

        constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number);

        clearViewOffset(): void;
        clone(): OrthographicCamera;
        copy(source: OrthographicCamera): OrthographicCamera;
        setViewOffset(
            fullWidth: number,
            fullHeight: number,
            offsetX: number,
            offsetY: number,
            width: number,
            height: number,
        ): void;
        toJSON(meta?: any): any;
        updateProjectionMatrix(): void;
    }

    class Path {
        lineTo(x: number, y: number): void;
        moveTo(x: number, y: number): void;
    }

    class PerspectiveCamera extends Camera {
        aspect: number;
        far: number;
        filmGauge: number;
        filmOffset: number;
        focus: number;
        fov: number;
        near: number;
        view: {
            fullHeight: number;
            fullWidth: number;
            height: number;
            offsetX: number;
            offsetY: number;
            width: number;
        };
        zoom: number;

        constructor(fov?: number, aspect?: number, near?: number, far?: number);

        clearViewOffset(): void;
        clone(): PerspectiveCamera;
        getEffectiveFOV(): number;
        getFilmHeight(): number;
        getFilmWidth(): number;
        getFocalLength(): number;
        setFocalLength(focalLength: number): void;
        /**
         * @deprecated
         */
        setLens(focalLength: number, frameHeight?: number): void;
        setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
        toJSON(meta?: any): any;
        updateProjectionMatrix(): void;
    }

    class Plane {
        constant: number;
        normal: Vector3;

        constructor(normal?: Vector3, constant?: number);

        applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
        clone(): Plane;
        coplanarPoint(optionalTarget?: boolean): Vector3;
        copy(plane: Plane): Plane;
        distanceToPoint(point: Vector3): number;
        distanceToSphere(sphere: Sphere): number;
        equals(plane: Plane): boolean;
        intersectLine(line: Line3, optionalTarget?: Vector3): Vector3;
        isIntersectionLine(line: Line3): boolean;
        negate(): Plane;
        normalize(): Plane;
        orthoPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        projectPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        set(normal: Vector3, constant: number): Plane;
        setComponents(x: number, y: number, z: number, w: number): Plane;
        setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
        setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
        translate(offset: Vector3): Plane;
    }

    class PlaneBufferGeometry extends BufferGeometry {
        parameters: {
            height: number;
            heightSegments: number;
            width: number;
            widthSegments: number;
        };

        constructor(width: number, height: number, widthSegments?: number, heightSegments?: number);
    }

    class PointCloud extends Object3D {
        geometry: Geometry | BufferGeometry;
        material: Material;

        constructor(geometry: Geometry | BufferGeometry, material?: PointCloudMaterial);

        clone(): PointCloud;
        copy(source: PointCloud): PointCloud;
        raycast(raycaster: Raycaster, intersects: any): void;
    }

    class PointCloudMaterial extends Material {
        constructor(parameters: {
            color?: string | undefined;
            fog?: boolean | undefined;
            opacity?: number | undefined;
            size?: number | undefined;
            vertexColors?: number | undefined;
        });
    }

    class PointLight extends Light {
        decay: number;
        distance: number;
        intensity: number;
        power: number;
        shadow: LightShadow;

        constructor(hex?: number | string, intensity?: number, distance?: number, decay?: number);

        clone(recursive?: boolean): PointLight;
        copy(source: PointLight): PointLight;
    }

    class Quaternion {
        x: number;
        y: number;
        z: number;
        w: number;

        constructor(x?: number, y?: number, z?: number, w?: number);

        static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;

        clone(): Quaternion;
        conjugate(): Quaternion;
        copy(q: Quaternion): Quaternion;
        dot(v: Vector3): number;
        equals(v: Quaternion): boolean;
        fromArray(xyzw: number[], offset?: number): Quaternion;
        inverse(): Quaternion;
        length(): number;
        lengthSq(): number;
        multiply(q: Quaternion): Quaternion;
        multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
        multiplyVector3(vector: Vector3): Vector3;
        normalize(): Quaternion;
        onChange: () => void;
        set(x: number, y: number, z: number, w: number): Quaternion;
        setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
        setFromEuler(euler: Euler, update?: boolean): Quaternion;
        setFromRotationMatrix(m: Matrix4): Quaternion;
        setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
        slerp(qb: Quaternion, t: number): Quaternion;
        toArray(xyzw?: number[], offset?: number): number[];
    }

    class QuaternionLinearInterpolant extends Interpolant {
        constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

        interpolate_(i1: number, t0: number, t: number, t1: number): any;
    }

    class RawShaderMaterial extends ShaderMaterial {
        constructor(parameters?: ShaderMaterialParameters);
    }

    class Ray {
        origin: Vector3;
        direction: Vector3;

        constructor(origin?: Vector3, direction?: Vector3);

        applyMatrix4(matrix4: Matrix4): Ray;
        at(t: number, optionalTarget?: Vector3): Vector3;
        clone(): Ray;
        closestPointToPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        copy(ray: Ray): Ray;
        distanceSqToSegment(
            v0: Vector3,
            v1: Vector3,
            optionalPointOnRay?: Vector3,
            optionalPointOnSegment?: Vector3,
        ): number;
        distanceToPlane(plane: Plane): number;
        distanceToPoint(point: Vector3): number;
        equals(ray: Ray): boolean;
        isIntersectionSphere(sphere: Sphere): boolean;
        intersectSphere(sphere: Sphere, optionalTarget?: Vector3): Vector3;
        isIntersectionPlane(plane: Plane): boolean;
        intersectPlane(plane: Plane, optionalTarget?: Vector3): Vector3;
        intersectBox(box: Box3, optionalTarget?: Vector3): Vector3;
        intersectTriangle(
            a: Vector3,
            b: Vector3,
            c: Vector3,
            backfaceCulling: boolean,
            optionalTarget?: Vector3,
        ): Vector3;
        isIntersectionBox(box: Box3): boolean;
        recast(t: number): Ray;
        set(origin: Vector3, direction: Vector3): Ray;
    }

    class Raycaster {
        ray: Ray;
        near: number;
        far: number;
        params: RaycasterParameters;
        precision: number;
        linePrecision: number;

        constructor(
            origin?: Vector3,
            direction?: Vector3,
            near?: number,
            far?: number,
        );

        intersectObject(object: Object3D, recursive?: boolean): Intersection[];
        intersectObjects(objects: Object3D[], recursive?: boolean): Intersection[];
        set(origin: Vector3, direction: Vector3): void;
        setFromCamera(coords: { x: number; y: number }, camera: Camera): void;
    }

    interface RaycasterParameters {
        Line?: any;
        LOD?: any;
        Mesh?: any;
        PointCloud?: any;
        Sprite?: any;
    }

    interface Renderer {
        domElement: HTMLCanvasElement;

        render(scene: Scene, camera: Camera): void;
        setSize(width: number, height: number, updateStyle?: boolean): void;
    }

    class Scene extends Object3D {
        autoUpdate: boolean;
        background: any;
        fog: Fog;
        overrideMaterial: Material;

        constructor();

        copy(source: Scene, recursive?: boolean): Scene;
    }

    class Shape extends Path {
    }

    class ShaderMaterial extends Material {
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
        /**
         * @deprecated Use extensions.derivatives
         */
        derivatives: any;
        extensions: { derivatives: boolean; fragDepth: boolean; drawBuffers: boolean; shaderTextureLOD: boolean };
        defaultAttributeValues: any;
        index0AttributeName: string;

        constructor(parameters?: ShaderMaterialParameters);

        clone(): ShaderMaterial;
        copy(source: ShaderMaterial): ShaderMaterial;
        setValues(parameters: ShaderMaterialParameters): void;
        toJSON(meta: any): any;
    }

    interface ShaderMaterialParameters extends MaterialParameters {
        defines?: any;
        uniforms?: any;
        vertexShader?: string | undefined;
        fragmentShader?: string | undefined;
        lineWidth?: number | undefined;
        wireframe?: boolean | undefined;
        wireframeLinewidth?: number | undefined;
        lights?: boolean | undefined;
        clipping?: boolean | undefined;
        skinning?: boolean | undefined;
        morphTargets?: boolean | undefined;
        morphNormals?: boolean | undefined;
        attributes?: any;
    }

    class Skeleton {
        useVertexTexture: boolean;
        identityMatrix: Matrix4;
        bones: Bone[];
        boneTextureWidth: number;
        boneTextureHeight: number;
        boneMatrices: Float32Array;
        boneTexture: DataTexture;
        boneInverses: Matrix4[];

        constructor(bones: Bone[], boneInverses?: Matrix4[], useVertexTexture?: boolean);

        calculateInverses(bone: Bone): void;
        clone(): Skeleton;
        pose(): void;
        update(): void;
    }

    class SkinnedMesh extends Mesh {
        bindMode: string;
        bindMatrix: Matrix4;
        bindMatrixInverse: Matrix4;
        skeleton: Skeleton;

        constructor(
            geometry?: Geometry | BufferGeometry,
            material?:
                | MeshBasicMaterial
                | MeshDepthMaterial
                | MultiMaterial
                | MeshLambertMaterial
                | MeshNormalMaterial
                | MeshPhongMaterial
                | ShaderMaterial,
            useVertexTexture?: boolean,
        );

        bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
        clone(): SkinnedMesh;
        copy(source: SkinnedMesh): SkinnedMesh;
        normalizeSkinWeights(): void;
        pose(): void;
        updateMatrixWorld(force?: boolean): void;
    }

    class SkeletonHelper extends LineSegments {
        bones: Bone[];
        root: Object3D;

        constructor(bone: Object3D);

        getBoneList(object: Object3D): Bone[];
        update(): void;
    }

    class Sphere {
        center: Vector3;
        radius: number;

        constructor(center?: Vector3, radius?: number);

        applyMatrix4(matrix: Matrix4): Sphere;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        clone(): Sphere;
        containsPoint(point: Vector3): boolean;
        copy(sphere: Sphere): Sphere;
        distanceToPoint(point: Vector3): number;
        empty(): boolean;
        equals(sphere: Sphere): boolean;
        getBoundingBox(optionalTarget?: Box3): Box3;
        intersectsSphere(sphere: Sphere): boolean;
        set(center: Vector3, radius: number): Sphere;
        setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
        translate(offset: Vector3): Sphere;
    }

    /**
     * A class for generating sphere geometries
     */
    class SphereGeometry extends Geometry {
        /**
         * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres
         * (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points
         * in which we start (or end) calculating those vertices.
         *
         * @param radius — sphere radius. Default is 50.
         * @param widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
         * @param heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
         * @param phiStart — specify horizontal starting angle. Default is 0.
         * @param phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
         * @param thetaStart — specify vertical starting angle. Default is 0.
         * @param thetaLength — specify vertical sweep angle size. Default is Math.PI.
         */
        constructor(
            radius: number,
            widthSegments?: number,
            heightSegments?: number,
            phiStart?: number,
            phiLength?: number,
            thetaStart?: number,
            thetaLength?: number,
        );

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
     * @deprecated will be deprecated, use CatmullRomCurve3
     */
    class SplineCurve3 extends CatmullRomCurve3 {
    }

    class SpotLight extends Light {
        angle: number;
        decay: number;
        distance: number;
        exponent: number;
        intensity: number;
        penumbra: number;
        power: number;
        shadow: SpotLightShadow;
        target: Object3D;

        constructor(
            hex?: number | string,
            intensity?: number,
            distance?: number,
            angle?: number,
            exponent?: number,
            decay?: number,
        );

        clone(recursive?: boolean): SpotLight;
        copy(source: PointLight): SpotLight;
    }

    class SpotLightShadow extends LightShadow {
        update(light: Light): void;
    }

    class Texture {
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
        );

        clone(): Texture;
        copy(source: Texture): Texture;
        dispose(): void;
        update(): void;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any }): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
    }

    class TextureLoader {
        crossOrigin: string;
        manager: LoadingManager;
        path: string;

        constructor(manager?: LoadingManager);

        load(url: string, onLoad?: (texture: Texture) => void): Texture;
        setCrossOrigin(crossOrigin: string): TextureLoader;
        setPath(path: string): TextureLoader;
    }

    class TransformControls {
        visible: boolean;

        constructor(camera: Camera, domElement: HTMLElement, mode: string, includeAxis?: boolean);

        attach(object: any): void;
        detach(object: any): void;
        onPointerDown(event: any): boolean;
        onPointerHover(event: any): boolean;
        onPointerMove(event: any): boolean;
        onPointerUp(event: any): boolean;
        update(highlight?: boolean): void;
    }

    interface Vector {
        add(v: Vector): Vector;
        addVectors(a: Vector, b: Vector): Vector;
        clone(): Vector;
        copy(v: Vector): Vector;
        distanceTo?(v: Vector): number;
        distanceToSquared?(v: Vector): number;
        divideScalar(s: number): Vector;
        dot(v: Vector): number;
        equals(v: Vector): boolean;
        getComponent(index: number): number;
        lengthSq(): number;
        length(): number;
        lerp(v: Vector, alpha: number): Vector;
        negate(): Vector;
        multiplyScalar(s: number): Vector;
        normalize(): Vector;
        setComponent(index: number, value: number): void;
        setLength(l: number): Vector;
        sub(v: Vector): Vector;
        subVectors(a: Vector, b: Vector): Vector;
    }

    class Vector2 implements Vector {
        x: number;
        y: number;

        constructor(x?: number, y?: number);

        add(v: Vector2): Vector2;
        addScalar(s: number): Vector2;
        addVectors(a: Vector2, b: Vector2): Vector2;
        ceil(): Vector2;
        clamp(min: Vector2, max: Vector2): Vector2;
        clampScalar(min: number, max: number): Vector2;
        clone(): Vector2;
        copy(v: Vector2): Vector2;
        distanceTo(v: Vector2): number;
        distanceToSquared(v: Vector2): number;
        divide(v: Vector2): Vector2;
        divideScalar(s: number): Vector2;
        dot(v: Vector2): number;
        equals(v: Vector2): boolean;
        floor(): Vector2;
        fromArray(xy: number[], offset?: number): Vector2;
        fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector2;
        getComponent(index: number): number;
        length(): number;
        lengthSq(): number;
        lerp(v: Vector2, alpha: number): Vector2;
        lerpVectors(v1: Vector2, v2: Vector2, alpha: number): Vector2;
        max(v: Vector2): Vector2;
        min(v: Vector2): Vector2;
        multiply(v: Vector2): Vector2;
        multiplyScalar(s: number): Vector2;
        negate(): Vector2;
        normalize(): Vector2;
        round(): Vector2;
        roundToZero(): Vector2;
        set(x: number, y: number): Vector2;
        setComponent(index: number, value: number): void;
        setLength(l: number): Vector2;
        setX(x: number): Vector2;
        setY(y: number): Vector2;
        sub(v: Vector2): Vector2;
        subVectors(a: Vector2, b: Vector2): Vector2;
        toArray(xy?: number[], offset?: number): number[];
    }

    class Vector3 implements Vector {
        x: number;
        y: number;
        z: number;

        constructor(x?: number, y?: number, z?: number);

        add(a: Vector3): Vector3;
        addScalar(s: number): Vector3;
        addVectors(a: Vector3, b: Vector3): Vector3;
        angleTo(v: Vector3): number;
        applyAxisAngle(axis: Vector3, angle: number): Vector3;
        applyEuler(euler: Euler): Vector3;
        applyMatrix3(m: Matrix3): Vector3;
        applyMatrix4(m: Matrix4): Vector3;
        applyProjection(m: Matrix4): Vector3;
        applyQuaternion(q: Quaternion): Vector3;
        ceil(): Vector3;
        clamp(min: Vector3, max: Vector3): Vector3;
        clampScalar(min: number, max: number): Vector3;
        clone(): Vector3;
        copy(v: Vector3): Vector3;
        cross(a: Vector3): Vector3;
        crossVectors(a: Vector3, b: Vector3): Vector3;
        distanceTo(v: Vector3): number;
        distanceToSquared(v: Vector3): number;
        divide(v: Vector3): Vector3;
        divideScalar(s: number): Vector3;
        dot(v: Vector3): number;
        equals(v: Vector3): boolean;
        floor(): Vector3;
        fromArray(xyz: number[], offset?: number): Vector3;
        fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector3;
        getComponent(index: number): number;
        length(): number;
        lengthManhattan(): number;
        lengthSq(): number;
        lerp(v: Vector3, alpha: number): Vector3;
        lerpVectors(v1: Vector3, v2: Vector3, alpha: number): Vector3;
        max(v: Vector3): Vector3;
        min(v: Vector3): Vector3;
        multiply(v: Vector3): Vector3;
        multiplyScalar(s: number): Vector3;
        multiplyVectors(a: Vector3, b: Vector3): Vector3;
        negate(): Vector3;
        normalize(): Vector3;
        project(camera: Camera): Vector3;
        projectOnPlane(planeNormal: Vector3): Vector3;
        projectOnVector(v: Vector3): Vector3;
        reflect(vector: Vector3): Vector3;
        round(): Vector3;
        roundToZero(): Vector3;
        set(x: number, y: number, z: number): Vector3;
        setComponent(index: number, value: number): void;
        setFromMatrixColumn(index: number, matrix: Matrix4): Vector3;
        setFromMatrixPosition(m: Matrix4): Vector3;
        setFromMatrixScale(m: Matrix4): Vector3;
        setLength(l: number): Vector3;
        setX(x: number): Vector3;
        setY(y: number): Vector3;
        setZ(z: number): Vector3;
        sub(a: Vector3): Vector3;
        subScalar(s: number): Vector3;
        subVectors(a: Vector3, b: Vector3): Vector3;
        toArray(xyz?: number[], offset?: number): number[];
        transformDirection(m: Matrix4): Vector3;
        unproject(camera: Camera): Vector3;
    }

    class Vector4 implements Vector {
        x: number;
        y: number;
        z: number;
        w: number;

        constructor(x?: number, y?: number, z?: number, w?: number);

        add(v: Vector4): Vector4;
        addScalar(s: number): Vector4;
        addVectors(a: Vector4, b: Vector4): Vector4;
        applyMatrix4(m: Matrix4): Vector4;
        ceil(): Vector4;
        clamp(min: Vector4, max: Vector4): Vector4;
        clampScalar(min: number, max: number): Vector4;
        clone(): Vector4;
        copy(v: Vector4): Vector4;
        divideScalar(s: number): Vector4;
        dot(v: Vector4): number;
        equals(v: Vector4): boolean;
        floor(): Vector4;
        fromArray(xyzw: number[], offset?: number): Vector4;
        fromAttribute(attribute: BufferAttribute, index: number, offset?: number): Vector4;
        getComponent(index: number): number;
        length(): number;
        lengthManhattan(): number;
        lengthSq(): number;
        lerp(v: Vector4, alpha: number): Vector4;
        lerpVectors(v1: Vector4, v2: Vector4, alpha: number): Vector4;
        max(v: Vector4): Vector4;
        min(v: Vector4): Vector4;
        multiplyScalar(s: number): Vector4;
        negate(): Vector4;
        normalize(): Vector4;
        round(): Vector4;
        roundToZero(): Vector4;
        set(x: number, y: number, z: number, w: number): Vector4;
        setAxisAngleFromQuaternion(q: Quaternion): Vector4;
        setAxisAngleFromRotationMatrix(m: Matrix3): Vector4;
        setComponent(index: number, value: number): void;
        setLength(l: number): Vector4;
        setX(x: number): Vector4;
        setY(y: number): Vector4;
        setZ(z: number): Vector4;
        setW(w: number): Vector4;
        sub(v: Vector4): Vector4;
        subScalar(s: number): Vector4;
        subVectors(a: Vector4, b: Vector4): Vector4;
        toArray(xyzw?: number[], offset?: number): number[];
    }

    class WebGLCapabilities {
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

        constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters);

        getMaxAnisotropy(): number;
        getMaxPrecision(precision: string): string;
    }

    interface WebGLCapabilitiesParameters {
        logarithmicDepthBuffer?: any;
        precision?: any;
    }

    class WebGLColorBuffer {
        constructor(gl: any, state: any);

        reset(): void;
        setClear(r: number, g: number, b: number, a: number): void;
        setLocked(lock: boolean): void;
        setMask(colorMask: number): void;
    }

    class WebGLDepthBuffer {
        constructor(gl: any, state: any);

        reset(): void;
        setClear(depth: any): void;
        setFunc(depthFunc: any): void;
        setLocked(lock: boolean): void;
        setMask(depthMask: number): void;
        setTest(depthTest: boolean): void;
    }

    class WebGLExtensions {
        constructor(gl: WebGLRenderingContext);

        get(name: string): any;
    }

    class WebGLProperties {
        constructor();

        clear(): void;
        delete(object: any): void;
        get(object: any): any;
    }

    class WebGLRenderTarget {
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

        constructor(width: number, height: number, options?: WebGLRenderTargetOptions);

        clone(): WebGLRenderTarget;
        copy(source: WebGLRenderTarget): WebGLRenderTarget;
        dispose(): void;
        setSize(width: number, height: number): void;
    }

    interface WebGLRenderTargetOptions {
        wrapS?: Wrapping | undefined;
        wrapT?: Wrapping | undefined;
        magFilter?: TextureFilter | undefined;
        minFilter?: TextureFilter | undefined;
        format?: number | undefined; // RGBAFormat;
        type?: TextureDataType | undefined; // UnsignedByteType;
        anisotropy?: number | undefined; // 1;
        depthBuffer?: boolean | undefined; // true;
        stencilBuffer?: boolean | undefined; // true;
    }

    class WebGLRenderer implements Renderer {
        domElement: HTMLCanvasElement;
        context: WebGLRenderingContext;
        autoClear: boolean;
        autoClearColor: boolean;
        autoClearDepth: boolean;
        autoClearStencil: boolean;
        sortObjects: boolean;

        clippingPlanes: any[];
        localClippingEnabled: boolean;

        extensions: WebGLExtensions;
        gammaInput: boolean;
        gammaOutput: boolean;

        physicallyCorrectLights: boolean;
        toneMapping: ToneMapping;
        toneMappingExposure: number;
        toneMappingWhitePoint: number;
        shadowMapDebug: boolean;
        maxMorphTargets: number;
        maxMorphNormals: number;
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

        constructor(parameters?: WebGLRendererParameters);

        getContext(): WebGLRenderingContext;
        getContextAttributes(): any;
        forceContextLoss(): void;
        getMaxAnisotropy(): number;
        getPrecision(): string;
        getPixelRatio(): number;
        setPixelRatio(value: number): void;
        getSize(): { width: number; height: number };
        setSize(width: number, height: number, updateStyle?: boolean): void;
        setViewport(x?: number, y?: number, width?: number, height?: number): void;
        setScissor(x: number, y: number, width: number, height: number): void;
        setScissorTest(enable: boolean): void;
        getClearColor(): Color;
        setClearColor(color: Color | string | number, alpha?: number): void;
        getClearAlpha(): number;
        setClearAlpha(alpha: number): void;
        clear(color?: boolean, depth?: boolean, stencil?: boolean): void;
        clearColor(): void;
        clearDepth(): void;
        clearStencil(): void;
        clearTarget(renderTarget: WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;
        resetGLState(): void;
        dispose(): void;
        renderBufferImmediate(object: Object3D, program: object, material: Material): void;
        renderBufferDirect(camera: Camera, fog: Fog, material: Material, geometryGroup: any, object: Object3D): void;
        render(scene: Scene, camera: Camera, renderTarget?: any, forceClear?: boolean): void;
        setFaceCulling(cullFace?: CullFace, frontFace?: FrontFaceDirection): void;
        setTexture(texture: Texture, slot: number): void; // deprecated
        setTexture2D(texture: Texture, slot: number): void;
        setTextureCube(texture: Texture, slot: number): void;
        getCurrentRenderTarget(): any;
        setRenderTarget(renderTarget: any): void;
        readRenderTargetPixels(
            renderTarget: any,
            x: number,
            y: number,
            width: number,
            height: number,
            buffer: any,
        ): void;

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

    interface WebGLRendererParameters {
        canvas?: HTMLCanvasElement | undefined;
        precision?: string | undefined;
        alpha?: boolean | undefined;
        premultipliedAlpha?: boolean | undefined;
        antialias?: boolean | undefined;
        stencil?: boolean | undefined;
        preserveDrawingBuffer?: boolean | undefined;
        clearColor?: number | undefined;
        clearAlpha?: number | undefined;
        devicePixelRatio?: number | undefined;
        logarithmicDepthBuffer?: boolean | undefined;
    }

    class WebGLShadowMap {
        enabled: boolean;
        autoUpdate: boolean;
        /**
         * @deprecated
         */
        cullFace: any;
        needsUpdate: boolean;
        type: ShadowMapType;
        renderReverseSided: boolean;
        renderSingleSided: boolean;

        constructor(_renderer: Renderer, _lights: any[], _objects: any[], capabilities: any);

        render(scene: Scene, camera: Camera): void;
    }

    class WebGLState {
        buffers: {
            color: WebGLColorBuffer;
            depth: WebGLDepthBuffer;
            stencil: WebGLStencilBuffer;
        };

        constructor(gl: any, extensions: any, paramThreeToGL: any);

        init(): void;
        initAttributes(): void;
        enableAttribute(attribute: string): void;
        enableAttributeAndDivisor(attribute: string, meshPerAttribute: any, extension: any): void;
        disableUnusedAttributes(): void;
        enable(id: string): void;
        disable(id: string): void;
        getCompressedTextureFormats(): any[];
        setBlending(
            blending: number,
            blendEquation: number,
            blendSrc: number,
            blendDst: number,
            blendEquationAlpha: number,
            blendSrcAlpha: number,
            blendDstAlpha: number,
        ): void;
        setColorWrite(colorWrite: number): void;
        setDepthTest(depthTest: number): void;
        setDepthWrite(depthWrite: number): void;
        setDepthFunc(depthFunc: any): void;
        setStencilTest(stencilTest: boolean): void;
        setStencilWrite(stencilWrite: any): void;
        setStencilFunc(stencilFunc: any, stencilRef: any, stencilMask: number): void;
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

    class WebGLStencilBuffer {
        constructor(gl: any, state: any);

        reset(): void;
        setClear(stencil: any): void;
        setFunc(stencilFunc: any, stencilRef: any, stencilMask: number): void;
        setLocked(lock: boolean): void;
        setMask(stencilMask: number): void;
        setOp(stencilFail: any, stencilZFail: any, stencilZPass: any): void;
        setTest(stencilTest: boolean): void;
    }

    /**
     * @deprecated
     */
    namespace ImageUtils {
        let crossOrigin: string;

        function loadTexture(
            url: string,
            mapping?: Mapping,
            onLoad?: (texture: Texture) => void,
            onError?: (message: string) => void,
        ): Texture;
        function loadTextureCube(
            array: string[],
            mapping?: Mapping,
            onLoad?: (texture: Texture) => void,
            onError?: (message: string) => void,
        ): Texture;
    }
}
