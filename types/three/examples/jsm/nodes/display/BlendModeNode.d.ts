import TempNode from '../core/TempNode.js';
import Node from '../core/Node.js';
import { NodeRepresentation, ShaderNode, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export const BurnNode: ShaderNode<{ base: Node; blendNode: Node }>;

export const DodgeNode: ShaderNode<{ base: Node; blendNode: Node }>;

export const ScreenNode: ShaderNode<{ base: Node; blendNode: Node }>;

export const OverlayNode: ShaderNode<{ base: Node; blendNode: Node }>;

export type BlendMode =
    | typeof BlendModeNode.BURN
    | typeof BlendModeNode.DODGE
    | typeof BlendModeNode.SCREEN
    | typeof BlendModeNode.OVERLAY;

export default class BlendModeNode extends TempNode {
    static BURN: 'burn';
    static DODGE: 'dodge';
    static SCREEN: 'screen';
    static OVERLAY: 'overlay';

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
