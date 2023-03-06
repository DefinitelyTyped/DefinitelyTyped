export class Oriented extends Modifier {
    constructor(angleShift?: number);
    angleShift: number;
    update(emitter: any, particle: any, dt: any): void;
}
import { Modifier } from '../Modifier';
