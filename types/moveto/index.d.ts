declare class MoveTo {
    /**
     * MoveTo Constructor
     * @param options Options
     * @param easeFunctions Custom ease functions
     */
    constructor(
        options?: MoveTo.MoveToOptions,
        easeFunctions?: MoveTo.MoveToEaseFunctionsObject,
    );
    /**
     * Options
     */
    options: MoveTo.MoveToOptions;
    /**
     * Custom ease functions
     */
    easeFunctions: MoveTo.MoveToEaseFunctionsObject;
    /**
     * Start scroll animation from current position to the anchor point
     * @param target Target element/position to be scrolled. Target position is the scrolling distance. It must be negative if the upward movement is desired
     * @param options Custom options
     */
    move(target: HTMLElement | number, options?: MoveTo.MoveToOptions): void;
    /**
     * Register a dom element as trigger
     * @param dom The trigger element for starting to scroll when on click
     * @param callback Callback function to be run after the scroll complete. This will overwrite the callback option
     * @return Unregister function
     */
    registerTrigger(
        dom: HTMLElement,
        callback?: MoveTo.callbackType,
    ): MoveTo.unregisterTriggerType;
    /**
     * Adds custom ease function
     * @param name Ease function name
     * @param fn Ease function
     */
    addEaseFunction(name: string, fn: MoveTo.MoveToEaseFunction): void;
}

declare namespace MoveTo {
    type unregisterTriggerType = () => void;

    /**
     * Callback function to be run after the scroll complete.
     */
    type callbackType = (target: HTMLElement | number) => void;

    interface MoveToOptions {
        /**
         * The tolerance of the target to be scrolled, can be negative or positive
         */
        tolerance?: number | undefined;
        /**
         * Duration of scrolling, in milliseconds
         */
        duration?: number | undefined;
        /**
         * Ease function name
         */
        easing?: string | undefined;
        /**
         * The container been computed and scrolled
         */
        container?: Window | HTMLElement | undefined;
        /**
         * The function to be run after scrolling complete. Target passes as the first argument
         */
        callback?: callbackType | undefined;
    }

    interface MoveToEaseFunctionsObject {
        [key: string]: MoveToEaseFunction;
    }

    /**
     * Easing Function
     * @param t Current time
     * @param b Start value
     * @param c Change in value
     * @param d Duration
     * @return Calculated value
     */
    type MoveToEaseFunction = (
        t: number,
        b: number,
        c: number,
        d: number,
    ) => number;
}

export = MoveTo;
export as namespace MoveTo;
