// Type definitions for three.js (VRControls.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/VRControls.js
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./three.d.ts" />
/// <reference path="../webvr-api/webvr-api.d.ts" />

declare namespace THREE {
    export class VRControls {
        constructor(camera: Camera, callback?: (param: string)=>void);

        /**
         * Update VR Instance Tracking
         */
        update(): void;
        zeroSensor(): void;

        scale: number;

        setVRDisplay(display: VRDisplay): void;
    }
}
