// Type definitions for prismic-dom 2.0
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RichText {
    asHtml(richText: any, linkResolver?: (doc: any) => string): string;
}

export const RichText: RichText;

declare const _default: { RichText: RichText };
export default _default;
