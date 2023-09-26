import * as THREE from "three";
import Coordinates from "../Core/Geographic/Coordinates";
import Extent from "../Core/Geographic/Extent";
import GlobeView from "../Core/Prefab/GlobeView";
import CameraUtils from "../Utils/CameraUtils";

// TODO: hidden properties

export enum CONTROL_EVENTS {
    PAN_CHANGED = "pan-changed",
    ORIENTATION_CHANGED = "orientation-changed",
    RANGE_CHANGED = "range-changed",
    CAMERA_TARGET_CHANGED = "camera-target-changed",
}

interface GlobeControls {
    zoomFactor: number;
    minDistance: number;
    maxDistance: number;
    minZoom: number;
    maxZoom: number;
    rotateSpeed: number;
    keyPanSpeed: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    // minAzimuthAngle: number;
    // maxAzimuthAngle: number;
    // handleCollision: boolean;
    enableDamping: boolean;
    dampingMoveFactor: number;
}

type GlobeControlsOptions = Partial<GlobeControls>;

declare class GlobeControls extends THREE.EventDispatcher<THREE.Event> {
    constructor(
        view: GlobeView,
        placement: CameraUtils.CameraTransformOptions | Extent,
        options?: GlobeControlsOptions,
    );

    // player: AnimationPlayer;
    // view: View
    // camera: THREE.Camera;
    // states: StateControl;
    // minDistanceCollision: number;
    // startEvent: {
    //     type: string;
    // };
    // endEvent: {
    //     type: string;
    // };
    // updateHelper: (position: any, helper: any) => void;

    // get dollyInScale(): number;

    // get dollyOutScale(): number;

    // get isPaused(): boolean;

    // onEndingMove(current: any): void;

    // rotateLeft(angle?: number): void;

    // rotateUp(angle?: number): void;

    // panLeft(distance: any): void;

    // panUp(distance: any): void;

    // mouseToPan(deltaX: any, deltaY: any): void;

    // dolly(delta: any): void;

    // getMinDistanceCameraBoundingSphereObbsUp(tile: any): void;

    // update(state?: any): void;

    // onStateChange(event: any): void;

    // handleRotation(event: any): void;

    // handleDrag(event: any): void;

    // handleDolly(event: any): void;

    // handlePan(event: any): void;

    // handlePanoramic(event: any): void;

    // handleEndMovement(event?: {}): void;

    // updateTarget(): void;

    // handlingEvent(current: any): void;

    // travel(event: any): Promise<any> | undefined;

    // handleZoom(event: any): void;

    // onTouchStart(event: any): void;

    // onTouchMove(event: any): void;

    // onTouchEnd(): void;

    // dispose(): void;

    setTilt(tilt: number, isAnimated: boolean): Promise<void>;

    setHeading(heading: number, isAnimated: boolean): Promise<void>;

    setRange(range: number, isAnimated: boolean): Promise<void>;

    getCameraTargetPosition(): THREE.Vector3;

    getRange(position?: THREE.Vector3): number;

    getTilt(position?: THREE.Vector3): number;

    getHeading(position?: THREE.Vector3): number;

    pan(pVector: THREE.Vector2): Promise<any>;

    getCameraOrientation(): number[];

    getCameraCoordinate(): Coordinates;

    getLookAtCoordinate(): Coordinates;

    setAnimationEnabled(enable: boolean): void;

    isAnimationEnabled(): boolean;

    getZoom(): number;

    setZoom(zoom: number, isAnimated: boolean): Promise<any>;

    getScale(pitch: number): number;

    pixelsToMeters(pixels: number, pixelPitch?: number): number;

    pixelsToDegrees(pixels: number, pixelPitch?: number): number;

    metersToPixels(value: number, pixelPitch?: number): number;

    setScale(scale: number, pitch: number, isAnimated: boolean): Promise<any>;

    lookAtCoordinate(
        params?: CameraUtils.CameraTransformOptions | Extent,
        isAnimated?: boolean,
    ): Promise<any>;

    pickGeoPosition(windowCoords: THREE.Vector3): Coordinates;
}

export default GlobeControls;
