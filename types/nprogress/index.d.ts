// Type definitions for NProgress 0.2
// Project: https://github.com/rstacruz/nprogress
// Definitions by: Judah Gabriel Himango <https://github.com/JudahGabriel>, Ovyerus <https://github.com/Ovyerus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace nProgress {
    interface NProgressOptions {
        minimum: number;
        template: string;
        easing: string;
        speed: number;
        trickle: boolean;
        trickleSpeed: number;
        showSpinner: boolean;
        parent: string;
        positionUsing: string;
        barSelector: string;
        spinnerSelector: string;
    }

    interface NProgress {
        version: string;
        settings: NProgressOptions;
        status: number | null;

        configure(options: Partial<NProgressOptions>): NProgress;
        set(number: number): NProgress;
        isStarted(): boolean;
        start(): NProgress;
        done(force?: boolean): NProgress;
        inc(amount?: number): NProgress;
        trickle(): NProgress;

        /* Internal */

        render(fromStart?: boolean): HTMLDivElement;
        remove(): void;
        isRendered(): boolean;
        getPositioningCSS(): 'translate3d' | 'translate' | 'margin';
    }
}

declare const nProgress: nProgress.NProgress;
export = nProgress;
