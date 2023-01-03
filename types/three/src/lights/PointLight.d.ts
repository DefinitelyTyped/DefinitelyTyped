import { ColorRepresentation } from '../utils';
import { Light } from './Light';
import { PointLightShadow } from './PointLightShadow';

/**
 * @example
 * const light = new THREE.PointLight( 0xff0000, 1, 100 );
 * light.position.set( 50, 50, 50 );
 * scene.add( light );
 */
export class PointLight extends Light {
    constructor(color?: ColorRepresentation, intensity?: number, distance?: number, decay?: number);

    /**
     * @default 'PointLight'
     */
    type: string;

    /**
     * Light's intensity.
     * @default 2
     */
    intensity: number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * @default 0
     */
    distance: number;

    /**
     * If set to `true` light will cast dynamic shadows.
     * **Warning**: This is expensive and requires tweaking to get shadows looking right.
     * See the {@link PointLightShadow} for details.
     * The default is `false`.
     */
    castShadow: boolean;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.PointLightShadow()
     */
    shadow: PointLightShadow;

    power: number;
}
