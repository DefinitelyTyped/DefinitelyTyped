import AnalyticLightNode from './AnalyticLightNode';
import Node from '../core/Node';
import { PointLight, SpotLight } from '../../../../src/Three';

export type PunctualLight = PointLight | SpotLight;

export default class PunctualLightNode extends AnalyticLightNode<PunctualLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PunctualLight | null);
}
