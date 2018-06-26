// Type definitions for prismic-dom 2.0
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
//                 Siggy Bilstein <https://github.com/sbilstein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RichText {
    asHtml(richText: any, linkResolver?: (doc: any) => string): string;
    asText(richText: any,  joinString?: string): string;
}

export const RichText: RichText;

declare const _default: { RichText: RichText };
export default _default;
