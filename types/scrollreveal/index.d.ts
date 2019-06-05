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
        x?: number;
        y?: number;
        z?: number;
    }

    interface ScrollRevealPositionObject {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    interface ScrollRevealObjectOptions {
        origin ? : string;
        distance ? : string;
        duration ? : number;
        delay ? : number;
        rotate ? : ScrollRevealRotateObject;
        opacity ? : number;
        scale ? : number;
        easing ? : string;
        container ? : any;
        mobile ? : boolean;
        reset ? : boolean;
        useDelay ? : string;
        viewFactor ? : number;
        viewOffset ? : ScrollRevealPositionObject;
        beforeReveal ? (domEl: HTMLElement): void;
        afterReveal ? (domEl: HTMLElement): void;
        beforeReset ? (domEl: HTMLElement): void;
        afterReset ? (domEl: HTMLElement): void;
        beforeReveal ? (domEl: NodeListOf<Element>): void;
        afterReveal ? (domEl: NodeListOf<Element>): void;
        beforeReset ? (domEl: NodeListOf<Element>): void;
        afterReset ? (domEl: NodeListOf<Element>): void;
    }


    interface ScrollRevealObject {
        (): ScrollRevealObject;
        (options: ScrollRevealObjectOptions): ScrollRevealObject;
        reveal(selector: string): ScrollRevealObject;
        reveal(selector: string, interval: number): ScrollRevealObject;
        reveal(selector: string, options: ScrollRevealObjectOptions): ScrollRevealObject;
        reveal(selector: string, options: ScrollRevealObjectOptions, interval: number): ScrollRevealObject;
        
        reveal(selector: HTMLElement): ScrollRevealObject;
        reveal(selector: HTMLElement, interval: number): ScrollRevealObject;
        reveal(selector: HTMLElement, options: ScrollRevealObjectOptions): ScrollRevealObject;
        reveal(selector: HTMLElement, options: ScrollRevealObjectOptions, interval: number): ScrollRevealObject;

        reveal(selector: NodeListOf<Element>): ScrollRevealObject;
        reveal(selector: NodeListOf<Element>, interval: number): ScrollRevealObject;
        reveal(selector: NodeListOf<Element>, options: ScrollRevealObjectOptions): ScrollRevealObject;
        reveal(selector: NodeListOf<Element>, options: ScrollRevealObjectOptions, interval: number): ScrollRevealObject;

        sync(): void;
    }
}
