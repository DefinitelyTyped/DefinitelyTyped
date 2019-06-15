// Type definitions for @storybook/addon-info 4.1
// Project: https://github.com/storybookjs/storybook, https://github.com/storybookjs/storybook/tree/master/addons/info
// Definitions by: Mark Kornblum <https://github.com/mkornblum>
//                 Mattias Wikstrom <https://github.com/fyrkant>
//                 Kevin Lee <https://github.com/RunningCoderLee>
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
  propTables?: Array<React.ComponentType<any>> | false;
  propTablesExclude?: Array<React.ComponentType<any>>;
  styles?: object;
  components?: { [key: string]: React.ComponentType<any> };
  marksyConf?: object;
  maxPropsIntoLine?: number;
  maxPropObjectKeys?: number;
  maxPropArrayLength?: number;
  maxPropStringLength?: number;
  TableComponent?: React.ComponentType<{
    propDefinitions: Array<{
      property: string;
      propType: object | string; // TODO: info about what this object is...
      required: boolean;
      description: string;
      defaultValue: any;
    }>
  }>;
  excludedPropTypes?: string[];
}

// TODO: it would be better to use type inference for the parameters
// type DecoratorParams = StoryDecorator extends (...a: infer A) => any ? A: never;
export function withInfo(story: RenderFunction, context: { kind: string, story: string }): ReturnType<StoryDecorator>;
// Legacy, but supported
export function withInfo(textOrOptions?: string | Options): (storyFn: RenderFunction) => (context?: object) => React.ReactElement<WrapStoryProps>;

export function setDefaults(newDefaults: Options): Options;
