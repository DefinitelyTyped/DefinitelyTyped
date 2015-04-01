// Type definitions for Onsen UI
// Project: http://onsen.io
// Definitions by: Fran Dios <https://github.com/frankdiox/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


// Some useful types
interface stringArray {
    [index: number]: string;
}

interface objectArray {
    [index: number]: any;
}


/**
 * @description Should be used as root component of each page. The content inside page component is scrollable
 */
interface PageView {
    /**
     * @return {Object} Device back button handler
     * @description Get the associated back button handler. This method may return null if no handler is assigned
     */
    getDeviceBackButtonHandler(): any;
}

/**
 * @description Carousel component
 */
interface CarouselView {
     /**
     * @description Show next ons-carousel item
     */
    next(): void;
     /**
     * @description Show previous ons-carousel item
     */
    prev(): void;
     /**
     * @description Show first ons-carousel item
     */
    first(): void;
    /**
     * @description Show last ons-carousel item
     */
    last(): void;
    /**
     * @param {Booelan} swipeable If value is true the carousel will be swipeable
     * @description Set whether the carousel is swipeable or not
     */
    setSwipeable(swipeable: boolean): void;
    /**
     * @return {Boolean} true if the carousel is swipeable
     * @description Returns whether the carousel is swipeable or not
     */
    isSwipeable(): boolean;
    /**
     * @param {Number} index The index that the carousel should be set to
     * @description Specify the index of the ons-carousel-item to show
     */
    setActiveCarouselItemIndex(index: number): void;
    /**
     * @return {Number} The current carousel item index
     * @description Returns the index of the currently visible ons-carousel-item
     */
    getActiveCarouselItemIndex(): number;
    /**
     * @param {Boolean} enabled If true auto scroll will be enabled
     * @description Enable or disable "auto-scroll" attribute
     */
    setAutoScrollEnabled(enabled: boolean): void;
    /**
     * @return {Boolean} true if auto scroll is enabled
     * @description Returns whether the "auto-scroll" attribute is set or not
     */
    isAutoScrollEnabled(): boolean;
    /**
     * @param {Number} ratio The desired ratio
     * @description Set the auto scroll ratio. Must be a value between 0.0 and 1.0
     */
    setAutoScrollRatio(ratio: number): void;
    /**
     * @return {Number} The current auto scroll ratio
     * @description Returns the current auto scroll ratio
     */
    getAutoScrollRatio(): number;
    /**
     * @param {Boolean} overscrollable If true the carousel will be overscrollable
     * @description Set whether the carousel is overscrollable or not
     */
    setOverscrollable(overscrollable: boolean): void;
    /**
     * @return {Boolean} Whether the carousel is overscrollable or not
     * @description Returns whether the carousel is overscrollable or not
     */
    isOverscrollable(): boolean;
    /**
     * @description Update the layout of the carousel. Used when adding ons-carousel-items dynamically or to automatically adjust the size
     */
    refresh(): void;
    /**
     * @return {Boolean} Whether the carousel is disabled or not
     * @description Returns whether the dialog is disabled or enabled
     */
    isDisabled(): boolean;
    /**
     * @param {Boolean} disabled If true the carousel will be disabled
     * @description Disable or enable the dialog
     */
    setDisabled(disabled: boolean): void;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

/**
 * @description Component that adds "pull-to-refresh" to an <ons-page> element
 */
interface PullHookView {
    /**
     * @param {Boolean} disabled If true the pull hook will be disabled
     * @description Disable or enable the component
     */
    setDisabled(disabled: boolean): void;
    /**
     * @return {Boolean} true if the pull hook is disabled
     * @description Returns whether the component is disabled or enabled
     */
    isDisabled(): boolean;
    /**
     * @param {Number} height Desired height
     * @description Specify the height
     */
    setHeight(height: number): void;
    /**
     * @param {Number} thresholdHeight Desired threshold height
     * @description Specify the threshold height
     */
    setThresholdHeight(thresholdHeight: number): void;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

/**
 * @description Divides the screen into a left and right section
 */
interface SplitView {
    /**
     * @param {String} pageUrl Page URL. Can be either an HTML document or an <ons-template>
     * @description Show the page specified in pageUrl in the right section
     */
    setMainPage(pageUrl: string): void;
    /**
     * @param {String} pageUrl Page URL. Can be either an HTML document or an <ons-template>
     * @description Show the page specified in pageUrl in the left section
     */
    setSecondaryPage(pageUrl: string): void;
    /**
     * @description Trigger an 'update' event and try to determine if the split behaviour should be changed
     */
    update(): void;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

interface dialogOptions {
    animation?: string;
    callback?: any;
}


/**
 * @modifier android Display an Android style alert dialog
 * @description Alert dialog that is displayed on top of the current screen
 */
interface AlertDialogView {
    /**
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "fade", "slide" and "none"
     * @param {Function} [options.callback] Function to execute after the dialog has been revealed
     * @description Show the alert dialog
     */
    show(options?: dialogOptions): void;
    /**
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "fade", "slide" and "none"
     * @param {Function} [options.callback] Function to execute after the dialog has been hidden
     * @description Hide the alert dialog
     */
    hide(options?: dialogOptions): void;
    /**
     * @description Returns whether the dialog is visible or not
     * @return {Boolean} true if the dialog is currently visible
     */
    isShown(): boolean;
    /**
     * @description Destroy the alert dialog and remove it from the DOM tree
     */
    destroy(): void;
    /**
     * @description Define whether the dialog can be canceled by the user or not
     * @param {Boolean} cancelable If true the dialog will be cancelable
     */
    setCancelable(cancelable: boolean): void;
    /**
     * @description Returns whether the dialog is cancelable or not
     * @return {Boolean} true if the dialog is cancelable
     */
    isCancelable(): boolean;
    /**
     * @description Disable or enable the alert dialog
     * @param {Boolean} disabled If true the dialog will be disabled
     */
    setDisabled(disabled: boolean): void;
    /**
     * @description Returns whether the dialog is disabled or enabled
     * @return {Boolean} true if the dialog is disabled
     */
    isDisabled(): boolean;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

/**
 * @description Dialog that is displayed on top of current screen
 */
interface DialogView {
    /**
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "none", "fade" and "slide"
     * @param {Function} [options.callback] This function is called after the dialog has been revealed
     * @description Show the dialog
     */
    show(options?: dialogOptions): void;
    /**
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "none", "fade" and "slide"
     * @param {Function} [options.callback] This functions is called after the dialog has been hidden
     * @description Hide the dialog
     */
    hide(options?: dialogOptions): void;
    /**
     * @description Returns whether the dialog is visible or not
     * @return {Boolean} true if the dialog is visible
     */
    isShown(): boolean;
    /**
     * @description Destroy the dialog and remove it from the DOM tree
     */
    destroy(): void;
    /**
     * @return {Object} Device back button handler
     * @description Retrieve the back button handler for overriding the default behavior
     */
    getDeviceBackButtonHandler(): any;
    /**
     * @param {Boolean} cancelable If true the dialog will be cancelable
     * @description Define whether the dialog can be canceled by the user or not
     */
    setCancelable(cancelable: boolean): void;
    /**
     * @description Returns whether the dialog is cancelable or not
     * @return {Boolean} true if the dialog is cancelable
     */
    isCancelable(): boolean;
    /**
     * @description Disable or enable the dialog
     * @param {Boolean} disabled If true the dialog will be disabled
     */
    setDisabled(disabled: boolean): void;
    /**
     * @description Returns whether the dialog is disabled or enabled
     * @return {Boolean} true if the dialog is disabled
     */
    isDisabled(): boolean;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

/**
 * @modifier outline Button with outline and transparent background
 * @modifier light Button that doesn't stand out
 * @modifier quiet Button with no outline and or background
 * @modifier cta Button that really stands out
 * @modifier large Large button that covers the width of the screen
 * @modifier large--quiet Large quiet button
 * @modifier large--cta Large call to action button
 * @description Button component. If you want to place a button in a toolbar, use ons-toolbar-button or ons-back-button instead
 */
interface ButtonView {
    /**
     * @description Show spinner on the button
     */
    startSpin(): void;
    /**
     * @description Remove spinner from button
     */
    stopSpin(): void;
    /**
     * @return {Boolean} true if the button is spinning
     * @description Return whether the spinner is visible or not
     */
    isSpinning(): boolean;
    /**
     * @description Set spin animation. Possible values are "slide-left" (default), "slide-right", "slide-up", "slide-down", "expand-left", "expand-right", "expand-up", "expand-down", "zoom-out", "zoom-in"
     * @param {String} animation Animation name
     */
    setSpinAnimation(animation: string): void;
    /**
     * @description Disable or enable the button
     */
    setDisabled(disabled: boolean): void;
    /**
     * @return {Boolean} true if the button is disabled
     * @description Returns whether the button is disabled or enabled
     */
    isDisabled(): boolean;
}

/**
 * @description Switch component
 */
interface SwitchView {
    /**
     * @return {Boolean} true if the switch is on
     * @description Returns true if the switch is ON
     */
    isChecked(): boolean;
    /**
     * @param {Boolean} checked If true the switch will be set to on
     * @description Set the value of the switch. isChecked can be either true or false
     */
    setChecked(checked: boolean): void;
    /**
     * @return {HTMLElement} The underlying checkbox element
     * @description Get inner input[type=checkbox] element
     */
    getCheckboxElement(): HTMLElement;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

/**
 * @description
 *     Modal component that masks current screen
 *     Underlying components are not subject to any events while the modal component is shown
 */
interface ModalView {
    /**
     * @description Toggle modal visibility
     */
    toggle(): void;
    /**
     * @description Show modal
     */
    show(): void;
    /**
     * @description Hide modal
     */
    hide(): void;
    /**
     * @return {Object} Device back button handler
     * @description Retrieve the back button handler
     */
    getDeviceBackButtonHandler(): any;
}

interface navigatorOptions {
    animation?: string;
    onTransitionEnd?: any;
}

/**
 * @description A component that provides page stack management and navigation. This component does not have a visible content
 */
interface NavigatorView {
    /**
     * @param {String} pageUrl Page URL. Can be either a HTML document or a <code>&lt;ons-template&gt;</code>
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "slide", "simpleslide", "lift", "fade" and "none"
     * @param {Function} [options.onTransitionEnd] Function that is called when the transition has ended
     * @description Pushes the specified pageUrl into the page stack
     */
    pushPage(pageUrl: string, options?: navigatorOptions): void;
    /**
     * @param {Number} index The index where it should be inserted
     * @param {String} pageUrl Page URL. Can be either a HTML document or a <code>&lt;ons-template&gt;</code>
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "slide", "simpleslide", "lift", "fade" and "none"
     * @description Insert the specified pageUrl into the page stack with specified index
     */
    insertPage(index: number, pageUrl: string, options?: navigatorOptions): void;
    /**
     * @param {Object} [options] Parameter object
     * @param {Function} [options.onTransitionEnd] Function that is called when the transition has ended
     * @description Pops the current page from the page stack. The previous page will be displayed
     */
    popPage(options?: navigatorOptions): void;
    /**
     * @param {String} pageUrl Page URL. Can be either a HTML document or an <code>&lt;ons-template&gt;</code>
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "slide", "simpleslide", "lift", "fade" and "none"
     * @param {Function} [options.onTransitionEnd] Function that is called when the transition has ended
     * @description Clears page stack and adds the specified pageUrl to the page stack
     */
    resetToPage(pageUrl: string, options?: navigatorOptions): void;
    /**
     * @return {Object} Current page object
     * @description Get current page's navigator item. Use this method to access options passed by pushPage() or resetToPage() method
     */
    getCurrentPage(): any;
    /**
     * @return {List} List of page objects
     * @description Retrieve the entire page stack of the navigator
     */
    getPages(): objectArray;
    /**
     * @return {Object} Device back button handler
     * @description Retrieve the back button handler for overriding the default behavior
     */
    getDeviceBackButtonHandler(): any;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

interface slidingMenuOptions {
    closeMenu?: boolean;
    callback?: any;
}

/**
 * @description Component for sliding UI where one page is overlayed over another page. The above page can be slided aside to reveal the page behind
 */
interface SlidingMenuView {
    /**
     * @param {String} pageUrl Page URL. Can be either an HTML document or an <code>&lt;ons-template&gt;</code>
     * @param {Object} [options] Parameter object
     * @param {Boolean} [options.closeMenu] If true the menu will be closed
     * @param {Function} [options.callback] Function that is executed after the page has been set
     * @description Show the page specified in pageUrl in the main contents pane
     */
    setMainPage(pageUrl: string, options?: slidingMenuOptions): void;
    /**
     * @param {String} pageUrl Page URL. Can be either an HTML document or an <code>&lt;ons-template&gt;</code>
     * @param {Object} [options] Parameter object
     * @param {Boolean} [options.closeMenu] If true the menu will be closed after the menu page has been set
     * @param {Function} [options.callback] This function will be executed after the menu page has been set
     * @description Show the page specified in pageUrl in the side menu pane
     */
    setMenuPage(pageUrl: string, options?: slidingMenuOptions): void;
    /**
     * @param {Object} [options] Parameter object
     * @param {Function} [options.callback] This function will be called after the menu has been opened
     * @description Slide the above layer to reveal the layer behind
     */
    openMenu(options?: slidingMenuOptions): void;
    /**
     * @param {Object} [options] Parameter object
     * @param {Function} [options.callback] This function will be called after the menu has been closed
     * @description Slide the above layer to hide the layer behind
     */
    closeMenu(options?: slidingMenuOptions): void;
    /**
     * @param {Object} [options] Parameter object
     * @param {Function} [options.callback] This function will be called after the menu has been opened or closed
     * @description Slide the above layer to reveal the layer behind if it is currently hidden, otherwise, hide the layer behind
     */
    toggleMenu(options?: slidingMenuOptions): void;
    /**
     * @return {Boolean} true if the menu is currently open
     * @description Returns true if the menu page is open, otherwise false
     */
    isMenuOpened(): boolean;
    /**
     * @return {Object} Device back button handler
     * @description Retrieve the back-button handler
     */
    getDeviceBackButtonHandler(): any;
    /**
     * @param {Boolean} swipeable If true the menu will be swipeable
     * @description Specify if the menu should be swipeable or not
     */
    setSwipeable(swipeable: boolean): void;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

interface tabbarOptions {
    keepPage?: boolean;
}

/**
 * @description A component to display a tab bar on the bottom of a page. Used with ons-tab to manage pages using tabs
 */
interface TabbarView {
    /**
     * @param {Number} index Tab index
     * @param {Object} [options] Parameter object
     * @param {Boolean} [options.keepPage] If true the page will not be changed
     * @param {String} [options.animation] Animation name. Available animations are "fade" and "none"
     * @return {Boolean} true if the change was successful
     * @description Show specified tab page. Animations and other options can be specified by the second parameter
     */
    setActiveTab(index: number, options?: tabbarOptions): boolean;
    /**
     * @return {Number} The index of the currently active tab
     * @description Returns tab index on current active tab. If active tab is not found, returns -1
     */
    getActiveTab(): number;
    /**
     * @param {String} url Page URL. Can be either an HTML document or an <code>&lt;ons-template&gt;</code>
     * @description Displays a new page without changing the active index
     */
    loadPage(url: string): void;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

interface popoverOptions {
    animation?: string;
}

/**
 * @modifier android Display an Android style popover
 * @description A component that displays a popover next to an element
 */
interface PopoverView {
    /**
     * @param {String|Event|HTMLElement} target Target element. Can be either a CSS selector, an event object or a DOM element
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "fade" and "none"
     * @description Open the popover and point it at a target. The target can be either an event, a css selector or a DOM element
     */
    show(target: any, options?: popoverOptions): void;
    /**
     * @param {Object} [options] Parameter object
     * @param {String} [options.animation] Animation name. Available animations are "fade" and "none"
     * @description Close the popover
     */
    hide(options?: popoverOptions): void;
    /**
     * @return {Boolean} true if the popover is visible
     * @description Returns whether the popover is visible or not
     */
    isShown(): boolean;
    /**
     * @description Destroy the popover and remove it from the DOM tree
     */
    destroy(): void;
    /**
     * @param {Boolean} cancelable If true the popover will be cancelable
     * @description Set whether the popover can be canceled by the user when it is shown
     */
    setCancelable(cancelable: boolean): void;
    /**
     * @return {Boolean} true if the popover is cancelable
     * @description Returns whether the popover is cancelable or not
     */
    isCancelable(): boolean;
    /**
     * @param {Boolean} disabled If true the popover will be disabled
     * @description Disable or enable the popover
     */
    setDisabled(disabled: boolean): void;
    /**
     * @return {Boolean} true if the popover is disabled
     * @description Returns whether the popover is disabled or enabled
     */
    isDisabled(): boolean;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

//# Onsen Objects

/**
 * @description A global object that's used in Onsen UI. This object can be reached from the AngularJS scope
 */
interface onsStatic {
    /**
     * @description Method used to wait for app initialization. The callback will not be executed until Onsen UI has been completely initialized
     * @param {Function} callback Function that executes after Onsen UI has been initialized
     */
    ready(callback: any): void;
    /**
     * @description Initialize Onsen UI. Can be used to load Onsen UI without using the <code>ng-app</code> attribute from AngularJS
     * @param {String} [moduleName] AngularJS module name
     * @param {Array} [dependencies] List of AngularJS module dependencies
     * @return {Object} An AngularJS module object
     */
    bootstrap(moduleName?: string, dependencies?: objectArray): any;
    /**
     * @description Enable status bar fill feature on iOS7 and above
     */
    enableAutoStatusBarFill(): void;
    /**
     * @description Disable status bar fill feature on iOS7 and above
     */
    disableAutoStatusBarFill(): void;
    /**
     * @param {String} name Name of component, i.e. 'ons-page'
     * @param {Object|jqLite|HTMLElement} [dom] $event, jqLite or HTMLElement object
     * @return {Object} Component object. Will return null if no component was found
     * @description Find parent component object of <code>dom</code> element
     */
    findParentComponentUntil(name: string, dom?: any): any;
    /**
     * @param {String} selector CSS selector
     * @param {HTMLElement} [dom] DOM element to search from
     * @return {Object} Component object. Will return null if no component was found
     * @description Find component object using CSS selector
     */
    findComponent(selector: string, dom?: HTMLElement): any;
    /**
     * @param {Function} listener Function that executes when device back button is pressed
     * @description Set default handler for device back button
     */
    setDefaultDeviceBackButtonListener(listener: (eventObject: any) => any): void;
    /**
     * @description Disable device back button event handler
     */
    disableDeviceBackButtonHandler(): void;
    /**
     * @description Enable device back button event handler
     */
    enableDeviceBackButtonHandler(): void;
    /**
     * @return {Boolean} Will be true if Onsen UI is initialized
     * @description Returns true if Onsen UI is initialized
     */
    isReady(): boolean;
    /**
     * @param {HTMLElement} dom Element to compile
     * @description Compile Onsen UI components
     */
    compile(dom: HTMLElement): void;
    /**
     * @return {Boolean} Will be true if the app is running in Cordova
     * @description Returns true if running inside Cordova
     */
    isWebView(): boolean;
    /**
     * @param {String} page Page name. Can be either an HTML file or an <ons-template> containing a <ons-alert-dialog> component
     * @param {Object} [options] Parameter object
     * @param {Object} [options.parentScope] Parent scope of the dialog. Used to bind models and access scope methods from the dialog
     * @return {Promise} Promise object that resolves to the alert dialog component object
     * @description Create a alert dialog instance from a template
     */
    createAlertDialog(page: string): any;
    /**
     * @param {String} page Page name. Can be either an HTML file or an <ons-template> containing a <ons-dialog> component
     * @param {Object} [options] Parameter object
     * @param {Object} [options.parentScope] Parent scope of the dialog. Used to bind models and access scope methods from the dialog
     * @return {Promise} Promise object that resolves to the dialog component object
     * @description Create a dialog instance from a template
     */
    createDialog(page: string): any;
    /**
     * @param {String} page Page name. Can be either an HTML file or an <ons-template> containing a <ons-dialog> component
     * @param {Object} [options] Parameter object
     * @param {Object} [options.parentScope] Parent scope of the dialog. Used to bind models and access scope methods from the dialog
     * @return {Promise} Promise object that resolves to the popover component object
     * @description Create a popover instance from a template
     */
    createPopover(page: string): any;

