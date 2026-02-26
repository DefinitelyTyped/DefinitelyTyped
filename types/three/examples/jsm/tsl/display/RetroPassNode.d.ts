import { Camera, Node, PassNode, Scene } from "three/webgpu";

export interface RetroPassNodeOptions {
    affineDistortion?: Node | null | undefined;
    filterTextures?: boolean | undefined;
}

declare class RetroPassNode extends PassNode {
    affineDistortionNode: Node | null;
    filterTextures: boolean;

    constructor(scene: Scene, camera: Camera, options?: RetroPassNodeOptions);
}

export default RetroPassNode;

export const retroPass: (scene: Scene, camera: Camera, options?: RetroPassNodeOptions) => RetroPassNode;
