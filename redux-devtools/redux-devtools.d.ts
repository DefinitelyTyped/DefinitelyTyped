// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../redux/redux.d.ts" />

declare module "redux-devtools" {
  import * as React from 'react'
  import {StoreEnhancer} from 'redux';

  interface IDevTools {
    new (): JSX.ElementClass
    instrument(): StoreEnhancer
  }

  export function createDevTools(el: React.ReactElement<any>): IDevTools
  export function persistState(debugSessionKey: string): StoreEnhancer

  var factory: { instrument(): StoreEnhancer }

  export default factory;
}
