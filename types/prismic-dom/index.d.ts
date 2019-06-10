// Type definitions for prismic-dom 2.1
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
//                 Siggy Bilstein <https://github.com/sbilstein>
//                 Douglas Nomizo <https://github.com/douglasnomizo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type ElementType =
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "paragraph"
    | "preformatted"
    | "strong"
    | "em"
    | "list-item"
    | "o-list-item"
    | "group-list-item"
    | "group-o-list-item"
    | "image"
    | "embed"
    | "hyperlink"
    | "label"
    | "span";

type Elements = {[key in ElementType]: string};

type HTMLSerializer<T> = (
    type: ElementType,
    element: any,
    text: string | null,
    children: T[],
    index: number,
) => T;

interface RichText {
    asHtml(
        richText: any,
        linkResolver?: (doc: any) => string,
        serializer?: HTMLSerializer<string>,
    ): string;
    asText(richText: any, joinString?: string): string;
    Elements: Elements;
}

interface Link {
    url(link: any, linkResolver?: (doc: any) => string): string;
}

export const RichText: RichText;
export const Link: Link;
export const HTMLSerializer: HTMLSerializer<string>;

declare const _default: {
    RichText: RichText;
    Link: Link
};

export default _default;
