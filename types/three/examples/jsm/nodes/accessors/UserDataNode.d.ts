import { NodeTypeOption, NodeUserData } from '../core/constants.js';
import ReferenceNode from './ReferenceNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class UserDataNode extends ReferenceNode<NodeUserData> {
    userData: NodeUserData | null;
    constructor(property: string, inputType: NodeTypeOption, userData?: NodeUserData | null);
}

export const userData: (
    name: string,
    inputType: NodeTypeOption,
    userData?: NodeUserData,
) => ShaderNodeObject<UserDataNode>;
