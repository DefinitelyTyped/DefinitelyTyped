// Type definitions for materialize-css v0.98.0
// Project: http://materializecss.com/
// Definitions by: Erik Lieben <https://github.com/eriklieben>, Leon Yu <https://github.com/leonyu>, Sukhdeep Singh <https://github.com/SinghSukhdeep>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="pickadate" />

declare namespace Materialize {

    /**
     * The collapsible options
     */
    interface CollapsibleOptions {
        /**
        * A setting that changes the collapsible behavior to expandable instead of the default accordion style
        */
        accordion?: boolean;

        /**
         * Callback for Collapsible section close.
         * Default: function() { alert('Closed'); }
         */
        onClose?: Function;

        /**
         * Callback for Collapsible section open.
         * Default: function() { alert('Opened'); }
         */
        onOpen?: Function;
    }

    interface TooltipOptions {
        /**
        * The delay before the tooltip shows (in milliseconds)
        */
        delay: number;
        /**
         * Tooltip text. Can use custom HTML if you set the html option
         */
        tooltip?: string;
        /**
         * Set the direction of the tooltip. 'top', 'right', 'bottom', 'left'. 
         * 
         * (Default: 'bottom')
         */
        position?: string;
        /**
         * Allow custom html inside the tooltip. 
         * 
         * (Default: false)
         */
        html?: boolean;
    }

    /**
     * The dropdown options
     */
    interface DropDownOptions {

        /**
         * The duration of the transition enter in milliseconds.
         * Default: 300
         */
        inDuration?: number;

        /**
         * The duration of the transition out in milliseconds.
         * Default: 225
         */
        outDuration?: number;


        /**
         * If true, constrainWidth to the size of the dropdown activator.
         * Default: true
         */
        constrainWidth?: boolean;
        /**
         * If true, the dropdown will open on hover.
         * Default: false
         */
        hover?: boolean;

        /**
         * This defines the spacing from the aligned edge.
         * Default: 0
         */
        gutter?: number;

        /**
         * If true, the dropdown will show below the activator.
         * Default: false
         */
        belowOrigin?: boolean;

        /**
         * Defines the edge the menu is aligned to.
         * Default: 'left'
         */
        alignment?: string;
        /**
         * If true, stops the event propagating from the dropdown origin click handler.
         * 
         * Default: false
         */
        stopPropagation?: boolean
    }

    /**
     * The slider options
     */
    interface SliderOptions {

        /**
         * Set to false to hide slide indicators.
         * Default: true
         */
        indicators?: boolean;

        /**
         * Set height of slider.
         * Default: 400
         */
        height?: number;

        /**
         * Set the duration of the transition animation in ms.
         * Default: 500
         */
        transition?: number;

        /**
         * Set the duration between transitions in ms.
         * Default: 6000
         */
        interval?: number;
    }

    /**
     * The carousel options
     */
    interface CarouselOptions {
        /**
         * Transition duration in milliseconds
         * Default: 200
         */
        duration?: number;

        /**
         * Perspective zoom. If 0, all items are the same size.
         * Default: -100
         */
        dist?: number;

        /**
         * Set the duration of the transition animation in ms.
         * Default: 500
         */
        shift?: number;

        /**
         * Set the duration between transitions in ms.
         * Default: 6000
         */
        padding?: number;

        /**
         * Set the width of the carousel.
         * Default: false
         */
        fullWidth?: boolean;
        /**
         * Set to true to show indicators. 
         * 
         * Default: false
         */
        indicators?: boolean;
        /**
         * Don't wrap around and cycle through items.
         * 
         * Default: false
         */
        noWrap?: boolean;
    }

    /**
     * The modal options
     */
    interface ModalOptions {

        /**
         * Modal can be dismissed by clicking outside of the modal.
         * Default: true
         */
        dismissible?: boolean;

        /**
         * Opacity of modal background.
         * Default. .5
         */
        opacity?: number;

        /**
         * Transition in duration.
         * Default: 300
         */
        inDuration?: number;

        /**
         * Transition out duration.
         * Default: 200
         */
        outDuration?: number;
        /**
         * Starting top style attribute
         * Default: `4%`
         */
        startingTop?: string;
        /**
         * Ending top style attribute
         * Default : `10%`
         */
        endingTop?: string;

        /**
         * Callback for Modal open.
         * Default: function() { alert('Ready'); }
         */
        ready?: Function;

