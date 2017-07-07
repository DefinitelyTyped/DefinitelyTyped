// Type definitions for Bacon.js 0.7.0
// Project: https://baconjs.github.io/
// Definitions by: Alexander Matsievsky <https://github.com/alexander-matsievsky>, Joonas Javanainen <https://github.com/gekkio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="node" />

interface JQuery {
    /**
     * @method
     * @description Creates an [EventStream]{@link Bacon.EventStream} from events on a jQuery or Zepto.js object.
     * @param {string} eventName
     * @returns {EventStream<ErrorEvent, JQueryEventObject>}
     * @example
     * $("#my-div").asEventStream("click");
     */
    asEventStream(eventName:string):Bacon.EventStream<ErrorEvent, JQueryEventObject>;

    /**
     * @method
     * @description Creates an [EventStream]{@link Bacon.EventStream} from events on a jQuery or Zepto.js object. You can pass an argument to add a jQuery live `selector`.
     * @param {string} eventName
     * @param {string} selector
     * @returns {EventStream<ErrorEvent, JQueryEventObject>}
     * @example
     * $("#my-div").asEventStream("click", ".more-specific-selector");
     */
    asEventStream(eventName:string, selector:string):Bacon.EventStream<ErrorEvent, JQueryEventObject>;

    /**
     * @callback JQuery#asEventStream1~f
     * @param {JQueryEventObject} event
     * @param {*[]} args
     * @returns {A}
     */
    /**
     * @method JQuery#asEventStream1
     * @description Creates an [EventStream]{@link Bacon.EventStream} from events on a jQuery or Zepto.js object. You can pass an argument to add a function `f` that processes the jQuery event and its parameters.
     * @param {string} eventName
     * @param {JQuery#asEventStream1~f} f
     * @returns {EventStream<ErrorEvent, A>}
     * @example
     * $("#my-div").asEventStream("click", (event, args) => args[0]);
     */
    asEventStream<A>(eventName:string, f:(event:JQueryEventObject, args:any[]) => A):Bacon.EventStream<ErrorEvent, A>;

    /**
     * @callback JQuery#asEventStream2~f
     * @param {JQueryEventObject} event
     * @param {*[]} args
     * @returns {A}
     */
    /**
     * @method JQuery#asEventStream2
     * @description Creates an [EventStream]{@link Bacon.EventStream} from events on a jQuery or Zepto.js object. You can pass an argument to add a jQuery live `selector` and a function `f` that processes the jQuery event and its parameters.
     * @param {string} eventName
     * @param {string} selector
     * @param {JQuery#asEventStream2~f} f
     * @returns {Bacon.EventStream<ErrorEvent, A>}
     * @example
     * $("#my-div").asEventStream("click", ".more-specific-selector", (event, args) => args[0]);
     */
    asEventStream<A>(eventName:string, selector:string, f:(event:JQueryEventObject, args:any[]) => A):Bacon.EventStream<ErrorEvent, A>;
}

/** @module Bacon */
declare namespace Bacon {
    /**
     * @function
     * @description Creates an [EventStream]{@link Bacon.EventStream} from a `promise` Promise object such as JQuery Ajax. This stream will contain a single value or an error, followed immediately by stream end. You can use the optional `abort` flag (i.e. ´Bacon.fromPromise(p, true)´ to have the `abort` method of the given promise be called when all subscribers have been removed from the created stream.
     * @param {PromiseLike<A>|JQueryXHR} promise
     * @param {boolean} [abort]
     * @returns {EventStream<E, A>}
     * @example
     * Bacon.fromPromise($.ajax("https://baconjs.github.io/"));
     * Bacon.fromPromise(Promise.resolve(1));
     * Bacon.fromPromise($.ajax("https://baconjs.github.io/"), true);
     * Bacon.fromPromise(Promise.resolve(1), false);
     */
    function fromPromise<E, A>(promise:PromiseLike<A>|JQueryXHR, abort?:boolean):EventStream<E, A>;

    /**
     * @callback Bacon.fromPromise~eventTransformer
     * @param {A} value
     * @returns {(Initial<B>|Next<B>|End<B>|Error<E>)[]}
     */
    /**
     * @function Bacon.fromPromise
     * @description Creates an [EventStream]{@link Bacon.EventStream} from a `promise` Promise object such as JQuery Ajax. This stream will contain a single value or an error, followed immediately by stream end. You can use the `abort` flag (i.e. ´Bacon.fromPromise(p, true)´ to have the `abort` method of the given promise be called when all subscribers have been removed from the created stream, and also pass a function `eventTransformer` that transforms the promise value into Events. The default is to transform the value into `[new Bacon.Next(value), new Bacon.End()]`.
     * @param {PromiseLike<A>|JQueryXHR} promise
     * @param {boolean} abort
     * @param {Bacon.fromPromise~eventTransformer} eventTransformer
     * @returns {EventStream<E, B>}
     * @example
     * Bacon.fromPromise($.ajax("https://baconjs.github.io/"), true, (n:string) => {
     *     return [new Bacon.Next(n), new Bacon.Next(() => n), new Bacon.End()];
     * });
     * Bacon.fromPromise(Promise.resolve(1), false, n => {
     *     return [new Bacon.Next(n), new Bacon.Next(() => n), new Bacon.End()];
     * });
     */
    function fromPromise<E, A, B>(promise:PromiseLike<A>|JQueryXHR, abort:boolean, eventTransformer:(value:A) => (Initial<B>|Next<B>|End<B>|Error<E>)[]):EventStream<E, B>;

    /**
     * @function
     * @description Creates an [EventStream]{@link Bacon.EventStream} from events on a DOM EventTarget or Node.JS EventEmitter object, or an object that supports event listeners using `on`/`off` methods.
     * @param {EventTarget|NodeJS.EventEmitter|JQuery} target
     * @param {string} eventName
     * @returns {EventStream<E, A>}
     * @example
     * Bacon.fromEvent(document.body, "click").onValue(() => {
     *     alert("Bacon!");
     * });
     * Bacon.fromEvent(process.stdin, "readable", () => {
     *     alert("Bacon!");
     * });
     * Bacon.fromEvent($("body"), "click").onValue(() => {
     *     alert("Bacon!");
     * });
     */
    function fromEvent<E, A>(target:EventTarget|NodeJS.EventEmitter|JQuery, eventName:string):EventStream<E, A>;

    /**
     * @callback Bacon.fromEvent~eventTransformer
     * @param {A} event
     * @returns {B}
     */
    /**
     * @function Bacon.fromEvent
     * @description Creates an [EventStream]{@link Bacon.EventStream} from events on a DOM EventTarget or Node.JS EventEmitter object, or an object that supports event listeners using `on`/`off` methods. You can pass a function `eventTransformer` that transforms the emitted events' parameters.
     * @param {EventTarget|NodeJS.EventEmitter|JQuery} target
     * @param {string} eventName
     * @param {Bacon.fromEvent~eventTransformer} eventTransformer
     * @returns {EventStream<E, B>}
     * @example
     * Bacon.fromEvent(document.body, "click", (event:MouseEvent) => event.clientX).onValue(clientX => {
     *     alert("Bacon!");
     * });
     */
    function fromEvent<E, A, B>(target:EventTarget|NodeJS.EventEmitter|JQuery, eventName:string, eventTransformer:(event:A) => B):EventStream<E, B>;

    /**
     * @callback Bacon.fromCallback1~f
     * @param {Bacon.fromCallback1~callback} callback
     * @returns {void}
     */
    /**
     * @callback Bacon.fromCallback1~callback
     * @param {...*} args
     * @returns {void}
     */
    /**
     * @function Bacon.fromCallback1
     * @description Creates an [EventStream]{@link Bacon.EventStream} from a function `f` that accepts a `callback`. The function is supposed to call its callback just once.
     * @param {Bacon.fromCallback1~f} f
     * @returns {EventStream<E, A>}
     * @example
     * // This would create a stream that outputs a single value "Bacon!" and ends after that. The use of setTimeout causes the value to be delayed by 1 second.
     * Bacon.fromCallback(callback => {
     *     setTimeout(() => {
     *         callback("Bacon!");
     *     }, 1000);
     * });
     */
    function fromCallback<E, A>(f:(callback:(...args:any[]) => void) => void):EventStream<E, A>;

    /**
     * @callback Bacon.fromCallback2~f
     * @param {...*} args
     * @returns {void}
     */
    /**
     * @function Bacon.fromCallback2
     * @description Creates an [EventStream]{@link Bacon.EventStream} from a function `f` that accepts a `callback`. The function is supposed to call its callback just once.
     * @param {Bacon.fromCallback2~f} f
     * @param {...*} args
     * @returns {EventStream<E, A>}
     * @example
     * // You can also give any number of arguments to `fromCallback`, which will be passed to the function. These arguments can be simple variables, Bacon EventStreams or Properties. For example the following will output "Bacon rules":
     * Bacon.fromCallback((a, b, callback) => {
     *     callback(a + " " + b);
     * }, Bacon.constant("bacon"), "rules").log();
     */
    function fromCallback<E, A>(f:(...args:any[]) => void, ...args:any[]):EventStream<E, A>;

    /**
     * @function
     * @description Creates an [EventStream]{@link Bacon.EventStream} from a `methodName` method of a given `object`. The function is supposed to call its callback just once.
     * @param {Object} object
     * @param {string} methodName
     * @param {...*} args
     * @returns {EventStream<E, A>}
     */
    function fromCallback<E, A>(object:Object, methodName:string, ...args:any[]):EventStream<E, A>;

    /**
     * @callback Bacon.fromNodeCallback~f
     * @param {Bacon.fromNodeCallback~callback} callback
     * @returns {void}
     */
    /**
     * @callback Bacon.fromNodeCallback~callback
     * @param {E} error
     * @param {A} data
     * @returns {void}
     */
    /**
     * @function Bacon.fromNodeCallback
     * @description Creates an [EventStream]{@link Bacon.EventStream} from a function `f` that accepts a Node.js `callback`: callback(error, data), where error is `null` if everything is fine. The function is supposed to call its callback just once.
     * @param {Bacon.fromNodeCallback~f} f
     * @param {...*} args
     * @returns {EventStream<E, A>}
     * @example
     * {
     *     let fs = require("fs"),
     *         read = Bacon.fromNodeCallback(fs.readFile, "input.txt");
     *     read.onError(error => {
     *        console.log("Reading failed: " + error);
     *     });
     *     read.onValue(value => {
     *         console.log("Read contents: " + value);
     *     });
     * }
     */
    function fromNodeCallback<E, A>(f:(callback:(error:E, data:A) => void) => void, ...args:any[]):EventStream<E, A>;

    /**
     * @function
     * @description Creates an [EventStream]{@link Bacon.EventStream} from a `methodName` method of a given `object`.
     * @param {Object} object
     * @param {string} methodName
     * @param {...*} args
     * @returns {EventStream<E, A>}
     */
    function fromNodeCallback<E, A>(object:Object, methodName:string, ...args:any[]):EventStream<E, A>;

    /**
     * @callback Bacon.fromPoll~f
     * @returns {Next<A>|End<A>}
     */
    /**
     * @function Bacon.fromPoll
     * @description Polls given function `f` with given `interval`. Function should return events: either [Next]{@link Bacon.Next} or [End]{@link Bacon.End}. Polling occurs only when there are subscribers to the stream. Polling ends permanently when `f` returns [End]{@link Bacon.End}.
     * @param {number} interval
     * @param {Bacon.fromPoll~f} f
     * @returns {EventStream<E, A>}
     */
    function fromPoll<E, A>(interval:number, f:() => Next<A>|End<A>):EventStream<E, A>;

    /**
     * @function Bacon.once
     * @description Creates an [EventStream]{@link Bacon.EventStream} that delivers the given single `value` for the first subscriber. The stream will end immediately after this value. You can also send an [Error]{@link Bacon.Error} event instead of a `value`.
     * @param {A|Error<E>} value
     * @returns {EventStream<E, A>}
     * @example
     * Bacon.once(new Bacon.Error("fail"));
     */
    function once<E, A>(value:A|Error<E>):EventStream<E, A>;

    /**
     * @function
     * @description Creates an [EventStream]{@link Bacon.EventStream} that delivers the given series of `values` (given as array) to the first subscriber. The stream ends after these values have been delivered. You can also send [Error]{@link Bacon.Error} events, or any combination of pure values and error events.
     * @param {(A|Error<E>)[]} values
     * @returns {EventStream<E, A>}
     * @example
     * Bacon.fromArray([1, new Bacon.Error("")]);
     */
    function fromArray<E, A>(values:(A|Error<E>)[]):EventStream<E, A>;

    /**
     * @function
     * @description Repeats the single `value` indefinitely with the given `interval` (in milliseconds).
     * @param {number} interval
     * @param {A} value
     * @returns {EventStream<E, A>}
     */
    function interval<E, A>(interval:number, value:A):EventStream<E, A>;

    /**
     * @function
     * @description Creates a [EventStream]{@link Bacon.EventStream} containing given `values` (given as array) with the given `interval` (in milliseconds).
     * @param {number} interval
     * @param {A[]} values
     * @returns {EventStream<E, A>}
     */
    function sequentially<E, A>(interval:number, values:A[]):EventStream<E, A>;

    /**
     * @function
     * @description Repeats given `values` indefinitely with then given `interval` (in milliseconds).
     * @param {number} interval
     * @param {A[]} values
     * @returns {EventStream<E, A>}
     * @example
     * // The following would lead to `1,2,3,1,2,3...` to be repeated indefinitely:
     * Bacon.fromArray([1, new Bacon.Error("")]);
     */
    function repeatedly<E, A>(interval:number, values:A[]):EventStream<E, A>;

    /**
     * @callback Bacon.repeat~f
     * @param {number} iteration
     * @returns {boolean|Observable<E, A>}
     */
    /**
     * @function Bacon.repeat
     * @description Calls generator function `f` which is expected to return an [Observable]{@link Bacon.Observable}. The returned [EventStream]{@link Bacon.EventStream} contains values and errors from the spawned observable. When the spawned Observable ends, the generator `f` is called again to spawn a new Observable. This is repeated until the generator `f` returns a falsy value (such as `undefined` or `false`). The generator `f` is called with one argument — `iteration` number starting from `0`.
     * @param {Bacon.repeat~f} f
     * @returns {EventStream<E, A>}
     * @example
     * // The following will produce values `0,1,2`.
     * Bacon.repeat(i => {
     *     if (i < 3) {
     *         return Bacon.once(i);
     *     } else {
     *         return false;
     *     }
     * }).log();
     */
    function repeat<E, A>(f:(iteration:number) => boolean|Observable<E, A>):EventStream<E, A>;

    /**
     * @function Bacon.never
     * @description Creates an [EventStream]{@link Bacon.EventStream} that immediately ends.
     * @returns {EventStream<E, A>}
     */
    function never<E, A>():EventStream<E, A>;

    /**
     * @function
     * @description Creates a single-element [EventStream]{@link Bacon.EventStream} that produces given `value` after a given `delay` (in milliseconds).
     * @param {number} delay
     * @param {A} value
     * @returns {EventStream<E, A>}
     */
    function later<E, A>(delay:number, value:A):EventStream<E, A>;

    /**
     * @function
     * @description Creates a constant [Property]{@link Bacon.Property} with value `x`.
     * @param {A} x
     * @returns {Property<E, A>}
     */
    function constant<E, A>(x:A):Property<E, A>;

    /**
     * @callback Bacon.fromBinder~subscribe
     * @param {Bacon.fromBinder~sink} sink
     * @returns {Bacon.fromBinder~unsubscribe}
     */
    /**
     * @callback Bacon.fromBinder~sink
     * @param {More|NoMore|(A|Initial<A>|Next<A>|End<A>|Error<E>)|(A|Initial<A>|Next<A>|End<A>|Error<E>)[]} value
     * @returns {void}
     */
    /**
     * @callback Bacon.fromBinder~unsubscribe
     * @returns {void}
     */
    /**
     * @function Bacon.fromBinder
     * @description Creates an [EventStream]{@link Bacon.EventStream} with the given [subscribe]{@link Bacon.fromBinder~subscribe} function. The parameter `subscribe` is a function that accepts a [sink]{@link Bacon.fromBinder~sink} which is a function that your `subscribe` function can "push" events to. You can push: a plain value, like `"first value"`; an [Event]{@link Bacon.Event} object including [Error]{@link Bacon.Error} (wraps an error) and [End]{@link Bacon.End} (indicates stream end); an array of event objects at once. The `subscribe` function must return a function. Let's call that function [unsubscribe]{@link Bacon.fromBinder~unsubscribe}. The returned function can be used by the subscriber (directly or indirectly) to unsubscribe from the EventStream. It should release all resources that the `subscribe` function reserved. The `sink` function may return [noMore]{@link Bacon.noMore} (as well as [more]{@link Bacon.more} or any other value). If it returns `noMore`, no further events will be consumed by the subscriber. The `subscribe` function may choose to clean up all resources at this point (e.g., by calling `unsubscribe`). This is usually not necessary, because further calls to `sink` are ignored, but doing so can increase performance in rare cases. The EventStream will wrap your `subscribe` function so that it will only be called when the first stream listener is added, and the `unsubscribe` function is called only after the last listener has been removed. The subscribe-unsubscribe cycle may of course be repeated indefinitely, so prepare for multiple calls to the `subscribe` function.
     * @param {Bacon.fromBinder~subscribe} subscribe
     * @returns {EventStream<E, A>}
     * @example
     * let stream = Bacon.fromBinder(sink => {
     *     sink("first value");
     *     sink([new Bacon.Next("2nd"), new Bacon.Next("3rd")]);
     *     sink(new Bacon.Next(() => {
     *         return "This one will be evaluated lazily"
     *     }));
     *     sink(new Bacon.Error("oops, an error"));
     *     sink(new Bacon.End());
     *     return () => {
     *         // unsub functionality here, this one's a no-op
     *     };
     * });
     * stream.log();
     */
    function fromBinder<E, A>(subscribe:(sink:(value:More|NoMore|(A|Initial<A>|Next<A>|End<A>|Error<E>)|(A|Initial<A>|Next<A>|End<A>|Error<E>)[]) => void) => (() => void)):EventStream<E, A>;

