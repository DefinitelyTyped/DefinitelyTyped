import { Chalk } from "chalk";
import { Renderer } from "marked";

export as namespace TerminalRenderer;

export = TerminalRenderer;

declare class TerminalRenderer extends Renderer {
    constructor(options?: TerminalRenderer.TerminalRendererOptions);
}

declare namespace TerminalRenderer {
    interface TerminalRendererOptions {
        code?: Chalk | ((s: string) => string) | undefined;
        blockquote?: Chalk | ((s: string) => string) | undefined;
        html?: Chalk | ((s: string) => string) | undefined;
        heading?: Chalk | ((s: string) => string) | undefined;
        firstHeading?: Chalk | ((s: string) => string) | undefined;
        hr?: Chalk | ((s: string) => string) | undefined;
        listitem?: Chalk | ((s: string) => string) | undefined;
        table?: Chalk | ((s: string) => string) | undefined;
        paragraph?: Chalk | ((s: string) => string) | undefined;
        strong?: Chalk | ((s: string) => string) | undefined;
        em?: Chalk | ((s: string) => string) | undefined;
        codespan?: Chalk | ((s: string) => string) | undefined;
        del?: Chalk | ((s: string) => string) | undefined;
        link?: Chalk | ((s: string) => string) | undefined;
        href?: Chalk | ((s: string) => string) | undefined;

        // Formats the bulletpoints and numbers for lists
        list?: ((body: string, ordered?: boolean) => string) | undefined;

        // Reflow and print-out width
        width?: number | undefined; // only applicable when reflow is true
        reflowText?: boolean | undefined;

        // Should it prefix headers?
        showSectionPrefix?: boolean | undefined;

        // Whether or not to undo marked escaping
        // of enitities (" -> &quot; etc)
        unescape?: boolean | undefined;

        // Whether or not to show emojis
        emoji?: boolean | undefined;

        // Options passed to cli-table
        tableOptions?: any;

        // The size of tabs in number of spaces or as tab characters
        tab?: number | undefined;
    }
}
