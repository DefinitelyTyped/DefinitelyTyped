/**
 * Creates simple navigation control instance.
 */
export function simpleNavigation(options: any): SimpleNavigation;
/**
 * Simple keyboard camera navigation with W,S,A,D and shift keys to fly around the scene.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Control options.
 */
export class SimpleNavigation {
    constructor(options: any);
    camera: any;
    speed: any;
    onactivate(): void;
    ondeactivate(): void;
    oninit(): void;
    onCameraMoveForward(): void;
    onCameraMoveBackward(): void;
    onCameraStrifeLeft(): void;
    onCameraStrifeRight(): void;
    onCameraLookUp(): void;
    onCameraLookDown(): void;
    onCameraTurnLeft(): void;
    onCameraTurnRight(): void;
    onCameraRollLeft(): void;
    onCameraRollRight(): void;
}
