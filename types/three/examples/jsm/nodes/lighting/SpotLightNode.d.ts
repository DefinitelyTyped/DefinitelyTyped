import AnalyticLightNode from './AnalyticLightNode';
import Node from '../core/Node';
import { SpotLight } from '../../../../src/Three';

export default class PointLightNode extends AnalyticLightNode<SpotLight> {
    directionNode: Node;

    coneCosNode: Node;
    penumbraCosNode: Node;

    cutoffDistanceNode: Node;
    decayExponentNode: Node;

    constructor(light?: SpotLight | null);
}
