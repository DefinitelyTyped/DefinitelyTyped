// Reference/dependency missing in chalk
/// <reference types="node" />

import { CardinalOptions } from "cardinal";
// @ts-ignore - should use `with { "resolution-mode": "import " }`
// but typescript-eslint doesn't parse it yet. Once it does, we
// should keep this ts-ignored version as a typesVersion, since
// import attributes are only supported in TS 5.3+.
import type { ChalkInstance } from "chalk";
// @ts-ignore - same as above, except that this would resolve
// without error to a CJS module if not for a bug in marked's
// types - https://github.com/markedjs/marked/pull/3038.
// We may need to keep this here as long as upstream
// marked-terminal has such a wide version range for marked.
import type { Renderer } from "marked";

export interface TerminalRendererOptions {
    code?: ChalkInstance | ((s: string) => string) | undefined;
    blockquote?: ChalkInstance | ((s: string) => string) | undefined;
    html?: ChalkInstance | ((s: string) => string) | undefined;
    heading?: ChalkInstance | ((s: string) => string) | undefined;
    firstHeading?: ChalkInstance | ((s: string) => string) | undefined;
    hr?: ChalkInstance | ((s: string) => string) | undefined;
    listitem?: ChalkInstance | ((s: string) => string) | undefined;
    table?: ChalkInstance | ((s: string) => string) | undefined;
    paragraph?: ChalkInstance | ((s: string) => string) | undefined;
    strong?: ChalkInstance | ((s: string) => string) | undefined;
    em?: ChalkInstance | ((s: string) => string) | undefined;
    codespan?: ChalkInstance | ((s: string) => string) | undefined;
    del?: ChalkInstance | ((s: string) => string) | undefined;
    link?: ChalkInstance | ((s: string) => string) | undefined;
    href?: ChalkInstance | ((s: string) => string) | undefined;
    text?: ChalkInstance | ((s: string) => string) | undefined;

    /** Formats the bulletpoints and numbers for lists */
    list?: ((body: string, ordered?: boolean) => string) | undefined;

    /** Reflow and print-out width. Only applicable when `reflowText` is true. */
    width?: number | undefined;

    reflowText?: boolean | undefined;

    /** Should it prefix headers? */
    showSectionPrefix?: boolean | undefined;

    /** Whether or not to undo marked escaping of enitities (" -> &quot; etc) */
    unescape?: boolean | undefined;

    /** Whether or not to show emojis */
    emoji?: boolean | undefined;

    /** Options passed to cli-table */
    tableOptions?: any;

    /** The size of tabs in number of spaces or as tab characters */
    tab?: number | undefined;
}

declare class TerminalRenderer extends Renderer {
    constructor(options?: TerminalRendererOptions, highlightOptions?: CardinalOptions);
}

export function markedTerminal(
    options?: TerminalRendererOptions,
    highlightOptions?: CardinalOptions,
): TerminalRenderer;

export default TerminalRenderer;
