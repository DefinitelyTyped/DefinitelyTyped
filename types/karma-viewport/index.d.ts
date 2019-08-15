// Type definitions for karma-viewport 0.4
// Project: https://github.com/squidfunk/karma-viewport
// Definitions by: Karak <https://github.com/karak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Type definition file for 'karma-viewport'
// https://www.npmjs.com/package/karma-viewport

declare namespace KarmaViewport {
    interface Breakpoint {
        name: string;
        size: {
            width: number,
            height: number,
        };
    }

    interface Config {
        /** Context selector */
        context: string;
        /** Breakpoints */
        breakpoints: Breakpoint[];
    }

    class Viewport {
        /**
         * Create viewport resizer
         *
         * @param config - Configuration
         * @param context - Initialization context
         */
        constructor(config: Config, context: Window);

        /**
         * Load and embed document into viewport
         *
         * @param url - URL of document to load
         * @param cb - Callback to execute after document was loaded
         */
        load(url: string, cb: () => void): void;

        /**
         * Set viewport to number or array
         */
        set(width: number, height?: number): void;

        /**
         * Set viewport to breakpoint identifier
         */
        set(name: string): void;

        /**
         * Reset viewport
         */
        reset(): void;

        /**
         * Execute a callback for all breakpoints between the first and last given
         *
         * @example
         *   viewport.between("mobile", "tablet", name => {
         *     ...
         *   })
         *
         * @param first - First breakpoint name
         * @param last - Last breakpoint name
         * @param cb - Callback to execute after resizing
         */
        between(first: string, last: string, cb: (name: string) => void): void;

        /**
         * Execute a callback for all breakpoints
         *
         * @example
         *   viewport.each(name => {
         *     ...
         *   })
         *
         * @param cb - Callback to execute after resizing
         */
        each(cb: (name: string) => void): void;

        /**
         * Execute a callback starting at the given breakpoint
         *
         * @example
         *   viewport.from("tablet", name => {
         *     ...
         *   })
         *
         * @param first - First breakpoint name
         * @param cb - Callback to execute after resizing
         */
        from(first: string, cb: (name: string) => void): void;

        /**
         * Execute a callback ending at the given breakpoint
         *
         * @example
         *   viewport.to("tablet", name => {
         *     ...
         *   })
         *
         * @param last - Last breakpoint name
         * @param cb - Callback to execute after resizing
         */
        to(last: string, cb: (name: string) => void): void;

        /**
         * Retrieve configuration
         *
         * @return Configuration
         */
        readonly config: Config; // get config()

        /**
         * Retrieve context element
         *
         * @return context element
         */
        readonly element: HTMLIFrameElement; // get element()
    }
}

declare const viewport: KarmaViewport.Viewport;