        /**
         * Callback for Modal close.
         * Default: function() { alert('Closed'); }
         */
        complete?: Function;
    }

    /**
     * The push pin options
     */
    interface PushpinOptions {

        /**
         * The distance in pixels from the top of the page where the element becomes fixed.
         * Default: 0
         */
        top?: number;

        /**
         * The distance in pixels from the top of the page where the elements stops being fixed.
         * Default: Infinity
         */
        bottom?: number;

        /**
         * The offset from the top the element will be fixed at.
         * Default: 0
         */
        offset?: number;
    }

    /**
     * The scroll spy options
     */
    interface ScrollSpyOptions {
        /**
         * Offset from top.
         * Default: 200
         */
        scrollOffset?: number;
    }

    /**
     * The slideNav options
     */
    interface SideNavOptions {
        /**
         * Default: 240
         */
        menuWidth?: number;

        /**
         * The horizontal origin
         * Default: ' left'
         */
        edge?: string;

        /**
         * Closes side-nav on <a> clicks, useful for Angular/Meteor
         * Default: false
         */
        closeOnClick?: boolean;

        /**
         * Choose whether you can drag to open on touch screens
         * Default: true
         */
        draggable?: boolean;
    }

    interface ScrollFireOptions {

        /**
         * The selector for the element that is being tracked.
         */
        selector?: string;

        /**
         * Offset to use when activating the scroll fire event
         * If this is 0, the callback will be fired when the selector element is at the very bottom of the user's window.
         */
        offset?: number;

        /**
         * The string function call that you want to make when the user scrolls to the threshold.
         * It will only be called once.
         * Example: 'console.log("hello, world!")';
         * or callback: () => { console.log('hello world'); }
         */
        callback?: string | (() => void);
    }

    interface TabOptions {
        /**
         * Execute a callback function when the tab is changed. 
         * 
         * The callback provides a parameter which refers to the current tab being shown.
         */
        onShow?: Function;

        /**
         * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
         * 
         * Default: false
         */
        swipeable?: boolean;

        /**
         * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
         * 
         * Default: Infinity
         */
        responsiveThreshold?: number;
    }

    interface ChipDataObject {
        tag: string,
        image?: string,
        id?: number
    }

    interface ChipOptions {
        /**
         * Set the chip data 
         */
        data?: Materialize.ChipDataObject[];
        /**
         * Set first placeholder when there are no tags
         */
        placeholder?: string;
        /**
         * Set second placeholder when adding additional tags.
         */
        secondaryPlaceholder?: string;
        /**
         * Set autocomplete data.
         */
        autocompleteData?: any;
        /**
         * Set autocomplete limit.
         */
        autocompleteLimit?: number;
    }


    /**
     * The Materialize object
     */
    interface Materialize {

        /**
         * Displays a toast message on screen
         *
         * @name message The message to display on screen
         * @name displayLength The duration in milliseconds to display the message on screen
         * @name className The className to use to format the message to display
         * @name completeCallback Callback function to call when the messages completes/hides.
         */
        toast(message: string | JQuery, displayLength: number, className?: string, completeCallback?: Function): void;

        /**
         * Fires an event when the page is scrolled to a certain area
         *
         * @name options optional parameter with scroll fire options
         */
        scrollFire(options?: ScrollFireOptions[]): void;

        /**
         * A staggered reveal effect for any UL Tag with list items
         *
         * @name selector the selector for the list to show in staggered fasion
         */
        showStaggeredList(selector: string): void;

        /**
         * Fade in images. It also animates grayscale and brightness to give it a unique effect.
         *
         * @name selector the selector for the image to fade in
         */
        fadeInImage(selector: string): void;

        /**
         * Update all text field to reinitialize all the Materialize labels on the page if dynamically adding inputs
         */
        updateTextFields(): void;
    }
}

declare var Materialize: Materialize.Materialize;

interface JQuery {

    /**
     * open Fixed Action Button
     */
    openFAB(): void;
    /**
     * close Fixed Action Button
     */
    closeFAB(): void;

    /**
     * Select allows user input through specified options.
     * Initialization
     */
    material_select(): void;

    /**
     * Select allows user input through specified options.
     * Updating/Destroying Select
     *
     * @name method "destroy" destroy the material select
     */
    material_select(method: string): void;

