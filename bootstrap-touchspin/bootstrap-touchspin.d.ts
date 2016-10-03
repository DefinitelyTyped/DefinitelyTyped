// Type definitions for Bootstrap TouchSpin
// Project: http://www.virtuosoft.eu/code/bootstrap-touchspin/
// Definitions by: Albin Sunnanbo <https://github.com/albinsunnanbo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

/**
 * TouchSpinOptions. All options are optional
 */
interface TouchSpinOptions {
    /**
     * Applied when no explicit value is set on the input with the value attribute.
     * Empty string means that the value remains empty on initialization.
     */
    initval?: number | string;

    /**
     * Minimum value.
     */
    min?: number;

    /**
     * Maximum value.
     */
    max?: number;

    /**
     * Incremental/decremental step on up/down change.
     */
    step?: number;

    /**
     * How to force the value to be divisible by step value: 'none' | 'round' | 'floor' | 'ceil'
     */
    forcestepdivisibility?: string;

    /**
     * Number of decimal points.
     */
    decimals?: number;

    /**
     * Refresh rate of the spinner in milliseconds.
     */
    stepinterval?: number;

    /**
     * Time in milliseconds before the spinner starts to spin.
     */
    stepintervaldelay?: number;

    /**
     * Enables the traditional up/down buttons.
     */
    verticalbuttons?: boolean;

    /**
     * Class of the up button with vertical buttons mode enabled.
     */
    verticalupclass?: string;

    /**
     * Class of the down button with vertical buttons mode enabled.
     */
    verticaldownclass?: string;

    /**
     * Text before the input.
     */
    prefix?: string;

    /**
     * Text after the input.
     */
    postfix?: string;

    /**
     * Extra class(es) for prefix.
     */
    prefix_extraclass?: string;

    /**
     * Extra class(es) for postfix.
     */
    postfix_extraclass?: string;

    /**
     * If enabled, the the spinner is continually becoming faster as holding the button.
     */
    booster?: boolean;

    /**
     * Boost at every nth step.
     */
    boostat?: number;

    /**
     * Maximum step when boosted.
     */
    maxboostedstep?: number | boolean;

    /**
     * Enables the mouse wheel to change the value of the input.
     */
    mousewheel?: boolean;

    /**
     * Class(es) of down button.
     */
    buttondown_class?: string;

    /**
     * Class(es) of up button.
     */
    buttonup_class?: string;
}

interface JQuery {
    /**
     * Initialize TouchSpin
     */
    TouchSpin(): JQuery;

    /**
     * Inialize TouchSpin with options
     * @param options a TouchSpinOptions object with one or more options
     */
    TouchSpin(options: TouchSpinOptions): JQuery;
}
