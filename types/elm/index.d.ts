export interface ElmModule<
    P,
    F,
    Entrypoints extends string[] =
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        ["Main"],
> {
    Elm: ElmInstance<P, F, Entrypoints>;
}

export type ElmInstance<
    P,
    F,
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
    Entrypoints extends string[] = ["Main"],
> = NestedEntrypoints<Entrypoints, P, F>;

type NestedEntrypoints<Entrypoints extends string[], P, F> = Entrypoints extends [
    infer First extends string,
    ...infer Rest extends string[],
] ? { [K in First]: NestedEntrypoints<Rest, P, F> }
    : ElmMain<P, F>;

export interface ElmMain<P, F> {
    init(options?: { node?: Node | undefined; flags: F } | undefined): ElmApp<P>;
}

export interface ElmApp<P> {
    ports: P;
}

export interface PortToElm<V> {
    send(value: V): void;
}

export interface PortFromElm<V> {
    subscribe(handler: (value: V) => void): void;
    unsubscribe(handler: (value: V) => void): void;
}

export {};
