// Type definitions for storybook-react-router 1.0
// Project: https://github.com/gvaldambrini/storybook-router
// Definitions by: Alex Lomia <https://github.com/alexlomm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { DecoratorFunction, StoryApi } from '@storybook/addons';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { ComponentType } from 'react';
import { MemoryRouterProps } from 'react-router';

export const StoryRouter: ComponentType<{
  story: StoryApi;
  links: object;
  routerProps: MemoryRouterProps;
}>;

declare function storyRouterDecorator(
    links?: object,
    routerProps?: MemoryRouterProps
): DecoratorFunction<StoryFnReactReturnType>;

export default storyRouterDecorator;
