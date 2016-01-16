// Type definitions for gulp-htmlmin v1.3.0
// Project: https://www.npmjs.com/package/gulp-htmlmin
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module 'gulp-htmlmin' {
    interface IOptions {

        removeComments?: boolean;
        removeCommentsFromCDATA?: boolean;
        removeCDATASectionsFromCDATA?: boolean;
        collapseWhitespace?: boolean;
        conservativeCollapse?: boolean;
        collapseInlineTagWhitespace?: boolean;
        preserveLineBreaks?: boolean;
        collapseBooleanAttributes?: boolean;
        removeAttributeQuotes?: boolean;
        removeRedundantAttributes?: boolean;
        preventAttributesEscaping?: boolean;
        useShortDoctype?: boolean;
        removeEmptyAttributes?: boolean;
        removeScriptTypeAttributes?: boolean;
        removeStyleLinkTypeAttributes?: boolean;
        removeOptionalTags?: boolean;
        removeEmptyElements?: boolean;
        lint?: boolean;
        keepClosingSlash?: boolean;
        caseSensitive?: boolean;
        minifyJS?: boolean | any;
        minifyCSS?: boolean | any;
        minifyURLs?: boolean | any;
        ignoreCustomComments?: RegExp[];
        ignoreCustomFragments?: RegExp[];
        processScripts?: string[];
        maxLineLength?: number;
        customAttrAsign?: RegExp[];
        customAttrSurround?: RegExp[];
        customAttrCollapse?: RegExp;
        quoteCharacter?: string;
    }

    function minifyHtml(options?: IOptions): NodeJS.ReadWriteStream;

    export = minifyHtml;
}
