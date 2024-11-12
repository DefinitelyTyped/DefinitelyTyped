import { Camera, ColorRepresentation, Scene } from "three";
import { PassNode, ShaderNodeObject } from "three/tsl";

declare class TRAAPassNode extends PassNode {
    readonly isTRAAPassNode: true;

    clearColor: ColorRepresentation;
    clearAlpha: number;

    constructor(scene: Scene, camera: Camera);
}

export default TRAAPassNode;

export const traaPass: (scene: Scene, camera: Camera) => ShaderNodeObject<TRAAPassNode>;
