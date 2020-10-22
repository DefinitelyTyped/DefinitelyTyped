import { fromString, HtmlToTextOptions } from 'html-to-text';
import * as formatters from 'html-to-text/lib/formatter';

const htmlOptions: HtmlToTextOptions = {
    wordwrap: null,
    tables: true,
    hideLinkHrefIfSameAsText: true,
    ignoreImage: true,
    format: {
        text: (el, options) => {
            return formatters.text(el, options);
        },
        table: (el, walk, options) => {
            return formatters.table(el, walk, options);
        },
    },
};

const htmlString = '<p><b>bold</b></p><p><i>italic</i></p>';
console.log('Processing string with default options');
console.log(fromString(htmlString));

console.log('Processing string with custom options');
console.log(fromString(htmlString, htmlOptions));

const allElements = '<a>a</a>\
<blockquote>b</blockquote>\
<h1>h</h1>\
<hr />\
<img />\
<br />\
<ol></old>\
<p>p</p>\
<table></table>\
<ul></ul>';

const fmtOptions: HtmlToTextOptions = {
    format: {
        anchor: (_el, _walk, _options) => {
            return "--anchor--\n";
        },
        blockquote: (_el, _walk, _options) => {
            return "--blockquote--\n";
        },
        heading: (_el, _walk, _options) => {
            return "--heading--\n";
        },
        horizontalLine: (_el, _walk, _options) => {
            return "--horizontalLine--\n";
        },
        image: (_el, _options) => {
            return "--image--\n";
        },
        lineBreak: (_el, _walk, _options) => {
            return "--lineBreak--\n";
        },
        orderedList: (_el, _walk, _options) => {
            return "--orderedList--\n";
        },
        paragraph: (_el, _walk, _options) => {
            return "--paragraph--\n";
        },
        table: (_el, _walk, _options) => {
            return "--table--\n";
        },
        text: (_el, _options) => {
            return "--text--\n";
        },
        unorderedList: (_el, _walk, _options) => {
            return "--unorderedList--\n";
        },
    },
};
console.log(fromString(allElements, fmtOptions));
