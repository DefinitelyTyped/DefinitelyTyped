import { BufferGeometry, InstancedMesh, Material, Matrix4 } from "three";

export class InstancedMeshGenerator<TParameters = unknown> {
    constructor(
        parameters: Partial<TParameters>,
        createGeometry: (parameters: TParameters) => BufferGeometry,
        createMaterial: () => Material,
        name: string,
        receiveShadow?: boolean,
    );

    parameters: TParameters;

    geometry: BufferGeometry | null;
    material: Material | null;
    mesh: InstancedMesh | null;

    build(placements: Matrix4[]): InstancedMesh;
    dispose(): void;
}

export function createInstances(
    geometry: BufferGeometry,
    material: Material,
    count: number,
    name: string,
): InstancedMesh;

export function updateInstances(mesh: InstancedMesh, placements: Matrix4[]): void;
