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
    clone(): CircleStyle;
    setRadius(radius: number): void;
}
