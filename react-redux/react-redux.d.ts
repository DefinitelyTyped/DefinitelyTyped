// Type definitions for react-redux
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-redux" {
  import { Component } from 'react';

  export interface ClassDecorator {
    <TFunction extends Function>(target: TFunction): TFunction|void;
  }

  export function connect(...functions: Function[]): ClassDecorator;

  export interface Store {
    subscribe: Function;
    dispatch: Function;
    getState: Function;
  }

  export interface Property {
    store: Store;
  }

  export class Provider extends Component<Property, {}> { }
}
