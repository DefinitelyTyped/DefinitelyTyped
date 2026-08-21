import { Camera, Matrix3, Scene, WebGLRenderer } from "three";

declare class AnaglyphEffect {
    colorMatrixLeft: Matrix3;

    colorMatrixRight: Matrix3;

    eyeSep: number;

    planeDistance: number;

    setSize: (width: number, height: number) => void;

    render: (scene: Scene, camera: Camera) => void;

    dispose: () => void;

    constructor(renderer: WebGLRenderer, width?: number, height?: number);
}

export { AnaglyphEffect };
