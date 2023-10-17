import { EventEmitter } from "events";
import { Expression as JsonataExpression } from "jsonata";

import * as registry from "@node-red/registry";
import * as runtime from "@node-red/runtime";

declare const util: util.UtilModule;

export = util;

declare namespace util {
    interface LogMessageObject {
        level: number;
        msg?: LogMessage | undefined;
        type?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
    }

    type LogMessage = any;

    interface Log {
        /** Fatal level */
        readonly FATAL: number;
        /** Error level */
        readonly ERROR: number;
        /** Warn level */
        readonly WARN: number;
        /** Info level */
        readonly INFO: number;
        /** Debug level */
        readonly DEBUG: number;
        /** Trace level */
        readonly TRACE: number;
        /** Audit level */
        readonly AUDIT: number;
        /** Metric level */
        readonly METRIC: number;

        /**
         * Perform a message catalog lookup.
         */
        _: I18nTFunction;

        /**
         * Add a log handler
         * @param - event emitter with `(msg: LogMessageObject) => void` listener on `log` events
         */
        addHandler(handler: EventEmitter): void;
        /**
         * Remove a log handler
         */
        removeHandler(handler: EventEmitter): void;
        /**
         * Log a message object
         */
        log(msg: LogMessageObject): void;
        /**
         * Log a message at INFO level
         */
        info(msg: LogMessage): void;
        /**
         * Log a message at WARN level
         */
        warn(msg: LogMessage): void;
        /**
         * Log a message at ERROR level
         */
        error(msg: LogMessage): void;
        /**
         * Log a message at TRACE level
         */
        trace(msg: LogMessage): void;
        /**
         * Log a message at DEBUG level
         */
        debug(msg: LogMessage): void;
        /**
         * Check if metrics are enabled
         */
        metric(): boolean;
        /**
         * Log an audit event.
         */
        audit(msg: LogMessageObject, req?: object): void;
    }

    interface MessageCatalog {
        namespace: string;
        dir: string;
        file: string;
    }

    // tslint:disable-next-line:interface-name
    interface I18nTFunction {
        (id: string, tplStrs?: Record<string, string | number>): string;
    }

    // tslint:disable-next-line:interface-name
    interface I18n {
        /**
         * Perform a message catalog lookup.
         */
        _: I18nTFunction;

        /**
         * Register multiple message catalogs with i18n.
         */
        registerMessageCatalogs(catalogs: MessageCatalog[]): Promise<object[]>;

        /**
         * Register a message catalog with i18n.
         */
        registerMessageCatalog(namespace: string, dir: string, file: string): Promise<void>;

        /**
         * Gets a message catalog.
         */
        catalog(namespace: string, lang: string): MessageCatalog;

        /**
         * Gets a list of languages a given catalog is available in.
         */
        availableLanguages(namespace: string): string[];
    }

