// Type definitions for righto 6.1
// Project: https://github.com/KoryNunn/righto
// Definitions by: Zac Murray <https://github.com/protango>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

import { CPSFunction, Righto, RightoAfter } from '.';

/** Represents a type as either the type itself, a righto of the type, or a promise of the type */
type Flexible<T, ET = any> = T|Promise<T>|Righto<[T | undefined, ...any[]], ET>;
/** Accepts an array of types and returns a array of each type OR'd with eventual representations (Righto and promise) */
type ArgsAsFlexible<AT extends any[], ET> = {
    [T in keyof AT]: Flexible<AT[T], ET>
};
/** Transforms an object type to unwrap its Righto typed properties */
type ResolvedObject<T> = {
    [P in keyof T]: T[P] extends Righto<infer X> ? X[0] : T[P]
};
/** Recursively transforms an object type to unwrap its Righto typed properties into "unknown" */
type ResolvedObjectRecursive<T> = {
    [P in keyof T]: T[P] extends Righto<infer X> ? X[0] :
                    T[P] extends object ? ResolvedObjectRecursive<T[P]> :
                    T[P]
};
/** Maps an array of types into their righto representations */
type RightoArrayFrom<T extends any[], ET> = {
    [P in keyof T]: Righto<[T[P]], ET>
};

/**
 * Constructor for a righto object. Accepts a CPS function to represent the async task, followed by the arguments to the CPS function excluding the callback.
 * @example
 * function divideNumbersAsync(a: number, b: number, callback: (error?: Error, result?: number) => void) {
 *     setTimeout(() => {
 *         if (b === 0) callback(new Error("Cannot divide by zero"));
 *         else callback(undefined, a / b);
 *     }, 1000);
 * }
 *
 * let rResult = righto(divideNumbersAsync, 2, 1); // A righto object that will eventually resolve to 2
 * rResult((err, result) => console.log(result)); // Will print '2' to the console
 *
 * // You can also pass eventuals as arguments to the CPS function and they will automatically be resolved
 * let rResult2 = righto(divideNumbersAsync, 5, rResult); // A righto object that will eventually resolve to 2.5
 * rResult2((err, result) => console.log(result)); // Will print '2.5' to the console
 */
declare function righto<AT extends any[], RT extends any[], ET = any>(fn: CPSFunction<AT, RT, ET>, ...args: ArgsAsFlexible<AT, ET>): Righto<RT, ET>;
// Righto constructor to allow for a single righto.after to appear before the function arguments
declare function righto<AT extends any[], RT extends any[], ET = any>(fn: CPSFunction<AT, RT, ET>, after: RightoAfter, ...args: ArgsAsFlexible<AT, ET>): Righto<RT, ET>;
// Righto constructor to allow for a single righto.after to appear after the function arguments
declare function righto<AT extends any[], RT extends any[], ET = any>(fn: CPSFunction<AT, RT, ET>, ...args: [...ArgsAsFlexible<AT, ET>, RightoAfter]): Righto<RT, ET>;
// Righto constructor to allow for two righto.after statements to appear, once before the argument list and once after
declare function righto<AT extends any[], RT extends any[], ET = any>(fn: CPSFunction<AT, RT, ET>, after: RightoAfter, ...args: [...ArgsAsFlexible<AT, ET>, RightoAfter]): Righto<RT, ET>;

// Library for function righto methods
declare namespace righto {
    /** A callback function that accepts a single error argument, with any number of return arguments */
    type ErrBack<RT extends any[] = [], ET = any> = (err?: ET, ...results: {[P in keyof RT]?: RT[P]}) => void;
    /**  Usually an async function that accepts any number of parameters, then returns a result or error through an ErrBack method */
    type CPSFunction<AT extends any[], RT extends any[], ET> = (...args: [...AT, ErrBack<RT, ET>]) => void;
    /** A righto that does not resolve to any value, used for introducing delays in righto argument chains */
    type RightoAfter = Righto<[]>;
    /** Represents a constructed righto object */
    interface Righto<RT extends any[], ET = any> extends CPSFunction<[], RT, ET> {
        get(prop: string|number|Righto<[string, ...any[]]>|Righto<[number, ...any[]]>): Righto<[any], ET>;
        get<T>(fn: (x: RT[0]) => T): Righto<[T], ET>;
        /** You can force a righto task for run at any time without dealing with the results (or error) by calling it with no arguments */
        (): Righto<RT, ET>;

