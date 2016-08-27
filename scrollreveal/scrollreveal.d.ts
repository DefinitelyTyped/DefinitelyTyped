// Type definitions for ScrollReveal
// Project: https://github.com/jlmakes/scrollreveal.js
// Definitions by: David Pires <https://github.com/Davidblkx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace scrollReveal {
    interface IScrollRevealRotateObject {
        x?: number;
        y?: number;
        z?: number;
    }

    interface IScrollRevealPositionObject {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    interface IScrollRevealOptions {
        origin ? : string;
        distance ? : string;
        duration ? : number;
        delay ? : number;
        rotate ? : IScrollRevealRotateObject;
        opacity ? : number;
        scale ? : number;
        easing ? : string;
        container ? : any;
        mobile ? : boolean;
        reset ? : boolean;
        useDelay ? : string;
        viewFactor ? : number;
        viewOffset ? : IScrollRevealPositionObject;
        beforeReveal ? (domEl: HTMLElement): void;
        afterReveal ? (domEl: HTMLElement): void;
        beforeReset ? (domEl: HTMLElement): void;
        afterReset ? (domEl: HTMLElement): void;
        beforeReveal ? (domEl: NodeListOf<Element>): void;
        afterReveal ? (domEl: NodeListOf<Element>): void;
        beforeReset ? (domEl: NodeListOf<Element>): void;
        afterReset ? (domEl: NodeListOf<Element>): void;
    }


    interface IScrollReveal {
        (): IScrollReveal;
        (options: IScrollRevealOptions): IScrollReveal;
        reveal(selector: string): IScrollReveal;
        reveal(selector: string, interval: number): IScrollReveal;
        reveal(selector: string, options: IScrollRevealOptions): IScrollReveal;
        reveal(selector: string, options: IScrollRevealOptions, interval: number): IScrollReveal;
        
        reveal(selector: HTMLElement): IScrollReveal;
        reveal(selector: HTMLElement, interval: number): IScrollReveal;
        reveal(selector: HTMLElement, options: IScrollRevealOptions): IScrollReveal;
        reveal(selector: HTMLElement, options: IScrollRevealOptions, interval: number): IScrollReveal;

        reveal(selector: NodeListOf<Element>): IScrollReveal;
        reveal(selector: NodeListOf<Element>, interval: number): IScrollReveal;
        reveal(selector: NodeListOf<Element>, options: IScrollRevealOptions): IScrollReveal;
        reveal(selector: NodeListOf<Element>, options: IScrollRevealOptions, interval: number): IScrollReveal;

        sync(): void;
    }
}

declare var ScrollReveal: scrollReveal.IScrollReveal;