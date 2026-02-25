/**
 * Mokapi JavaScript API
 *
 * This module exposes the core scripting API for Mokapi.
 * It allows you to intercept and manipulate protocol events (HTTP, Kafka, LDAP, SMTP),
 * schedule jobs, generate mock data, and share state between scripts.
 *
 * Documentation:
 * https://mokapi.io/docs/javascript-api/overview
 */

import "./faker";
import "./global";
import "./http";
import "./mustache";
import "./yaml";
import "./encoding";
import "./mail";
import "./file";

/**
 * Attaches an event handler for the given event.
 *
 * Event handlers are executed in priority order whenever the event occurs.
 * Multiple handlers can be registered for the same event.
 *
 * https://mokapi.io/docs/javascript-api/mokapi/on
 * @param event Event type such as `http`, `kafka`, `ldap`, or `smtp`
 * @param handler Function executed when the event is triggered
 * @param args Optional event configuration such as priority, tracking, or tags
 * @example
 * export default function() {
 *   on('http', function(request, response) {
 *     if (request.url.path === '/echo') {
 *       response.data = {
 *         url: request.url.toString(),
 *         body: request.body,
 *       }
 *     }
 *   })
 * }
 */
export function on<T extends keyof EventHandler>(event: T, handler: EventHandler[T], args?: TypedEventArgs[T]): void;

/**
 * Schedules a new periodic job with interval.
 * @param interval interval - Scheduled interval.
 * @param f f - Scheduled event handler
 * @param args args - Additional arguments
 * @example
 * export default function() {
 *   every('1m', function() {
 *     console.log('foo')
 *   })
 * }
 */
export function every(interval: Interval, f: ScheduledEventHandler, args?: ScheduledEventArgs): void;

/**
 * Schedules a new periodic job with a cron expression.
 * @param expr expr - Cron expression
 * @param f f - cheduled event handler
 * @param args args - Additional arguments
 * @example
 * export default function() {
 *   cron('* * * * *', function() {
 *     console.log('foo')
 *   })
 * }
 */
export function cron(expr: string, f: ScheduledEventHandler, args?: ScheduledEventArgs): void;

/**
 * Retrieves the value of the environment variable named by the key.
 * @param name name - The name of the environment variable.
 * @returns The value of the environment variable specified by variable, or an empty string
 * if the environment variable is not found.
 * @example
 * export default function() {
 *   console.log(env('foo'))
 * }
 */
export function env(name: string): string;

/**
 * Returns a textual representation of the date.
 * https://mokapi.io/docs/javascript-api/mokapi/date
 * @description Default layout is RFC3339. Default timestamp is current UTC
 * @param args args - Adjusting textual representation
 * @example
 * export default function() {
 *   console.log(date())
 *   console.log(date({layout: 'UnixDate'}))
 *   console.log(date({timestamp: new Date().getTime()}))
 * }
 */
export function date(args?: DateArgs): string;

/**
 * Suspends the execution for the specified duration.
 * https://mokapi.io/docs/javascript-api/mokapi/sleep
 * @param time Duration in milliseconds or duration as string with unit.
 * Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`
 */
export function sleep(time: number | string): void;

/**
 * Specifies the interval of a periodic job.
 * Interval string is a possibly signed sequence of decimal numbers, each with an optional
 * fraction and a unit suffix, such as "300ms", "-1.5h" or "2h45m".
 * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
 */
export type Interval = string;

export interface EventHandler {
    http: HttpEventHandler;
    kafka: KafkaEventHandler;
    ldap: LdapEventHandler;
    smtp: SmtpEventHandler;
}

/**
 * HttpEventHandler is invoked for every incoming HTTP request.
 *
 * Handlers may modify the response object to influence the outgoing response.
 * The return value is ignored.
 *
 * https://mokapi.io/docs/javascript-api/mokapi/eventhandler/httpeventhandler
 * @example
 * export default function() {
 *   on('http', function(request, response) {
 *     if (request.operationId === 'time') {
 *       response.body = date()
 *     }
 *   })
 * }
 */
export type HttpEventHandler = (request: HttpRequest, response: HttpResponse) => void | Promise<void>;

/**
 * HttpRequest is an object used by HttpEventHandler that contains request-specific
 * data such as HTTP headers.
 * https://mokapi.io/docs/javascript-api/mokapi/eventhandler/httprequest
 */
