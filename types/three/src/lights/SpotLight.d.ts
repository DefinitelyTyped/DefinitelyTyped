import { Color } from './../math/Color';
import { Vector3 } from '../math/Vector3';
import { Object3D } from './../core/Object3D';
import { SpotLightShadow } from './SpotLightShadow';
import { Light } from './Light';
import { ColorRepresentation } from '../utils';
import { Texture } from '../textures/Texture';

/**
 * A point light that can cast shadow in one direction.
 */
export class SpotLight extends Light {
    constructor(
        color?: ColorRepresentation,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );

    /**
     * @default 'SpotLight'
     */
    type: string;

    /**
     * This is set equal to {@link Object3D.DEFAULT_UP} (0, 1, 0), so that the light shines from the top down.
     *
     * @default {@link Object3D.DEFAULT_UP}
     */
    position: Vector3;

    /**
     * Spotlight focus points at target.position.
     * @default new THREE.Object3D()
     */
    target: Object3D;

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
     * Maximum extent of the spotlight, in radians, from its direction.
     * @default Math.PI / 3.
     */
    angle: number;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.SpotLightShadow()
     */
    shadow: SpotLightShadow;
    power: number;

    /**
     * @default 0
     */
    penumbra: number;

    /**
     * @default null
     */
    map: Texture | null;

    readonly isSpotLight: true;
}
