import LinkifyIt = require("linkify-it");
import MarkdownIt = require("markdown-it");
import MarkdownIt1 = require("markdown-it");

// stub highlight-js interaction
declare const hljs: {
    highlight: (
        codeOrlanguageName: string,
        optionsOrCode: string,
        ignoreIllegals?: boolean,
    ) => {
        value: string;
    };
    getLanguage: (languageName: string) => string | undefined;
};

{
    // check exports
    let md: typeof MarkdownIt;
    md = MarkdownIt1;
}

{
    // test constuctor usage
    let md: MarkdownIt;
    const options: MarkdownIt.Options = {};
    options.quotes; // $ExpectType string | string[] | undefined
    const presets: MarkdownIt.PresetName[] = ["commonmark", "zero", "default"];

    md = MarkdownIt();
    md = new MarkdownIt({});
    md = MarkdownIt(options);
    md = new MarkdownIt(options);

    presets.forEach((p) => {
        md = MarkdownIt(p);
        md = new MarkdownIt(p);
        md = MarkdownIt(p, options);
        md = new MarkdownIt(p, options);
    });

    md = MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });
    md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });

    md = MarkdownIt({
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "“”‘’",
        highlight: (str: string, lang: string): string => {
            return "";
        },
    });
    md = new MarkdownIt({
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "“”‘’",
        highlight: (str: string, lang: string): string => {
            return "";
        },
    });
}

declare const plugin1: any;
declare const plugin2: any;
declare const plugin3: any;
declare const opts: any;

let md: MarkdownIt;
{
    md = MarkdownIt().use(plugin1).use(plugin2, opts).use(plugin3);
}

{
    md = MarkdownIt({
        highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str, true).value;
                } catch (__) {}
            }

            return "";
        },
    });
}

{
    md = MarkdownIt({
        highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return "<pre class=\"hljs\"><code>" + hljs.highlight(lang, str, true).value + "</code></pre>";
                } catch (__) {}
            }

            return "<pre class=\"hljs\"><code>" + md.utils.escapeHtml(str) + "</code></pre>";
        },
    });
}

{
    const linkify: LinkifyIt = md.linkify;
    md.linkify.tlds(".py", false);
}

{
    md = MarkdownIt().disable(["link", "image"]).enable(["link"]).enable("image");

    md = MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });
}

{
    let md = MarkdownIt();
    let state = new md.inline.State("text `code`", md, {}, []);
    md.inline.tokenize(state);
    let hasNull = false;
    for (let i of state.tokens_meta) {
        if (i === null) {
            hasNull = true;
        }
    }
}

{
    // common/utils.mjs
    const { utils } = MarkdownIt();
    utils.lib.mdurl.parse("https://github.com/markdown-it/markdown-it", true);

    const options = utils.assign({}, {});
    utils.isString(options);
    utils.has(options, "foobar");
    utils.unescapeMd("# Foobar");
    utils.unescapeAll("<span>foobar</span>");
    utils.isValidEntityCode(1);
    utils.fromCodePoint(0xfffd);
    utils.escapeHtml("<div>foobar</div>");
    utils.arrayReplaceAt([1], 0, [1, 2, 3]);
    utils.isSpace("foobar".charCodeAt(0));
    utils.isWhiteSpace("foobar".charCodeAt(0));
    utils.isMdAsciiPunct("foobar".charCodeAt(0));
    utils.isPunctChar(String.fromCharCode(0x20));
    utils.escapeRE("foobar");
    utils.normalizeReference("foobar");
}

{
    // helpers/index.mjs
    const md = MarkdownIt();
    const StateInline = md.inline.State;
    const { parseLinkDestination, parseLinkLabel, parseLinkTitle } = MarkdownIt().helpers;

    const state: MarkdownIt.StateInline = new StateInline("", md, {}, []);

    parseLinkLabel(state, 0, true);
    parseLinkDestination("https://github.com/markdown-it/markdown-it", 0, 3);
    parseLinkTitle("https://github.com/markdown-it/markdown-it", 0, 3);
}