    /**
     * @description Utility methods to create different kinds of alert dialogs. There are three methods available: alert, confirm and prompt
     */
    notification: onsNotification;

    /**
     * @description Utility methods for orientation detection
     */
    orientation: onsOrientation;

    /**
     * @description Utility methods to detect current platform
     */
    platform: onsPlatform;
}


interface alertOptions {
    message?: string;
    messageHTML?: string;
    buttonLabel?: string;
    buttonLabels?: stringArray;
    primaryButtonIndex?: number;
    cancelable?: boolean;
    animation?: string;
    title?: string;
    modifier?: string;
    callback?: any;
}

interface onsNotification {
    /**
     * @param {Object} options Parameter object
     * @param {String} [options.message] Alert message
     * @param {String} [options.messageHTML] Alert message in HTML
     * @param {String} [options.buttonLabel] Label for confirmation button. Default is "OK"
     * @param {String} [options.animation] Animation name. Available animations are "none", "fade" and "slide"
     * @param {String} [options.title] Dialog title. Default is "Alert"
     * @param {String} [options.modifier] Modifier for the dialog
     * @param {Function} [options.callback] Function that executes after dialog has been closed
     * @description
     *     Display an alert dialog to show the user a message
     *     The content of the message can be either simple text or HTML
     *     Must specify either message or messageHTML
     */
    alert(options: alertOptions): void;
    /**
     * @param {Object} options Parameter object
     * @param {String} [options.message] Confirmation question
     * @param {String} [options.messageHTML] Dialog content in HTML
     * @param {Array} [options.buttonLabels] Labels for the buttons. Default is ["Cancel", "OK"]
     * @param {Number} [options.primaryButtonIndex] Index of primary button. Default is 1
     * @param {Boolean} [options.cancelable] Whether the dialog is cancelable or not. Default is false
     * @param {String} [options.animation] Animation name. Available animations are "none", "fade" and "slide"
     * @param {String} [options.title] Dialog title. Default is "Confirm"
     * @param {String} [options.modifier] Modifier for the dialog
     * @param {Function} [options.callback]
     *     Function that executes after the dialog has been closed
     *     Argument for the function is the index of the button that was pressed or -1 if the dialog was canceled
     * @description
     *     Display a dialog to ask the user for confirmation
     *     The default button labels are "Cancel" and "OK" but they can be customized
     *     Must specify either message or messageHTML
     */
    confirm(options: alertOptions): void;
    /**
     * @param {Object} options Parameter object
     * @param {String} [options.message] Prompt question
     * @param {String} [options.messageHTML] Dialog content in HTML
     * @param {String} [options.buttonLabel] Label for confirmation button. Default is "OK"
     * @param {Number} [options.primaryButtonIndex] Index of primary button. Default is 1
     * @param {Boolean} [options.cancelable] Whether the dialog is cancelable or not. Default is false
     * @param {String} [options.animation] Animation name. Available animations are "none", "fade" and "slide"
     * @param {String} [options.title] Dialog title. Default is "Alert"
     * @param {String} [options.modifier] Modifier for the dialog
     * @param {Function} [options.callback]
     *     Function that executes after the dialog has been closed
     *     Argument for the function is the value of the input field or null if the dialog was canceled
     * @description
     *     Display a dialog with a prompt to ask the user a question
     *     Must specify either message or messageHTML
     */
    prompt(options: alertOptions): void;
}

interface onsOrientation {
    /**
     * @return {Boolean} Will be true if the current orientation is portrait mode
     * @description Returns whether the current screen orientation is portrait or not
     */
    isPortrait(): boolean;
    /**
     * @return {Boolean} Will be true if the current orientation is landscape mode
     * @description Returns whether the current screen orientation is landscape or not
     */
    isLandscape(): boolean;
    /**
     * @description Add an event listener
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    on(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Add an event listener that's only triggered once
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    once(eventName: string, listener: (eventObject: any) => any): void;
    /**
     * @description Remove an event listener. If the listener is not specified all listeners for the event type will be removed
     * @param {String} eventName Name of the event
     * @param {Function} listener Function to execute when the event is triggered
     */
    off(eventName: string, listener?: (eventObject: any) => any): void;
}

interface onsPlatform {
    /**
     * @description Returns whether app is running in Cordova
     * @return {Boolean}
     */
    isWebView(): boolean;

