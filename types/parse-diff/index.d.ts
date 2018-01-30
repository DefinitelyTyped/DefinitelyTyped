// Type definitions for parse-diff 0.4
// Project: https://github.com/sergeyt/parse-diff
// Definitions by:  Lorens León <https://github.com/leon19>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 *  Parses unified diff
 *  http://www.gnu.org/software/diffutils/manual/diffutils.html#Unified-Format
 * @param input Diff string to get parsed
 */
declare function parseDiff(input?: string | null): parseDiff.File[];

declare namespace parseDiff {
    interface File {
        chunks: Chunk[];
        deletions: number;
        additions: number;
        from?: string;
        to?: string;
        index?: string[];
        deleted?: true;
        new?: true;
    }

    interface Chunk {
        content: string;
        changes: Change[];
        oldStart: number;
        oldLines: number;
        newStart: number;
        newLines: number;
    }

    interface NormalChange {
        type: 'normal';
        ln1: number;
        ln2: number;
        normal: true;
        content: string;
    }

    interface AddChange {
        type: 'add';
        add: true;
        ln: number;
        content: string;
    }

    interface DeleteChange {
        type: 'del';
        del: true;
        ln: number;
        content: string;
    }

    type ChangeType = 'normal' | 'add' | 'del';

    type Change = NormalChange | AddChange | DeleteChange;
}

export = parseDiff;
