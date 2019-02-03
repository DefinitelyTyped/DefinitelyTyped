// Type definitions for @storybook/addon-info 3.4
// Project: https://github.com/storybooks/storybook
// Definitions by: Mark Kornblum <https://github.com/mkornblum>
//                 Mattias Wikstrom <https://github.com/fyrkant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { RenderFunction, StoryDecorator } from '@storybook/react';

export interface WrapStoryProps {
  storyFn?: RenderFunction;
  context?: object;
  options?: object;
}

export interface Options {
  text?: string;
  header?: boolean;
  inline?: boolean;
  source?: boolean;
  propTables?: React.ComponentType[] | false;
  propTablesExclude?: React.ComponentType[];
  styles?: object;
  marksyConf?: object;
  maxPropsIntoLine?: number;
  maxPropObjectKeys?: number;
  maxPropArrayLength?: number;
  maxPropStringLength?: number;
}

// TODO: it would be better to use type inference for the parameters
// type DecoratorParams = StoryDecorator extends (...a: infer A) => any ? A: never;
export function withInfo(story: RenderFunction, context: { kind: string, story: string }): ReturnType<StoryDecorator>;
// Legacy, but supported
export function withInfo(textOrOptions?: string | Options): (storyFn: RenderFunction) => (context?: object) => React.ReactElement<WrapStoryProps>;

export function setDefaults(newDefaults: Options): Options;
