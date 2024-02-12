import { Camera, Vector3 } from "../../../src/Three.js";

export class FirstPersonControls {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement | Document;

    enabled: boolean;
    movementSpeed: number;
    lookSpeed: number;
    lookVertical: boolean;
    autoForward: boolean;
    activeLook: boolean;
    heightSpeed: boolean;
    heightCoef: number;
    heightMin: number;
    heightMax: number;
    constrainVertical: boolean;
    verticalMin: number;
    verticalMax: number;
    mouseDragOn: boolean;

    handleResize(): void;

    lookAt(x: Vector3): this;
    lookAt(x: number, y: number, z: number): this;

    update(delta: number): this;
    dispose(): void;
}
