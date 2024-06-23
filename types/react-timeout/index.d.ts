/// <reference types="node" />

import * as React from "react";

export = ReactTimeout;

declare function ReactTimeout<T>(
    SourceComponent: React.ComponentClass<T> | React.FunctionComponent<T>,
): React.ComponentClass<T>;

declare namespace ReactTimeout {
    type Timer = NodeJS.Timer | number;

    type Id = number;

    interface ReactTimeoutProps {
        setTimeout?: ((callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timer) | undefined;
        clearTimeout?: ((timer: Timer) => void) | undefined;
        setInterval?: ((callback: (...args: any[]) => void, ms: number, ...args: any[]) => Id) | undefined;
        clearInterval?: ((id: Id) => void) | undefined;
        setImmediate?: ((callback: (...args: any[]) => void, ...args: any[]) => Id) | undefined;
        clearImmediate?: ((id: Id) => void) | undefined;
        requestAnimationFrame?: ((callback: (...args: any[]) => void) => Id) | undefined;
        cancelAnimationFrame?: ((id: Id) => void) | undefined;
    }
}
