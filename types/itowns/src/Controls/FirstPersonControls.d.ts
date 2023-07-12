import * as THREE from "three";

import View from "../Core/View";

export interface FirstPersonControlsOptions {
    focusOnClick?: boolean;
    focusOnMouseOver?: boolean;
    moveSpeed?: number;
    verticalFOV?: number;
    panoramaRatio?: number;
    disableEventListeners?: boolean;
}

declare class FirstPersonControls extends THREE.EventDispatcher {
    constructor(view: View, options?: FirstPersonControlsOptions);

    readonly isFirstPersonControls: boolean;

    camera: THREE.Camera;
    view: View;
    moves: Set<any>; // TODO
    options: FirstPersonControlsOptions;
    // eventListeners: boolean; TODO
    focusOnMouseOver: boolean;
    focusOnClick: boolean;
    // moveCameraVertical: typeof moveCameraVerticalGlobe;

    // isUserInteracting(): boolean;

    reset(preserveRotationOnX?: boolean): void;

    update(dt: number, updateLoopRestarted: boolean, force: boolean): void;

    // onMouseDown(event: any): void;

    // onMouseUp(event: any): void;

    // onMouseMove(event: any): void;

    // onMouseWheel(event: any): void;

    // onKeyUp(e: any): void;

    // onKeyDown(e: any): void;

    // onContextMenu(event: any): void;

    // dispose(): void;
}

export default FirstPersonControls;

// declare function moveCameraVerticalGlobe(value: any): void;
