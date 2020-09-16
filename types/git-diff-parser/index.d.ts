// Type definitions for git-diff-parser 1.0
// Project: https://github.com/spookd/git-diff-parser
// Definitions by: Alexey Yaroshevich <https://github.com/qfox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='node' />

declare function GitDiffParser(input: string | Buffer): GitDiffParser.Result;
declare namespace GitDiffParser {
    /** Represents prefix in `git diff` output: '+', '-', or space */
    type LineType = 'deleted' | 'added' | 'normal';

    interface Line {
        type: LineType;

        /** Has line break. Always false for added failes */
        break: boolean;

        /** Content of removed or added string */
        text: string;

        /** The main line number */
        ln1: number;

        /** New line number (for type normal) */
        ln2?: number;
    }

    interface File {
        deleted: boolean;
        added: boolean;
        renamed: boolean;
        binary: boolean;
        lines: Line[];
        index?: string[];
        oldName?: string;
        name: string;
    }

    interface Commit {
        files: File[];
    }

    interface DetailedCommit extends Commit {
        message?: string;
        sha?: string;
        date?: Date;
        author?: string;
        email?: string;
    }

    interface Result {
        detailed: boolean;
        commits: Commit[];
    }

    interface DryResult extends Result {
        detailed: false;
    }

    interface DetailedResult extends Result {
        detailed: true;
        commits: DetailedCommit[];
    }
}

export = GitDiffParser;
