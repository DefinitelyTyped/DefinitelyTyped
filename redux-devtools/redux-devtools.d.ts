// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />


  export interface IDevTools {
    new (): JSX.ElementClass
    instrument(): (opts: any) => any;
  }

declare export function createDevTools(el: React.ReactElement<any>): IDevTools
declare export function persistState(debugSessionKey: string): Function

  var factory: { instrument(): (opts: any) => any }

  export default factory;
}
