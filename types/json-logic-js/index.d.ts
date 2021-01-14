// Type definitions for json-logic-js 1.2
// Project: https://github.com/jwadhams/json-logic-js#readme
// Definitions by: Trevan <https://github.com/Trevan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace jsonFactory;

export type RulesLogic =
    | boolean
    | string
    | number

    // AccessingData
    | { var: RulesLogic | [RulesLogic] | [RulesLogic, any] | [RulesLogic, any] }
    | { missing: RulesLogic | any[] }
    | { missing_some: [RulesLogic, RulesLogic | any[]] }

    // LogicBooleanOperations
    | { if: [any, any, any, ...any[]] }
    | { '==': [any, any] }
    | { '===': [any, any] }
    | { '!=': [any, any] }
    | { '!==': [any, any] }
    | { '!': any }
    | { '!!': any }
    | { or: RulesLogic[] }
    | { and: RulesLogic[] }

    // NumericOperations
    | { '>': [RulesLogic, RulesLogic] }
    | { '>=': [RulesLogic, RulesLogic] }
    | { '<': [RulesLogic, RulesLogic] | [RulesLogic, RulesLogic, RulesLogic] }
    | { '<=': [RulesLogic, RulesLogic] | [RulesLogic, RulesLogic, RulesLogic] }
    | { max: RulesLogic[] }
    | { min: RulesLogic[] }
    | { '+': RulesLogic[] | RulesLogic }
    | { '-': RulesLogic[] | RulesLogic }
    | { '*': RulesLogic[] | RulesLogic }
    | { '/': RulesLogic[] | RulesLogic }
    | { '%': [RulesLogic, RulesLogic] }

    // ArrayOperations
    | { map: [RulesLogic, RulesLogic] }
    | { filter: [RulesLogic, RulesLogic] }
    | { reduce: [RulesLogic, RulesLogic, RulesLogic] }
    | { all: [RulesLogic[], RulesLogic] | [RulesLogic, RulesLogic] }
    | { none: [RulesLogic[], RulesLogic] | [RulesLogic, RulesLogic] }
    | { some: [RulesLogic[], RulesLogic] | [RulesLogic, RulesLogic] }
    | { merge: Array<RulesLogic[] | RulesLogic> }
    | { in: [RulesLogic, RulesLogic[]] }

    // StringOperations
    | { in: [RulesLogic, RulesLogic] }
    | { cat: RulesLogic[] }
    | { substr: [RulesLogic, RulesLogic] | [RulesLogic, RulesLogic, RulesLogic] }

    // MiscOperations
    | { log: RulesLogic };

export function apply(logic: RulesLogic, data?: unknown): any;
