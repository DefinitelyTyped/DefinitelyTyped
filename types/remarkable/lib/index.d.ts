import * as Utils from "./common/utils";
import Renderer = require("./renderer");
import Ruler = require("./ruler");

export = Remarkable;

declare class Remarkable {
    /**
     * Useful helper functions for custom rendering.
     */
    static utils: typeof Utils;

    inline: { ruler: Ruler };

    block: { ruler: Ruler };

    core: { ruler: Ruler };

    renderer: Renderer;

    /**
     * Markdown parser, done right.
     */
    constructor(options?: Remarkable.Options);

    /**
     * Remarkable offers some "presets" as a convenience to quickly enable/disable
     * active syntax rules and options for common use cases.
     */
    constructor(preset: "commonmark" | "full" | "remarkable", options?: Remarkable.Options);

    /**
     * `"# Remarkable rulezz!"` => `"<h1>Remarkable rulezz!</h1>"`
     */
    render(markdown: string, env?: Remarkable.Env): string;

    /**
     * Define options.
     *
     * Note: To achieve the best possible performance, don't modify a Remarkable instance
     * on the fly. If you need multiple configurations, create multiple instances and
     * initialize each with a configuration that is ideal for that instance.
     */
    set(options: Remarkable.Options): void;

    /**
     * Use a plugin.
     */
    use(plugin: Remarkable.Plugin, options?: any): Remarkable;

    /**
     * Batch loader for components rules states, and options.
     */
    configure(presets: Remarkable.Presets): void;

    /**
     * Parse the input `string` and return a tokens array.
     * Modifies `env` with definitions data.
     */
    parse(str: string, env: Remarkable.Env): Remarkable.Token[];

    /**
     * Parse the given content `string` as a single string.
     */
    parseInline(str: string, env: Remarkable.Env): Remarkable.Token[];

    /**
     * Render a single content `string`, without wrapping it
     * to paragraphs.
     */
    renderInline(str: string, env?: Remarkable.Env): string;
}

declare namespace Remarkable {
    interface Env {
        [key: string]: any;
    }

    type GetBreak = (tokens: Token[], idx: number) => "" | "\n";

    interface Options {
        /**
         * Enable HTML tags in source.
         */
        html?: boolean;

        /**
         * Use "/" to close single tags (<br />).
         */
        xhtmlOut?: boolean;

        /**
         * Convert "\n" in paragraphs into <br>.
         */
        breaks?: boolean;

        /**
         * CSS language prefix for fenced blocks.
         */
        langPrefix?: string;

        /**
         * Autoconvert URL-like text to links.
         */
        linkify?: boolean;

        /**
         * Enable some language-neutral replacement + quotes beautification.
         */
        typographer?: boolean;

        /**
         * Double + single quotes replacement pairs, when typographer enabled,
         * and smartquotes on. Set doubles to "«»" for Russian, "„“" for German.
         */
        quotes?: string;

        /**
         * Highlighter function. Should return escaped HTML, or "" if the source
         * string is not changed.
         */
        highlight?(str: string, lang: string): string;
    }

    type Plugin = (md: Remarkable, options?: any) => void;

    interface Presets {
        components: {
            [name: string]: {
                rules: Rules,
            },
        };

        options: Options;
    }

    type Rule = (
        /**
         * The list of tokens currently being processed.
         */
        tokens: Token[],

        /**
         * The index of the token currently being processed.
         */
        idx: number,

        /**
         * The options given to remarkable.
         */
        options: Options,

        /**
         * The key-value store created by the parsing rules.
         */
        env: Env,
    ) => string;

    interface Rules {
        [name: string]: Rule;
        "blockquote_open": Rule;
        "blockquote_close": Rule;
        "code": Rule;
        "fence": Rule;
        "fence_custom": Rule;
        "heading_open": Rule;
        "heading_close": Rule;
        "hr": Rule;
        "bullet_list_open": Rule;
        "bullet_list_close": Rule;
        "list_item_open": Rule;
        "list_item_close": Rule;
        "ordered_list_open": Rule;
        "ordered_list_close": Rule;
        "paragraph_open": Rule;
        "paragraph_close": Rule;
        "link_open": Rule;
        "link_close": Rule;
        "image": Rule;
        "table_open": Rule;
        "table_close": Rule;
        "thead_open": Rule;
        "thead_close": Rule;
        "tbody_open": Rule;
        "tbody_close": Rule;
        "tr_open": Rule;
        "tr_close": Rule;
        "th_open": Rule;
        "th_close": Rule;
        "td_open": Rule;
        "td_close": Rule;
        "strong_open": Rule;
        "strong_close": Rule;
        "em_open": Rule;
        "em_close": Rule;
        "del_open": Rule;
        "del_close": Rule;
        "ins_open": Rule;
        "ins_close": Rule;
        "mark_open": Rule;
        "mark_close": Rule;
        "sub": Rule;
        "sup": Rule;
        "hardbreak": Rule;
        "softbreak": Rule;
        "text": Rule;
        "htmlblock": Rule;
        "htmltag": Rule;
        "abbr_open": Rule;
        "abbr_close": Rule;
        "footnote_ref": Rule;
        "footnote_block_open": Rule;
        "footnote_block_close": Rule;
        "footnote_open": Rule;
        "footnote_close": Rule;
        "footnote_anchor": Rule;
        "dl_open": Rule;
        "dt_open": Rule;
        "dd_open": Rule;
        "dl_close": Rule;
        "dt_close": Rule;
        "dd_close": Rule;

        /**
         * Check to see if `\n` is needed before the next token.
         */
        getBreak: GetBreak;
    }

    interface BaseToken {
        /**
         * The nesting level of the associated markdown structure in the source.
         */
        level: number;

        /**
         * Tokens generated by block parsing rules also include a `lines`
         * property which is a 2 elements array marking the first and last line of the
         * `src` used to generate the token.
         */
        lines?: [number, number];
    }

    interface TagToken extends BaseToken {
        /**
         * Tag tokens have a variety of types and each is a name of a
         * rendering rule.
         */
        type: string;
    }

    interface ContentToken extends BaseToken {
        /**
         * A text token has a `content` property containing the text it represents.
         */
        content: string;

        /**
         * The type of the token.
         */
        type: "text";
    }

    interface BlockContentToken extends BaseToken {
        /**
         * The content of the block. This might include inline mardown syntax
         * which may need further processing by the inline rules.
         */
        content: string;

        /**
         * This is initialized with an empty array (`[]`) and will be filled
         * with the inline parser tokens as the inline parsing rules are applied.
         */
        children: Token[];

        /**
         * The type of the token.
         */
        type: "inline";
    }

    interface MiscTokenProps {
        /**
         * Image alt.
         */
        alt?: string;

        /**
         * Code: `true` if block, `false` if inline.
         */
        block?: boolean;

        /**
         * Footnote label.
         */
        label?: any;

        /**
         * Heading level.
         */
        hLevel?: number;

        /**
         * Link url.
         */
        href?: string;

        /**
         * Footnote id.
         */
        id?: number;

        /**
         * Ordered list marker value.
         */
        order?: number;

        /**
         * Fenced block params.
         */
        params?: any[];

        /**
         * Image url.
         */
        src?: string;

        /**
         * Footnote sub id.
         */
        subId?: number;

        /**
         * Absence of empty line before current tag: `true` if absent, `false`
         * if present. List is tight if any list item is tight.
         */
        tight?: boolean;

        /**
         * Abbreviation title.
         */
        title?: string;
    }

    type Token = (TagToken | ContentToken | BlockContentToken) & MiscTokenProps;
}
