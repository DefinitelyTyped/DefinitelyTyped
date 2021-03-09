// minimal types for three.js (r71)
// Forge viewer is built on older version of three.js
// this package contains only types used by Forge viewer and may be incomplete

declare namespace THREE {
    // side
    const FrontSide = 0;
    const BackSide = 1;
    const DoubleSide = 2;

    // colors
    const NoColors = 0;
    const FaceColors = 1;
    const VertexColors = 2;

    class Box2 {
        min: Vector2;
        max: Vector2;

        constructor(min?: Vector2, max?: Vector2);

        containsPoint(point: Vector2): boolean;
    }

    class Box3 {
        min: Vector3;
        max: Vector3;

        constructor(min?: Vector3, max?: Vector3);

        center(): Vector3;
        setFromObject(object: Object3D): Box3;
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
    }

    class Face3 {
    }

    class Geometry {
        verticesNeedUpdate: boolean;
    }

    namespace Math {
        function degToRad(degree: number): number;
        function radToDeg(radians: number): number;
    }

    class Material {
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
    }

    class Ray {
    }

    class Scene {
    }

    class Shape extends Path {
    }

    class ShaderMaterial {
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
        applyEuler(euler: Euler): Vector3;
        applyAxisAngle(axis: Vector3, angle: number): Vector3;
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
    }
}
