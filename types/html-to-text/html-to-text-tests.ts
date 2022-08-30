import { compile, FormatCallback, htmlToText, HtmlToTextOptions,
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
                linkBrackets: ['===> ', ' <==='],
                hideLinkHrefIfSameAsText: true,
            },
            format: "anchor",
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
console.log('Emit all elements with "--" wrapping');
console.log(htmlToText(allElements, fmtOptions));

const blockTextTestElements = '<a>a</a>\
<blockquote>b</blockquote>\
<p>1234567890123456789012345678901234567890</p>\
<table></table>';

const fmtOptionsDepr: HtmlToTextOptions = {
    formatters: {
        table: (elem, walk, builder, options) => {
            builder.openBlock(options.leadingLineBreaks || 2);
            builder.openTable();
            builder.openTableRow();
            builder.openTableCell(22);
            builder.addInline("Cell 1 data", false);
            builder.closeTableCell(2);
            builder.openTableCell(6);
            builder.addInline("Cell 2 data", false);
            builder.closeTableCell(1);
            builder.closeTableRow();
            builder.closeTable(4);
            // walk(elem.children, builder);
            builder.closeBlock(options.trailingLineBreaks || 2);
        },
    },
};
console.log('Test deprecated table builder interfaces');
console.log(htmlToText(blockTextTestElements, fmtOptionsDepr));

const fmtOptionsTable: HtmlToTextOptions = {
    formatters: {
        table: (elem, walk, builder, options) => {
            builder.openBlock({ leadingLineBreaks: options.leadingLineBreaks || 2 });
            builder.openTable();
            builder.openTableRow();
            builder.openTableCell({ maxColumnWidth: 22});
            builder.addInline("Cell 1 data", { noWordTransform: false });
            builder.closeTableCell({ colspan: 2 });
            builder.openTableCell({ maxColumnWidth: 6 });
            builder.addInline("Cell 2 data", { noWordTransform: false });
            builder.closeTableCell();
            builder.closeTableRow();
            builder.closeTable({ colSpacing: 4 });
            // walk(elem.children, builder);
            builder.closeBlock({ trailingLineBreaks: options.trailingLineBreaks || 2 });
        },
    },
};
console.log('Test current table builder interfaces');
console.log(htmlToText(blockTextTestElements, fmtOptionsTable));

const selOptions: HtmlToTextOptions = {
    formatters: {
        h1Formatter: (elem, walk, builder, options) => {
            builder.addInline("preheading: ", { noWordTransform: false });
            walk(elem.children, builder);
        }
    },
    selectors: [
        {
            selector: "h1",
            format: 'h1Formatter',
        },
        {
            selector: "hr",
            options: {length: 5},
        },
    ]
};

console.log('Test with selectors');
console.log(htmlToText(allElements, selOptions));

console.log('Test with compiler function');
const converter = compile(selOptions);
console.log(converter(allElements));

console.log('Test with any tag');
console.log(htmlToText("<h1>Starting foo test</h1><foo>bar</foo>", {
    formatters: {
        fooFormatter: (elem, walk, builder, options) => {
            builder.addInline("fooFormatter: ", { noWordTransform: false });
            walk(elem.children, builder);
        }
    },
    selectors: [
        {
            selector: "foo",
            format: 'fooFormatter',
        },
    ]
}));

console.log('Test with linkBrackets false');
console.log(htmlToText("<a href=\"https://github.com/DefinitelyTyped\">Link</a>", {
    selectors: [
        {
            selector: "a",
            options: { linkBrackets: false }
        }
    ]
}));

console.log('Test with custom linkBrackets');
console.log(htmlToText("<a href=\"https://github.com/DefinitelyTyped\">Link</a>", {
    selectors: [
        {
            selector: "a",
            options: { linkBrackets: ['@', '@'] }
        }
    ]
}));

console.log('Test without linkBrackets');
console.log(htmlToText("<a href=\"https://github.com/DefinitelyTyped\">Link</a>", {
    selectors: [
        {
            selector: "a",
            options: { linkBrackets: undefined }
        }
    ]
}));

console.log('Test with user defined options that should be in output');
console.log(htmlToText("<h1>Starting foo test</h1><foo>bar</foo>", {
    formatters: {
        fooFormatter: (elem, walk, builder, options) => {
            builder.addInline(`beginning ${options.foo} fooFormatter: `, { noWordTransform: false });
            walk(elem.children, builder);
        }
    },
    selectors: [
        {
            selector: "foo",
            format: 'fooFormatter',
            options: { foo: "show-me" },
        },
    ]
}));
