// Type definitions for storybook-addon-jsx 7.0
// Project: https://github.com/storybookjs/addon-jsx
// Definitions by: James Newell <https://github.com/jameslnewell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { DecoratorFunction, Parameters, StoryApi } from '@storybook/addons';
import { ReactElement, ReactNode } from 'react';

export type displayNameFunc = (element: ReactElement) => string;

export interface AddonParameters {
    skip?: number;
    enableBeautify?: boolean;
    onBeforeRender?: (domString: string) => string;
    displayName?: string | displayNameFunc;
}

export type AddWithJSXFunc<StoryFnReturnType> = (
    kind: string,
    fn: () => ReactNode,
    options?: AddonParameters
) => StoryApi<StoryFnReturnType>;

declare module '@storybook/addons' {
    interface ClientStoryApi<StoryFnReturnType = unknown> {
        storiesOf(kind: string, module: NodeModule): StoryApi<StoryFnReturnType> &
            { addWithJSX: AddWithJSXFunc<StoryFnReturnType> };
        addDecorator(decorator: DecoratorFunction<StoryFnReturnType>): StoryApi<StoryFnReturnType>;
        addParameters(parameter: Parameters & { jsx: AddonParameters }): StoryApi<StoryFnReturnType>;
    }
}

export const jsxDecorator: DecoratorFunction<ReactElement<unknown>>;
