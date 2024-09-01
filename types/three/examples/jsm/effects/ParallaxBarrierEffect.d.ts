import { Camera, Scene, WebGLRenderer } from "three";

declare class ParallaxBarrierEffect {
    setSize: (width: number, height: number) => void;
    render: (scene: Scene, camera: Camera) => void;
    dispose: () => void;

    constructor(renderer: WebGLRenderer);
}

export { ParallaxBarrierEffect };
