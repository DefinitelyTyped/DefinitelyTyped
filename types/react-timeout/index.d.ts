import * as React from "react";

export = ReactTimeout;

declare function ReactTimeout<T>(
    SourceComponent: React.ComponentClass<T> | React.FunctionComponent<T>,
): React.ComponentClass<T>;

declare namespace ReactTimeout {
    type Timer = typeof globalThis extends { setTimeout(...args: any[]): infer T } ? T : Id;
    type Immediate = typeof globalThis extends { setImmediate(...args: any[]): infer T } ? T : Id;

    type Id = number;

    interface ReactTimeoutProps {
        setTimeout?: ((callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timer) | undefined;
        clearTimeout?: ((timer: Timer | Id) => void) | undefined;
        setInterval?: ((callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timer) | undefined;
        clearInterval?: ((id: Timer | Id) => void) | undefined;
        setImmediate?: ((callback: (...args: any[]) => void, ...args: any[]) => Immediate) | undefined;
        clearImmediate?: ((id: Immediate | Id) => void) | undefined;
        requestAnimationFrame?: ((callback: (...args: any[]) => void) => Id) | undefined;
        cancelAnimationFrame?: ((id: Id) => void) | undefined;
    }
}
