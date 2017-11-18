/// <reference types="webvr-api" />

import { Camera } from "./three-core";

export class VRControls {
    constructor(camera: Camera, callback?: (param: string) => void);

    /**
     * Update VR Instance Tracking
     */
    update(): void;

    zeroSensor(): void;

    scale: number;

    setVRDisplay(display: VRDisplay): void;
}