export interface HttpRequest {
    /**
     * Request method.
     * @example GET
     */
    readonly method: string;

    /** Represents a parsed URL. */
    readonly url: Url;

    /** Body contains the request body specified by OpenAPI request body. */
    readonly body: any;

    /** Object contains path parameters specified by OpenAPI path parameters. */
    readonly path: { [key: string]: any };

    /** Object contains query parameters specified by OpenAPI query parameters. */
    readonly query: { [key: string]: any };

    /** Object contains header parameters specified by OpenAPI header parameters. */
    readonly header: { [key: string]: any };

    /** Object contains cookie parameters specified by OpenAPI cookie parameters. */
    readonly cookie: { [key: string]: any };

    /** Object contains querystring parameters specified by OpenAPI querystring parameters. */
    readonly querystring: any;

    /** Name of the API, as defined in the OpenAPI `info.title` field */
    readonly api: string;

    /** Path value specified by the OpenAPI path */
    readonly key: string;

    /** OperationId defined in OpenAPI */
    readonly operationId: string;

    /** Returns a string representing this HttpRequest object.  */
    toString(): string;
}

/**
 * HttpResponse is an object used by HttpEventHandler that contains response-specific data such as HTTP headers.
 * https://mokapi.io/docs/javascript-api/mokapi/eventhandler/httpresponse
 */
export interface HttpResponse {
    /** Object contains header parameters specified by OpenAPI header parameters. */
    headers: { [key: string]: any };

    /** Specifies the http status used to select the OpenAPI response definition. */
    statusCode: number;

    /** Response body. It has a higher precedence than data. */
    body: string;

    /** Data will be encoded with the OpenAPI response definition. */
    data: any;

    /**
     * Rebuilds the entire HTTP response using the OpenAPI response definition.
     *
     * This resets the status code, headers, and response body/data
     * based on the OpenAPI specification.
     *
     * - If `statusCode` is omitted, the OpenAPI `default` response is used.
     * - If `contentType` is omitted, the first defined content type for the
     *   selected status code is used.
     *
     * Use this when switching to a different response (e.g. error handling)
     * while keeping the response schema valid.
     *
     * @throws Error if the status code or content type is not defined in the OpenAPI spec
     *
     * @example
     * on('http', (request, response) => {
     *   if (request.path.petId === 10) {
     *     response.rebuild(404)
     *     response.data.message = 'Pet not found'
     *   }
     * })
     */
    rebuild: (statusCode?: number, contentType?: string) => void;
}

/**
 * Represents an URL
 */
export interface Url {
    /** URL scheme. */
    readonly scheme: string;

    /** URL host. */
    readonly host: string;

    /** URL port */
    readonly port: number;

    /** URL path. */
    readonly path: string;

    /** URL query string. */
    readonly query: string;

    /** Returns a string representing this Url object.  */
    toString(): string;
}

/**
 * KafkaEventHandler is a function that is executed when a Kafka message is received.
 * https://mokapi.io/docs/javascript-api/mokapi/eventhandler/KafkaEventHandler
 * @example
 * export default function() {
 *   on('kafka', function(msg) {
 *     // add header 'foo' to every Kafka message
 *     msg.headers = { foo: 'bar' }
 *   })
 * }
 */
export type KafkaEventHandler = (message: KafkaEventMessage) => void | Promise<void>;

/**
 * KafkaEventMessage is an object used by KafkaEventHandler that contains Kafka-specific message data.
 * https://mokapi.io/docs/javascript-api/mokapi/eventhandler/KafkaEventMessage
 */
export interface KafkaEventMessage {
    /** Kafka partition where the message was written to (read-only). */
    readonly offset: number;

    /** Kafka message key  */
    key: string;

    /** Kafka message value */
    value: string;

    /** Kafka message headers */
    headers: { [name: string]: string } | null;
}

/**
 * LdapEventHandler is a function that is executed when a LDAP search query is triggered.
 * @example
 * export default function() {
 *   on('ldap', function(request, response) {
 *     if (request.filter === '(objectClass=foo)') {
 *       response.results = [
 *         {
 *           dn: 'CN=bob,CN=users,DC=mokapi,DC=io',
 *           attributes: {
 *             mail: ['bob@mokapi.io'],
 *             objectClass: ['foo']
 *           }
 *         }
 *       ]
 *     }
 *   })
 * }
 */
export type LdapEventHandler = (request: LdapSearchRequest, response: LdapSearchResponse) => void | Promise<void>;

