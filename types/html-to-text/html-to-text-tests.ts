import {
    compile,
    FormatCallback,
    FormatOptions,
    htmlToText,
    HtmlToTextOptions,
    SelectorDefinition,
    TagDefinition,
} from "html-to-text";
import { BlockTextBuilder } from "html-to-text/lib/block-text-builder";

// Test code that also provides sample implementations

const headerOptions: TagDefinition = {
    options: {
        uppercase: false,
    },
    format: "headerFormatter",
};

// HtmlToTextOptions coverage

const options1: HtmlToTextOptions = {
    baseElements: {
        selectors: ["a", "h1"],
        orderBy: "selectors",
        returnDomByDefault: true,
    },
    decodeEntities: false,
    encodeCharacters: {
        "☺️": ":smiley:",
        "😀": ":grinning-face:",
    },
    limits: {
        ellipsis: "...turtles hidden here...",
        maxBaseElements: 4,
        maxChildNodes: 4,
        maxDepth: 4,
        maxInputLength: 80,
    },
    longWordSplit: {
        forceWrapOnLimit: false,
        wrapCharacters: ["a", "b"],
    },
    preserveNewlines: true,
    whitespaceCharacters: " abcdef",
    wordwrap: 80,
};

const options2: HtmlToTextOptions = {
    baseElements: {
        orderBy: "occurrence",
    },
    wordwrap: false,
};

const options3: HtmlToTextOptions = {
    wordwrap: null,
};

// FormatOptions coverage

const formatOptions1: FormatOptions = {
    leadingLineBreaks: 3,
    trailingLineBreaks: 3,
    baseUrl: "url",
    linkBrackets: ["[", "]"],
    pathRewrite: (path, meta) => path,
    hideLinkHrefIfSameAsText: true,
    ignoreHref: true,
    noAnchorUrl: true,
    itemPrefix: "prefix",
    uppercase: true,
    length: 3,
    trimEmptyLines: false,
    uppercaseHeaderCells: false,
    maxColumnWidth: 3,
    colSpacing: 3,
    rowSpacing: 3,
    string: "tag",
    prefix: "prefix",
    suffix: "suffix",
    "private-option": { data: "some-data" },
};

const formatOptions2: FormatOptions = {
    linkBrackets: false,
};

// BlockTextBuilder coverage.  All methods are called with all possible
// options.  These validate the definitions but do not cover any
// errors in the definitions (newly required option for example).

const builder: BlockTextBuilder = {} as any as BlockTextBuilder;
if (0) {
    builder.pushWordTransform((str) => str);
    builder.popWordTransform();
    builder.startNoWrap();
    builder.stopNoWrap();
    builder.addLineBreak();
    builder.addWordBreakOpportunity();
    builder.addInline("inline", { noWordTransform: true });
    builder.addLiteral("lit");
    builder.openBlock({
        leadingLineBreaks: 2,
        reservedLineLength: 24,
        isPre: false,
    });
    builder.closeBlock({
        trailingLineBreaks: 2,
        blockTransform: (str) => str,
    });
    builder.openList({
        maxPrefixLength: 2,
        prefixAlign: "left",
        interRowLineBreaks: 2,
        leadingLineBreaks: 1,
    });
    builder.openList({ prefixAlign: "right" }); // test alternate value
    builder.openListItem({ prefix: ">>" });
    builder.closeListItem();
    builder.closeList({ trailingLineBreaks: 2 });
    builder.openTable();
    builder.openTableRow();
    builder.openTableCell({ maxColumnWidth: 22 });
    builder.closeTableCell({
        colspan: 2,
        rowspan: 2,
    });
    builder.closeTableRow();
    builder.closeTable({
        tableToString: (cells) => cells.toString(),
        leadingLineBreaks: 1,
        trailingLineBreaks: 1,
    });
    builder.toString();
    // options.formatters[] is tested later
}

// Test code that also provides sample implementations

const testOptions: FormatOptions = {
    uppercase: false,
};

const headerSelector: SelectorDefinition = {
    selector: "h2",
    options: {
        uppercase: false,
    },
    format: "headerFormatter",
};

// Sample use of FormatCallback outside of HtmlTextOptions

