export class ScaleOverLife extends Modifier {
    constructor(...values: Array<number | FloatScatterBase>);
    update(emitter: any, particle: any, dt: any): void;
}
import { FloatScatterBase } from '../../scatters/FloatScatterBase';
import { Modifier } from '../Modifier';