        /** When true, this righto will print a graph trace if it rejects, highlighting the offending task. */
        _traceOnError: boolean;
        /** Prints a stack trace for this righto to the console. Only works if righto._debug was set to true *before* instantiating this righto */
        _trace(): void;
    }

    /**
     * Forks a righto into a callback suitable for the promise constructor
     * @param righto Righto to fork
     * @example
     * var somePromise = new Promise(righto.fork(someRighto));
     */
    function fork<RT extends any[]>(righto: Righto<RT>): (resolve: (x: RT[0]) => void, reject: (x: any) => void) => void;

    /**
     * Righto supports running a generator (or any nextable iterator):
     * @param iterator The iterator to run
     * @example
     * var generated = righto.iterate(function*(a, b, c){
     *     var x = yield righto(function(done){
     *         setTimeout(function(){
     *             done(null, 'x');
     *         });
     *     });
     *
     *     var y = yield righto(function(done){
     *         setTimeout(function(){
     *             done(null, 'y');
     *         });
     *     });
     *
     *     return x + y + a + b + c;
     * });
     *
     * var result = generated('a', 'b', 'c');
     *
     * result(function(error, result){
     *     result === 'xyabc';
     * });
     */
     function iterate<AT extends any[], RT, ET>(constructGenerator: (...args: AT) => Generator<Righto<[RT], ET>, RT, RT>): (...args: AT) => Righto<[RT], ET>;

    /**
     * You can pick and choose what results are used from a dependency like so:
     * @param righto The righto to take results from
     * @param args The (0-indexed) position of each argument to take
     * @example
     * var getBar = righto(bar, righto.take(getFoo, 0, 2)); // Take result 0, and result 2, from getFoo
     * getBar(function(error, result){
     *     result -> 'first third';
     * });
     */
    function take<IDXS extends number[], ET>(righto: Righto<any[], ET>, ...args: IDXS): Righto<{[P in keyof IDXS]: any}, ET>;

    /**
     * Righto.reduce takes an Array of values (an an eventual that resolves to an array) as the first argument, resolves them from left-to-right,
     * optionally passing the result of the last, and the next task to a reducer.
     * When no reducer is passed, the tasks will be resolved in series, and the final tasks result will be passed as the result from reduce.
     * If no tasks are passed, the final result will be undefined.
     * @param values The rightos to reduce
     * @example
     * function a(callback){
     *     aCalled = true;
     *     t.pass('a called');
     *     callback(null, 1);
     * }
     * function b(callback){
     *     t.ok(aCalled, 'b called after a');
     *     callback(null, 2);
     * }
     * var result = righto.reduce([righto(a), righto(b)]);
     * result(function(error, finalResult){
     *     // finalResult === 2
     * });
     */
    function reduce<RT, ET = any>(values: Array<Righto<[RT], ET>>): Righto<[RT], ET>;

    /**
     * Righto.reduce takes an Array of values (an an eventual that resolves to an array) as the first argument, resolves them from left-to-right,
     * optionally passing the result of the last, and the next task to a reducer.
     * When a reducer is used, a seed can optionally be passed as the third parameter.
     * If no tasks are passed, the final result will be undefined.
     * @param values The functions to reduce
     * @param reducer The reducer function
     * @param seed The initial value for the reducer function
     * @example
     * function a(last, callback){
     *     aCalled = true;
     *     t.pass('a called');
     *     callback(null, last);
     * }
     *
     * function b(last, callback){
     *     t.ok(aCalled, 'b called after a');
     *     callback(null, last + 2);
     * }
     *
     * // Passes previous eventual result to next reducer call.
     * var result = righto.reduce(
     *         [a, b],
     *         function(result, next){ // Reducer
     *             return righto(next, result);
     *         },
     *         5 // Seed
     *     );
     *
     * result(function(error, finalResult){
     *     // finalResult === 7
     * });
     */
    function reduce<RT, ET = any>(values: Array<CPSFunction<[RT], [RT], ET>>, reducer: (result: RT, next: CPSFunction<[RT], [RT], ET>) => Righto<[RT], ET>, seed?: RT): Righto<[RT], ET>;

