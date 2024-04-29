// Last module patch version validated against: 3.0.1

export interface Dispatch<T extends object> {
    /**
     * Like `function.apply`, invokes each registered callback for the specified type,
     * passing the callback the specified arguments, with `that` as the `this` context.
     *
     * @param type A specified event type.
     * @param that The `this` context for the callback.
     * @param args Additional arguments to be passed to the callback.
     * @throws "unknown type" on unknown event type.
     */
    apply(type: string, that?: T, args?: any[]): void;

    /**
     * Like `function.call`, invokes each registered callback for the specified type,
     * passing the callback the specified arguments, with `that` as the `this` context.
     * See dispatch.apply for more information.
     *
     * @param type A specified event type.
     * @param that The `this` context for the callback.
     * @param args Additional arguments to be passed to the callback.
     * @throws "unknown type" on unknown event type.
     */
    call(type: string, that?: T, ...args: any[]): void;

    /**
     * Returns a copy of this dispatch object.
     * Changes to this dispatch do not affect the returned copy and vice versa.
     */
    copy(): Dispatch<T>;

    /**
     * Returns the callback for the specified typenames, if any.
     * If multiple typenames are specified, the first matching callback is returned.
     */
    on(typenames: string): ((this: T, ...args: any[]) => void) | undefined;
    /**
     * Adds or removes the callback for the specified typenames.
     * If a callback function is specified, it is registered for the specified (fully-qualified) typenames.
     * If a callback was already registered for the given typenames, the existing callback is removed before the new callback is added.
     * The specified typenames is a string, such as start or end.foo.
     * The type may be optionally followed by a period (.) and a name; the optional name allows multiple callbacks to be registered to receive events of the same type, such as start.foo and start.bar.
     * To specify multiple typenames, separate typenames with spaces, such as start end or start.foo start.bar.
     * To remove all callbacks for a given name foo, say dispatch.on(".foo", null).
     */
    on(typenames: string, callback: null | ((this: T, ...args: any[]) => void)): this;
}

/**
 * Creates a new dispatch for the specified event types. Each type is a string, such as "start" or "end".
 *
 * @param types The event types.
 * @throws "illegal type" on empty string or duplicated event types.
 */
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function dispatch<T extends object>(...types: string[]): Dispatch<T>;
