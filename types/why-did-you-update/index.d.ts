/// <reference types="react" />

declare module "why-did-you-update" {
    interface Diffs {
        name: string;
        prev: any;
        next: any;
        type: any;
    }

    interface Options {
        include?: RegExp | undefined;
        exclude?: RegExp | undefined;
        groupByComment?: boolean | undefined;
        collapseComponentGroups?: boolean | undefined;
        notifier?:
            | ((
                groupByComponent: boolean,
                collapseComponentGroups: boolean,
                displayName: string,
                diffs: Diffs[],
            ) => void)
            | undefined;
    }

    export function whyDidYouUpdate(react: typeof React, options?: Options): void;
}
