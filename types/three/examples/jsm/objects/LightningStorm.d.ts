import { Material, Object3D, Vector3 } from '../../../src/Three';

import { LightningStrike, RayParameters } from '../geometries/LightningStrike';

export interface StormParams {
    size?: number;
    minHeight?: number;
    maxHeight?: number;
    maxSlope?: number;

    maxLightnings?: number;

    lightningMinPeriod?: number;
    lightningMaxPeriod?: number;
    lightningMinDuration?: number;
    lightningMaxDuration?: number;

    lightningParameters?: RayParameters;
    lightningMaterial?: Material;

    isEternal?: boolean;

    onRayPosition?: (source: Vector3, dest: Vector3) => void;
    onLightningDown?: (lightning: LightningStrike) => void;
}

export class LightningStorm extends Object3D {
    constructor(stormParams?: StormParams);
    update(time: number): void;
    copy(source: LightningStorm, recursive?: boolean): this;
    clone(): this;
}
