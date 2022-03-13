/** Given a string `onX`, this returns `X` */
type RemoveOn<T> = T extends `on${infer P}` ? P : never;

/** This is technically not required since we know every property is a function, but TS doesn't know that */
type AssertIsFunction<T> = T extends (...args: any) => any ? T : never;

/**
 * Helper to transforms the event maps defined in `@types/react-leaflet`.
 * This makes `@types/react-leaflet` the source of truth for the events in `@types/svelte-leafletjs`.
 *
 * ```ts
 * // original
 * type ReactEventMap = {
 *   onsomething?(e: SomeEvent): void
 * }
 *
 * // converted
 * type SvelteEventMap = {
 *   something: SomeEvent;
 * }
 * ```
 */
export type CreateSvelteEventMap<ReactEventMap> = {
    [EventName in keyof ReactEventMap as RemoveOn<EventName>]-?: NonNullable<
        Parameters<AssertIsFunction<NonNullable<ReactEventMap[EventName]>>>[0]
    >;
};

export {};
