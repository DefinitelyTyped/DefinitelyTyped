import regenerator = require('regenerator-runtime');

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

expectType<typeof regenerator>(regeneratorRuntime);
expectType<typeof regeneratorRuntime>(regenerator);

declare const number: number;
declare const anyArray: object[];
declare const anyArrayLike: ArrayLike<object>;
declare const anyIterable: Iterable<object>;
declare const anyIterableIterator: IterableIterator<object>;
declare const anyGenerator: Generator<object, object, object>;

regenerator.values(anyArray); // $ExpectType IterableIterator<object>
expectType<Iterator<object>>(regenerator.values(anyIterable));
regenerator.values(anyIterableIterator); // $ExpectType IterableIterator<object>
regenerator.values(anyGenerator); // $ExpectType Generator<object, object, object>
regenerator.values(anyArrayLike); // $ExpectType Iterator<object, unknown, unknown>

regenerator.keys(anyArray); // $ExpectType () => IteratorResult<string, undefined>
regenerator.keys(anyIterableIterator); // $ExpectType () => IteratorResult<string, undefined>

regenerator.AsyncIterator.prototype.next; // $ExpectType (...args: [] | [any]) => Promise<IteratorResult<any, any>>
regenerator.AsyncIterator.prototype.return; // $ExpectType (value: any) => Promise<IteratorResult<any, any>>
regenerator.AsyncIterator.prototype.throw; // $ExpectType (e: any) => Promise<IteratorResult<any, any>>

// https://tc39.es/proposal-iterator-helpers/#sec-iteratorprototype.map
function IteratorMap<T, U, TNext = unknown>(
    this: Iterator<T, unknown, TNext>,
    mapper: (value: T) => U,
): Generator<U, void, TNext> {
    // Prelude steps:
    // 1. Let iterated be ? GetIteratorDirect(this value).
    const iterated = GetIteratorDirect(this); // $ExpectType IteratorRecord<Iterator<T, unknown, TNext>>

    // 2. If IsCallable(mapper) is false, throw a TypeError exception.
    if (typeof mapper !== 'function') {
        throw new TypeError(`${mapper} is not a function`);
    }

    // Body steps:
    // 1. Let lastValue be undefined.
    let lastValue: unknown;
    let next: false | IteratorYieldResult<T>;
    let value: T;

    // 2. Repeat,
    return regenerator.wrap(
        // This is roughly based on the output of `@babel/plugin-transform-regenerator`:
        function IteratorMapBody(this: Iterator<T, unknown, TNext>, context: regenerator.Context<U, void, TNext>) {
            this; // $ExpectType Iterator<T, unknown, TNext>
            context; // $ExpectType Context<U, void, TNext>

            context.tryEntries[0].tryLoc; // $ExpectType "root"
            context.tryEntries[1].tryLoc; // $ExpectType number
            context.tryEntries[number].tryLoc; // $ExpectType number | "root"

            while (true) {
                switch ((context.prev = context.next)) {
                    case 0:
                        // a. Let next be ? IteratorStep(iterated, lastValue).
                        next = IteratorStep(iterated, lastValue);

                        // b. If next is false, return undefined.
                        if (!next) {
                            context.next = 'end';
                            break;
                        }

                        // c. Let value be ? IteratorValue(next).
                        value = IteratorValue(next);

                    // try {
                    case 1:
                        context.prev = 1;
                        context.next = 2;

                        // d. Let mapped be Call(mapper, undefined, « value »).
                        // e. IfAbruptCloseIterator(iterated, mapped).
                        return Call(mapper, undefined, [value]);

                    case 2:
                        // f. Set lastValue to Yield(mapped).
                        // g. IfAbruptCloseIterator(iterated, lastValue).
                        lastValue = context.sent;
                        context.next = 4;
                        break;

                    // } catch (context.t0) {
                    case 3:
                        context.prev = 3;
                        context.t0 = context.catch(1);
                        return context.abrupt(
                            'return',
                            IteratorClose(iterated, () => {
                                throw context.t0;
                            }),
                        );

                    // }
                    case 4:
                        context.next = 0;
                        break;

                    case 'end':
                        // tslint:disable-next-line: no-void-expression
                        return context.stop();
                }
            }
        },
        IteratorMap,
        this,
        [[1, 3]],
    );
}

declare const overloadedFunction: {
    (): Generator;
    <T>(...args: T[]): Generator<T>;
};

// $ExpectType { (): Generator<unknown, any, unknown>; <T>(...args: T[]): Generator<T, any, unknown>; } & GeneratorFunction
regenerator.mark(overloadedFunction);

declare const mappableIterator: IterableIterator<object> & {
    map: typeof IteratorMap;
};

// $ExpectType Generator<string | awrap<Promise<any>>, void, undefined>
const mappedIterator = mappableIterator.map(value => {
    value; // $ExpectType object
    return value instanceof Promise ? regenerator.awrap(value) : String(value);
});

// $ExpectType AsyncIterator<string, void, unknown>
new regenerator.AsyncIterator(mappedIterator, Promise);

interface IteratorRecord<I extends Iterator<unknown, unknown, unknown>> {
    '[[Iterator]]': I;
    '[[NextMethod]]': I['next'];
    '[[Done]]': boolean;
}

declare function GetIteratorDirect<I extends Iterator<unknown, unknown, unknown>>(iterator: I): IteratorRecord<I>;

declare function IteratorClose<T>(
    iteratorRecord: IteratorRecord<Iterator<unknown, unknown, unknown>>,
    completion: () => T,
): T;
declare function IteratorStep<T>(IteratorRecord: IteratorRecord<Iterator<T>>): false | IteratorYieldResult<T>;
declare function IteratorStep<T, TNext = unknown>(
    IteratorRecord: IteratorRecord<Iterator<T, unknown, TNext>>,
    value: TNext,
): false | IteratorYieldResult<T>;
declare function IteratorValue<T = never, TReturn = never>(result: IteratorResult<T, TReturn>): T | TReturn;

declare function Call<T, R>(F: (this: T) => R, thisArg: T): R;
declare function Call<T, A extends readonly unknown[], R>(
    F: (this: T, ...args: A) => R,
    thisArg: T,
    args: Readonly<A>,
): R;
