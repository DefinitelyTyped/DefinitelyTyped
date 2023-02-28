export class ColorScatter {
    static fromObject(...values: Array<number | ColorScatterBase>): ColorScatterBase;
    constructor(startColor?: number, endColor?: number, ease?: ((arg0: number) => number) | null);
    startColor: number;
    endColor: number;
    ease: number;
    getValueAt(t: any): number;
    value: number;
}
import { ColorScatterBase } from './ColorScatterBase';
