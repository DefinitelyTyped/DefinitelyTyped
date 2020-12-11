// Type definitions for Elm 0.19
// Project: http://elm-lang.org
// Definitions by: Dénes Harmath <https://github.com/thSoft>
//                 Renan Vaz  <https://github.com/renanpvaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface ElmInstance<P = {}> {
    Main: ElmMain<P>;
}

interface ElmMain<P> {
    init(options: { node?: Node; flags?: any }): ElmApp<P>;
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
