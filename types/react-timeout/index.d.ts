// Type definitions for react-timeout 1.1
// Project: https://github.com/plougsgaard/react-timeout
// Definitions by: Kerwyn Rojas <https://github.com/kerwynrg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as React from 'react';

export = ReactTimeout;

declare function ReactTimeout<T>(
    SourceComponent: React.ComponentClass<T> | React.StatelessComponent<T>
): React.ComponentClass<T>;

declare namespace ReactTimeout {
  type Timer = NodeJS.Timer | number;

  type Id = number;

  interface ReactTimeoutProps {
      setTimeout?: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timer;
      clearTimeout?: (timer: Timer) => void;
      setInterval?: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Id;
      clearInterval?: (id: Id) => void;
      setImmediate?: (callback: (...args: any[]) => void, ...args: any[]) => Id;
      clearImmediate?: (id: Id) => void;
      requestAnimationFrame?: (callback: (...args: any[]) => void) => Id;
      cancelAnimationFrame?: (id: Id) => void;
  }
}
