/// <reference types='node' />

declare function GitDiffParser(input: string | Buffer): GitDiffParser.Result;
declare namespace GitDiffParser {
    /** Represents prefix in `git diff` output: '+', '-', or space */
    type LineType = "deleted" | "added" | "normal";

    interface Line {
        type: LineType;

        /** Has line break. Always false for added failes */
        break: boolean;

        /** Content of removed or added string */
        text: string;

        /** The main line number */
        ln1: number;

        /** New line number (for type normal) */
        ln2?: number | undefined;
    }

    interface File {
        deleted: boolean;
        added: boolean;
        renamed: boolean;
        binary: boolean;
        lines: Line[];
        index?: string[] | undefined;
        oldName?: string | undefined;
        name: string;
    }

    interface Commit {
        files: File[];
    }

    interface DetailedCommit extends Commit {
        message?: string | undefined;
        sha?: string | undefined;
        date?: Date | undefined;
        author?: string | undefined;
        email?: string | undefined;
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
