// Type definitions for globby 0.6
// Project: https://github.com/sindresorhus/globby#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { IOptions } from 'glob';

declare function globby(patterns: string | string[], options?: IOptions): Promise<string[]>;

declare namespace globby {
  function sync(patterns: string | string[], options?: IOptions): string[];
  function generateGlobTasks(patterns: string | string[], options?: IOptions): Array<{pattern: string, options: IOptions}>;
  function hasMagic(patterns: string | string[], options?: IOptions): boolean;
}

export = globby;

