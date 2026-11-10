import { Light } from "../../lights/Light.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

export function lightShadowMatrix(light: Light): UniformNode<"mat4">;

export function lightProjectionUV(light: Light, position?: Node): Node<"vec3">;

export function lightPosition(light: Light): UniformNode<"vec3">;

export function lightTargetPosition(light: Light): UniformNode<"vec3">;

export function lightViewPosition(light: Light): Node<"vec3">;

export const lightTargetDirection: (light: Light) => Node<"vec3">;
