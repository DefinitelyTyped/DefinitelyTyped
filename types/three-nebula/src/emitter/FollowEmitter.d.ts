import Emitter from './Emitter';

export default class FollowEmitter extends Emitter {
    /**
     * The FollowEmitter class inherits from System.Emitter
     *
     * use the FollowEmitter will emit particle when mousemoving
     *
     * @class System.FollowEmitter
     * @constructor
     * @param {Element?} mouseTarget mouseevent's target;
     * @param {Number?} ease the easing of following speed;
     * @default 0.7
     * @param {Object?} pObj the parameters object;
     */
    constructor(mouseTarget?: MouseTarget, ease?: number, pObj?: object);

    initEventHandler(): void;
    /**
     * start emit particle
     * @method emit
     */
    emit(): void;
    emit(totalEmitTimes?: number, life?: number): Emitter;
    /**
     * stop emiting
     * @method stopEmit
     */
    stopEmit(): void;
    /**
     * set the camera and canvas for the emitter
     * @method setCameraAndCanvas
     * @param {THREE.Camera} camera the camera of the scene
     * @param {HTMLCanvasElement} canvas the canvas of the scene
     */
    setCameraAndCanvas(camera: THREE.Camera, canvas: HTMLCanvasElement): void;
    /**
     * set the mouseTarget
     * @method setMouseTarget
     * @param {Element} mouseTarget mouseevent's target;
     */
    mousemove(e: MouseEvent): void;

    /**
     * Destory this Emitter
     * @method destroy
     */
    destroy(): void;
}

type MouseTarget = HTMLElement | Window | Document | null | undefined;
