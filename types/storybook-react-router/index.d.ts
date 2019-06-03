// Type definitions for storybook-react-router 1.0
// Project: https://github.com/gvaldambrini/storybook-router
// Definitions by: Alex Lomia <https://github.com/alexlomm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { MemoryRouterProps } from 'react-router';
import { Story, StoryDecorator } from '@storybook/react';

export const StoryRouter: React.ComponentType<{
  story: Story;
  links: object;
  routerProps: MemoryRouterProps;
}>;

declare function storyRouterDecorator(links?: object, routerProps?: MemoryRouterProps): StoryDecorator;

export default storyRouterDecorator;
