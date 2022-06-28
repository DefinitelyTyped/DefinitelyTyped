// Type definitions for react-timeout 1.1
// Project: https://github.com/plougsgaard/react-timeout
// Definitions by: Kerwyn Rojas <https://github.com/kerwynrg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as React from 'react';

export = ReactTimeout;

declare function ReactTimeout<T>(
    SourceComponent: React.ComponentClass<T> | React.FunctionComponent<T>
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
