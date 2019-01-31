// Type definitions for @storybook/addon-backgrounds 4.1
// Project: https://github.com/storybooks/storybook
// Definitions by: HyunSeob <https://github.com/hyunseob>
//                 An Dohyung <https://github.com/adhrinae>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { StoryDecorator } from '@storybook/react';

export interface Background {
    name: string;
    value: string;
    default?: boolean;
}
export function withBackgrounds(backgrounds: Background[]): StoryDecorator;

// [DEPRECATED] Use `withBackgrounds` function instead.
declare function backgrounds(backgrounds: Background[]): StoryDecorator;

export default backgrounds;
