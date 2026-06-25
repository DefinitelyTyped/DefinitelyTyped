import Node from "../core/Node.js";

export type MaterialNodeScope =
    | typeof MaterialNode.ALPHA_TEST
    | typeof MaterialNode.COLOR
    | typeof MaterialNode.OPACITY
    | typeof MaterialNode.SHININESS
    | typeof MaterialNode.SPECULAR
    | typeof MaterialNode.SPECULAR_STRENGTH
    | typeof MaterialNode.SPECULAR_INTENSITY
    | typeof MaterialNode.SPECULAR_COLOR
    | typeof MaterialNode.REFLECTIVITY
    | typeof MaterialNode.ROUGHNESS
    | typeof MaterialNode.METALNESS
    | typeof MaterialNode.NORMAL
    | typeof MaterialNode.CLEARCOAT
    | typeof MaterialNode.CLEARCOAT_ROUGHNESS
    | typeof MaterialNode.CLEARCOAT_NORMAL
    | typeof MaterialNode.EMISSIVE
    | typeof MaterialNode.ROTATION
    | typeof MaterialNode.SHEEN
    | typeof MaterialNode.SHEEN_ROUGHNESS
    | typeof MaterialNode.ANISOTROPY
    | typeof MaterialNode.IRIDESCENCE
    | typeof MaterialNode.IRIDESCENCE_IOR
    | typeof MaterialNode.IRIDESCENCE_THICKNESS
    | typeof MaterialNode.IOR
    | typeof MaterialNode.TRANSMISSION
    | typeof MaterialNode.THICKNESS
    | typeof MaterialNode.ATTENUATION_DISTANCE
    | typeof MaterialNode.ATTENUATION_COLOR
    | typeof MaterialNode.LINE_SCALE
    | typeof MaterialNode.LINE_DASH_SIZE
    | typeof MaterialNode.LINE_GAP_SIZE
    | typeof MaterialNode.LINE_WIDTH
    | typeof MaterialNode.LINE_DASH_OFFSET
    | typeof MaterialNode.POINT_SIZE
    | typeof MaterialNode.DISPERSION
    | typeof MaterialNode.LIGHT_MAP
    | typeof MaterialNode.AO
    | typeof MaterialNode.REFRACTION_RATIO;

interface MaterialNodeInterface {
    scope: MaterialNodeScope;
}

declare const MaterialNode: {
    new<TNodeType>(scope: MaterialNodeScope): MaterialNode<TNodeType>;

    ALPHA_TEST: "alphaTest";
    COLOR: "color";
    OPACITY: "opacity";
    SHININESS: "shininess";
    SPECULAR: "specular";
    SPECULAR_STRENGTH: "specularStrength";
    SPECULAR_INTENSITY: "specularIntensity";
    SPECULAR_COLOR: "specularColor";
    REFLECTIVITY: "reflectivity";
    ROUGHNESS: "roughness";
    METALNESS: "metalness";
    NORMAL: "normal";
    CLEARCOAT: "clearcoat";
    CLEARCOAT_ROUGHNESS: "clearcoatRoughness";
    CLEARCOAT_NORMAL: "clearcoatNormal";
    EMISSIVE: "emissive";
    ROTATION: "rotation";
    SHEEN: "sheen";
    SHEEN_ROUGHNESS: "sheenRoughness";
    ANISOTROPY: "anisotropy";
    IRIDESCENCE: "iridescence";
    IRIDESCENCE_IOR: "iridescenceIOR";
    IRIDESCENCE_THICKNESS: "iridescenceThickness";
    IOR: "ior";
    TRANSMISSION: "transmission";
    THICKNESS: "thickness";
    ATTENUATION_DISTANCE: "attenuationDistance";
    ATTENUATION_COLOR: "attenuationColor";
    LINE_SCALE: "scale";
    LINE_DASH_SIZE: "dashSize";
    LINE_GAP_SIZE: "gapSize";
    LINE_WIDTH: "linewidth";
    LINE_DASH_OFFSET: "dashOffset";
    POINT_SIZE: "size";
    DISPERSION: "dispersion";
    LIGHT_MAP: "light";
    AO: "ao";
    REFRACTION_RATIO: "refractionRatio";
};

type MaterialNode<TNodeType> = MaterialNodeInterface & Node<TNodeType>;

export default MaterialNode;

export const materialAlphaTest: MaterialNode<"float">;
export const materialColor: MaterialNode<"vec3">;
export const materialShininess: MaterialNode<"float">;
export const materialEmissive: MaterialNode<"vec3">;
export const materialOpacity: MaterialNode<"float">;
export const materialSpecular: MaterialNode<"vec3">;

export const materialSpecularIntensity: MaterialNode<"float">;
export const materialSpecularColor: MaterialNode<"vec3">;

export const materialSpecularStrength: MaterialNode<"float">;
export const materialReflectivity: MaterialNode<"float">;
export const materialRoughness: MaterialNode<"float">;
export const materialMetalness: MaterialNode<"float">;
export const materialNormal: MaterialNode<"vec3">;
export const materialClearcoat: MaterialNode<"float">;
export const materialClearcoatRoughness: MaterialNode<"float">;
export const materialClearcoatNormal: MaterialNode<"vec3">;
export const materialRotation: MaterialNode<"float">;
export const materialSheen: MaterialNode<"vec3">;
export const materialSheenRoughness: MaterialNode<"float">;
export const materialAnisotropy: MaterialNode<"vec2">;
export const materialIridescence: MaterialNode<"float">;
export const materialIridescenceIOR: MaterialNode<"float">;
export const materialIridescenceThickness: MaterialNode<"float">;
export const materialTransmission: MaterialNode<"float">;
export const materialThickness: MaterialNode<"float">;
export const materialIOR: MaterialNode<"float">;
export const materialAttenuationDistance: MaterialNode<"float">;
export const materialAttenuationColor: MaterialNode<"vec3">;
export const materialLineScale: MaterialNode<"float">;
export const materialLineDashSize: MaterialNode<"float">;
export const materialLineGapSize: MaterialNode<"float">;
export const materialLineWidth: MaterialNode<"float">;
export const materialLineDashOffset: MaterialNode<"float">;
export const materialPointSize: MaterialNode<"float">;
export const materialDispersion: MaterialNode<"float">;
export const materialLightMap: MaterialNode<"vec3">;
export const materialAO: MaterialNode<"float">;
export const materialAnisotropyVector: Node<"vec2">;
