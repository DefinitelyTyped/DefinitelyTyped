import { Doc } from './';

// https://github.com/prettier/prettier/blob/master/src/doc/index.js

export namespace builders {
    type Doc =
        | string
        | Align
        | BreakParent
        | Concat
        | Fill
        | Group
        | IfBreak
        | Indent
        | Line
        | LineSuffix
        | LineSuffixBoundary
        | Trim
        | Cursor;

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

    interface IfBreak {
        type: 'if-break';
        breakContents: Doc;
        flatContents: Doc;
    }

    interface Indent {
        type: 'indent';
        contents: Doc;
    }

    interface Line {
        type: 'line';
        soft?: boolean;
        hard?: boolean;
        literal?: boolean;
    }

    interface LineSuffix {
        type: 'line-suffix';
        contents: Doc;
    }

    interface LineSuffixBoundary {
        type: 'line-suffix-boundary';
    }

    interface Trim {
        type: 'trim';
    }

    interface Cursor {
        type: 'cursor';
        placeholder: symbol;
    }

    function addAlignmentToDoc(doc: Doc, size: number, tabWidth: number): Doc;
    function align(n: Align['n'], contents: Doc): Align;
    const breakParent: BreakParent;
    function concat(contents: Doc[]): Concat;
    function conditionalGroup(states: Doc[], opts?: { shouldBreak: boolean }): Group;
    function dedent(contents: Doc): Align;
    function dedentToRoot(contents: Doc): Align;
    function fill(parts: Doc[]): Fill;
    function group(contents: Doc, opts?: { shouldBreak: boolean }): Group;
    const hardline: Concat;
    function ifBreak(breakContents: Doc, flatContents: Doc): IfBreak;
    function indent(contents: Doc): Indent;
    function join(separator: Doc, parts: Doc[]): Concat;
    const line: Line;
    function lineSuffix(contents: Doc): LineSuffix;
    const lineSuffixBoundary: LineSuffixBoundary;
    const literalline: Concat;
    function markAsRoot(contents: Doc): Align;
    const softline: Line;
    const trim: Trim;
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
        cursorNodeStart?: number;
        cursorNodeText?: string;
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
    }
}

export namespace utils {
    function isEmpty(doc: Doc): boolean;
    function isLineNext(doc: Doc): boolean;
    function willBreak(doc: Doc): boolean;
    function traverseDoc(
        doc: Doc,
        onEnter?: (doc: Doc) => void | boolean,
        onExit?: (doc: Doc) => void,
        shouldTraverseConditionalGroups?: boolean,
    ): void;
    function mapDoc<T>(doc: Doc, callback: (doc: Doc) => T): T;
    function propagateBreaks(doc: Doc): void;
    function removeLines(doc: Doc): Doc;
    function stripTrailingHardline(doc: Doc): Doc;
}
