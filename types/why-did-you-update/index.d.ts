// Type definitions for why-did-you-update v0.0.8
// Project: https://github.com/garbles/why-did-you-update
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

declare module "why-did-you-update" {
    interface Diffs {
        name: string;
        prev: any;
        next: any;
        type: any;
    }
    
    interface Options {
        include?: RegExp;
        exclude?: RegExp;
        groupByComment?: boolean;
        collapseComponentGroups?: boolean;
        notifier?: (
            groupByComponent: boolean,
            collapseComponentGroups: boolean,
            displayName: string,
            diffs: Diffs[]
        ) => void;
    }
    
    export function whyDidYouUpdate(react: typeof React, options?: Options): void;
}
