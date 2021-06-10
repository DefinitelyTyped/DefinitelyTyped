// Type definitions for bemmer 1.1
// Project: https://github.com/axross/bemmer
// Definitions by: Nathan <https://github.com/nweber-gh>
//                 Bryan <https://github.com/bdwain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Builder {
    (classname?: string, modifiers?: { [index: string]: any }): string;
}

export function createBuilder(...classnames: string[]): Builder;
export function create(...classnames: string[]): Builder;
export function isBuilder(target: any): target is Builder;
