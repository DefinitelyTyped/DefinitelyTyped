/// <reference types="uglify-js" />

import * as CleanCSS from "clean-css";
import * as RelateUrl from "relateurl";
import * as UglifyJS from "uglify-js";

declare namespace HTMLMinifier {
    function minify(text: string, options?: Options): string;

    interface Options {
        // Strip HTML comments
        removeComments?: boolean | undefined;

        // Strip HTML comments from scripts and styles
        removeCommentsFromCDATA?: boolean | undefined;

        // Remove CDATA sections from script and style elements
        removeCDATASectionsFromCDATA?: boolean | undefined;

        // Collapse white space that contributes to text nodes in a document tree
        collapseWhitespace?: boolean | undefined;

        // Always collapse to 1 space (never remove it entirely). Must be used in conjunction with collapseWhitespace=true
        conservativeCollapse?: boolean | undefined;

        // Don't leave any spaces between display:inline; elements when collapsing. Must be used in conjunction with collapseWhitespace=true
        collapseInlineTagWhitespace?: boolean | undefined;

        // Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break. Must be used in conjunction with collapseWhitespace=true
        preserveLineBreaks?: boolean | undefined;

        // Omit attribute values from boolean attributes
        collapseBooleanAttributes?: boolean | undefined;

        // Remove quotes around attributes when possible
        removeAttributeQuotes?: boolean | undefined;

        // Remove attributes when value matches default
        removeRedundantAttributes?: boolean | undefined;

        // Prevents the escaping of the values of attributes.
        preventAttributesEscaping?: boolean | undefined;

        // Replaces the doctype with the short (HTML5) doctype
        useShortDoctype?: boolean | undefined;

        // Remove all attributes with whitespace-only values
        removeEmptyAttributes?: boolean | undefined;

        // Remove type="text/javascript" from script tags. Other type attribute values are left intact.
        removeScriptTypeAttributes?: boolean | undefined;

        // Remove type="text/css" from style and link tags. Other type attribute values are left intact.
        removeStyleLinkTypeAttributes?: boolean | undefined;

        // Remove unrequired tags
        removeOptionalTags?: boolean | undefined;

        // Remove all elements with empty contents
        removeEmptyElements?: boolean | undefined;

        // Toggle linting
        lint?: boolean | undefined;

        // Keep the trailing slash on singleton elements
        keepClosingSlash?: boolean | undefined;

        // Treat attributes in case sensitive manner (useful for custom HTML tags.)
        caseSensitive?: boolean | undefined;

        // Minify Javascript in script elements and on* attributes (uses UglifyJS)
        minifyJS?: boolean | UglifyJS.MinifyOptions | undefined;

        // Minify CSS in style elements and style attributes (uses clean-css)
        minifyCSS?: boolean | CleanCSS.Options | undefined;

        // Minify URLs in various attributes (uses relateurl)
        minifyURLs?: boolean | RelateUrl.Options | undefined;

        // Array of regex'es that allow to ignore certain comments, when matched
        ignoreCustomComments?: Array<RegExp> | undefined;

        // Array of regex'es that allow to ignore certain fragments, when matched (e.g. <?php ... ?>, {{ ... }}, etc.)
        ignoreCustomFragments?: Array<RegExp> | undefined;

        // Array of strings corresponding to types of script elements to process through minifier (e.g. text/ng-template, text/x-handlebars-template, etc.)
        processScripts?: Array<string> | undefined;

        // Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points
        maxLineLength?: number | undefined;

        // Arrays of regex'es that allow to support custom attribute assign expressions (e.g. '<div flex?="{{mode != cover}}"></div>')
        customAttrAssign?: Array<RegExp> | undefined;

        // Arrays of regex'es that allow to support custom attribute surround expressions (e.g. <input {{#if value}}checked="checked"{{/if}}>)
        customAttrSurround?: Array<RegExp> | undefined;

        // Regex that specifies custom attribute to strip newlines from (e.g. /ng\-class/)
        customAttrCollapse?: RegExp | undefined;

        // Type of quote to use for attribute values (' or ")
        quoteCharacter?: string | undefined;
    }
}

export = HTMLMinifier;
