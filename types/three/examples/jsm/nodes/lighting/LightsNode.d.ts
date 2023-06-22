import { Light } from '../../../../src/Three';
import Node from '../core/Node';
import LightingNode from './LightingNode';

export default class LightsNode extends Node {
    lightNodes: LightingNode[];

    constructor(lightNodes?: LightingNode[]);

    get hasLight(): boolean;
    getLightNodeByHash(hash: string): LightingNode | null;

    fromLights(lights: Light[]): this;

    static setReference<T extends Light>(
        lightClass: { new (): T },
        lightNodeClass: { new (light: T): LightingNode },
    ): void;
}
