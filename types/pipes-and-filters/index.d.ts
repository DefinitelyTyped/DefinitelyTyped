// Type definitions for pipes-and-filters 0.0
// Project: https://github.com/slashdotdash/node-pipes-and-filters
// Definitions by: Alvaro Nicoli <https://github.com/mrnkr>
//                 Federico Banchero <https://github.com/FdBn1999>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export type NextFunction<TOutput> = (err?: Error | null, result?: TOutput) => void;
export type Filter<TInput = any, TOutput = any> = (input: TInput, next: NextFunction<TOutput>) => void;
export type Predicate<TInput = any> = (input: TInput) => boolean;

export class Pipeline<TInput, TOutput> extends EventEmitter {
    static break: any;
    static breakIf(predicate: Predicate): Filter;

    use(filter: Filter, context?: any): Pipeline<TInput, TOutput>;
    breakIf(predicate: Predicate): Pipeline<TInput, TOutput>;
    execute(input: TInput, done: NextFunction<TOutput>): void;
    wireupEvents(done: NextFunction<TOutput>): void;
}

// tslint:disable-next-line:no-unnecessary-generics
export function create<TInput, TOutput>(name: string): Pipeline<TInput, TOutput>;
export function breakIf(predicate: Predicate): Filter;