    /**
     * @description Returns whether the OS is iOS
     * @return {Boolean}
     */
    isIOS(): boolean;

    /**
     * @description Returns whether the OS is Android
     * @return {Boolean}
     */
    isAndroid(): boolean;

    /**
     * @description Returns whether the device is iPhone
     * @return {Boolean}
     */
    isIPhone(): boolean;

    /**
     * @description Returns whether the device is iPad
     * @return {Boolean}
     */
    isIPad(): boolean;

    /**
     * @description Returns whether the device is BlackBerry
     * @return {Boolean}
     */
    isBlackBerry(): boolean;

    /**
     * @description Returns whether the browser is Opera
     * @return {Boolean}
     */
    isOpera(): boolean;

    /**
     * @description Returns whether the browser is Firefox
     * @return {Boolean}
     */
    isFirefox(): boolean;

    /**
     * @description Returns whether the browser is Safari
     * @return {Boolean}
     */
    isSafari(): boolean;

    /**
     * @description Returns whether the browser is Chrome
     * @return {Boolean}
     */
    isChrome(): boolean;

    /**
     * @description Returns whether the browser is Internet Explorer
     * @return {Boolean}
     */
    isIE(): boolean;

    /**
     * @description Returns whether the iOS version is 7 or above
     * @return {Boolean}
     */
    isIOS7above(): boolean;
}

declare var ons: onsStatic;
