// Type definitions for WebVR API
// Project: http://mozvr.github.io/webvr-spec/webvr.html
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../geometry-dom/geometry-dom.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

declare type VREye = string;

declare module WebVRApi {
    export interface VRFieldOfViewReadOnly {
        upDegrees: number;
        rightDegrees: number;
        downDegrees: number;
        leftDegrees: number;
    }

    export interface VRFieldOfViewInit {
        upDegrees: number;
        rightDegrees: number;
        downDegrees: number;
        leftDegrees: number;
    }

    export interface VRFieldOfView extends VRFieldOfViewReadOnly {
        constructor(upDegrees:number, rightDegrees:number, downDegrees:number, leftDegrees:number): VRFieldOfView;
        upDegrees: number;
        rightDegrees: number;
        downDegrees: number;
        leftDegrees: number;
    }

    export interface VRPositionState {
        /**
         * Monotonically increasing value that allows the author to determine if position state data been updated from the hardware.
         */
        timeStamp: number;
        /**
         * True if the position attribute is valid. If false position MUST be null.
         */
        hasPosition: boolean;
        /**
         * Position of the sensor at timeStamp as a 3D vector.
         */
        position?: GeometryDom.DOMPoint;
        /**
         * Linear velocity of the sensor at timeStamp.
         */
        linearVelocity?: GeometryDom.DOMPoint;
        /**
         * Linear acceleration of the sensor at timeStamp.
         */
        linearAcceleration?: GeometryDom.DOMPoint;
        /**
         * True if the orientation attribute is valid. If false orientation MUST be null.
         */
        hasOrientation: boolean;
        /**
         * Orientation of the sensor at timeStamp as a quaternion.
         */
        orientation?: GeometryDom.DOMPoint;
        /**
         * Angular velocity of the sensor at timeStamp.
         */
        angularVelocity?: GeometryDom.DOMPoint;
        /**
         * Angular acceleration of the sensor at timeStamp.
         */
        angularAcceleration?: GeometryDom.DOMPoint;
    }

    export interface VREyeParameters {
        /**
         * Describes the minimum supported field of view for the eye.
         */
        minimumFieldOfView: VRFieldOfView;
        /**
         * Describes the maximum supported field of view for the eye.
         */
        maximumFieldOfView: VRFieldOfView;
        /**
         * Describes the recommended field of view for the eye.
         */
        recommendedFieldOfView: VRFieldOfView;
        /**
         * Offset from the center of the users head to the eye in meters.
         */
        eyeTranslation: GeometryDom.DOMPoint;
        /**
         * The current field of view for the eye, as specified by setFieldOfView.
         */
        currentFieldOfView: VRFieldOfView;
        /**
         * Describes the viewport of a canvas into which visuals for this eye should be rendered.
         */
        renderRect: GeometryDom.DOMRect;
    }

    export interface VRDevice {
        /**
         * An identifier for the distinct hardware unit that this VRDevice is a part of.
         */
        hardwareUnitId: string;
        /**
         * An identifier for this distinct sensor/device on a physical hardware device.
         */
        deviceId: string;
        /**
         * A user-readable name identifying the device.
         */
        deviceName: string;
    }
}

declare class HMDVRDevice implements WebVRApi.VRDevice {
    /**
     * An identifier for the distinct hardware unit that this VRDevice is a part of.
     */
    hardwareUnitId: string;
    /**
     * An identifier for this distinct sensor/device on a physical hardware device.
     */
    deviceId: string;
    /**
     * A user-readable name identifying the device.
     */
    deviceName: string;

    /**
     * Return the current VREyeParameters for the given eye.
     */
    getEyeParameters(whichEye: VREye): WebVRApi.VREyeParameters;
    /**
     * Set the field of view for both eyes. If
     */
    setFieldOfView(leftFOV?: WebVRApi.VRFieldOfViewInit, rightFOV?: WebVRApi.VRFieldOfViewInit, zNear?: number, zFar?: number): void;
}

declare class PositionSensorVRDevice implements WebVRApi.VRDevice {
    /**
     * An identifier for the distinct hardware unit that this VRDevice is a part of.
     */
    hardwareUnitId: string;
    /**
     * An identifier for this distinct sensor/device on a physical hardware device.
     */
    deviceId: string;
    /**
     * A user-readable name identifying the device.
     */
    deviceName: string;

    /**
     * Return a VRPositionState dictionary containing the state of this position sensor state for the current frame (if within a requestAnimationFrame context) or for the previous frame.
     */
    getState(): WebVRApi.VRPositionState;
    /**
     * Return the current instantaneous sensor state.
     */
    getImmediateState(): WebVRApi.VRPositionState;

    /**
     * Reset this sensor, treating its current position and orientation yaw as the "origin/zero" values.
     */
    resetSensor(): void;
}

interface Navigator {
    /**
     * Return a Promise which resolves to a list of available VRDevices.
     */
    getVRDevices(): Promise<Array<WebVRApi.VRDevice>>;
}

