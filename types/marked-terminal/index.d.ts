// Type definitions for marked-terminal 3.1
// Project: https://github.com/mikaelbr/marked-terminal
// Definitions by: Bryan Kendall <https://github.com/bkendall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Chalk } from 'chalk';
import { Renderer } from 'marked';

export as namespace TerminalRenderer;

export = TerminalRenderer;

declare class TerminalRenderer extends Renderer {
  constructor(options?: TerminalRenderer.TerminalRendererOptions)
}

declare namespace TerminalRenderer {
  interface TerminalRendererOptions {
    code?: Chalk | ((s: string) => string);
    blockquote?: Chalk | ((s: string) => string);
    html?: Chalk | ((s: string) => string);
    heading?: Chalk | ((s: string) => string);
    firstHeading?: Chalk | ((s: string) => string);
    hr?: Chalk | ((s: string) => string);
    listitem?: Chalk | ((s: string) => string);
    table?: Chalk | ((s: string) => string);
    paragraph?: Chalk | ((s: string) => string);
    strong?: Chalk | ((s: string) => string);
    em?: Chalk | ((s: string) => string);
    codespan?: Chalk | ((s: string) => string);
    del?: Chalk | ((s: string) => string);
    link?: Chalk | ((s: string) => string);
    href?: Chalk | ((s: string) => string);

    // Formats the bulletpoints and numbers for lists
    list?: (body: string, ordered?: boolean) => string;

    // Reflow and print-out width
    width?: number; // only applicable when reflow is true
    reflowText?: boolean;

    // Should it prefix headers?
    showSectionPrefix?: boolean;

    // Whether or not to undo marked escaping
    // of enitities (" -> &quot; etc)
    unescape?: boolean;

    // Whether or not to show emojis
    emoji?: boolean;

    // Options passed to cli-table
    tableOptions?: any;

    // The size of tabs in number of spaces or as tab characters
    tab?: number;
  }
}
