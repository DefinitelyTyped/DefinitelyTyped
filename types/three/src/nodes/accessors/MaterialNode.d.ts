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

export default class MaterialNode extends Node {
    static ALPHA_TEST: "alphaTest";
    static COLOR: "color";
    static OPACITY: "opacity";
    static SHININESS: "shininess";
    static SPECULAR: "specular";
    static SPECULAR_STRENGTH: "specularStrength";
    static SPECULAR_INTENSITY: "specularIntensity";
    static SPECULAR_COLOR: "specularColor";
    static REFLECTIVITY: "reflectivity";
    static ROUGHNESS: "roughness";
    static METALNESS: "metalness";
    static NORMAL: "normal";
    static CLEARCOAT: "clearcoat";
    static CLEARCOAT_ROUGHNESS: "clearcoatRoughness";
    static CLEARCOAT_NORMAL: "clearcoatNormal";
    static EMISSIVE: "emissive";
    static ROTATION: "rotation";
    static SHEEN: "sheen";
    static SHEEN_ROUGHNESS: "sheenRoughness";
    static ANISOTROPY: "anisotropy";
    static IRIDESCENCE: "iridescence";
    static IRIDESCENCE_IOR: "iridescenceIOR";
    static IRIDESCENCE_THICKNESS: "iridescenceThickness";
    static IOR: "ior";
    static TRANSMISSION: "transmission";
    static THICKNESS: "thickness";
    static ATTENUATION_DISTANCE: "attenuationDistance";
    static ATTENUATION_COLOR: "attenuationColor";
    static LINE_SCALE: "scale";
    static LINE_DASH_SIZE: "dashSize";
    static LINE_GAP_SIZE: "gapSize";
    static LINE_WIDTH: "linewidth";
    static LINE_DASH_OFFSET: "dashOffset";
    static POINT_SIZE: "size";
    static DISPERSION: "dispersion";
    static LIGHT_MAP: "light";
    static AO: "ao";
    static REFRACTION_RATIO: "refractionRatio";

    scope: MaterialNodeScope;
    constructor(scope?: MaterialNodeScope);
}

export const materialAlphaTest: MaterialNode;
export const materialColor: MaterialNode;
export const materialShininess: MaterialNode;
export const materialEmissive: MaterialNode;
export const materialOpacity: MaterialNode;
export const materialSpecular: MaterialNode;

export const materialSpecularIntensity: MaterialNode;
export const materialSpecularColor: MaterialNode;

export const materialSpecularStrength: MaterialNode;
export const materialReflectivity: MaterialNode;
export const materialRoughness: MaterialNode;
export const materialMetalness: MaterialNode;
export const materialNormal: Node;
export const materialClearcoat: MaterialNode;
export const materialClearcoatRoughness: MaterialNode;
export const materialClearcoatNormal: Node;
export const materialRotation: MaterialNode;
export const materialSheen: MaterialNode;
export const materialSheenRoughness: MaterialNode;
export const materialAnisotropy: MaterialNode;
export const materialIridescence: MaterialNode;
export const materialIridescenceIOR: MaterialNode;
export const materialIridescenceThickness: MaterialNode;
export const materialTransmission: MaterialNode;
export const materialThickness: MaterialNode;
export const materialIOR: MaterialNode;
export const materialAttenuationDistance: MaterialNode;
export const materialAttenuationColor: MaterialNode;
export const materialLineScale: MaterialNode;
export const materialLineDashSize: MaterialNode;
export const materialLineGapSize: MaterialNode;
export const materialLineWidth: MaterialNode;
export const materialLineDashOffset: MaterialNode;
export const materialPointSize: MaterialNode;
export const materialDispersion: MaterialNode;
export const materialLightMap: MaterialNode;
export const materialAO: MaterialNode;
export const materialAnisotropyVector: MaterialNode;
