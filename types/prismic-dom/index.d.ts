// Type definitions for prismic-dom 2.1
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
//                 Siggy Bilstein <https://github.com/sbilstein>
//                 Kaveh Sajjadi <https://github.com/kavehsajjadi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as nodes from "prismic-richtext/src/nodes";

// This exists because HTMLSerializers will render `element` to a string
// Without this, something like `element.alt` will throw a type error
// despite _working in prismic-richtext_ go figure :|
export type NodeElement = nodes.NodeElement & {
    url?: string,
    alt?: string
}

export type Serializer<T> = (type: string, element: NodeElement, text: string | null, children: T[], index: number) => T;

interface RichText {
    asHtml(richText: any, linkResolver?: (doc: any) => string, htmlSersializer?: Serializer<any>): string;
    asText(richText: any, joinString?: string): string;
    Elements: Elements;
}

interface Link {
    url(link: any, linkResolver?: (doc: any) => string): string;
}

export const RichText: RichText;
export const Link: Link;

declare const _default: { RichText: RichText, Link: Link };
export default _default;

export type Elements = {
    heading1: "heading1",
    heading2: "heading2",
    heading3: "heading3",
    heading4: "heading4",
    heading5: "heading5",
    heading6: "heading6",
    paragraph: "paragraph",
    preformatted: "preformatted",
    strong: "strong",
    em: "em",
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    image: "image",
    embed: "embed",
    hyperlink: "hyperlink",
    label: "label",
    span: "span",
};
