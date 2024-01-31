import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { JoinNode } from "../Nodes.js";
import { NodeRepresentation, ShaderNode, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export const BurnNode: (args: { base: Node; blend: Node }) => ShaderNodeObject<JoinNode>;

export const DodgeNode: (args: { base: Node; blend: Node }) => ShaderNodeObject<JoinNode>;

export const ScreenNode: (args: { base: Node; blend: Node }) => ShaderNodeObject<JoinNode>;

export const OverlayNode: (args: { base: Node; blend: Node }) => ShaderNodeObject<JoinNode>;

export type BlendMode =
    | typeof BlendModeNode.BURN
    | typeof BlendModeNode.DODGE
    | typeof BlendModeNode.SCREEN
    | typeof BlendModeNode.OVERLAY;

export default class BlendModeNode extends TempNode {
    static BURN: "burn";
    static DODGE: "dodge";
    static SCREEN: "screen";
    static OVERLAY: "overlay";

    baseNode: Node;
    blendMode: BlendMode;
    blendNode: Node;

    constructor(blendMode: BlendMode, baseNode: Node, blendNode: Node);

    setup(): Node;
}

export const burn: (baseNode: NodeRepresentation, blendNode?: NodeRepresentation) => ShaderNodeObject<BlendModeNode>;
export const dodge: (baseNode: NodeRepresentation, blendNode?: NodeRepresentation) => ShaderNodeObject<BlendModeNode>;
export const overlay: (baseNode: NodeRepresentation, blendNode?: NodeRepresentation) => ShaderNodeObject<BlendModeNode>;
export const screen: (baseNode: NodeRepresentation, blendNode?: NodeRepresentation) => ShaderNodeObject<BlendModeNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        burn: typeof burn;
        dodge: typeof dodge;
        overlay: typeof overlay;
        screen: typeof screen;
    }
}
