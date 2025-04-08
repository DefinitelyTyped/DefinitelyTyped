import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Data3DTexture, Node, TempNode, Texture3DNode, UniformNode } from "three/webgpu";

declare class Lut3DNode extends TempNode {
    inputNode: Node;
    lutNode: Texture3DNode;
    size: ShaderNodeObject<UniformNode<number>>;
    intensityNode: UniformNode<number>;

    constructor(inputNode: Node, lutNode: UniformNode<Data3DTexture>, size: number, intensityNode: UniformNode<number>);
}

export default Lut3DNode;

export const lut3D: (
    node: NodeRepresentation,
    lut: NodeRepresentation,
    size: number,
    intensity: NodeRepresentation,
) => ShaderNodeObject<Lut3DNode>;
