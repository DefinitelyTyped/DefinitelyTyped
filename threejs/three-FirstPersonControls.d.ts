// Type definitions for three.js
// Project: http://mrdoob.github.com/three.js/
// Definitions by: Poul Kjeldager Sørensen <https://github.com/s093294>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//Source : https://github.com/NTaylorMullen/CycleR/blob/master/CycleR/CycleR.Game.Client/Client/Interfaces/ThreeJS/Cameras/FirstPersonControls.d.ts

/// <reference path="./three.d.ts" />
declare namespace THREE {
    class FirstPersonControls {
        constructor(object: Camera, domElement?: HTMLElement);
        object: THREE.Object3D;
        target: THREE.Vector3;
        domElement: HTMLCanvasElement | HTMLDocument;
        enabled: boolean;
        movementSpeed: number;
        lookSpeed: number;
        noFly: boolean;
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
        update(delta: number): void;
        dispose(): void;
    }
}
