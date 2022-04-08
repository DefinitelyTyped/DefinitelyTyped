// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   The keyPressed() function is called once every
         *   time a key is pressed. The keyCode for the key
         *   that was pressed is stored in the keyCode
         *   variable.  For non-ASCII keys, use the keyCode
         *   variable. You can check if the keyCode equals
         *   BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE,
         *   SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW,
         *   LEFT_ARROW, RIGHT_ARROW.
         *
         *
         *   For ASCII keys, the key that was pressed is stored
         *   in the key variable. However, it does not
         *   distinguish between uppercase and lowercase. For
         *   this reason, it is recommended to use keyTyped()
         *   to read the key variable, in which the case of the
         *   variable will be distinguished.
         *
         *
         *   Because of how operating systems handle key
         *   repeats, holding down a key may cause multiple
         *   calls to keyTyped() (and keyReleased() as well).
         *   The rate of repeat is set by the operating system
         *   and how each computer is configured.
         *
         *
         *   Browsers may have different default behaviors
         *   attached to various key events. To prevent any
         *   default behavior for this event, add "return
         *   false" to the end of the method.
         */
        keyPressed(): void;

        /**
         *   The keyReleased() function is called once every
         *   time a key is released. See key and keyCode for
         *   more information. Browsers may have different
         *   default behaviors attached to various key events.
         *   To prevent any default behavior for this event,
         *   add "return false" to the end of the method.
         */
        keyReleased(): void;

        /**
         *   The keyTyped() function is called once every time
         *   a key is pressed, but action keys such as
         *   Backspace, Delete, Ctrl, Shift, and Alt are
         *   ignored. If you are trying to detect a keyCode for
         *   one of these keys, use the keyPressed() function
         *   instead. The most recent key typed will be stored
         *   in the key variable.  Because of how operating
         *   systems handle key repeats, holding down a key
         *   will cause multiple calls to keyTyped() (and
         *   keyReleased() as well). The rate of repeat is set
         *   by the operating system and how each computer is
         *   configured.
         *
         *
         *   Browsers may have different default behaviors
         *   attached to various key events. To prevent any
         *   default behavior for this event, add "return
         *   false" to the end of the method.
         */
        keyTyped(): void;

        /**
         *   The keyIsDown() function checks if the key is
         *   currently down, i.e. pressed. It can be used if
         *   you have an object that moves, and you want
         *   several keys to be able to affect its behaviour
         *   simultaneously, such as moving a sprite
         *   diagonally. You can put in any number representing
         *   the keyCode of the key, or use any of the variable
         *   keyCode names listed here.
         *   @param code The key to check for.
         *   @return whether key is down or not
         */
        keyIsDown(code: number): boolean;

        /**
         *   The boolean system variable keyIsPressed is true
         *   if any key is pressed and false if no keys are
         *   pressed.
         */
        keyIsPressed: boolean;

        /**
         *   The system variable key always contains the value
         *   of the most recent key on the keyboard that was
         *   typed. To get the proper capitalization, it is
         *   best to use it within keyTyped(). For non-ASCII
         *   keys, use the keyCode variable.
         */
        key: string;

        /**
         *   The variable keyCode is used to detect special
         *   keys such as BACKSPACE, DELETE, ENTER, RETURN,
         *   TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT,
         *   UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW. You
         *   can also check for custom keys by looking up the
         *   keyCode of any key on a site like this:
         *   keycode.info.
         */
        keyCode: number;
    }
}
