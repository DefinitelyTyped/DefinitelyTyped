// This code does not run, but it is type-checked.

import hljs = require("highlight.js");
import Remarkable = require("remarkable");
import * as ImportedRemarkable from "remarkable";

/**
 * Examples from README.
 */
export class RemarkableTest {
    usage() {
        const md = new Remarkable();
        md.render("# Remarkable rulezz!");

        const importedMd = new ImportedRemarkable();
        importedMd.render("# Remarkable rulezz!");
    }

    defineOptionsInContructor() {
        const md = new Remarkable({
            html: false,
            xhtmlOut: false,
            breaks: false,
            langPrefix: "language-",
            linkify: false,
            linkTarget: "_blank",
            typographer: false,
            quotes: "“”‘’",
            highlight(/*str, lang*/) { return ""; },
        });

        md.render("# Remarkable rulezz!");
    }

    defineOptions() {
        const md = new Remarkable();

        md.set({
            html: true,
            breaks: true,
        });
    }

    enableStrict() {
        const md = new Remarkable("commonmark");

        md.render("# Remarkable rulezz!");
    }

    enableAllRules() {
        let md = new Remarkable("full");

        // Or with options:
        md = new Remarkable("full", {
            html: true,
            linkify: true,
            typographer: true,
        });

        md.render("# Remarkable rulezz!");
    }

    highlightFencedCodeBlocks() {
        const md = new Remarkable({
            highlight(str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (err) { }
                }

                try {
                    return hljs.highlightAuto(str).value;
                } catch (err) { }

                return "";
            },
        });

        md.render("# Remarkable rulezz!");
    }

    manageRules() {
        let md = new Remarkable();
        md.inline.ruler.enable(["ins", "mark"]);
        md.block.ruler.disable(["table", "footnote"]);

        // Enable everything
        md = new Remarkable("full", {
            html: true,
            linkify: true,
            typographer: true,
        });
    }

    enableRulesManually() {
        const md = new Remarkable();
        md.core.ruler.enable([
            "abbr",
        ]);
        md.block.ruler.enable([
            "footnote",
            "deflist",
        ]);
        md.inline.ruler.enable([
            "footnote_inline",
            "ins",
            "mark",
            "sub",
            "sup",
        ]);
    }

    typographer() {
        const md = new Remarkable({
            typographer: true,
            quotes: "“”‘’",
        });

        // Disable rules at all:
        md.core.ruler.disable(["replacements", "smartquotes"]);
    }

    loadPlugins() {
        const md = new Remarkable();
        const noop = () => { };
        const plugin1: Remarkable.Plugin = noop as (md: Remarkable) => void;
        const plugin2: Remarkable.Plugin = noop as (md: Remarkable, options: {}) => void;
        const plugin3: Remarkable.Plugin = noop as (md: Remarkable) => void;
        const opts: any = undefined;

        md.use(plugin1)
            .use(plugin2, opts)
            .use(plugin3);
    }

    touchParserAndRenderer() {
        const md = new Remarkable();
        md.core;
        md.core.ruler;
        md.block;
        md.block.ruler;
        md.inline;
        md.inline.ruler;
        md.renderer;
        md.renderer.rules;
    }
}

/**
 * Various tokens copied from source.
 */
export class TokenTest {
    blockRules() {
        const state: Remarkable.StateBlock = {} as any;

        const lines: [number, number] = [0, 0];
        const startLine = 0;

        const blockquoteOpenToken: Remarkable.BlockquoteOpenToken = {
            type: "blockquote_open",
            lines,
            level: state.level++,
        };
        state.tokens.push(blockquoteOpenToken);

        const blockquoteCloseToken: Remarkable.BlockquoteCloseToken = {
            type: "blockquote_close",
            level: --state.level,
        };
        state.tokens.push(blockquoteCloseToken);

        const codeToken: Remarkable.CodeToken = {
            type: "code",
            content: "",
            block: true,
            lines,
            level: state.level,
        };
        state.tokens.push(codeToken);

        // inline token doesn't need a proper type
        const inlineToken: Remarkable.BlockContentToken = {
            type: "inline",
            content: "",
            level: state.level + 1,
            lines,
            children: [],
        };
        state.tokens.push(inlineToken);

        const fenceToken: Remarkable.FenceToken = {
            type: "fence",
            params: "",
            content: "",
            lines: [startLine, state.line],
            level: state.level,
        };
        state.tokens.push(fenceToken);

        const footnoteRefOpenToken: Remarkable.FootnoteReferenceOpenToken = {
            type: "footnote_reference_open",
            label: "",
            level: state.level++,
            id: 0,
        };
        state.tokens.push(footnoteRefOpenToken);

        const headingCloseToken: Remarkable.HeadingCloseToken = { type: "heading_close", hLevel: 1, level: state.level };
        state.tokens.push(headingCloseToken);

        const orderedListOpenToken: Remarkable.OrderedListOpenToken = {
            type: "ordered_list_open",
            order: 0,
            lines: [startLine, 0],
            level: state.level++,
        };
        state.tokens.push(orderedListOpenToken);

        const paragraphOpenToken: Remarkable.ParagraphOpenToken = {
            type: "paragraph_open",
            tight: false,
            lines: [startLine, state.line],
            level: state.level,
        };
        state.tokens.push(paragraphOpenToken);
    }

