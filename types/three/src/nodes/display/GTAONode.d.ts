import { Camera } from "../../cameras/Camera.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class GTAONode extends TempNode {
    depthNode: Node;
    normalNode: Node;

    radius: ShaderNodeObject<UniformNode<number>>;
    resolution: ShaderNodeObject<UniformNode<Vector2>>;
    thickness: ShaderNodeObject<UniformNode<number>>;
    distanceExponent: ShaderNodeObject<UniformNode<number>>;
    distanceFallOff: ShaderNodeObject<UniformNode<number>>;
    scale: ShaderNodeObject<UniformNode<number>>;
    noiseNode: ShaderNodeObject<TextureNode>;

    cameraProjectionMatrix: ShaderNodeObject<UniformNode<Matrix4>>;
    cameraProjectionMatrixInverse: ShaderNodeObject<UniformNode<Matrix4>>;

    SAMPLES: ShaderNodeObject<UniformNode<number>>;

    constructor(depthNode: Node, normalNode: Node, camera: Camera);

    getTextureNode(): ShaderNodeObject<TextureNode>;

    setSize(width: number, height: number): void;
}

export default GTAONode;

export const ao: (
    depthNode: NodeRepresentation,
    normalNode: NodeRepresentation,
    camera: Camera,
) => ShaderNodeObject<GTAONode>;
