import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export function lightShadowMatrix(light: Light): ShaderNodeObject<Node>;

export function lightProjectionUV(light: Light, position?: Node): ShaderNodeObject<Node>;

export function lightPosition(light: Light): ShaderNodeObject<Node>;

export function lightTargetPosition(light: Light): ShaderNodeObject<Node>;

export function lightViewPosition(light: Light): ShaderNodeObject<Node>;

export const lightTargetDirection: (light: Light) => ShaderNodeObject<Node>;
