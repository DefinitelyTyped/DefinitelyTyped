import { Effect, effectTypes } from "redux-saga/effects";
import { END } from "@redux-saga/types";

declare const throwErrorKey: "@@redux-saga-test-engine/ERROR";

type KeyValuePairs<K = unknown, V = unknown> = Map<K, V> | Array<[K, V]>;

type EffectTypes = keyof typeof effectTypes;
type ThrowErrorKey = typeof throwErrorKey;
type EffectTypesWithErrorKey = EffectTypes | ThrowErrorKey | END["type"];

declare function throwError<TMessage extends string>(message: TMessage): Effect<ThrowErrorKey, TMessage>;
declare function stub<TArgs extends any[], TReturn>(
    genFunc: (...args: TArgs) => Generator<TReturn, any, any> | TReturn,
    ...args: TArgs
): () => TReturn;
type Options<TValues, TEffects> =
    | {
          mapping: KeyValuePairs<unknown, TValues>;
          collected?: Array<Effect<TEffects> | Array<Effect<TEffects>>>;
          maxSteps?: number;
      }
    | KeyValuePairs<unknown, TValues>;

declare function createSagaTestEngine<const TEffectConstraint extends EffectTypes>(
    effects?: Readonly<TEffectConstraint[]>
): (
    genFunc: GeneratorFunction,
    opts: Options<Effect<EffectTypesWithErrorKey>, TEffectConstraint>,
    ...initialArgs: any[]
) => Array<Effect<TEffectConstraint, any> | Array<Effect<TEffectConstraint, any>>>;

declare function collectPuts(
    genFunc: GeneratorFunction,
    opts: Options<Effect<EffectTypesWithErrorKey, any>, "PUT">,
    ...initialArgs: any[]
): Array<Effect<"PUT", any> | Array<Effect<"PUT", any>>>;
declare function collectCalls(
    genFunc: GeneratorFunction,
    opts: Options<Effect<EffectTypesWithErrorKey, any>, "CALL">,
    ...initialArgs: any[]
): Array<Effect<"CALL", any> | Array<Effect<"CALL", any>>>;
declare function collectCallsAndPuts(
    genFunc: GeneratorFunction,
    opts: Options<Effect<EffectTypesWithErrorKey, any>, "PUT" | "CALL">,
    ...initialArgs: any[]
): Array<Effect<"PUT" | "CALL", any> | Array<Effect<"PUT" | "CALL", any>>>;

export { collectCalls, collectCallsAndPuts, collectPuts, createSagaTestEngine, stub, throwError };
