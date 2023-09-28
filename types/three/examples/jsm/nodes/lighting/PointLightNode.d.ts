import AnalyticLightNode from './AnalyticLightNode.js';
import Node from '../core/Node.js';
import { PointLight } from '../../../../src/Three.js';

export default class PointLightNode extends AnalyticLightNode<PointLight> {
    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: PointLight | null);
}
