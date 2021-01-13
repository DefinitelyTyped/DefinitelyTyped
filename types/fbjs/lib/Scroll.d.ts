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
    /**
     * @param {DOMElement} element
     * @return {number}
     */
    var getTop: (element: any) => number;

    /**
     * @param {DOMElement} element
     * @param {number} newTop
     */
    var setTop: (element, newTop: number) => void;

    /**
     * @param {DOMElement} element
     * @return {number}
     */
    var getLeft: (element) => number;

    /**
     * @param {DOMElement} element
     * @param {number} newLeft
     */
    var setLeft: (element, newLeft: number) => void;
}

export = Scroll;
