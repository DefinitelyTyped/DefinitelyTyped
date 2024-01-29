import * as THREE from "three";
import View from "../Core/View";

export interface FlyControlsOptions {
    focusOnClick?: boolean;
    focusOnMouseOver?: boolean;
}

declare class FlyControls extends THREE.EventDispatcher {
    constructor(view: View, options?: FlyControlsOptions);

    view: View;
    options: FlyControlsOptions;
    moves: Set<any>; // TODO
    moveSpeed: number;

    // isUserInteracting(): boolean;
    // update(dt: number, updateLoopRestarted: boolean): void;
}

export default FlyControls;
