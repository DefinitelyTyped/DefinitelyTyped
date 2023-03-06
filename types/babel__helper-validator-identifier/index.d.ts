// Type definitions for @babel/helper-validator-identifier 7.15
// Project: https://github.com/babel/babel/tree/main/packages/babel-helper-validator-identifier
// Definitions by: fnknzzz <https://github.com/fnknzzz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function isReservedWord(word: string, inModule: boolean): boolean;
export function isStrictReservedWord(word: string, inModule: boolean): boolean;
export function isStrictBindOnlyReservedWord(word: string): boolean;
export function isStrictBindReservedWord(word: string, inModule: boolean): boolean;
export function isKeyword(word: string): boolean;
export function isIdentifierStart(code: number): boolean;
export function isIdentifierChar(code: number): boolean;
export function isIdentifierName(name: string): boolean;
