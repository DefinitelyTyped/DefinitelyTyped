// Type definitions for @storybook/addon-options 3.2
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface Options {
    name?: string;
    url?: string;
    goFullScreen?: boolean;
    showLeftPanel?: boolean;
    showDownPanel?: boolean;
    showSearchBox?: boolean;
    downPanelInRight?: boolean;
    sortStoriesByKind?: boolean;
    hierarchySeparator?: RegExp | string;
}

export function setOptions(options: Options): void;
