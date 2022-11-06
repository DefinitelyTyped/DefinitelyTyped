import { BufferGeometry, Group, InstancedMesh, Material, Object3D, Scene, Mesh, Vector3 } from '../../../src/Three';

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

export function reduceVertices<TValue>(
    object: Object3D,
    func: (value: TValue, vertex: Vector3) => TValue,
    initialValue: TValue,
): TValue;