    /**
     * @interface
     * @see Bacon.more
     */
    interface More {
    }
    /**
     * @property more
     * @constant
     * @description The opaque value `sink` function may return. See [Bacon.fromBinder]{@link Bacon.fromBinder}.
     */
    var more:More;

    /**
     * @interface
     * @see Bacon.noMore
     */
    interface NoMore {
    }
    /**
     * @property noMore
     * @constant
     * @description The opaque value `sink` function may return. See [Bacon.fromBinder]{@link Bacon.fromBinder}.
     */
    var noMore:NoMore;

    /**
     * @class Observable
     * @description A superclass for [EventStream]{@link Bacon.EventStream} and [Property]{@link Bacon.Property}.
     * */
    interface Observable<E, A> {
        /**
         * @callback Observable#onValue~f
         * @param {A} value
         * @returns {void}
         */
        /**
         * @callback Observable#onValue~unsubscribe
         * @returns {void}
         */
        /**
         * @method Observable#onValue
         * @description Subscribes a given handler function `f` to the [Observable]{@link Bacon.Observable}. Function will be called for each new value. This is the simplest way to assign a side-effect to an Observable. The difference to the [EventStream.subscribe]{@link Bacon.EventStream#subscribe} and [Property.subscribe]{@link Bacon.Property#subscribe} methods is that the actual stream `value`s are received, instead of [Event]{@link Bacon.Event} objects. [EventStream.onValue]{@link Bacon.EventStream#onValue} and [Property.onValue]{@link Bacon.Property#onValue} behave similarly, except that the latter also pushes the initial value of the Property, in case there is one.
         * @param {Observable#onValue~f} f
         * @returns {Observable#onValue~unsubscribe}
         */
        onValue(f:(value:A) => void):() => void;

        /**
         * @callback Observable#onError~f
         * @param {E} error
         * @returns {void}
         */
        /**
         * @callback Observable#onError~unsubscribe
         * @returns {void}
         */
        /**
         * @method Observable#onError
         * @description Subscribes a given handler function `f` to [Error]{@link Bacon.Error} events. The function `f` will be called for each error in the [Observable]{@link Bacon.Observable}.
         * @param {Observable#onError~f} f
         * @returns {Observable#onError~unsubscribe}
         */
        onError(f:(error:E) => void):() => void;

        /**
         * @callback Observable#onEnd~f
         * @returns {void}
         */
        /**
         * @callback Observable#onEnd~unsubscribe
         * @returns {void}
         */
        /**
         * @method Observable#onEnd
         * @description Subscribes a given handler function `f` to [End]{@link Bacon.End} event. The function `f` will be called when the [Observable]{@link Bacon.Observable} ends. Just like [EventStream.subscribe]{@link Bacon.EventStream#subscribe} and [Property.subscribe]{@link Bacon.Property#subscribe}, this method returns a function for `unsubscribe`ing.
         * @param {Observable#onEnd~f} f
         * @returns {Observable#onEnd~unsubscribe}
         */
        onEnd(f:() => void):() => void;

        /**
         * @callback Observable#toPromise~promiseCtr
         * @param {A} value
         * @returns {Promise<A>}
         */
        /**
         * @method Observable#toPromise
         * @description Returns a Promise which will be resolved with the last event coming from an [Observable]{@link Bacon.Observable}. The global ES6 promise implementation will be used unless a promise constructor `promiseCtr` is given. Use a shim if you need to support legacy browsers or platforms.
         * @param {Observable#toPromise~promiseCtr} [promiseCtr]
         * @returns {Promise<A>}
         */
        toPromise(promiseCtr?:(value:A) => Promise<A>):Promise<A>;

        /**
         * @callback Observable#firstToPromise~promiseCtr
         * @param {A} value
         * @returns {Promise<A>}
         */
        /**
         * @method Observable#firstToPromise
         * @description Returns a Promise which will be resolved with the first event coming from an [Observable]{@link Bacon.Observable}. Like [Observable.toPromise]{@link Bacon.Observable#toPromise}, the global ES6 promise implementation will be used unless a promise constructor `promiseCtr` is given.
         * @param {Observable#firstToPromise~promiseCtr} [promiseCtr]
         * @returns {Promise<A>}
         */
        firstToPromise(promiseCtr?:(value:A) => Promise<A>):Promise<A>;

        /**
         * @method
         * @description Throttles the [Observable]{@link Bacon.Observable} using a buffer so that at most one value event in `minimumInteval` is issued. Unlike [EventStream.throttle]{@link Bacon.EventStream#throttle} and [Property.throttle]{@link Bacon.Property#throttle}, it doesn't discard the excessive events but buffers them instead, outputting them with a rate of at most one value per `minimumInterval`.
         * @param {number} minimumInterval
         * @returns {EventStream<E, A>}
         */
        bufferingThrottle(minimumInterval:number):EventStream<E, A>;

        /**
         * @callback Observable#flatMap~f
         * @param {A} value
         * @returns {B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>}
         */
        /**
         * @method Observable#flatMap
         * @description For each element in the source [Observable]{@link Bacon.Observable}, spawn a new stream using the function `f`,  and collect events from each of the spawned streams into the result [EventStream]{@link Bacon.EventStream}. The return value of function `f` can be either an Observable (EventStream/[Property]{@link Bacon.Property}) or a constant value. The result of [flatMap]{@link Bacon.Observable#flatMap} is always an EventStream. The "Function Construction rules" apply here. `flatMap` can be used conveniently with [Bacon.once]{@link Bacon.once} and [Bacon.never]{@link Bacon.never} for converting and filtering at the same time, including only some of the results.
         * @param {Observable#flatMap~f} f
         * @returns {EventStream<E, B>}
         * @example
         * // Converting strings to integers, skipping empty values:
         * Bacon.once("").flatMap(text => {
         *     return text != "" ? parseInt(text) : Bacon.never();
         * });
         */
        flatMap<B>(f:(value:A) => B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>):EventStream<E, B>;

        /**
         * @callback Observable#flatMapLatest~f
         * @param {A} value
         * @returns {B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>}
         */
        /**
         * @method Observable#flatMapLatest
         * @description For each element in the source [Observable]{@link Bacon.Observable}, spawn a new stream using the function `f`,  but instead of including events from all spawned streams, only includes them from the latest spawned stream into the result [EventStream]{@link Bacon.EventStream}. The return value of function `f` can be either an Observable (EventStream/[Property]{@link Bacon.Property}) or a constant value. The result of [flatMapLatest]{@link Bacon.Observable#flatMapLatest} is always an EventStream.
         * @param {Observable#flatMapLatest~f} f
         * @returns {EventStream<E, B>}
         */
        flatMapLatest<B>(f:(value:A) => B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>):EventStream<E, B>;

        /**
         * @callback Observable#flatMapFirst~f
         * @param {A} value
         * @returns {B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>}
         */
        /**
         * @method Observable#flatMapFirst
         * @description For each element in the source [Observable]{@link Bacon.Observable}, spawn a new stream using the function `f` only if the previously spawned stream has ended, and collect events from each of the spawned streams into the result [EventStream]{@link Bacon.EventStream}. The return value of function `f` can be either an Observable (EventStream/[Property]{@link Bacon.Property}) or a constant value. The result of [flatMapFirst]{@link Bacon.Observable#flatMapFirst} is always an EventStream.
         * @param {Observable#flatMapFirst~f} f
         * @returns {EventStream<E, B>}
         */
        flatMapFirst<B>(f:(value:A) => B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>):EventStream<E, B>;

        /**
         * @callback Observable#flatMapError~f
         * @param {E} error
         * @returns {B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>}
         */
        /**
         * @method Observable#flatMapError
         * @description For each [Error]{@link Bacon.Error} event in the source [Observable]{@link Bacon.Observable}, spawn a new stream using the function `f`,  and collect events from each of the spawned streams into the result [EventStream]{@link Bacon.EventStream}. The return value of function `f` can be either an Observable (EventStream/[Property]{@link Bacon.Property}) or a constant value. The result of [flatMapError]{@link Bacon.Observable#flatMapError} is always an EventStream.
         * @param {Observable#flatMapError~f} f
         * @returns {EventStream<E, B>}
         */
        flatMapError<B>(f:(error:E) => B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>):EventStream<E, B>;

        /**
         * @callback Observable#flatMapWithConcurrencyLimit~f
         * @param {A} value
         * @returns {B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>}
         */
        /**
         * @method Observable#flatMapWithConcurrencyLimit
         * @description For each element in the source [Observable]{@link Bacon.Observable}, spawn a new stream using the function `f`,  and collect events from each of the spawned streams into the result [EventStream]{@link Bacon.EventStream}, but limit the number of open spawned streams and buffers incoming events by `limit` amount. The return value of function `f` can be either an Observable (EventStream/[Property]{@link Bacon.Property}) or a constant value. [flatMapConcat]{@link Bacon.Observable#flatMapConcat} is [flatMapWithConcurrencyLimit]{@link Bacon.Observable#flatMapWithConcurrencyLimit}(1) (only one input active), and [flatMap]{@link Bacon.Observable#flatMap} is [flatMapWithConcurrencyLimit]{@link Bacon.Observable#flatMapWithConcurrencyLimit}(∞) (all inputs are piped to output). The result of `flatMapWithConcurrencyLimit` is always an EventStream.
         * @param {number} limit
         * @param {Observable#flatMapWithConcurrencyLimit~f} f
         * @returns {EventStream<E, B>}
         */
        flatMapWithConcurrencyLimit<B>(limit:number, f:(value:A) => B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>):EventStream<E, B>;

        /**
         * @callback Observable#flatMapConcat~f
         * @param {A} value
         * @returns {B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>}
         */
        /**
         * @method Observable#flatMapConcat
         * @description For each element in the source [Observable]{@link Bacon.Observable}, spawn a new stream using the function `f`,  and collect events from each of the spawned streams into the result [EventStream]{@link Bacon.EventStream}, but limit the number of open spawned streams and buffers incoming events to 1. The return value of function `f` can be either an Observable (EventStream/[Property]{@link Bacon.Property}) or a constant value. The result of `flatMapConcat` is always an EventStream.
         * @param {Observable#flatMapConcat~f} f
         * @returns {EventStream<E, B>}
         */
        flatMapConcat<B>(f:(value:A) => B|Initial<B>|Next<B>|End<B>|Error<E>|Observable<E, B>):EventStream<E, B>;

        /**
         * @callback Observable#scan~f
         * @param {B} acc
         * @param {A} next
         * @returns {B}
         */
        /**
         * @method Observable#scan
         * @description Scans [Observable]{@link Bacon.Observable} with given `seed` value and accumulator function `f`, resulting to a [Property]{@link Bacon.Property}. For example, you might use zero as `seed` and a "plus" function as the accumulator to create an "integral" Property. When applied to a Property as in `r = p.scan(seed, f)`, there's a (hopefully insignificant) catch: the starting value for `r` depends on whether `p` has an initial value when `scan` is applied. If there's no initial value, this works identically to `[EventStream]{@link Bacon.EventStream}.scan`: the `seed` will be the initial value of `r`. However, if `r` already has a current/initial value `x`, the seed won't be output as is. Instead, the initial value of `r` will be `f(seed, x)`. This makes sense, because there can only be 1 initial value for a Property at a time.
         * @param {B} seed
         * @param {Observable#scan~f} f
         * @returns {Property<E, B>}
         * @example
         * Bacon.sequentially(1, [1, 2, 3]).scan(0, (a, b) => a + b);
         */
        scan<B>(seed:B, f:(acc:B, next:A) => B):Property<E, B>;

        /**
         * @callback Observable#fold~f
         * @param {B} acc
         * @param {A} next
         * @returns {B}
         */
        /**
         * @method Observable#fold
         * @description Scans [Observable]{@link Bacon.Observable} with given `seed` value and accumulator function `f`, but only emits the final value, i.e. the value just before the Observable ends. Returns a [Property]{@link Bacon.Property}.
         * @param {B} seed
         * @param {Observable#fold~f} f
         * @returns {Property<E, B>}
         */
        fold<B>(seed:B, f:(acc:B, next:A) => B):Property<E, B>;

        /**
         * @callback Observable#reduce~f
         * @param {B} acc
         * @param {A} next
         * @returns {B}
         */
        /**
         * @method Observable#reduce
         * @description Scans [Observable]{@link Bacon.Observable} with given `seed` value and accumulator function `f`, but only emits the final value, i.e. the value just before the Observable ends. Returns a [Property]{@link Bacon.Property}.
         * @param {B} seed
         * @param {Observable#reduce~f} f
         * @returns {Property<E, B>}
         */
        reduce<B>(seed:B, f:(acc:B, next:A) => B):Property<E, B>;

        /**
         * @callback Observable#diff~f
         * @param {A} a
         * @param {B} b
         * @returns {B}
         */
        /**
         * @method Observable#diff
         * @description Returns a [Property]{@link Bacon.Property} that represents the result of a comparison `f` between the previous and current value of the [Observable]{@link Bacon.Observable}. For the initial value of the Observable, the previous value will be the given `start`.
         * @param {A} start
         * @param {Observable#diff~f} f
         * @returns {Property<E, B>}
         * @example
         * Bacon.sequentially(1, [1, 2, 3]).diff(0, (a, b) => Math.abs(b - a));
         */
        diff<B>(start:A, f:(a:A, b:A) => B):Property<E, B>;

        /**
         * @callback Observable#zip~f
         * @param {A} a
         * @param {B} b
         * @returns {C}
         */
        /**
         * @method Observable#zip
         * @description Returns an [EventStream]{@link Bacon.EventStream} with elements pair-wise lined up with events from this and the `other` EventStream. A zipped EventStream will publish only when it has a value from each EventStream and will only produce values up to when any single EventStream ends. The given function `f` is used to create the result value from value in the two source EventStream. If no function `f` is given, the values are zipped into an array. Be careful not to have too much "drift" between streams. If one stream produces many more values than some other excessive buffering will occur inside the zipped observable.
         * @param {EventStream<E, B>} other
         * @param {Observable#zip~f} f
         * @returns {EventStream<E, C>}
         * @example
         * {
         *     let x = Bacon.fromArray([1, 2]),
         *         y = Bacon.fromArray([3, 4]);
         *     x.zip(y, (x, y) => x + y);
         * }
         */
        zip<B, C>(other:EventStream<E, B>, f:(a:A, b:B) => C):EventStream<E, C>;

        /**
         * @method
         * @description Returns a [Property]{@link Bacon.Property} that represents a "sliding window" into the history of the values of the [Observable]{@link Bacon.Observable}. The resulting Property will have a value that is an array containing the last `n` values of the original Observable, where `n` is at most the value of the `max` argument, and at least the value of the `min` argument. If the `min` argument is omitted, there's no lower limit of values.
         * @param {number} max
         * @param {number} [min]
         * @returns {Property<E, A[]>}
         * @example
         * // If you have a EventStream `s` with a value sequence `1,2,3,4,5`, the respective values in `s.slidingWindow(2)` would be `[],[1],[1,2],[2,3],[3,4],[4,5]`:
         * Bacon.fromArray([1, 2, 3, 4, 5]).slidingWindow(2);
         * // The values of `s.slidingWindow(2,2)`would be `[1,2],[2,3],[3,4],[4,5]`:
         * Bacon.fromArray([1, 2, 3, 4, 5]).slidingWindow(2, 2);
         */
        slidingWindow(max:number, min?:number):Property<E, A[]>;

        /**
         * @callback Observable#combine~f
         * @param {A} a
         * @param {B} b
         * @returns {C}
         */
        /**
         * @method Observable#combine
         * @description Combines the latest values of the two [EventStream]{@link Bacon.EventStream}s or [Property]{@link Bacon.Property}s using a two-arg function `f`. The result is a Property.
         * @param {Property<E, B>} property2
         * @param {Observable#combine~f} f
         * @returns {Property<E, C>}
         */
        combine<B, C>(property2:Property<E, B>, f:(a:A, b:B) => C):Property<E, C>;

        /**
         * @callback Observable#withStateMachine~f
         * @param {B} state
         * @param {Initial<A>|Next<A>|End<A>|Error<E>} event
         * @returns {[B, (Initial<C>|Next<C>|End<C>|Error<E>)[]]}
         */
        /**
         * @method Observable#withStateMachine
         * @description Lets you run a state machine on an [Observable]{@link Bacon.Observable}. Give it an initial state `initState` object and a state transformation function `f` that processes each incoming [Event]{@link Bacon.Event} and returns and array containing the next `state` and an array of output Event's.
         * @param {B} initState
         * @param {Observable#withStateMachine~f} f
         * @returns {EventStream<E, C>}
         * @example
         * // Calculate the total sum of all numbers in the stream and output the value on stream end:
         * Bacon.fromArray([1, 2, 3]).withStateMachine(0, (sum, event) => {
         *     if (event.hasValue()) {
         *         // had to cast to `number` because event:Bacon.Next<number>|Bacon.Error<{}>
         *         return [sum + <number>event.value(), []];
         *     } else if (event.isEnd()) {
    	 *         return [undefined, [new Bacon.Next(sum), event]];
    	 *     } else {
    	 *         return [sum, [event]];
    	 *     }
    	 * });
         */
        withStateMachine<B, C>(initState:B, f:(state:B, event:Initial<A>|Next<A>|End<A>|Error<E>) => [B, (Initial<C>|Next<C>|End<C>|Error<E>)[]]):EventStream<E, C>;

        /**
         * @method
         * @description Decodes input [Observable]{@link Bacon.Observable} using the given `mapping`. Is a bit like a switch-case or the decode function in Oracle SQL. The return value of `decode` is always a [Property]{@link Bacon.Property}.
         * @param {Object} mapping
         * @returns {Property<E, B>}
         * @example
         * {
    	 *     let property = Bacon.fromArray([1, 2, 3]).toProperty(),
    	 *         who = Bacon.fromArray(["A", "B", "C"]).toProperty();
    	 *     // The following would map the value 1 into the string "mike" and the value 2 into the value of the `who` property:
    	 *     property.decode({1: "mike", 2: who});
    	 *     // You can compose static and dynamic data quite freely, as in:
    	 *     property.decode({1: {type: "mike"}, 2: {type: "other", whoThen: who}});
    	 * }
         */
        decode<B>(mapping:Object):Property<E, B>;

