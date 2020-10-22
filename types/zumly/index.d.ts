// Type definitions for zumly 0.9
// Project: https://zumly.org
// Definitions by: edwinork <https://github.com/edwinork>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Zumly powers your apps with a zoomable user interface (ZUI) taste.
 */
declare class zumly {
    /**
     * Creates a Zumly instance
     * @params options
     * @example
     *  new Zumly({
     *  mount: '.mount',
     *  initialView: 'home',
     *  views: {
     *   home,
     *   contact,
     *   ...
     *  }
     *
     */
    constructor(options: zumly.Options);

    init(): Promise<void>;

    zoomLevel(): number;

    zoomIn(el: Element): Promise<void>;

    zoomOut(): void;
}

declare namespace zumly {
    type WithRender = Record<string, unknown> & { render(): Promise<string> };

    interface Options {
        // Mount DOM Element
        mount: string;
        // First rendered view name
        initialView: string;
        // Store of all view objects
        views: Record<string, WithRender | string>;
        // Custom transitions
        transitions?: {
            // Effects for background views
            effects: Array<'blur' | 'sepia' | 'saturate'>;
            // How new injected view is adapted. String. Default 'width'
            cover: 'height' | 'width';
            // Transition duration. Default '1s'
            duration: string;
            // Transition ease. Default 'ease-in-out'
            ease: string;
        };
        // Activate debug notifications
        debug?: boolean;
    }
}

export = zumly;

export as namespace zumly;
