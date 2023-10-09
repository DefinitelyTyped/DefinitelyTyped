import * as THREE from "three";
import Coordinates from "../Core/Geographic/Coordinates";

declare namespace _default {
    interface Attitude {
        omega: number;
        phi: number;
        kappa: number;
        roll: number;
        pitch: number;
        heading: number;
    }

    function quaternionFromRollPitchHeading(
        roll?: number,
        pitch?: number,
        heading?: number,
        target?: THREE.Quaternion,
    ): THREE.Quaternion;

    function quaternionFromOmegaPhiKappa(
        omega?: number,
        phi?: number,
        kappa?: number,
        target?: THREE.Quaternion,
    ): THREE.Quaternion;

    function quaternionFromAttitude(
        attitude: Attitude,
        target?: THREE.Quaternion,
    ): THREE.Quaternion;

    type FunctionOrQuaternion = any; // TODO

    interface Projection {
        projName: string;
    }

    function quaternionFromEnuToGeocent(
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromGeocentToEnu(
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromLCCToEnu(
        proj: Projection,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromEnuToLCC(
        proj: Projection,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromTMercToEnu(
        proj: Projection,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromEnuToTMerc(
        proj: Projection,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromLongLatToEnu(
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromEnuToLongLat(
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionUnimplemented(
        proj: Projection,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromEnuToCRS(
        crsOrProj: string | Projection,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromCRSToEnu(
        crsOrProj: string | Projection,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;

    function quaternionFromCRSToCRS(
        crsIn: string,
        crsOut: string,
        coordinates?: Coordinates,
        target?: THREE.Quaternion,
    ): FunctionOrQuaternion;
}
export default _default;