    interface Util {
        /**
         * Generates a psuedo-unique-random id.
         * @returns a random-ish id
         */
        generateId(): string;
        /**
         * Converts the provided argument to a String, using type-dependent
         * methods.
         *
         * @param o - the property to convert to a String
         * @returns the stringified version
         */
        ensureString(o: unknown): string;
        /**
         * Converts the provided argument to a Buffer, using type-dependent
         * methods.
         *
         * @param o - the property to convert to a Buffer
         * @returns the Buffer version
         */
        ensureBuffer(o: unknown): Buffer;
        /**
         * Safely clones a message object. This handles msg.req/msg.res objects that must
         * not be cloned.
         *
         * @param msg - the message object to clone
         * @returns the cloned message
         */
        cloneMessage<TNodeMessage extends registry.NodeMessage>(msg: TNodeMessage): TNodeMessage;
        /**
         * Compares two objects, handling various JavaScript types.
         *
         * @param obj1
         * @param obj2
         * @returns whether the two objects are the same
         */
        compareObjects(obj1: object, obj2: object): boolean;
        /**
         * Parses a property expression, such as `msg.foo.bar[3]` to validate it
         * and convert it to a canonical version expressed as an Array of property
         * names.
         *
         * For example, `a["b"].c` returns `['a','b','c']`
         *
         * If `msg` is provided, any internal cross-references will be evaluated against that
         * object. Otherwise, it will return a nested set of properties
         *
         * For example, without msg set, 'a[msg.foo]' returns `['a', [ 'msg', 'foo'] ]`
         * But if msg is set to '{"foo": "bar"}', 'a[msg.foo]' returns `['a', 'bar' ]`
         *
         * If `toString` is set to true, the returned array will be converted to a string
         *
         * @param str - the property expression
         * @param msg - the message object to use for cross-references
         * @param toString - whether to convert the returned array to a string
         * @returns the normalised expression
         */
        normalisePropertyExpression(str: string, msg?: registry.NodeMessage, toString?: false): Array<string | number>;
        normalisePropertyExpression(str: string, msg: registry.NodeMessage, toString: true): string;
        /**
         * Gets a property of a message object.
         *
         * Unlike `getObjectProperty`, this function will strip `msg.` from the
         * front of the property expression if present.
         *
         * @param msg - the message object
         * @param expr - the property expression
         * @returns the message property, or undefined if it does not exist
         */
        getMessageProperty(msg: registry.NodeMessage, expr: string): any;
        /**
         * Gets a property of an object.
         *
         * @param msg - the object
         * @param expr - the property expression
         * @returns the object property, or undefined if it does not exist
         */
        getObjectProperty(msg: registry.NodeMessage, expr: string): any;
        /**
         * Sets a property of a message object.
         *
         * Unlike `setObjectProperty`, this function will strip `msg.` from the
         * front of the property expression if present.
         *
         * @param  msg           - the message object
         * @param  prop          - the property expression
         * @param  value         - the value to set
         * @param  createMissing - whether to create missing parent properties
         */
        setMessageProperty(msg: registry.NodeMessage, prop: string, value: any, createMissing?: boolean): boolean;
        /**
         * Sets a property of an object.
         *
         * @param  msg           - the object
         * @param  prop          - the property expression
         * @param  value         - the value to set
         * @param  createMissing - whether to create missing parent properties
         */
        setObjectProperty(msg: registry.NodeMessage, prop: string, value: any, createMissing?: boolean): boolean;
        /**
         * Get value of environment variable.
         * @param node - accessing node
         * @param name - name of variable
         * @returns value of env var
         */
        getSetting(node: registry.Node, name: string): string;
        /**
         * Checks if a String contains any Environment Variable specifiers and returns
         * it with their values substituted in place.
         *
         * For example, if the env var `WHO` is set to `Joe`, the string `Hello ${WHO}!`
         * will return `Hello Joe!`.
         * @param value - the string to parse
         * @param node - the node evaluating the property
         * @returns The parsed string
         */
        evaluateEnvProperty(value: string, node: registry.Node): string;
        /**
         * Parses a context property string, as generated by the TypedInput, to extract
         * the store name if present.
         *
         * For example, `#:(file)::foo` results in ` { store: "file", key: "foo" }`.
         *
         * @param key - the context property string to parse
         * @returns The parsed property
         */
        parseContextStore(key: string): { store?: string | undefined; key: string };
        /**
         * Evaluates a property value according to its type.
         *
         * @param   value    - the raw value
         * @param   type     - the type of the value
         * @param   node     - the node evaluating the property
         * @param   msg      - the message object to evaluate against
         * @param   callback - (optional) called when the property is evaluated
         * @returns The evaluted property, if no `callback` is provided
         */
        evaluateNodeProperty(value: string, type: string, node: registry.Node, msg: registry.NodeMessage): any;
        evaluateNodeProperty(
            value: string,
            type: string,
            node: registry.Node,
            msg: registry.NodeMessage,
            callback: (err: Error | null, result: any) => void,
        ): void;
        /**
         * Prepares a JSONata expression for evaluation.
         * This attaches Node-RED specific functions to the expression.
         *
         * @param value - the JSONata expression
         * @param node  - the node evaluating the property
         * @returns The JSONata expression that can be evaluated
         */
        prepareJSONataExpression(value: string, node: registry.Node): JsonataExpression;
        /**
         * Evaluates a JSONata expression.
         * The expression must have been prepared with `prepareJSONataExpression`
         * before passing to this function.
         *
         * @param   expr     - the prepared JSONata expression
         * @param   msg      - the message object to evaluate against
         * @param   callback - (optional) called when the expression is evaluated
         * @returns If no callback was provided, the result of the expression
         */
        evaluateJSONataExpression(expr: JsonataExpression, msg: registry.NodeMessage): any;
        evaluateJSONataExpression(
            expr: JsonataExpression,
            msg: registry.NodeMessage,
            callback: (err: Error | null, resp: any) => void,
        ): void;
        /**
         * Normalise a node type name to camel case.
         *
         * For example: `a-random node type` will normalise to `aRandomNodeType`
         *
         * @param name - the node type
         * @returns The normalised name
         */
        normaliseNodeTypeName(name: string): string;
        /**
         * Encode an object to JSON without losing information about non-JSON types
         * such as Buffer and Function.
         *
         * *This function is closely tied to its reverse within the editor*
         *
         * @param msg
         * @param opts
         * @returns the encoded object
         */
        encodeObject(msg: { msg: any }, opts?: { maxLength?: number | undefined }): { format: string; msg: string };
    }

