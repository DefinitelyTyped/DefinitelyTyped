// Type definitions for @node-red/util 1.1
// Project: https://github.com/node-red/node-red/tree/master/packages/node_modules/%40node-red/util, https://nodered.org/
// Definitions by: Alex Kaul <https://github.com/alexk111>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

import { EventEmitter } from 'events';
import { Expression as JsonataExpression } from 'jsonata';

import * as registry from '@node-red/registry';
import * as runtime from '@node-red/runtime';

declare const util: util.UtilModule;

export = util;

declare namespace util {
    interface LogMessageObject {
        level: number;
        msg?: LogMessage;
        type?: string;
        id?: string;
        name?: string;
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
        cloneMessage<T extends registry.NodeMessage>(msg: T): T;
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
         * @param str - the property expression
         * @returns the normalised expression
         */
        normalisePropertyExpression(str: string): Array<string | number>;
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
        getMessageProperty(msg: object, expr: string): any;
        /**
         * Gets a property of an object.
         *
         * @param msg - the object
         * @param expr - the property expression
         * @returns the object property, or undefined if it does not exist
         */
        getObjectProperty(msg: object, expr: string): any;
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
        setMessageProperty(msg: object, prop: string, value: any, createMissing?: boolean): boolean;
        /**
         * Sets a property of an object.
         *
         * @param  msg           - the object
         * @param  prop          - the property expression
         * @param  value         - the value to set
         * @param  createMissing - whether to create missing parent properties
         */
        setObjectProperty(msg: object, prop: string, value: any, createMissing?: boolean): boolean;
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
        parseContextStore(key: string): { store?: string; key: string };
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
        evaluateNodeProperty(value: string, type: string, node: registry.Node, msg: object): any;
        evaluateNodeProperty(
            value: string,
            type: string,
            node: registry.Node,
            msg: object,
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
        evaluateJSONataExpression(expr: JsonataExpression, msg: object): any;
        evaluateJSONataExpression(
            expr: JsonataExpression,
            msg: object,
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
        encodeObject(msg: { msg: any }, opts?: { maxLength?: number }): { format: string; msg: string };
    }

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
    }
}
