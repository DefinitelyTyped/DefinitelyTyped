declare module "node:diagnostics_channel" {
    import { AsyncLocalStorage } from "node:async_hooks";
    /**
     * Check if there are active subscribers to the named channel. This is helpful if
     * the message you want to send might be expensive to prepare.
     *
     * This API is optional but helpful when trying to publish messages from very
     * performance-sensitive code.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * if (diagnostics_channel.hasSubscribers('my-channel')) {
     *   // There are subscribers, prepare and publish message
     * }
     * ```
     * @since v15.1.0, v14.17.0
     * @param name The channel name
     * @return If there are active subscribers
     */
    function hasSubscribers(name: string | symbol): boolean;
    /**
     * This is the primary entry-point for anyone wanting to publish to a named
     * channel. It produces a channel object which is optimized to reduce overhead at
     * publish time as much as possible.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * const channel = diagnostics_channel.channel('my-channel');
     * ```
     * @since v15.1.0, v14.17.0
     * @param name The channel name
     * @return The named channel object
     */
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function channel<ContextType = any, StoreType = ContextType>(
        name: string | symbol,
    ): Channel<ContextType, StoreType>;
    type ChannelListener = (message: unknown, name: string | symbol) => void;
    /**
     * Register a message handler to subscribe to this channel. This message handler
     * will be run synchronously whenever a message is published to the channel. Any
     * errors thrown in the message handler will trigger an `'uncaughtException'`.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * diagnostics_channel.subscribe('my-channel', (message, name) => {
     *   // Received data
     * });
     * ```
     * @since v18.7.0, v16.17.0
     * @param name The channel name
     * @param onMessage The handler to receive channel messages
     */
    function subscribe(name: string | symbol, onMessage: ChannelListener): void;
    /**
     * Remove a message handler previously registered to this channel with {@link subscribe}.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * function onMessage(message, name) {
     *   // Received data
     * }
     *
     * diagnostics_channel.subscribe('my-channel', onMessage);
     *
     * diagnostics_channel.unsubscribe('my-channel', onMessage);
     * ```
     * @since v18.7.0, v16.17.0
     * @param name The channel name
     * @param onMessage The previous subscribed handler to remove
     * @return `true` if the handler was found, `false` otherwise.
     */
    function unsubscribe(name: string | symbol, onMessage: ChannelListener): boolean;
    /**
     * Creates a `TracingChannel` wrapper for the given `TracingChannel Channels`. If a name is given, the corresponding tracing
     * channels will be created in the form of `tracing:${name}:${eventType}` where `eventType` corresponds to the types of `TracingChannel Channels`.
     *
     * ```js
     * import diagnostics_channel from 'node:diagnostics_channel';
     *
     * const channelsByName = diagnostics_channel.tracingChannel('my-channel');
     *
     * // or...
     *
     * const channelsByCollection = diagnostics_channel.tracingChannel({
     *   start: diagnostics_channel.channel('tracing:my-channel:start'),
     *   end: diagnostics_channel.channel('tracing:my-channel:end'),
     *   asyncStart: diagnostics_channel.channel('tracing:my-channel:asyncStart'),
     *   asyncEnd: diagnostics_channel.channel('tracing:my-channel:asyncEnd'),
     *   error: diagnostics_channel.channel('tracing:my-channel:error'),
     * });
     * ```
     * @since v19.9.0
     * @experimental
     * @param nameOrChannels Channel name or object containing all the `TracingChannel Channels`
     * @return Collection of channels to trace with
     */
    function tracingChannel<ContextType extends object = object, StoreType = ContextType>(
        nameOrChannels: string | TracingChannelCollection<ContextType, StoreType>,
    ): TracingChannel<ContextType, StoreType>;
    /**
     * Creates a {@link BoundedChannel} wrapper for the given channels. If a name is
     * given, the corresponding channels will be created in the form of
     * `tracing:${name}:${eventType}` where `eventType` is `start` or `end`.
     *
     * A `BoundedChannel` is a simplified version of {@link TracingChannel} that only
     * traces synchronous operations. It only has `start` and `end` events, without
     * `asyncStart`, `asyncEnd`, or `error` events, making it suitable for tracing
     * operations that don't involve asynchronous continuations or error handling.
     *
     * ```js
     * import { boundedChannel, channel } from 'node:diagnostics_channel';
     *
     * const wc = boundedChannel('my-operation');
     *
     * // or...
     *
     * const wc2 = boundedChannel({
     *   start: channel('tracing:my-operation:start'),
     *   end: channel('tracing:my-operation:end'),
     * });
     * ```
     * @since v26.1.0
     * @experimental
     * @param nameOrChannels Channel name or
     * object containing all the [BoundedChannel Channels](https://nodejs.org/docs/latest-v26.x/api/diagnostics_channel.html#boundedchannel-channels)
     */
    function boundedChannel<ContextType extends object = object, StoreType = ContextType>(
        nameOrChannels: string | BoundedChannelCollection<ContextType, StoreType>,
    ): BoundedChannel<ContextType, StoreType>;
    /**
     * The class `Channel` represents an individual named channel within the data
     * pipeline. It is used to track subscribers and to publish messages when there
     * are subscribers present. It exists as a separate object to avoid channel
     * lookups at publish time, enabling very fast publish speeds and allowing
     * for heavy use while incurring very minimal cost. Channels are created with {@link channel}, constructing a channel directly
     * with `new Channel(name)` is not supported.
     * @since v15.1.0, v14.17.0
     */
    class Channel<ContextType = any, StoreType = ContextType> {
        private constructor();
        readonly name: string | symbol;
        /**
         * Check if there are active subscribers to this channel. This is helpful if
         * the message you want to send might be expensive to prepare.
         *
         * This API is optional but helpful when trying to publish messages from very
         * performance-sensitive code.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * if (channel.hasSubscribers) {
         *   // There are subscribers, prepare and publish message
         * }
         * ```
         * @since v15.1.0, v14.17.0
         */
        readonly hasSubscribers: boolean;
        /**
         * Publish a message to any subscribers to the channel. This will trigger
         * message handlers synchronously so they will execute within the same context.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.publish({
         *   some: 'message',
         * });
         * ```
         * @since v15.1.0, v14.17.0
         * @param message The message to send to the channel subscribers
         */
        publish(message: unknown): void;
        /**
         * Register a message handler to subscribe to this channel. This message handler
         * will be run synchronously whenever a message is published to the channel. Any
         * errors thrown in the message handler will trigger an `'uncaughtException'`.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.subscribe((message, name) => {
         *   // Received data
         * });
         * ```
         * @since v15.1.0, v14.17.0
         * @param onMessage The handler to receive channel messages
         */
        subscribe(onMessage: ChannelListener): void;
        /**
         * Remove a message handler previously registered to this channel with `channel.subscribe(onMessage)`.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * function onMessage(message, name) {
         *   // Received data
         * }
         *
         * channel.subscribe(onMessage);
         *
         * channel.unsubscribe(onMessage);
         * ```
         * @since v15.1.0, v14.17.0
         * @param onMessage The previous subscribed handler to remove
         * @return `true` if the handler was found, `false` otherwise.
         */
        unsubscribe(onMessage: ChannelListener): void;
        /**
         * When `channel.runStores(context, ...)` is called, the given context data
         * will be applied to any store bound to the channel. If the store has already been
         * bound the previous `transform` function will be replaced with the new one.
         * The `transform` function may be omitted to set the given context data as the
         * context directly.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const store = new AsyncLocalStorage();
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.bindStore(store, (data) => {
         *   return { data };
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param store The store to which to bind the context data
         * @param transform Transform context data before setting the store context
         */
        bindStore(store: AsyncLocalStorage<StoreType>, transform?: (context: ContextType) => StoreType): void;
        /**
         * Remove a message handler previously registered to this channel with `channel.bindStore(store)`.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const store = new AsyncLocalStorage();
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.bindStore(store);
         * channel.unbindStore(store);
         * ```
         * @since v19.9.0
         * @experimental
         * @param store The store to unbind from the channel.
         * @return `true` if the store was found, `false` otherwise.
         */
        unbindStore(store: AsyncLocalStorage<StoreType>): boolean;
        /**
         * Applies the given data to any AsyncLocalStorage instances bound to the channel
         * for the duration of the given function, then publishes to the channel within
         * the scope of that data is applied to the stores.
         *
         * If a transform function was given to `channel.bindStore(store)` it will be
         * applied to transform the message data before it becomes the context value for
         * the store. The prior storage context is accessible from within the transform
         * function in cases where context linking is required.
         *
         * The context applied to the store should be accessible in any async code which
         * continues from execution which began during the given function, however
         * there are some situations in which `context loss` may occur.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const store = new AsyncLocalStorage();
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.bindStore(store, (message) => {
         *   const parent = store.getStore();
         *   return new Span(message, parent);
         * });
         * channel.runStores({ some: 'message' }, () => {
         *   store.getStore(); // Span({ some: 'message' })
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param context Message to send to subscribers and bind to stores
         * @param fn Handler to run within the entered storage context
         * @param thisArg The receiver to be used for the function call.
         * @param args Optional arguments to pass to the function.
         */
        runStores<ThisArg = any, Args extends any[] = any[], Result = any>(
            context: ContextType,
            fn: (this: ThisArg, ...args: Args) => Result,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
        /**
         * Creates a disposable scope that binds the given data to any AsyncLocalStorage
         * instances bound to the channel and publishes it to subscribers. The scope
         * automatically restores the previous storage contexts when disposed.
         *
         * This method enables the use of JavaScript's explicit resource management
         * (`using` syntax with `Symbol.dispose`) to manage store contexts without
         * closure wrapping.
         *
         * ```js
         * import { channel } from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const store = new AsyncLocalStorage();
         * const ch = channel('my-channel');
         *
         * ch.bindStore(store, (message) => {
         *   return { ...message, timestamp: Date.now() };
         * });
         *
         * {
         *   using scope = ch.withStoreScope({ request: 'data' });
         *   // Store is entered, data is published
         *   console.log(store.getStore()); // { request: 'data', timestamp: ... }
         * }
         * // Store is automatically restored on scope exit
         * ```
         * @since v26.1.0
         * @experimental
         */
        withStoreScope(data: ContextType): RunStoresScope;
    }
    /**
     * The class `RunStoresScope` represents a disposable scope created by
     * `channel.withStoreScope(data)`. It manages the lifecycle of store
     * contexts and ensures they are properly restored when the scope exits.
     *
     * The scope must be used with the `using` syntax to ensure proper disposal.
     * @since v26.1.0
     * @experimental
     */
    interface RunStoresScope extends Disposable {}
    interface TracingChannelSubscribers<ContextType extends object> {
        start: (message: ContextType) => void;
        end: (
            message: ContextType & {
                error?: unknown;
                result?: unknown;
            },
        ) => void;
        asyncStart: (
            message: ContextType & {
                error?: unknown;
                result?: unknown;
            },
        ) => void;
        asyncEnd: (
            message: ContextType & {
                error?: unknown;
                result?: unknown;
            },
        ) => void;
        error: (
            message: ContextType & {
                error: unknown;
            },
        ) => void;
    }
    interface TracingChannelCollection<ContextType extends object = object, StoreType = ContextType> {
        start: Channel<ContextType, StoreType>;
        end: Channel<ContextType, StoreType>;
        asyncStart: Channel<ContextType, StoreType>;
        asyncEnd: Channel<ContextType, StoreType>;
        error: Channel<ContextType, StoreType>;
    }
    /**
     * The class `TracingChannel` is a collection of `TracingChannel Channels` which
     * together express a single traceable action. It is used to formalize and
     * simplify the process of producing events for tracing application flow. {@link tracingChannel} is used to construct a `TracingChannel`. As with `Channel` it is recommended to create and reuse a
     * single `TracingChannel` at the top-level of the file rather than creating them
     * dynamically.
     * @since v19.9.0
     * @experimental
     */
    interface TracingChannel<ContextType extends object = object, StoreType = ContextType>
        extends TracingChannelCollection<ContextType, StoreType>
    {
        /**
         * Helper to subscribe a collection of functions to the corresponding channels.
         * This is the same as calling `channel.subscribe(onMessage)` on each channel
         * individually.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.subscribe({
         *   start(message) {
         *     // Handle start message
         *   },
         *   end(message) {
         *     // Handle end message
         *   },
         *   asyncStart(message) {
         *     // Handle asyncStart message
         *   },
         *   asyncEnd(message) {
         *     // Handle asyncEnd message
         *   },
         *   error(message) {
         *     // Handle error message
         *   },
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param subscribers Set of `TracingChannel Channels` subscribers
         */
        subscribe(subscribers: NodeJS.PartialOptions<TracingChannelSubscribers<ContextType>>): void;
        /**
         * Helper to unsubscribe a collection of functions from the corresponding channels.
         * This is the same as calling `channel.unsubscribe(onMessage)` on each channel
         * individually.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.unsubscribe({
         *   start(message) {
         *     // Handle start message
         *   },
         *   end(message) {
         *     // Handle end message
         *   },
         *   asyncStart(message) {
         *     // Handle asyncStart message
         *   },
         *   asyncEnd(message) {
         *     // Handle asyncEnd message
         *   },
         *   error(message) {
         *     // Handle error message
         *   },
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param subscribers Set of `TracingChannel Channels` subscribers
         * @return `true` if all handlers were successfully unsubscribed, and `false` otherwise.
         */
        unsubscribe(subscribers: NodeJS.PartialOptions<TracingChannelSubscribers<ContextType>>): void;
        /**
         * Trace a synchronous function call. This will always produce a `start event` and `end event` around the execution and may produce an `error event` if the given function throws an error.
         * This will run the given function using `channel.runStores(context, ...)` on the `start` channel which ensures all
         * events should have any bound stores set to match this trace context.
         *
         * To ensure only correct trace graphs are formed, events will only be published if subscribers are present prior to starting the trace. Subscriptions
         * which are added after the trace begins will not receive future events from that trace, only future traces will be seen.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.traceSync(() => {
         *   // Do something
         * }, {
         *   some: 'thing',
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param fn Function to wrap a trace around
         * @param context Shared object to correlate events through
         * @param thisArg The receiver to be used for the function call
         * @param args Optional arguments to pass to the function
         * @return The return value of the given function
         */
        traceSync<ThisArg = any, Args extends any[] = any[], Result = any>(
            fn: (this: ThisArg, ...args: Args) => Result,
            context?: ContextType,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
        /**
         * Trace an asynchronous function call which returns a `Promise` or
         * [thenable object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables). This will always produce a [`start` event](https://nodejs.org/docs/latest-v26.x/api/diagnostics_channel.html#startevent) and
         * [`end` event](https://nodejs.org/docs/latest-v26.x/api/diagnostics_channel.html#endevent) around the synchronous portion of the function execution, and
         * will produce an [`asyncStart` event](https://nodejs.org/docs/latest-v26.x/api/diagnostics_channel.html#asyncstartevent) and [`asyncEnd` event](https://nodejs.org/docs/latest-v26.x/api/diagnostics_channel.html#asyncendevent) when the
         * returned promise is resolved or rejected. It may also produce an
         * [`error` event](https://nodejs.org/docs/latest-v26.x/api/diagnostics_channel.html#errorevent) if the given function throws an error or the returned promise
         * is rejected. This will run the given function using
         * [`channel.runStores(context, ...)`](https://nodejs.org/docs/latest-v26.x/api/diagnostics_channel.html##channelrunstorescontext-fn-thisarg-args) on the `start` channel which ensures all
         * events should have any bound stores set to match this trace context.
         *
         * If the value returned by `fn` is not a Promise or thenable, then it will be
         * returned with a warning, and no `asyncStart` or `asyncEnd` events will be
         * produced.
         *
         * To ensure only correct trace graphs are formed, events will only be published if subscribers are present prior to starting the trace. Subscriptions
         * which are added after the trace begins will not receive future events from that trace, only future traces will be seen.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.tracePromise(async () => {
         *   // Do something
         * }, {
         *   some: 'thing',
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param fn Function to wrap a trace around
         * @param context Shared object to correlate trace events through
         * @param thisArg The receiver to be used for the function call
         * @param args Optional arguments to pass to the function
         * @returns The return value of the given function, or the result of
         * calling `.then(...)` on the return value if the tracing channel has active
         * subscribers. If the return value is not a Promise or thenable, then
         * it is returned as-is and a warning is emitted.
         */
        tracePromise<ThisArg = any, Args extends any[] = any[], Result extends PromiseLike<unknown> = any>(
            fn: (this: ThisArg, ...args: Args) => Result,
            context?: ContextType,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
        /**
         * Trace a callback-receiving function call. This will always produce a `start event` and `end event` around the synchronous portion of the
         * function execution, and will produce a `asyncStart event` and `asyncEnd event` around the callback execution. It may also produce an `error event` if the given function throws an error or
         * the returned
         * promise rejects. This will run the given function using `channel.runStores(context, ...)` on the `start` channel which ensures all
         * events should have any bound stores set to match this trace context.
         *
         * The `position` will be -1 by default to indicate the final argument should
         * be used as the callback.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * channels.traceCallback((arg1, callback) => {
         *   // Do something
         *   callback(null, 'result');
         * }, 1, {
         *   some: 'thing',
         * }, thisArg, arg1, callback);
         * ```
         *
         * The callback will also be run with `channel.runStores(context, ...)` which
         * enables context loss recovery in some cases.
         *
         * To ensure only correct trace graphs are formed, events will only be published if subscribers are present prior to starting the trace. Subscriptions
         * which are added after the trace begins will not receive future events from that trace, only future traces will be seen.
         *
         * ```js
         * import diagnostics_channel from 'node:diagnostics_channel';
         * import { AsyncLocalStorage } from 'node:async_hooks';
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         * const myStore = new AsyncLocalStorage();
         *
         * // The start channel sets the initial store data to something
         * // and stores that store data value on the trace context object
         * channels.start.bindStore(myStore, (data) => {
         *   const span = new Span(data);
         *   data.span = span;
         *   return span;
         * });
         *
         * // Then asyncStart can restore from that data it stored previously
         * channels.asyncStart.bindStore(myStore, (data) => {
         *   return data.span;
         * });
         * ```
         * @since v19.9.0
         * @experimental
         * @param fn callback using function to wrap a trace around
         * @param position Zero-indexed argument position of expected callback
         * @param context Shared object to correlate trace events through
         * @param thisArg The receiver to be used for the function call
         * @param args Optional arguments to pass to the function
         * @return The return value of the given function
         */
        traceCallback<ThisArg = any, Args extends any[] = any[], Result = any>(
            fn: (this: ThisArg, ...args: Args) => Result,
            position?: number,
            context?: ContextType,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
        /**
         * `true` if any of the individual channels has a subscriber, `false` if not.
         *
         * This is a helper method available on a {@link TracingChannel} instance to check
         * if any of the [TracingChannel Channels](https://nodejs.org/api/diagnostics_channel.html#tracingchannel-channels) have subscribers.
         * A `true` is returned if any of them have at least one subscriber, a `false` is returned otherwise.
         *
         * ```js
         * const diagnostics_channel = require('node:diagnostics_channel');
         *
         * const channels = diagnostics_channel.tracingChannel('my-channel');
         *
         * if (channels.hasSubscribers) {
         *   // Do something
         * }
         * ```
         * @since v22.0.0, v20.13.0
         */
        readonly hasSubscribers: boolean;
    }
    interface BoundedChannelSubscribers<ContextType extends object> {
        start: (message: ContextType) => void;
        end: (message: ContextType) => void;
    }
    interface BoundedChannelCollection<ContextType extends object = object, StoreType = ContextType> {
        start: Channel<ContextType, StoreType>;
        end: Channel<ContextType, StoreType>;
    }
    /**
     * The class `BoundedChannel` is a simplified version of {@link TracingChannel} that
     * only traces synchronous operations. It consists of two channels (`start` and
     * `end`) instead of five, omitting the `asyncStart`, `asyncEnd`, and `error`
     * events. This makes it suitable for tracing operations that don't involve
     * asynchronous continuations or error handling.
     *
     * Like `TracingChannel`, it is recommended to create and reuse a single
     * `BoundedChannel` at the top-level of the file rather than creating them
     * dynamically.
     * @since v26.1.0
     * @experimental
     */
    interface BoundedChannel<ContextType extends object = object, StoreType = ContextType>
        extends BoundedChannelCollection<ContextType, StoreType>
    {
        /**
         * Check if any of the `start` or `end` channels have subscribers.
         *
         * ```js
         * import { boundedChannel } from 'node:diagnostics_channel';
         *
         * const wc = boundedChannel('my-operation');
         *
         * if (wc.hasSubscribers) {
         *   // There are subscribers, perform traced operation
         * }
         * ```
         * @since v26.1.0
         */
        readonly hasSubscribers: boolean;
        /**
         * Subscribe to the bounded channel events. This is equivalent to calling
         * [`channel.subscribe(onMessage)`][] on each channel individually.
         *
         * ```mjs
         * import { boundedChannel } from 'node:diagnostics_channel';
         *
         * const wc = boundedChannel('my-operation');
         *
         * wc.subscribe({
         *   start(message) {
         *     // Handle start
         *   },
         *   end(message) {
         *     // Handle end
         *   },
         * });
         * ```
         * @since v26.1.0
         * @param handlers Set of channel subscribers
         */
        subscribe(handlers: NodeJS.PartialOptions<BoundedChannelSubscribers<ContextType>>): void;
        /**
         * Unsubscribe from the bounded channel events. This is equivalent to calling
         * [`channel.unsubscribe(onMessage)`][] on each channel individually.
         *
         * ```js
         * import { boundedChannel } from 'node:diagnostics_channel';
         *
         * const wc = boundedChannel('my-operation');
         *
         * const handlers = {
         *   start(message) {},
         *   end(message) {},
         * };
         *
         * wc.subscribe(handlers);
         * wc.unsubscribe(handlers);
         * ```
         * @since v26.1.0
         * @param handlers Set of channel subscribers
         * @returns `true` if all handlers were successfully unsubscribed,
         * `false` otherwise.
         */
        unsubscribe(handlers: NodeJS.PartialOptions<BoundedChannelSubscribers<ContextType>>): boolean;
        /**
         * Trace a synchronous function call. This will produce a `start` event and `end`
         * event around the execution. This runs the given function using
         * [`channel.runStores(context, ...)`][] on the `start` channel which ensures all
         * events have any bound stores set to match this trace context.
         *
         * ```js
         * import { boundedChannel } from 'node:diagnostics_channel';
         *
         * const wc = boundedChannel('my-operation');
         *
         * const result = wc.run({ operationId: '123' }, () => {
         *   // Perform operation
         *   return 42;
         * });
         * ```
         * @since v26.1.0
         * @param context Shared object to correlate events through
         * @param fn Function to wrap a trace around
         * @param thisArg The receiver to be used for the function call
         * @param args Optional arguments to pass to the function
         * @returns The return value of the given function
         */
        run<ThisArg = any, Args extends any[] = any[], Result = any>(
            fn: (this: ThisArg, ...args: Args) => Result,
            context?: ContextType,
            thisArg?: ThisArg,
            ...args: Args
        ): Result;
        /**
         * Create a disposable scope for tracing a synchronous operation using JavaScript's
         * explicit resource management (`using` syntax). The scope automatically publishes
         * `start` and `end` events, enters bound stores, and handles cleanup when disposed.
         *
         * ```js
         * import { boundedChannel } from 'node:diagnostics_channel';
         *
         * const wc = boundedChannel('my-operation');
         *
         * const context = { operationId: '123' };
         * {
         *   using scope = wc.withScope(context);
         *   // Stores are entered, start event is published
         *
         *   // Perform work and set result on context
         *   context.result = 42;
         * }
         * // End event is published, stores are restored automatically
         * ```
         * @since v26.1.0
         * @param context Shared object to correlate events through
         * @returns Disposable scope object
         */
        withScope(context: ContextType): BoundedChannelScope;
    }
    /**
     * The class `BoundedChannelScope` represents a disposable scope created by
     * `boundedChannel.withScope(context)`. It manages the lifecycle of a traced
     * operation, automatically publishing events and managing store contexts.
     *
     * The scope must be used with the `using` syntax to ensure proper disposal.
     *
     * ```js
     * import { boundedChannel } from 'node:diagnostics_channel';
     *
     * const wc = boundedChannel('my-operation');
     *
     * const context = {};
     * {
     *   using scope = wc.withScope(context);
     *   // Start event is published, stores are entered
     *   context.result = performOperation();
     *   // End event is automatically published at end of block
     * }
     * ```
     * @since v26.1.0
     * @experimental
     */
    interface BoundedChannelScope extends Disposable {}
}
declare module "diagnostics_channel" {
    export * from "node:diagnostics_channel";
}