        /**
         * @method
         * @description Creates a [Property]{@link Bacon.Property} that indicates whether Observable is awaiting `otherObservable`, i.e. has produced a value after the latest value from `otherObservable`.
         * @param {Observable<E, B>} otherObservable
         * @returns {Property<E, boolean>}
         * @example
         * {
    	 *     // This is handy for keeping track whether we are currently awaiting an AJAX response:
    	 *     let ajaxRequest = <Bacon.Observable<Error, JQueryXHR>>{},
    	 *         ajaxResponse = <Bacon.Observable<Error, JQueryXHR>>{},
    	 *         showAjaxIndicator = ajaxRequest.awaiting(ajaxResponse);
    	 * }
         */
        awaiting<B>(otherObservable:Observable<E, B>):Property<E, boolean>;
    }

    /**
     * @class EventStream
     * @augments Bacon.Observable
     * @description A stream of events.
     * */
    interface EventStream<E, A> extends Observable<E, A> {
        /**
         * @callback EventStream#map~f
         * @param {A} value
         * @returns {B}
         */
        /**
         * @method EventStream#map
         * @description Maps [EventStream]{@link Bacon.EventStream} values using given function `f`, returning a new EventStream. The `map` method, among many others, uses lazy evaluation.
         * @param {EventStream#map~f} f
         * @returns {EventStream<E, B>}
         * */
        map<B>(f:(value:A) => B):EventStream<E, B>;

        /**
         * @method
         * @description Maps [EventStream]{@link Bacon.EventStream} values using given `constant` value, returning a new EventStream. The `map` method, among many others, uses lazy evaluation.
         * @param {B} constant
         * @returns {EventStream<E, B>}
         * */
        map<B>(constant:B):EventStream<E, B>;

        /**
         * @method
         * @description Maps [EventStream]{@link Bacon.EventStream} values using given `propertyExtractor` string like ".keyCode", returning a new EventStream. So, if `propertyExtractor` is a string starting with a dot, the elements will be mapped to the corresponding field/function in the event value. For instance map(".keyCode") will pluck the keyCode field from the input values. If `keyCode` was a function, the result EventStream would contain the values returned by the function. The "Function Construction rules" apply here. The `map` method, among many others, uses lazy evaluation.
         * @param {string} propertyExtractor
         * @returns {EventStream<E, B>}
         * */
        map<B>(propertyExtractor:string):EventStream<E, B>;

        /**
         * @method
         * @description Maps [EventStream]{@link Bacon.EventStream} events to the current value of the given [Property]{@link Bacon.Property} `property`. This is equivalent to [Property.sampledBy]{@link Bacon.Property#sampledBy}.
         * @param {Property<E, B>} property
         * @returns {EventStream<E, B>}
         */
        map<B>(property:Property<E, B>):EventStream<E, B>;

        /**
         * @callback EventStream#mapError~f
         * @param {E} error
         * @returns {B}
         */
        /**
         * @method EventStream#mapError
         * @description Maps [EventStream]{@link Bacon.EventStream} [Error]{@link Bacon.Error}s using given function `f`. More specifically, feeds the "error" field of the Error event to the function and produces a [Next]{@link Bacon.Next} event based on the return value. The "Function Construction rules" apply here.
         * @param {EventStream#mapError~f} f
         * @returns {EventStream<E, A|B>}
         */
        mapError<B>(f:(error:E) => B):EventStream<E, A|B>;

        /**
         * @method
         * @description Returns an [EventStream]{@link Bacon.EventStream} containing [Error]{@link Bacon.Error} events only. Same as filtering with a function that always returns `false`.
         * @returns {EventStream<E, A>}
         */
        errors():EventStream<E, A>;

        /**
         * @method
         * @description Skips all [Error]{@link Bacon.Error}s.
         * @returns {EventStream<E, A>}
         */
        skipErrors():EventStream<E, A>;

        /**
         * @callback EventStream#mapEnd~f
         * @returns {A}
         */
        /**
         * @method EventStream#mapEnd
         * @description Adds an extra [Next]{@link Bacon.Next} event just before [End]{@link Bacon.End} to [EventStream]{@link Bacon.EventStream}. The value is created by calling the given function `f` when the source [EventStream]{@link Bacon.EventStream} ends.
         * @param {EventStream#mapEnd~f} f
         * @returns {EventStream<E, A>}
         */
        mapEnd(f:() => A):EventStream<E, A>;

        /**
         * @method
         * @description Adds an extra [Next]{@link Bacon.Next} event just before [End]{@link Bacon.End} to [EventStream]{@link Bacon.EventStream}. A static `value` is used.
         * @param {A} value
         * @returns {EventStream<E, A>}
         */
        mapEnd(value:A):EventStream<E, A>;

        /**
         * @callback EventStream#filter~f
         * @param {A} value
         * @returns {boolean}
         */
        /**
         * @method EventStream#filter
         * @description Filters [EventStream]{@link Bacon.EventStream} `value`s using a given predicate function `f`.
         * @param {EventStream#filter~f} f
         * @returns {EventStream<E, A>}
         */
        filter(f:(value:A) => boolean):EventStream<E, A>;

        /**
         * @method
         * @description Filters [EventStream]{@link Bacon.EventStream} values using a given `constant` value (`true` to include all, `false` to exclude all).
         * @param {boolean} bool
         * @returns {EventStream<E, A>}
         */
        filter(bool:boolean):EventStream<E, A>;

        /**
         * @method
         * @description Filters [EventStream]{@link Bacon.EventStream} values using a given `propertyExtractor` string (like ".isValuable").
         * @param {string} propertyExtractor
         * @returns {EventStream<E, A>}
         */
        filter(propertyExtractor:string):EventStream<E, A>;

        /**
         * @method
         * @description Filters [EventStream]{@link Bacon.EventStream} values based on the value of a [Property]{@link Bacon.Property} `property`. [Event]{@link Bacon.Event} will be included in output IF AND ONLY IF the `property` holds `true` at the time of the event.
         * @param {Property<E, boolean>} property
         * @returns {EventStream<E, A>}
         */
        filter(property:Property<E, boolean>):EventStream<E, A>;

        /**
         * @callback EventStream#takeWhile~f
         * @param {A} value
         * @returns {boolean}
         */
        /**
         * @method EventStream#takeWhile
         * @description Takes [EventStream]{@link Bacon.EventStream} values while given predicate function `f` holds `true`, and then ends.
         * @param {EventStream#takeWhile} f
         * @returns {EventStream<E, A>}
         */
        takeWhile(f:(value:A) => boolean):EventStream<E, A>;

        /**
         * @method
         * @description Takes [EventStream]{@link Bacon.EventStream} values while the value of a `property` holds `true`, and then ends.
         * @param {Property<E, boolean>} property
         * @returns {EventStream<E, A>}
         */
        takeWhile(property:Property<E, boolean>):EventStream<E, A>;

        /**
         * @method
         * @description Takes at most n elements from the [EventStream]{@link Bacon.EventStream}. Equal to `Bacon.never()` if `n <= 0`.
         * @param {number} n
         * @returns {EventStream<E, A>}
         */
        take(n:number):EventStream<E, A>;

        /**
         * @method
         * @description Takes elements from [EventStream]{@link Bacon.EventStream} until a [Next]{@link Bacon.Next} event appears in the EventStream `stream`. If `stream` ends without value, it is ignored.
         * @param {EventStream<E, B>} stream
         * @returns {EventStream<E, A>}
         */
        takeUntil<B>(stream:EventStream<E, B>):EventStream<E, A>;

        /**
         * @method
         * @description Takes the first element from the [EventStream]{@link Bacon.EventStream}. Essentially [Observable.take]{@link Bacon.EventStream#take}(1).
         * @returns {EventStream<E, A>}
         */
        first():EventStream<E, A>;

        /**
         * @method
         * @description Takes the last element from the [EventStream]{@link Bacon.EventStream}. None, if EventStream is empty.
         * @returns {EventStream<E, A>}
         * @example
         * // This creates the stream which doesn't produce any events and never ends:
         * Bacon.interval(1e1, 0).last();
         */
        last():EventStream<E, A>;

        /**
         * @method
         * @description Skips the first `n` elements from the [EventStream]{@link Bacon.EventStream}.
         * @param {number} n
         * @returns {EventStream<E, A>}
         */
        skip(n:number):EventStream<E, A>;

        /**
         * @method
         * @description Delays the [EventStream]{@link Bacon.EventStream} by given `delay` (in milliseconds).
         * @param {number} delay
         * @returns {EventStream<E, A>}
         */
        delay(delay:number):EventStream<E, A>;

        /**
         * @method EventStream#throttle
         * @description Throttles the [EventStream]{@link Bacon.EventStream} by given `delay` (in milliseconds). Events are emitted with the minimum interval of `delay`. The implementation is based on [EventStream.bufferWithTime]{@link Bacon.EventStream#bufferWithTime}.
         * @param {number} delay
         * @returns {EventStream<E, A>}
         */
        throttle(delay:number):EventStream<E, A>;

        /**
         * @method EventStream#debounce
         * @description Throttles the [EventStream]{@link Bacon.EventStream} by given `delay` (in milliseconds), but so that event is only emitted after the given "quiet period". The difference of [throttle]{@link Bacon.EventStream#throttle} and [debounce]{@link Bacon.EventStream#debounce} is the same as it is in the same methods in jQuery.
         * @param {number} delay
         * @returns {EventStream<E, A>}
         */
        debounce(delay:number):EventStream<E, A>;

        /**
         * @method
         * @description Passes the first event in the [EventStream]{@link Bacon.EventStream} through, but after that, only passes events after a given `delay` (in milliseconds) have passed since previous output.
         * @param {number} delay
         * @returns {EventStream<E, A>}
         */
        debounceImmediate(delay:number):EventStream<E, A>;

        /**
         * @callback EventStream#doAction~f
         * @param {A} value
         * @returns {void}
         */
        /**
         * @method EventStream#doAction
         * @description Returns an [EventStream]{@link Bacon.EventStream} where the function `f` is executed for each value, before dispatching to subscribers. This is useful for debugging, but also for stuff like calling the `preventDefault()` method for events.
         * @param {EventStream#doAction~f} f
         * @returns {EventStream<E, A>}
         */
        doAction(f:(value:A) => void):EventStream<E, A>;

        /**
         * @method
         * @description Returns an [EventStream]{@link Bacon.EventStream} where the `propertyExtractor` string is applied to each value, before dispatching to subscribers. This is useful for debugging, but also for stuff like calling the `preventDefault()` method for events.
         * @param {string} propertyExtractor
         * @returns {EventStream<E, A>}
         */
        doAction(propertyExtractor:string):EventStream<E, A>;

        /**
         * @callback EventStream#doError~f
         * @param {E} error
         * @returns {void}
         */
        /**
         * @method EventStream#doError
         * @description Returns an [EventStream]{@link Bacon.EventStream} where the function `f` is executed for each error, before dispatching to subscribers. That is, same as `doAction` but for errors.
         * @param {EventStream#doError~f} f
         * @returns {EventStream<E, A>}
         */
        doError(f:(error:E) => void):EventStream<E, A>;

        /**
         * @method
         * @description Returns an [EventStream]{@link Bacon.EventStream} that inverts boolean values.
         * @returns {EventStream<E, boolean>}
         */
        not():EventStream<E, boolean>;

        /**
         * @method EventStream#log
         * @description Logs each value of the [EventStream]{@link Bacon.EventStream} to the console. It optionally takes a `label` argument to pass to `console.log()` alongside each value. To assist with chaining, it returns the original EventStream. Note that as a side-effect, the EventStream will have a constant listener and will not be garbage-collected. So, use this for debugging only and remove from production code.
         * @param {string} [label]
         * @returns {EventStream<E, A>}
         */
        log(label?:string):EventStream<E, A>;

        /**
         * @method EventStream#doLog
         * @description Logs each value of the [EventStream]{@link Bacon.EventStream} to the console. [doLog]{@link Bacon.EventStream#doLog} behaves like [log]{@link Bacon.EventStream#log} but does not subscribe to the EventStream. You can think of `doLog` as a logger function that – unlike `log` – is safe to use in production. `doLog` is safe, because it does not cause the same surprising side-effects as `log` does.
         * @param {string} [label]
         * @returns {EventStream<E, A>}
         */
        doLog(label?:string):EventStream<E, A>;

        /**
         * @method
         * @description Ends the [EventStream]{@link Bacon.EventStream} on first [Error]{@link Bacon.Error} event. The error is included in the output of the returned EventStream.
         * @returns {EventStream<E, A>}
         */
        endOnError():EventStream<E, A>;

        /**
         * @callback EventStream#endOnError~f
         * @param {E} error
         * @returns {boolean}
         */
        /**
         * @method EventStream#endOnError
         * @description Ends the [EventStream]{@link Bacon.EventStream} on first [Error]{@link Bacon.Error} event for which the given predicate function `f` returns `true`. The error is included in the output of the returned EventStream.
         * @param {EventStream#endOnError} f
         * @returns {EventStream<E, A>}
         */
        endOnError(f:(error:E) => boolean):EventStream<E, A>;

        /**
         * @callback EventStream#withHandler~f
         * @param {Initial<A>|Next<A>|End<A>|Error<E>} event
         * @returns {*}
         */
        /**
         * @method EventStream#withHandler
         * @description Lets you do more custom event handling on [EventStream]{@link Bacon.EventStream}: you get all events to your function `f` and you can output any number of events and end the stream if you choose. Note that it's important to return the value from `this.push` so that the connection to the underlying stream will be closed when no more events are needed.
         * @param {EventStream#withHandler~f} f
         * @returns {EventStream<E, A>}
         * @example
         * // Send an error and end the stream in case a value is below zero:
         * Bacon.fromArray([1, 2, -3, 3]).withHandler(function (event) {
    	 *     if (event.hasValue() && event.value() < 0) {
    	 *         this.push(new Bacon.Error("Value below zero"));
    	 *         return this.push(new Bacon.End());
    	 *     } else {
    	 *         return this.push(event);
    	 *     }
    	 * });
         */
        withHandler(f:(event:Initial<A>|Next<A>|End<A>|Error<E>) => any):EventStream<E, A>;

        /**
         * @method
         * @description Sets the name of the [EventStream]{@link Bacon.EventStream}. Overrides the default implementation of `toString` and `inspect`. Returns itself.
         * @param {string} newName
         * @returns {EventStream<E, A>}
         */
        name(newName:string):EventStream<E, A>;

        /**
         * @method
         * @description Sets the structured description of the [EventStream]{@link Bacon.EventStream}. The `toString` and `inspect` methods use this data recursively to create a string representation for the `EventStream`. This method is probably useful for Bacon core/library/plugin development only.
         * @param {...*} param
         * @returns {EventStream<E, A>}
         * @example
         * {
    	 *     let src = Bacon.once(1),
    	 *         obs = src.map(x => -x);
    	 *
    	 *     console.log(obs.toString());
    	 *     // Bacon.once(1).map(function)
    	 *
    	 *     obs.withDescription(src, "times", -1);
    	 *     console.log(obs.toString());
    	 *     // Bacon.once(1).times(-1)
    	 */
        withDescription(...param:any[]):EventStream<E, A>;

        /**
         * @callback EventStream#groupBy1~keyF
         * @param {A} value
         * @returns {B}
         */
        /**
         * @method EventStream#groupBy1
         * @description Groups [EventStream]{@link Bacon.EventStream} events to new EventStream's by `keyF`.
         * @param {EventStream#groupBy1~keyF} keyF
         * @returns {EventStream<E, EventStream<E, A>>}
         */
        groupBy<B>(keyF:(value:A) => B):EventStream<E, EventStream<E, A>>;

        /**
         * @callback keyF
         * @param {A} value
         * @returns {B}
         */
        /**
         * @callback limitF
         * @param {EventStream<E, A>} groupedStream
         * @param {Initial<A>|Next<A>|End<A>|Error<E>} groupStartingEvent
         * @returns {EventStream<E, C>}
         */
        /**
         * @description Groups [EventStream]{@link Bacon.EventStream} events to new EventStream's by `keyF`. `limitF` is provided to limit grouped stream life. EventStream transformed by `limitF` is passed on if provided. `limitF` gets grouped stream and the original [Event]{@link Bacon.Event} causing the EventStream to start as parameters.
         * @param {keyF} keyF
         * @param {limitF} limitF
         * @returns {EventStream<E, EventStream<E, C>>} Grouped streams.
         */
        groupBy<B, C>(keyF:(value:A) => B, limitF:(groupedStream:EventStream<E, A>, groupStartingEvent:Initial<A>|Next<A>|End<A>|Error<E>) => EventStream<E, C>):EventStream<E, EventStream<E, C>>;

        /**
         * @callback EventStream#subscribe~f
         * @param {Event<A>} event
         * @returns {void|NoMore}
         */
        /**
         * @callback EventStream#subscribe~unsubscribe
         * @returns {void}
         */
        /**
         * @method EventStream#subscribe
         * @description Subscribes a given handler function `f` to [EventStream]{@link Bacon.EventStream}. Function will receive [Event]{@link Bacon.Event} objects. The [subscribe]{@link EventStream#subscribe} call returns an [unsubscribe function]{@link EventStream#subscribe~unsubscribe} that you can call to unsubscribe. You can also unsubscribe by returning [Bacon.noMore]{@link Bacon.noMore} from the handler function as a reply to an Event.
         * @param {EventStream#subscribe~f} f
         * @returns {EventStream#subscribe~unsubscribe}
         */
        subscribe(f:(event:Event<A>) => void|NoMore):() => void;

