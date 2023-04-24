import AnalyticLightNode from './AnalyticLightNode';
import Object3DNode from '../accessors/Object3DNode';
import { HemisphereLight } from '../../../../src/Three';
import Node from '../core/Node';

export default class HemisphereLightNode extends AnalyticLightNode<HemisphereLight> {
    lightPositionNode: Object3DNode;
    lightDirectionNode: Node;

    groundColorNode: Node;

    constructor(light?: HemisphereLight | null);
}
