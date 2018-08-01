// Type definitions for sinon-stub-promise v2.1.0
// Project: https://github.com/substantial/sinon-stub-promise
// Definitions by: Thiago Temple <https://github.com/vintem>
//                 Tim Stackhouse <https://github.com/tstackhouse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="sinon"/>

declare module 'sinon' {
  interface SinonThenable {
    resolved: boolean;
    rejected: boolean;
    resolveValue: any;
    rejectValue: any;
    then(onFulfill: (resolveValue?: any) => void, onReject?: (rejectValue?: any) => void): SinonThenable;
    catch(onReject: (rejectValue?: any) => void): SinonThenable;
    finally(callback: () => void): SinonThenable;
  }

  interface SinonStub {
    thenable: SinonThenable;
    returnsPromise(): SinonStub;
    resolves(value?: any): SinonStub;
    rejects(value?: any): SinonStub;
  }
}

declare function sinonStubPromise(sinon: sinon.SinonStatic): void;
export = sinonStubPromise;
