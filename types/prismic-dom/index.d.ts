// Type definitions for prismic-dom 2.0
// Project: https://github.com/prismicio/prismic-dom#readme
// Definitions by: Nick Whyte <https://github.com/nickw444>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace RichText {
    function asHtml(richText: any, linkResolver?: (doc: any) => string): string;
}
