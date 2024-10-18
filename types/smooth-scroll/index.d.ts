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
        ignore?: string | undefined;
        header?: string | undefined;
        topOnEmptyHash?: boolean | undefined;

        // Speed & Easing
        speed?: number | undefined;
        speedAsDuration?: boolean | undefined;
        durationMax?: number | null | undefined;
        durationMin?: number | null | undefined;
        clip?: boolean | undefined;
        offset?:
            | number
            | ((
                anchor?: Element | number | null,
                toggle?: Element | null,
            ) => number)
            | undefined;
        easing?: Easing | undefined;
        customEasing?: ((time: number) => number) | undefined;

        // History
        updateURL?: boolean | undefined;
        popstate?: boolean | undefined;

        // Custom Events
        emitEvents?: boolean | undefined;
    }
}

declare class SmoothScroll {
    constructor(selector?: string, options?: SmoothScroll.Options);

    init(options?: SmoothScroll.Options): void;

    destroy(): void;

    animateScroll(
        anchor: Element | number | null,
        toggle?: Element | null,
        options?: SmoothScroll.Options,
    ): void;

    cancelScroll(noEvent?: boolean): void;
}