const headerFormatter: FormatCallback = (elem, walk, builder, options) => {
    builder.openBlock({ leadingLineBreaks: options.leadingLineBreaks || 2 });
    walk(elem.children, builder);
    builder.closeBlock({
        trailingLineBreaks: options.trailingLineBreaks || 2,
        blockTransform: str => {
            const underline = str.substring(str.lastIndexOf("\n") + 1)
                .replace(/./g, "=");
            return `${str}\n${underline}`;
        },
    });
};

const htmlOptions: HtmlToTextOptions = {
    wordwrap: null,
    limits: {
        maxBaseElements: 99,
    },
    longWordSplit: {
        forceWrapOnLimit: false,
    },
    formatters: {
        headerFormatter: (elem, walk, builder, options) => {
            builder.openBlock({ leadingLineBreaks: options.leadingLineBreaks || 2 });
            walk(elem.children, builder);
            const trailingLineBreaks = options.trailingLineBreaks || 2;
            builder.closeBlock({ trailingLineBreaks, blockTransform: str => `${str} **hdr**\n` });
        },
        blockFormatter: (elem, walk, builder, options) => {
            const reservedLineLength = 2;
            const leadingLineBreaks = options.leadingLineBreaks || 2;
            builder.openBlock({ leadingLineBreaks, reservedLineLength });
            walk(elem.children, builder);
            const trailingLineBreaks = options.trailingLineBreaks || 2;
            builder.closeBlock({ trailingLineBreaks, blockTransform: str => `**blk** ${str}\n` });
        },
        textFormatter: (elem, walk, builder, options) => {
            builder.options.formatters["heading"](elem, walk, builder, options);
        },
        transform: (elem, walk, builder, options) => {
            builder.pushWordTransform((str) => "transformed");
            builder.startNoWrap();
            builder.stopNoWrap();
            builder.addLineBreak();
            builder.addWordBreakOpportunity();
            builder.addLiteral("addLiteral test");
            builder.popWordTransform();
        },
    },
    selectors: [
        {
            selector: "a",
            options: {
                linkBrackets: ["===> ", " <==="],
                hideLinkHrefIfSameAsText: true,
            },
            format: "anchor",
        },
        { selector: "h1", options: testOptions, format: "headerFormatter" },
        { selector: "h3", format: "textFormatter" },
        {
            selector: "blockquote",
            options: {
                trimEmptyLines: false,
            },
            format: "blockFormatter",
        },
        {
            selector: "p",
            options: {
                trimEmptyLines: false,
            },
            format: "transform",
        },
    ],
};

const htmlString = `<h1>h1</h1><p><b>bold</b></p><p><i>italic</i></p>
<h3>h3</h3><blockquote>block quote</blockquote>`;

console.log("\nProcessing string with default options");
console.log(htmlToText(htmlString));

console.log("\nProcessing string with custom options");
const text = htmlToText(htmlString, htmlOptions);
console.log(text);

if (!text.match(/\*\*hdr\*\*/)) {
    console.error("Formatter not called!");
}

const allElements = "<a>a</a>\
<blockquote>b</blockquote>\
<h1>h</h1>\
<hr />\
<img />\
<br />\
<ol></ol>\
<p>😀 p ☺️</p>\
<table></table>\
<ul></ul>";

