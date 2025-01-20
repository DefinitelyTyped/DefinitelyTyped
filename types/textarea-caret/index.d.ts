export = textarea_caret;

interface Caret {
    top: number;
    left: number;
    height: number;
}

interface Options {
    debug?: boolean | undefined;
}

declare function textarea_caret(element: HTMLElement, position: number, options?: Options): Caret;