/**
 * LdapSearchRequest is an object used by LdapEventHandler that contains request-specific data.
 */
export interface LdapSearchRequest {
    /** Search base DN. */
    baseDN: string;

    /** Search scope. */
    scope: LdapSearchScope;

    /** Alias dereference policy. */
    dereferencePolicy: number;

    /** Maximum number of entries to return from the search. */
    sizeLimit: number;

    /** Maximum length of time in seconds to allow for the search. */
    timeLimit: number;

    /** Only retrieve attribute names but not their values. */
    typesOnly: number;

    /** String representation of an LDAP search filter. */
    filter: string;

    /** Attribute list specifies the attributes to return in the entries found by the search. */
    attributes: string[];
}

/**
 * LdapSearchResponse is an object used by LdapEventHandler that contains response-specific data.
 */
export interface LdapSearchResponse {
    /** List of search result */
    results: LdapSearchResult[];

    /** Status of search operation */
    status: LdapResultStatus;

    /** Search response message */
    message: string;
}

/**
 * LdapSearchResult is an object used by LdapSearchResponse that contains one result of a search request.
 */
export interface LdapSearchResult {
    /** LDAP distinguished name of this result. */
    dn: string;

    /** Attribute list of this result */
    attributes: { [name: string]: string[] };
}

/**
 * Specifies the portion of the target subtree that should be considered.
 */
export enum LdapSearchScope {
    /**
     * Indicates that only the entry specified as sthe search base should be considered.
     * None of its subordinates will be considered.
     */
    BaseObject,

    /**
     * Indicates that only the immediate children of the entry specified should be considered.
     */
    SingleLevel,

    /**
     * Indicates that the entry specified as the search base, and all of its subordinates to any depth.
     */
    WholeSubtree,
}

/**
 * Defines a number of result codes that are intended to be used in LdapSearchResponse.
 */
export enum LdapResultStatus {
    /** The success result code is used to indicate that the associated operation completed successfully. */
    Success = 0,

    /** Indicates that the operation could not be processed because it wasn’t in the expected
     * order relative to other operations on the same connection.
     */
    OperationsError = 1,

    /** Indicates that there was a problem with the client’s use of the LDAP protocol. */
    ProtocolError = 2,

    /**
     *  indicates that the associated search operation failed because the server has determined
     *  that the number of entries that would be returned in response to the search would exceed
     *  the upper bound for that operation.
     */
    SizeLimitExceeded = 4,
}

export type SmtpEventHandler = (record: SmtpEventMessage) => void | Promise<void>;

export interface SmtpEventMessage {
    server: string;
    sender?: Address;
    from: Address[];
    to: Address[];
    replyTo?: Address[];
    cc?: Address[];
    bcc?: Address[];
    messageId: string;
    inReplyTo?: string;
    time?: Date;
    subject: string;
    contentType: string;
    encoding: string;
    body: string;
    attachments: Attachment[];
}

export interface Address {
    name?: string;
    address: string;
}

export interface Attachment {
    name: string;
    contentType: string;
    data: Uint8Array;
}

/**
 * Contains optional arguments to format a datetime object
 */
export interface DateArgs {
    /**
     * The format of the textual representation, default is RFC3339
     */
    layout?: DateLayout | string;

    /**
     * The timestamp of the date, default is current UTC time
     */
    timestamp?: number;
}

/**
 * These are predefined layouts for use in date()
 */
export type DateLayout =
    | "DateTime"
    | "DateOnly"
    | "TimeOnly"
    | "UnixDate"
    | "RFC882"
    | "RFC822Z"
    | "RFC850"
    | "RFC1123"
    | "RFC1123Z"
    | "RFC3339"
    | "RFC3339Nano";

/**
 * EventArgs provides optional configuration for an event handler.
 * https://mokapi.io/docs/javascript-api/mokapi/on
 *
 * Use this object to control how the event is tracked, labeled,
 * and ordered in the execution pipeline.
 *
 * @example
 * export default function() {
 *   on('http', function(req, res) {
 *     res.data = { message: "tracked event" }
 *   }, {
 *     tags: { feature: 'beta', owner: 'team-a' },
 *     track: true
 *   })
 * }
 */
export interface EventArgs {
    /**
     * Adds or overrides tags used to label this event in the dashboard.
     * Tags can be used for filtering, grouping, or ownership attribution.
     */
    tags?: { [key: string]: string };

