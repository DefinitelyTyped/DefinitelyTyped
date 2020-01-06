import { Color } from '../color';
import { ColorLike } from '../colorlike';

export interface Options {
    color?: Color | ColorLike;
}
export default class Fill {
    constructor(opt_options?: Options);
    clone(): Fill;
    getColor(): Color | ColorLike;
    setColor(color: Color | ColorLike): void;
}
