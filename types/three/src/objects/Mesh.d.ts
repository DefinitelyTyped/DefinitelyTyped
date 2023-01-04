import { Material } from './../materials/Material';
import { Raycaster } from './../core/Raycaster';
import { Object3D } from './../core/Object3D';
import { BufferGeometry } from '../core/BufferGeometry';
import { Intersection } from '../core/Raycaster';
import { Vector3 } from '../math/Vector3';

export class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;
    readonly isMesh: true;
    type: string;

    updateMorphTargets(): void;

    /**
     * Get the current position of the indicated vertex in local space,
     * taking into account the current animation state of both morph targets and skinning.
     */
    getVertexPosition(vert: number, target: Vector3): Vector3;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
}