        /**
         * @callback EventStream#onValue~f
         * @param {A} value
         * @returns {void}
         */
        /**
         * @callback EventStream#onValue~unsubscribe
         * @returns {void}
         */
        /**
         * @method EventStream#onValue
         * @description Subscribes a given handler function `f` to [EventStream]{@link Bacon.EventStream}. Function will be called for each new value in the EventStream. This is the simplest way to assign a side-effect to a EventStream. The difference to the [subscribe]{@link Bacon.EventStream#subscribe} method is that the actual EventStream values are received, instead of [Event]{@link Bacon.Event} objects. Just like `subscribe`, this method returns a function for `unsubscribe`ing.
         * @param {EventStream#onValue~f} f
         * @returns {EventStream#onValue~unsubscribe}
         */
        onValue(f:(value:A) => void):() => void;

        /**
         * @callback EventStream#onValues~f
         * @param {*[]} args
         * @returns {void}
         */
        /**
         * @callback EventStream#onValues~unsubscribe
         * @returns {void}
         */
        /**
         * @method EventStream#onValues
         * @description Subscribes a given handler function `f` to [EventStream]{@link Bacon.EventStream}. Like [EventStream.onValue]{@link Bacon.EventStream#onValue}, but splits the value (assuming its an array) as function arguments to `f`.
         * @param {EventStream#onValues~f} f
         * @returns {EventStream#onValues~unsubscribe}
         */
        onValues(f:(...args:any[]) => void):() => void;

        /**
         * @callback EventStream#skipDuplicates~isEqual
         * @param {A} oldValue
         * @param {A} newValue
         * @returns {boolean}
         */
        /**
         * @method EventStream#skipDuplicates
         * @description Drops consecutive equal elements of the [EventStream]{@link Bacon.EventStream}. Uses the === operator for equality checking by default. If the `isEqual` argument is supplied, checks by calling [isEqual]{@link EventStream#skipDuplicates~isEqual}. For instance, to do a deep comparison, you can use the `isEqual` function from underscore.js like `stream.skipDuplicates(_.isEqual)`.
         * @param {EventStream#skipDuplicates~isEqual} [isEqual]
         * @returns {EventStream<E, A>}
         * @example
         * Bacon.fromArray([1, 2, 2, 1]).skipDuplicates().log();
         * // > returns [1, 2, 1] in an order
         */
        skipDuplicates(isEqual?:(oldValue:A, newValue:A) => boolean):EventStream<E, A>;

        /**
         * @method
         * @description Concatenates two [EventStream]{@link Bacon.EventStream}s into one so that it will deliver events from EventStream until it ends and then deliver events from `otherStream`. This means too that events from `otherStream`, occurring before the end of EventStream will not be included in the result EventStream.
         * @param {EventStream<E, A>} otherStream
         * @returns {EventStream<E, A>}
         */
        concat(otherStream:EventStream<E, A>):EventStream<E, A>;

        /**
         * @method
         * @description Merges two [EventStream]{@link Bacon.EventStream}s into one that delivers events from both.
         * @param {EventStream<E, A>} otherStream
         * @returns {EventStream<E, A>}
         */
        merge(otherStream:EventStream<E, A>):EventStream<E, A>;

        /**
         * @method
         * @description Pauses and buffers the [EventStream]{@link Bacon.EventStream} if last event in `valve` is truthy. All buffered events are released when `valve` becomes falsy.
         * @param {Observable<E, B>} valve
         * @returns {EventStream<E, A>}
         */
        holdWhen<B>(valve:Observable<E, B>):EventStream<E, A>;

        /**
         * @method
         * @description Adds a starting `value` to the [EventStream]{@link Bacon.EventStream}, i.e. concats a EventStream containing a single `value` with this EventStream.
         * @param {A} value
         * @returns {EventStream<E, A>}
         */
        startWith(value:A):EventStream<E, A>;

        /**
         * @callback EventStream#skipWhile~f
         * @param {A} value
         * @returns {boolean}
         */
        /**
         * @method EventStream#skipWhile
         * @description Skips elements in the [EventStream]{@link Bacon.EventStream} until the given predicate function `f` returns falsy once, and then lets all events pass through.
         * @param {EventStream#skipWhile~f} f
         * @returns {EventStream<E, A>}
         */
        skipWhile(f:(value:A) => boolean):EventStream<E, A>;

        /**
         * @method
         * @description Skips elements in the [EventStream]{@link Bacon.EventStream} until the value of the given [Property]{@link Bacon.Property} `property` is falsy once, and then lets all events pass through.
         * @param {Property<E, B>} property
         * @returns {EventStream<E, A>}
         */
        skipWhile<B>(property:Property<E, B>):EventStream<E, A>;

        /**
         * @method
         * @description Skips elements from the [EventStream]{@link Bacon.EventStream} until a [Next]{@link Bacon.Next} event appears in `stream2`. In other words, starts delivering values from `stream` after first event appears in `stream2`.
         * @param {EventStream<E, B>} stream2
         * @returns {EventStream<E, A>}
         */
        skipUntil<B>(stream2:EventStream<E, B>):EventStream<E, A>;

        /**
         * @method
         * @description Buffers the [EventStream]{@link Bacon.EventStream} with given `delay` (in milliseconds). The buffer is flushed at most once in the given `delay`.
         * @param {number} delay
         * @returns {EventStream<E, A[]>}
         * @example
         * // You might get two events containing [1,2,3,4] and [5,6,7] respectively, given that the flush occurs between numbers 4 and 5:
         * Bacon.fromArray([1, 2, 3, 4, 5, 6, 7]).bufferWithTime(0);
         */
        bufferWithTime(delay:number):EventStream<E, A[]>;

        /**
         * @callback EventStream#bufferWithTime~f
         * @param {EventStream#bufferWithTime~defer} defer
         * @returns {void}
         */
        /**
         * @callback EventStream#bufferWithTime~defer
         * @param {...*} args
         * @returns {void}
         */
        /**
         * @method EventStream#bufferWithTime
         * @description Buffers the [EventStream]{@link Bacon.EventStream} with given "defer-function" `f`.
         * @param {EventStream#bufferWithTime~f} f
         * @returns {EventStream<E, A[]>}
         * @example
         * // Here's an equivalent to `stream.bufferWithTime(10)`:
         * let stream = Bacon.fromArray([1, 2, 3, 4, 5, 6, 7]);
         * stream.bufferWithTime(f => { setTimeout(f, 10); }); }
         */
        bufferWithTime(f:(defer:(...args:any[]) => void) => void):EventStream<E, A[]>;

        /**
         * @method
         * @description Buffers the [EventStream]{@link Bacon.EventStream} events with given `count`. The buffer is flushed when it contains the given `count` of elements.
         * @param {number} count
         * @returns {EventStream<E, A[]>}
         * @example
         * // You will get output events with values `[1, 2]`, `[3, 4]` and `[5]`.
         * Bacon.fromArray([1, 2, 3, 4, 5]).bufferWithCount(2);
         */
        bufferWithCount(count:number):EventStream<E, A[]>;

        /**
         * @method
         * @description Buffers the [EventStream]{@link Bacon.EventStream} events and flushes when either the buffer contains the given `count` of elements or the given `delay` (in milliseconds) has passed since last buffered event.
         * @param {number} delay
         * @param {number} count
         * @returns {EventStream<E, A[]>}
         */
        bufferWithTimeOrCount(delay:number, count:number):EventStream<E, A[]>;

        /**
         * @method EventStream#toProperty
         * @description Creates a [Property]{@link Bacon.Property} based on the [EventStream]{@link Bacon.EventStream}. Without arguments, you'll get a Property without an initial value and will get its first actual value from the EventStream, and after that it'll always have a current value. Given `initialValue` will be used as the current value until the first value comes from the EventStream.
         * @param {A} [initialValue]
         * @returns {Property<E, A>}
         */
        toProperty(initialValue?:A):Property<E, A>;
    }

    var EventStream:{
        /**
         * @callback EventStream#new~subscribe
         * @param {EventStream#new~sink} sink
         * @returns {EventStream#new~unsubscribe}
         */
        /**
         * @callback EventStream#new~sink
         * @param {More|NoMore|(A|Initial<A>|Next<A>|End<A>|Error<E>)|(A|Initial<A>|Next<A>|End<A>|Error<E>)[]} value
         * @returns {void}
         */
        /**
         * @callback EventStream#new~unsubscribe
         * @returns {void}
         */
        /**
         * @constructor EventStream#new
         * @constructs Bacon.EventStream
         * @description Creates an [EventStream]{@link Bacon.EventStream} with the given `subscribe` function.
         * @param {EventStream#new~subscribe} subscribe
         * @returns {EventStream<E, A>}
         */
        new<E, A>(subscribe:(sink:(value:More|NoMore|(A|Initial<A>|Next<A>|End<A>|Error<E>)|(A|Initial<A>|Next<A>|End<A>|Error<E>)[]) => void) => (() => void)):EventStream<E, A>;
    };

    /**
     * @class Property
     * @augments Bacon.Observable
     * @description A reactive property. Has the concept of "current value". You can create a Property from an [EventStream]{@link Bacon.EventStream} by using either [EventStream.toProperty]{@link Bacon.EventStream#toProperty} or [Observable.scan]{@link Bacon.Observable#scan} method. Note: depending on how a Property is created, it may or may not have an initial value. The current value stays as its last value after the EventStream has ended.
     * */
    interface Property<E, A> extends Observable<E, A> {
        /**
         * @callback Property#map~f
         * @param {A} value
         * @returns {B}
         */
        /**
         * @method Property#map
         * @description Maps the [Property]{@link Bacon.Property} values using given function `f`, returning a new Property. This method, among many others, uses lazy evaluation.
         * @param {Property#map~f} f
         * @returns {Property<E, B>}
         * */
        map<B>(f:(value:A) => B):Property<E, B>;

        /**
         * @method
         * @description Maps the [Property]{@link Bacon.Property} values using given `constant` value, returning a new Property. This method, among many others, uses lazy evaluation.
         * @param {B} constant
         * @returns {Property<E, B>}
         * */
        map<B>(constant:B):Property<E, B>;

        /**
         * @method
         * @description Maps the [Property]{@link Bacon.Property} values using given `propertyExtractor` string like ".keyCode", returning a new Property. So, if f is a string starting with a dot, the elements will be mapped to the corresponding field/function in the event value. For instance map(".keyCode") will pluck the keyCode field from the input values. If "keyCode" was a function, the resulting Property would contain the values returned by the function. This method, among many others, uses lazy evaluation.
         * @param {string} propertyExtractor
         * @returns {Property<E, B>}
         * */
        map<B>(propertyExtractor:string):Property<E, B>;

        /**
         * @callback Property#mapError~f
         * @param {E} error
         * @returns {B}
         */
        /**
         * @method Property#mapError
         * @description Maps the [Property]{@link Bacon.Property} errors using given function `f`. More specifically, feeds the "error" field of the [Error]{@link Bacon.Error} event to the function `f` and produces a [Next]{@link Bacon.Next} event based on the return value.
         * @param {Property#mapError~f} f
         * @returns {Property<E, A|B>}
         */
        mapError<B>(f:(error:E) => B):Property<E, A|B>;

        /**
         * @method
         * @description Returns a [Property]{@link Bacon.Property} containing [Error]{@link Bacon.Error} events only. Same as filtering with a function that always returns false.
         * @returns {Property<E, A>}
         */
        errors():Property<E, A>;

        /**
         * @method
         * @description Skips all [Error]{@link Bacon.Error}s.
         * @returns {Property<E, A>}
         */
        skipErrors():Property<E, A>;

        /**
         * @callback Property#mapEnd~f
         * @returns {A}
         */
        /**
         * @method Property#mapEnd
         * @description Adds an extra [Next]{@link Bacon.Next} event just before [End]{@link Bacon.End} of the [Property]{@link Bacon.Property}. The value is created by calling the given function `f` when the source Property ends.
         * @param {Property#mapEnd~f} f
         * @returns {Property<E, A>}
         */
        mapEnd(f:() => A):Property<E, A>;

        /**
         * @method
         * @description Adds an extra [Next]{@link Bacon.Next} event just before [End]{@link Bacon.End} of the [Property]{@link Bacon.Property}. A static `value` is used.
         * @param {A} value
         * @returns {Property<E, A>}
         */
        mapEnd(value:A):Property<E, A>;

        /**
         * @callback Property#filter~f
         * @param {A} value
         * @returns {boolean}
         */
        /**
         * @method Property#filter
         * @description Filters the [Property]{@link Bacon.Property} values using a given predicate function `f`.
         * @param {Property#filter~f} f
         * @returns {Property<E, A>}
         */
        filter(f:(value:A) => boolean):Property<E, A>;

        /**
         * @method
         * @description Filters the [Property]{@link Bacon.Property} values using a given constant `bool` value (`true` to include all, `false` to exclude all).
         * @param {boolean} bool
         * @returns {Property<E, A>}
         */
        filter(bool:boolean):Property<E, A>;

        /**
         * @method
         * @description Filters the [Property]{@link Bacon.Property} values using a given `propertyExtractor` string (like ".isValuable").
         * @param {string} propertyExtractor
         * @returns {Property<E, A>}
         */
        filter(propertyExtractor:string):Property<E, A>;

        /**
         * @method
         * @description Filters the [Property]{@link Bacon.Property} values based on the value of the Property `property`. Event will be included in output IF AND ONLY IF the `property` holds `true` at the time of the event.
         * @param {Property<E, boolean>} property
         * @returns {Property<E, A>}
         */
        filter(property:Property<E, boolean>):Property<E, A>;

        /**
         * @callback Property#takeWhile~f
         * @param {A} value
         * @returns {boolean}
         */
        /**
         * @method Property#takeWhile
         * @description Takes the [Property]{@link Bacon.Property} values while given predicate function `f` holds `true`, and then ends.
         * @param {Property#takeWhile~f} f
         * @returns {Property<E, A>}
         */
        takeWhile(f:(value:A) => boolean):Property<E, A>;

        /**
         * @method
         * @description Takes the [Property]{@link Bacon.Property} values while the value of a `property` holds `true`, and then ends.
         * @param {Property<E, boolean>} property
         * @returns {Property<E, A>}
         */
        takeWhile(property:Property<E, boolean>):Property<E, A>;

        /**
         * @method Property#take
         * @description Takes at most `n` elements from the [Property]{@link Bacon.Property}. Equal to `Bacon.never()` if `n <= 0`.
         * @param {number} n
         * @returns {Property<E, A>}
         */
        take(n:number):Property<E, A>;

        /**
         * @method
         * @description Takes elements from the [Property]{@link Bacon.Property} until a [Next]{@link Bacon.Next} event appears in the `stream`. If `stream` ends without value, it is ignored.
         * @param {EventStream<E, B>} stream
         * @returns {Property<E, A>}
         */
        takeUntil<B>(stream:EventStream<E, B>):Property<E, A>;

        /**
         * @method
         * @description Takes the first element from the [Property]{@link Bacon.Property}. Essentially [Property.take]{@link Bacon.Property#take}(1).
         * @returns {Property<E, A>}
         */
        first():Property<E, A>;

        /**
         * @method
         * @description Takes the last element from the [Property]{@link Bacon.Property}. None, if Property is empty.
         * @returns {Property<E, A>}
         * @example
         * // This creates the property which doesn't produce any events and never ends:
         * Bacon.interval(1e1, 0).toProperty().last();
         */
        last():Property<E, A>;

        /**
         * @method
         * @description Skips the first `n` elements from the [Property]{@link Bacon.Property}.
         * @param {number} n
         * @returns {Property<E, A>}
         */
        skip(n:number):Property<E, A>;

        /**
         * @method
         * @description Delays the [Property]{@link Bacon.Property} by given `delay` (in milliseconds). Does not delay the initial value of a Property.
         * @param {number} delay
         * @returns {Property<E, A>}
         */
        delay(delay:number):Property<E, A>;

        /**
         * @method Property#throttle
         * @description Throttles the [Property]{@link Bacon.Property} by given `delay` (in milliseconds). Events are emitted with the minimum interval of `delay`. The implementation is based on [EventStream.bufferWithTime]{@link Bacon.EventStream#bufferWithTime}. Does not affect emitting the initial value of a Property.
         * @param {number} delay
         * @returns {Property<E, A>}
         */
        throttle(delay:number):Property<E, A>;

        /**
         * @method Property#debounce
         * @description Throttles the [Property]{@link Bacon.Property} by given `delay` (in milliseconds), but so that event is only emitted after the given "quiet period". Does not affect emitting the initial value of a Property. The difference of [throttle]{@link Bacon.Property#throttle} and [debounce]{@link Bacon.Property#debounce} is the same as it is in the same methods in jQuery.
         * @param {number} delay
         * @returns {Property<E, A>}
         */
        debounce(delay:number):Property<E, A>;

        /**
         * @method
         * @description Passes the first event in the [Property]{@link Bacon.Property} through, but after that, only passes events after a given `delay` (in milliseconds) have passed since previous output.
         * @param {number} delay
         * @returns {Property<E, A>}
         */
        debounceImmediate(delay:number):Property<E, A>;

        /**
         * @callback Property#doAction~f
         * @param {A} value
         * @returns {void}
         */
        /**
         * @method Property#doAction
         * @description Returns a [Property]{@link Bacon.Property} where the function `f` is executed for each value, before dispatching to subscribers. This is useful for debugging, but also for stuff like calling the `preventDefault()` method for events.
         * @param {Property#doAction~f} f
         * @returns {Property<E, A>}
         */
        doAction(f:(value:A) => void):Property<E, A>;

        /**
         * @method
         * @description Returns a [Property]{@link Bacon.Property} where the `propertyExtractor` string is applied to each value, before dispatching to subscribers. This is useful for debugging, but also for stuff like calling the `preventDefault()` method for events.
         * @param {string} propertyExtractor
         * @returns {Property<E, A>}
         */
        doAction(propertyExtractor:string):Property<E, A>;

        /**
         * @callback Property#doError~f
         * @param {E} error
         * @returns {void}
         */
        /**
         * @method Property#doError
         * @description Returns a [Property]{@link Bacon.Property} where the function `f` is executed for each error, before dispatching to subscribers. That is, same as [doAction]{@link Bacon.Property#doAction} but for [Error]{@link Bacon.Error}s.
         * @param {Property#doError~f} f
         * @returns {Property<E, A>}
         */
        doError(f:(error:E) => void):Property<E, A>;

