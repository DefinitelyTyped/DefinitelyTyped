// Type definitions for universal-cookie 2.2
// Project: https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie#readme
// Definitions by: Jake Marsh <https://github.com/jakemmarsh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface GetOptions {
  doNotParse?: boolean;
}

export interface SetOptions {
  domain?: string;
  expires?: Date;
  httpOnly?: boolean;
  path?: string;
  secure?: boolean;
}

export interface Hooks {
  onSet?: (name: string, finalOptions: SetOptions) => any;
  onRemove?: (name: string, finalOptions: SetOptions) => any;
}

export default class Cookies {
  constructor(cookies?: string | object, hooks?: Hooks);

  get(name: string, options?: GetOptions): string;

  getAll(options?: GetOptions): { [key: string]: string };

  set(name: string, value: string | object, options?: SetOptions): void;

  remove(name: string, options?: SetOptions): any;
}
