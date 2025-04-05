export = getCaretCoordinates;

interface Caret {
    top: number;
    left: number;
    height: number;
}

interface Options {
    debug?: boolean | undefined;
}

declare global {
  function getCaretCoordinates(element: HTMLElement, position: number, options?: Options): Caret;
}
