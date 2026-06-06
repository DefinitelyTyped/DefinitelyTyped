export = toMarkdown;

/**
 * Converts HTML to markdown.
 */
declare function toMarkdown(input: string, options?: toMarkdown.Options): string;

declare namespace toMarkdown {
    type Filter = string | string[] | ((node: HTMLElement) => boolean);

    interface Options {
        converters?: Converter[] | undefined;
        gfm?: boolean | undefined;
    }

    interface Converter {
        filter: Filter;
        replacement(innerHTML: string, node: HTMLElement): string;
    }

    /**
     * Returns true / false depending on whether the element is block level.
     */
    function isBlock(node: HTMLElement): boolean;

    /**
     * Returns true / false depending on whether the element is void.
     */
    function isVoid(node: HTMLElement): boolean;

    /**
     * Returns the HTML string of an element with its contents converted.
     */
    function outer(node: HTMLElement, content: string): boolean;
}