    /**
     * righto.all takes N tasks, or an Array of tasks as the first argument, resolves them all in parallel, and results in an Array of results.
     * @param tasks The tasks to resolve
     * @example
     * var task1 = righto(function(done){
     *     setTimeout(function(){
     *         done(null, 'a');
     *     }, 1000);
     * });
     *
     * var task2 = righto(function(done){
     *     setTimeout(function(){
     *         done(null, 'b');
     *     }, 1000);
     * });
     *
     * var task3 = righto(function(done){
     *     setTimeout(function(){
     *         done(null, 'c');
     *     }, 1000);
     * });
     *
     * var all = righto.all([task1, task2, task3]);
     *
     * all(function(error, results){
     *     results; // -> ['a','b','c']
     * });
     */
    function all<RT, ET = any>(tasks: Array<Righto<[RT], ET>>): Righto<[RT[]], ET>;
    function all(tasks: Array<Righto<any>>): Righto<[any[]]>;

    /**
     * Synchronous functions can be used to create righto tasks using righto.sync:
     * @param fn Synchronous function
     * @param after Optional null righto argument, used for passing in a righto.after object, if required
     * @param args Arguments to synchronous function, as either resolved types or eventuals (righto or promise)
     * @example
     * var someNumber = righto(function(done){
     *     setTimeout(function(){
     *         done(null, 5);
     *     }, 1000);
     * }
     * function addFive(value){
     *     return value + 5;
     * }
     * var syncTask = righto.sync(addFive, someNumber);
     * syncTask(function(error, result){
     *     result; // -> 10
     * });
     */
    function sync<AT extends any[], RT, ET = any>(fn: (...args: AT) => RT, ...args: ArgsAsFlexible<AT, ET>): Righto<[RT], ET>;
    function sync<AT extends any[], RT, ET = any>(fn: (...args: AT) => RT, after: RightoAfter, ...args: ArgsAsFlexible<AT, ET>): Righto<[RT], ET>;
    function sync<AT extends any[], RT, ET = any>(fn: (...args: AT) => RT, after: RightoAfter, ...args: [...ArgsAsFlexible<AT, ET>, RightoAfter]): Righto<[RT], ET>;

    /**
     * Anything can be converted to a righto with righto.from(anything);
     * @param source The source object to create a righto from
     * @example
     * righto.from(someRighto); // Returns someRighto
     * righto.from(somePromise); // Returns a new righto that resolves the promise
     * righto.from(5); // Returns a new righto that resolves 5
     */
    function from<T, ET = any>(source: Righto<[T], ET>|Promise<T>): Righto<[T], ET>;
    function from<T>(source: T): Righto<[T], undefined>;

    /**
     * Sometimes it may be required to pass a resolvable (a righto, or promise) as an argument rather than passing the resolved value of the resolvable. you can do this using righto.value(resolvable)
     * @param resolvable The resolvable to wrap
     * @example
     * var righto1 = righto(function(done){
     *         done(null, 5);
     *     });
     *
     * var rightoValue = righto.value(righto1);
     *
     * var righto2 = righto(function(value, done){
     *         // value === righto1
     *
     *         value(function(error, x){
     *             // x === 5;
     *         });
     *
     *     }, rightoValue);
     *
     * righto2();
     */
    function value<T, ET = any>(resolvable: Righto<[T], ET>|Promise<T>): Righto<[Righto<[T], ET>], ET>;

    /**
     * You can resolve a task to an array containing either the error or results from a righto with righto.surely, which resolves to an array in the form of [error?, results...?].
     * @param fn The function to process
     * @param args The arguments to the function
     * @example
     * var errorOrX = righto.surely(function(done){
     *         done(new Error('borked'));
     *     });
     *
     * var errorOrY = righto.surely(function(done){
     *         done(null, 'y');
     *     });
     *
     * var z = righto(function([xError, x], [yError, y]){
     *
     *         xError; // -> Error 'borked'
     *         x; // -> undefined
     *         yError; // -> null
     *         y; // -> 'y'
     *
     *     }, errorOrX, errorOrY);
     *
     * z();
     */
    function surely<AT extends any[], RT extends any[], ET>(fn: CPSFunction<AT, RT, ET>, ...args: ArgsAsFlexible<AT, ET>): Righto<[[ET, ...RT]], ET>;

