import { ShaderNodeObject } from "three/tsl";
import { Camera, ColorRepresentation, PassNode, Scene } from "three/webgpu";

declare class TRAAPassNode extends PassNode {
    readonly isTRAAPassNode: true;

    clearColor: ColorRepresentation;
    clearAlpha: number;

    constructor(scene: Scene, camera: Camera);
}

export default TRAAPassNode;

export const traaPass: (scene: Scene, camera: Camera) => ShaderNodeObject<TRAAPassNode>;
