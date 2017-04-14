// Type definitions for Marked (v3.0.4)
// Project: https://github.com/domchristie/to-markdown
// Definitions by: SuperPaintman <https://github.com/SuperPaintman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Converts HTML to markdown.
 */
declare function toMarkdown(input: string, options: toMarkdown.IOptions): string;
/**
 * Converts HTML to markdown.
 */
declare function toMarkdown(input: string): string;

declare namespace toMarkdown {
  export interface IFilter {
    (node: HTMLElement): boolean;
  }

  export type Filter = string
                     | string[]
                     | IFilter;

  export interface IOptions {
    converters?: IConverter[];
    gfm?:        boolean;
  }

  export interface IConverter {
    filter: Filter;
    replacement(innerHTML: string, node: HTMLElement): string;
  }

  /**
   * Returns true / false depending on whether the element is block level.
   */
  export function isBlock(node: HTMLElement): boolean;

  /**
   * Returns true / false depending on whether the element is void.
   */
  export function isVoid(node: HTMLElement): boolean;

  /**
   * Returns the HTML string of an element with its contents converted/
   */
  export function outer(node: HTMLElement, content: string): boolean;
}

declare module 'to-markdown' {
  export = toMarkdown;
}
