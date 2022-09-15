// Type definitions for aos 3.0
// Project: https://github.com/michalsnik/aos, https://michalsnik.github.io/aos
// Definitions by: Rostislav Shermenyov <https://github.com/shermendev>, Matheus Grieger <https://github.com/matheusgrieger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Aos {
    type easingOptions =
        | "linear"
        | "ease"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "ease-in-back"
        | "ease-out-back"
        | "ease-in-out-back"
        | "ease-in-sine"
        | "ease-out-sine"
        | "ease-in-out-sine"
        | "ease-in-quad"
        | "ease-out-quad"
        | "ease-in-out-quad"
        | "ease-in-cubic"
        | "ease-out-cubic"
        | "ease-in-out-cubic"
        | "ease-in-quart"
        | "ease-out-quart"
        | "ease-in-out-quart";

    type anchorPlacementOptions =
        | "top-bottom"
        | "top-center"
        | "top-top"
        | "center-bottom"
        | "center-center"
        | "center-top"
        | "bottom-bottom"
        | "bottom-center"
        | "bottom-top";

    interface Aos {
        /**
         * Initializing AOS
         * - Create options merging defaults with user defined options
         * - Set attributes on <body> as global setting - css relies on it
         * - Attach preparing elements to options.startEvent,
         *   window resize and orientation change
         * - Attach function that handle scroll and everything connected to it
         *   to window scroll event and fire once document is ready to set initial state
         *  @param options options
         */
        init(options?: AosOptions): void;
        /**
         * Refresh AOS
         */
        refresh(): void;
        /**
         * Hard refresh
         * create array with new elements and trigger refresh
         */
        refreshHard(): void;
    }

    interface AosOptions {
        // #region Global settings
        /**
         * Class applied on animation
         */
        animatedClassName?: string | undefined;
        /**
         * Accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
         */
        disable?: "phone" | "tablet" | "mobile" | boolean | (() => boolean) | undefined;
        /**
         * Class applied after initialization
         */
        initClassName?: string | undefined;
        /**
         * Name of the event dispatched on the document, that AOS should initialize on
         */
        startEvent?: string | undefined;
        /**
         * If true, will add content of `data-aos` as classes on scroll
         */
        useClassNames?: boolean | undefined;
        /**
         * Disables automatic mutations' detections
         */
        disableMutationObserver?: boolean | undefined;
        /**
         * The delay on debounce used while resizing window
         */
        debounceDelay?: number | undefined;
        /**
         * The delay on throttle used while scrolling the page
         */
        throttleDelay?: number | undefined;
        // #endregion

        // #region Settings that can be overridden on per-element basis, by `data-aos-*` attributes
        /**
         * Defines which position of the element regarding to window should trigger the animation
         */
        anchorPlacement?: anchorPlacementOptions | undefined;
        /**
         * Values from 0 to 3000, with step 50ms
         */
        delay?: number | undefined;
        /**
         * Values from 0 to 3000, with step 50ms
         */
        duration?: number | undefined;
        /**
         * Default easing for AOS animations
         */
        easing?: easingOptions | undefined;
        /**
         * Whether elements should animate out while scrolling past them
         */
        mirror?: boolean | undefined;
        /**
         * Offset (in px) from the original trigger point
         */
        offset?: number | undefined;
        /**
         * Whether animation should happen only once - while scrolling down
         */
        once?: boolean | undefined;
        // #endregion
    }

    interface AosEvent extends Event {
        detail: Element;
    }

    type AosEventType = "aos:in" | "aos:out";
}

declare global {
    interface Document {
        addEventListener(
            type: Aos.AosEventType,
            listener: (event: Aos.AosEvent) => void,
            options?: boolean | AddEventListenerOptions
        ): void;
    }
}

declare const Aos: Aos.Aos;

export = Aos;
export as namespace Aos;
