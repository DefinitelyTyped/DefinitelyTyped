declare const dragula: dragula.Dragula;

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
        copySortSource?: boolean | undefined;
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
        cancel(revert?: boolean): void;
        canMove(item: Element): boolean;
        remove(): void;
        on(event: "drag", listener: (el: Element, source: Element) => void): Drake;
        on(event: "dragend", listener: (el: Element) => void): Drake;
        on(event: "drop", listener: (el: Element, target: Element, source: Element, sibling: Element) => void): Drake;
        on(
            event: "cancel" | "remove" | "shadow" | "over" | "out",
            listener: (el: Element, container: Element, source: Element) => void,
        ): Drake;
        on(event: "cloned", listener: (clone: Element, original: Element, type: "mirror" | "copy") => void): Drake;
        destroy(): void;
    }

    interface Dragula {
        (containers: Element, options: DragulaOptions): Drake;
        (containers: Element[], options?: DragulaOptions): Drake;
        (options?: DragulaOptions): Drake;
    }
}
