import Emitter from "./Emitter";

export default class FollowEmitter extends Emitter {
    /**
     * The FollowEmitter class inherits from System.Emitter
     *
     * use the FollowEmitter will emit particle when mousemoving
     */
    constructor(mouseTarget?: MouseTarget, ease?: number, pObj?: object);

    initEventHandler(): void;
    /**
     * start emit particle
     */
    emit(): void;
    emit(totalEmitTimes?: number, life?: number): Emitter;
    /**
     * stop emiting
     */
    stopEmit(): void;
    /**
     * set the camera and canvas for the emitter
     */
    setCameraAndCanvas(camera: THREE.Camera, canvas: HTMLCanvasElement): void;
    /**
     * set the mouseTarget
     */
    mousemove(e: MouseEvent): void;

    /**
     * Destory this Emitter
     */
    destroy(): void;
}

export type MouseTarget = HTMLElement | Window | Document | null | undefined;
