import { ColorRepresentation } from '../math/Color';
import { LightProbe } from './LightProbe';

export class HemisphereLightProbe extends LightProbe {
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    readonly isHemisphereLightProbe: true;
}
