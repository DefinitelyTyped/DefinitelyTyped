// Type definitions for prismic-dom 2.1
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
//                 Siggy Bilstein <https://github.com/sbilstein>
//                 Kaveh Sajjadi <https://github.com/kavehsajjadi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RichText {
    asHtml<T>(richText: any, linkResolver?: (doc: any) => string, htmlSersializer?: HTMLSerializer<T>): string;
    asText(richText: any, joinString?: string): string;
}

interface Link {
    url(link: any, linkResolver?: (doc: any) => string): string;
}

export type HTMLSerializer<T> = (
    type: string,
    element: any,
    content?: string | null,
    children?: T[],
    index?: number,
) => T

export const RichText: RichText;
export const Link: Link;

declare const _default: { RichText: RichText, Link: Link };
export default _default;
