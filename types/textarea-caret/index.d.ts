export = getCaretCoordinates;

interface Caret {
    top: number;
    left: number;
    height: number;
}

interface Options {
    debug?: boolean | undefined;
}

declare function getCaretCoordinates(element: HTMLElement, position: number, options?: Options): Caret;

export as namespace getCaretCoordinates;
