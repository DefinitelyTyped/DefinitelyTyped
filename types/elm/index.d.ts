// Type definitions for Elm 0.19
// Project: http://elm-lang.org
// Definitions by: Dénes Harmath <https://github.com/thSoft>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Elm: ElmInstance<any>;

interface ElmInstance<P> {
    Main: ElmMain<P>;
}

interface ElmMain<P> {
    init(options: { node?: Node, flags?: any }): ElmApp<P>;
}

interface ElmApp<P> {
    ports: P;
}

interface PortToElm<V> {
    send(value: V): void;
}

interface PortFromElm<V> {
    subscribe(handler: (value: V) => void): void;
    unsubscribe(handler: (value: V) => void): void;
}
