// Type definitions for remotedev-serialize 1.0
// Project: https://github.com/zalmoxisus/remotedev-serialize/
// Definitions by: Julian Hundeloh <https://github.com/jaulz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.1

import * as Immutable from 'immutable';

export type Options = Record<string, boolean>;

export type Refs = Record<string, any>;

export type DefaultReplacer = (key: string, value: any) => any;

export type Replacer = (
  key: string,
  value: any,
  replacer: DefaultReplacer
) => any;

export type DefaultReviver = (key: string, value: any) => any;

export type Reviver = (key: string, value: any, reviver: DefaultReviver) => any;

export function immutable(
  immutable: typeof Immutable,
  refs?: Refs,
  customReplacer?: Replacer,
  customReviver?: Reviver
): {
  stringify: (input: any) => string;
  parse: (input: string) => any;
  serialize: (
    immutable: typeof Immutable,
    refs?: Refs,
    customReplacer?: Replacer,
    customReviver?: Reviver
  ) => {
    replacer: Replacer;
    reviver: Reviver;
    options: Options;
  };
};