    coreRules() {
        const env: Remarkable.Env = {};
        const nodes: Remarkable.Token[] = [];
        const tokens = nodes;
        const state = { env, src: "", tokens };
        const m = ["", "", ""];
        let level = 0;

        const textToken1: Remarkable.TextToken = {
            type: "text",
            content: "",
            level,
        };
        nodes.push(textToken1);

        const abbrOpenToken: Remarkable.AbbrOpenToken = {
            type: "abbr_open",
            title: state.env["abbreviations"][":" + m[2]],
            level: level++,
        };
        nodes.push(abbrOpenToken);

        const textToken2: Remarkable.TextToken = {
            type: "text",
            content: m[2],
            level,
        };
        nodes.push(textToken2);

        const abbrCloseToken: Remarkable.AbbrCloseToken = {
            type: "abbr_close",
            level: --level,
        };
        nodes.push(abbrCloseToken);

        // inline token doesn't need a proper type
        const inlineToken1: Remarkable.BlockContentToken = {
            type: "inline",
            content: state.src.replace(/\n/g, " ").trim(),
            level: 0,
            lines: [0, 1],
            children: [],
        };
        state.tokens.push(inlineToken1);

        const inlineToken2: Remarkable.BlockContentToken = {
            type: "inline",
            content: "",
            level,
            children: [],
        };
        tokens.push(inlineToken2);
    }

    inlineRules() {
        const state: Remarkable.StateInline = {} as any;
        let level = 0;

        const linkOpenToken1: Remarkable.LinkOpenToken = {
            type: "link_open",
            href: "",
            level,
        };
        state.push(linkOpenToken1);

        const codeToken: Remarkable.CodeToken = {
            type: "code",
            content: "",
            block: false,
            level,
        };
        state.push(codeToken);

        const footnoteRefToken1: Remarkable.FootnoteReferenceToken = {
            type: "footnote_ref",
            id: 1,
            level,
        };
        state.push(footnoteRefToken1);

        const footnoteRefToken2: Remarkable.FootnoteReferenceToken = {
            type: "footnote_ref",
            id: 1,
            subId: 1,
            level,
        };
        state.push(footnoteRefToken2);

        const imageToken: Remarkable.ImageToken = {
            type: "image",
            src: "",
            title: "",
            alt: "",
            level,
        };
        state.push(imageToken);

        const linkOpenToken2: Remarkable.LinkOpenToken = {
            type: "link_open",
            href: "",
            title: "",
            level: level++,
        };
        state.push(linkOpenToken2);
    }
}

/**
 * Helper function usage.
 */
export class UtilsTest {
    isString() {
        Remarkable.utils.isString("foo");
        Remarkable.utils.isString(1);
        Remarkable.utils.isString({});
        Remarkable.utils.isString();
    }

    has() {
        Remarkable.utils.has({ foo: "bar" }, "foo");
        Remarkable.utils.has({}, "foo");
    }

    assign() {
        Remarkable.utils.assign({}, { foo: "bar" }, { baz: "qux" });
    }

    unescapeMd() {
        Remarkable.utils.unescapeMd("\\<foo /\\>");
    }

    isValidEntityCode() {
        Remarkable.utils.isValidEntityCode(0xD800);
        Remarkable.utils.isValidEntityCode(0xD7FF);
        Remarkable.utils.isValidEntityCode(1000);
    }

    fromCodePoint() {
        Remarkable.utils.fromCodePoint(0xffff + 1);
        Remarkable.utils.fromCodePoint(0xffff);
    }

    replaceEntities() {
        Remarkable.utils.replaceEntities("");
        Remarkable.utils.replaceEntities("&nbsp;");
    }

    escapeHtml() {
        Remarkable.utils.replaceEntities('<script>alert("&copy;")</script>');
    }
}
