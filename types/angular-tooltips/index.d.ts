// Type definitions for angular-tooltips 1.2
// Project: http://720kb.github.io/angular-tooltips
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const AngularTooltips: '720kb.tooltips';
export = AngularTooltips;

declare namespace AngularTooltips {
    interface TooltipsConfProvider {
        configure(options: TooltipsConfProviderOptions): void;
    }

    interface TooltipsConfProviderOptions {
        side?: 'left' | 'right' | 'top' | 'bottom' | 'top left' | 'top right' | 'bottom left' | 'bottom right';
        showTrigger?: string;
        hideTrigger?: string;
        class?: string;
        smart?: boolean;
        closeButton?: boolean;
        size?: 'small' | 'medium' | 'large';
        speed?: 'slow' | 'medium' | 'fast';
        tooltipTemplateUrlCache?: boolean;
        show?: boolean;
    }
}
