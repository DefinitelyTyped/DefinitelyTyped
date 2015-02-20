// Type definitions for Ionic
// Project: https://github.com/driftyco/ionic
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="ionic.base.d.ts" />
/// <reference path="ionic.eventController.d.ts" />
/// <reference path="ionic.platform.d.ts" />
/// <reference path="ionic.popover.d.ts" />
/// <reference path="ionic.popup.d.ts" />
/// <reference path="ionic.scroll.d.ts" />
/// <reference path="ionic.sideMenus.d.ts" />
/// <reference path="ionic.slideBox.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

/**
 * Define a global ionic object
 */
declare module Ionic {

    //#region Config Provider
    /**
     * Angular service: $ionicConfigProvider
     * 
     * $ionicConfigProvider can be used during the configuration phase of your app to change how Ionic works.
     */
    interface IConfigProvider {
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

    interface IDevice {
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

    //#region Ionic Position

    /**
     * Angular service: $ionicPosition
     * 
     * A set of utility methods that can be use to retrieve position of DOM elements.
     * It is meant to be used where we need to absolute-position DOM elements in relation to other, existing elements (this is the case for tooltips, popovers, etc.).
     */
    interface IPosition {
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
    interface IActionSheetOptions {
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
        buttonClicked?: () => boolean;

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
    interface IActionSheet {
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
    interface IBackdrop {
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
    
    //#region Lists

    /**
     * Angular service: $ionicListDelegate
     * 
     * Delegate for controlling the ionList directive.
     * Methods called directly on the $ionicListDelegate service will control all lists. Use the $getByHandle method to control specific ionList instances.
     */
    interface IListDelegate {
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
    interface ILoadingOptions {
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
    interface ILoading {
        show(opts?: ILoadingOptions): void;

        hide(): void;
    }
    //#endregion

    //#region Modals

    interface IModalOptions {
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
    interface IModal {
        /**
         * Creates a new modal controller instance.
         * 
         * @param options An IModalOptions object
         */
        initialize(options: IModalOptions): void;

        // TODO: add Promise object as returns

        /**
         * Show this modal instance
         * Returns a promise which is resolved when the modal is finished animating in
         */
        show(): any;

        /**
         * Hide this modal instance
         * Returns a promise which is resolved when the modal is finished animating out
         */
        hide(): any;

        /**
         * Remove this modal instance from the DOM and clean up
         * Returns a promise which is resolved when the modal is finished animating out
         */
        remove(): any;

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
    interface INavBarDelegate {
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

    //#region Tabs
    interface ITabsDelegate {

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

declare var ionic: Ionic.IBase;