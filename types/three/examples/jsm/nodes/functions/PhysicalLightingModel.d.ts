import LightingModel from "../core/LightingModel.js";
import Node from "../core/Node.js";

export default class PhysicalLightingModel extends LightingModel {
    clearcoat: boolean;
    sheen: boolean;
    iridescence: boolean;
    anisotropy: boolean;
    transmission: boolean;

    clearcoatRadiance: Node | null;
    clearcoatSpecularDirect: Node | null;
    clearcoatSpecularIndirect: Node | null;
    sheenSpecularDirect: Node | null;
    sheenSpecularIndirect: Node | null;
    iridescenceFresnel: Node | null;
    iridescenceF0: Node | null;

    constructor(
        clearcoat?: boolean,
        sheen?: boolean,
        iridescence?: boolean,
        anisotropy?: boolean,
        transmission?: boolean,
    );

    computeMultiscattering(singleScatter: Node, multiScatter: Node, specularF90: Node): void;
}
