// Type definitions for vanilla-tilt 1.3
// Project: https://github.com/micku7zu/vanilla-tilt.js
// Definitions by: Livio Brunner <https://github.com/BrunnerLivio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A smooth 3D tilt javascript library forked from Tilt.js (jQuery version).
 */
export namespace VanillaTilt {
    /**
     * Options which configures the tilting
     */
    interface TiltOptions {
        /**
         * Reverse the tilt direction
         */
        reverse?: boolean;
        /**
         * Max tilt rotation (degrees)
         */
        max?: number;
        /**
         * Transform perspective, the lower the more extreme the tilt gets.
         */
        perspective?: number;
        /**
         * 2 = 200%, 1.5 = 150%, etc..
         */
        scale?: number;
        /**
         * Speed of the enter/exit transition
         */
        speed?: number;
        /**
         * Set a transition on enter/exit.
         */
        transition?: boolean;
        /**
         * What axis should be disabled. Can be X or Y.
         */
        axis?: null | "x" | "y";
        /**
         * If the tilt effect has to be reset on exit.
         */
        reset?: boolean;
        /**
         * Easing on enter/exit.
         */
        easing?: string;
    }

    interface TiltValues {
        /**
         * The current tilt on the X axis
         */
        tiltX: number;
        /**
         * The current tilt on the Y axis
         */
        tiltY: number;
        /**
         * The current percentage on the X axis
         */
        percentageX: number;
        /**
         * The current percentage on the Y axis
         */
        percentageY: number;
    }

    interface HTMLVanillaTiltElement extends HTMLElement {
        vanillaTilt: VanillaTilt;
    }
}

/**
 * A smooth 3D tilt javascript library forked from Tilt.js (jQuery version).
 */
export class VanillaTilt {
    /**
     * Creates a new instance of a VanillaTilt element.
     * @param element The element, which should be a VanillaTilt element
     * @param settings Settings which configures the element
     */
    constructor(element: HTMLElement, settings?: VanillaTilt.TiltOptions);
    /**
     * Initializes one or multiple elements
     * @param elements The element, which should tilt
     * @param settings Settings, which configures the elements
     */
    static init(elements: HTMLElement | HTMLElement[], settings?: VanillaTilt.TiltOptions): void;
    /**
     * Resets the styling
     */
    reset(): void;
    /**
     * Get values of instance
     */
    getValues(): VanillaTilt.TiltValues;
    /**
     * Destroys the instance and removes the listeners.
     */
    destroy(): void;
    /**
     * Start listening to events
     */
    addEventListeners(): void;
    /**
     * Stop listening to events
     */
    removeEventListener(): void;
}
