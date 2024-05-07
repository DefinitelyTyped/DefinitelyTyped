interface ElmInstance<P = {}> {
    Main: ElmMain<P>;
}

interface ElmMain<P> {
    init(options: { node?: Node | undefined; flags?: any }): ElmApp<P>;
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
