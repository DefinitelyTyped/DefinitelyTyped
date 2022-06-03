// Type definitions for json-logic-js 2.0
// Project: https://github.com/jwadhams/json-logic-js#readme
// Definitions by: Trevan <https://github.com/Trevan>
//                 Jake Boone <https://github.com/jakeboone02>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

export as namespace jsonFactory;

// Disable auto-export
export {};

/**
 * This is a utility type used below for the "if" operation.
 * Original: https://stackoverflow.com/a/68373774/765987
 */
type MAXIMUM_ALLOWED_BOUNDARY = 80;
type Mapped<
    Tuple extends unknown[],
    Result extends unknown[] = [],
    Count extends ReadonlyArray<number> = [],
> = Count['length'] extends MAXIMUM_ALLOWED_BOUNDARY
    ? Result
    : Tuple extends []
    ? []
    : Result extends []
    ? Mapped<Tuple, Tuple, [...Count, 1]>
    : Mapped<Tuple, Result | [...Result, ...Tuple], [...Count, 1]>;
/**
 * Used for the "if" operation, which takes an array of odd length
 * and a minimum of three (3) elements.
 */
type AnyArrayOfOddLengthMin3 = [any, ...Mapped<[any, any]>];

export type ReservedOperations =
    | 'var'
    | 'missing'
    | 'missing_some'
    | 'if'
    | '=='
    | '==='
    | '!='
    | '!=='
    | '!'
    | '!!'
    | 'or'
    | 'and'
    | '>'
    | '>='
    | '<'
    | '<='
    | 'max'
    | 'min'
    | '+'
    | '-'
    | '*'
    | '/'
    | '%'
    | 'map'
    | 'filter'
    | 'reduce'
    | 'all'
    | 'none'
    | 'some'
    | 'merge'
    | 'in'
    | 'cat'
    | 'substr'
    | 'log';

/**
 * This can be an object with any key except the reserved keys.
 * TODO: Find a way to limit this type to exactly one (1) key, since
 * json-logic-js enforces it. See:
 * https://github.com/jwadhams/json-logic-js/blob/2.0.2/logic.js#L180
 */
export type AdditionalOperation = Partial<Record<ReservedOperations, never>> & { [k: string]: any };

export type RulesLogic<AddOps extends AdditionalOperation = never> =
    | boolean
    | string
    | number

    // Accessing Data - https://jsonlogic.com/operations.html#accessing-data
    | { var: RulesLogic<AddOps> | [RulesLogic<AddOps>] | [RulesLogic<AddOps>, any] | [RulesLogic<AddOps>, any] }
    | { missing: RulesLogic<AddOps> | any[] }
    | { missing_some: [RulesLogic<AddOps>, RulesLogic<AddOps> | any[]] }

    // Logic and Boolean Operations - https://jsonlogic.com/operations.html#logic-and-boolean-operations
    | { if: AnyArrayOfOddLengthMin3 }
    | { '==': [any, any] }
    | { '===': [any, any] }
    | { '!=': [any, any] }
    | { '!==': [any, any] }
    | { '!': any }
    | { '!!': any }
    | { or: Array<RulesLogic<AddOps>> }
    | { and: Array<RulesLogic<AddOps>> }

    // Numeric Operations - https://jsonlogic.com/operations.html#numeric-operations
    | { '>': [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { '>=': [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { '<': [RulesLogic<AddOps>, RulesLogic<AddOps>] | [RulesLogic<AddOps>, RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { '<=': [RulesLogic<AddOps>, RulesLogic<AddOps>] | [RulesLogic<AddOps>, RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { max: Array<RulesLogic<AddOps>> }
    | { min: Array<RulesLogic<AddOps>> }
    | { '+': Array<RulesLogic<AddOps>> | RulesLogic<AddOps> }
    | { '-': Array<RulesLogic<AddOps>> | RulesLogic<AddOps> }
    | { '*': Array<RulesLogic<AddOps>> | RulesLogic<AddOps> }
    | { '/': Array<RulesLogic<AddOps>> | RulesLogic<AddOps> }
    | { '%': [RulesLogic<AddOps>, RulesLogic<AddOps>] }

    // Array Operations - https://jsonlogic.com/operations.html#array-operations
    | { map: [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { filter: [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { reduce: [RulesLogic<AddOps>, RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { all: [Array<RulesLogic<AddOps>>, RulesLogic<AddOps>] | [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { none: [Array<RulesLogic<AddOps>>, RulesLogic<AddOps>] | [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { some: [Array<RulesLogic<AddOps>>, RulesLogic<AddOps>] | [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { merge: Array<Array<RulesLogic<AddOps>> | RulesLogic<AddOps>> }
    | { in: [RulesLogic<AddOps>, Array<RulesLogic<AddOps>>] }

    // String Operations - https://jsonlogic.com/operations.html#string-operations
    | { in: [RulesLogic<AddOps>, RulesLogic<AddOps>] }
    | { cat: Array<RulesLogic<AddOps>> }
    | {
          substr:
              | [RulesLogic<AddOps>, RulesLogic<AddOps>]
              | [RulesLogic<AddOps>, RulesLogic<AddOps>, RulesLogic<AddOps>];
      }

    // Miscellaneous - https://jsonlogic.com/operations.html#miscellaneous
    | { log: RulesLogic<AddOps> }

    // Adding Operations (https://jsonlogic.com/add_operation.html)
    | AddOps;

export function add_operation(name: string, code: (...args: any[]) => any): void;
export function apply(logic: RulesLogic<AdditionalOperation>, data?: unknown): any;
export function rm_operation(name: string): void;

// These functions are undocumented, but are exported by the real package
// so they're typed here for completeness.
export function is_logic(logic: any): boolean;
export function truthy(value: any): boolean;
export function get_operator(logic: Record<string, any>): string;
export function get_values(logic: Record<string, any>): any;
export function uses_data(logic: Record<string, any>): any[];
export function rule_like(rule: any, pattern: any): boolean;
