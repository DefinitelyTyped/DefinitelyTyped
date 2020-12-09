import { FormatCallback, htmlToText, HtmlToTextOptions,
    TagDefinition } from 'html-to-text';
import * as formatters from 'html-to-text/lib/formatter';

// Test code that also provides sample implementations

const headerOptions: TagDefinition =  {
    options: {
        uppercase: false
    },
    format: "headerFormatter",
};

// Sample use of FormatCallback outside of HtmlTextOptions

const headerFormatter: FormatCallback = (elem, walk, builder, options) => {
    builder.openBlock(options.leadingLineBreaks || 2);
    walk(elem.children, builder);
    builder.closeBlock(options.trailingLineBreaks || 2,
        str => {
            const underline = str.substr(str.lastIndexOf("\n") + 1)
                .replace(/./g, "=");
            return `${str}\n${underline}`;
        }
    );
};

const htmlOptions: HtmlToTextOptions = {
    wordwrap: null,
    tables: true,
    hideLinkHrefIfSameAsText: true,
    ignoreImage: true,
    formatters: {
        headerFormatter: (elem, walk, builder, options) => {
            builder.openBlock(options.leadingLineBreaks || 2);
            walk(elem.children, builder);
            builder.closeBlock(options.trailingLineBreaks || 2,
               str => `${str} **hdr**\n`);
        },
        blockFormatter: (elem, walk, builder, options) => {
            builder.openBlock(options.leadingLineBreaks || 2, 2);
            walk(elem.children, builder);
            builder.closeBlock(options.trailingLineBreaks || 2,
               str => `**blk** ${str}\n`);
        },
        textFormatter: (elem, walk, builder, options) => {
            formatters.heading(elem, walk, builder, options);
        },
    },
    tags: {
        a: {
            options: {
                hideLinkHrefIfSameAsText: true,
            },
        },
        h1: headerOptions,
        h3: {
            format: "textFormatter",
        },
        blockquote: {
            options: {
                trimEmptyLines: false
            },
            format: "blockFormatter",
        },
    },
};

const htmlString = `<h1>h1</h1><p><b>bold</b></p><p><i>italic</i></p>
<h3>h3</h3><blockquote>block quote</blockquote>`;

console.log('Processing string with default options');
console.log(htmlToText(htmlString));

console.log('Processing string with custom options');
const text = htmlToText(htmlString, htmlOptions);
console.log(text);

if (!text.match(/\*\*hdr\*\*/)) {
    console.error("Formatter not called!");
}

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

const elementFormatter: FormatCallback = (elem, walk, builder, options) => {
    builder.openBlock(options.leadingLineBreaks || 2);
    // walk(elem.children?, builder);
    builder.closeBlock(options.trailingLineBreaks || 2,
        str => {
            return `--${elem.name}--\n`;
        }
    );
};

const fmtOptions: HtmlToTextOptions = {
    formatters: {
        anchor: elementFormatter,
        blockquote: elementFormatter,
        heading: elementFormatter,
        horizontalLine: elementFormatter,
        image: elementFormatter,
        inline: elementFormatter,
        lineBreak: elementFormatter,
        orderedList: elementFormatter,
        paragraph: elementFormatter,
        table: elementFormatter,
        unorderedList: elementFormatter,
    },
};
console.log(htmlToText(allElements, fmtOptions));
