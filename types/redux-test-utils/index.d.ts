// Type definitions for redux-test-utils 0.2
// Project: https://github.com/Knegusen/redux-test-utils#readme
// Definitions by: Huw Martin <https://github.com/huwmartin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { AnyAction, Store, Dispatch } from 'redux';

export function createMockStore(
  state?: any
): mockStore<any>;

export function createMockDispatch(): mockDispatch<any>;

export interface mockStore<S> extends Store<S>, mockDispatch<S> {}

export interface mockDispatch<S> {
  dispatch: Dispatch<S>;
  getActions: () => AnyAction[];
  getAction: (type: any) => AnyAction | undefined;
  isActionTypeDispatched: (type: any) => boolean;
  isActionDispatched: (action: AnyAction) => boolean;
}
