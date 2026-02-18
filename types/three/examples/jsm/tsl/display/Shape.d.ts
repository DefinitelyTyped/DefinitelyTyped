import { Node } from "three/webgpu";

export const circle: (scale?: Node<"float">, softness?: Node<"float"> | number, coord?: Node<"vec2">) => Node<"float">;
