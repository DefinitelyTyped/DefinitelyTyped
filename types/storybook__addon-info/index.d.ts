// Type definitions for @storybook/addon-info 3.2
// Project: https://github.com/storybooks/storybook
// Definitions by: Mark Kornblum <https://github.com/mkornblum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface Options {
  text?: string;
  header?: boolean;
  inline?: boolean;
  source?: boolean;
  propTables?: JSX.Element[];
  propTablesExclude?: JSX.Element[];
  styles?: object;
  marksyConf?: object;
  maxPropsIntoLine?: number;
  maxPropObjectKeys?: number;
  maxPropArrayLength?: number;
  maxPropStringLength?: number;
}

export function withInfo(textOrOptions: string | Options): any;
