import { Color, ColorRepresentation } from "../../math/Color.js";
declare class Color4 extends Color {
    a: number;
    constructor(color?: ColorRepresentation);
    constructor(r: number, g: number, b: number, a?: number);
    set(...args: [color: ColorRepresentation] | [r: number, g: number, b: number, a?: number]): this;
    copy(color: Color): this;
    clone(): this;
}
export default Color4;
