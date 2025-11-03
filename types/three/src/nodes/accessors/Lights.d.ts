import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";

export function lightShadowMatrix(light: Light): Node;

export function lightProjectionUV(light: Light, position?: Node): Node;

export function lightPosition(light: Light): Node;

export function lightTargetPosition(light: Light): Node;

export function lightViewPosition(light: Light): Node;

export const lightTargetDirection: (light: Light) => Node;
