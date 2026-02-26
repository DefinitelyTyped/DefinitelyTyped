import Node from "../core/Node.js";

type FloatOrNumber = Node<"float"> | number;

export const parabola: (x: FloatOrNumber, k: FloatOrNumber) => Node<"float">;
export const gain: (x: FloatOrNumber, k: FloatOrNumber) => Node<"float">;
export const pcurve: (x: FloatOrNumber, a: FloatOrNumber, b: FloatOrNumber) => Node<"float">;
export const sinc: (x: FloatOrNumber, k: FloatOrNumber) => Node<"float">;

export {};