        /**
         * @method
         * @description Returns a [Property]{@link Bacon.Property} that inverts boolean values.
         * @returns {Property<E, boolean>}
         */
        not():Property<E, boolean>;

        /**
         * @method Property#log
         * @description Logs each value of the [Property]{@link Bacon.Property} to the console. It optionally takes a `label` argument to pass to `console.log()` alongside each value. To assist with chaining, it returns the original Property. Note that as a side-effect, the Property will have a constant listener and will not be garbage-collected. So, use this for debugging only and remove from production code.
         * @param {string} [label]
         * @returns {Property<E, A>}
         */
        log(label?:string):Property<E, A>;

        /**
         * @method Property#doLog
         * @description Logs each value of the [Property]{@link Bacon.Property} to the console. [doLog]{@link Bacon.Property#doLog} behaves like [log]{@link Bacon.Property#log} but does not subscribe to the Property. You can think of `doLog` as a logger function that – unlike `log` – is safe to use in production. `doLog` is safe, because it does not cause the same surprising side-effects as `log` does.
         * @param {string} [label]
         * @returns {Property<E, A>}
         */
        doLog(label?:string):Property<E, A>;

        /**
         * @method
         * @description Ends the [Property]{@link Bacon.Property} on first [Error]{@link Bacon.Error} event. The error is included in the output of the returned Property.
         * @returns {Property<E, A>}
         */
        endOnError():Property<E, A>;

        /**
         * @callback Property#endOnError~f
         * @param {E} error
         * @returns {boolean}
         */
        /**
         * @method Property#endOnError
         * @description Ends the [Property]{@link Bacon.Property} on first [Error]{@link Bacon.Error} event for which the given predicate function `f` returns `true`. The error is included in the output of the returned Property.
         * @param {Property#endOnError~f} f
         * @returns {Property<E, A>}
         */
        endOnError(f:(error:E) => boolean):Property<E, A>;

        /**
         * @callback Property#withHandler~f
         * @param {Initial<A>|Next<A>|End<A>|Error<E>} event
         * @returns {*}
         */
        /**
         * @method Property#withHandler
         * @description Lets you do more custom event handling on the [Property]{@link Bacon.Property}: you get all events to your function `f` and you can output any number of [Event]{@link Bacon.Event}s and end the Property if you choose. Note that it's important to return the value from `this.push` so that the connection to the underlying stream will be closed when no more events are needed.
         * @param {Property#withHandler~f} f
         * @returns {Property<E, A>}
         * @example
         * // Send an error and end the stream in case a value is below zero:
         * Bacon.fromArray([1, 2, -3, 3]).withHandler(function (event) {
    	 *     if (event.hasValue() && event.value() < 0) {
    	 *         this.push(new Bacon.Error("Value below zero"));
    	 *         return this.push(new Bacon.End());
    	 *     } else {
    	 *         return this.push(event);
    	 *     }
    	 * });
         */
        withHandler(f:(event:Initial<A>|Next<A>|End<A>|Error<E>) => any):Property<E, A>;

        /**
         * @method
         * @description Sets the `newName` of the [Property]{@link Bacon.Property}. Overrides the default implementation of `toString` and `inspect`. Returns itself.
         * @param {string} newName
         * @returns {Property<E, A>}
         */
        name(newName:string):Property<E, A>;

        /**
         * @method
         * @description Sets the structured description of the [Property]{@link Bacon.Property}. The `toString` and `inspect` methods use this data recursively to create a string representation for the Property. This method is probably useful for Bacon core/library/plugin development only.
         * @param {...*} param
         * @returns {Property<E, A>}
         * @example
         * let src = Bacon.once(1),
         *   obs = src.map(x => -x);
         *
         * console.log(obs.toString());
         * // Bacon.once(1).map(function)
         *
         * obs.withDescription(src, "times", -1);
         * console.log(obs.toString());
         * // Bacon.once(1).times(-1)
         */
        withDescription(...param:any[]):Property<E, A>;

        /**
         * @method
         * @description Creates an [EventStream]{@link Bacon.EventStream} based on this [Property]{@link Bacon.Property}. The EventStream contains also an event for the current value of this Property at the time this method was called.
         * @returns {EventStream<E, A>}
         */
        toEventStream():EventStream<E, A>;

        /**
         * @callback Property#subscribe~f
         * @param {Event<A>} event
         * @returns {void}
         */
        /**
         * @callback Property#subscribe~unsubscribe
         * @returns {void}
         */
        /**
         * @method Property#subscribe
         * @description Subscribes a handler function `f` to [Property]{@link Bacon.Property}. If there's a current value, an [Initial]{@link Bacon.Initial} event will be pushed immediately. [Next]{@link Bacon.Next} event will be pushed on updates and an [End]{@link Bacon.End} event in case the source Property ends. Returns a function that you call to `unsubscribe`.
         * @param {Property#subscribe~f} f
         * @returns {Property#subscribe~unsubscribe}
         */
        subscribe(f:(event:Event<A>) => void):() => void;

        /**
         * @callback Property#onValue~f
         * @param {A} value
         * @returns {void}
         */
        /**
         * @callback Property#onValue~unsubscribe
         * @returns {void}
         */
        /**
         * @method Property#onValue
         * @description Subscribes a handler function `f` to [Property]{@link Bacon.Property}. Similar to [EventStream.onValue]{@link Bacon.EventStream#onValue}, except that also pushes the initial value of the Property, in case there is one. Just like [subscribe]{@link Bacon.Property#subscribe}, this method returns a function for `unsubscribe`ing.
         * @param {Property#onValue~f} f
         * @returns {Property#onValue~unsubscribe}
         */
        onValue(f:(value:A) => void):() => void;

        /**
         * @callback Property#onValues~f
         * @param {*[]} args
         * @returns {void}
         */
        /**
         * @callback Property#onValues~unsubscribe
         * @returns {void}
         */
        /**
         * @method Property#onValues
         * @description Subscribes a handler function `f` to [Property]{@link Bacon.Property}. Like [onValue]{@link Bacon.Property#onValue}, but splits the value (assuming its an array) as function arguments to `f`.
         * @param {Property#onValues~f} f
         * @returns {Property#onValues~unsubscribe}
         */
        onValues(f:(...args:any[]) => void):() => void;

        /**
         * @method Property#assign
         * @description Calls the `method` of the given `object` with each value of this [Property]{@link Bacon.Property}. You can optionally supply `params` which will be used as the first arguments of the `method` call. Note that the [assign]{@link Bacon.Property#assign} method is actually just a synonym for [onValue]{@link Bacon.Property#onValue}.
         * @param {Object} obj
         * @param {string} method
         * @param {...*} params
         * @returns {void}
         * @example
         * let property = Bacon.fromArray([1, 2, 3, 4, 5]).toProperty();
         * // If you want to assign your Property to the "disabled" attribute of a JQuery object, you can do this:
         * property.assign($("#my-button"), "attr", "disabled");
         * // A simpler example would be to toggle the visibility of an element based on a Property:
         * property.assign($("#my-button"), "toggle");
         */
        assign(obj:Object, method:string, ...params:any[]):void;

        /**
         * @method
         * @description Creates an [EventStream]{@link Bacon.EventStream} by sampling the [Property]{@link Bacon.Property} value at given `interval` (in milliseconds).
         * @param {number} interval
         * @returns {EventStream<E, A>}
         */
        sample(interval:number):EventStream<E, A>;

        /**
         * @method Property#sampledBy
         * @description Creates an [EventStream]{@link Bacon.EventStream} by sampling the [Property]{@link Bacon.Property} value at each event from the given `stream`. The result EventStream will contain the value at each event in the source Property.
         * @param {EventStream<E, B>} stream
         * @returns {EventStream<E, A>}
         */
        sampledBy<B>(stream:EventStream<E, B>):EventStream<E, A>;

        /**
         * @method
         * @description Creates a [Property]{@link Bacon.Property} by sampling the value at each event from the given [Property]{@link Bacon.Property} `property`. The result Property will contain the value at each event in the source Property.
         * @param {Property<E, B>} property
         * @returns {Property<E, A>}
         */
        sampledBy<B>(property:Property<E, B>):Property<E, A>;

        /**
         * @callback Property#sampledBy~f
         * @param {A} propertyValue
         * @param {B} samplerValue
         * @returns {C}
         */
        /**
         * @method Property#sampledBy
         * @description Samples the [Property]{@link Bacon.Property} on `streamOrProperty` events. The result values will be formed using the given function `f`.
         * @param {Observable<E, B>} streamOrProperty
         * @param {Property#sampledBy~f} f
         * @returns {EventStream<E, C>}
         */
        sampledBy<B, C>(streamOrProperty:Observable<E, B>, f:(propertyValue:A, samplerValue:B) => C):EventStream<E, C>;

        /**
         * @callback Property#skipDuplicates~isEqual
         * @param {A} oldValue
         * @param {A} newValue
         * @returns {boolean}
         */
        /**
         * @method Property#skipDuplicates
         * @description Drops consecutive equal elements. Uses the `===` operator for equality checking by default. If the `isEqual` argument is supplied, checks by calling `isEqual(oldValue, newValue)`. The old name for this method was `distinctUntilChanged`.
         * @param {Property#skipDuplicates~isEqual} [isEqual]
         * @returns {Property<E, A>}
         */
        skipDuplicates(isEqual?:(oldValue:A, newValue:A) => boolean):Property<E, A>;

        /**
         * @method Property#changes
         * @description Returns an [EventStream]{@link Bacon.EventStream} of [Property]{@link Bacon.Property} value changes. Returns exactly the same events as the Property itself, except any [Initial]{@link Bacon.Initial} events (the stream DOES NOT include an event for the current value of the Property at the time this method was called). Note that [Property.changes]{@link Bacon.Property#changes} DOES NOT skip duplicate values, use [Property.skipDuplicates]{@link Bacon.Property#skipDuplicates} for that.
         * @returns {EventStream<E, A>}
         */
        changes():EventStream<E, A>;

        /**
         * @method
         * @description Combines [Property]{@link Bacon.Property}s with the && operator.
         * @param {Property<E, A>} other
         * @returns {Property<E, A>}
         */
        and(other:Property<E, A>):Property<E, A>;

        /**
         * @method
         * @description Combines [Property]{@link Bacon.Property}s with the || operator.
         * @param {Property<E, A>} other
         * @returns {Property<E, A>}
         */
        or(other:Property<E, A>):Property<E, A>;

        /**
         * @method
         * @description Adds an initial "default" value for the [Property]{@link Bacon.Property}. If the Property doesn't have an initial value of it's own, the given `value` will be used as the initial value. If the property has an initial value of its own, the given `value` will be ignored.
         * @param {A} value
         * @returns {Property<E, A>}
         */
        startWith(value:A):Property<E, A>;
    }

    /**
     * @function Bacon.combineAsArray
     * @description Combines [Property]{@link Bacon.Property}s, [EventStream]{@link Bacon.EventStream}s and constant values so that the result Property will have an array of all property values as its value. The input array may contain both Properties and EventStreams. In the latter case, the stream is first converted into a Property and then combined with the other Property's.
     * @param {(A|Observable<E, A>)[]} streams
     * @returns {Property<E, A[]>}
     */
    function combineAsArray<E, A>(streams:(A|Observable<E, A>)[]):Property<E, A[]>;

    /**
     * @function
     * @description Combines [Property]{@link Bacon.Property}s, [EventStream]{@link Bacon.EventStream}s and constant values so that the result Property will have an array of all property values as its value. Like [Bacon.combineAsArray]{@link Bacon.combineAsArray}, but `streams` are provided as a list of arguments as opposed to a single array.
     * @param {...(A|Observable<E, A>)} streams
     * @returns {Property<E, A[]>}
     */
    function combineAsArray<E, A>(...streams:(A|Observable<E, A>)[]):Property<E, A[]>;

    /**
     * @callback Property#combineWith~f
     * @param {...A} args
     * @returns {B}
     */
    /**
     * @function Property#combineWith
     * @description Combines given n [Property]{@link Bacon.Property}s, [EventStream]{@link Bacon.EventStream}s and constant values using the given n-ary function `f`.
     * @param {Property#combineWith~f} f
     * @param {...(A|Observable<E, A>)} streams
     * @returns {Property<E, B>}
     */
    function combineWith<A, B>(f:(...args:A[]) => B, ...streams:(A|Observable<ErrorEvent, A>)[]):Property<ErrorEvent, B>;

    /**
     * @function
     * @description Combines [Property]{@link Bacon.Property}s, [EventStream]{@link Bacon.EventStream}s and constant values using a `template` object.
     * @param {{string:number|boolean|string|Object|Observable<E, *>}} template
     * @returns {Property<E, A>}
     */
    function combineTemplate<E, A>(template:{[label:string]:number|boolean|string|Object|Observable<E, any>}):Property<E, A>;

    /**
     * @function
     * @description Merges given array of [EventStream]{@link Bacon.EventStream}s.
     * @param {EventStream<E, A>[]} streams
     * @returns {EventStream<E, A>}
     */
    function mergeAll<E, A>(streams:EventStream<E, A>[]):EventStream<E, A>;

    /**
     * @function
     * @description Merges given array of [EventStream]{@link Bacon.EventStream}s.
     * @param {...EventStream<E, A>} streams
     * @returns {EventStream<E, A>}
     */
    function mergeAll<E, A>(...streams:EventStream<E, A>[]):EventStream<E, A>;

    /**
     * @function
     * @description Zips the array of `streams` in to a new [EventStream]{@link Bacon.EventStream} that will have an array of values from each source EventStream as its value. Zipping means that events from each EventStream are combine pairwise so that the 1st event from each EventStream is published first, then the 2nd event from each. The results will be published as soon as there is a value from each source EventStream. Be careful not to have too much "drift" between EventStream's. If one EventStream produces many more values than some other excessive buffering will occur inside the zipped [Observable]{@link Bacon.Observable}.
     * @param {EventStream<E, A>[]} streams
     * @returns {EventStream<E, A[]>}
     */
    function zipAsArray<E, A>(streams:EventStream<E, A>[]):EventStream<E, A[]>;

    /**
     * @function
     * @description Zips the `streams` in to a new [EventStream]{@link Bacon.EventStream} that will have an array of values from each source EventStream as its value. Zipping means that events from each EventStream are combine pairwise so that the 1st event from each EventStream is published first, then the 2nd event from each. The results will be published as soon as there is a value from each source EventStream. EventStream's are provided as a list of arguments as opposed to a single array. Be careful not to have too much "drift" between EventStream's. If one EventStream produces many more values than some other excessive buffering will occur inside the zipped [Observable]{@link Bacon.Observable}.
     * @param {...EventStream<E, A>} streams
     * @returns {EventStream<E, A[]>}
     */
    function zipAsArray<E, A>(...streams:EventStream<E, A>[]):EventStream<E, A[]>;

    /**
     * @callback Bacon.zipWith1~f
     * @param {...A} args
     * @returns {B}
     */
    /**
     * @function Bacon.zipWith1
     * @description Zips the array of `streams` in to a new [EventStream]{@link Bacon.EventStream} that will combine the n values from EventStream's with n-ary function `f`. Zipping means that events from each EventStream are combine pairwise so that the 1st event from each EventStream is published first, then the 2nd event from each. The results will be published as soon as there is a value from each source EventStream. Be careful not to have too much "drift" between EventStream's. If one EventStream produces many more values than some other excessive buffering will occur inside the zipped [Observable]{@link Bacon.Observable}.
     * @param {EventStream<E, A>[]} streams
     * @param {Bacon.zipWith1~f} f
     * @returns {EventStream<E, B>}
     */
    function zipWith<E, A, B>(streams:EventStream<E, A>[], f:(...args:A[]) => B):EventStream<E, B>;

    /**
     * @callback Bacon.zipWith2~f
     * @param {...A} args
     * @returns {B}
     */
    /**
     * @function Bacon.zipWith2
     * @description Zips the `streams` in to a new [EventStream]{@link Bacon.EventStream} that will combine the n values from EventStream's with n-ary function `f`. Zipping means that events from each EventStream are combine pairwise so that the 1st event from each EventStream is published first, then the 2nd event from each. The results will be published as soon as there is a value from each source EventStream. Streams are provided as a list of arguments as opposed to a single array. Be careful not to have too much "drift" between EventStream's. If one EventStream produces many more values than some other excessive buffering will occur inside the zipped [Observable]{@link Bacon.Observable}.
     * @param {Bacon.zipWith2~f} f
     * @param {...EventStream<E, A>} streams
     * @returns {EventStream<E, B>}
     */
    function zipWith<E, A, B>(f:(...args:A[]) => B, ...streams:EventStream<E, A>[]):EventStream<E, B>;

    /**
     * @function
     * @description Is a shorthand for combining multiple sources ([EventStream]{@link Bacon.EventStream}s, [Property]{@link Bacon.Property}s, constants) as array and assigning the side-effect function `f` for the values.
     * @param {...*} args
     * @returns {void}
     */
    function onValues(...args:any[]):void;

    /**
     * @class Bus
     * @augments Bacon.EventStream
     * @description An [EventStream]{@link Bacon.EventStream} that allows you to [push]{@link Bacon.Bus#push} values into the EventStream. It also allows [plug]{@link Bacon.Bus#plug}ging other EventStream's into the Bus. The Bus practically merges all plugged-in streams and the values pushed using the [push]{@link Bacon.Bus#push} method.
     */
    interface Bus<E, A> extends EventStream<E, A> {
        /**
         * @method Bus#push
         * @description Pushes the given `value` to the [Bus]{@link Bacon.Bus}.
         * @param {A} value
         * @returns {void}
         */
        push(value:A):void;

        /**
         * @method
         * @description Ends the [Bus]{@link Bacon.Bus}. Sends an [End]{@link Bacon.End} event to all subscribers. After this call, there'll be no more events to the subscribers. Also, the [Bus.push]{@link Bacon.Bus#push} and [Bus.plug]{@link Bacon.Bus#plug} methods have no effect.
         * @returns {void}
         */
        end():void;

