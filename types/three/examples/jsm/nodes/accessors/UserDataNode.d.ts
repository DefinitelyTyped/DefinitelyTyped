import { NodeTypeOption, NodeUserData } from '../core/constants';
import ReferenceNode from './ReferenceNode';

export default class UserDataNode extends ReferenceNode<NodeUserData> {
    userData: NodeUserData | null;
    constructor(property: string, inputType: NodeTypeOption, userData?: NodeUserData | null);
}
