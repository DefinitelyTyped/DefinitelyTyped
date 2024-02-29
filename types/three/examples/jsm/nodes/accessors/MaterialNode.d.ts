import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type MaterialNodeScope =
    | typeof MaterialNode.ALPHA_TEST
    | typeof MaterialNode.COLOR
    | typeof MaterialNode.OPACITY
    | typeof MaterialNode.ROUGHNESS
    | typeof MaterialNode.METALNESS
    | typeof MaterialNode.EMISSIVE
    | typeof MaterialNode.ROTATION;

export default class MaterialNode extends Node {
    static ALPHA_TEST: "alphaTest";
    static COLOR: "color";
    static OPACITY: "opacity";
    static ROUGHNESS: "roughness";
    static METALNESS: "metalness";
    static EMISSIVE: "emissive";
    static ROTATION: "rotation";

    scope: MaterialNodeScope;
    constructor(scope?: MaterialNodeScope);
}

export const materialAlphaTest: ShaderNodeObject<MaterialNode>;
export const materialColor: ShaderNodeObject<MaterialNode>;
export const materialShininess: ShaderNodeObject<MaterialNode>;
export const materialEmissive: ShaderNodeObject<MaterialNode>;
export const materialOpacity: ShaderNodeObject<MaterialNode>;
export const materialSpecularColor: ShaderNodeObject<MaterialNode>;
export const materialReflectivity: ShaderNodeObject<MaterialNode>;
export const materialRoughness: ShaderNodeObject<MaterialNode>;
export const materialMetalness: ShaderNodeObject<MaterialNode>;
export const materialRotation: ShaderNodeObject<MaterialNode>;
