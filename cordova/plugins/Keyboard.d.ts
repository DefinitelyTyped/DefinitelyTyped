// Type definitions for Apache Cordova Keyboard plugin v0.1.2
// Project: https://github.com/apache/cordova-plugins/tree/master/keyboard
// Definitions by: Dan Manastireanu <https://github.com/danmana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The Keyboard object provides some functions to customize the iOS keyboard.
 *
 * <i>Supported Platforms: iOS</i>
 *
 * This plugin has only been tested in Cordova 3.2 or greater,
 * and its use in previous Cordova versions is not recommended
 * (potential conflict with keyboard customization code present in the core in previous Cordova versions).
 *
 * If you do use this plugin in an older Cordova version (again, not recommended),
 * you have to make sure the HideKeyboardFormAccessoryBar and KeyboardShrinksView preference values are always false,
 * and only use the API functions to turn things on/off.
 *
 * This plugin supports the HideKeyboardFormAccessoryBar (boolean)
 * and KeyboardShrinksView (boolean) preferences in config.xml.
 *
 * Permissions in config.xml
 * <code>
 *     <feature name="Keyboard">
 *         <param name="ios-package" value="CDVKeyboard" onload="true" />
 *     </feature>
 * </code>
 *
 */
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
     * Example:
     * <code>
     * Keyboard.shrinkView(true);
     * Keyboard.shrinkView(false);
     * </code>
     *
     * @param shrink
     */
    shrinkView(shrink:boolean): void,

    /**
     * Hide the keyboard toolbar.
     *
     * Set to true to hide the additional toolbar that is on top of the keyboard.
     * This toolbar features the Prev, Next, and Done buttons.
     *
     * Example:
     * <code>
     * Keyboard.hideFormAccessoryBar(true);
     * Keyboard.hideFormAccessoryBar(false);
     * </code>
     *
     * @param hide
     */
    hideFormAccessoryBar(hide:boolean): void,

    /**
     * Disable scrolling when the the WebView is shrunk.
     *
     * Set to true to disable scrolling when the WebView is shrunk.
     *
     * Example:
     * <code>
     * Keyboard.disableScrollingInShrinkView(true);
     * Keyboard.disableScrollingInShrinkView(false);
     * </code>
     *
     * @param disable
     */
    disableScrollingInShrinkView(disable:boolean): void,

    // Properties

    /**
     * Determine if the keyboard is visible.
     *
     * Read this property to determine if the keyboard is visible.
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
     * Example:
     * <code>
     *     Keyboard.automaticScrollToTopOnHiding = true;
     * </code>
     *
     */
    automaticScrollToTopOnHiding: boolean,

    // Events

    /**
     * If defined, this function is fired when keyboard fully shown.
     *
     * Attach handler to this event to be able to receive notification when keyboard is shown.
     *
     * Example:
     * <code>
     * Keyboard.onshow = function () {
     *     // Describe your logic which will be run each time keyboard is shown.
     * }
     * </code>
     *
     */
    onshow():void,
    /**
     * If defined, this function is fired when keyboard fully closed.
     *
     * Attach handler to this event to be able to receive notification when keyboard is closed.
     *
     * Example:
     * <code>
     * Keyboard.onhide = function () {
     *     // Describe your logic which will be run each time keyboard is closed.
     * }
     * </code>
     *
     */
    onhide():void,
    /**
     * If defined, this function is fired before keyboard will be shown.
     *
     * Attach handler to this event to be able to receive notification when keyboard is about to be shown on the screen.
     *
     * Example:
     * <code>
     * Keyboard.onshowing = function () {
     *     // Describe your logic which will be run each time when keyboard is about to be shown.
     * }
     * </code>
     *
     */
    onshowing():void,
    /**
     * If defined, this function is fired when keyboard is about to be closed.
     *
     * Attach handler to this event to be able to receive notification when keyboard is about to be closed.
     *
     * Example:
     * <code>
     * Keyboard.onhiding = function () {
     *     // Describe your logic which will be run each time when keyboard is about to be closed.
     * }
     * </code>
     *
     */
    onhiding():void,

}

declare var Keyboard:Keyboard;
