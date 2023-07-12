import { ShaderMaterialParameters } from '../../../../src/Three.js';
import { Swizzable, CheckerNode, Node } from '../Nodes.js';

import MeshStandardNodeMaterial from './MeshStandardNodeMaterial.js';

export default class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
    iridescenceNode: null | Swizzable<CheckerNode>;
    iridescenceIORNode: null | Swizzable;
    iridescenceThicknessNode: null | Swizzable;

    specularIntensityNode: Node | null;
    specularColorNode: Node | null;

    transmissionNode: Node | null;
    thicknessNode: Node | null;
    attenuationDistanceNode: Node | null;
    attenuationColorNode: Node | null;

    constructor(parameters: ShaderMaterialParameters);

    copy(source: MeshPhysicalNodeMaterial): this;
}
