import AnalyticLightNode from './AnalyticLightNode';
import Node from '../core/Node';
import { PointLight } from '../../../../src/Three';

export default class PointLightNode extends AnalyticLightNode<PointLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PointLight | null);
}
