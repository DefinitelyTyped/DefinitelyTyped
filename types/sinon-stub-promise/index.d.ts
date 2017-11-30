// Type definitions for sinon-stub-promise v1.1.0
// Project: https://github.com/substantial/sinon-stub-promise
// Definitions by: Thiago Temple <https://github.com/vintem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="sinon"/>

declare module 'sinon' {
  interface SinonPromise extends Function {
    resolves(value?: any): void;
    rejects(value?: any): void;
  }

  interface SinonStub {
    returnsPromise(): SinonPromise;
  }
}

declare function sinonStubPromise(sinon: sinon.SinonStatic): void;
export = sinonStubPromise;