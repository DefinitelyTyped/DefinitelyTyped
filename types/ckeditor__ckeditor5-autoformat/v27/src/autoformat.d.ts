import { Plugin } from "@ckeditor/ckeditor5-core";
/**
 * Enables a set of predefined autoformatting actions.
 *
 * For a detailed overview, check the {@glink features/autoformat Autoformatting feature documentation}
 * and the {@glink api/autoformat package page}.
 */
export default class Autoformat extends Plugin {
    static readonly pluginName: "Autoformat";
    afterInit(): void;
    /**
     * Adds autoformatting related to the {@link module:list/list~List}.
     *
     * When typed:
     * - `* ` or `- ` &ndash; A paragraph will be changed to a bulleted list.
     * - `1. ` or `1) ` &ndash; A paragraph will be changed to a numbered list ("1" can be any digit or a list of digits).
     * - `[] ` or `[ ] ` &ndash; A paragraph will be changed to a to-do list.
     * - `[x] ` or `[ x ] ` &ndash; A paragraph will be changed to a checked to-do list.
     */
    private _addListAutoformats;
    /**
     * Adds autoformatting related to the {@link module:basic-styles/bold~Bold},
     * {@link module:basic-styles/italic~Italic}, {@link module:basic-styles/code~Code}
     * and {@link module:basic-styles/strikethrough~Strikethrough}
     *
     * When typed:
     * - `**foobar**` &ndash; `**` characters are removed and `foobar` is set to bold,
     * - `__foobar__` &ndash; `__` characters are removed and `foobar` is set to bold,
     * - `*foobar*` &ndash; `*` characters are removed and `foobar` is set to italic,
     * - `_foobar_` &ndash; `_` characters are removed and `foobar` is set to italic,
     * - ``` `foobar` &ndash; ``` ` ``` characters are removed and `foobar` is set to code,
     * - `~~foobar~~` &ndash; `~~` characters are removed and `foobar` is set to strikethrough.
     */
    private _addBasicStylesAutoformats;
    /**
     * Adds autoformatting related to {@link module:heading/heading~Heading}.
     *
     * It is using a number at the end of the command name to associate it with the proper trigger:
     *
     * * `heading` with value `heading1` will be executed when typing `#`,
     * * `heading` with value `heading2` will be executed when typing `##`,
     * * ... up to `heading6` and `######`.
     */
    private _addHeadingAutoformats;
    /**
     * Adds autoformatting related to {@link module:block-quote/blockquote~BlockQuote}.
     *
     * When typed:
     * * `> ` &ndash; A paragraph will be changed to a block quote.
     */
    private _addBlockQuoteAutoformats;
    /**
     * Adds autoformatting related to {@link module:code-block/codeblock~CodeBlock}.
     *
     * When typed:
     * - `` ``` `` &ndash; A paragraph will be changed to a code block.
     */
    private _addCodeBlockAutoformats;
    /**
     * Adds autoformatting related to {@link module:horizontal-line/horizontalline~HorizontalLine}.
     *
     * When typed:
     * - `` --- `` &ndash; Will be replaced with a horizontal line.
     */
    private _addHorizontalLineAutoformats;
}
