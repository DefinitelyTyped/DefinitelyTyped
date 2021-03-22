import { Color } from '../color';
import { ColorLike } from '../colorlike';

export interface Options {
    color?: Color | ColorLike;
}
export default class Fill {
    constructor(opt_options?: Options);
    /**
     * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
     */
    clone(): Fill;
    /**
     * Get the fill color.
     */
    getColor(): Color | ColorLike;
    /**
     * Set the color.
     */
    setColor(color: Color | ColorLike): void;
}
