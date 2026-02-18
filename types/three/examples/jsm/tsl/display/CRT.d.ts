import { Node } from "three/webgpu";

export const barrelUV: (curvature?: Node<"float">, coord?: Node<"vec2">) => Node<"vec2">;

export const barrelMast: (coord: Node<"vec2">) => Node<"float">;

export const colorBleeding: (color: Node, amount?: Node<"float">) => Node<"vec3">;

export const scanlines: (
    color: Node<"vec3">,
    intensity?: Node<"float">,
    count?: Node<"float">,
    speed?: Node<"float">,
    coord?: Node<"vec2">,
) => Node<"vec3">;

export const vignette: (
    color: Node<"vec3">,
    intensity?: Node<"float">,
    smoothness?: Node<"float"> | number,
    coord?: Node<"vec2">,
) => Node<"vec3">;
