// Type definitions for HTMLMinifier v1.1.1
// Project: https://github.com/kangax/html-minifier
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="uglify-js" />

import * as UglifyJS from 'uglify-js';
import * as CleanCSS from 'clean-css';
import * as RelateUrl from 'relateurl';

declare namespace HTMLMinifier {
    function minify(text: string, options?: Options): string;

    interface Options {
        // Strip HTML comments
        removeComments?: boolean;

        // Strip HTML comments from scripts and styles
        removeCommentsFromCDATA?: boolean;

        // Remove CDATA sections from script and style elements
        removeCDATASectionsFromCDATA?: boolean;

        // Collapse white space that contributes to text nodes in a document tree
        collapseWhitespace?: boolean;

        // Always collapse to 1 space (never remove it entirely). Must be used in conjunction with collapseWhitespace=true
        conservativeCollapse?: boolean;

        // Don't leave any spaces between display:inline; elements when collapsing. Must be used in conjunction with collapseWhitespace=true
        collapseInlineTagWhitespace?: boolean;

        // Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break. Must be used in conjunction with collapseWhitespace=true
        preserveLineBreaks?: boolean;

        // Omit attribute values from boolean attributes
        collapseBooleanAttributes?: boolean;

        // Remove quotes around attributes when possible
        removeAttributeQuotes?: boolean;

        // Remove attributes when value matches default
        removeRedundantAttributes?: boolean;

        // Prevents the escaping of the values of attributes.
        preventAttributesEscaping?: boolean;

        // Replaces the doctype with the short (HTML5) doctype
        useShortDoctype?: boolean;

        // Remove all attributes with whitespace-only values
        removeEmptyAttributes?: boolean;

        // Remove type="text/javascript" from script tags. Other type attribute values are left intact.
        removeScriptTypeAttributes?: boolean;

        // Remove type="text/css" from style and link tags. Other type attribute values are left intact.
        removeStyleLinkTypeAttributes?: boolean;

        // Remove unrequired tags
        removeOptionalTags?: boolean;

        // Remove all elements with empty contents
        removeEmptyElements?: boolean;

        // Toggle linting
        lint?: boolean;

        // Keep the trailing slash on singleton elements
        keepClosingSlash?: boolean;

        // Treat attributes in case sensitive manner (useful for custom HTML tags.)
        caseSensitive?: boolean;

        // Minify Javascript in script elements and on* attributes (uses UglifyJS)
        minifyJS?: boolean | UglifyJS.MinifyOptions;

        // Minify CSS in style elements and style attributes (uses clean-css)
        minifyCSS?: boolean | CleanCSS.Options;

        // Minify URLs in various attributes (uses relateurl)
        minifyURLs?: boolean | RelateUrl.Options;

        // Array of regex'es that allow to ignore certain comments, when matched
        ignoreCustomComments?: Array<RegExp>;

        // Array of regex'es that allow to ignore certain fragments, when matched (e.g. <?php ... ?>, {{ ... }}, etc.)
        ignoreCustomFragments?: Array<RegExp>;

        // Array of strings corresponding to types of script elements to process through minifier (e.g. text/ng-template, text/x-handlebars-template, etc.)
        processScripts?: Array<string>;

        // Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points
        maxLineLength?: number;

        // Arrays of regex'es that allow to support custom attribute assign expressions (e.g. '<div flex?="{{mode != cover}}"></div>')
        customAttrAssign?: Array<RegExp>;

        // Arrays of regex'es that allow to support custom attribute surround expressions (e.g. <input {{#if value}}checked="checked"{{/if}}>)
        customAttrSurround?: Array<RegExp>;

        // Regex that specifies custom attribute to strip newlines from (e.g. /ng\-class/)
        customAttrCollapse?: RegExp;

        // Type of quote to use for attribute values (' or ")
        quoteCharacter?: string;
    }
}

export = HTMLMinifier;
