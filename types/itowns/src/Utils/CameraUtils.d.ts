import * as THREE from "three";
import Coordinates from "../Core/Geographic/Coordinates";
import Extent from "../Core/Geographic/Extent";
import View from "../Core/View";

// export function getLookAtFromMath(view: any, camera: any): any;
// export function getrig(camera: any): any;

declare namespace _default {
    interface CameraTransformOptions {
        coord?: Coordinates;
        tilt?: number;
        heading?: number;
        range?: number;
        time?: number;
        proxy?: boolean;
        easing?: number;
        callback?: any; // TODO: type callback
        stopPlaceOnGroundAtEnd?: boolean;
    }

    const defaultStopPlaceOnGroundAtEnd: boolean;
    // const Easing: TWEEN.Easing;

    function stop(view: View, camera: THREE.Camera): void;

    function getTransformCameraLookingAtTarget(
        view: View,
        camera: THREE.Camera,
        target?: THREE.Vector3,
    ): CameraTransformOptions;

    function transformCameraToLookAtTarget(
        view: View,
        camera: THREE.Camera,
        params?: CameraTransformOptions,
    ): Promise<CameraTransformOptions>;

    function getCameraTransformOptionsFromExtent(
        view: View,
        camera: THREE.Camera,
        extent: Extent,
    ): CameraTransformOptions;

    function animateCameraToLookAtTarget(
        view: View,
        camera: THREE.Camera,
        params?: CameraTransformOptions,
    ): Promise<CameraTransformOptions>;

    function sequenceAnimationsToLookAtTarget(
        view: View,
        camera: THREE.Camera,
        params?: CameraTransformOptions[],
    ): Promise<CameraTransformOptions>;

    function getDiffParams(
        first: CameraTransformOptions,
        second: CameraTransformOptions,
    ): CameraTransformOptions;
}
export default _default;
