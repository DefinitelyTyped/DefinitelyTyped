// Type definitions for angular-tooltips 1.2
// Project: http://720kb.github.io/angular-tooltips
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare const AngularTooltips: "720kb.tooltips";
export = AngularTooltips;

declare namespace AngularTooltips {
    interface TooltipsConfProvider {
        configure(options: TooltipsConfProviderOptions): void;
    }

    interface TooltipsConfProviderOptions {
        side?:
            | "left"
            | "right"
            | "top"
            | "bottom"
            | "top left"
            | "top right"
            | "bottom left"
            | "bottom right"
            | undefined;
        showTrigger?: string | undefined;
        hideTrigger?: string | undefined;
        class?: string | undefined;
        smart?: boolean | undefined;
        closeButton?: boolean | undefined;
        size?: "small" | "medium" | "large" | undefined;
        speed?: "slow" | "medium" | "fast" | undefined;
        tooltipTemplateUrlCache?: boolean | undefined;
        show?: boolean | undefined;
    }
}
