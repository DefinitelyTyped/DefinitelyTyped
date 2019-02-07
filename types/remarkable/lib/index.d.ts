import * as Utils from "./common/utils";
import Renderer = require("./renderer");
import Ruler = require("./ruler");

export = Remarkable;

declare class Remarkable {
    /**
     * Useful helper functions for custom rendering.
     */
    static utils: typeof Utils;

    inline: { ruler: Ruler<Remarkable.InlineParsingRule> };

    block: { ruler: Ruler<Remarkable.BlockParsingRule> };

    core: { ruler: Ruler<Remarkable.CoreParsingRule> };

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

    type GetBreak = (tokens: ContentToken[], idx: number) => "" | "\n";

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

    interface StateBlock {
      src: string;
      /** Shortcuts to simplify nested calls */
      parser: ParserBlock;
      options: Options;
      env: Env;
      tokens: [ContentToken];
      bMarks: number[];
      eMarks: number[];
      tShift: number[];
      /** required block content indent */
      blkIndent: number;
      /** line index in src */
      line: number;
      /** lines count */
      lineMax: number;
      /** loose/tight mode for lists */
      tight: boolean;
      /** If `list`, block parser stops on two newlines */
      parentType: 'root' | 'list';
      /** Indent of the current dd block, -1 if there isn't any */
      ddIndent: number;
      level: number;
      result: string;
      isEmpty: (line: number) => boolean;
      skipEmptyLines: (from: number) => number;
      skipSpaces: (pos: number) => number;
      skipChars: (pos: number, code: number) => number;
      getLines: (begin: number, end: number, indent: number, keepLastLF: boolean) => string;
    }
    interface StateInline {
      src: string;
      env: Env;
      parser: ParserInline;
      tokens: [ContentToken];
      pos: number;
      posMax: number;
      level: number;
      pending: string;
      pendingLevel: number;
      /** Set true when seek link label */
      isInLabel: boolean;
      /**
       * Increment for each nesting link.
       * Used to prevent nesting in definitions.
       */
      linkLevel: number;
      /**
       * Temporary storage for link url.
       */
      linkContent: string;

      /**
       * Track unpaired `[` for link labels.
       */
      labelUnmatchedScopes: number;
      push: (token: ContentToken) => void;
      pushPending: () => void;
    }

    /**
     * Return `true` if the parsing function has recognized the current position
     * in the input as one if its tokens.
     */
    type CoreParsingRule = (
      /**
       * Representation of the current input stream, and the results of
       * parsing it so far.
       */
      state: StateInline,
  ) => boolean;

    /**
     * Return `true` if the parsing function has recognized the current position
     * in the input as one if its tokens.
     */
    type InlineParsingRule = (
        /**
         * Representation of the current input stream, and the results of
         * parsing it so far.
         */
        state: StateInline,

        /**
         * If `true` we just do the recognition part, and don't bother to push a
         * token.
         */
        silent: boolean
    ) => boolean;

    /**
     * Return `true` if the parsing function has recognized the current position
     * in the input as one if its tokens.
     */
    type BlockParsingRule = (
        /**
         * Representation of the current input stream, and the results of
         * parsing it so far.
         */
        state: StateBlock,

        /**
         * The index of the current line.
         */
        startLine: number,

        /**
         * The index of the last available line.
         */
        endLine: number,

        /**
         * If `true` we just do the recognition part, and don't bother to push a
         * token.
         */
        silent: boolean
    ) => boolean;

    type Rule = (
        /**
         * The list of tokens currently being processed.
         */
        tokens: ContentToken[],

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

    interface TagToken {
        /**
         * The nesting level of the associated markdown structure in the source.
         */
        level: number;

        /**
         * The type of the token.
         */
        type: string;

        /**
         * Tokens generated by block parsing rules also include a `lines`
         * property which is a 2 elements array marking the first and last line of the
         * `src` used to generate the token.
         */
        lines?: [number, number];
    }

    interface BlockContentToken extends TagToken {
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
    }

    interface ContentToken extends TagToken {
        /**
         * A text token has a `content` property. This is passed to
         * the corresponding renderer to be converted for output.
         */
        content: any;

        /**
         * The type of the token.
         */
        type: string;

        /**
         * Is this a block element
         */
        block: boolean;
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

    type Token = (BlockContentToken | ContentToken | TagToken) & MiscTokenProps;
}

declare class ParserBlock {
    tokenize(state: Remarkable.StateBlock, startLine: number, endLine: number): void;
    parse(str: string, options: Remarkable.Options, env: Remarkable.Env, tokens: [Remarkable.Token]): void;
}

declare class ParserInline {
    skipToken(state: Remarkable.StateInline): void;
    tokenize(state: Remarkable.StateInline): void;
    parse(str: string, options: Remarkable.Options, env: Remarkable.Env, tokens: [Remarkable.Token]): void;
    validateLink(url: string): boolean;
}
