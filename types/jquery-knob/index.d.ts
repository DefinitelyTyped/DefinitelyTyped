// Type definitions for jQuery Knob 1.2.13
// Project: http://anthonyterrien.com/knob/
// Definitions by: Iain Buchanan <https://github.com/iain8>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryKnob {
    export interface JQueryKnobOptions {
        /**
         * min value | default=0
         */
        min?: number | undefined;
        /**
         * max value | default=100
         */
        max?: number | undefined;
        /**
         * step size | default=1
         */
        step?: number | undefined;
        /**
         * starting angle in degrees | default=0
         */
        angleOffset?: number | undefined;
        /**
         * arc size in degrees | default=360
         */
        angleArc?: number | undefined;
        /**
         * stop at min & max on keydown/mousewheel | default=true
         */
        stopper?: boolean | undefined;
        /**
         * disable input and events | default=false
         */
        readOnly?: boolean | undefined;
        /**
         * direction of progression | default=clockwise
         */
        rotation?: string | undefined;
        /**
         * display mode "cursor", cursor size could be changed passing a
         * numeric value to the option, default width is used when passing
         * boolean value "true" | default=gauge
         */
        cursor?: string | boolean | undefined;
        /**
         * gauge thickness
         */
        thickness?: number | undefined;
        /**
         * gauge stroke endings | default=butt, round=rounded line endings
         */
        lineCap?: string | undefined;
        /**
         * dial width
         */
        width?: number | undefined;
        /**
         * dial height
         */
        height?: number | undefined;
        /**
         * default=true | false=hide input
         */
        displayInput?: boolean | undefined;
        /**
         * default=false | true=displays the previous value with transparency
         */
        displayPrevious?: boolean | undefined;
        /**
         * foreground color
         */
        fgColor?: string | undefined;
        /**
         * input value (number) color
         */
        inputColor?: string | undefined;
        /**
         * font family
         */
        font?: string | undefined;
        /**
         * font weight
         */
        fontWeight?: string | undefined;
        /**
         * background color
         */
        bgColor?: string | undefined;
        /**
         * executed on release
         */
        release?: ((value: number) => void) | undefined;
        /**
         * executed at each change of the value
         */
        change?: ((value: number) => void) | undefined;
        /**
         * when drawing the canvas
         */
        draw?: (() => void) | undefined;
        /**
         * triggered on [esc] keydown
         */
        cancel?: (() => void) | undefined;
        /**
         * allows to format output (add unit %, ms...)
         */
        format?: ((value: number) => void) | undefined;
    }
}

interface JQuery {
    /**
     * Create a knob for the given input field, with optional options
     */
    knob(options?: JQueryKnob.JQueryKnobOptions): JQuery;
}
