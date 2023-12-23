import { ShaderMaterialParameters } from '../../../../src/Three.js';

import MeshStandardNodeMaterial from './MeshStandardNodeMaterial.js';
import Node from '../core/Node.js';
import CheckerNode from '../procedural/CheckerNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
    readonly isMeshPhysicalNodeMaterial: true;

    clearcoatNode: Node | null;
    clearcoatRoughnessNode: Node | null;
    clearcoatNormalNode: Node | null;

    sheenNode: Node | null;
    sheenRoughnessNode: Node | null;

    iridescenceNode: null | ShaderNodeObject<CheckerNode>;
    iridescenceIORNode: null | ShaderNodeObject<Node>;
    iridescenceThicknessNode: null | ShaderNodeObject<Node>;

    iorNode?: Node | null;

    specularIntensityNode: Node | null;
    specularColorNode: Node | null;

    transmissionNode: Node | null;
    thicknessNode: Node | null;
    attenuationDistanceNode: Node | null;
    attenuationColorNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);

    copy(source: MeshPhysicalNodeMaterial): this;
}
