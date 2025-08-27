declare var dragula: dragula.Dragula;

export = dragula;
export as namespace dragula;

declare namespace dragula {
    interface DragulaOptions {
        containers?: Element[] | undefined;
        isContainer?: ((el?: Element) => boolean) | undefined;
        moves?: ((el?: Element, container?: Element, handle?: Element, sibling?: Element) => boolean) | undefined;
        accepts?: ((el?: Element, target?: Element, source?: Element, sibling?: Element) => boolean) | undefined;
        invalid?: ((el?: Element, target?: Element) => boolean) | undefined;
        direction?: string | undefined;
        copy?: ((el: Element, source: Element) => boolean) | boolean | undefined;
        revertOnSpill?: boolean | undefined;
        removeOnSpill?: boolean | undefined;
        delay?: boolean | number | undefined;
        mirrorContainer?: Element | undefined;
        ignoreInputTextSelection?: boolean | undefined;
    }

    interface Drake {
        containers: Element[];
        dragging: boolean;
        start(item: Element): void;
        end(): void;
        cancel(revert: boolean): void;
        cancel(): void;
        remove(): void;
        on(events: string, callback: Function): Drake;
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
