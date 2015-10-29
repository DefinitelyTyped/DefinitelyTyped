Source : https://github.com/NTaylorMullen/CycleR/blob/master/CycleR/CycleR.Game.Client/Client/Interfaces/ThreeJS/Cameras/FirstPersonControls.d.ts

interface IFirstPersonControls {
    object: IObject3D;
    target: IVector3;
    domElement: HTMLCanvasElement;
    movementSpeed: number;
    lookSpeed: number;
    noFly: bool;
    lookVertical: bool;
    autoForward: bool;
    activeLook: bool;
    heightSpeed: bool;
    heightCoef: number;
    heightMin: number;
    constrainVertical: bool;
    verticalMin: number;
    verticalMax: number;
    autoSpeedFactor: number;
    mouseX: number;
    mouseY: number;
    lat: number;
    lon: number;
    phi: number;
    theta: number;
    moveForward: bool;
    moveBackward: bool;
    moveLeft: bool;
    moveRight: bool;
    freeze: bool;
    mouseDragOn: bool;
    update(delta?: number): void;
}
