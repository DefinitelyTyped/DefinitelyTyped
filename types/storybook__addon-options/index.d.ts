// Type definitions for @storybook/addon-options 3.2
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Simon Helle Nielsen <https://github.com/simonhn>
//                 A.MacLeay <https://github.com/amacleay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface Options {
    name?: string;
    url?: string;
    goFullScreen?: boolean;
    showLeftPanel?: boolean; // deprecated, use showStoriesPanel
    showStoriesPanel?: boolean;
    showDownPanel?: boolean; // deprecated; use showAddonPanel
    showAddonPanel?: boolean;
    showSearchBox?: boolean;
    downPanelInRight?: boolean; // deprecated; use addonPanelInRight
    addonPanelInRight?: boolean;
    sortStoriesByKind?: boolean;
    hierarchySeparator?: RegExp | string;
    hierarchyRootSeparator?: RegExp | string;
    selectedAddonPanel?: string;
}

export function setOptions(options: Options): void;
