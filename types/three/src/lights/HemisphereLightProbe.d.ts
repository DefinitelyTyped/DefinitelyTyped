import { ColorRepresentation } from '../math/Color';
import { LightProbe } from './LightProbe';

/**
 * Light probes are an alternative way of adding light to a 3D scene
 * @remarks
 * {@link HemisphereLightProbe} is the light estimation data of a single hemisphere light in the scene
 * For more information about light probes, go to {@link THREE.LightProbe | LightProbe}.
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/HemisphereLightProbe | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/HemisphereLightProbe.js | Source}
 */
export class HemisphereLightProbe extends LightProbe {
    /**
     * Creates a new HemisphereLightProbe.
     * @param skyColor An instance of Color, string representing a color or a number representing a color.
     * @param groundColor An instance of Color, string representing a color or a number representing a color.
     * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * Read-only flag to check if a given object is of type {@link HemisphereLightProbe}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isHemisphereLightProbe: true;
}
