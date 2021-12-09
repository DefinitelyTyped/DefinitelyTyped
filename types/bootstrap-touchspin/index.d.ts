// Type definitions for Bootstrap TouchSpin
// Project: http://www.virtuosoft.eu/code/bootstrap-touchspin/
// Definitions by: Albin Sunnanbo <https://github.com/albinsunnanbo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/**
 * TouchSpinOptions. All options are optional
 */
interface TouchSpinOptions {
    /**
     * Applied when no explicit value is set on the input with the value attribute.
     * Empty string means that the value remains empty on initialization.
     */
    initval?: number | string | undefined;

    /**
     * Minimum value.
     */
    min?: number | undefined;

    /**
     * Maximum value.
     */
    max?: number | undefined;

    /**
     * Incremental/decremental step on up/down change.
     */
    step?: number | undefined;

    /**
     * How to force the value to be divisible by step value: 'none' | 'round' | 'floor' | 'ceil'
     */
    forcestepdivisibility?: string | undefined;

    /**
     * Number of decimal points.
     */
    decimals?: number | undefined;

    /**
     * Refresh rate of the spinner in milliseconds.
     */
    stepinterval?: number | undefined;

    /**
     * Time in milliseconds before the spinner starts to spin.
     */
    stepintervaldelay?: number | undefined;

    /**
     * Enables the traditional up/down buttons.
     */
    verticalbuttons?: boolean | undefined;

    /**
     * Class of the up button with vertical buttons mode enabled.
     */
    verticalupclass?: string | undefined;

    /**
     * Class of the down button with vertical buttons mode enabled.
     */
    verticaldownclass?: string | undefined;

    /**
     * Text before the input.
     */
    prefix?: string | undefined;

    /**
     * Text after the input.
     */
    postfix?: string | undefined;

    /**
     * Extra class(es) for prefix.
     */
    prefix_extraclass?: string | undefined;

    /**
     * Extra class(es) for postfix.
     */
    postfix_extraclass?: string | undefined;

    /**
     * If enabled, the the spinner is continually becoming faster as holding the button.
     */
    booster?: boolean | undefined;

    /**
     * Boost at every nth step.
     */
    boostat?: number | undefined;

    /**
     * Maximum step when boosted.
     */
    maxboostedstep?: number | boolean | undefined;

    /**
     * Enables the mouse wheel to change the value of the input.
     */
    mousewheel?: boolean | undefined;

    /**
     * Class(es) of down button.
     */
    buttondown_class?: string | undefined;

    /**
     * Class(es) of up button.
     */
    buttonup_class?: string | undefined;
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