    /**
     * Defines the execution order of the event handler.
     *
     * Event handlers are executed in descending priority order.
     * Handlers with the same priority are executed in registration order.
     *
     * Handlers with higher priority values run first.
     * Handlers with lower priority values run later.
     *
     * Use negative priorities (e.g. -1) to run a handler after
     * the response has been fully populated by other handlers,
     * such as for logging or recording purposes.
     */
    priority?: number;
}

/**
 * TypedEventArgs provides strongly typed argument objects
 * for each supported event type.
 *
 * It is mainly used internally to map event names
 * (e.g. `http`, `kafka`) to their corresponding argument types.
 */
export interface TypedEventArgs {
    /**
     * Arguments for HTTP event handlers.
     */
    http: HttpEventArgs;
    /**
     * Arguments for Kafka event handlers.
     */
    kafka: KafkaEventArgs;
    /**
     * Arguments for LDAP event handlers.
     */
    ldap: LdapEventArgs;
    /**
     * Arguments for SMTP event handlers.
     */
    smtp: SmtpEventArgs;
}

/**
 * Configuration options for HTTP event handlers.
 *
 * These arguments control execution behavior such as
 * priority, tagging, and dashboard tracking.
 */
export interface HttpEventArgs extends EventArgs {
    /**
     * Controls whether this event handler is tracked in the dashboard.
     *
     * - true: always track this handler
     * - false: never track this handler
     * - undefined: Mokapi determines tracking automatically based on
     *   whether the response object was modified by the handler
     */
    track?: boolean | ((request: HttpRequest, response: HttpResponse) => boolean);
}

/**
 * Configuration options for Kafka event handlers.
 *
 * These arguments control execution behavior such as
 * priority, tagging, and dashboard tracking.
 */
export interface KafkaEventArgs extends EventArgs {
    /**
     * Controls whether this event handler is tracked in the dashboard.
     *
     * - true: always track this handler
     * - false: never track this handler
     * - undefined: Mokapi determines tracking automatically based on
     *   whether the message was modified or acknowledged by the handler
     */
    track?: boolean | ((message: KafkaEventMessage) => boolean);
}

/**
 * Configuration options for LDAP event handlers.
 *
 * These arguments control execution behavior such as
 * priority, tagging, and dashboard tracking.
 */
export interface LdapEventArgs extends EventArgs {
    /**
     * Controls whether this event handler is tracked in the dashboard.
     *
     * - true: always track this handler
     * - false: never track this handler
     * - undefined: Mokapi determines tracking automatically based on
     *   whether the response object was modified by the handler
     */
    track?: boolean | ((request: LdapSearchRequest, response: LdapSearchResponse) => boolean);
}

/**
 * Configuration options for SMTP event handlers.
 *
 * These arguments control execution behavior such as
 * priority, tagging, and dashboard tracking.
 */
export interface SmtpEventArgs extends EventArgs {
    /**
     * Controls whether this event handler is tracked in the dashboard.
     *
     * - true: always track this handler
     * - false: never track this handler
     * - undefined: Mokapi determines tracking automatically based on
     *   whether the message was processed or modified by the handler
     */
    track?: boolean | ((record: SmtpEventMessage) => boolean);
}

/**
 * ScheduledEventHandler is an object used by every and cron function.
 * https://mokapi.io/docs/javascript-api/mokapi/eventhandler/scheduledeventargs
 * @example
 * export default function() {
 *   every('1m', function() {
 *     console.log('foo')
 *   }, {times: 1, runFirstTimeImmediately: false})
 * }
 */
export type ScheduledEventHandler = () => void | Promise<void>;

/**
 * Configuration options for scheduled event handlers
 * created via `every` or `cron`.
 */
export interface ScheduledEventArgs {
    /**
     * Adds or overrides existing tags used in dashboard
     */
    tags?: { [key: string]: string };

    /**
     * Defines the number of times the scheduled function is executed.
     */
    times?: number;

    /**
     * Toggles behavior of first execution. Default is true
     */
    runFirstTimeImmediately?: boolean;
}

/**
 * JavaScript value representable with JSON.
 */
export type JSONValue = null | undefined | boolean | number | string | JSONValue[] | JSONObject;

/**
 * Object representable with JSON.
 */
export interface JSONObject {
    [key: string]: JSONValue;
}

