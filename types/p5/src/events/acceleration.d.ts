// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   The setMoveThreshold() function is used to set the
     *   movement threshold for the deviceMoved() function.
     *   The default threshold is set to 0.5.
     *   @param value The threshold value
     */
    setMoveThreshold(
      value: number
    ): void;

    /**
     *   The setShakeThreshold() function is used to set
     *   the movement threshold for the deviceShaken()
     *   function. The default threshold is set to 30.
     *   @param value The threshold value
     */
    setShakeThreshold(
      value: number
    ): void;

    /**
     *   The deviceMoved() function is called when the
     *   device is moved by more than the threshold value
     *   along X, Y or Z axis. The default threshold is set
     *   to 0.5.
     */
    deviceMoved(): void;

    /**
     *   The deviceTurned() function is called when the
     *   device rotates by more than 90 degrees
     *   continuously.  The axis that triggers the
     *   deviceTurned() method is stored in the turnAxis
     *   variable. The deviceTurned() method can be locked
     *   to trigger on any axis: X, Y or Z by comparing the
     *   turnAxis variable to 'X', 'Y' or 'Z'.
     */
    deviceTurned(): void;

    /**
     *   The deviceShaken() function is called when the
     *   device total acceleration changes of accelerationX
     *   and accelerationY values is more than the
     *   threshold value. The default threshold is set to
     *   30.
     */
    deviceShaken(): void;

    /**
     *   The system variable deviceOrientation always
     *   contains the orientation of the device. The value
     *   of this variable will either be set 'landscape' or
     *   'portrait'. If no data is available it will be set
     *   to 'undefined'. either LANDSCAPE or PORTRAIT.
     */
    deviceOrientation: UNKNOWN_P5_CONSTANT;

    /**
     *   The system variable accelerationX always contains
     *   the acceleration of the device along the x axis.
     *   Value is represented as meters per second squared.
     */
    accelerationX: number;

    /**
     *   The system variable accelerationY always contains
     *   the acceleration of the device along the y axis.
     *   Value is represented as meters per second squared.
     */
    accelerationY: number;

    /**
     *   The system variable accelerationZ always contains
     *   the acceleration of the device along the z axis.
     *   Value is represented as meters per second squared.
     */
    accelerationZ: number;

    /**
     *   The system variable pAccelerationX always contains
     *   the acceleration of the device along the x axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    pAccelerationX: number;

    /**
     *   The system variable pAccelerationY always contains
     *   the acceleration of the device along the y axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    pAccelerationY: number;

    /**
     *   The system variable pAccelerationZ always contains
     *   the acceleration of the device along the z axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    pAccelerationZ: number;

    /**
     *   The system variable rotationX always contains the
     *   rotation of the device along the x axis. Value is
     *   represented as 0 to +/-180 degrees.  Note: The
     *   order the rotations are called is important, ie.
     *   if used together, it must be called in the order
     *   Z-X-Y or there might be unexpected behaviour.
     */
    rotationX: number;

    /**
     *   The system variable rotationY always contains the
     *   rotation of the device along the y axis. Value is
     *   represented as 0 to +/-90 degrees.  Note: The
     *   order the rotations are called is important, ie.
     *   if used together, it must be called in the order
     *   Z-X-Y or there might be unexpected behaviour.
     */
    rotationY: number;

    /**
     *   The system variable rotationZ always contains the
     *   rotation of the device along the z axis. Value is
     *   represented as 0 to 359 degrees.  Unlike rotationX
     *   and rotationY, this variable is available for
     *   devices with a built-in compass only.
     *
     *
     *   Note: The order the rotations are called is
     *   important, ie. if used together, it must be called
     *   in the order Z-X-Y or there might be unexpected
     *   behaviour.
     */
    rotationZ: number;

    /**
     *   The system variable pRotationX always contains the
     *   rotation of the device along the x axis in the
     *   frame previous to the current frame. Value is
     *   represented as 0 to +/-180 degrees.  pRotationX
     *   can also be used with rotationX to determine the
     *   rotate direction of the device along the X-axis.
     */
    pRotationX: number;

    /**
     *   The system variable pRotationY always contains the
     *   rotation of the device along the y axis in the
     *   frame previous to the current frame. Value is
     *   represented as 0 to +/-90 degrees.  pRotationY can
     *   also be used with rotationY to determine the
     *   rotate direction of the device along the Y-axis.
     */
    pRotationY: number;

    /**
     *   The system variable pRotationZ always contains the
     *   rotation of the device along the z axis in the
     *   frame previous to the current frame. Value is
     *   represented as 0 to 359 degrees.  pRotationZ can
     *   also be used with rotationZ to determine the
     *   rotate direction of the device along the Z-axis.
     */
    pRotationZ: number;
    turnAxis: string;
  }
}