    /**
     * Wrap a righto task with a handler that either forwards the successful result, or sends the rejected error through a handler to resolve the task.
     * @param righto The righto that may throw an error
     * @param handler The error handler
     * @example
     * function mightFail(callback){
     *     if(Math.random() > 0.5){
     *         callback('borked');
     *     }else{
     *         callback(null, 'result');
     *     }
     * };
     *
     * function defaultString(error, callback){
     *     callback(null, '');
     * }
     *
     * var maybeAString = righto(mightFail),
     *     aString = righto.handle(maybeAString, defaultString);
     *
     * aString(function(error, result){
     *     typeof result === 'string';
     * });
     */
    function handle<RT extends any[], ET>(righto: Righto<RT, ET>, handler: CPSFunction<[ET], RT, ET>): Righto<RT, ET>;

    /**
     * Sometimes you need a task to run after another has succeeded, but you don't need its results, righto.after(task1, task2, taskN...) can be used to achieve this.
     * @param rightos The tasks to wait on
     * @example
     * function foo(callback){
     *     setTimeout(function(){
     *         callback(null, 'first result');
     *     }, 1000);
     * }
     * var getFoo = righto(foo);
     * function bar(callback){
     *     callback(null, 'second result');
     * }
     * var getBar = righto(bar, righto.after(getFoo)); // wait for foo before running bar.
     * getBar(function(error, result){
     *     result -> 'second result';
     * });
     */
    function after(...rightos: Array<Righto<any>>): RightoAfter;

    /**
     * Resolves an object to a new object where any righto values are resolved.
     * @param obj Object to resolve
     * @param recursive Whether or not to recursively resolve objects
     * @example
     * var foo = righto(function(callback){
     *     asyncify(function(){
     *         callback(null, 'foo');
     *     });
     * });
     * var bar = righto.resolve({foo: {bar: foo}}, true);
     * bar(function(error, bar){
     *     bar; // -> {foo: {bar: 'foo'}}
     * });
     */
    function resolve<T, B extends boolean>(obj: T, recursive: B): B extends true ? ResolvedObjectRecursive<T> : ResolvedObject<T>;
    function resolve<T>(obj: T): ResolvedObject<T>;

    /**
     * Occasionally you might want to mate a number of tasks into one task.
     * For this, you can use righto.mate.
     * @param rightos List of righto's to mate
     * @example
     * function getStuff(callback){
     *     // eventually...
     *     callback(null, 3);
     * }
     * var stuff = righto(getStuff);
     * function getOtherStuff(callback){
     *     // eventually...
     *     callback(null, 7);
     * }
     * var otherStuff = righto(getOtherStuff);
     * var stuffAndOtherStuff = righto.mate(stuff, otherStuff);
     * stuffAndOtherStuff(function(error, stuff, otherStuff){
     *     error -> null
     *     stuff -> 3
     *     otherStuff -> 7
     * });
     */
    function mate<RT extends any[], ET>(...rightos: RightoArrayFrom<RT, ET>): Righto<RT, ET>;

    /**
     * A shorthand way to provide a failed result. This is handy for rejecting in .get methods.
     * @param err The error to throw
     * @example
     * var something = someRighto.get(function(value){
     *   if(!value){
     *     return righto.fail('was falsey');
     *   }
     *   return value;
     * });
     */
    function fail<ET>(err: ET): Righto<[], ET>;

    /**
     * If you are using righto in an environment that supports proxies, you can use the proxy API
     * @example
     * var righto = require('righto').proxy;
     *
     * var foo = righto(function(done){
     *         setTimeout(function(){
     *             done(null, {foo: 'bar'});
     *         });
     *     });
     *
     * foo.bar(function(error, bar){
     *     bar === 'bar'
     * });
     */
    function proxy<AT extends any[]>(fn: CPSFunction<AT, any[], any>, ...args: AT): any;

    /**
     * Enables or disables debug logging. When true, stack traces can be retrieved from each righto object using [righto instance].trace();
     * @example
     * righto._debug = true;
     * var someRighto = righto.from(a);
     * someRighto.trace();
     */
    let _debug: boolean;

    /**
     * You can globally tell righto to print a graph trace, highlighting the offending task, when a graph rejects.
     */
    let _autotraceOnError: boolean;

    /** Determines whether an object is a righto */
    function isRighto(obj: any): boolean;
    /** Determines whether an object supports the promise-like `x.then(y => ...)` resolution syntax */
    function isThenable(obj: any): boolean;
    /** Determines whether an object is a righto or thenable */
    function isResolvable(obj: any): boolean;
}

export = righto;
