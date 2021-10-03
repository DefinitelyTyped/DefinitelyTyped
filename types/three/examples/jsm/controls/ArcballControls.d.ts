import { Object3D, Camera, Scene } from '../../../src/Three';

export class ArcballControls extends Object3D {
    camera: Camera | null;
    domElement: HTMLElement;
    scene?: Scene | null | undefined;

    /**
     * @default 500
     */
    focusAnimationTime: number;

    /**
     * @default true
     */
    enabled: boolean;

    /**
     * @default true
     */
    enablePan: boolean;

    /**
     * @default true
     */
    enableRotate: boolean;

    /**
     * @default true
     */
    enableZoom: boolean;

    /**
     * @default true
     */
    enableGizmos: boolean;

    /**
     * @default true
     */
    adjustNearFar: boolean;

    /**
     * @default 1.1
     */
    scaleFactor: number;

    /**
     * @default 25
     */
    dampingFactor: number;

    /**
     * @default 20
     */
    wMax: number; // maximum angular velocity allowed

    /**
     * @default true
     */
    enableAnimations: boolean; // if animations should be performed

    /**
     * @default false
     */
    enableGrid: boolean; // if grid should be showed during pan operation

    /**
     * @default false
     */
    cursorZoom: boolean; // if wheel zoom should be cursor centered

    /**
     * @default 5
     */
    minFov: number;

    /**
     * @default 90
     */
    maxFov: number;

    /**
     * @default 0
     */
    minDistance: number;

    /**
     * @default Infinity
     */
    maxDistance: number;

    /**
     * @default 0
     */
    minZoom: number;

    /**
     * @default Infinity
     */
    maxZoom: number;

    constructor(camera: Camera, domElement: HTMLElement, scene?: Scene | null);

    dispose(): void;
}