        /**
         * @method
         * @description Sends an [Error]{@link Bacon.Error} with given `error` message to all subscribers.
         * @param {E} error
         * @returns {void}
         */
        error(error:E):void;

        /**
         * @callback Bus#plug~unplug
         * @returns {void}
         */
        /**
         * @method Bus#plug
         * @description Plugs the given [EventStream]{@link Bacon.EventStream} to the [Bus]{@link Bacon.Bus}. All events from the given `stream` will be delivered to the subscribers of the Bus. Returns a function `unplug` that can be used to unplug the same stream. The [plug]{@link Bacon.Bus#plug} method practically allows you to merge in other EventStream's after the creation of the Bus.
         * @param {EventStream<A>} stream
         * @returns {Bus#plug~unplug}
         */
        plug(stream:EventStream<E, A>):() => void;
    }

    var Bus:{
        /**
         * @constructor
         * @constructs Bacon.Bus
         * @description Returns a new [Bus]{@link Bacon.Bus}.
         * @returns {Bus<E, A>}
         */
        new<E, A>():Bus<E, A>;
    };

    /**
     * @class Event
     * @description Has subclasses [Initial]{@link Bacon.Initial}, [Next]{@link Bacon.Next}, [End]{@link Bacon.End} and [Error]{@link Bacon.Error}.
     * */
    class Event<A> {
        /**
         * @method
         * @description Returns the value associated with a [Initial]{@link Bacon.Initial} or [Next]{@link Bacon.Next} event.
         * @returns {A}
         */
        value():A;

        /**
         * @method
         * @description Returns `true` for events of type [Initial]{@link Bacon.Initial} or [Next]{@link Bacon.Next}.
         * @returns {boolean}
         */
        hasValue():boolean;

        /**
         * @method Error#isInitial
         * @description Returns `true` for events of type [Initial]{@link Bacon.Initial}.
         * @returns {boolean}
         */
        isInitial():boolean;

        /**
         * @method Error#isNext
         * @description Returns `true` for events of type [Next]{@link Bacon.Next}.
         * @returns {boolean}
         */
        isNext():boolean;

        /**
         * @method Error#isError
         * @description Returns `true` for events of type [Error]{@link Bacon.Error}.
         * @returns {boolean}
         */
        isError():boolean;

        /**
         * @method Error#isEnd
         * @description Returns `true` for events of type [End]{@link Bacon.End}.
         * @returns {boolean}
         */
        isEnd():boolean;
    }

    /**
     * @class Error
     * @augments Bacon.Event
     * @description An error event. Call [Event.isError]{@link Bacon.Event#isError} to distinguish these events in your subscriber, or use [onError]{@link Bacon.Observable#onError} to react to error events only. [Error.error]{@link Bacon.Error#error} returns the associated error object (usually string). [Error]{@link Bacon.Error} events are always passed through all stream combinators. So, even if you filter all values out, the error events will pass through. If you use [Observable.flatMap]{@link Bacon.Observable#flatMap}, the result stream will contain Error events from the source as well as all the spawned stream. You can take action on errors by using the [Observable.onError]{@link Bacon.Observable#onError}. See documentation on [Observable.onError]{@link Bacon.Observable#onError}, [EventStream.mapError]{@link Bacon.EventStream#mapError}, [Property.mapError]{@link Bacon.Property#mapError}, [EventStream.errors]{@link Bacon.EventStream#errors}, [Property.errors]{@link Bacon.Property#errors}, [EventStream.skipErrors]{@link Bacon.EventStream#skipErrors}, [Property.skipErrors]{@link Bacon.Property#skipErrors}, [Bacon.retry]{@link Bacon.retry} and [Observable.flatMapError]{@link Bacon.Observable#flatMapError}. An Error does not terminate the stream. The methods [EventStream.endOnError]{@link Bacon.EventStream#endOnError} and [EventStream.endOnError]{@link Bacon.EventStream#endOnError}  returns a stream/property that ends immediately after first error. Bacon.js doesn't currently generate any Error events itself (except when converting errors using [Bacon.fromPromise]{@link Bacon.fromPromise}). Error events definitely would be generated by streams derived from IO sources such as AJAX calls.
     * @example
     * // In case you want to convert (some) value events into Error events, you may use `flatMap` like this:
     * Bacon.fromArray([1, 2, 3, 4]).flatMap<number>(x => {
   *   NOTE: had to explicitly specify the `<number>` typing for `flatMap`.
   *   return x > 2 ? new Bacon.Error("too big") : x;
   * });
     *
     * // Conversely, if you want to convert some Error events into value events, you may use `flatMapError`:
     * Bacon.fromArray([1, 2, 3, 4]).flatMapError(error => {
   *   let isNonCriticalError = error => Math.random() < .5,
   *     handleNonCriticalError = error => 42;
   *   return isNonCriticalError(error) ? handleNonCriticalError(error) : new Bacon.Error(error);
   * });
     *
     * // Note also that Bacon.js combinators do not catch errors that are thrown. Especially `map` doesn't do so. If you want to map things and wrap caught errors into Error events, you can do the following:
     * Bacon.fromArray([1, 2, 3, 4]).flatMap(x => {
   *   let dangerousFunction = x => {
   *     throw new Error("dangerous function!");
   *   };
   *   try {
   *     return dangerousFunction(x);
   *   } catch (e) {
   *     return new Bacon.Error(e);
   *   }
   * });
     */
    class Error<E> extends Event<E> {
        /**
         * @constructor
         * @constructs Error
         * @param {E} error
         * */
        constructor(error:E);

        /**
         * @property Error#error
         * @description Returns the `error` associated with an [Error]{@link Bacon.Error} event.
         * @returns {E}
         */
        error:E;
    }

    /**
     * @class End
     * @augments Bacon.Event
     * @description An end-of-stream event of [EventStream]{@link Bacon.EventStream} or [Property]{@link Bacon.Property}. Call [Event.isEnd]{@link Bacon.Event#isEnd} to distinguish an End from other events.
     * */
    class End<A> extends Event<A> {
        /**
         * @constructor
         * @constructs Bacon.End
         * */
        constructor();
    }

    /**
     * @class Initial
     * @augments Bacon.Event
     * @description The initial (current) value of a [Property]{@link Bacon.Property}. Call [Event.isInitial]{@link Bacon.Event#isInitial} to distinguish from other events. Only sent immediately after subscription to a Property.
     * */
    class Initial<A> extends Event<A> {
        /**
         * @constructor
         * @constructs Bacon.Initial
         * @param {A} value
         * */
        constructor(value:A);
    }

    /**
     * @class Next
     * @augments Bacon.Event
     * @description Next value in an [EventStream]{@link Bacon.EventStream} or a [Property]{@link Bacon.Property}. Call [Event.isNext]{@link Bacon.Event#isNext} to distinguish a Next event from other events.
     * */
    class Next<A> extends Event<A> {
        /**
         * @constructor
         * @constructs Bacon.Next
         * @param {A} value
         * @example
         * new Bacon.Next("value");
         * */
        constructor(value:A);

        /**
         * @callback Next#constructor
         * @returns {A}
         */
        /**
         * @constructor Next#constructor
         * @constructs Bacon.Next
         * @description This version is safe only when you know that the actual value in the stream is not a function. The idea in using a function `f` instead of a plain value is that the internals on Bacon.js take advantage of lazy evaluation by deferring the evaluations of values created by `map`, `combine`.
         * @param {Next#constructor} f
         * @example
         * new Bacon.Next(() => "value");
         * */
        constructor(f:() => A);
    }

    /**
     * @callback Bacon.retry1~source
     * @description Function that produces an [EventStream]{@link Bacon.EventStream}.
     * @returns {EventStream<E, A>}
     */
    /**
     * @callback Bacon.retry1~isRetryable
     * @description Function returning `true` to continue retrying, `false` to stop. Defaults to `true`. The [Error]{@link Bacon.Error} that occurred is given as a parameter. For example, there is usually no reason to retry a 404 HTTP error, whereas a 500 or a timeout might work on the next attempt.
     * @param {E} error
     * @returns {boolean}
     */
    /**
     * @callback Bacon.retry1~delay
     * @description Function that returns the time in milliseconds to wait before retrying. Defaults to `0`. The function is given a `context` object with the keys `error` (the [Error]{@link Bacon.Error} that occurred) and `retriesDone` (the number of retries already performed) to help determine the appropriate delay, e.g. for an incremental backoff.
     * @param {Object} context
     * @param {E} context.error [Error]{@link Bacon.Error} that occurred
     * @param {number} context.retriesDone number of retries already performed
     * @returns {number}
     */
    /**
     * @function Bacon.retry1
     * @description Is used to retry the call when there is an [Error]{@link Bacon.Error} event in the [EventStream]{@link Bacon.EventStream} produced by the `source` function.
     * @param {Object} options
     * @param {Bacon.retry1~source} options.source function that produces an [EventStream]{@link Bacon.EventStream}
     * @param {number} options.retries number of times to retry the `source` function in addition to the initial attempt
     * @param {Bacon.retry1~isRetryable} [options.isRetryable] function returning `true` to continue retrying, `false` to stop. Defaults to `true`.
     * @param {Bacon.retry1~delay} [options.delay] - function that returns the time in milliseconds to wait before retrying. Defaults to `0`.
     * @returns {EventStream<E, A>}
     */
    function retry<E, A>(options:{
        source:() => EventStream<E, A>;
        retries:number;
        isRetryable?:(error:E) => boolean;
        delay?:(context:{error:E; retriesDone:number}) => number;
    }):EventStream<E, A>;

    /**
     * @callback Bacon.retry1~source
     * @description Function that produces an [Property]{@link Bacon.Property}.
     * @returns {Property<E, A>}
     */
    /**
     * @callback Bacon.retry1~isRetryable
     * @description Function returning `true` to continue retrying, `false` to stop. Defaults to `true`. The [Error]{@link Bacon.Error} that occurred is given as a parameter. For example, there is usually no reason to retry a 404 HTTP error, whereas a 500 or a timeout might work on the next attempt.
     * @param {E} error
     * @returns {boolean}
     */
    /**
     * @callback Bacon.retry1~delay
     * @description Function that returns the time in milliseconds to wait before retrying. Defaults to `0`. The function is given a `context` object with the keys `error` (the [Error]{@link Bacon.Error} that occurred) and `retriesDone` (the number of retries already performed) to help determine the appropriate delay, e.g. for an incremental backoff.
     * @param {Object} context
     * @param {E} context.error [Error]{@link Bacon.Error} that occurred
     * @param {number} context.retriesDone number of retries already performed
     * @returns {number}
     */
    /**
     * @function Bacon.retry1
     * @description Is used to retry the call when there is an [Error]{@link Bacon.Error} event in the [Property]{@link Bacon.Property} produced by the `source` function.
     * @param {Object} options
     * @param {Bacon.retry1~source} options.source function that produces an [Property]{@link Bacon.Property}
     * @param {number} options.retries number of times to retry the `source` function in addition to the initial attempt
     * @param {Bacon.retry1~isRetryable} [options.isRetryable] function returning `true` to continue retrying, `false` to stop. Defaults to `true`.
     * @param {Bacon.retry1~delay} [options.delay] - function that returns the time in milliseconds to wait before retrying. Defaults to `0`.
     * @returns {Property<E, A>}
     */
    function retry<E, A>(options:{
        source:() => Property<E, A>;
        retries:number;
        isRetryable?:(error:E) => boolean;
        delay?:(context:{error:E; retriesDone:number}) => number;
    }):Property<E, A>;

    /**
     * @callback Bacon.when1~f1
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @method Bacon.when1
     * @description Creates an [EventStream]{@link Bacon.EventStream} from join-pattern system.
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.when1~f1} f1
     * @returns {EventStream<E, B>}
     * @example
     * {
     *     // Consider implementing a game with discrete time ticks. We want to handle key-events synchronized on tick-events, with at most one key event handled per tick. If there are no key events, we want to just process a tick:
     *     let tick = Bacon.interval(1e2, 0),
     *         keyEvent = Bacon.fromEvent(document.body, "click", _ => Date.now()),
     *         handleTick = _ => `timestamp: NONE`,
     *         handleKeyEvent = timestamp => `timestamp: ${timestamp}`;
     *     Bacon.when(
     *         [tick, keyEvent], (_, timestamp) => handleKeyEvent(timestamp),
     *         [tick], handleTick
     *     );
     *     // Order is important here. If the [tick] patterns had been written first, this would have been tried first, and preferred at each tick.
     * }
     *
     * {
     *     // Join patterns are indeed a generalization of `zip`, and `zip` is equivalent to a single-rule join pattern. The following `Observable`s have the same output:
     *     let a = Bacon.once("a"),
     *         b = Bacon.once("b"),
     *         c = Bacon.once("c"),
     *         f = (a, b, c) => `a = ${a}; b = ${b}; c = ${c}.`;
     *     Bacon.zipWith(f, a, b, c);
     *     Bacon.when([a, b, c], f);
     * }
     *
     * {
     *     // Join patterns as a "chemical machine".
     *     // A quick way to get some intuition for join patterns is to understand them through an analogy in terms of atoms and molecules. A join pattern can here be regarded as a recipe for a chemical reaction. Lets say we have observables `oxygen`, `carbon` and `hydrogen`, where an event in these spawns an 'atom' of that type into a mixture. We can state reactions:
     *     let oxygen = Bacon.interval(1e3, "O"),
     *         hydrogen = Bacon.interval(2e3, "H"),
     *         carbon = Bacon.interval(1.5e3, "C"),
     *         makeWater = (oxygen:string, hydrogen1:string, hydrogen2:string) => `${hydrogen1}${[hydrogen1, hydrogen2].length}${oxygen}`,
     *         makeCarbonMonoxide = (oxygen:string, carbon:string) => `${carbon}${oxygen}`;
     *     Bacon.when(
     *         [oxygen, hydrogen, hydrogen], makeWater,
     *         [oxygen, carbon], makeCarbonMonoxide
     *     );
     *     // Now, every time a new 'atom' is spawned from one of the observables, this atom is added to the mixture. If at any time there are two hydrogen atoms, and an oxygen atom, the corresponding atoms are *consumed*, and output is produced via `makeWater`. The same semantics apply for the second rule to create carbon monoxide. The rules are tried at each point from top to bottom.
     * }
     *
     * {
     *     // Join patterns and properties.
     *     // Properties are not part of the synchronization pattern, but are instead just sampled. The following example take three input streams `$price`, `$quantity` and `$total`, e.g. coming from input fields, and defines mutally recursive behaviours in properties `price`, `quantity` and `total` such that:
     *     // -- updating `quantity` sets `total` to `price * quantity`;
     *     // -- updating `total` sets `price` to `total / quantity`.
     *     let random = (x:number) => Math.round(x * Math.random()),
     *         id = <A>(x:A):A => x;
     *     let $quantity = Bacon.interval<Error, number>(1e3, 10).map(random),
     *         $price = Bacon.interval<Error, number>(2e3, 100).map(random),
     *         $total = Bacon.interval<Error, number>(1.5e3, 1000).map(random);
     *     let quantity = $quantity.toProperty(1),
     *         price = Bacon.when<Error, number, number, number>(
     *             [$price], id,
     *             [$total, quantity], (x, y) => x / y
     *         ).toProperty(0),
     *         total = Bacon.when<Error, number, number, number, number>(
     *             [$total], id,
     *             [$price, quantity], (x, y) => x * y,
     *             [price, $quantity], (x, y) => x * y
     *         ).toProperty(0);
     * }
     *
     * {
     *     // Join patterns and `Bacon.Bus`.
     *     // The result functions of join patterns are allowed to push values onto a `Bus` that may in turn be in one of its patterns. For instance, an implementation of the dining philosophers problem can be written as follows:
     *     // Availability of chopsticks are implemented using bus.
     *     let chopsticks = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // Hungry could be any type of observable, but we'll use bus here.
     *         hungry = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // A philosopher eats for one second, then makes the chopsticks available again by pushing values onto their bus.
     *         eat = (i:number) => () => {
     *             setTimeout(() => {
     *                 console.log("done!");
     *                 chopsticks[i].push({});
     *                 chopsticks[(i + 1) % 3].push({});
     *             }, 1e3);
     *             return `philosopher ${i} eating`;
     *         },
     *     // We use Bacon.when to make sure a hungry philosopher can eat only when both his chopsticks are available.
     *         dining = Bacon.when(
     *             [hungry[0], chopsticks[0], chopsticks[1]], eat(0),
     *             [hungry[1], chopsticks[1], chopsticks[2]], eat(1),
     *             [hungry[2], chopsticks[2], chopsticks[0]], eat(2)
     *         ).log("dining");
     *     // Make all chopsticks initially available.
     *     chopsticks[0].push({});
     *     chopsticks[1].push({});
     *     chopsticks[2].push({});
     *     // Make philosophers hungry in some way, in this case we just push to their bus.
     *     for (let i = 0; i < 3; i++) {
     *         hungry[0].push({});
     *         hungry[1].push({});
     *         hungry[2].push({});
     *     }
     * }
     */
    function when<E, A1, B>(pattern1:Observable<E, A1>[], f1:(...args:A1[]) => B):EventStream<E, B>;

