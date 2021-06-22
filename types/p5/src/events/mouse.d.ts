// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   The mouseMoved() function is called every time the
         *   mouse moves and a mouse button is not pressed.
         *   Browsers may have different default behaviors
         *   attached to various mouse events. To prevent any
         *   default behavior for this event, add "return
         *   false" to the end of the method.
         *   @param [event] optional MouseEvent callback
         *   argument.
         */
        mouseMoved(event?: object): void;

        /**
         *   The mouseDragged() function is called once every
         *   time the mouse moves and a mouse button is
         *   pressed. If no mouseDragged() function is defined,
         *   the touchMoved() function will be called instead
         *   if it is defined. Browsers may have different
         *   default behaviors attached to various mouse
         *   events. To prevent any default behavior for this
         *   event, add "return false" to the end of the
         *   method.
         *   @param [event] optional MouseEvent callback
         *   argument.
         */
        mouseDragged(event?: object): void;

        /**
         *   The mousePressed() function is called once after
         *   every time a mouse button is pressed. The
         *   mouseButton variable (see the related reference
         *   entry) can be used to determine which button has
         *   been pressed. If no mousePressed() function is
         *   defined, the touchStarted() function will be
         *   called instead if it is defined. Browsers may have
         *   different default behaviors attached to various
         *   mouse events. To prevent any default behavior for
         *   this event, add "return false" to the end of the
         *   method.
         *   @param [event] optional MouseEvent callback
         *   argument.
         */
        mousePressed(event?: object): void;

        /**
         *   The mouseReleased() function is called every time
         *   a mouse button is released. If no mouseReleased()
         *   function is defined, the touchEnded() function
         *   will be called instead if it is defined. Browsers
         *   may have different default behaviors attached to
         *   various mouse events. To prevent any default
         *   behavior for this event, add "return false" to the
         *   end of the method.
         *   @param [event] optional MouseEvent callback
         *   argument.
         */
        mouseReleased(event?: object): void;

        /**
         *   The mouseClicked() function is called once after a
         *   mouse button has been pressed and then released.
         *   Browsers handle clicks differently, so this
         *   function is only guaranteed to be run when the
         *   left mouse button is clicked. To handle other
         *   mouse buttons being pressed or released, see
         *   mousePressed() or mouseReleased().
         *
         *
         *   Browsers may have different default behaviors
         *   attached to various mouse events. To prevent any
         *   default behavior for this event, add "return
         *   false" to the end of the method.
         *   @param [event] optional MouseEvent callback
         *   argument.
         */
        mouseClicked(event?: object): void;

        /**
         *   The doubleClicked() function is executed every
         *   time a event listener has detected a dblclick
         *   event which is a part of the DOM L3 specification.
         *   The doubleClicked event is fired when a pointing
         *   device button (usually a mouse's primary button)
         *   is clicked twice on a single element. For more
         *   info on the dblclick event refer to mozilla's
         *   documentation here:
         *   https://developer.mozilla.org/en-US/docs/Web/Events/dblclick
         *   @param [event] optional MouseEvent callback
         *   argument.
         */
        doubleClicked(event?: object): void;

        /**
         *   The function mouseWheel() is executed every time a
         *   vertical mouse wheel event is detected either
         *   triggered by an actual mouse wheel or by a
         *   touchpad. The event.delta property returns the
         *   amount the mouse wheel have scrolled. The values
         *   can be positive or negative depending on the
         *   scroll direction (on OS X with "natural" scrolling
         *   enabled, the signs are inverted).
         *
         *
         *   Browsers may have different default behaviors
         *   attached to various mouse events. To prevent any
         *   default behavior for this event, add "return
         *   false" to the end of the method.
         *
         *
         *   Due to the current support of the "wheel" event on
         *   Safari, the function may only work as expected if
         *   "return false" is included while using Safari.
         *   @param [event] optional WheelEvent callback
         *   argument.
         */
        mouseWheel(event?: object): void;

        /**
         *   The function requestPointerLock() locks the pointer to
         *   its current position and makes it invisible. Use [movedX]
         *   and [movedY] to get the difference the mouse was moved
         *   since the last call of draw.
         *
         *   Note that not all browsers support this feature. This enables
         *   you to create experiences that aren't limited by the mouse
         *   moving out of the screen even if it is repeatedly moved into
         *   one direction. For example, a first person perspective experience.
         */
        requestPointerLock(): void;

        /**
         *   The function exitPointerLock() exits a previously triggered
         *   pointer Lock for example to make ui elements usable etc.
         */
        exitPointerLock(): void;

        /**
         *   The system variable mouseX always contains the
         *   current horizontal position of the mouse, relative
         *   to (0, 0) of the canvas. The value at the top-left
         *   corner is (0, 0) for 2-D and (-width/2, -height/2)
         *   for WebGL. If touch is used instead of mouse
         *   input, mouseX will hold the x value of the most
         *   recent touch point.
         */
        mouseX: number;

        /**
         *   The system variable mouseY always contains the
         *   current vertical position of the mouse, relative
         *   to (0, 0) of the canvas. The value at the top-left
         *   corner is (0, 0) for 2-D and (-width/2, -height/2)
         *   for WebGL. If touch is used instead of mouse
         *   input, mouseY will hold the y value of the most
         *   recent touch point.
         */
        mouseY: number;

        /**
         *   The system variable pmouseX always contains the
         *   horizontal position of the mouse or finger in the
         *   frame previous to the current frame, relative to
         *   (0, 0) of the canvas. The value at the top-left
         *   corner is (0, 0) for 2-D and (-width/2, -height/2)
         *   for WebGL. Note: pmouseX will be reset to the
         *   current mouseX value at the start of each touch
         *   event.
         */
        pmouseX: number;

        /**
         *   The system variable pmouseY always contains the
         *   vertical position of the mouse or finger in the
         *   frame previous to the current frame, relative to
         *   (0, 0) of the canvas. The value at the top-left
         *   corner is (0, 0) for 2-D and (-width/2, -height/2)
         *   for WebGL. Note: pmouseY will be reset to the
         *   current mouseY value at the start of each touch
         *   event.
         */
        pmouseY: number;

        /**
         *   The system variable winMouseX always contains the
         *   current horizontal position of the mouse, relative
         *   to (0, 0) of the window.
         */
        winMouseX: number;

        /**
         *   The system variable winMouseY always contains the
         *   current vertical position of the mouse, relative
         *   to (0, 0) of the window.
         */
        winMouseY: number;

        /**
         *   The system variable pwinMouseX always contains the
         *   horizontal position of the mouse in the frame
         *   previous to the current frame, relative to (0, 0)
         *   of the window. Note: pwinMouseX will be reset to
         *   the current winMouseX value at the start of each
         *   touch event.
         */
        pwinMouseX: number;

        /**
         *   The system variable pwinMouseY always contains the
         *   vertical position of the mouse in the frame
         *   previous to the current frame, relative to (0, 0)
         *   of the window. Note: pwinMouseY will be reset to
         *   the current winMouseY value at the start of each
         *   touch event.
         */
        pwinMouseY: number;

        /**
         *
         * The variable movedX contains the horizontal movement of the mouse since the last frame
         * @readOnly
         */
        readonly movedX: number;

        /**
         * The variable movedY contains the vertical movement of the mouse since the last frame
         * @readOnly
         */
        readonly movedY: number;

        /**
         *   Processing automatically tracks if the mouse
         *   button is pressed and which button is pressed. The
         *   value of the system variable mouseButton is either
         *   LEFT, RIGHT, or CENTER depending on which button
         *   was pressed last. Warning: different browsers may
         *   track mouseButton differently.
         */
        mouseButton: UNKNOWN_P5_CONSTANT;

        /**
         *   The boolean system variable mouseIsPressed is true
         *   if the mouse is pressed and false if not.
         */
        mouseIsPressed: boolean;
    }
}
