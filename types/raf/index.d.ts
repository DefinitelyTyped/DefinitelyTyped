// Type definitions for raf 3.4
// Project: https://github.com/chrisdickinson/raf#readme
// Definitions by: Ben Lorantfy <https://github.com/BenLorantfy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const raf: {
  (callback: (timestamp: number) => void): number;
  cancel: (handle: number) => void;
  polyfill: (globalObject?: any) => void;
};

export = raf;
