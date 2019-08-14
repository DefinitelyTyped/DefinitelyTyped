// Type definitions for @storybook/addon-options 4.0
// Project: https://github.com/storybookjs/storybook, https://github.com/storybookjs/storybook/tree/master/addons/options
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Simon Helle Nielsen <https://github.com/simonhn>
//                 A.MacLeay <https://github.com/amacleay>
//                 Gaetan Maisse <https://github.com/gaetanmaisse>
//                 Adam Misiorny <https://github.com/adam187>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { StoryDecorator } from '@storybook/react';

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
    sidebarAnimations?: boolean;
    selectedAddonPanel?: string;
    enableShortcuts?: boolean;
}

/**
 * @deprecated Use withOptions instead
 */
export function setOptions(options: Options): void;

export function withOptions(options: Options): StoryDecorator;
