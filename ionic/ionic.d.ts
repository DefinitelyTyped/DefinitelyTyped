// Type definitions for Ionic Framework 1.0.0-beta.13+
// Project: https://github.com/driftyco/ionic
// Definitions by: Bosa Daniele <https://github.com/danibo86/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

/**
 * Define a global ionic object
 */
declare var ionic: Ionic.IBase;

declare module Ionic
{

    //#region Base
    interface IBase
    {
        Platform: IPlatform;
        DomUtil: IDomUtil;
        EventController: IEventController;

        //#region EventController Aliases
        /**
         * @param eventType The event to trigger
         * @param data The data for the event. Hint: pass in {target: targetElement}
         * @param bubbles Whether the event should bubble up the DOM
         * @param cancelable Whether the event should be cancelable
         */
        trigger(eventType: string, data: Object, bubbles?: boolean, cancelable?: boolean): void;

        /**
         * Listen to an event on an element.
         * 
         * @param type The event to listen for
         * @param callback The listener to be called
         * @param element The element to listen for the event on
         */
        on(type: string, callback: () => void, element: Element): void;


        /**
         * Remove an event listener
         * 
         * @param type The event to listen for
         * @param callback The listener to be called
         * @param element The element to listen for the event on
         */
        off(type: string, callback: () => void, element: Element): void;

