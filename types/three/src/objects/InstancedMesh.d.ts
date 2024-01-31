import { BufferGeometry } from "../core/BufferGeometry.js";
import { InstancedBufferAttribute } from "../core/InstancedBufferAttribute.js";
import { Object3DEventMap } from "../core/Object3D.js";
import { Material } from "../materials/Material.js";
import { Box3 } from "../math/Box3.js";
import { Color } from "../math/Color.js";
import { Matrix4 } from "../math/Matrix4.js";
import { Sphere } from "../math/Sphere.js";
import { Mesh } from "./Mesh.js";

export interface InstancedMeshEventMap extends Object3DEventMap {
    dispose: {};
}

/**
 * A special version of {@link THREE.Mesh | Mesh} with instanced rendering support
 * @remarks
 * Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material but with different world transformations
 * @remarks
 * The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_dynamic | WebGL / instancing / dynamic}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_performance | WebGL / instancing / performance}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_scatter | WebGL / instancing / scatter}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | WebGL / instancing / raycast}
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/InstancedMesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/InstancedMesh.js | Source}
 */
export class InstancedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
    TEventMap extends InstancedMeshEventMap = InstancedMeshEventMap,
> extends Mesh<TGeometry, TMaterial, TEventMap> {
    /**
     * Create a new instance of {@link InstancedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     * @param count The **maximum** number of instances of this Mesh. Expects a `Integer`
     */
    constructor(geometry: TGeometry | undefined, material: TMaterial | undefined, count: number);

    /**
     * Read-only flag to check if a given object is of type {@link InstancedMesh}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInstancedMesh: true;

    /**
     * This bounding box encloses all instances of the {@link InstancedMesh},, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingBox: Box3 | null;

    /**
     * This bounding sphere encloses all instances of the {@link InstancedMesh}, which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    boundingSphere: Sphere | null;

    /**
     * The number of instances.
     * @remarks
     * The `count` value passed into the {@link InstancedMesh | constructor} represents the **maximum** number of instances of this mesh.
     * You can change the number of instances at runtime to an integer value in the range `[0, count]`.
     * @remarks If you need more instances than the original `count` value, you have to create a new InstancedMesh.
     * @remarks Expects a `Integer`
     */
    count: number;

    /**
     * Represents the colors of all instances.
     * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate()} flag to `true` if you modify instanced data via {@link setColorAt | .setColorAt()}.
     * @defaultValue `null`
     */
    instanceColor: InstancedBufferAttribute | null;

    /**
     * Represents the local transformation of all instances.
     * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate()} flag to `true` if you modify instanced data via {@link setMatrixAt | .setMatrixAt()}.
     */
    instanceMatrix: InstancedBufferAttribute;

    /**
     * Computes bounding box of the all instances, updating {@link boundingBox | .boundingBox} attribute.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingBox(): void;

    /**
     * Computes bounding sphere of the all instances, updating {@link boundingSphere | .boundingSphere} attribute.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     */
    computeBoundingSphere(): void;

    /**
     * Get the color of the defined instance.
     * @param index The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param color This color object will be set to the color of the defined instance.
     */
    getColorAt(index: number, color: Color): void;

    /**
     * Sets the given color to the defined instance
     * @remarks
     * Make sure you set {@link InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate()} to `true` after updating all the colors.
     * @param index The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param color The color of a single instance.
     */
    setColorAt(index: number, color: Color): void;

    /**
     * Get the local transformation matrix of the defined instance.
     * @param index The index of an instance Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param matrix This 4x4 matrix will be set to the local transformation matrix of the defined instance.
     */
    getMatrixAt(index: number, matrix: Matrix4): void;

    /**
     * Sets the given local transformation matrix to the defined instance.
     * @remarks
     * Make sure you set {@link InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate()} flag to `true` after updating all the matrices.
     * @param index The index of an instance. Values have to be in the range `[0, count]`. Expects a `Integer`
     * @param matrix A 4x4 matrix representing the local transformation of a single instance.
     */
    setMatrixAt(index: number, matrix: Matrix4): void;

    /**
     * No effect in {@link InstancedMesh}.
     * @ignore
     * @hidden
     */
    override updateMorphTargets(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