{
    // parser_block.mjs

    const md = new MarkdownIt();
    const StateBlock = md.block.State;
    const tokens: MarkdownIt.Token[] = [];
    const state: MarkdownIt.StateBlock = new StateBlock("# Foobar", md, {}, tokens);
    md.block.tokenize(state, state.line, state.lineMax);
    state.md.block.parse(state.src, state.md, state.env, state.tokens);

    const rule: MarkdownIt.ParserBlock.RuleBlock = (
        state: MarkdownIt.StateBlock,
        startLine: number,
        endLine: number,
        silent: boolean,
    ) => {
        return false;
    };

    md.block.ruler.push("foobar", rule, { alt: ["paragraph", "reference"] });
}

{
    // parser_core.mjs

    const md = new MarkdownIt();
    const StateCore = md.core.State;
    const state: MarkdownIt.StateCore = new StateCore("# Foobar", md, {});
    md.core.process(state);

    const rule: MarkdownIt.Core.RuleCore = (state: MarkdownIt.StateCore): boolean => {
        return false;
    };

    md.core.ruler.push("foobar", rule);
}

{
    // parser_inline.mjs

    const md = new MarkdownIt();
    const tokens: MarkdownIt.Token[] = [];
    const state: MarkdownIt.StateInline = new md.inline.State("__foobar", md, {}, tokens);

    const rule: MarkdownIt.ParserInline.RuleInline = (state: MarkdownIt.StateInline, silent: boolean) => {
        return false;
    };

    md.inline.ruler.push("foobar", rule);

    const rule2: MarkdownIt.ParserInline.RuleInline2 = (state: MarkdownIt.StateInline) => {
        return false;
    };

    md.inline.ruler2.push("foobar", rule2);
}

{
    // renderer.mjs

    type Options = MarkdownIt.Options;
    type Renderer = MarkdownIt.Renderer;
    type Token = MarkdownIt.Token;

    const md = new MarkdownIt();
    const src = "# Foobar";
    const env = {};

    {
        md.renderer.rules.strong_open = () => "<b>";
        md.renderer.rules.strong_close = () => "</b>";
        const result = md.renderInline("__foobar__");
    }

    {
        md.renderer.rules.foobar = (
            tokens: Token[],
            idx: number,
            options: Options,
            env: any,
            slf: Renderer,
        ): string => {
            return "foobar";
        };
    }

    {
        const result = md.renderer.render(md.parse(src, env), md.options, env);
    }

    {
        const result = md.renderer.render(md.parseInline(src, env), md.options, env);
    }

    {
        const tokens = md.parse(src, env);
        let result = "";
        for (const token of tokens) {
            if (token.type === "inline" && token.children) {
                result += md.renderer.renderInline(token.children, md.options, env);
            }
        }
    }

    {
        const tokens = md.parse(src, env);
        let result = "";
        for (const token of tokens) {
            if (token.type === "image" && token.children) {
                result += md.renderer.renderInlineAsText(token.children, md.options, env);
            }
        }
    }

    {
        const tokens = md.parse(src, env);
        let result = "";
        for (let index = 0; index < tokens.length; index++) {
            result += md.renderer.renderToken(tokens, index, md.options);
        }
    }

    {
        const tokens = md.parse(src, env);
        for (const token of tokens) {
            const attr = md.renderer.renderAttrs(token);
        }
    }
}

{
    // ruler.mjs

    const md = new MarkdownIt();

    md.core.ruler.at("replacements", function replace(state) {
        // ...
        return true;
    });

    md.block.ruler.before("paragraph", "my_rule", function replace(state) {
        // ...
        return true;
    });

    md.inline.ruler.after("text", "my_rule", function replace(state) {
        // ...
        return true;
    });

    md.core.ruler.push("my_rule", function replace(state) {
        // ...
        return true;
    });

    md.core.ruler.enable(["link"]);
    md.core.ruler.enable("image");
    md.core.ruler.enableOnly(["link"]);
    md.core.ruler.enableOnly("image");
    md.core.ruler.disable(["link", "image"]);
    md.core.ruler.disable("link");

    const state: MarkdownIt.StateCore = new md.core.State("", md, {});
    const coreRules = md.core.ruler.getRules("");
    coreRules.forEach((rule) => {
        rule(state);
    });

    const terminatorRules = md.block.ruler.getRules("blockquote");

    md.core.ruler.push("foobar", (state) => false, { alt: ["foo", "bar"] });
}

