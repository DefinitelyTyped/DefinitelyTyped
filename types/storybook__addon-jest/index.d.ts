// Type definitions for @storybook/addon-jest 3.4
// Project: https://github.com/storybookjs/storybook, https://github.com/storybookjs/storybook/tree/master/addons/jest
// Definitions by: Matt Oliver <https://github.com/halfmatthalfcat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { StoryDecorator } from '@storybook/react';

export type SpecsFunction = (...specs: string[]) => StoryDecorator;

export interface Options {
    results: object;
    filesExt?: string;
}

export function withTests(options: Options): SpecsFunction;
