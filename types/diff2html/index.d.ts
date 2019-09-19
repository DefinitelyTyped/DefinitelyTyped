// Type definitions for diff2html
// Project: https://github.com/rtfpessoa/diff2html
// Definitions by: rtfpessoa <https://github.com/rtfpessoa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace Diff2Html {

    export interface Options {
        inputFormat?: 'diff' | 'json';
        outputFormat?: 'line-by-line' | 'side-by-side';
        showFiles?: boolean;
        matching?: 'lines' | 'words' | 'none';
        matchWordsThreshold?: number;
        matchingMaxComparisons?: number;
        maxLineSizeInBlockForComparison?: number;
        maxLineLengthHighlight?: number;
        templates?: object;
        rawTemplates?: object;
        renderNothingWhenEmpty?: boolean;
    }

    export interface Line {
        content: string;
        type: string;
        oldNumber: number;
        newNumber: number;
    }

    export interface Block {
        oldStartLine: number;
        oldStartLine2?: number;
        newStartLine: number;
        header: string;
        lines: Line[];
    }

    export interface Result {
        addedLines: number;
        deletedLines: number;
        isCombined: boolean;
        isGitDiff: boolean;
        oldName: string;
        newName: string;
        language: string;
        blocks: Block[];
        oldMode?: string;
        newMode?: string;
        deletedFileMode?: string;
        newFileMode?: string;
        isDeleted?: boolean;
        isNew?: boolean;
        isCopy?: boolean;
        isRename?: boolean;
        unchangedPercentage?: number;
        changedPercentage?: number;
        checksumBefore?: string;
        checksumAfter?: string;
        mode?: string;
    }

    export interface Diff2Html {
        getJsonFromDiff(input: string, configuration?: Options): Result[];
        getPrettyHtml(input: any, configuration?: Options): string;
    }
}

declare module "diff2html" {
    var d2h: { "Diff2Html": Diff2Html.Diff2Html };
    export = d2h;
}
