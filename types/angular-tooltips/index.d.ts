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
