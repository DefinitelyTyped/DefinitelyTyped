// Type definitions for backstretch v 2.0.4
// Project: https://github.com/srobbin/jquery-backstretch
// Definitions by: Dmytro Kulyk <https://github.com/dkulyk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryBackStretch {

    interface BackStretchOptions {
        /**
         * The ratio of the width/height of the image doesn't always jive with the
         * width/height of the window. This parameter controls whether or not we
         * center the image on the X axis to account for the discrepancy.
         */
        centeredX?:boolean;

        /**
         * This parameter controls whether or not we center the image on the Y axis
         * to account for the aforementioned discrepancy.
         */
        centeredY?:boolean;

        /**
         * This is the speed at which the image will fade in. Integers in
         * milliseconds are accepted, as well as standard jQuery speed strings
         * (slow, normal, fast).
         */
        duration?:number | string;

        /**
         * The amount of time in between slides, when using Backstretch as a
         * slideshow, expressed as the number of milliseconds.
         */
        fade?:number;
    }

    interface BackStretch {
        /**
         * This method is called automatically when the container (window or
         * block-level element) is resized, however you can always call this
         * manually if needed.
         */
        resize():BackStretch;

        /**
         * Jump to the slide at a given index, where n is the number of the
         * image that you'd like to display. Slide number starts at 0.
         *
         * @param {number} newIndex
         */
        show(newIndex:number):BackStretch;

        /**
         * Advance to the next image in a slideshow.
         */
        next():BackStretch;

        /**
         * Display the previous image in a slideshow.
         */
        prev():BackStretch;

        /**
         * Pause the slideshow.
         */
        pause():BackStretch;

        /**
         * Resume a paused slideshow.
         */
        resume():BackStretch;

        /**
         * Destroy the Backstretch instance. Optionally, you can pass in a Boolean
         * parameter, preserveBackground, to determine whether or not you'd like
         * to keep the current image stretched as the background image.
         *
         * @param {boolean} preserveBackground
         */
        destroy(preserveBackground?:boolean):void;
    }
}

interface JQueryStatic {
    backstretch(images:string[], config?:JQueryBackStretch.BackStretchOptions):JQueryBackStretch.BackStretch;
}

interface JQuery {
    backstretch(images:string[], config?:JQueryBackStretch.BackStretchOptions):JQueryBackStretch.BackStretch;
    backstretch(method:string):JQuery;
}
