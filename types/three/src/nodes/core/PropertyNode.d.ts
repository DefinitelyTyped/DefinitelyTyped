import Node from "./Node.js";

interface PropertyNodeInterface {
    name: string | null;
    varying: boolean;

    readonly isPropertyNode: true;
}

declare const PropertyNode: {
    new<TNodeType>(
        nodeType: TNodeType,
        name?: string | null,
        varying?: boolean,
    ): PropertyNode<TNodeType>;
};

type PropertyNode<TNodeType> = Node<TNodeType> & PropertyNodeInterface;

export default PropertyNode;

export const property: <const TNodeType>(type: TNodeType, name?: string | null) => PropertyNode<TNodeType>;
export const varyingProperty: <const TNodeType>(type: TNodeType, name?: string | null) => PropertyNode<TNodeType>;

export const diffuseColor: PropertyNode<"vec4">;
export const diffuseContribution: PropertyNode<"vec3">;
export const emissive: PropertyNode<"vec3">;
export const roughness: PropertyNode<"float">;
export const metalness: PropertyNode<"float">;
export const clearcoat: PropertyNode<"float">;
export const clearcoatRoughness: PropertyNode<"float">;
export const sheen: PropertyNode<"vec3">;
export const sheenRoughness: PropertyNode<"float">;
export const iridescence: PropertyNode<"float">;
export const iridescenceIOR: PropertyNode<"float">;
export const iridescenceThickness: PropertyNode<"float">;
export const alphaT: PropertyNode<"float">;
export const anisotropy: PropertyNode<"float">;
export const anisotropyT: PropertyNode<"vec3">;
export const anisotropyB: PropertyNode<"vec3">;
export const specularColor: PropertyNode<"color">;
export const specularColorBlended: PropertyNode<"color">;
export const specularF90: PropertyNode<"float">;
export const shininess: PropertyNode<"float">;
export const output: PropertyNode<"vec4">;
export const dashSize: PropertyNode<"float">;
export const gapSize: PropertyNode<"float">;
export const pointWidth: PropertyNode<"float">;
export const ior: PropertyNode<"float">;
export const transmission: PropertyNode<"float">;
export const thickness: PropertyNode<"float">;
export const attenuationDistance: PropertyNode<"float">;
export const attenuationColor: PropertyNode<"color">;
export const dispersion: PropertyNode<"float">;
