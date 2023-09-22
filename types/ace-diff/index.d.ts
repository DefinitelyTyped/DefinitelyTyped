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
        content?: string | null | undefined;
        mode?: string | undefined;
        theme?: string | undefined;
        editable?: boolean | undefined;
        copyLinkEnabled?: boolean | undefined;
    }

    interface AceDiffConstructorOpts extends AceDiffOpts {
        element: string | HTMLElement;
        left: AceDiffLROpts;
        right: AceDiffLROpts;
    }

    interface AceDiffOpts {
        mode?: string | undefined;
        theme?: string | undefined;
        diffGranularity?: "specific" | "broad" | undefined;
        showDiffs?: boolean | undefined;
        showConnectors?: boolean | undefined;
        maxDiffs?: number | undefined;
        left?: AceDiffLROpts | undefined;
        right?: AceDiffLROpts | undefined;
        classes?: {
            diff: string;
            connector: string;
            newCodeConnectorLinkContent: string;
            deletedCodeConnectorLinkContent: string;
        } | undefined;
    }
}
