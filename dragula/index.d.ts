// Type definitions for dragula v2.1.2
// Project: http://bevacqua.github.io/dragula/
// Definitions by: Paul Welter <https://github.com/pwelter34/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var dragula: dragula.Dragula;

export = dragula;
export as namespace dragula;

declare namespace dragula {
    interface DragulaOptions {
        containers?: Element[];
        isContainer?: (el?: Element) => boolean;
        moves?: (el?: Element, container?: Element, handle?: Element) => boolean;
        accepts?: (el?: Element, target?: Element, source?: Element, sibling?: Element) => boolean;
        invalid?: (el?: Element, target?: Element) => boolean;
        direction?: string;
        copy?: ((el: Element, source: Element) => boolean) | boolean;
        revertOnSpill?: boolean;
        removeOnSpill?: boolean;
        delay?: boolean | number;
        mirrorContainer?: Element;
    }

    interface Drake {
        containers: Element[];
        dragging: boolean;
        start(item:Element): void;
        end(): void;
        cancel(revert:boolean): void;
        cancel(): void;
        remove(): void;
        on(events: string, callback: Function): void;
        destroy(): void;
    }

    interface Dragula {
        (containers: Element[], options: DragulaOptions): Drake;
        (containers: Element, options: DragulaOptions): Drake;
        (containers: Element[]): Drake;
        (options: DragulaOptions): Drake;
        (): Drake;
    }
}
