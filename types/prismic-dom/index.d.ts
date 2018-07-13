// Type definitions for prismic-dom 2.0
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
//                 Siggy Bilstein <https://github.com/sbilstein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RichText {
    asHtml(richText: any, linkResolver?: (doc: any) => string): string;
    asText(richText: any,  joinString?: string): string;
}

interface Link {
    url(link: any, linkResolver?: (doc: any) => string): string;
}

export const RichText: RichText;
export const Link: Link;

declare const _default: { RichText: RichText, Link: Link };
export default _default;