/**
 * Specifies the date-time format defined in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339).
 * This constant can be used when defining or validating datetime strings.
 *
 * @example
 * const date = new Date().toISOString()
 * if (isValidDate(date, RFC3339)) {
 *   // do something
 * }
 */
export const RFC3339 = "RFC3339";

/**
 * Applies a patch object to a target object. Only properties that are explicitly defined in the patch
 * are applied. This includes nested objects. Properties marked with `Delete` will be removed.
 *
 * This function is especially useful when working with generated mock data in Mokapi that you want to override
 * or refine with specific values.
 *
 * https://mokapi.io/docs/javascript-api/mokapi/patch
 *
 * @param target The original object or value to be patched.
 * @param patch The patch object or value. Only defined values are applied; undefined values are ignored. Use `Delete` to remove fields.
 * @returns A new object or value with the patch applied.
 *
 * @example
 * const result = patch({ name: "foo", age: 42 }, { name: "bar" })
 * // result: { name: "bar", age: 42 }
 *
 * @example
 * const result = patch({ name: "foo", meta: { version: 1 } }, { meta: { version: 2 } })
 * // result: { name: "foo", meta: { version: 2 } }
 *
 * @example
 * const result = patch({ name: "foo", age: 42 }, { age: Delete })
 * // result: { name: "foo" }
 */
export function patch(target: any, patch: any): any;

/**
 * Special marker used with the `patch` function to indicate a property should be removed.
 *
 * When used as a value inside a patch object, the corresponding property will be deleted
 * from the result.
 *
 * This is useful when refining or overriding mock data in a script while keeping validation logic intact.
 *
 * https://mokapi.io/docs/javascript-api/mokapi/patch#delete
 *
 * @example
 * const result = patch({ name: "foo", age: 42 }, { age: Delete })
 * // result: { name: "foo" }
 */
export const Delete: unique symbol;

export interface SharedMemory {
    /**
     * Returns the value associated with the given key.
     * @param key The key to retrieve.
     * @returns The stored value, or `undefined` if not found.
     */
    get(key: string): any;

    /**
     * Sets a value for the given key.
     * If the key already exists, its value will be replaced.
     * @param key The key to store the value under.
     * @param value The value to store.
     */
    set(key: string, value: any): void;

    /**
     * Updates a value atomically using an updater function.
     * The current value is passed into the updater function.
     * The returned value is stored and also returned by this method.
     *
     * Example:
     * ```js
     * mokapi.shared.update("requests", count => (count ?? 0) + 1)
     * ```
     *
     * @param key The key to update.
     * @param updater Function that receives the current value and returns the new value.
     * @returns The new value after update.
     */
    update<T = any>(key: string, updater: (value: T | undefined) => T): T;

    /**
     * Checks if the given key exists in shared memory.
     * @param key The key to check.
     * @returns `true` if the key exists, otherwise `false`.
     */
    has(key: string): boolean;

    /**
     * Removes the specified key and its value from shared memory.
     * @param key The key to remove.
     */
    delete(key: string): void;

    /**
     * Removes all stored entries from shared memory.
     * Use with caution — this clears all shared state.
     */
    clear(): void;

    /**
     * Returns a list of all stored keys.
     * @returns An array of key names.
     */
    keys(): string[];

    /**
     * Creates or returns a namespaced shared memory store.
     * Namespaces help avoid key collisions between unrelated scripts.
     *
     * Example:
     * ```js
     * const petstore = mokapi.shared.namespace("petstore")
     * petstore.set("sessions", [])
     * ```
     *
     * @param name The namespace identifier.
     * @returns A `SharedMemory` object scoped to the given namespace.
     */
    namespace(name: string): SharedMemory;
}

/**
 * Shared memory API for Mokapi scripts.
 *
 * The `mokapi.shared` object provides a way to persist and share
 * data between multiple scripts running in the same Mokapi instance.
 *
 * Values are stored in memory and shared across all scripts
 * within the same Mokapi process.
 * This allows you to coordinate state, cache data, or simulate
 * application-level variables without using global variables.
 * All values are persisted for the lifetime of the Mokapi process.
 *
 * Example:
 * ```js
 * // Increment a shared counter
 * mokapi.shared.update("counter", c => (c ?? 0) + 1)
 *
 * // Retrieve the current counter value
 * const count = mokapi.shared.get("counter")
 * mokapi.log(`Current counter: ${count}`)
 * ```
 */
export const shared: SharedMemory;
