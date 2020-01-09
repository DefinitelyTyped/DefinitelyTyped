// Type definitions for color 3.0
// Project: https://github.com/bamlab/redux-enhancer-react-native-appstate
// Definitions by: Thibault Maekelbergh <https://github.com/thibmaek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { createStore as createStoreFn, Store } from 'redux';

export type FOREGROUND = 'APP_STATE.FOREGROUND';
export type BACKGROUND = 'APP_STATE.BACKGROUND';
export type INACTIVE = 'APP_STATE.INACTIVE';

type StateListener = () => (createStore: typeof createStoreFn) => (...args: any[]) => Store;

declare const StateListener: StateListener;

export = StateListener;
