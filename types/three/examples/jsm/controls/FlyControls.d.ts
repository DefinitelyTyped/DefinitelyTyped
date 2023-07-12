import { Camera, EventDispatcher } from '../../../src/Three.js';

export class FlyControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);

    autoForward: boolean;
    domElement: HTMLElement | Document;
    dragToLook: boolean;
    enabled: boolean;
    movementSpeed: number;
    object: Camera;
    rollSpeed: number;

    dispose(): void;
    update(delta: number): void;
}
