import { Material, MaterialParameters } from './Material';
import { Color } from './../math/Color';
import { Texture } from './../textures/Texture';

export interface PointsMaterialParameters extends MaterialParameters {
    color?: Color | string | number | undefined;
    map?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    size?: number | undefined;
    sizeAttenuation?: boolean | undefined;
    morphTargets?: boolean | undefined;
}

export class PointsMaterial extends Material {
    constructor(parameters?: PointsMaterialParameters);

    /**
     * @default 'PointsMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 1
     */
    size: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    setValues(parameters: PointsMaterialParameters): void;
}
