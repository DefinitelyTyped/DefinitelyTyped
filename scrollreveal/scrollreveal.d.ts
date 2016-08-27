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
        beforeReveal ? (domEl: HTMLElement);
        afterReveal ? (domEl: HTMLElement);
        beforeReset ? (domEl: HTMLElement);
        afterReset ? (domEl: HTMLElement);
        beforeReveal ? (domEl: NodeListOf<Element>);
        afterReveal ? (domEl: NodeListOf<Element>);
        beforeReset ? (domEl: NodeListOf<Element>);
        afterReset ? (domEl: NodeListOf<Element>);
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

        sync();
    }
}

declare var ScrollReveal: scrollReveal.IScrollReveal;