export class InitialAnchor extends Modifier {
    constructor(...values: Array<number | VectorScatterBase>);
    update(emitter: any, particle: any, dt: any): void;
}
import { VectorScatterBase } from '../../scatters/VectorScatterBase';
import { Modifier } from '../Modifier';
