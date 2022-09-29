export class GraphicsLinearGradient extends GraphicsGradient {
    constructor(x0: number, y0: number, x1: number, y1: number);
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    isAbsolute: boolean;
    addColorStop(percent: any, color: any): void;
    clone(): GraphicsLinearGradient;
}
import { GraphicsGradient } from './GraphicsGradient';
