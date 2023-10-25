declare namespace SVGInjector {
    interface SVGInjector {
        /**
         * Replace the given elements with their full inline SVG DOM elements.
         *
         * @param elements Array of or single DOM element.
         * @param options Injector options.
         * @param done Callback that receives the injected element count as parameter.
         */
        (
            elements: Node | NodeList | Array<Node>,
            options?: SVGInjectorOptions,
            done?: (elementCount: number) => void,
        ): void;
    }

    interface SVGInjectorOptions {
        /**
         * Whether to run scripts blocks found in the SVG.
         *
         * Possible values:
         * 'always' — Run scripts every time.
         * 'once' — Only run scripts once for each SVG.
         * 'never' — Ignore scripts (default)
         */
        evalScripts?: string | undefined;

        /**
         * Location of fallback pngs, if desired.
         */
        pngFallback?: string | undefined;

        /**
         * Callback to run during each SVG injection. The SVG element is passed if
         * the injection was successful.
         */
        each?: ((svg: SVGElement | string) => void) | undefined;
    }
}

declare var SVGInjector: SVGInjector.SVGInjector;
export = SVGInjector;
export as namespace SVGInjector;
