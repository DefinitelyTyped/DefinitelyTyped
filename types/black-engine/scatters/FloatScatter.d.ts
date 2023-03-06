export class FloatScatter extends FloatScatterBase {
    static fromObject(...values: Array<number | FloatScatterBase>): FloatScatterBase;
    constructor(min?: number, max?: number, ease?: ((arg0: number) => number) | null);
    min: number;
    max: number;
    ease: (arg0: number) => number;
    getValueAt(t: number): number;
    value: number;
}
import { FloatScatterBase } from './FloatScatterBase';
