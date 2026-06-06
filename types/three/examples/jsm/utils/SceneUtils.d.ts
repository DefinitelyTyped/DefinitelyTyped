import { BufferGeometry, Group, InstancedMesh, Material, Mesh, Object3D, Scene, Vector3 } from "three";

export function createMeshesFromInstancedMesh(instancedMesh: InstancedMesh): Group;
export function createMultiMaterialObject(geometry: BufferGeometry, materials: Material[]): Group;
/**
 * @deprecated Use scene.attach( child ) instead.
 */
export function detach(child: Object3D, parent: Object3D, scene: Scene): void;
/**
 * @deprecated Use parent.attach( child ) instead.
 */
export function attach(child: Object3D, scene: Scene, parent: Object3D): void;

export function createMeshesFromMultiMaterialMesh(mesh: Mesh): Group;

export function sortInstancedMesh(mesh: InstancedMesh, compareFn: (a: number, b: number) => number): void;

/**
 * Akin to Array.prototype.reduce(), but operating on the vertices of all the visible descendant objects, in world space.
 * Additionally, it can operate as a transform-reduce, returning a different type T than the Vector3 input.
 * This can be useful for e.g. fitting a viewing frustum to the scene.
 *
 * @param object - The object to traverse (uses traverseVisible internally).
 * @param func - The binary function applied for the reduction.
 * Must have the signature: (value: T, vertex: Vector3): T.
 * @param initialValue - The value to initialize the reduction with.
 * This is required as it also sets the reduction type, which is not required to be Vector3.
 */
export function reduceVertices<TValue>(
    object: Object3D,
    func: (value: TValue, vertex: Vector3) => TValue,
    initialValue: TValue,
): TValue;

/**
 * A generator based version of {@link Object3D.traverse}.
 *
 * @param object The 3D object to traverse.
 * @yields Objects that passed the filter condition.
 */
export function traverseGenerator(object: Object3D): Generator<Object3D, void, unknown>;

/**
 * A generator based version of {@link Object3D.traverseVisible}.
 *
 * @param object The 3D object to traverse.
 * @yields Objects that passed the filter condition.
 */
export function traverseVisibleGenerator(object: Object3D): Generator<Object3D, void, unknown>;

/**
 * A generator based version of {@link Object3D.traverseAncestors}.
 *
 * @param object The 3D object to traverse.
 * @yields Objects that passed the filter condition.
 */
export function traverseAncestorsGenerator(object: Object3D): Generator<Object3D, void, unknown>;
