import BlendMode from "../../renderers/common/BlendMode.js";
import { Texture } from "../../textures/Texture.js";
import { Node } from "../Nodes.js";
import OutputStructNode from "./OutputStructNode.js";

export function getTextureIndex(textures: ReadonlyArray<Texture>, name: string): number;

declare class MRTNode extends OutputStructNode {
    outputNodes: { [name: string]: Node };

    blendModes: { [name: string]: BlendMode };

    readonly isMRTNode: true;

    constructor(outputNodes: { [name: string]: Node });

    setBlendMode(name: string, blend: BlendMode): this;

    getBlendMode(name: string): BlendMode;

    has(name: string): boolean;

    get: (name: string) => Node;

    merge(mrtNode: MRTNode): MRTNode;
}

export default MRTNode;

export const mrt: (outputNodes: { [name: string]: Node }) => MRTNode;
