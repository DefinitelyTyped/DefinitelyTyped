import { Doc } from './';

// https://github.com/prettier/prettier/blob/main/src/document/index.js

export namespace builders {
    type DocCommand =
        | Align
        | BreakParent
        | Concat
        | Cursor
        | Fill
        | Group
        | IfBreak
        | Indent
        | IndentIfBreak
        | Label
        | Line
        | LineSuffix
        | LineSuffixBoundary
        | Trim;
    type Doc = string | Doc[] | DocCommand;

    interface Align {
        type: 'align';
        contents: Doc;
        n: number | string | { type: 'root' };
    }

    interface BreakParent {
        type: 'break-parent';
    }

    interface Concat {
        type: 'concat';
        parts: Doc[];
    }

    interface Cursor {
        type: 'cursor';
        placeholder: symbol;
    }

    interface Fill {
        type: 'fill';
        parts: Doc[];
    }

    interface Group {
        type: 'group';
        contents: Doc;
        break: boolean;
        expandedStates: Doc[];
    }

    interface HardlineWithoutBreakParent extends Line {
        hard: true;
    }

    interface IfBreak {
        type: 'if-break';
        breakContents: Doc;
        flatContents: Doc;
    }

    interface Indent {
        type: 'indent';
        contents: Doc;
    }

    interface IndentIfBreak {
        type: 'indent-if-break';
    }

    interface Label {
        type: 'label';
    }

    interface Line {
        type: 'line';
        soft?: boolean | undefined;
        hard?: boolean | undefined;
        literal?: boolean | undefined;
    }

    interface LineSuffix {
        type: 'line-suffix';
        contents: Doc;
    }

    interface LineSuffixBoundary {
        type: 'line-suffix-boundary';
    }

    interface LiterallineWithoutBreakParent extends Line {
        hard: true;
        literal: true;
    }

    interface Softline extends Line {
        soft: true;
    }

    interface Trim {
        type: 'trim';
    }

    interface GroupOptions {
        shouldBreak?: boolean | undefined;
        id?: symbol | undefined;
    }

