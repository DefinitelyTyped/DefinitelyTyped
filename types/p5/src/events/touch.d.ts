// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   The touchStarted() function is called once after
     *   every time a touch is registered. If no
     *   touchStarted() function is defined, the
     *   mousePressed() function will be called instead if
     *   it is defined. Browsers may have different default
     *   behaviors attached to various touch events. To
     *   prevent any default behavior for this event, add
     *   "return false" to the end of the method.
     *   @param [event] optional TouchEvent callback
     *   argument.
     */
    touchStarted(
      event?: object
    ): void;

    /**
     *   The touchMoved() function is called every time a
     *   touch move is registered. If no touchMoved()
     *   function is defined, the mouseDragged() function
     *   will be called instead if it is defined. Browsers
     *   may have different default behaviors attached to
     *   various touch events. To prevent any default
     *   behavior for this event, add "return false" to the
     *   end of the method.
     *   @param [event] optional TouchEvent callback
     *   argument.
     */
    touchMoved(
      event?: object
    ): void;

    /**
     *   The touchEnded() function is called every time a
     *   touch ends. If no touchEnded() function is
     *   defined, the mouseReleased() function will be
     *   called instead if it is defined. Browsers may have
     *   different default behaviors attached to various
     *   touch events. To prevent any default behavior for
     *   this event, add "return false" to the end of the
     *   method.
     *   @param [event] optional TouchEvent callback
     *   argument.
     */
    touchEnded(
      event?: object
    ): void;

    /**
     *   The system variable touches[] contains an array of
     *   the positions of all current touch points,
     *   relative to (0, 0) of the canvas, and IDs
     *   identifying a unique touch as it moves. Each
     *   element in the array is an object with x, y, and
     *   id properties. The touches[] array is not
     *   supported on Safari and IE on touch-based desktops
     *   (laptops).
     */
    touches: object[];
  }
}
