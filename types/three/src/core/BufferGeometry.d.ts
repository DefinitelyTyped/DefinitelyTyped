import { BufferAttribute } from './BufferAttribute';
import { InterleavedBufferAttribute } from './InterleavedBufferAttribute';
import { GLBufferAttribute } from './GLBufferAttribute';
import { Box3 } from './../math/Box3';
import { Sphere } from './../math/Sphere';
import { Matrix4 } from './../math/Matrix4';
import { Quaternion } from './../math/Quaternion';
import { Vector2 } from './../math/Vector2';
import { Vector3 } from './../math/Vector3';
import { EventDispatcher } from './EventDispatcher';
import { BuiltinShaderAttributeName } from '../constants';

/**
 * This is a superefficent class for geometries because it saves all data in buffers.
 * It reduces memory costs and cpu cycles. But it is not as easy to work with because of all the necessary buffer calculations.
 * It is mainly interesting when working with static objects.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js|src/core/BufferGeometry.js}
 */
export class BufferGeometry extends EventDispatcher {
    /**
     * This creates a new BufferGeometry. It also sets several properties to an default value.
     */
    constructor();

    /**
     * Unique number of this buffergeometry instance
     */
    id: number;
    uuid: string;

    /**
     * @default ''
     */
    name: string;

    /**
     * @default 'BufferGeometry'
     */
    type: string;

    /**
     * @default null
     */
    index: BufferAttribute | null;

    /**
     * @default {}
     */
    attributes: {
        [name: string]: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute;
    };

    /**
     * @default {}
     */
    morphAttributes: {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>;
    };

    /**
     * @default false
     */
    morphTargetsRelative: boolean;

    /**
     * @default []
     */
    groups: Array<{ start: number; count: number; materialIndex?: number | undefined }>;

    /**
     * @default null
     */
    boundingBox: Box3 | null;

    /**
     * @default null
     */
    boundingSphere: Sphere | null;

    /**
     * @default { start: 0, count: Infinity }
     */
    drawRange: { start: number; count: number };

    /**
     * @default {}
     */
    userData: { [key: string]: any };
    readonly isBufferGeometry: true;

    getIndex(): BufferAttribute | null;
    setIndex(index: BufferAttribute | number[] | null): BufferGeometry;

    setAttribute(
        name: BuiltinShaderAttributeName | (string & {}),
        attribute: BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute,
    ): BufferGeometry;
    getAttribute(
        name: BuiltinShaderAttributeName | (string & {}),
    ): BufferAttribute | InterleavedBufferAttribute | GLBufferAttribute;
    deleteAttribute(name: BuiltinShaderAttributeName | (string & {})): BufferGeometry;
    hasAttribute(name: BuiltinShaderAttributeName | (string & {})): boolean;

    addGroup(start: number, count: number, materialIndex?: number): void;
    clearGroups(): void;

    setDrawRange(start: number, count: number): void;

    /**
     * Bakes matrix transform directly into vertex coordinates.
     */
    applyMatrix4(matrix: Matrix4): BufferGeometry;
    applyQuaternion(q: Quaternion): BufferGeometry;

    rotateX(angle: number): BufferGeometry;
    rotateY(angle: number): BufferGeometry;
    rotateZ(angle: number): BufferGeometry;
    translate(x: number, y: number, z: number): BufferGeometry;
    scale(x: number, y: number, z: number): BufferGeometry;
    lookAt(v: Vector3): void;

    center(): BufferGeometry;

    setFromPoints(points: Vector3[] | Vector2[]): BufferGeometry;

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
     * Computes and adds tangent attribute to this geometry.
     */
    computeTangents(): void;

    /**
     * Computes vertex normals by averaging face normals.
     */
    computeVertexNormals(): void;

    normalizeNormals(): void;

    toNonIndexed(): BufferGeometry;

    toJSON(): any;
    clone(): BufferGeometry;
    copy(source: BufferGeometry): this;

    /**
     * Disposes the object from memory.
     * You need to call this when you want the bufferGeometry removed while the application is running.
     */
    dispose(): void;

    /**
     * @deprecated Use {@link BufferGeometry#groups .groups} instead.
     */
    drawcalls: any;

    /**
     * @deprecated Use {@link BufferGeometry#groups .groups} instead.
     */
    offsets: any;

    /**
     * @deprecated Use {@link BufferGeometry#setIndex .setIndex()} instead.
     */
    addIndex(index: any): void;

    /**
     * @deprecated Use {@link BufferGeometry#addGroup .addGroup()} instead.
     */
    addDrawCall(start: any, count: any, indexOffset?: any): void;

    /**
     * @deprecated Use {@link BufferGeometry#clearGroups .clearGroups()} instead.
     */
    clearDrawCalls(): void;

    /**
     * @deprecated Use {@link BufferGeometry#setAttribute .setAttribute()} instead.
     */
    addAttribute(name: string, attribute: BufferAttribute | InterleavedBufferAttribute): BufferGeometry;
    addAttribute(name: any, array: any, itemSize: any): any;

    /**
     * @deprecated Use {@link BufferGeometry#deleteAttribute .deleteAttribute()} instead.
     */
    removeAttribute(name: string): BufferGeometry;
}
