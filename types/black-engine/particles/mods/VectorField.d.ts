export class VectorField extends Modifier {
    constructor(x: number, y: number, width: number, height: number, resolution?: number);
    x: number;
    y: number;
    width: number;
    height: number;
    resolution: number;
    field: any[];
    widthScaled: number;
    heightScaled: number;
    reset(): void;
    setData(fn: () => void): void;
    getVectorAt(x: number, y: number): Vector | null;
    update(emitter: any, particle: any, dt: any): void;
}
import { Modifier } from '../Modifier';
import { Vector } from '../../geom/Vector';