    // Used `boolean` in PromiseLike instead of `false` because it caused problems with `async` functions
    type HandlerFunction<T> = (payload: T, callback: (err?: any) => void) => void | false | PromiseLike<void | boolean>; // tslint:disable-line:void-return

    interface Hooks {
        /**
         * A node has called `node.send()` with one or more messages.
         *
         * The hook is passed an array of `SendEvent` objects.
         * The messages inside these objects are exactly what the node has passed to `node.send`
         * - meaning there could be duplicate references to the same message object.
         *
         * This hook should complete synchronously in order to avoid unexpected behaviour.
         *
         * If it needs to do asynchronously work, it must clone and replace the message object in the event it receives.
         * It must also set the `cloneMessage` property to `false` to ensure no subsequent cloning happens on the message.
         *
         * If the hook returns `false`, the messages will not proceed any further.
         */
        add(hookName: "onSend", hookHandler: HandlerFunction<SendEvent[]>): void;

        /**
         * A message is about to be routed to its destination.
         *
         * The hook is passed a single `SendEvent`.
         *
         * This hook should complete synchronously in order to avoid unexpected behaviour.
         *
         * If it needs to do asynchronously work, it must clone and replace
         * the message object in the event it receives.
         * It must also set the `cloneMessage` property to `false` to ensure no subsequent cloning happens on the message.
         *
         * If the hook returns `false`, the message will not proceed any further.
         */
        add(hookName: "preRoute", handlerFunction: HandlerFunction<SendEvent>): void;

        /**
         * A message is about to be delivered
         *
         * The hook is passed a single `SendEvent`.
         * At this point, the local router has identified the node it is going to send to and set the `destination.node` property of the `SendEvent`.
         *
         * The message will have been cloned if needed.
         *
         * If the hook returns `false`, the messages will not proceed any further.
         */
        add(hookName: "preDeliver", handlerFunction: HandlerFunction<SendEvent>): void; // tslint:disable-line:unified-signatures

        /**
         * A message has been dispatched to its destination.
         *
         * The hook is passed a single `SendEvent`. The message is delivered asynchronously to the hooks execution.
         */
        add(hookName: "postDeliver", handlerFunction: HandlerFunction<SendEvent>): void; // tslint:disable-line:unified-signatures

        /**
         * A message is about to be received by a node.
         *
         * The hook is passed a `ReceiveEvent`.
         *
         * If the hook returns `false`, the messages will not proceed any further.
         */
        add(hookName: "onReceive", handlerFunction: HandlerFunction<ReceiveEvent>): void;

        /**
         * A message has been received by a node.
         *
         * The hook is passed `ReceiveEvent` when the message has been given to the node’s `input` handler.
         */
        add(hookName: "postReceive", handlerFunction: HandlerFunction<ReceiveEvent>): void; // tslint:disable-line:unified-signatures

        /**
         * A node has completed with a message or logged an error for it.
         *
         * The hook is passed a `CompleteEvent`.
         */
        add(hookName: "onComplete", handlerFunction: HandlerFunction<CompleteEvent>): void;

