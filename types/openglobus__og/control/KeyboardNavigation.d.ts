export function keyboardNavigation(options: any): KeyboardNavigation;
/**
 * Planet camera keyboard navigation. Use W,S,A,D and left shift key for fly around a planet.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Control options.
 */
export class KeyboardNavigation {
    constructor(options: any);
    step: any;
    oninit(): void;
    onCameraMoveForward(event: any): void;
    onCameraMoveBackward(event: any): void;
    onCameraStrifeLeft(event: any): void;
    onCameraStrifeRight(event: any): void;
    onCameraLookUp(event: any): void;
    onCameraLookDown(event: any): void;
    onCameraTurnLeft(event: any): void;
    onCameraTurnRight(event: any): void;
    onCameraRollLeft(event: any): void;
    onCameraRollRight(event: any): void;
}
