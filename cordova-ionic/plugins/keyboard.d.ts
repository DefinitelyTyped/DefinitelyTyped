// Type definitions for Cordova Keyboard plugin
// Project: https://github.com/driftyco/ionic-plugins-keyboard
// Definitions by: Hendrik Maus <https://github.com/hendrikmaus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Ionic {
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
     * Force keyboard to be shown on Android.
     * This typically helps if autofocus on a text element does not pop up the keyboard automatically
     *
     * Supported Platforms: Android, Blackberry 10
     */
    show(): void;

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
