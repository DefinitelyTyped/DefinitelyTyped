// Type definitions for findandreplacedomtext 0.4
// Project: https://github.com/padolsey/findAndReplaceDOMText
// Definitions by: BART! <https://github.com/bartholomej>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    find: RegExp | string;
    replace?: string | ((portion: Portion, match?: any) => string | number | HTMLElement | Text);
    wrap?: string | HTMLElement;
    wrapClass?: string;
    filterElements?: (el: HTMLElement) => boolean;
    portionMode?: 'retain' | 'first';
    forceContext?: boolean | ((el: HTMLElement) => boolean);
    preset?: 'prose' | string;
}

interface Portion {
    node: HTMLElement;
    index: number;
    text: string;
    indexInMatch: number;
    indexInNode: number;
    endIndexInNode: number;
    isEnd: boolean;
}

interface Return {
    revert: () => Return;
}

declare function findAndReplaceDOMText(node: HTMLElement, options: Options): Return;

export = findAndReplaceDOMText;