const elementFormatter: FormatCallback = (elem, walk, builder, options) => {
    builder.openBlock({ leadingLineBreaks: options.leadingLineBreaks || 2 });
    // walk(elem.children?, builder);
    builder.closeBlock({
        trailingLineBreaks: options.trailingLineBreaks || 2,
        blockTransform: str => {
            return `--${elem.name}--\n`;
        },
    });
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
console.log("\nEmit all elements with \"--\" wrapping");
console.log(htmlToText(allElements, fmtOptions));

const blockTextTestElements = "<a>a</a>\
<blockquote>b</blockquote>\
<p>1234567890123456789012345678901234567890</p>\
<table></table>";

const fmtOptionsTable: HtmlToTextOptions = {
    formatters: {
        table: (elem, walk, builder, options) => {
            builder.openBlock({ leadingLineBreaks: options.leadingLineBreaks || 2 });
            builder.openTable();
            builder.openTableRow();
            builder.openTableCell({ maxColumnWidth: 22 });
            builder.addInline("Cell 1 data", { noWordTransform: false });
            builder.closeTableCell({ colspan: 2 });
            builder.openTableCell({ maxColumnWidth: 6 });
            builder.addInline("Cell 2 data", { noWordTransform: false });
            builder.closeTableCell();
            builder.closeTableRow();
            builder.closeTable({ tableToString: () => "!!table goes here!!" });
            // walk(elem.children, builder);
            builder.closeBlock({ trailingLineBreaks: options.trailingLineBreaks || 2 });
        },
    },
};
console.log("\nTest current table builder interfaces");
console.log(htmlToText(blockTextTestElements, fmtOptionsTable));

const selOptions: HtmlToTextOptions = {
    decodeEntities: true,
    encodeCharacters: {
        "☺️": ":smiley:",
        "😀": ":grinning-face:",
    },
    preserveNewlines: false,
    formatters: {
        h1Formatter: (elem, walk, builder, options) => {
            builder.addInline("preheading: ", { noWordTransform: false });
            walk(elem.children, builder);
        },
    },
    selectors: [
        {
            selector: "h1",
            format: "h1Formatter",
        },
        {
            selector: "hr",
            options: { length: 5 },
        },
    ],
};

console.log("\nTest with selectors");
console.log(htmlToText(allElements, selOptions));

console.log("\nTest with compiler function");
const converter = compile(selOptions);
console.log(converter(allElements));

console.log("\nTest with any tag");
console.log(htmlToText("<h1>Starting foo test</h1><foo>bar</foo>", {
    formatters: {
        fooFormatter: (elem, walk, builder, options) => {
            builder.addInline("fooFormatter: ", { noWordTransform: false });
            walk(elem.children, builder);
        },
    },
    selectors: [
        {
            selector: "foo",
            format: "fooFormatter",
        },
    ],
}));

console.log("\nTest with linkBrackets false");
console.log(htmlToText("<a href=\"https://github.com/DefinitelyTyped\">Link</a>", {
    selectors: [
        {
            selector: "a",
            options: { linkBrackets: false },
        },
    ],
}));

console.log("\nTest with custom linkBrackets");
console.log(htmlToText("<a href=\"https://github.com/DefinitelyTyped\">Link</a>", {
    selectors: [
        {
            selector: "a",
            options: { linkBrackets: ["@", "@"] },
        },
    ],
}));

console.log("\nTest without linkBrackets");
console.log(htmlToText("<a href=\"https://github.com/DefinitelyTyped\">Link</a>", {
    selectors: [
        {
            selector: "a",
            options: { linkBrackets: undefined },
        },
    ],
}));

console.log("\nTest with user defined options that should be in output");
console.log(htmlToText("<h1>Starting foo test</h1><foo>bar</foo>", {
    formatters: {
        fooFormatter: (elem, walk, builder, options) => {
            builder.addInline(`beginning ${options.foo} fooFormatter: `, { noWordTransform: false });
            walk(elem.children, builder);
        },
    },
    selectors: [
        {
            selector: "foo",
            format: "fooFormatter",
            options: { foo: "show-me" },
        },
    ],
}));

console.log("\nTest list functions");
console.log(htmlToText("<h1>Starting list test</h1><my-list><li>first</li><li>second</li></my-list>", {
    formatters: {
        listFormatter: (elem, walk, builder, options) => {
            const prefix = "item: ";
            const maxPrefixLength = prefix.length;

            const listItems = (elem.children || [])
                .filter(child => child.type !== "text" || !/^\s*$/.test(child.data || ""))
                .map((child) => {
                    if (child.name !== "li") {
                        return { node: child, prefix: "" };
                    }
                    return { node: child, prefix };
                });
            if (!listItems.length) return;

            builder.openList({
                interRowLineBreaks: 1,
                leadingLineBreaks: options.leadingLineBreaks || 2,
                maxPrefixLength,
                prefixAlign: "left",
            });

            for (const { node, prefix } of listItems) {
                builder.openListItem({ prefix });
                walk([node], builder);
                builder.closeListItem();
            }

            builder.closeList({ trailingLineBreaks: options.trailingLineBreaks || 2 });
        },
    },
    selectors: [
        {
            selector: "h1",
            options: {
                uppercase: false,
            },
        },
        {
            selector: "my-list",
            format: "listFormatter",
            options: { foo: "show-me" },
        },
    ],
}));
