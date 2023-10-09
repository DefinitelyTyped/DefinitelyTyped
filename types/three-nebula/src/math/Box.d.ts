import { MATH_TYPE_BOX } from "./types";

export default class Box {
    constructor(x?: number, y?: number, z?: number, w?: number, h?: number, d?: number);
    type: typeof MATH_TYPE_BOX;
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    depth: number;
    bottom: number;
    right: number;
    contains(x: number, y: number, z: number): boolean;
}
