import { ShaderMaterialParameters } from "../../../../src/Three.js";

import Node from "../core/Node.js";
import MeshStandardNodeMaterial from "./MeshStandardNodeMaterial.js";

export default class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
    readonly isMeshPhysicalNodeMaterial: true;

    clearcoatNode: Node | null;
    clearcoatRoughnessNode: Node | null;
    clearcoatNormalNode: Node | null;

    sheenNode: Node | null;
    sheenRoughnessNode: Node | null;

    iridescenceNode: Node | null;
    iridescenceIORNode: Node | null;
    iridescenceThicknessNode: Node | null;

    iorNode?: Node | null;

    specularIntensityNode: Node | null;
    specularColorNode: Node | null;

    transmissionNode: Node | null;
    thicknessNode: Node | null;
    attenuationDistanceNode: Node | null;
    attenuationColorNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
}