{
    // rules_block/state_block.mjs

    const md = new MarkdownIt();
    const tokens: MarkdownIt.Token[] = [];
    const StateBlock = md.block.State;

    const state = new StateBlock("# Foobar", md, {}, tokens);

    {
        state.src = "# Foobar";
        state.md = md;
        state.env = {};
        state.tokens = tokens;

        state.bMarks = [] as number[];
        state.eMarks = [] as number[];
        state.tShift = [] as number[];
        state.sCount = [] as number[];

        state.bsCount = [] as number[];

        state.blkIndent = 0;

        state.line = 0;
        state.lineMax = 0;
        state.tight = false;
        state.ddIndent = -1;
        state.listIndent = -1;

        state.parentType = "root";

        state.level = 0;

        state.bMarks.push(16);
        state.eMarks.push(16);
        state.tShift.push(0);
        state.sCount.push(0);
        state.bsCount.push(0);

        state.lineMax = state.bMarks.length - 1;
    }

    {
        let token: MarkdownIt.Token;
        let flag: boolean;
        let num: number;

        token = state.push("hr", "hr", 0);
        flag = state.isEmpty(2);
        num = state.skipEmptyLines(123);
        num = state.skipSpaces(456);
        num = state.skipSpacesBack(789, 456);
        num = state.skipChars(234, "*".charCodeAt(0));
        num = state.skipCharsBack(345, "_".charCodeAt(0), 456);

        token = new state.Token("hr", "hr", 0);
    }
}

{
    // rules_core/state_core.mjs

    const md = new MarkdownIt();
    const StateCore = md.core.State;

    const state = new StateCore("# Foobar", md, {});

    {
        state.src = "# Foobar";
        state.env = {};
        state.tokens = [] as MarkdownIt.Token[];
        state.inlineMode = false;
        state.md = md;
    }

    {
        let token = new state.Token("heading_open", "h1", -1);
        state.tokens.push(token);
    }
}

{
    // roles_inline/state_inline.mjs

    const md = new MarkdownIt();
    const StateInline = md.inline.State;
    const tokens: MarkdownIt.Token[] = [];

    const state = new StateInline("__foobar__", md, {}, tokens);

    {
        state.src = "__foobar__";
        state.env = {};
        state.md = md;
        state.tokens = tokens;
        state.tokens_meta = [] as MarkdownIt.StateInline.TokenMeta[];
        state.pos = 0;
        state.posMax = state.src.length;
        state.level = 0;
        state.pending = "";
        state.pendingLevel = 0;
        state.cache = {};
        state.delimiters = [] as MarkdownIt.StateInline.Delimiter[];
    }

    {
        let token: MarkdownIt.Token;
        if (state.pending) {
            token = state.pushPending();
        }
        token = state.push("image", "img", 0);
        token = new state.Token("image", "img", 0);
    }

    {
        const marker = "*".charCodeAt(0);
        let scanned: MarkdownIt.StateInline.Scanned = {
            can_open: true,
            can_close: true,
            length: 16,
        };

        scanned = state.scanDelims(state.pos, marker === 0x2a);

        state.delimiters.push({
            marker: marker,
            length: scanned.length,
            token: state.tokens.length - 1,
            end: -1,
            open: scanned.can_open,
            close: scanned.can_close,
        });
    }
}

{
    // token.mjs

    const Token = MarkdownIt().core.State.prototype.Token;

    const token: MarkdownIt.Token = new Token("link_open", "a", 1);

    token.type = "paragraph_open";
    token.tag = "p";
    token.attrs = null;
    token.map = null;
    token.nesting = 1;
    token.level = 0;
    token.children = null;
    token.content = "";
    token.markup = "";
    token.info = "";
    token.meta = null;
    token.block = false;
    token.hidden = false;

    const index: number = token.attrIndex("href");
    token.attrPush(["data-foo", "bar"]);
    token.attrSet("href", "https://github.com/markdown-it/markdown-it");
    const href: string | null = token.attrGet("href");
    token.attrJoin("class", "foobar");
}
