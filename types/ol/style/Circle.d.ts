import { Size } from '../size';
import Fill from './Fill';
import RegularShape from './RegularShape';
import Stroke from './Stroke';

export interface Options {
    fill?: Fill | undefined;
    radius: number;
    stroke?: Stroke | undefined;
    displacement?: number[] | undefined;
    scale?: number | Size | undefined;
    rotation?: number | undefined;
    rotateWithView?: boolean | undefined;
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
