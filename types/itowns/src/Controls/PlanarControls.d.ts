import * as THREE from "three";
import PlanarView from "../Core/Prefab/PlanarView";

// TODO: hidden property

// export enum keys {
//     CTRL = 17,
//     SPACE = 32,
//     T = 84,
//     Y = 89,
// }

export enum STATE {
    NONE = -1,
    DRAG = 0,
    PAN = 1,
    ROTATE = 2,
    TRAVEL = 3,
    ORTHO_ZOOM = 4,
}

export enum PLANAR_CONTROL_EVENT {
    MOVED = "moved",
}

interface PlanarControls {
    enabled: boolean;
    enableRotation: boolean;
    enableSmartTravel: boolean;
    enablePan: boolean;
    rotateSpeed: number;
    maxPanSpeed: number;
    minPanSpeed: number;
    zoomTravelTime: number;
    maxResolution: number;
    minResolution: number;
    maxAltitude: number;
    groundLevel: number;
    autoTravelTimeMin: number;
    autoTravelTimeMax: number;
    autoTravelTimeDist: number;
    smartTravelHeightMin: number;
    smartTravelHeightMax: number;
    instantTravel: number;
    minZenithAngle: number;
    maxZenithAngle: number;
    handleCollision: boolean;
}

export interface PlanarControlsOptions extends Partial<PlanarControls> {
    zoomFactor?: number;
}

declare class PlanarControls extends THREE.EventDispatcher {
    constructor(view: PlanarView, options?: {}); // TODO

    // view: PlanarView;
    // camera: THREE.Camera;
    // zoomInFactor: number;
    // zoomOutFactor: number;
    // minDistanceCollision: number;
    // state: STATE;
    // cursor: {
    //     default: string;
    //     drag: string;
    //     pan: string;
    //     travel: string;
    //     rotate: string;
    //     ortho_zoom: string;
    // };

    // dispose(): void;
    // update(dt: number, updateLoopRestarted: boolean): void;
}

export default PlanarControls;
