// Type definitions for ace-diff 2.1
// Project: https://ace-diff.github.io/ace-diff/
// Definitions by: Mike Dodge <https://github.com/innovation-team>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace AceDiff;

export = AceDiff;

declare class AceDiff {
    constructor(opts: AceDiff.AceDiffOpts);
    getEditors(): {
        left: any;
        right: any;
    };
    setOptions(): void;
    getNumDiffs(): number;
    diff(): void;
    destroy(): void;
}
declare namespace AceDiff {
    interface AceDiffLROpts {
        content?: string | null;
        mode?: string;
        theme?: string;
        editable?: boolean;
        copyLinkEnabled?: boolean;
    }

    interface AceDiffOpts {
        element: string | HTMLElement;
        mode?: string;
        theme?: string;
        diffGranularity?: 'specific' | 'broad';
        showDiffs?: boolean;
        showConnectors?: boolean;
        maxDiffs?: number;
        left: AceDiffLROpts;
        right: AceDiffLROpts;
        classes?: {
            diff: string;
            connector: string;
            newCodeConnectorLinkContent: string;
            deletedCodeConnectorLinkContent: string;
        };
    }
}
