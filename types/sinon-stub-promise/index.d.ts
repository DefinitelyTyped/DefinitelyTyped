// Type definitions for sinon-stub-promise v1.0.1
// Project: https://github.com/substantial/sinon-stub-promise
// Definitions by: Thiago Temple <https://github.com/vintem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="sinon"/>

declare module 'sinon' {
  interface SinonPromise {
    resolves(value?: any): void;
    rejects(value?: any): void;
  }

  interface SinonStub {
    returnsPromise(): SinonPromise;
  }
}

export {};
