// Type definitions for bero 0.1
// Project: https://github.com/ZER0/bero
// Definitions by: Alessandro Rabitti <https://github.com/silversonicaxel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

export type Block = string;

export type Element = string | { [index: string]: any } | Array<string | undefined | boolean>;

export type Modifier = { [index: string]: any } | Array<string | undefined | boolean>;

export type Bemmed = (arg1?: Element | Modifier, arg2?: Modifier) => string | undefined;

export type Joiner = Array<string | undefined | boolean>;

export type Joined = string;

export default function bem(block?: string, element?: string): Bemmed;

export default function bem(block: string, element: Modifier | undefined): string;

export default function bem(block: string, element: Element, modifier: Modifier): string;

export function join(...arguments: Joiner): Joined;
