import Node from "../core/Node.js";

export const mx_hsvtorgb: (hsv: Node) => Node<"vec3">;

export const mx_rgbtohsv: (c_immutable: Node) => Node<"vec3">;
