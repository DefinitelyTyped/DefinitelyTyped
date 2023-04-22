import { HemisphereLight } from './../lights/HemisphereLight';
import { Matrix4 } from './../math/Matrix4';
import { MeshBasicMaterial } from './../materials/MeshBasicMaterial';
import { Object3D } from './../core/Object3D';
import { ColorRepresentation } from '../math/Color';

export class HemisphereLightHelper extends Object3D {
    constructor(light: HemisphereLight, size: number, color?: ColorRepresentation);

    light: HemisphereLight;
    matrix: Matrix4;
    matrixAutoUpdate: boolean;
    material: MeshBasicMaterial;

    color: ColorRepresentation | undefined;

    dispose(): void;
    update(): void;
}
