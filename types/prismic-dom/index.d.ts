// Type definitions for prismic-dom 2.1
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
//                 Siggy Bilstein <https://github.com/sbilstein>
//                 Kaveh Sajjadi <https://github.com/kavehsajjadi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RichText {
    asHtml(richText: any, linkResolver?: (doc: any) => string, htmlSersializer?: HTMLSerializer): string;
    asText(richText: any, joinString?: string): string;
    Elements: Elements;
}

interface Link {
    url(link: any, linkResolver?: (doc: any) => string): string;
}

export type HTMLSerializer = (
    type: string,
    element: any,
    content?: string | null,
    children?: any[],
    index?: number,
) => any;

export const RichText: RichText;
export const Link: Link;

declare const _default: { RichText: RichText, Link: Link };
export default _default;

interface Elements {
    heading1: any;
    heading2: any;
    heading3: any;
    heading4: any;
    heading5: any;
    heading6: any;
    paragraph: any;
    preformatted: any;
    strong: any;
    em: any;
    listItem: any;
    oListItem: any;
    list: any;
    oList: any;
    image: any;
    embed: any;
    hyperlink: any;
    label: any;
    span: any;
}
