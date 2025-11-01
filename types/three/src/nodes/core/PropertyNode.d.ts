import Node from "./Node.js";

export default class PropertyNode extends Node {
    name: string | null;
    varying: boolean;

    readonly isPropertyNode: true;

    constructor(nodeType?: string | null, name?: string | null, varying?: boolean);
}

export const property: (type?: string | null, name?: string | null) => PropertyNode;
export const varyingProperty: (type?: string | null, name?: string | null) => PropertyNode;

export const diffuseColor: PropertyNode;
export const emissive: PropertyNode;
export const roughness: PropertyNode;
export const metalness: PropertyNode;
export const clearcoat: PropertyNode;
export const clearcoatRoughness: PropertyNode;
export const sheen: PropertyNode;
export const sheenRoughness: PropertyNode;
export const iridescence: PropertyNode;
export const iridescenceIOR: PropertyNode;
export const iridescenceThickness: PropertyNode;
export const alphaT: PropertyNode;
export const anisotropy: PropertyNode;
export const anisotropyT: PropertyNode;
export const anisotropyB: PropertyNode;
export const specularColor: PropertyNode;
export const specularF90: PropertyNode;
export const shininess: PropertyNode;
export const output: PropertyNode;
export const dashSize: PropertyNode;
export const gapSize: PropertyNode;
export const pointWidth: PropertyNode;
export const ior: PropertyNode;
export const transmission: PropertyNode;
export const thickness: PropertyNode;
export const attenuationDistance: PropertyNode;
export const attenuationColor: PropertyNode;
export const dispersion: PropertyNode;
