// Type definitions for ScrollReveal
// Project: https://github.com/jlmakes/scrollreveal.js
// Definitions by: David Pires <https://github.com/Davidblkx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const ScrollReveal: scrollReveal.ScrollRevealObject;

declare module 'scrollreveal' {
    export = ScrollReveal;
}

declare namespace scrollReveal {
    interface ScrollRevealRotateObject {
        x?: number | undefined;
        y?: number | undefined;
        z?: number | undefined;
    }

    interface ScrollRevealPositionObject {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    }

    interface ScrollRevealObjectOptions {
        origin?: string | undefined;
        distance?: string | undefined;
        duration?: number | undefined;
        delay?: number | undefined;
        interval?: number | undefined;
        rotate?: ScrollRevealRotateObject | undefined;
        opacity?: number | undefined;
        scale?: number | undefined;
        easing?: string | undefined;
        cleanup?: boolean | undefined;
        container?: any;
        mobile?: boolean | undefined;
        reset?: boolean | undefined;
        useDelay?: string | undefined;
        viewFactor?: number | undefined;
        viewOffset?: ScrollRevealPositionObject | undefined;
        beforeReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
        afterReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
        beforeReset?(domEl: HTMLElement | NodeListOf<Element>): void;
        afterReset?(domEl: HTMLElement | NodeListOf<Element>): void;
    }

    interface ScrollRevealObject {
        (): ScrollRevealObject;
        (options: ScrollRevealObjectOptions): ScrollRevealObject;
        clean(selector: string | HTMLElement | NodeListOf<Element>): void;
        destroy(): void;
        reveal(selector: string | HTMLElement | NodeListOf<Element>): ScrollRevealObject;
        reveal(selector: string | HTMLElement | NodeListOf<Element>, interval: number): ScrollRevealObject;
        reveal(
            selector: string | HTMLElement | NodeListOf<Element>,
            options: ScrollRevealObjectOptions,
        ): ScrollRevealObject;
        reveal(
            selector: string | HTMLElement | NodeListOf<Element>,
            options: ScrollRevealObjectOptions,
            interval: number,
        ): ScrollRevealObject;

        sync(): void;
    }
}