    /**
     * Use a character counter in fields where a character restriction is in place.
     */
    characterCounter(): JQuery;

    /**
     * Collapsibles are accordion elements that expand when clicked on.
     * They allow you to hide content that is not immediately relevant to the user.
     *
     * @name options the collapsible options
     */
    collapsible(options?: Materialize.CollapsibleOptions): JQuery;

    /**
     * Tooltips are small, interactive, textual hints for mainly graphical elements.
     * When using icons for actions you can use a tooltip to give people clarification on its function.
     *
     * @name options the tooltip options or the string "remove" to remove the tooltip function
     */
    tooltip(options?: Materialize.TooltipOptions | string): JQuery;

    /**
     * Add a dropdown list to any button.
     * Make sure that the data-activates attribute matches the id in the <ul> tag.
     *
     * @name options the drop down options
     */
    dropdown(options?: Materialize.DropDownOptions): void;

    /**
     * Material box is a material design implementation of the Lightbox plugin.
     */
    materialbox(): JQuery;

    /**
     * slider is a simple and elegant image carousel.
     * You can also have captions that will be transitioned on their own depending on their alignment.
     * You can also have indicators that show up on the bottom of the slider.
     *
     * @name options the slider options
     */
    slider(options?: Materialize.SliderOptions): JQuery;

    /**
     * slider is a simple and elegant image carousel.
     * You can also have captions that will be transitioned on their own depending on their alignment.
     * You can also have indicators that show up on the bottom of the slider.
     *
     * @name method the string "start" to start the animation or "pauze" to pauze the animation
     */
    slider(method: string): JQuery;

    /**
     * Our slider is a simple and elegant image carousel.
     * You can also have captions that will be transitioned on their own depending on their alignment.
     * You can also have indicators that show up on the bottom of the slider.
     *
     * @name options the slider options or the string "start" to start the animation or "pauze" to pauze the animation
     */
    carousel(options?: Materialize.CarouselOptions): JQuery;

    /**
     * Our slider is a simple and elegant image carousel.
     * You can also have captions that will be transitioned on their own depending on their alignment.
     * You can also have indicators that show up on the bottom of the slider.
     *
     * @name method the methods to pause, start, move to next and move to previous slide.
     */
    carousel(method: string, count?: number): JQuery;

    /**
     * Modal for dialog boxes, confirmation messages, or other content that can be called up.
     * 
     * For Initialization.
     */
    modal(): JQuery;

    /**
     * Modal for dialog boxes, confirmation messages, or other content that can be called up.
     * 
     * For opening and closing modals programatically.
     * 
     * @name string action action to do (`open` or `close)
     */
    modal(action: string): void;

    /**
     * Modal for dialog boxes, confirmation messages, or other content that can be called up.
     * 
     * To customize the behaviour of a modal
     *
     * @name options the lean modal options
     */
    modal(options: Materialize.ModalOptions): void;

    /**
     * Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
     */
    parallax(): JQuery;

    /**
     * Pushpin is a fixed positioning plugin.
     *
     * @name options the push pin options
     */
    pushpin(options?: Materialize.PushpinOptions): JQuery;

    /**
     * Scrollspy is a jQuery plugin that tracks certain elements and which element the user's screen is currently centered on.
     *
     * @name options the scroll spy options
     */
    scrollSpy(options?: Materialize.ScrollSpyOptions): JQuery;

    /**
     * A slide out menu. You can add a dropdown to your sidebar by using our collapsible component.
     *
     * @params methodOrOptions the slide navigation options or a string with "show" to reveal or "hide" to hide the menu
     */
    sideNav(methodOrOptions?: Materialize.SideNavOptions | string): void;

    /**
     * Programmatically trigger the tab change event
     *
     * @name method, the method to call (always "select_tab") and a param containing the id of the tab to open
     */
    tabs(method?: string, tab?: string): JQuery;

    /**
     * Tab Initialization with options
     *
     * @name TabOptions options jQuery plugin options
     */
    tabs(options?: Materialize.TabOptions): JQuery;

    /**
     * Chip Initialization
     * 
     * @name ChipOptions options Material chip options
     */
    material_chip(options?: Materialize.ChipOptions): JQuery;

    /**
     * To access chip data
     * 
     * @name string method name of the method to invoke
     */
    material_chip(method: string): Materialize.ChipDataObject[] | Materialize.ChipDataObject;
}
