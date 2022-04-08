import Fill from './Fill';
import RegularShape from './RegularShape';
import Stroke from './Stroke';

export interface Options {
    fill?: Fill;
    radius: number;
    stroke?: Stroke;
    displacement?: number[];
}
export default class CircleStyle extends RegularShape {
    constructor(opt_options?: Options);
    /**
     * Clones the style.
     */
    clone(): CircleStyle;
    /**
     * Set the circle radius.
     */
    setRadius(radius: number): void;
}