        /**
         * Add an event listener for a gesture on an element.
         * 
         * @param eventType The gesture event to listen for
         * @param callback The function to call when the gesture happens
         * @param element The angular element to listen for the event on
         */
        onGesture(eventType: string, callback: () => void, element: Element): void;
        onGesture(eventType: "hold", callback: () => void, element: Element): void;
        onGesture(eventType: "tap", callback: () => void, element: Element): void;
        onGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        onGesture(eventType: "drag", callback: () => void, element: Element): void;
        onGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        onGesture(eventType: "dragend", callback: () => void, element: Element): void;
        onGesture(eventType: "dragup", callback: () => void, element: Element): void;
        onGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        onGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        onGesture(eventType: "dragright", callback: () => void, element: Element): void;
        onGesture(eventType: "swipe", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        onGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        onGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        onGesture(eventType: "transform", callback: () => void, element: Element): void;
        onGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        onGesture(eventType: "transformend", callback: () => void, element: Element): void;
        onGesture(eventType: "rotate", callback: () => void, element: Element): void;
        onGesture(eventType: "pinch", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        onGesture(eventType: "touch", callback: () => void, element: Element): void;
        onGesture(eventType: "release", callback: () => void, element: Element): void;

        /**
         * Remove an event listener for a gesture on an element.
         * 
         * @param eventType The gesture event
         * @param callback The listener that was added earlier
         * @param element The element the listener was added on
         */
        offGesture(eventType: string, callback: () => void, element: Element): void;
        offGesture(eventType: "hold", callback: () => void, element: Element): void;
        offGesture(eventType: "tap", callback: () => void, element: Element): void;
        offGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        offGesture(eventType: "drag", callback: () => void, element: Element): void;
        offGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        offGesture(eventType: "dragend", callback: () => void, element: Element): void;
        offGesture(eventType: "dragup", callback: () => void, element: Element): void;
        offGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        offGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        offGesture(eventType: "dragright", callback: () => void, element: Element): void;
        offGesture(eventType: "swipe", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        offGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        offGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        offGesture(eventType: "transform", callback: () => void, element: Element): void;
        offGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        offGesture(eventType: "transformend", callback: () => void, element: Element): void;
        offGesture(eventType: "rotate", callback: () => void, element: Element): void;
        offGesture(eventType: "pinch", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        offGesture(eventType: "touch", callback: () => void, element: Element): void;
        offGesture(eventType: "release", callback: () => void, element: Element): void;

        //#endregion

        //#region DomUtil Aliases

        /**
         * Calls requestAnimationFrame, or a polyfill if not available.
         * 
         * @param callback The function to call when the next frame happens
         */
        requestAnimationFrame(callback: () => void): void;

        /**
         * When given a callback, if that callback is called 100 times between animation frames, adding Throttle will make it only run the last of the 100 calls.
         * 
         * @param callback a function which will be throttled to requestAnimationFrame
         */
        animationFrameThrottle(callback: () => void): void;

        //#endregion
    }
    //#endregion

    //#region Config Provider
    /**
     * Angular service: $ionicConfigProvider
     * 
     * $ionicConfigProvider can be used during the configuration phase of your app to change how Ionic works.
     */
    interface IConfigProvider
    {
        /**
         * Set whether Ionic should prefetch all templateUrls defined in $stateProvider.state. Default true.
         * If set to false, the user will have to wait for a template to be fetched the first time he/she is going to a a new page.
         * 
         * @param shouldPrefetch Whether Ionic should prefetch templateUrls defined in $stateProvider.state(). Default true.
         */
        prefetchTemplates(shouldPrefetch: boolean): boolean;
    }
    //#endregion

    //#region Platform

    interface IDevice
    {
        /** Get the version of Cordova running on the device. */
        cordova: string;
        /**
         * The device.model returns the name of the device's model or product. The value is set
         * by the device manufacturer and may be different across versions of the same product.
         */
        model: string;
        /** device.name is deprecated as of version 2.3.0. Use device.model instead. */
        name: string;
        /** Get the device's operating system name. */
        platform: string;
        /** Get the device's Universally Unique Identifier (UUID). */
        uuid: string;
        /** Get the operating system version. */
        version: string;
    }


    interface IPlatform
    {
        //#region Properties
        /**
         * Whether the device is ready
         */
        isReady: boolean;

        /**
         * Whether the device is full screen.
         */
        isFullScreen: boolean;

        /**
         * An array of all platforms found.
         */
        platforms: string[];

        /**
         * What grade the current platform is.
         */
        grade: string;
        //#endregion


        /**
         * Trigger a callback once the device is ready, or immediately if the device is already ready.
         * This method can be run from anywhere and does not need to be wrapped by any additional methods.
         * When the app is within a WebView (Cordova), it'll fire the callback once the device is ready.
         * If the app is within a web browser, it'll fire the callback after window.load.
         */
        ready(callback: () => void): void;

        /**
         * Set the grade of the device: 'a', 'b', or 'c'. 'a' is the best (most css features enabled),
         * 'c' is the worst. By default, sets the grade depending on the current device.
         */
        setGrade(grade: string): void;

        /**
         * Return the current device (given by Cordova).
         */
        device(): IDevice;

        /**
         * Check if we are running within a WebView (such as Cordova).
         */
        isWebView(): boolean;

        /**
         * Whether we are running on iPad.
         */
        isIPad(): boolean;

        /**
         * Whether we are running on iOS.
         */
        isIOS(): boolean;

        /**
         * Whether we are running on Android
         */
        isAndroid(): boolean;

        /**
         * Whether we are running on Windows Phone.
         */
        isWindowsPhone(): boolean;

        /**
         * The name of the current platform.
         */
        platform(): string;

        /**
         * The version of the current device platform.
         */
        version(): string;

        /**
         * Exit the application.
         */
        exitApp(): void;

        /**
         * Shows or hides the device status bar (in Cordova).
         * 
         * @param showShould Whether or not to show the status bar.
         */
        showStatusBar(shouldShow: boolean): void;

        /**
         * Sets whether the app is full screen or not (in Cordova).
         * 
         * @param showFullScreen Whether or not to set the app to full screen. Defaults to true.
         * @param showStatusBar Whether or not to show the device's status bar. Defaults to false.
         */
        fullScreen(showFullScreen: boolean, showStatusBar: boolean): void;
    }
    //#endregion

    // #region Dom Utils

    /**
     * ionic.DomUtil
     */
    interface IDomUtil
    {
        /**
         * alias: ionic.requestAnimationFrame
         * 
         * Calls requestAnimationFrame, or a polyfill if not available.
         * 
         * @param callback The function to call when the next frame happens
         */
        requestAnimationFrame(callback: () => void): void;

        /**
         * alias: ionic.animationFrameThrottle
         * 
         * When given a callback, if that callback is called 100 times between animation frames, adding Throttle will make it only run the last of the 100 calls.
         * 
         * @param callback a function which will be throttled to requestAnimationFrame
         */
        animationFrameThrottle(callback: () => void): void;

        /**
         * Find an element's scroll offset within its container
         * 
         * @param element The element to find the offset of
         */
        getPositionInParent(element: Element): void;

        /**
         * The Window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser 
         * call a specified function to update an animation before the next repaint.
         * The method takes as an argument a callback to be invoked before the repaint.
         * 
         * @param callback The function to be called
         */
        ready(callback: () => void): void;

        /**
         * Get a rect representing the bounds of the given textNode.
         */
        getTextBounds(textNode: Element): {
            left: number;
            right: number;
            top: number;
            bottom: number;
            width: number;
            height: number;
        };

        /**
         * Get the first index of a child node within the given element of the specified type.
         * 
         * @param element The element to find the index of.
         * @param type The nodeName to match children of element against.
         */
        getChildIndex(element: Element, type: string): number;

        /**
         * Returns the closest parent of element matching the className, or null.
         * 
         * @param element
         * @param className
         */
        getParentWithClass(element: Element, className: string): Element

        /**
         * Returns the closest parent or self matching the className, or null.
         */
        getParentOrSelfWithClass(element: Element, className: string): Element;


        /**
         * Returns whether {x,y} fits within the rectangle defined by {x1,y1,x2,y2}.
         * 
         * @param x
         * @param y
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         */
        rectContains(x: number, y: number, x1: number, y1: number, x2: number, y2: number): boolean;
    }
    //#endregion

    //#region EventController

    /**
     * Angular service: $ionicGesture
     */
    interface IEventController
    {
        /**
         * alias: ionic.trigger
         * 
         * @param eventType The event to trigger
         * @param data The data for the event. Hint: pass in {target: targetElement}
         * @param bubbles Whether the event should bubble up the DOM
         * @param cancelable Whether the event should be cancelable
         */
        trigger(eventType: string, data: Object, bubbles?: boolean, cancelable?: boolean): void;

        /**
         * alias: ionic.on
         * 
         * Listen to an event on an element
         * 
         * @param type The event to listen for
         * @param callback The listener to be called
         * @param element The element to listen for the event on
         */
        on(type: string, callback: () => void, element: Element): void;

        /**
         * alias: ionic.off
         * 
         * Remove an event listener
         * 
         * @param type The event to listen for
         * @param callback The listener to be called
         * @param element The element to listen for the event on
         */
        off(type: string, callback: () => void, element: Element): void;

        /**
         * alias: ionic.onGesture
         * 
         * Add an event listener for a gesture on an element.
         * 
         * @param eventType The gesture event to listen for
         * @param callback The function to call when the gesture happens
         * @param element The angular element to listen for the event on
         */
        onGesture(eventType: string, callback: () => void, element: Element): void;
        onGesture(eventType: "hold", callback: () => void, element: Element): void;
        onGesture(eventType: "tap", callback: () => void, element: Element): void;
        onGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        onGesture(eventType: "drag", callback: () => void, element: Element): void;
        onGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        onGesture(eventType: "dragend", callback: () => void, element: Element): void;
        onGesture(eventType: "dragup", callback: () => void, element: Element): void;
        onGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        onGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        onGesture(eventType: "dragright", callback: () => void, element: Element): void;
        onGesture(eventType: "swipe", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        onGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        onGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        onGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        onGesture(eventType: "transform", callback: () => void, element: Element): void;
        onGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        onGesture(eventType: "transformend", callback: () => void, element: Element): void;
        onGesture(eventType: "rotate", callback: () => void, element: Element): void;
        onGesture(eventType: "pinch", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        onGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        onGesture(eventType: "touch", callback: () => void, element: Element): void;
        onGesture(eventType: "release", callback: () => void, element: Element): void;

        /**
         * alias: ionic.offGesture
         * 
         * Remove an event listener for a gesture on an element.
         * 
         * @param eventType The gesture event
         * @param callback The listener that was added earlier
         * @param element The element the listener was added on
         */
        offGesture(eventType: string, callback: () => void, element: Element): void;
        offGesture(eventType: "hold", callback: () => void, element: Element): void;
        offGesture(eventType: "tap", callback: () => void, element: Element): void;
        offGesture(eventType: "doubletap", callback: () => void, element: Element): void;
        offGesture(eventType: "drag", callback: () => void, element: Element): void;
        offGesture(eventType: "dragstart", callback: () => void, element: Element): void;
        offGesture(eventType: "dragend", callback: () => void, element: Element): void;
        offGesture(eventType: "dragup", callback: () => void, element: Element): void;
        offGesture(eventType: "dragdown", callback: () => void, element: Element): void;
        offGesture(eventType: "dragleft", callback: () => void, element: Element): void;
        offGesture(eventType: "dragright", callback: () => void, element: Element): void;
        offGesture(eventType: "swipe", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeup", callback: () => void, element: Element): void;
        offGesture(eventType: "swipedown", callback: () => void, element: Element): void;
        offGesture(eventType: "swipeleft", callback: () => void, element: Element): void;
        offGesture(eventType: "swiperight", callback: () => void, element: Element): void;
        offGesture(eventType: "transform", callback: () => void, element: Element): void;
        offGesture(eventType: "transformstart", callback: () => void, element: Element): void;
        offGesture(eventType: "transformend", callback: () => void, element: Element): void;
        offGesture(eventType: "rotate", callback: () => void, element: Element): void;
        offGesture(eventType: "pinch", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchin", callback: () => void, element: Element): void;
        offGesture(eventType: "pinchout", callback: () => void, element: Element): void;
        offGesture(eventType: "touch", callback: () => void, element: Element): void;
        offGesture(eventType: "release", callback: () => void, element: Element): void;
    }

    //#endregion

    //#region Ionic Position

    /**
     * Angular service: $ionicPosition
     * 
     * A set of utility methods that can be use to retrieve position of DOM elements.
     * It is meant to be used where we need to absolute-position DOM elements in relation to other, existing elements (this is the case for tooltips, popovers, etc.).
     */
    interface IPosition
    {
        /**
         * Get the current coordinates of the element, relative to the offset parent. Read-only equivalent of jQuery's position function.
         * 
         * @param element The element to get the position of
         */
        position(element: Element): {
            top: number;
            left: number;
            width: number;
            height: number;
        }

        /**
         * Get the current coordinates of the element, relative to the document. Read-only equivalent of jQuery's offset function.
         * 
         * @param element The element to get offset of
         */
        offset(element: Element): {
            top: number;
            left: number;
            width: number;
            height: number;
        }
    }

    //#endregion


    //#region Action Sheet
    interface IActionSheetOptions
    {
        /**
         * Which buttons to show. Each button is an object with a text field.
         */
        buttons?: Array<{ text: string }>;

        /**
         * The title to show on the action sheet.
         */
        titleText?: string;

        /**
         * The text for a 'cancel' button on the action sheet.
         */
        cancelText?: string;

        /**
         * The text for a 'danger' on the action sheet.
         */
        destructiveText?: string;

        /**
         * Called if the cancel button is pressed, the backdrop is tapped or the hardware back button is pressed.
         */
        cancel?: () => void;

        /**
         * Called when one of the non-destructive buttons is clicked, with the index of the button that was clicked and the button object.
         * Return true to close the action sheet, or false to keep it opened.
         */
        buttonClicked?: (index?: number) => any;

        /**
         * Called when the destructive button is clicked. Return true to close the action sheet, or false to keep it opened.
         */
        destructiveButtonClicked?: () => boolean;

        /**
         * Whether to cancel the actionSheet when navigating to a new state. Default true.
         */
        cancelOnStateChange?: boolean;
    }
    

    /**
     * Angular service: $ionicActionSheet
     * 
     * The Action Sheet is a slide-up pane that lets the user choose from a set of options. Dangerous options are highlighted in red and made obvious.
     * There are easy ways to cancel out of the action sheet, such as tapping the backdrop or even hitting escape on the keyboard for desktop testing.
     */
    interface IActionSheet
    {
        /**
         * Load and return a new action sheet.
         * A new isolated scope will be created for the action sheet and the new element will be appended into the body.
         * 
         * Returns hideSheet, a function which, when called, hides & cancels the action sheet.
         */
        show(options: IActionSheetOptions): () => void;
    }
    //#endregion

    //#region Backdrop

    /**
     * Angular service: $ionicBackdrop
     */
    interface IBackdrop
    {
        /**
         * Retains the backdrop.
         */
        retain(): void;

        /**
         * Releases the backdrop.
         */
        release(): void;
    }
    //#endregion

    //#region Gesture

    /**
     * Angular service: $ionicGesture
     */
    interface IGesture extends IEventController { }

    //#endregion

    //#region Lists

    /**
     * Angular service: $ionicListDelegate
     * 
     * Delegate for controlling the ionList directive.
     * Methods called directly on the $ionicListDelegate service will control all lists. Use the $getByHandle method to control specific ionList instances.
     */
    interface IListDelegate
    {
        /**
         * Set whether or not this list is showing its reorder buttons.
         * Returns whether the reorder buttons are shown.
         */
        showReorder(showReorder?: boolean): boolean;

        /**
         * Set whether or not this list is showing its delete buttons.
         * Returns whether the delete buttons are shown.
         */
        showDelete(showDelete?: boolean): boolean;

        /**
         * Set whether or not this list is able to swipe to show option buttons.
         * Returns whether the list is able to swipe to show option buttons.
         */
        canSwipeItems(canSwipeItems?: boolean): boolean;

        /**
         * Closes any option buttons on the list that are swiped open.
         */
        closeOptionButtons(): void;

        /**
         * Return delegate instance that controls only the ionTabs directives with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): IListDelegate;
    }
    //#endregion

    //#region Loading
    interface ILoadingOptions
    {
        template?: string;
        templateUrl?: string;
        noBackdrop?: boolean;
        delay?: number;
        duration?: number;
    }

    /**
     * Angular service: $ionicLoading
     * 
     * An overlay that can be used to indicate activity while blocking user interaction.
     */
    interface ILoading
    {
        show(opts?: ILoadingOptions): void;

        hide(): void;
    }
    //#endregion

    //#region Modals

    interface IModalOptions
    {
        /**
         * The scope to be a child of. Default: creates a child of $rootScope.
         */
        scope?: ng.IScope;

        /**
         * The animation to show & hide with. Default: 'slide-in-up'
         */
        animation?: string;

        /**
         * Whether to autofocus the first input of the modal when shown. Default: false.
         */
        focusFirstInput?: boolean;

        /**
         * Whether to close the modal on clicking the backdrop. Default: true.
         */
        backdropClickToClose?: boolean;

        /**
         * Whether the modal can be closed using the hardware back button on Android and similar devices. Default: true.
         */
        hardwareBackButtonClose?: boolean;
    }

    /**
     * Angular service: $ionicModal
     */
    interface IModal
    {
        /**
         * Creates a new modal controller instance.
         * 
         * @param options An IModalOptions object
         */
        initialize(options: IModalOptions): void;

        /**
         * Returns an instance of an ionicModal controller.
         * 
         * @param templateString The template string to use as the modal's content.
         * @param options Options to be passed to the initialize method.
         */
        fromTemplate(templateString: string, options: IModalOptions): IModal;

        
        /**
         * Returns a promise that will be resolved with an instance of an ionicModal controller.
         * 
         * @param templateUrl The url to load the template from.
         * @param options Options to be passed to the initialize method.
         */
        fromTemplateUrl(templateUrl: string, options: IModalOptions): ng.IPromise<IModal>;


        /**
         * Show this modal instance
         * Returns a promise which is resolved when the modal is finished animating in
         */
        show(): ng.IPromise<any>;

        /**
         * Hide this modal instance
         * Returns a promise which is resolved when the modal is finished animating out
         */
        hide(): ng.IPromise<any>;

        /**
         * Remove this modal instance from the DOM and clean up
         * Returns a promise which is resolved when the modal is finished animating out
         */
        remove(): ng.IPromise<any>;

        /**
         * Returns whether this modal is currently shown.
         */
        isShown(): boolean;
    }

    //#endregion

    //#region Navigation

    /**
     * Angular service: $ionicNavBarDelegate
     * 
     * Delegate for controlling the ionNavBar directive.
     */
    interface INavBarDelegate
    {
        /**
         * Goes back in the view history
         * 
         * @param event The event object (eg from a tap event)
         */
        back(event?: Event): void;

        /**
         * Aligns the title with the buttons in a given direction
         * 
         * @param direction The direction to the align the title text towards. Available: 'left', 'right', 'center'. Default: 'center'.
         */
        align(direction?: string): void;
        align(direction: "left"): void;
        align(direction: "right"): void;
        align(direction: "center"): void;

        /**
         * Set/get whether the ionNavBackButton is shown (if it exists).
         * Returns whether the back button is shown
         * 
         * @param show Whether to show the back button
         */
        showBackButton(show?: boolean): boolean;

        /**
         * Set/get whether the ionNavBar is shown
         * Returns whether the bar is shown
         * 
         * @param show whether to show the bar
         */
        showBar(show?: boolean): boolean;

        /**
         * Set the title for the ionNavBar
         * 
         * @param title The new title to show
         */
        setTitle(title: string): void;

        /**
         * Change the title, transitioning the new title in and the old one out in a given direction
         * 
         * @param title the new title to show
         * @param direction the direction to transition the new title in. Available: 'forward', 'back'.
         */
        changeTitle(title: string, direction: string): void;
        changeTitle(title: string, direction: "forward"): void;
        changeTitle(title: string, direction: "back"): void;

        /**
         * Returns the current title of the navbar.
         */
        getTitle(): string;

        /**
         * Returns the previous title of the navbar.
         */
        getPreviousTitle(): string;

        /**
         * Return a delegate instance that controls only the navBars with delegate-handle matching the given handl
         */
        $getByHandle(handle: string): INavBarDelegate;
    }

    //#endregion

    //#region Popover

    interface IPopoverOptions
    {
        /**
         * The scope to be a child of. Default: creates a child of $rootScope
         */
        scope?: ng.IScope;

        /**
         * Whether to autofocus the first input of the popover when shown. Default: false
         */
        focusFirstInput?: boolean;

        /**
         * Whether to close the popover on clicking the backdrop. Default: true
         */
        backdropClickToClose?: boolean;

        /**
         * Whether the popover can be closed using the hardware back button on Android and similar devices. Default: true
         */
        hardwareBackButtonClose?: boolean;
    }

    /**
     * Angular service: $ionicPopover
     * 
     * The Popover is a view that floats above an app’s content.
     * Popovers provide an easy way to present or gather information from the user and are commonly used in the following situations:
     * show more info about the current view, select a commonly used tool or configuration, present a list of actions to perform inside one of your views.
     * Put the content of the popover inside of an <ion-popover-view> element
     */
    interface IPopover
    {
        /**
         * @param templateString The template string to use as the popovers's content
         * @param Options to be passed to the initialize method
         */
        fromTemplate(templateString: string, options: IPopoverOptions): IPopover;

        /**
         * Returns a promise that will be resolved with an instance of an ionicPopover controller ($ionicPopover is built on top of $ionicPopover).
         * 
         * @param templateUrl The url to load the template from
         * @param Options to be passed to the initialize method
         */
        fromTemplateUrl(templateUrl: string, options: IPopoverOptions): ng.IPromise<IPopover>;

        /**
         * Creates a new popover controller instance
         * 
         */
        initialize(options: IPopoverOptions): void;

        /**
         * Show this popover instance.
         * Returns a promise which is resolved when the popover is finished animating in.
         * 
         * @param $event The $event or target element which the popover should align itself next to.
         */
        show($event: any): ng.IPromise<any>;

        /**
         * Hide this popover instance.
         * Returns a promise which is resolved when the popover is finished animating out.
         */
        hide(): ng.IPromise<any>;

        /**
         * Remove this popover instance from the DOM and clean up.
         * Returns a promise which is resolved when the popover is finished animating out.
         */
        remove(): ng.IPromise<any>;

        /**
         * Returns whether this popover is currently shown.
         */
        isShown(): boolean;
    }

    //#endregion

    //#region Popup

    interface IPopupButton
    {
        text: string;
        type?: string;
        onTap?(e: Event): void;
    }

    interface IPopupOptions
    {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * A scope to link to the popup content
         */
        scope?: ng.IScope;

        /**
         * Buttons to place in the popup footer
         */
        buttons?: Array<IPopupButton>;
    }

    interface IPopupAlertOptions
    {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * The text of the OK button
         */
        okText?: string;

        /**
         * The type of the OK button
         */
        okType?: string;
    }

    interface IPopupConfirmOptions
    {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * The text of the Cancel button
         */
        canelText?: string;

        /**
         * The type of the Cancel button
         */
        cancelType?: string;

        /**
         * The text of the OK button
         */
        okText?: string;

        /**
         * The type of the OK button
         */
        okType?: string;
    }

    interface IPopupPromptOptions
    {
        /**
         * The title of the popup
         */
        title: string;

        /**
         * The sub-title of the popup
         */
        subTitle?: string;

        /**
         * The html template to place in the popup body
         */
        template?: string;

        /**
         * The URL of an html template to place in the popup body
         */
        templateUrl?: string;

        /**
         * The type of input of use
         */
        inputType: string;

        /**
         * A placeholder to use for the input
         */
        inputPlaceholder: string;

        /**
         * The text of the Cancel button
         */
        canelText?: string;

        /**
         * The type of the Cancel button
         */
        cancelType?: string;

        /**
         * The text of the OK button
         */
        okText?: string;

        /**
         * The type of the OK button
         */
        okType?: string;
    }

    /**
     * Angular service: $ionicPopup
     * 
     * The Ionic Popup service allows programmatically creating and showing popup windows that require the user to respond in order to continue.
     * The popup system has support for more flexible versions of the built in alert(), prompt(), and confirm() functions that users are used to,
     * in addition to allowing popups with completely custom content and look.
     * An input can be given an autofocus attribute so it automatically receives focus when the popup first shows.
     * However, depending on certain use-cases this can cause issues with the tap/click system,
     * which is why Ionic prefers using the autofocus attribute as an opt-in feature and not the default.
     */
    interface IPopup
    {
        /**
         * Show a complex popup. This is the master show function for all popups.
         * A complex popup has a buttons array, with each button having a text and type field, in addition to an onTap function.
         * The onTap function, called when the correspondingbutton on the popup is tapped,
         * will by default close the popup and resolve the popup promise with its return value.
         * If you wish to prevent the default and keep the popup open on button tap, call event.preventDefault() on the passed in tap event.
         * 
         * Returns a promise which is resolved when the popup is closed. Has an additional close function, which can be used to programmatically close the popup.
         * 
         * @param options The options for the new popup
         */
        show(options: IPopupOptions): ng.IPromise<any>;

        /**
         * Show a simple alert popup with a message and one button that the user can tap to close the popup.
         * 
         * Returns a promise which is resolved when the popup is closed. Has one additional function close, which can be called with any value to programmatically close the popup with the given value.
         * 
         * @param options The options for showing the alert
         */
        alert(options: IPopupAlertOptions): ng.IPromise<any>;

        /**
         * Show a simple confirm popup with a Cancel and OK button.
         * Resolves the promise with true if the user presses the OK button, and false if the user presses the Cancel button.
         * 
         * Returns a promise which is resolved when the popup is closed. Has one additional function close, which can be called with any value to programmatically close the popup with the given value.
         * 
         * @parma options The options for showing the confirm popup
         */
        confirm(options: IPopupConfirmOptions): ng.IPromise<any>;

        /**
         * Show a simple prompt popup, which has an input, OK button, and Cancel button. Resolves the promise with the value of the input if the user presses OK, and with undefined if the user presses Cancel.
         * 
         * Returns a promise which is resolved when the popup is closed. Has one additional function close, which can be called with any value to programmatically close the popup with the given value.
         * 
         * @param options The options for showing the prompt popup
         */
        prompt(options: IPopupPromptOptions): ng.IPromise<any>;
    }

    //#endregion

    //#region Scroll
    interface IScrollPosition
    {
        /**
         * The distance the user has scrolled from the left (starts at 0)
         */
        left: number;

        /**
         * The distance the user has scrolled from the top (starts at 0)
         */
        top: number;
    }

    /**
     * Angular service: $ionicScrollDelegate
     * 
     * Delegate for controlling scrollViews (created by ionContent and ionScroll directives).
     * Methods called directly on the $ionicScrollDelegate service will control all scroll views. Use the $getByHandle method to control specific scrollViews.
     */
    interface IScrollDelegate
    {
        /**
         * Tell the scrollView to recalculate the size of its container
         */
        resize(): void;


        /**
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollTop(shouldAnimate?: boolean): void;


        /**
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollBottom(shouldAnimate?: boolean): void;



        /**
         * @param left The x-value to scroll to
         * @param top The y-value to scroll to
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollTo(left: number, top: number, shouldAnimate?: boolean): void;

        /**
         * @param left The x-offset to scroll by
         * @param top The y-offset to scroll by
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollBy(left: number, top: number, shouldAnimate?: boolean): void;

        /**
         * @param level Level to zoom to
         * @param animate Whether to animate the zoom
         * @param originLeft Zoom in at given left coordinate
         * @param originTop Zoom in at given top coordinate
         */
        zoomTo(level: number, animate?: boolean, originLeft?: number, originTop?: number): void;

        /**
         * @param factor The factor to zoom by
         * @param animate Whether to animate the zoom
         * @param originLeft Zoom in at given left coordinate
         * @param originTop Zoom in at given top coordinate
         */
        zoomBy(factor: number, animate?: boolean, originLeft?: number, originTop?: number): void;

        /**
         * Returns the scroll position of this view
         */
        getScrollPosition(): IScrollPosition;

        /**
         * Tell the scrollView to scroll to the element with an id matching window.location.hash
         * If no matching element is found, it will scroll to top
         * 
         * @param shouldAnimate Whether the scroll should animate
         */
        anchorScroll(shouldAnimate?: boolean): void;

        /**
         * Returns the scrollView associated with this delegate.
         */
        // TODO: define ScrollView object
        getScrollView(): any;

        /**
         * Stop remembering the scroll position for this scrollView
         */
        forgetScrollPosition(): void;

        /**
         * If this scrollView has an id associated with its scroll position, (through calling rememberScrollPosition), and that position is remembered, load the position and scroll to it.
         * 
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollToRememberedPosition(shouldAnimate?: boolean): void;

        /**
         * Return a delegate instance that controls only the scrollViews with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): IScrollDelegate;
    }
    //#endregion

    //#region Side Menus

    /**
     * Angular service: $ionicSideMenuDelegate
     * 
     * Delegate for controlling the ionSideMenus directive.
     * Methods called directly on the $ionicSideMenuDelegate service will control all side menus. Use the $getByHandle method to control specific ionSideMenus instances.
     */
    interface ISideMenuDelegate
    {
        /**
         * Toggle the left side menu (if it exists).
         * 
         * @param isOpen Whether to open or close the menu. Default: Toggles the menu.
         */
        toggleLeft(isOpen?: boolean): void;


        /**
         * Toggle the right side menu (if it exists).
         * 
         * @param isOpen Whether to open or close the menu. Default: Toggles the menu.
         */
        toggleRight(isOpen?: boolean): void;

        /**
         * Gets the ratio of open amount over menu width. For example, a menu of width 100 that is opened by 50 pixels is 50% opened, and would return a ratio of 0.5.
         * Returns 0 if nothing is open, between 0 and 1 if left menu is opened/opening, and between 0 and -1 if right menu is opened/opening.
         */
        getOpenRatio(): number;

        /**
         * Returns whether either the left or right menu is currently opened.
         */
        isOpen(): boolean;

        /**
         * Returns whether the left menu is currently opened.
         */
        isOpenLeft(): boolean;

        /**
         * Returns whether the right menu is currently opened.
         */
        isOpenRight(): boolean;

        /**
         * Returns whether the content can be dragged to open side menus.
         * 
         * @param canDrag Set whether the content can or cannot be dragged to open side menus
         */
        canDragContent(canDrag?: boolean): boolean;

        /**
         * Returns whether the drag can start only from within the edge of screen threshold.
         * 
         * @param value Set whether the content drag can only start if it is below a certain threshold distance from the edge of the screen. If a non-zero number is given, that many pixels is used as the maximum allowed distance from the edge that starts dragging the side menu. If 0 is given, the edge drag threshold is disabled, and dragging from anywhere on the content is allowed.
         */
        edgeDragThreshold(value: boolean): boolean;

        /**
         * Returns whether the drag can start only from within the edge of screen threshold.
         * 
         * @param value Set whether the content drag can only start if it is below a certain threshold distance from the edge of the screen. If true is given, the default number of pixels (25) is used as the maximum allowed distance. If false is given, the edge drag threshold is disabled, and dragging from anywhere on the content is allowed.
         */
        edgeDragThreshold(value: number): boolean;

        /**
         * Return a delegate instance that controls only the ionSideMenus directives with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): ISideMenuDelegate;
    }

    //#endregion

    //#region Slide Box

    /**
     * Angular service: $ionicSlideBoxDelegate
     * 
     * Delegate that controls the ionSlideBox directive.
     * Methods called directly on the $ionicSlideBoxDelegate service will control all slide boxes. Use the $getByHandle method to control specific slide box instances.
     */
    interface ISlideBoxDelegate
    {
        /**
         * Update the slidebox (for example if using Angular with ng-repeat, resize it for the elements inside).
         */
        update(): void;

        /**
         * @param to The index to slide to
         * @param speed The number of milliseconds for the change to take
         */
        slide(to: number, speed?: number): void;

        /**
         * Returns whether sliding is enabled.
         * 
         * @param shouldEnable Whether to enable sliding the slidebox.
         */
        enableSlide(shouldEnable?: boolean): boolean;

        /**
         * Go to the previous slide. Wraps around if at the beginning.
         */
        previous(): void;

        /**
         * Go to the next slide. Wraps around if at the end.
         */
        next(): void;

        /**
         * Stop sliding. The slideBox will not move again until explicitly told to do so.
         */
        stop(): void;

        /**
         * Start sliding again if the slideBox was stopped.
         */
        start(): void;

        /**
         * Returns the index of the current slide.
         */
        currentIndex(): number;

        /**
         * Returns the number of slides there are currently.
         */
        slidesCount(): number;

        /**
         * Returns a delegate instance that controls only the ionSlideBox directives with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): ISlideBoxDelegate;
    }

    //#endregion

    //#region Tabs
    interface ITabsDelegate
    {

        /**
         * Select the tab matching the given index.
         * 
         * @param index Index of the tab to select.
         */
        select(index: number): void;

        /**
         * Returns the index of the selected tab, or -1.
         */
        selectedIndex(): number;

        /**
         * Return delegate instance that controls only the ionTabs directives with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): ITabsDelegate;
    }
    //#endregion
}
