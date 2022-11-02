/**
 * Scroll Module. This class contains 4 simple static functions
 * to be used to access Element.scrollTop/scrollLeft properties.
 * To solve the inconsistencies between browsers when either
 * document.body or document.documentElement is supplied,
 * below logic will be used to alleviate the issue:
 *
 * 1. If 'element' is either 'document.body' or 'document.documentElement,
 *    get whichever element's 'scroll{Top,Left}' is larger.
 * 2. If 'element' is either 'document.body' or 'document.documentElement',
 *    set the 'scroll{Top,Left}' on both elements.
 */
declare namespace Scroll {
    function getTop(element: HTMLElement): number;
    function setTop(element: HTMLElement, newTop: number): void;
    function getLeft(element: HTMLElement): number;
    function setLeft(element: HTMLElement, newLeft: number): void;
}

// eslint-disable-next-line export-just-namespace
export = Scroll;
