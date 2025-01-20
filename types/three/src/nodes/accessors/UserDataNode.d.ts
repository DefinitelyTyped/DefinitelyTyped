import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ReferenceNode from "./ReferenceNode.js";

export type NodeUserData = Record<string, any>;

export default class UserDataNode extends ReferenceNode<NodeUserData> {
    userData: NodeUserData | null;
    constructor(property: string, inputType: string, userData?: NodeUserData | null);
}

export const userData: (
    name: string,
    inputType: string,
    userData?: NodeUserData,
) => ShaderNodeObject<UserDataNode>;