        /**
         * Called before running `npm install` to install an npm module.
         *
         * The hook is passed an `InstallEvent` object that contains information about the module to be installed.
         *
         * The hook can modify the InstallEvent to change how npm is run.
         * For example, the `args` array can be modified to change what arguments are passed to `npm`.
         *
         * If the hook returns `false`, the `npm install` will be skipped and the processing continue as if it had been run.
         * This would allow some alternative mechanism to be used - as long as it results in the module being installed under the expected `node_modules` directory.
         *
         * If the hook throws an error, the install will be cleanly failed.
         */
        add(hookName: "preInstall", handlerFunction: HandlerFunction<InstallEvent>): void;

        /**
         * Called after `npm install` finishes installing an npm module.
         *
         * Note if a `preInstall` hook returned `false`, `npm install` will not have been run, but this hook will still get invoked.
         *
         * This hook can be used to run any post-install activity needed.
         *
         * If the hook throws an error, the install will be cleanly failed.
         *
         * If the preceding `npm install` returned an error, this hook will not be invoked.
         */
        add(hookName: "postInstall", handlerFunction: HandlerFunction<InstallEvent>): void; // tslint:disable-line:unified-signatures

        /**
         * Called before running `npm remove` to uninstall an npm module.
         *
         * The hook is passed an `UninstallEvent` object that contains information about the module to be removed.
         *
         * The hook can modify the UninstallEvent to change how npm is run.
         * For example, the args array can be modified to change what arguments are passed to npm.
         *
         * If the hook returns false, the npm remove will be skipped and the processing continue as if it had been run.
         * This would allow some alternative mechanism to be used.
         *
         * If the hook throws an error, the uninstall will be cleanly failed.
         */
        add(hookName: "preUninstall", handlerFunction: HandlerFunction<UninstallEvent>): void;

        /**
         * Called after `npm remove` finishes removing an npm module.
         *
         * Note if a `preUninstall` hook returned `false`, `npm remove` will not have been run, but this hook will still get invoked.
         *
         * This hook can be used to run any post-uninstall activity needed.
         *
         * If the hook throws an error, it will be logged, but the uninstall will complete cleanly as we cannot rollback an `npm remove` after it has completed.
         */
        add(hookName: "postUninstall", handlerFunction: HandlerFunction<UninstallEvent>): void; // tslint:disable-line:unified-signatures

        /**
         * Register a new hook handler.
         *
         * @see https://nodered.org/docs/api/hooks/#methods-add
         */
        add(hookName: string, handlerFunction: HandlerFunction<any>): void;

        /**
         * Remove a hook handler.
         *
         * Only handlers that were registered with a labelled name (for example `onSend.my-hooks`) can be removed.
         *
         * To remove all hooks with a given label, `*.my-hooks` can be used.
         */
        remove(hookName: string): void;
        has(hookName: string): boolean;
    }

    // #region Hook Event Objects

    interface SendEvent {
        msg: registry.NodeMessage;
        source: {
            /** node id */
            id: string;
            node: registry.Node;
            /** index of port being sent on */
            port: number;
        };
        destination: {
            /** node id */
            id: string;
            node: undefined;
        };
        cloneMessage: boolean;
    }

    interface ReceiveEvent {
        msg: registry.NodeMessage;
        destination: {
            /** node id */
            id: string;
            node: registry.Node;
        };
    }

    interface CompleteEvent {
        msg: registry.NodeMessage;
        node: {
            id: string;
            node: registry.Node;
        };
        error?: Error;
    }

    interface InstallEvent {
        /** npm module name */
        module: string;
        /** Version of the module that is being installed */
        version: string;
        /** Optional url to install from */
        url?: string;
        /** Directory to run the install in */
        dir: string;
        isExisting?: boolean;
        isUpgrade?: boolean;
        /** Array of args that will be passed to npm */
        args: string[];
    }

    interface UninstallEvent {
        /** npm module name */
        module: string;
        /** Directory to run the remove in */
        dir: string;
        /** Array of args that will be passed to npm */
        args: string[];
    }

    // #endregion

    interface UtilModule {
        /**
         * Initialise the module with the runtime settings
         * @param settings
         */
        init(settings: runtime.LocalSettings): void;

        /**
         * Logging utilities
         */
        log: Log;

        /**
         * Internationalization utilities
         */
        i18n: I18n;

        /**
         * General utilities
         */
        util: Util;

        /**
         * Runtime hooks engine
         */
        hooks: Hooks;
    }
}
