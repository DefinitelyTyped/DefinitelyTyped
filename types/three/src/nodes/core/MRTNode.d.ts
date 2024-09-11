import { Texture } from "../../textures/Texture.js";
import { Node } from "../Nodes.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import OutputStructNode from "./OutputStructNode.js";

export function getTextureIndex(textures: ReadonlyArray<Texture>, name: string): number;

declare class MRTNode extends OutputStructNode {
    outputNodes: { [name: string]: Node };

    readonly isMRTNode: true;

    constructor(outputNodes: { [name: string]: Node });

    has(name: string): boolean;

    get(name: string): Node;

    merge(mrtNode: MRTNode): ShaderNodeObject<MRTNode>;
}

export default MRTNode;

export const mrt: (outputNodes: { [name: string]: Node }) => ShaderNodeObject<MRTNode>;
