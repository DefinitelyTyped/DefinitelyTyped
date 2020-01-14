// Type definitions for babel-plugin-macros 2.8
// Project: https://github.com/kentcdodds/babel-plugin-macros
// Definitions by: Billy Kwok <https://github.com/billykwok>
//                 Jake Runzer <https://github.com/coffee-cup>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
import * as Babel from '@babel/core';

export interface References {
    [key: string]: Babel.NodePath[];
}

export interface Options {
    configName?: string;
}

export interface MacroParams {
    references: { default: Babel.NodePath[] } & References;
    state: any;
    babel: typeof Babel;
}

export type MacroHandler = (params: MacroParams) => void;

export class MacroError extends Error {}

export function createMacro(handler: MacroHandler, options?: Options): any;
