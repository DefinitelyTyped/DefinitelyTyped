// Type definitions for bootstrap-maxlength v1.7.0
// Project: https://github.com/mimo84/bootstrap-maxlength
// Definitions by: Dan Manastireanu <https://github.com/danmana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace BootstrapMaxlength {

    /**
     * Possible options for the position of the counter. (passed to $.fn.css)
     */
    interface PlacementOptions {
        /**
         * The top position of the counter (Number of pixels, or a px or percent string)
         */
        top?: Number | string,
        /**
         * The right position of the counter (Number of pixels, or a px or percent string)
         */
        right?: Number | string,
        /**
         * The bottom position of the counter (Number of pixels, or a px or percent string)
         */
        bottom?: Number | string,
        /**
         * The left position of the counter (Number of pixels, or a px or percent string)
         */
        left?: Number | string,
        /**
         * The positioning to use. For example 'relative', 'absolute'
         */
        position?: string
    }

    /**
     * Representation of the current input position
     */
    interface PositionParam {
        top: Number,
        right: Number,
        bottom: Number,
        left: Number,
        width: Number,
        height: Number
    }

    export interface Options {
        /**
         * If true the threshold will be ignored and the remaining length indication will be always showing up while typing or on focus on the input
         * @default false
         */
        alwaysShow?: Boolean,
        /**
         * This is a number indicating how many chars are left to start displaying the indications
         * @default 10
         */
        threshold?: Number,
        /**
         * It's the class of the element with the indicator. By default is the bootstrap "label label-success" but can be changed to anything you'd like.
         * @default 'label label-success'
         */
        warningClass?: string,
        /**
         * It's the class the element gets when the limit is reached. Default is "label label-important label-danger" (to support Bootstrap 2 and 3).
         * @default 'label label-important label-danger'
         */
        limitReachedClass?: string,
        /**
         * Represents the separator between the number of typed chars and total number of available chars.
         * @default ' / '
         */
        separator?: string,
        /**
         * Is a string of text that can be outputted in front of the indicator.
         * @default ''
         */
        preText?: string,
        /**
         * Is a string outputted after the indicator.
         * @default ''
         */
        postText?: string,
        /**
         * If false, will display just the number of typed characters, e.g. will not display the max length.
         * @default true
         */
        showMaxLength?: Boolean,
        /**
         * If false, will display just the remaining length, e.g. will display remaining lenght instead of number of typed characters.
         * @default true
         */
        showCharsTyped?: Boolean,
        /**
         * Is a string, define where to output the counter.
         * Options:  bottom, left, top, right, bottom-right, top-right, top-left, bottom-left and centered-right
         * @default 'bottom'
         */
        placement?: string | PlacementOptions | ((currentInput: JQuery, maxLengthIndicator: JQuery, currentInputPosition: PositionParam) => void),
        /**
         * Appends the maxlength indicator badge to the parent of the input rather than to the body.
         * @default false
         */
        appendToParent?: boolean,
        /**
         * An alternative way to provide the message text.
         * String example: 'You have typed %charsTyped% chars, %charsRemaining% of %charsTotal% remaining'.
         * %charsTyped%, %charsRemaining% and %charsTotal% will be replaced by the actual values. This overrides the options separator, preText, postText and showMaxLength.
         * Alternatively you may supply a function that the current text and max length and returns the string to be displayed.
         * Function example: function(currentText, maxLength) { return '' + Math.ceil(currentText.length / 160) + ' SMS Message(s)'; }
         * @default null
         */
        message?: string | ((currentText : string, maxLength: Number) => string),
        /**
         * If true the input will count using utf8 bytesize/encoding. For example: the '¢' character is counted as two characters.
         * @default false
         */
        utf8?: boolean,
        /**
         * Shows the badge as soon as it is added to the page, similar to alwaysShow
         * @default false
         */
        showOnReady?: boolean,
        /**
         * Count linebreak as 2 characters to match IE/Chrome textarea validation. As well as DB storage.
         * @default true
         */
        twoCharLinebreak?: boolean,
        /**
         * Allows a custom attribute to display indicator without triggering native maxlength behaviour.
         * Ignored if value greater than a native maxlength attribute.
         * 'overmax' class gets added when exceeded to allow user to implement form validation.
         * @default null (use the maxlength attribute and browser functionality)
         */
        customMaxAttribute?: string,
        /**
         * Will allow the input to be over the customMaxLength. Useful in soft max situations.
         * @default false
         */
        allowOverMax?: boolean,
        /**
         * If the browser doesn't support the maxlength attribute, attempt to type more than
         * the indicated chars, will be prevented.
         * @default false
         */
        validate?: boolean
    }
}


interface JQuery {
    /** Apply the maxlength plugin on the selected elemens */
    maxlength(options?: BootstrapMaxlength.Options): JQuery;
    on(events: 'maxlength.shown', handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
    on(events: 'maxlength.hidden', handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
    trigger(eventType: 'maxlength.reposition', extraParameters?: any[]|Object): JQuery;

}
