import { Vector2 } from "../../math/Vector2.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

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
    | typeof MaterialNode.POINT_WIDTH
    | typeof MaterialNode.DISPERSION
    | typeof MaterialNode.LIGHT_MAP
    | typeof MaterialNode.AO_MAP
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
    static POINT_WIDTH: "pointWidth";
    static DISPERSION: "dispersion";
    static LIGHT_MAP: "light";
    static AO_MAP: "ao";
    static REFRACTION_RATIO: "refractionRatio";

    scope: MaterialNodeScope;
    constructor(scope?: MaterialNodeScope);
}

export const materialAlphaTest: ShaderNodeObject<MaterialNode>;
export const materialColor: ShaderNodeObject<MaterialNode>;
export const materialShininess: ShaderNodeObject<MaterialNode>;
export const materialEmissive: ShaderNodeObject<MaterialNode>;
export const materialOpacity: ShaderNodeObject<MaterialNode>;
export const materialSpecular: ShaderNodeObject<MaterialNode>;

export const materialSpecularIntensity: ShaderNodeObject<MaterialNode>;
export const materialSpecularColor: ShaderNodeObject<MaterialNode>;

export const materialSpecularStrength: ShaderNodeObject<MaterialNode>;
export const materialReflectivity: ShaderNodeObject<MaterialNode>;
export const materialRoughness: ShaderNodeObject<MaterialNode>;
export const materialMetalness: ShaderNodeObject<MaterialNode>;
export const materialNormal: ShaderNodeObject<Node>;
export const materialClearcoat: ShaderNodeObject<MaterialNode>;
export const materialClearcoatRoughness: ShaderNodeObject<MaterialNode>;
export const materialClearcoatNormal: ShaderNodeObject<Node>;
export const materialRotation: ShaderNodeObject<MaterialNode>;
export const materialSheen: ShaderNodeObject<MaterialNode>;
export const materialSheenRoughness: ShaderNodeObject<MaterialNode>;
export const materialAnisotropy: ShaderNodeObject<MaterialNode>;
export const materialIridescence: ShaderNodeObject<MaterialNode>;
export const materialIridescenceIOR: ShaderNodeObject<MaterialNode>;
export const materialIridescenceThickness: ShaderNodeObject<MaterialNode>;
export const materialTransmission: ShaderNodeObject<MaterialNode>;
export const materialThickness: ShaderNodeObject<MaterialNode>;
export const materialIOR: ShaderNodeObject<MaterialNode>;
export const materialAttenuationDistance: ShaderNodeObject<MaterialNode>;
export const materialAttenuationColor: ShaderNodeObject<MaterialNode>;
export const materialLineScale: ShaderNodeObject<MaterialNode>;
export const materialLineDashSize: ShaderNodeObject<MaterialNode>;
export const materialLineGapSize: ShaderNodeObject<MaterialNode>;
export const materialLineWidth: ShaderNodeObject<MaterialNode>;
export const materialLineDashOffset: ShaderNodeObject<MaterialNode>;
export const materialPointWidth: ShaderNodeObject<MaterialNode>;
export const materialDispersion: ShaderNodeObject<MaterialNode>;
export const materialLightMap: ShaderNodeObject<MaterialNode>;
export const materialAOMap: ShaderNodeObject<MaterialNode>;
export const materialAnisotropyVector: ShaderNodeObject<UniformNode<Vector2>>;
