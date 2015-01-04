// Type definitions for Keyboard Cordova module to use with Ionic Framework (1.0.0-beta.13+)
// Project: https://github.com/driftyco/ionic
// Definitions by: Bosa Daniele <https://github.com/danibo86/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="ionic.d.ts" />

interface Cordova
{
    plugins: Plugins;
}

interface Plugins
{
    Keyboard: Ionic.Keyboard;
}

declare module Ionic
{
    interface Keyboard
    {
        /**
         * Hide the keyboard accessory bar with the next, previous and done buttons.
         *
         * @param hide
         */
        hideKeyboardAccessoryBar(hide: boolean): void;

        /**
         * Close the keyboard if it is open.
         */
        close(): void;

        /**
         * Disable native scrolling, useful if you are using JavaScript to scroll
         *
         * @param disbale
         */
        disableScroll(disable: boolean): void;

        /**
         * Whether or not the keyboard is currently visible.
         */
        isVisible: boolean;
    }
}
