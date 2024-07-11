// Last module patch version validated against: 2.0.0

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
     *
     * @param types An event typename.
     * @param callback A callback.
     */
    on(typenames: string): ((this: T, ...args: any[]) => void) | undefined;
    /**
     * Removes the callback for the specified typenames.
     * To remove all callbacks for a given name `foo`, say `dispatch.on(".foo", null).`
     *
     * @param types An event typename.
     */
    on(typenames: string, callback: null): this;
    /**
     * Adds the callback for the specified typenames.
     * The callback is registered for the specified (fully-qualified) typenames.
     * If a callback was already registered for the given typenames,
     * the existing callback is removed before the new callback is added.
     *
     * @param types An event typename.
     * @param callback A callback.
     */
    on(typenames: string, callback: (this: T, ...args: any[]) => void): this;
}

/**
 * Creates a new dispatch for the specified event types. Each type is a string, such as "start" or "end".
 *
 * @param types The event types.
 * @throws "illegal type" on empty string or duplicated event types.
 */
export function dispatch<T extends object>(...types: string[]): Dispatch<T>;