    function addAlignmentToDoc(doc: Doc, size: number, tabWidth: number): Doc;
    /** @see [align](https://github.com/prettier/prettier/blob/main/commands.md#align) */
    function align(widthOrString: Align['n'], doc: Doc): Align;
    /** @see [breakParent](https://github.com/prettier/prettier/blob/main/commands.md#breakparent) */
    const breakParent: BreakParent;
    /**
     * @see [concat](https://github.com/prettier/prettier/blob/main/commands.md#deprecated-concat)
     * @deprecated use `Doc[]` instead
     */
    function concat(docs: Doc[]): Concat;
    /** @see [conditionalGroup](https://github.com/prettier/prettier/blob/main/commands.md#conditionalgroup) */
    function conditionalGroup(alternatives: Doc[], options?: GroupOptions): Group;
    /** @see [dedent](https://github.com/prettier/prettier/blob/main/commands.md#dedent) */
    function dedent(doc: Doc): Align;
    /** @see [dedentToRoot](https://github.com/prettier/prettier/blob/main/commands.md#dedenttoroot) */
    function dedentToRoot(doc: Doc): Align;
    /** @see [fill](https://github.com/prettier/prettier/blob/main/commands.md#fill) */
    function fill(docs: Doc[]): Fill;
    /** @see [group](https://github.com/prettier/prettier/blob/main/commands.md#group) */
    function group(doc: Doc, opts?: GroupOptions): Group;
    /** @see [hardline](https://github.com/prettier/prettier/blob/main/commands.md#hardline) */
    const hardline: Concat;
    /** @see [hardlineWithoutBreakParent](https://github.com/prettier/prettier/blob/main/commands.md#hardlinewithoutbreakparent-and-literallinewithoutbreakparent) */
    const hardlineWithoutBreakParent: HardlineWithoutBreakParent;
    /** @see [ifBreak](https://github.com/prettier/prettier/blob/main/commands.md#ifbreak) */
    function ifBreak(ifBreak: Doc, noBreak?: Doc, options?: { groupId?: symbol | undefined }): IfBreak;
    /** @see [indent](https://github.com/prettier/prettier/blob/main/commands.md#indent) */
    function indent(doc: Doc): Indent;
    /** @see [indentIfBreak](https://github.com/prettier/prettier/blob/main/commands.md#indentifbreak) */
    function indentIfBreak(doc: Doc, opts: { groupId: symbol; negate?: boolean | undefined }): IndentIfBreak;
    /** @see [join](https://github.com/prettier/prettier/blob/main/commands.md#join) */
    function join(sep: Doc, docs: Doc[]): Concat;
    /** @see [label](https://github.com/prettier/prettier/blob/main/commands.md#label) */
    function label(label: string, doc: Doc): Label;
    /** @see [line](https://github.com/prettier/prettier/blob/main/commands.md#line) */
    const line: Line;
    /** @see [lineSuffix](https://github.com/prettier/prettier/blob/main/commands.md#linesuffix) */
    function lineSuffix(suffix: Doc): LineSuffix;
    /** @see [lineSuffixBoundary](https://github.com/prettier/prettier/blob/main/commands.md#linesuffixboundary) */
    const lineSuffixBoundary: LineSuffixBoundary;
    /** @see [literalline](https://github.com/prettier/prettier/blob/main/commands.md#literalline) */
    const literalline: Concat;
    /** @see [literallineWithoutBreakParent](https://github.com/prettier/prettier/blob/main/commands.md#hardlinewithoutbreakparent-and-literallinewithoutbreakparent) */
    const literallineWithoutBreakParent: LiterallineWithoutBreakParent;
    /** @see [markAsRoot](https://github.com/prettier/prettier/blob/main/commands.md#markasroot) */
    function markAsRoot(doc: Doc): Align;
    /** @see [softline](https://github.com/prettier/prettier/blob/main/commands.md#softline) */
    const softline: Softline;
    /** @see [trim](https://github.com/prettier/prettier/blob/main/commands.md#trim) */
    const trim: Trim;
    /** @see [cursor](https://github.com/prettier/prettier/blob/main/commands.md#cursor) */
    const cursor: Cursor;
}

export namespace debug {
    function printDocToDebug(doc: Doc): string;
}

export namespace printer {
    function printDocToString(
        doc: Doc,
        options: Options,
    ): {
        formatted: string;
        cursorNodeStart?: number | undefined;
        cursorNodeText?: string | undefined;
    };
    interface Options {
        /**
         * Specify the line length that the printer will wrap on.
         * @default 80
         */
        printWidth: number;
        /**
         * Specify the number of spaces per indentation-level.
         * @default 2
         */
        tabWidth: number;
        /**
         * Indent lines with tabs instead of spaces
         * @default false
         */
        useTabs: boolean;
        parentParser?: string | undefined;
        __embeddedInHtml?: boolean | undefined;
    }
}

export namespace utils {
    function cleanDoc(doc: Doc): Doc;
    function findInDoc<T = Doc>(doc: Doc, callback: (doc: Doc) => T, defaultValue: T): T;
    function getDocParts(doc: Doc): Doc;
    function isConcat(doc: Doc): boolean;
    function isEmpty(doc: Doc): boolean;
    function isLineNext(doc: Doc): boolean;
    function mapDoc<T = Doc>(doc: Doc, callback: (doc: Doc) => T): T;
    function normalizeDoc(doc: Doc): Doc;
    function normalizeParts(parts: Doc[]): Doc[];
    function propagateBreaks(doc: Doc): void;
    function removeLines(doc: Doc): Doc;
    function replaceNewlinesWithLiterallines(doc: Doc): Doc;
    function stripTrailingHardline(doc: Doc): Doc;
    function traverseDoc(
        doc: Doc,
        onEnter?: (doc: Doc) => void | boolean,
        onExit?: (doc: Doc) => void,
        shouldTraverseConditionalGroups?: boolean,
    ): void;
    function willBreak(doc: Doc): boolean;
}
