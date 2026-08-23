import { color, float, vec2, vec3, vec4 } from "three/tsl";
import { Node } from "three/webgpu";

const v: Node<"vec3"> = vec3(1, 2, 3).mul(2);
const colorProduct: Node<"vec3"> = vec3(1, 2, 3).mul(color(1, 1, 1));
const sum: Node<"vec3"> = vec3(1, 2, 3).add(2);
const colorSum: Node<"vec3"> = vec3(1, 2, 3).add(color(1, 1, 1));

const floatColorProduct: Node<"vec3"> = float(1).mul(color(1, 1, 1));
const vec2ColorProduct: Node<"vec3"> = vec2(1, 2).mul(color(1, 1, 1));
const vec4ColorProduct: Node<"vec4"> = vec4(1, 2, 3, 4).mul(color(1, 1, 1));
