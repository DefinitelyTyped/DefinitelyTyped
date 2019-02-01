// Type definitions for ace-diff 2.1
// Project: https://ace-diff.github.io/ace-diff/
// Definitions by: Mike Dodge <https://github.com/innovation-team>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace AceDiff;

export = AceDiff;

declare class AceDiff {
    constructor(opts: AceDiff.AceDiffConstructorOpts);
    getEditors(): {
        left: any;
        right: any;
    };
    setOptions(options: AceDiff.AceDiffOpts): void;
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

    interface AceDiffConstructorOpts extends AceDiffOpts {
        element: string | HTMLElement;
        left: AceDiffLROpts;
        right: AceDiffLROpts;
    }

    interface AceDiffOpts {
        mode?: string;
        theme?: string;
        diffGranularity?: 'specific' | 'broad';
        showDiffs?: boolean;
        showConnectors?: boolean;
        maxDiffs?: number;
        left?: AceDiffLROpts;
        right?: AceDiffLROpts;
        classes?: {
            diff: string;
            connector: string;
            newCodeConnectorLinkContent: string;
            deletedCodeConnectorLinkContent: string;
        };
    }
}
