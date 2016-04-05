// Type definitions for three.js (VREffect.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/effects/VREffect.js
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./three.d.ts" />
/// <reference path="../webvr-api/webvr-api.d.ts" />

declare namespace THREE {
    export class VREffect {
        constructor(renderer: Renderer, callback?: (params: string)=>void);
        render(scene: Scene, camera: Camera): void;
        setSize(width: number, height: number): void;
        setFullScreen(flag: boolean): void;
        startFullscreen(): void;
        FovToNDCScaleOffset(fov: VRFov): VREffectOffset;
        FovPortToProjection(fov: VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;
        FovToProjection(fov: VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;
        setVRDisplay(display: VRDisplay): void;
    }

    export interface VRFov{
        leftTan: number;
        rightTan: number;
        upTan: number;
        downTan: number;
    }

    export interface VREffectOffset{
        scale: number;
        offset: number;
    }
}
