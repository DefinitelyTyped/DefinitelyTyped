// Type definitions for @babel/helper-plugin-utils 7.10
// Project: https://github.com/babel/babel/tree/main/packages/babel-helper-plugin-utils, https://babeljs.io/
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import type * as babel from '@babel/core';

export type BabelAPI = typeof babel & babel.ConfigAPI;
export function declare<
    O extends Record<string, any>,
    R extends babel.PluginObj = babel.PluginObj
>(
    builder: (api: BabelAPI, options: O, dirname: string) => R,
): (api: object, options: O | null | undefined, dirname: string) => R;
