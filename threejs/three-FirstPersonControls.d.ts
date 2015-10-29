//Source : https://github.com/NTaylorMullen/CycleR/blob/master/CycleR/CycleR.Game.Client/Client/Interfaces/ThreeJS/Cameras/FirstPersonControls.d.ts
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

interface IFirstPersonControls {
    object: Object3D;
    target: Vector3;
    domElement: HTMLCanvasElement;
    movementSpeed: number;
    lookSpeed: number;
    noFly: boolean;
    lookVertical: boolean;
    autoForward: boolean;
    activeLook: boolean;
    heightSpeed: boolean;
    heightCoef: boolean;
    heightMin: boolean;
    constrainVertical: boolean;
    verticalMin: number;
    verticalMax: number;
    autoSpeedFactor: number;
    mouseX: number;
    mouseY: number;
    lat: number;
    lon: number;
    phi: number;
    theta: number;
    moveForward: boolean;
    moveBackward: boolean;
    moveLeft: boolean;
    moveRight: boolean;
    freeze: boolean;
    mouseDragOn: boolean;
    update(delta?: number): void;
}
