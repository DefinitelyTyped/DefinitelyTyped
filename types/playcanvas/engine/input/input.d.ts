declare namespace pc {
        
        /**
         * @enum pc.EVENT
         * @name pc.EVENT_KEYDOWN
         * @description Name of event fired when a key is pressed
         */
        const EVENT_KEYDOWN = 'keydown';         
        /**
         * @enum pc.EVENT
         * @name pc.EVENT_KEYUP
         * @description Name of event fired when a key is released
         */
        const EVENT_KEYUP = 'keyup'; 
        /**
         * @enum pc.EVENT
         * @name pc.EVENT_MOUSEDOWN
         * @description Name of event fired when a mouse button is pressed
         */
        const EVENT_MOUSEDOWN = "mousedown";        
        /**
         * @enum pc.EVENT
         * @name pc.EVENT_MOUSEMOVE
         * @description Name of event fired when the mouse is moved
         */
        const EVENT_MOUSEMOVE = "mousemove";        
        /**
         * @enum pc.EVENT
         * @name pc.EVENT_MOUSEUP
         * @description Name of event fired when a mouse button is released
         */
        const EVENT_MOUSEUP = "mouseup";        
        /**
         * @enum pc.EVENT
         * @name pc.EVENT_MOUSEWHEEL
         * @description Name of event fired when the mouse wheel is rotated
         */
        const EVENT_MOUSEWHEEL = "mousewheel"; 
        /**
        * @enum pc.EVENT
        * @name pc.EVENT_TOUCHSTART
        * @description Name of event fired when a new touch occurs. For example, a finger is placed on the device.
        */
        const VENT_TOUCHSTART = 'touchstart';
        /**
        * @enum pc.EVENT
        * @name pc.EVENT_TOUCHEND
        * @description Name of event fired when touch ends. For example, a finger is lifted off the device.
        */
        const VENT_TOUCHEND = 'touchend';
        /**
        * @enum pc.EVENT
        * @name pc.EVENT_TOUCHMOVE
        * @description Name of event fired when a touch moves.
        */
        const VENT_TOUCHMOVE = 'touchmove';
        /**
        * @enum pc.EVENT
        * @name pc.EVENT_TOUCHCANCEL
        * @description Name of event fired when a touch point is interrupted in some way.
        * The exact reasons for cancelling a touch can vary from device to device.
        * For example, a modal alert pops up during the interaction; the touch point leaves the document area;
        * or there are more touch points than the device supports, in which case the earliest touch point is canceled.
        */
        const VENT_TOUCHCANCEL = 'touchcancel';

        /**
         * @enum pc.KEY
         * @name pc.KEY_BACKSPACE
         */
        const EY_BACKSPACE = 8;
        /**
         * @enum pc.KEY
         * @name pc.KEY_TAB
         */
        const EY_TAB = 9;
        /**
         * @enum pc.KEY
         * @name pc.KEY_RETURN
         */
        const KEY_RETURN = 13;
        /**
         * @enum pc.KEY
         * @name pc.KEY_ENTER
         */
        const KEY_ENTER = 13;
        /**
         * @enum pc.KEY
         * @name pc.KEY_SHIFT
         */
        const KEY_SHIFT = 16;
        /**
         * @enum pc.KEY
         * @name pc.KEY_CONTROL
         */
        const KEY_CONTROL = 17;
        /**
         * @enum pc.KEY
         * @name pc.KEY_ALT
         */
        const KEY_ALT = 18;
        /**
         * @enum pc.KEY
         * @name pc.KEY_PAUSE
         */
        const KEY_PAUSE = 19;
        /**
         * @enum pc.KEY
         * @name pc.KEY_CAPS_LOCK
         */
        const KEY_CAPS_LOCK = 20;
        /**
         * @enum pc.KEY
         * @name pc.KEY_ESCAPE
         */
        const KEY_ESCAPE = 27;
        /**
         * @enum pc.KEY
         * @name pc.KEY_SPACE
         */
        const KEY_SPACE = 32;
        /**
         * @enum pc.KEY
         * @name pc.KEY_PAGE_UP
         */
        const KEY_PAGE_UP = 33;
        /**
         * @enum pc.KEY
         * @name pc.KEY_PAGE_DOWN
         */
        const KEY_PAGE_DOWN = 34;
        /**
         * @enum pc.KEY
         * @name pc.KEY_END
         */
        const KEY_END = 35;
        /**
         * @enum pc.KEY
         * @name pc.KEY_HOME
         */
        const KEY_HOME = 36;
        /**
         * @enum pc.KEY
         * @name pc.KEY_LEFT
         */
        const KEY_LEFT = 37;
        /**
         * @enum pc.KEY
         * @name pc.KEY_UP
         */
        const KEY_UP = 38;
        /**
         * @enum pc.KEY
         * @name pc.KEY_RIGHT
         */
        const KEY_RIGHT = 39;
        /**
         * @enum pc.KEY
         * @name pc.KEY_DOWN
         */
        const KEY_DOWN = 40;
        /**
         * @enum pc.KEY
         * @name pc.KEY_PRINT_SCREEN
         */
        const KEY_PRINT_SCREEN = 44;
        /**
         * @enum pc.KEY
         * @name pc.KEY_INSERT
         */
        const KEY_INSERT = 45;
        /**
         * @enum pc.KEY
         * @name pc.KEY_DELETE
         */
        const KEY_DELETE = 46;
        /**
         * @enum pc.KEY
         * @name pc.KEY_0
         */
        const KEY_0 = 48;
        /**
         * @enum pc.KEY
         * @name pc.KEY_1
         */
        const KEY_1 = 49;
        /**
         * @enum pc.KEY
         * @name pc.KEY_2
         */
        const KEY_2 = 50;
        /**
         * @enum pc.KEY
         * @name pc.KEY_3
         */
        const KEY_3 = 51;
        /**
         * @enum pc.KEY
         * @name pc.KEY_4
         */
        const KEY_4 = 52;
        /**
         * @enum pc.KEY
         * @name pc.KEY_5
         */
        const KEY_5 = 53;
        /**
         * @enum pc.KEY
         * @name pc.KEY_6
         */
        const KEY_6 = 54;
        /**
         * @enum pc.KEY
         * @name pc.KEY_7
         */
        const KEY_7 = 55;
        /**
         * @enum pc.KEY
         * @name pc.KEY_8
         */
        const KEY_8 = 56;
        /**
         * @enum pc.KEY
         * @name pc.KEY_9
         */
        const KEY_9 = 57;

        /**
         * @enum pc.KEY
         * @name pc.KEY_SEMICOLON
         */
        const KEY_SEMICOLON = 59;
        /**
         * @enum pc.KEY
         * @name pc.KEY_EQUAL
         */
        const KEY_EQUAL = 61;

        /**
         * @enum pc.KEY
         * @name pc.KEY_A
         */
        const KEY_A = 65;
        /**
         * @enum pc.KEY
         * @name pc.KEY_B
         */
        const KEY_B = 66;
        /**
         * @enum pc.KEY
         * @name pc.KEY_C
         */
        const KEY_C = 67;
        /**
         * @enum pc.KEY
         * @name pc.KEY_D
         */
        const KEY_D = 68;
        /**
         * @enum pc.KEY
         * @name pc.KEY_E
         */
        const KEY_E = 69;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F
         */
        const KEY_F = 70;
        /**
         * @enum pc.KEY
         * @name pc.KEY_G
         */
        const KEY_G = 71;
        /**
         * @enum pc.KEY
         * @name pc.KEY_H
         */
        const KEY_H = 72;
        /**
         * @enum pc.KEY
         * @name pc.KEY_I
         */
        const KEY_I = 73;
        /**
         * @enum pc.KEY
         * @name pc.KEY_J
         */
        const KEY_J = 74;
        /**
         * @enum pc.KEY
         * @name pc.KEY_K
         */
        const KEY_K = 75;
        /**
         * @enum pc.KEY
         * @name pc.KEY_L
         */
        const KEY_L = 76;
        /**
         * @enum pc.KEY
         * @name pc.KEY_M
         */
        const KEY_M = 77;
        /**
         * @enum pc.KEY
         * @name pc.KEY_N
         */
        const KEY_N = 78;
        /**
         * @enum pc.KEY
         * @name pc.KEY_O
         */
        const KEY_O = 79;
        /**
         * @enum pc.KEY
         * @name pc.KEY_P
         */
        const KEY_P = 80;
        /**
         * @enum pc.KEY
         * @name pc.KEY_Q
         */
        const KEY_Q = 81;
        /**
         * @enum pc.KEY
         * @name pc.KEY_R
         */
        const KEY_R = 82;
        /**
         * @enum pc.KEY
         * @name pc.KEY_S
         */
        const KEY_S = 83;
        /**
         * @enum pc.KEY
         * @name pc.KEY_T
         */
        const KEY_T = 84;
        /**
         * @enum pc.KEY
         * @name pc.KEY_U
         */
        const KEY_U = 85;
        /**
         * @enum pc.KEY
         * @name pc.KEY_V
         */
        const KEY_V = 86;
        /**
         * @enum pc.KEY
         * @name pc.KEY_W
         */
        const KEY_W = 87;
        /**
         * @enum pc.KEY
         * @name pc.KEY_X
         */
        const KEY_X = 88;
        /**
         * @enum pc.KEY
         * @name pc.KEY_Y
         */
        const KEY_Y = 89;
        /**
         * @enum pc.KEY
         * @name pc.KEY_Z
         */
        const KEY_Z = 90;

        /**
         * @enum pc.KEY
         * @name pc.KEY_WINDOWS
         */
        const KEY_WINDOWS = 91;

        /**
         * @enum pc.KEY
         * @name pc.KEY_CONTEXT_MENU
         */
        const KEY_CONTEXT_MENU = 93;

        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_0
         */
        const KEY_NUMPAD_0 = 96;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_1
         */
        const KEY_NUMPAD_1 = 97;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_2
         */
        const KEY_NUMPAD_2 = 98;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_3
         */
        const KEY_NUMPAD_3 = 99;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_4
         */
        const KEY_NUMPAD_4 = 100;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_5
         */
        const KEY_NUMPAD_5 = 101;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_6
         */
        const KEY_NUMPAD_6 = 102;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_7
         */
        const KEY_NUMPAD_7 = 103;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_8
         */
        const KEY_NUMPAD_8 = 104;
        /**
         * @enum pc.KEY
         * @name pc.KEY_NUMPAD_9
         */
        const KEY_NUMPAD_9 = 105;

        /**
         * @enum pc.KEY
         * @name pc.KEY_MULTIPLY
         */
        const KEY_MULTIPLY = 106;
        /**
         * @enum pc.KEY
         * @name pc.KEY_ADD
         */
        const KEY_ADD = 107;
        /**
         * @enum pc.KEY
         * @name pc.KEY_SEPARATOR
         */
        const KEY_SEPARATOR = 108;
        /**
         * @enum pc.KEY
         * @name pc.KEY_SUBTRACT
         */
        const KEY_SUBTRACT = 109;
        /**
         * @enum pc.KEY
         * @name pc.KEY_DECIMAL
         */
        const KEY_DECIMAL = 110;
        /**
         * @enum pc.KEY
         * @name pc.KEY_DIVIDE
         */
        const KEY_DIVIDE = 111;

        /**
         * @enum pc.KEY
         * @name pc.KEY_F1
         */
        const KEY_F1 = 112;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F2
         */
        const KEY_F2 = 113;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F3
         */
        const KEY_F3 = 114;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F4
         */
        const KEY_F4 = 115;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F5
         */
        const KEY_F5 = 116;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F6
         */
        const KEY_F6 = 117;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F7
         */
        const KEY_F7 = 118;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F8
         */
        const KEY_F8 = 119;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F9
         */
        const KEY_F9 = 120;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F10
         */
        const KEY_F10 = 121;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F11
         */
        const KEY_F11 = 122;
        /**
         * @enum pc.KEY
         * @name pc.KEY_F12
         */
        const KEY_F12 = 123;

        /**
         * @enum pc.KEY
         * @name pc.KEY_COMMA
         */
        const KEY_COMMA = 188;
        /**
         * @enum pc.KEY
         * @name pc.KEY_PERIOD
         */
        const KEY_PERIOD = 190;
        /**
         * @enum pc.KEY
         * @name pc.KEY_SLASH
         */
        const KEY_SLASH = 191;
        /**
         * @enum pc.KEY
         * @name pc.KEY_OPEN_BRACKET
         */
        const KEY_OPEN_BRACKET = 219;
        /**
         * @enum pc.KEY
         * @name pc.KEY_BACK_SLASH
         */
        const KEY_BACK_SLASH = 220;
        /**
         * @enum pc.KEY
         * @name pc.KEY_CLOSE_BRACKET
         */
        const KEY_CLOSE_BRACKET = 221;

        /**
         * @enum pc.KEY
         * @name pc.KEY_META
         */
        const KEY_META = 224;
    
        /**
         * @enum pc.MOUSEBUTTON
         * @name pc.MOUSEBUTTON_NONE
         * @description No mouse buttons pressed
         */
        const MOUSEBUTTON_NONE = -1;
        /**
         * @enum pc.MOUSEBUTTON
         * @name pc.MOUSEBUTTON_LEFT
         * @description The left mouse button
         */
        const MOUSEBUTTON_LEFT = 0;
        /**
         * @enum pc.MOUSEBUTTON
         * @name pc.MOUSEBUTTON_MIDDLE
         * @description The middle mouse button
         */
        const MOUSEBUTTON_MIDDLE = 1;
        /**
         * @enum pc.MOUSEBUTTON
         * @name pc.MOUSEBUTTON_RIGHT
         * @description The right mouse button
         */
        const MOUSEBUTTON_RIGHT = 2;

        /**
        * @description Index for pad 1
        */
        const PAD_1 = 0;
        /**
        * @description Index for pad 2
        */
        const PAD_2 = 1;
        /**
        * @description Index for pad 3
        */
        const PAD_3 = 2;
        /**
        * @description Index for pad 4
        */
        const PAD_4 = 3;

        /**
        * @description The first face button, from bottom going clockwise
        */
        const PAD_FACE_1 = 0;
        /**
        * @description The second face button, from bottom going clockwise
        */
        const PAD_FACE_2 = 1;
        /**
        * @description The third face button, from bottom going clockwise
        */
        const PAD_FACE_3 = 2;
        /**
        * @description The fourth face button, from bottom going clockwise
        */
        const PAD_FACE_4 = 3;


        /**
        * @description The first shoulder button on the left
        */
        const PAD_L_SHOULDER_1 = 4;
        /**
        * @description The first shoulder button on the right
        */
        const PAD_R_SHOULDER_1 = 5;
        /**
        * @description The second shoulder button on the left
        */
        const PAD_L_SHOULDER_2 = 6;
        /**
        * @description The second shoulder button on the right
        */
        const PAD_R_SHOULDER_2 = 7;

        /**
        * @description The select button
        */
        const PAD_SELECT = 8;
        /**
        * @description The start button
        */
        const PAD_START = 9;

        /**
        * @description The button when depressing the left analogue stick
        */
        const PAD_L_STICK_BUTTON = 10;
        /**
        * @description The button when depressing the right analogue stick
        */
        const PAD_R_STICK_BUTTON = 11;

        /**
        * @description Direction pad up
        */
        const PAD_UP = 12;
        /**
        * @description Direction pad down
        */
        const PAD_DOWN = 13;
        /**
        * @description Direction pad left
        */
        const PAD_LEFT = 14;
        /**
        * @description Direction pad right
        */
        const PAD_RIGHT = 15;

        /**
        * @description Vendor specific button
        */
        const PAD_VENDOR = 16;

        /**
        * @description Horizontal axis on the left analogue stick
        */
        const PAD_L_STICK_X = 0;
        /**
        * @description Vertical axis on the left analogue stick
        */
        const PAD_L_STICK_Y = 1;
        /**
        * @description Horizontal axis on the right analogue stick
        */
        const PAD_R_STICK_X = 2;
        /**
        * @description Vertical axis on the right analogue stick
        */
        const PAD_R_STICK_Y = 3;   
}
