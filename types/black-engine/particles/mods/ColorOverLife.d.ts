export class ColorOverLife extends Modifier {
    constructor(...values: Array<number | ColorScatterBase>);
    update(emitter: any, particle: any, dt: any): void;
}
import { ColorScatterBase } from '../../scatters/ColorScatterBase';
import { Modifier } from '../Modifier';
