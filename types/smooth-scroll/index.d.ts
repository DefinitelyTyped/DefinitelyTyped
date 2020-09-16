// Type definitions for smooth-scroll 16.1
// Project: https://github.com/cferdinandi/smooth-scroll
// Definitions by: Andrei Horodinca <https://github.com/andreiho>
//                 grgr-dkrk <https://github.com/grgr-dkrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace SmoothScroll;

export = SmoothScroll;

declare namespace SmoothScroll {
    type Easing =
        | "Linear"
        | "easeInQuad"
        | "easeInCubic"
        | "easeInQuart"
        | "easeInQuint"
        | "easeInOutQuad"
        | "easeInOutCubic"
        | "easeInOutQuart"
        | "easeInOutQuint"
        | "easeOutQuad"
        | "easeOutCubic"
        | "easeOutQuart"
        | "easeOutQuint";

    interface Options {
        // Selectors
        ignore?: string;
        header?: string;
        topOnEmptyHash?: boolean;

        // Speed & Easing
        speed?: number;
        speedAsDuration?: boolean;
        durationMax?: number | null;
        durationMin?: number | null;
        clip?: boolean;
        offset?:
            | number
            | ((
                  anchor?: Element | number | null,
                  toggle?: Element | null
              ) => number);
        easing?: Easing;
        customEasing?: (time: number) => number;

        // History
        updateURL?: boolean;
        popstate?: boolean;

        // Custom Events
        emitEvents?: boolean;
    }
}

declare class SmoothScroll {
    constructor(selector?: string, options?: SmoothScroll.Options);

    init(options?: SmoothScroll.Options): void;

    destroy(): void;

    animateScroll(
        anchor: Element | number | null,
        toggle?: Element | null,
        options?: SmoothScroll.Options
    ): void;

    cancelScroll(noEvent?: boolean): void;
}
