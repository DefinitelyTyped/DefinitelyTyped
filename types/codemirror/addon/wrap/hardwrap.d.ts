import '../../';

export interface HardwrapOptions {
    column?: number;
    paragraphStart?: RegExp;
    paragraphEnd?: RegExp;
    wrapOn?: RegExp;
    killTrailingSpace?: boolean;
    forceBreak?: boolean;
}

declare module '../../' {
    interface CommandActions {
        wrapLines(cm: Editor): void;
    }

    interface Editor {
        /** Wraps the paragraph at the given position. If pos is not given, it defaults to the cursor position. */
        wrapParagraph(pos?: Position, options?: HardwrapOptions): void;
        /** Wraps the given range as one big paragraph. */
        wrapRange(from: Position, to: Position, options?: HardwrapOptions): void;
        /** Wraps the paragraphs in (and overlapping with) the given range individually. */
        wrapParagraphsInRange(from: Position, to: Position, options?: HardwrapOptions): void;
    }
}
