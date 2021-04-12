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

    // TEXTURE CONSTANTS
    // Operations
    enum Combine {}
    const MultiplyOperation: Combine;
    const MixOperation: Combine;
    const AddOperation: Combine;

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
        center(): Vector3;
        clampPoint(point: Vector3, optionalTarget?: Vector3): Vector3;
        clone(): Box3;
        containsBox(box: Box3): boolean;
        containsPoint(point: Vector3): boolean;
        copy(box: Box3): Box3;
        distanceToPoint(point: Vector3): number;
        empty(): boolean;
        equals(box: Box3): boolean;
        expandByPoint(point: Vector3): Box3;
        expandByScalar(scalar: number): Box3;
        expandByVector(vector: Vector3): Box3;
        getBoundingSphere(optionalTarget?: Sphere): Sphere;
        getParameter(point: Vector3): Vector3;
        intersect(box: Box3): Box3;
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
        addAttribute(name: string, attribute: BufferAttribute): any;
        computeBoundingBox(): void;
    }

    class Camera {
        matrixWorldInverse: Matrix4;
        projectionMatrix: Matrix4;

        constructor();

        clone(camera?: Camera): Camera;
        getWorldDirection(optionalTarget?: Vector3): Vector3;
        lookAt(vector: Vector3): void;
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
    }

    class Euler {
        x: number;
        y: number;
        z: number;
        order: string;

        constructor(x?: number, y?: number, z?: number, order?: string);

        setFromQuaternion(q: Quaternion, order?: string, update?: boolean): Euler;
    }

    class ExtrudeGeometry {
        constructor(shapes?: Shape | Shape[], options?: any);

        WorldUVGenerator: {
            generateSideWallUV(geometry: Geometry, indexA: number, indexB: number, indexC: number, indexD: number): Vector2[];
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

        constructor(a: number, b: number, c: number, normal?: Vector3 | Vector3[], color?: Color | Color[], materialIndex?: number);

        clone(): Face3;
    }

    class Geometry {
        verticesNeedUpdate: boolean;
    }

    class Line3 {
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
        dispose(): void;
        setValues(values: object): void;
        toJSON(): any;
        update(): void;
        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any; }): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
    }

    class Matrix3 {
        elements: Float32Array;

        constructor(n11?: number, n12?: number, n13?: number,
            n21?: number, n22?: number, n23?: number,
            n31?: number, n32?: number, n33?: number);

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
        set(n11: number, n12: number, n13: number,
            n21: number, n22: number, n23: number,
            n31: number, n32: number, n33: number): Matrix3;
        toArray(): number[];
        transpose(): Matrix3;
        transposeIntoArray(r: number[]): number[];
    }

    class Matrix4 {
        elements: Float32Array;

        constructor(n11?: number, n12?: number, n13?: number, n14?: number,
            n21?: number, n22?: number, n23?: number, n24?: number,
            n31?: number, n32?: number, n33?: number, n34?: number,
            n41?: number, n42?: number, n43?: number, n44?: number);

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
        set(n11: number, n12: number, n13: number, n14: number,
            n21: number, n22: number, n23: number, n24: number,
            n31: number, n32: number, n33: number, n34: number,
            n41: number, n42: number, n43: number, n44: number): Matrix4;
        setPosition(v: Vector3): Vector3;
        transpose(): Matrix4;
    }

    class Mesh extends Object3D {
        geometry: Geometry;
        material: Material;

        constructor(geometry?: Geometry | BufferGeometry, material?: Material);
    }

    class MeshPhongMaterial extends Material {
        constructor(parameters?: {
            color?: string;
            emissive?: string;
            specular?: string;
            shininess?: number;
            opacity?: number;
        });

        clone(): MeshPhongMaterial;
    }

    class Object3D {
        matrix: Matrix4;
        position: Vector3;
        userData: any;

        constructor();
    }

    class OrthographicCamera {
    }

    class Path {
        lineTo(x: number, y: number): void;
        moveTo(x: number, y: number): void;
    }

    class PerspectiveCamera {
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

    class PointCloud extends Object3D {
        constructor(geometry: Geometry, material?: PointCloudMaterial);
    }

    class PointCloudMaterial extends Material {
        constructor(parameters: {
            color?: string;
            fog?: boolean;
            opacity?: number;
            size?: number;
            vertexColors?: number;
        });
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
            optionalPointOnSegment?: Vector3
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
            optionalTarget?: Vector3
        ): Vector3;
        isIntersectionBox(box: Box3): boolean;
        recast(t: number): Ray;
        set(origin: Vector3, direction: Vector3): Ray;
    }

    interface Intersection {
        distance: number;
        point: Vector3;
        face: Face3;
        object: Object3D;
    }

    interface RaycasterParameters {
        Sprite?: any;
        Mesh?: any;
        PointCloud?: any;
        LOD?: any;
        Line?: any;
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
            far?: number
        );

        intersectObject(object: Object3D, recursive?: boolean): Intersection[];
        intersectObjects(objects: Object3D[], recursive?: boolean): Intersection[];
        set(origin: Vector3, direction: Vector3): void;
        setFromCamera(coords: { x: number; y: number }, camera: Camera): void;
    }

    class Scene {
    }

    class Shape extends Path {
    }

    class ShaderMaterial {
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
            anisotropy?: number
        );

        clone(): Texture;
        dispose(): void;
        update(): void;

        // EventDispatcher mixins
        addEventListener(type: string, listener: (event: any) => void): void;
        dispatchEvent(event: { type: string; target: any }): void;
        hasEventListener(type: string, listener: (event: any) => void): void;
        removeEventListener(type: string, listener: (event: any) => void): void;
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

    class Vector2 {
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

    class Vector3 {
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

    class Vector4 {
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
}
