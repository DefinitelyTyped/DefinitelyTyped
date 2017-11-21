// Type definitions for Apache Cordova Keyboard plugin v1.2.0
// Project: https://github.com/cjpearson/cordova-plugin-keyboard
// Definitions by:  Dan Manastireanu <https://github.com/danmana>
//                  Jochen Becker <https://github.com/jkfb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Keyboard {

    // Methods

    /**
     * Shrink the WebView when the keyboard comes up.
     *
     * Set to true to shrink the WebView when the keyboard comes up.
     * The WebView shrinks instead of the viewport shrinking and the page scrollable.
     * This applies to apps that position their elements relative to the bottom of the WebView.
     * This is the default behaviour on Android, and makes a lot of sense when building apps as opposed to webpages.
     *
     * Supported Platforms:
     *  - iOS
     *
     * Example:
     * <code>
     * Keyboard.shrinkView(true);
     * Keyboard.shrinkView(false);
     * Keyboard.shrinkView(null, function (currentValue) { console.log(currentValue); });
     * </code>
     *
     * @param shrink
     * @param successCallback A success callbackfunction
     */
    shrinkView(shrink: boolean, successCallback?: (currentValue: any) => void): void,

    /**
     * Hide the keyboard toolbar.
     *
     * Set to true to hide the additional toolbar that is on top of the keyboard.
     * This toolbar features the Prev, Next, and Done buttons.
     *
     * Supported Platforms:
     *  - iOS
     *
     * Example:
     * <code>
     * Keyboard.hideFormAccessoryBar(true);
     * Keyboard.hideFormAccessoryBar(false);
     * Keyboard.hideFormAccessoryBar(null, function (currentValue) { console.log(currentValue); });
     * </code>
     *
     * @param hide
     * @param successCallback A success callbackfunction
     */
    hideFormAccessoryBar(hide: boolean, successCallback?: (currentValue: any) => void): void,

    /**
     * Disable scrolling when the the WebView is shrunk.
     *
     * Set to true to disable scrolling when the WebView is shrunk.
     *
     * Supported Platforms:
     *  - iOS
     *
     * Example:
     * <code>
     * Keyboard.disableScrollingInShrinkView(true);
     * Keyboard.disableScrollingInShrinkView(false);
     * </code>
     *
     * @param disable
     * @param successCallback A success callbackfunction
     */
    disableScrollingInShrinkView(disable: boolean, successCallback?: (currentValue: any) => void): void,

    /**
     * Hide the keyboard
     *
     * Call this method to hide the keyboard
     *
     * Supported Platforms:
     *  - iOS
     *  - Android
     *
     * Example:
     * <code>
     * Keyboard.hide();
     * </code>
     */
    hide(): void,

    /**
     * Show the keyboard
     *
     * Call this method to show the keyboard.
     *
     * Supported Platforms:
     *  - Android
     *
     * Example:
     * <code>
     * Keyboard.show();
     * </code>
     */
    show(): void,

    // Properties

    /**
     * Determine if the keyboard is visible.
     *
     * Read this property to determine if the keyboard is visible.
     *
     * Supported Platforms:
     *  - iOS
     *
     * Example:
     * <code>
     * if (Keyboard.isVisible) {
     * // do something
     * }
     * </code>
     *
     */
    isVisible: boolean,
    /**
     * Specifies whenether content of page would be autoamtically scrolled to the top of the page when keyboard is hiding.
     *
     * Set this to true if you need that page scroll to beginning when keyboard is hiding.
     * This is allows to fix issue with elements declared with position: fixed, after keyboard is hiding.
     *
     * Supported Platforms:
     *  - iOS
     *
     * Example:
     * <code>
     *     Keyboard.automaticScrollToTopOnHiding = true;
     * </code>
     *
     */
    automaticScrollToTopOnHiding: boolean
}

interface CordovaKeyboardEvent extends Event {
    /** The height of the keyboard */
    keyboardHeight: number;
}

interface Window {
    /**
     * @param type This event is fired when keyboard fully shown.
     *
     * @param callback Function is called when keyboard is shown.
     */
    addEventListener(type: 'keyboardDidShow', callback: () => any, useCapture?: boolean): void;

    /**
     * @param type This event is fired when the keyboard is fully closed.
     *
     * @param callback Function is called when keyboard is closed.
     */
    addEventListener(type: 'keyboardDidHide', callback: () => any, useCapture?: boolean): void;

    /**
     * @param type This event fires before keyboard will be shown.
     *
     * @param callback Function is called when keyboard is about to be shown on the screen.
     */
    addEventListener(type: 'keyboardWillShow', callback: () => any, useCapture?: boolean): void;

    /**
     * @param type This event is fired when the keyboard is fully closed.
     *
     * @param callback Function is called when keyboard is about to be closed.
     */
    addEventListener(type: 'keyboardWillHide', callback: () => any, useCapture?: boolean): void;

    /**
     * @param type This event is fired when the keyboard is fully closed.
     *
     * @param callback Function is called when keyboard is about to be closed. The function is
     *                  passed an InAppBrowserEvent object as a parameter.
     */
    addEventListener(type: 'keyboardHeightWillChange', callback: (event: CordovaKeyboardEvent) => any, useCapture?: boolean): void;
}

declare var Keyboard: Keyboard;
