// Type definitions for Cordova Keyboard plugin
// Project: https://github.com/driftyco/ionic-plugins-keyboard
// Definitions by: Hendrik Maus <https://github.com/hendrikmaus>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Ionic {
  interface Keyboard {

    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     *
     * @param hide
     */
    hideKeyboardAccessoryBar(hide:boolean): void;

    /**
     * Close the keyboard if it is open.
     */
    close(): void;

    /**
     * Disable native scrolling, useful if you are using JavaScript to scroll
     *
     * @param disbale
     */
    disableScroll(disbale:boolean): void;

    /**
     * Whether or not the keyboard is currently visible.
     */
    isVisible: boolean;
  }
}
