import { type Effect, type END } from "@redux-saga/types";

declare const throwErrorKey: "@@redux-saga-test-engine/ERROR";

type KeyValuePairs<K = unknown, V = unknown> = Map<K, V> | Array<[K, V]>;

// See `effectTypes` const from `redux-saga`, including these inline due to compatibility issues
type EffectTypes =
    | "TAKE"
    | "PUT"
    | "ALL"
    | "RACE"
    | "CALL"
    | "CPS"
    | "FORK"
    | "JOIN"
    | "CANCEL"
    | "SELECT"
    | "ACTION_CHANNEL"
    | "CANCELLED"
    | "FLUSH"
    | "GET_CONTEXT"
    | "SET_CONTEXT";
type ThrowErrorKey = typeof throwErrorKey;
type EffectTypesWithErrorKey = EffectTypes | ThrowErrorKey | END["type"];

declare function throwError<TMessage>(message?: TMessage): Effect<ThrowErrorKey, TMessage>;
declare function stub<TArgs extends any[], TReturn>(
    genFunc: (...args: TArgs) => Generator<TReturn, any, any> | TReturn,
    ...args: TArgs
): () => TReturn;
type Options<TLookup, TEffects> =
    | {
        mapping: KeyValuePairs<TLookup, any>;
        collected?: Array<Effect<TEffects> | Array<Effect<TEffects>>>;
        maxSteps?: number;
    }
    | KeyValuePairs<TLookup, any>
    | any[][]; // This is loose, but covers `const sagaEnv = [...]` then call `collectPuts(fn, sagaEnv)` case. Other inference only works with double nested array passed inline rather than via a predefined variable.
declare function createSagaTestEngine<const TEffectConstraint extends EffectTypes>(
    effects?: Readonly<TEffectConstraint[]>,
): (
    genFunc: (...genArgs: any[]) => Iterator<unknown, any, unknown>,
    opts: Options<Effect<EffectTypesWithErrorKey>, TEffectConstraint>,
    ...initialArgs: any[]
) => Array<Effect<TEffectConstraint, any> | Array<Effect<TEffectConstraint, any>>>;
declare function collectPuts(
    genFunc: (...genArgs: any[]) => Iterator<unknown, any, unknown>,
    opts: Options<Effect<EffectTypesWithErrorKey, any>, "PUT">,
    ...initialArgs: any[]
): Array<Effect<"PUT", any> | Array<Effect<"PUT", any>>>;
declare function collectCalls(
    genFunc: (...genArgs: any[]) => Iterator<unknown, any, unknown>,
    opts: Options<Effect<EffectTypesWithErrorKey, any>, "CALL">,
    ...initialArgs: any[]
): Array<Effect<"CALL", any> | Array<Effect<"CALL", any>>>;
declare function collectCallsAndPuts(
    genFunc: (...genArgs: any[]) => Iterator<unknown, any, unknown>,
    opts: Options<Effect<EffectTypesWithErrorKey, any>, "PUT" | "CALL">,
    ...initialArgs: any[]
): Array<Effect<"PUT" | "CALL", any> | Array<Effect<"PUT" | "CALL", any>>>;

export { collectCalls, collectCallsAndPuts, collectPuts, createSagaTestEngine, stub, throwError };
