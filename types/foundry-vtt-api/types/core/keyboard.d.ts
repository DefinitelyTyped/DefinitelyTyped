declare const KEYS: {
    BACKSPACE: 8;
    TAB: 9;
    ENTER: 13;
    SHIFT: 16;
    CTRL: 17;
    ALT: 18;
    ESC: 27;
    SPACE: 32;
    LEFT: 37;
    UP: 38;
    RIGHT: 39;
    DOWN: 40;
    DELETE: 46;
    A: 65;
    D: 68;
    S: 83;
    W: 87;
    Z: 90;
    C: 67;
    V: 86;
    NUM1: 97;
    NUM2: 98;
    NUM3: 99;
    NUM4: 100;
    NUM5: 101;
    NUM6: 102;
    NUM7: 103;
    NUM8: 104;
    NUM9: 105;
    F5: 116;
};

declare class KeyboardManager {
    /** A mapping of known key codes */
    keys: any;

    /** The set of key codes which should be captured */
    codes: Set<number>;

    /**
     * Specify a rate limit for mouse wheel to gate repeated scrolling.
     * This is especially important for continuous scrolling mice which emit hundreds of events per second.
     * This designates a minimum number of milliseconds which must pass before another wheel event is handled
     */
    MOUSE_WHEEL_RATE_LIMIT: number;

    constructor();

    /**
     * Return whether the keyCode is currently in the DOWN state
     * @param keyCode	The key code to test
     */
    isDown(keyCode: number): boolean;

    /**
     * A helper method to test whether, given an Event, the CTRL (or CMD) keys are pressed
     * @param event
     */
    isCtrl(event: Event): boolean;

    get moveKeys(): number;

    get hasFocus(): boolean;
}