    /**
     * @callback Bacon.when2~f1
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when2~f2
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @method Bacon.when2
     * @description Creates an [EventStream]{@link Bacon.EventStream} from join-pattern system.
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.when2~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.when2~f2} f2
     * @returns {EventStream<E, B>}
     * @example
     * {
     *     // Consider implementing a game with discrete time ticks. We want to handle key-events synchronized on tick-events, with at most one key event handled per tick. If there are no key events, we want to just process a tick:
     *     let tick = Bacon.interval(1e2, 0),
     *         keyEvent = Bacon.fromEvent(document.body, "click", _ => Date.now()),
     *         handleTick = _ => `timestamp: NONE`,
     *         handleKeyEvent = timestamp => `timestamp: ${timestamp}`;
     *     Bacon.when(
     *         [tick, keyEvent], (_, timestamp) => handleKeyEvent(timestamp),
     *         [tick], handleTick
     *     );
     *     // Order is important here. If the [tick] patterns had been written first, this would have been tried first, and preferred at each tick.
     * }
     *
     * {
     *     // Join patterns are indeed a generalization of `zip`, and `zip` is equivalent to a single-rule join pattern. The following `Observable`s have the same output:
     *     let a = Bacon.once("a"),
     *         b = Bacon.once("b"),
     *         c = Bacon.once("c"),
     *         f = (a, b, c) => `a = ${a}; b = ${b}; c = ${c}.`;
     *     Bacon.zipWith(f, a, b, c);
     *     Bacon.when([a, b, c], f);
     * }
     *
     * {
     *     // Join patterns as a "chemical machine".
     *     // A quick way to get some intuition for join patterns is to understand them through an analogy in terms of atoms and molecules. A join pattern can here be regarded as a recipe for a chemical reaction. Lets say we have observables `oxygen`, `carbon` and `hydrogen`, where an event in these spawns an 'atom' of that type into a mixture. We can state reactions:
     *     let oxygen = Bacon.interval(1e3, "O"),
     *         hydrogen = Bacon.interval(2e3, "H"),
     *         carbon = Bacon.interval(1.5e3, "C"),
     *         makeWater = (oxygen:string, hydrogen1:string, hydrogen2:string) => `${hydrogen1}${[hydrogen1, hydrogen2].length}${oxygen}`,
     *         makeCarbonMonoxide = (oxygen:string, carbon:string) => `${carbon}${oxygen}`;
     *     Bacon.when(
     *         [oxygen, hydrogen, hydrogen], makeWater,
     *         [oxygen, carbon], makeCarbonMonoxide
     *     );
     *     // Now, every time a new 'atom' is spawned from one of the observables, this atom is added to the mixture. If at any time there are two hydrogen atoms, and an oxygen atom, the corresponding atoms are *consumed*, and output is produced via `makeWater`. The same semantics apply for the second rule to create carbon monoxide. The rules are tried at each point from top to bottom.
     * }
     *
     * {
     *     // Join patterns and properties.
     *     // Properties are not part of the synchronization pattern, but are instead just sampled. The following example take three input streams `$price`, `$quantity` and `$total`, e.g. coming from input fields, and defines mutally recursive behaviours in properties `price`, `quantity` and `total` such that:
     *     // -- updating `quantity` sets `total` to `price * quantity`;
     *     // -- updating `total` sets `price` to `total / quantity`.
     *     let random = (x:number) => Math.round(x * Math.random()),
     *         id = <A>(x:A):A => x;
     *     let $quantity = Bacon.interval<Error, number>(1e3, 10).map(random),
     *         $price = Bacon.interval<Error, number>(2e3, 100).map(random),
     *         $total = Bacon.interval<Error, number>(1.5e3, 1000).map(random);
     *     let quantity = $quantity.toProperty(1),
     *         price = Bacon.when<Error, number, number, number>(
     *             [$price], id,
     *             [$total, quantity], (x, y) => x / y
     *         ).toProperty(0),
     *         total = Bacon.when<Error, number, number, number, number>(
     *             [$total], id,
     *             [$price, quantity], (x, y) => x * y,
     *             [price, $quantity], (x, y) => x * y
     *         ).toProperty(0);
     * }
     *
     * {
     *     // Join patterns and `Bacon.Bus`.
     *     // The result functions of join patterns are allowed to push values onto a `Bus` that may in turn be in one of its patterns. For instance, an implementation of the dining philosophers problem can be written as follows:
     *     // Availability of chopsticks are implemented using bus.
     *     let chopsticks = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // Hungry could be any type of observable, but we'll use bus here.
     *         hungry = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // A philosopher eats for one second, then makes the chopsticks available again by pushing values onto their bus.
     *         eat = (i:number) => () => {
     *             setTimeout(() => {
     *                 console.log("done!");
     *                 chopsticks[i].push({});
     *                 chopsticks[(i + 1) % 3].push({});
     *             }, 1e3);
     *             return `philosopher ${i} eating`;
     *         },
     *     // We use Bacon.when to make sure a hungry philosopher can eat only when both his chopsticks are available.
     *         dining = Bacon.when(
     *             [hungry[0], chopsticks[0], chopsticks[1]], eat(0),
     *             [hungry[1], chopsticks[1], chopsticks[2]], eat(1),
     *             [hungry[2], chopsticks[2], chopsticks[0]], eat(2)
     *         ).log("dining");
     *     // Make all chopsticks initially available.
     *     chopsticks[0].push({});
     *     chopsticks[1].push({});
     *     chopsticks[2].push({});
     *     // Make philosophers hungry in some way, in this case we just push to their bus.
     *     for (let i = 0; i < 3; i++) {
     *         hungry[0].push({});
     *         hungry[1].push({});
     *         hungry[2].push({});
     *     }
     * }
     */
    function when<E, A1, A2, B>(pattern1:Observable<E, A1>[], f1:(...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(...args:A2[]) => B):EventStream<E, B>;

    /**
     * @callback Bacon.when3~f1
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when3~f2
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when3~f3
     * @param {...A3} args
     * @returns {B}
     */
    /**
     * @method Bacon.when3
     * @description Creates an [EventStream]{@link Bacon.EventStream} from join-pattern system.
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.when3~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.when3~f2} f2
     * @param {Observable<E, A3>[]} pattern3
     * @param {Bacon.when3~f3} f3
     * @returns {EventStream<E, B>}
     * @example
     * {
     *     // Consider implementing a game with discrete time ticks. We want to handle key-events synchronized on tick-events, with at most one key event handled per tick. If there are no key events, we want to just process a tick:
     *     let tick = Bacon.interval(1e2, 0),
     *         keyEvent = Bacon.fromEvent(document.body, "click", _ => Date.now()),
     *         handleTick = _ => `timestamp: NONE`,
     *         handleKeyEvent = timestamp => `timestamp: ${timestamp}`;
     *     Bacon.when(
     *         [tick, keyEvent], (_, timestamp) => handleKeyEvent(timestamp),
     *         [tick], handleTick
     *     );
     *     // Order is important here. If the [tick] patterns had been written first, this would have been tried first, and preferred at each tick.
     * }
     *
     * {
     *     // Join patterns are indeed a generalization of `zip`, and `zip` is equivalent to a single-rule join pattern. The following `Observable`s have the same output:
     *     let a = Bacon.once("a"),
     *         b = Bacon.once("b"),
     *         c = Bacon.once("c"),
     *         f = (a, b, c) => `a = ${a}; b = ${b}; c = ${c}.`;
     *     Bacon.zipWith(f, a, b, c);
     *     Bacon.when([a, b, c], f);
     * }
     *
     * {
     *     // Join patterns as a "chemical machine".
     *     // A quick way to get some intuition for join patterns is to understand them through an analogy in terms of atoms and molecules. A join pattern can here be regarded as a recipe for a chemical reaction. Lets say we have observables `oxygen`, `carbon` and `hydrogen`, where an event in these spawns an 'atom' of that type into a mixture. We can state reactions:
     *     let oxygen = Bacon.interval(1e3, "O"),
     *         hydrogen = Bacon.interval(2e3, "H"),
     *         carbon = Bacon.interval(1.5e3, "C"),
     *         makeWater = (oxygen:string, hydrogen1:string, hydrogen2:string) => `${hydrogen1}${[hydrogen1, hydrogen2].length}${oxygen}`,
     *         makeCarbonMonoxide = (oxygen:string, carbon:string) => `${carbon}${oxygen}`;
     *     Bacon.when(
     *         [oxygen, hydrogen, hydrogen], makeWater,
     *         [oxygen, carbon], makeCarbonMonoxide
     *     );
     *     // Now, every time a new 'atom' is spawned from one of the observables, this atom is added to the mixture. If at any time there are two hydrogen atoms, and an oxygen atom, the corresponding atoms are *consumed*, and output is produced via `makeWater`. The same semantics apply for the second rule to create carbon monoxide. The rules are tried at each point from top to bottom.
     * }
     *
     * {
     *     // Join patterns and properties.
     *     // Properties are not part of the synchronization pattern, but are instead just sampled. The following example take three input streams `$price`, `$quantity` and `$total`, e.g. coming from input fields, and defines mutally recursive behaviours in properties `price`, `quantity` and `total` such that:
     *     // -- updating `quantity` sets `total` to `price * quantity`;
     *     // -- updating `total` sets `price` to `total / quantity`.
     *     let random = (x:number) => Math.round(x * Math.random()),
     *         id = <A>(x:A):A => x;
     *     let $quantity = Bacon.interval<Error, number>(1e3, 10).map(random),
     *         $price = Bacon.interval<Error, number>(2e3, 100).map(random),
     *         $total = Bacon.interval<Error, number>(1.5e3, 1000).map(random);
     *     let quantity = $quantity.toProperty(1),
     *         price = Bacon.when<Error, number, number, number>(
     *             [$price], id,
     *             [$total, quantity], (x, y) => x / y
     *         ).toProperty(0),
     *         total = Bacon.when<Error, number, number, number, number>(
     *             [$total], id,
     *             [$price, quantity], (x, y) => x * y,
     *             [price, $quantity], (x, y) => x * y
     *         ).toProperty(0);
     * }
     *
     * {
     *     // Join patterns and `Bacon.Bus`.
     *     // The result functions of join patterns are allowed to push values onto a `Bus` that may in turn be in one of its patterns. For instance, an implementation of the dining philosophers problem can be written as follows:
     *     // Availability of chopsticks are implemented using bus.
     *     let chopsticks = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // Hungry could be any type of observable, but we'll use bus here.
     *         hungry = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // A philosopher eats for one second, then makes the chopsticks available again by pushing values onto their bus.
     *         eat = (i:number) => () => {
     *             setTimeout(() => {
     *                 console.log("done!");
     *                 chopsticks[i].push({});
     *                 chopsticks[(i + 1) % 3].push({});
     *             }, 1e3);
     *             return `philosopher ${i} eating`;
     *         },
     *     // We use Bacon.when to make sure a hungry philosopher can eat only when both his chopsticks are available.
     *         dining = Bacon.when(
     *             [hungry[0], chopsticks[0], chopsticks[1]], eat(0),
     *             [hungry[1], chopsticks[1], chopsticks[2]], eat(1),
     *             [hungry[2], chopsticks[2], chopsticks[0]], eat(2)
     *         ).log("dining");
     *     // Make all chopsticks initially available.
     *     chopsticks[0].push({});
     *     chopsticks[1].push({});
     *     chopsticks[2].push({});
     *     // Make philosophers hungry in some way, in this case we just push to their bus.
     *     for (let i = 0; i < 3; i++) {
     *         hungry[0].push({});
     *         hungry[1].push({});
     *         hungry[2].push({});
     *     }
     * }
     */
    function when<E, A1, A2, A3, B>(pattern1:Observable<E, A1>[], f1:(...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(...args:A2[]) => B, pattern3:Observable<E, A3>[], f3:(...args:A3[]) => B):EventStream<E, B>;

    /**
     * @callback Bacon.when4~f1
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when4~f2
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when4~f3
     * @param {...A3} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when4~f4
     * @param {...A4} args
     * @returns {B}
     */
    /**
     * @method Bacon.when4
     * @description Creates an [EventStream]{@link Bacon.EventStream} from join-pattern system.
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.when4~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.when4~f2} f2
     * @param {Observable<E, A3>[]} pattern3
     * @param {Bacon.when4~f3} f3
     * @param {Observable<E, A4>[]} pattern4
     * @param {Bacon.when4~f4} f4
     * @returns {EventStream<E, B>}
     * @example
     * {
     *     // Consider implementing a game with discrete time ticks. We want to handle key-events synchronized on tick-events, with at most one key event handled per tick. If there are no key events, we want to just process a tick:
     *     let tick = Bacon.interval(1e2, 0),
     *         keyEvent = Bacon.fromEvent(document.body, "click", _ => Date.now()),
     *         handleTick = _ => `timestamp: NONE`,
     *         handleKeyEvent = timestamp => `timestamp: ${timestamp}`;
     *     Bacon.when(
     *         [tick, keyEvent], (_, timestamp) => handleKeyEvent(timestamp),
     *         [tick], handleTick
     *     );
     *     // Order is important here. If the [tick] patterns had been written first, this would have been tried first, and preferred at each tick.
     * }
     *
     * {
     *     // Join patterns are indeed a generalization of `zip`, and `zip` is equivalent to a single-rule join pattern. The following `Observable`s have the same output:
     *     let a = Bacon.once("a"),
     *         b = Bacon.once("b"),
     *         c = Bacon.once("c"),
     *         f = (a, b, c) => `a = ${a}; b = ${b}; c = ${c}.`;
     *     Bacon.zipWith(f, a, b, c);
     *     Bacon.when([a, b, c], f);
     * }
     *
     * {
     *     // Join patterns as a "chemical machine".
     *     // A quick way to get some intuition for join patterns is to understand them through an analogy in terms of atoms and molecules. A join pattern can here be regarded as a recipe for a chemical reaction. Lets say we have observables `oxygen`, `carbon` and `hydrogen`, where an event in these spawns an 'atom' of that type into a mixture. We can state reactions:
     *     let oxygen = Bacon.interval(1e3, "O"),
     *         hydrogen = Bacon.interval(2e3, "H"),
     *         carbon = Bacon.interval(1.5e3, "C"),
     *         makeWater = (oxygen:string, hydrogen1:string, hydrogen2:string) => `${hydrogen1}${[hydrogen1, hydrogen2].length}${oxygen}`,
     *         makeCarbonMonoxide = (oxygen:string, carbon:string) => `${carbon}${oxygen}`;
     *     Bacon.when(
     *         [oxygen, hydrogen, hydrogen], makeWater,
     *         [oxygen, carbon], makeCarbonMonoxide
     *     );
     *     // Now, every time a new 'atom' is spawned from one of the observables, this atom is added to the mixture. If at any time there are two hydrogen atoms, and an oxygen atom, the corresponding atoms are *consumed*, and output is produced via `makeWater`. The same semantics apply for the second rule to create carbon monoxide. The rules are tried at each point from top to bottom.
     * }
     *
     * {
     *     // Join patterns and properties.
     *     // Properties are not part of the synchronization pattern, but are instead just sampled. The following example take three input streams `$price`, `$quantity` and `$total`, e.g. coming from input fields, and defines mutally recursive behaviours in properties `price`, `quantity` and `total` such that:
     *     // -- updating `quantity` sets `total` to `price * quantity`;
     *     // -- updating `total` sets `price` to `total / quantity`.
     *     let random = (x:number) => Math.round(x * Math.random()),
     *         id = <A>(x:A):A => x;
     *     let $quantity = Bacon.interval<Error, number>(1e3, 10).map(random),
     *         $price = Bacon.interval<Error, number>(2e3, 100).map(random),
     *         $total = Bacon.interval<Error, number>(1.5e3, 1000).map(random);
     *     let quantity = $quantity.toProperty(1),
     *         price = Bacon.when<Error, number, number, number>(
     *             [$price], id,
     *             [$total, quantity], (x, y) => x / y
     *         ).toProperty(0),
     *         total = Bacon.when<Error, number, number, number, number>(
     *             [$total], id,
     *             [$price, quantity], (x, y) => x * y,
     *             [price, $quantity], (x, y) => x * y
     *         ).toProperty(0);
     * }
     *
     * {
     *     // Join patterns and `Bacon.Bus`.
     *     // The result functions of join patterns are allowed to push values onto a `Bus` that may in turn be in one of its patterns. For instance, an implementation of the dining philosophers problem can be written as follows:
     *     // Availability of chopsticks are implemented using bus.
     *     let chopsticks = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // Hungry could be any type of observable, but we'll use bus here.
     *         hungry = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // A philosopher eats for one second, then makes the chopsticks available again by pushing values onto their bus.
     *         eat = (i:number) => () => {
     *             setTimeout(() => {
     *                 console.log("done!");
     *                 chopsticks[i].push({});
     *                 chopsticks[(i + 1) % 3].push({});
     *             }, 1e3);
     *             return `philosopher ${i} eating`;
     *         },
     *     // We use Bacon.when to make sure a hungry philosopher can eat only when both his chopsticks are available.
     *         dining = Bacon.when(
     *             [hungry[0], chopsticks[0], chopsticks[1]], eat(0),
     *             [hungry[1], chopsticks[1], chopsticks[2]], eat(1),
     *             [hungry[2], chopsticks[2], chopsticks[0]], eat(2)
     *         ).log("dining");
     *     // Make all chopsticks initially available.
     *     chopsticks[0].push({});
     *     chopsticks[1].push({});
     *     chopsticks[2].push({});
     *     // Make philosophers hungry in some way, in this case we just push to their bus.
     *     for (let i = 0; i < 3; i++) {
     *         hungry[0].push({});
     *         hungry[1].push({});
     *         hungry[2].push({});
     *     }
     * }
     */
    function when<E, A1, A2, A3, A4, B>(pattern1:Observable<E, A1>[], f1:(...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(...args:A2[]) => B, pattern3:Observable<E, A3>[], f3:(...args:A3[]) => B, pattern4:Observable<E, A4>[], f4:(...args:A4[]) => B):EventStream<E, B>;

    /**
     * @callback Bacon.when5~f1
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when5~f2
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when5~f3
     * @param {...A3} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when5~f4
     * @param {...A4} args
     * @returns {B}
     */
    /**
     * @callback Bacon.when5~f5
     * @param {...A5} args
     * @returns {B}
     */
    /**
     * @method Bacon.when5
     * @description Creates an [EventStream]{@link Bacon.EventStream} from join-pattern system.
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.when5~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.when5~f2} f2
     * @param {Observable<E, A3>[]} pattern3
     * @param {Bacon.when5~f3} f3
     * @param {Observable<E, A4>[]} pattern4
     * @param {Bacon.when5~f4} f4
     * @param {Observable<E, A5>[]} pattern5
     * @param {Bacon.when5~f5} f5
     * @returns {EventStream<E, B>}
     * @example
     * {
     *     // Consider implementing a game with discrete time ticks. We want to handle key-events synchronized on tick-events, with at most one key event handled per tick. If there are no key events, we want to just process a tick:
     *     let tick = Bacon.interval(1e2, 0),
     *         keyEvent = Bacon.fromEvent(document.body, "click", _ => Date.now()),
     *         handleTick = _ => `timestamp: NONE`,
     *         handleKeyEvent = timestamp => `timestamp: ${timestamp}`;
     *     Bacon.when(
     *         [tick, keyEvent], (_, timestamp) => handleKeyEvent(timestamp),
     *         [tick], handleTick
     *     );
     *     // Order is important here. If the [tick] patterns had been written first, this would have been tried first, and preferred at each tick.
     * }
     *
     * {
     *     // Join patterns are indeed a generalization of `zip`, and `zip` is equivalent to a single-rule join pattern. The following `Observable`s have the same output:
     *     let a = Bacon.once("a"),
     *         b = Bacon.once("b"),
     *         c = Bacon.once("c"),
     *         f = (a, b, c) => `a = ${a}; b = ${b}; c = ${c}.`;
     *     Bacon.zipWith(f, a, b, c);
     *     Bacon.when([a, b, c], f);
     * }
     *
     * {
     *     // Join patterns as a "chemical machine".
     *     // A quick way to get some intuition for join patterns is to understand them through an analogy in terms of atoms and molecules. A join pattern can here be regarded as a recipe for a chemical reaction. Lets say we have observables `oxygen`, `carbon` and `hydrogen`, where an event in these spawns an 'atom' of that type into a mixture. We can state reactions:
     *     let oxygen = Bacon.interval(1e3, "O"),
     *         hydrogen = Bacon.interval(2e3, "H"),
     *         carbon = Bacon.interval(1.5e3, "C"),
     *         makeWater = (oxygen:string, hydrogen1:string, hydrogen2:string) => `${hydrogen1}${[hydrogen1, hydrogen2].length}${oxygen}`,
     *         makeCarbonMonoxide = (oxygen:string, carbon:string) => `${carbon}${oxygen}`;
     *     Bacon.when(
     *         [oxygen, hydrogen, hydrogen], makeWater,
     *         [oxygen, carbon], makeCarbonMonoxide
     *     );
     *     // Now, every time a new 'atom' is spawned from one of the observables, this atom is added to the mixture. If at any time there are two hydrogen atoms, and an oxygen atom, the corresponding atoms are *consumed*, and output is produced via `makeWater`. The same semantics apply for the second rule to create carbon monoxide. The rules are tried at each point from top to bottom.
     * }
     *
     * {
     *     // Join patterns and properties.
     *     // Properties are not part of the synchronization pattern, but are instead just sampled. The following example take three input streams `$price`, `$quantity` and `$total`, e.g. coming from input fields, and defines mutally recursive behaviours in properties `price`, `quantity` and `total` such that:
     *     // -- updating `quantity` sets `total` to `price * quantity`;
     *     // -- updating `total` sets `price` to `total / quantity`.
     *     let random = (x:number) => Math.round(x * Math.random()),
     *         id = <A>(x:A):A => x;
     *     let $quantity = Bacon.interval<Error, number>(1e3, 10).map(random),
     *         $price = Bacon.interval<Error, number>(2e3, 100).map(random),
     *         $total = Bacon.interval<Error, number>(1.5e3, 1000).map(random);
     *     let quantity = $quantity.toProperty(1),
     *         price = Bacon.when<Error, number, number, number>(
     *             [$price], id,
     *             [$total, quantity], (x, y) => x / y
     *         ).toProperty(0),
     *         total = Bacon.when<Error, number, number, number, number>(
     *             [$total], id,
     *             [$price, quantity], (x, y) => x * y,
     *             [price, $quantity], (x, y) => x * y
     *         ).toProperty(0);
     * }
     *
     * {
     *     // Join patterns and `Bacon.Bus`.
     *     // The result functions of join patterns are allowed to push values onto a `Bus` that may in turn be in one of its patterns. For instance, an implementation of the dining philosophers problem can be written as follows:
     *     // Availability of chopsticks are implemented using bus.
     *     let chopsticks = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // Hungry could be any type of observable, but we'll use bus here.
     *         hungry = [new Bacon.Bus(), new Bacon.Bus(), new Bacon.Bus()],
     *     // A philosopher eats for one second, then makes the chopsticks available again by pushing values onto their bus.
     *         eat = (i:number) => () => {
     *             setTimeout(() => {
     *                 console.log("done!");
     *                 chopsticks[i].push({});
     *                 chopsticks[(i + 1) % 3].push({});
     *             }, 1e3);
     *             return `philosopher ${i} eating`;
     *         },
     *     // We use Bacon.when to make sure a hungry philosopher can eat only when both his chopsticks are available.
     *         dining = Bacon.when(
     *             [hungry[0], chopsticks[0], chopsticks[1]], eat(0),
     *             [hungry[1], chopsticks[1], chopsticks[2]], eat(1),
     *             [hungry[2], chopsticks[2], chopsticks[0]], eat(2)
     *         ).log("dining");
     *     // Make all chopsticks initially available.
     *     chopsticks[0].push({});
     *     chopsticks[1].push({});
     *     chopsticks[2].push({});
     *     // Make philosophers hungry in some way, in this case we just push to their bus.
     *     for (let i = 0; i < 3; i++) {
     *         hungry[0].push({});
     *         hungry[1].push({});
     *         hungry[2].push({});
     *     }
     * }
     */
    function when<E, A1, A2, A3, A4, A5, B>(pattern1:Observable<E, A1>[], f1:(...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(...args:A2[]) => B, pattern3:Observable<E, A3>[], f3:(...args:A3[]) => B, pattern4:Observable<E, A4>[], f4:(...args:A4[]) => B, pattern5:Observable<E, A5>[], f5:(...args:A5[]) => B):EventStream<E, B>;

    /**
     * @callback Bacon.update1~f1
     * @param {B} initial
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @method Bacon.update1
     * @description Creates an [Property]{@link Bacon.Property} from an `initial` value and a join-pattern system.
     * @param {B} initial
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.update1~f1} f1
     * @returns {Property<E, B>}
     * @example
     * {
     *     // The inputs to `Bacon.update` are defined like this:
     *     let initial = 0,
     *         x = Bacon.interval(1e3, 1),
     *         y = Bacon.interval(2e3, 1),
     *         z = Bacon.interval(1.5e3, 1);
     *     // NOTE: had to explicitly specify the typing for `previous:number`
     *     Bacon.update(initial,
     *         [x, y, z], (previous:number, x, y, z) => previous + x + y + z,
     *         [x, y], (previous:number, x, y) => previous + x + y + z
     *     );
     *     // As input, each function above will get the previous value of the `result` Property, along with values from the listed Observables. The value returned by the function will be used as the next value of `result`. Just like in `Bacon.when`, only EventStreams will trigger an update, while Properties will be just sampled. So, if you list a single EventStream and several Properties, the value will be updated only when an event occurs in the EventStream.
     * }
     *
     * {
     *     // Here's a simple gaming example:
     *     let scoreMultiplier = Bacon.constant(1),
     *         hitUfo = new Bacon.Bus(),
     *         hitMotherShip = new Bacon.Bus(),
     *         score = Bacon.update(0,
     *             [hitUfo, scoreMultiplier], (score, _, multiplier:number) => score + 100 * multiplier,
     *             [hitMotherShip], (score, _) => score + 2000
     *         );
     *     // In the example, the `score` property is updated when either `hitUfo` or `hitMotherShip` occur. The `scoreMultiplier` Property is sampled to take multiplier into account when `hitUfo` occurs.
     * }
     */
    function update<E, A1, B>(initial:B, pattern1:Observable<E, A1>[], f1:(initial:B, ...args:A1[]) => B):Property<E, B>;

    /**
     * @callback Bacon.update2~f1
     * @param {B} initial
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update2~f2
     * @param {B} initial
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @method Bacon.update2
     * @description Creates an [Property]{@link Bacon.Property} from an `initial` value and a join-pattern system.
     * @param {B} initial
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.update2~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.update2~f2} f2
     * @returns {Property<E, B>}
     * @example
     * {
     *     // The inputs to `Bacon.update` are defined like this:
     *     let initial = 0,
     *         x = Bacon.interval(1e3, 1),
     *         y = Bacon.interval(2e3, 1),
     *         z = Bacon.interval(1.5e3, 1);
     *     // NOTE: had to explicitly specify the typing for `previous:number`
     *     Bacon.update(initial,
     *         [x, y, z], (previous:number, x, y, z) => previous + x + y + z,
     *         [x, y], (previous:number, x, y) => previous + x + y + z
     *     );
     *     // As input, each function above will get the previous value of the `result` Property, along with values from the listed Observables. The value returned by the function will be used as the next value of `result`. Just like in `Bacon.when`, only EventStreams will trigger an update, while Properties will be just sampled. So, if you list a single EventStream and several Properties, the value will be updated only when an event occurs in the EventStream.
     * }
     *
     * {
     *     // Here's a simple gaming example:
     *     let scoreMultiplier = Bacon.constant(1),
     *         hitUfo = new Bacon.Bus(),
     *         hitMotherShip = new Bacon.Bus(),
     *         score = Bacon.update(0,
     *             [hitUfo, scoreMultiplier], (score, _, multiplier:number) => score + 100 * multiplier,
     *             [hitMotherShip], (score, _) => score + 2000
     *         );
     *     // In the example, the `score` property is updated when either `hitUfo` or `hitMotherShip` occur. The `scoreMultiplier` Property is sampled to take multiplier into account when `hitUfo` occurs.
     * }
     */
    function update<E, A1, A2, B>(initial:B, pattern1:Observable<E, A1>[], f1:(initial:B, ...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(initial:B, ...args:A2[]) => B):Property<E, B>;

    /**
     * @callback Bacon.update3~f1
     * @param {B} initial
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update3~f2
     * @param {B} initial
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update3~f3
     * @param {B} initial
     * @param {...A3} args
     * @returns {B}
     */
    /**
     * @method Bacon.update3
     * @description Creates an [Property]{@link Bacon.Property} from an `initial` value and a join-pattern system.
     * @param {B} initial
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.update3~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.update3~f2} f2
     * @param {Observable<E, A3>[]} pattern3
     * @param {Bacon.update3~f3} f3
     * @returns {Property<E, B>}
     * @example
     * {
     *     // The inputs to `Bacon.update` are defined like this:
     *     let initial = 0,
     *         x = Bacon.interval(1e3, 1),
     *         y = Bacon.interval(2e3, 1),
     *         z = Bacon.interval(1.5e3, 1);
     *     // NOTE: had to explicitly specify the typing for `previous:number`
     *     Bacon.update(initial,
     *         [x, y, z], (previous:number, x, y, z) => previous + x + y + z,
     *         [x, y], (previous:number, x, y) => previous + x + y + z
     *     );
     *     // As input, each function above will get the previous value of the `result` Property, along with values from the listed Observables. The value returned by the function will be used as the next value of `result`. Just like in `Bacon.when`, only EventStreams will trigger an update, while Properties will be just sampled. So, if you list a single EventStream and several Properties, the value will be updated only when an event occurs in the EventStream.
     * }
     *
     * {
     *     // Here's a simple gaming example:
     *     let scoreMultiplier = Bacon.constant(1),
     *         hitUfo = new Bacon.Bus(),
     *         hitMotherShip = new Bacon.Bus(),
     *         score = Bacon.update(0,
     *             [hitUfo, scoreMultiplier], (score, _, multiplier:number) => score + 100 * multiplier,
     *             [hitMotherShip], (score, _) => score + 2000
     *         );
     *     // In the example, the `score` property is updated when either `hitUfo` or `hitMotherShip` occur. The `scoreMultiplier` Property is sampled to take multiplier into account when `hitUfo` occurs.
     * }
     */
    function update<E, A1, A2, A3, B>(initial:B, pattern1:Observable<E, A1>[], f1:(initial:B, ...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(initial:B, ...args:A2[]) => B, pattern3:Observable<E, A3>[], f3:(initial:B, ...args:A3[]) => B):Property<E, B>;

    /**
     * @callback Bacon.update4~f1
     * @param {B} initial
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update4~f2
     * @param {B} initial
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update4~f3
     * @param {B} initial
     * @param {...A3} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update4~f4
     * @param {B} initial
     * @param {...A4} args
     * @returns {B}
     */
    /**
     * @method Bacon.update4
     * @description Creates an [Property]{@link Bacon.Property} from an `initial` value and a join-pattern system.
     * @param {B} initial
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.update4~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.update4~f2} f2
     * @param {Observable<E, A3>[]} pattern3
     * @param {Bacon.update4~f3} f3
     * @param {Observable<E, A4>[]} pattern4
     * @param {Bacon.update4~f4} f4
     * @returns {Property<E, B>}
     * @example
     * {
     *     // The inputs to `Bacon.update` are defined like this:
     *     let initial = 0,
     *         x = Bacon.interval(1e3, 1),
     *         y = Bacon.interval(2e3, 1),
     *         z = Bacon.interval(1.5e3, 1);
     *     // NOTE: had to explicitly specify the typing for `previous:number`
     *     Bacon.update(initial,
     *         [x, y, z], (previous:number, x, y, z) => previous + x + y + z,
     *         [x, y], (previous:number, x, y) => previous + x + y + z
     *     );
     *     // As input, each function above will get the previous value of the `result` Property, along with values from the listed Observables. The value returned by the function will be used as the next value of `result`. Just like in `Bacon.when`, only EventStreams will trigger an update, while Properties will be just sampled. So, if you list a single EventStream and several Properties, the value will be updated only when an event occurs in the EventStream.
     * }
     *
     * {
     *     // Here's a simple gaming example:
     *     let scoreMultiplier = Bacon.constant(1),
     *         hitUfo = new Bacon.Bus(),
     *         hitMotherShip = new Bacon.Bus(),
     *         score = Bacon.update(0,
     *             [hitUfo, scoreMultiplier], (score, _, multiplier:number) => score + 100 * multiplier,
     *             [hitMotherShip], (score, _) => score + 2000
     *         );
     *     // In the example, the `score` property is updated when either `hitUfo` or `hitMotherShip` occur. The `scoreMultiplier` Property is sampled to take multiplier into account when `hitUfo` occurs.
     * }
     */
    function update<E, A1, A2, A3, A4, B>(initial:B, pattern1:Observable<E, A1>[], f1:(initial:B, ...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(initial:B, ...args:A2[]) => B, pattern3:Observable<E, A3>[], f3:(initial:B, ...args:A3[]) => B, pattern4:Observable<E, A4>[], f4:(initial:B, ...args:A4[]) => B):Property<E, B>;

    /**
     * @callback Bacon.update5~f1
     * @param {B} initial
     * @param {...A1} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update5~f2
     * @param {B} initial
     * @param {...A2} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update5~f3
     * @param {B} initial
     * @param {...A3} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update5~f4
     * @param {B} initial
     * @param {...A4} args
     * @returns {B}
     */
    /**
     * @callback Bacon.update5~f5
     * @param {B} initial
     * @param {...A5} args
     * @returns {B}
     */
    /**
     * @method Bacon.update5
     * @description Creates an [Property]{@link Bacon.Property} from an `initial` value and a join-pattern system.
     * @param {B} initial
     * @param {Observable<E, A1>[]} pattern1
     * @param {Bacon.update5~f1} f1
     * @param {Observable<E, A2>[]} pattern2
     * @param {Bacon.update5~f2} f2
     * @param {Observable<E, A3>[]} pattern3
     * @param {Bacon.update5~f3} f3
     * @param {Observable<E, A4>[]} pattern4
     * @param {Bacon.update5~f4} f4
     * @param {Observable<E, A5>[]} pattern5
     * @param {Bacon.update5~f5} f5
     * @returns {Property<E, B>}
     * @example
     * {
     *     // The inputs to `Bacon.update` are defined like this:
     *     let initial = 0,
     *         x = Bacon.interval(1e3, 1),
     *         y = Bacon.interval(2e3, 1),
     *         z = Bacon.interval(1.5e3, 1);
     *     // NOTE: had to explicitly specify the typing for `previous:number`
     *     Bacon.update(initial,
     *         [x, y, z], (previous:number, x, y, z) => previous + x + y + z,
     *         [x, y], (previous:number, x, y) => previous + x + y + z
     *     );
     *     // As input, each function above will get the previous value of the `result` Property, along with values from the listed Observables. The value returned by the function will be used as the next value of `result`. Just like in `Bacon.when`, only EventStreams will trigger an update, while Properties will be just sampled. So, if you list a single EventStream and several Properties, the value will be updated only when an event occurs in the EventStream.
     * }
     *
     * {
     *     // Here's a simple gaming example:
     *     let scoreMultiplier = Bacon.constant(1),
     *         hitUfo = new Bacon.Bus(),
     *         hitMotherShip = new Bacon.Bus(),
     *         score = Bacon.update(0,
     *             [hitUfo, scoreMultiplier], (score, _, multiplier:number) => score + 100 * multiplier,
     *             [hitMotherShip], (score, _) => score + 2000
     *         );
     *     // In the example, the `score` property is updated when either `hitUfo` or `hitMotherShip` occur. The `scoreMultiplier` Property is sampled to take multiplier into account when `hitUfo` occurs.
     * }
     */
    function update<E, A1, A2, A3, A4, A5, B>(initial:B, pattern1:Observable<E, A1>[], f1:(initial:B, ...args:A1[]) => B, pattern2:Observable<E, A2>[], f2:(initial:B, ...args:A2[]) => B, pattern3:Observable<E, A3>[], f3:(initial:B, ...args:A3[]) => B, pattern4:Observable<E, A4>[], f4:(initial:B, ...args:A4[]) => B, pattern5:Observable<E, A5>[], f5:(initial:B, ...args:A5[]) => B):Property<E, B>;
}

declare module "baconjs" {
    export = Bacon;
}
