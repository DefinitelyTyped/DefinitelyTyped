// Type definitions for redux-ui 0.0
// Project: https://github.com/tonyhb/redux-ui
// Definitions by: Andy Shu Xin <https://github.com/andyshuxin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />
import * as Redux from 'redux';

export interface uiParams<UIStateShape> {
  // optional key which is used to determine the UI path in which state will
  // be stored. if omitted this is randomly generated.
  key?: string;

  // optional persist, defaults to false. if set to true persist will keep UI
  // state for this component after it unmounts. if set to false the UI state
  // will be deleted and recreated when the component remounts
  persist?: boolean;

  // **required**: UI state for the component
  state: UIStateShape;

  // optional mergeProps passed to react-redux' @connect
  mergeProps?(stateProps: any, dispatchProps: any, ownProps: any): any;

  // optional `options` passed to react-redux @connect
  options?: {
    pure?: boolean;
    withRef?: boolean;
  };
}

export interface ReduxUIProps<UIStateShape> {
  // The key passed to the decorator from the decorator
  // (eg. 'some-decorator' with `@ui('some-decorator')`
  uiKey: string;

  // The UI state for the component's `uiKey`
  ui: UIStateShape;

  // A function accepting either a name/value pair or object which updates
  // state within `uiKey`
  updateUI(obj: UIStateShape): void;
  updateUI(key: string, value: any): void;

  // A function which resets the state within `uiKey` to its default
  resetUI(): void;
}

export const reducer: Redux.Reducer<any>;

export default function ui<UIStateShape>(params?: uiParams<UIStateShape>): <T>(component: T) => T;
