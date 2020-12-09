// Type definitions for bero 0.1
// Project: https://github.com/ZER0/bero
// Definitions by: Alessandro Rabitti <https://github.com/silversonicaxel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

type Block = string;

type Element = string | { [index: string]: any } | Array<string | undefined>;

type Modifier = { [index: string]: any } | Array<string | undefined>;

type Bemmed = (arg1?: Element | Modifier, arg2?: Modifier) => string;

type Joiner = string[];

type Joined = string;

export default function bem(block?: string, element?: Element, modifier?: Modifier): Bemmed;

export function join(...arguments: Joiner): Joined;
