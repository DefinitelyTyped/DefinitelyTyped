import AnalyticLightNode from './AnalyticLightNode.js';
import Object3DNode from '../accessors/Object3DNode.js';
import { HemisphereLight } from '../../../../src/Three.js';
import Node from '../core/Node.js';

export default class HemisphereLightNode extends AnalyticLightNode<HemisphereLight> {
    lightPositionNode: Object3DNode;
    lightDirectionNode: Node;

    groundColorNode: Node;

    constructor(light?: HemisphereLight | null);
}
