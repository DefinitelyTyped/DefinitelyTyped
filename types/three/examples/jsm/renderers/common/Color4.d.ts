import { Color, ColorRepresentation } from "../../../../src/math/Color.ts";

export default class Color4 extends Color {
    constructor(r: number, g: number, b: number, a?: number);

    set(...args: [color: ColorRepresentation] | [r: number, g: number, b: number, a?: number]): this;

    clone(): this;
}
