import * as THREE from "three";
import View from "../Core/View";
import FirstPersonControls, { FirstPersonControlsOptions } from "./FirstPersonControls";

interface StreetControls {
    wallMaxDistance: number;
    animationDurationWall: number;
    surfaceGround: THREE.Mesh;
    surfaceWall: THREE.Mesh;
    buildingsLayer?: string;
    computeTime: (distance: number) => number;
    offset: number;
    // transformationPositionPickOnTheGround: (position: number) => number;
}

export type StreetControlsOptions = Partial<StreetControls>;

declare class StreetControls extends FirstPersonControls {
    constructor(view: View, options?: StreetControlsOptions);

    readonly isStreetControls: boolean;

    // previousPosition: any;
    // currentPosition: any;
    // nextPosition: any;
    keyGoToNextPosition: number;
    keyGoToPreviousPosition: number;
    keySetCameraToCurrentPositionAndLookAtNext: number;
    keySetCameraToCurrentPositionAndLookAtPrevious: number;
    // tweenGroup: any;
    // surfaces: THREE.Object3D<THREE.Event>;
    // end: any;
    // tween: any;
    // animationFrameRequester: (() => void) | (() => void) | null | undefined;

    // setCurrentPosition(newCurrentPosition: any): void;

    // setNextPosition(newNextPosition: any): void;

    // setPreviousPosition(newPreviousPosition: any): void;

    setCameraToCurrentPosition(lookAtPrevious: boolean): void;

    setCameraOnPosition(position: THREE.Vector3, lookAt: THREE.Vector3): void;

    onClickOnGround(position: THREE.Vector3): void;

    onClickOnWall(position: THREE.Vector3): void;

    animateCameraLookAt(position: THREE.Vector3, time: number): void;

    moveCameraTo(position: THREE.Vector3, time?: number): Promise<any>;

    // stopAnimations(): void;

    moveCameraToCurrentPosition(): void;
}

export default StreetControls;
