// Type definitions for @storybook/addon-info 4.1
// Project: https://github.com/storybookjs/storybook, https://github.com/storybookjs/storybook/tree/master/addons/info
// Definitions by: Mark Kornblum <https://github.com/mkornblum>
//                 Mattias Wikstrom <https://github.com/fyrkant>
//                 Kevin Lee <https://github.com/RunningCoderLee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ComponentType, ReactElement } from 'react';
import { DecoratorFunction, StoryFn } from '@storybook/react';

export interface WrapStoryProps {
    storyFn?: StoryFn;
    context?: object;
    options?: object;
}

export interface Options {
  text?: string;
  header?: boolean;
  inline?: boolean;
  source?: boolean;
  propTables?: Array<ComponentType<any>> | false;
  propTablesExclude?: Array<ComponentType<any>>;
  styles?: object;
  components?: {
    [key: string]: ComponentType<any>;
  };
  marksyConf?: object;
  maxPropsIntoLine?: number;
  maxPropObjectKeys?: number;
  maxPropArrayLength?: number;
  maxPropStringLength?: number;
  TableComponent?: ComponentType<{
    propDefinitions: Array<{
      property: string;
      propType: object | string; // TODO: info about what this object is...
      required: boolean;
      description: string;
      defaultValue: any;
    }>;
  }>;
  excludedPropTypes?: string[];
}

// TODO: it would be better to use type inference for the parameters
// type DecoratorParams = StoryDecorator extends (...a: infer A) => any ? A: never;
export function withInfo(story: StoryFn, context: { kind: string; story: string }): ReturnType<DecoratorFunction>;
// Legacy, but supported
export function withInfo(
    textOrOptions?: string | Options,
): (storyFn: StoryFn) => (context?: object) => ReactElement<WrapStoryProps>;

export function setDefaults(newDefaults: Options): Options;
