import TempNode from '../core/TempNode.js';
import { ShaderNode } from '../shadernode/ShaderNodeBaseElements.js';
import { Node } from '../Nodes.js';

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
