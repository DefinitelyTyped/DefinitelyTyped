import { Light } from "../../lights/Light.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector3 } from "../../math/Vector3.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

export function lightShadowMatrix(light: Light): UniformNode<"mat4", Matrix4>;

export function lightProjectionUV(light: Light, position?: Node): Node<"vec3">;

export function lightPosition(light: Light): UniformNode<"vec3", Vector3>;

export function lightTargetPosition(light: Light): UniformNode<"vec3", Vector3>;

export function lightViewPosition(light: Light): UniformNode<"vec3", Vector3>;

export const lightTargetDirection: (light: Light) => Node<"vec3">;
