import LightingModel from "../core/LightingModel.js";
import Node from "../core/Node.js";

export default class PhysicalLightingModel extends LightingModel {
    clearcoat: boolean;
    sheen: boolean;
    iridescence: boolean;
    anisotropy: boolean;
    transmission: boolean;
    dispersion: boolean;
    retroreflection: boolean;

    clearcoatRadiance: Node | null;
    clearcoatSpecularDirect: Node | null;
    clearcoatSpecularIndirect: Node | null;
    sheenSpecularDirect: Node | null;
    sheenSpecularIndirect: Node | null;
    iridescenceFresnel: Node | null;
    iridescenceF0Dielectric: Node | null;
    iridescenceF0Metallic: Node | null;
    dfg: Node | null;
    multiScatteringCompensation: Node | null;

    constructor(
        clearcoat?: boolean,
        sheen?: boolean,
        iridescence?: boolean,
        anisotropy?: boolean,
        transmission?: boolean,
        dispersion?: boolean,
        retroreflection?: boolean,
    );

    computeMultiscattering(
        singleScatter: Node,
        multiScatter: Node,
        specularF90: Node,
        iridescenceF0?: Node | null,
    ): void;
}
