// Type definitions for materialize-css v0.97.5
// Project: http://materializecss.com/
// Definitions by: Erik Lieben <https://github.com/eriklieben>, Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../pickadate/pickadate.d.ts" />

declare namespace Materialize {

    /**
     * The collapsible options
     */
    interface CollapsibleOptions {
        /**
        * A setting that changes the collapsible behavior to expandable instead of the default accordion style
        */
        accordion: boolean;
    }

    interface TooltipOptions {
        /**
        * The delay before the tooltip shows (in milliseconds)
        */
        delay:number;
    }

    /**
     * The dropdown options
     */
    interface DropDownOptions {

        /**
         * The duration of the transition enter in milliseconds.
         * Default: 300
         */
        inDuration?:number;

        /**
         * The duration of the transition out in milliseconds.
         * Default: 225
         */
        outDuration?:number;

        // TODO: constrain_width
        /**
         * If true, constrainWidth to the size of the dropdown activator.
         * Default: true
         */
        constrain_width?:boolean;
        /**
         * If true, the dropdown will open on hover.
         * Default: false
         */
        hover?:boolean;

        /**
         * This defines the spacing from the aligned edge.
         * Default: 0
         */
        gutter?:number;

        /**
         * If true, the dropdown will show below the activator.
         * Default: false
         */
        belowOrigin?:boolean;

        /**
         * Defines the edge the menu is aligned to.
         * Default: 'left'
         */
        alignment?:string;
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
         * Transition time.
         * Default: 200
         */
        time_constant?: number;

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
        full_width?: boolean;
    }

    /**
     * The lean modal options
     */
    interface LeanModalOptions {

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
        in_duration?: number;

        /**
         * Transition out duration.
         * Default: 200
         */
        out_duration?: number;

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
        top?:number;

        /**
         * The distance in pixels from the top of the page where the elements stops being fixed.
         * Default: Infinity
         */
        bottom?:number;

        /**
         * The offset from the top the element will be fixed at.
         * Default: 0
         */
        offset?:number;
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
         */
        callback?: string;
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
        toast(message:string|JQuery, displayLength:number, className?:string, completeCallback?:Function): void;

        /**
         * Fires an event when the page is scrolled to a certain area
         *
         * @name options optional parameter with scroll fire options
         */
        scrollFire(options?:ScrollFireOptions): void;

        /**
         * A staggered reveal effect for any UL Tag with list items
         *
         * @name selector the selector for the list to show in staggered fasion
         */
        showStaggeredList(selector:string): void;

        /**
         * Fade in images. It also animates grayscale and brightness to give it a unique effect.
         *
         * @name selector the selector for the image to fade in
         */
        fadeInImage(selector:string): void;

        /**
         * Update all text field to reinitialize all the Materialize labels on the page if dynamically adding inputs
         */
        updateTextFields(): void;
    }
}

declare var Materialize : Materialize.Materialize;

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
    tooltip(options?: Materialize.TooltipOptions|string): JQuery;

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
    carousel(method: string, count: [number]): JQuery;

    /**
     *  Modal for dialog boxes, confirmation messages, or other content that can be called up.
     *
     * @name options the lean modal options
     */
    leanModal(options?: Materialize.LeanModalOptions): JQuery;

    /**
     * Open a modal programatically
     *
     * @name options the lean modal options
     */
    openModal(options?: Materialize.LeanModalOptions): void;

    /**
     * Close a modal programatically
     */
    closeModal(): void;

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
    sideNav(methodOrOptions?: Materialize.SideNavOptions|string): void;

    /**
     * Programmatically trigger the tab change event
     *
     * @name method, the method to call (always "select_tab") and a param containing the id of the tab to open
     */
    tabs(method?:string, tab?:string): JQuery;
}
