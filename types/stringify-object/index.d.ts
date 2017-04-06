// Type definitions for stringify-object 3.1
// Project: https://github.com/yeoman/stringify-object
// Definitions by: Chris Khoo <https://github.com/khoomeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace stringifyObject { }

declare function stringifyObject(o: any, options?: {
  indent?: string,
  singleQuotes?: boolean,
  filter?(o: any, prop: string): boolean,
  inlineCharacterLimit?: number
}): string;

export = stringifyObject;
