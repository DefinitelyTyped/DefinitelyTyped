// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />
/// <reference types="redux" />


  export interface IDevTools {
    new (): JSX.ElementClass
    instrument(): (opts: any) => any;
  }

export declare function createDevTools(el: React.ReactElement<any>): IDevTools;
export declare function persistState(debugSessionKey: string): GenericStoreEnhancer;

  var factory: { instrument(): (opts: any) => any }

  export default factory;
}
