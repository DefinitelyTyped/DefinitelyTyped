// Type definitions for @storybook/addon-backgrounds 3.2
// Project: https://github.com/storybooks/storybook
// Definitions by: HyunSeob <https://github.com/hyunseob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { StoryDecorator } from '@storybook/react';

export interface Background {
    name: string;
    value: string;
    default?: boolean;
}

declare function backgrounds(backgrounds: Background[]): StoryDecorator;

export default backgrounds;
