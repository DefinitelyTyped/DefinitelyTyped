interface Options {
    /**
     * Something to search for. A string will perform a global search by default (looking for all matches), but a RegExp will only do so if you include the global (/.../g) flag.
     */
    find: RegExp | string;
    /**
     * A String of text to replace matches with, or a Function which should return replacement Node or String. If you use a string, it can contain various tokens:
     *
     *  $n to represent the nth captured group of a regular expression (i.e. $1, $2, ...)
     *
     * $0 or $& to represent the entire match
     *
     * $` to represent everything to the left of the match.
     *
     * $' to represent everything to the right of the match.
     */
    replace?: string | ((portion: Portion, match?: any) => string | number | HTMLElement | Text) | undefined;
    /**
     * A string representing the node-name of an element that will be wrapped around matches (e.g. span or em).
     *
     * Or a Node (i.e. a stencil node) that we will clone for each match portion.
     */
    wrap?: string | HTMLElement | undefined;
    /**
     * A string representing the class name to be assigned to the wrapping element (e.g. <span class="myClass">found text</span>).
     *
     * If the wrap option is not specified, then this option is ignored.
     */
    wrapClass?: string | undefined;
    /**
     * Indicates whether to re-use existing node boundaries when replacing a match with text (i.e. the default, "retain"),
     * or whether to instead place the entire replacement in the first-found match portion's node.
     *
     * Most of the time you'll want the default.
     */
    portionMode?: "retain" | "first" | undefined;
    /**
     * A function to be called on every element encountered by findAndReplaceDOMText.
     * If the function returns false the element will be altogether ignored.
     */
    filterElements?: ((el: HTMLElement) => boolean) | undefined;
    /**
     * A boolean or a boolean-returning function that'll be called on every element to determine if it should be considered as its own matching context.
     * More info: https://github.com/padolsey/findAndReplaceDOMText#contexts
     */
    forceContext?: boolean | ((el: HTMLElement) => boolean) | undefined;
    /**
     * Currently there's only one preset: prose. https://github.com/padolsey/findAndReplaceDOMText#presetprose
     */
    preset?: "prose" | string | undefined;
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
    /**
     * Reversion occurs backwards so as to avoid nodes subsequently replaced during the matching phase.
     */
    revert: () => Return;
}

/**
 * findAndReplaceDOMText searches for regular expression matches in a given DOM node and replaces or wraps each match with a node or piece of text that you can specify.
 */
declare function findAndReplaceDOMText(node: HTMLElement, options: Options): Return;

export = findAndReplaceDOMText;
