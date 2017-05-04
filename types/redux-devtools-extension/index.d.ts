// Type definitions for redux-devtools-extension 2.13
// Project: https://github.com/zalmoxisus/redux-devtools-extension
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
  Action,
  ActionCreator,
  ActionCreatorsMapObject,
  GenericStoreEnhancer
} from "redux";

export interface ReduxDevToolsSerializeOptions {
  /** Serialization mode. */
  options?: any;
  /** JSON replacer function used for both actions and states stringify. */
  replacer?(key: any, value: any): any;
  /** JSON reviver function used for parsing the imported actions and states. */
  reviver?(key: any, value: any): any;
  /**
   * Automatically serialize/deserialize Immutable.js via
   * `remotedev-serialize`.
   */
  immutable?: any;
  /**
   * Immutable.js `Record` classes used to make possible restore its
   * instances back when importing, persisting, etc.
   */
  refs?: any[];
}

export interface ReduxDevToolsFeaturesOptions {
  /** Start/pause recording of dispatched actions */
  pause?: boolean;
  /** Lock/unlock dispatching actions and side effects */
  lock?: boolean;
  /** Persist states on page reloading */
  persist?: boolean;
  /** Export history of actions in a file */
  export?: boolean | 'custom';
  /** Import history of actions from a file */
  import?: boolean | 'custom';
  /** Jump back and forth (time travelling) */
  jump?: boolean;
  /** Skip (cancel) actions */
  skip?: boolean;
  /** Drag and drop actions in the history list */
  reorder?: boolean;
  /** Dispatch custom actions or action creators */
  dispatch?: boolean;
  /** Generate tests for the selected actions */
  test?: boolean;
}

export interface ReduxDevToolsOptions {
  /** The instance name to be showed on the monitor page. */
  name?: string;
  /** Action creators functions to be available in the dispatcher. */
  actionCreators?: Array<ActionCreator<any>> | ActionCreatorsMapObject;
  /**
   * If more than one action is dispatched in the indicated interval in ms,
   * all new actions will be collected and sent at once. It is the joint
   * between performance and speed. When set to `0`, all actions will be sent
   * instantly. Set it to a higher value when experiencing perf issues (also
   * `maxAge` to a lower value).
   */
  latency?: number;
  /**
   * Maximum allowed actions to be stored in the history tree. The oldest
   * actions are removed once `maxAge` is reached. It's critical for
   * performance.
   */
  maxAge?: number;
  /** Serialization options. */
  serialize?: ReduxDevToolsSerializeOptions;
  /**
   * Function which takes `action` object as argument, and should return
   * `action` object back.
   */
  actionSanitizer?(action: any): any;
  /**
   * Function which takes `state` object as argument, and should return
   * `state` object back.
   */
  stateSanitizer?(state: any): any;
  /**
   * Actions types to be hidden in the monitors (while passed to the
   * reducers). If `actionsWhitelist` specified, `actionsBlacklist` is ignored.
   */
  actionsBlacklist?: string | string[];
  /**
   * Actions types to be shown in the monitors (while passed to the reducers).
   * If `actionsWhitelist` specified, `actionsBlacklist` is ignored.
   */
  actionsWhitelist?: string | string[];
  /**
   * Called for every action before sending, takes `state` and `action`
   * object, and returns `true` in case it allows sending the current data to
   * the monitor. Use it as a more advanced version of
   * `actionsBlacklist`/`actionsWhitelist` parameters.
   */
  predicate?(state: any, action: any): boolean;
  /**
   * If specified as `false`, it will not record the changes till clicking on
   * *Start recording* button. Available only for Redux enhancer, for others
   * use `autoPause`.
   */
  shouldRecordChanges?: boolean;
  /**
   * If specified, whenever clicking on *Pause recording* button and there are
   * actions in the history log, will add this action type. If not specified,
   * will commit when paused. Available only for Redux enhancer.
   */
  pauseActionType?: string;
  /**
   * Auto-pauses when the extension’s window is not opened, and so has zero
   * impact on your app when not in use. Not available for Redux enhancer (as
   * it already does it but storing the data to be sent).
   */
  autoPause?: boolean;
  /**
   * If specified as `true`, it will not allow any non-monitor actions to be
   * dispatched till clicking on *Unlock changes* button. Available only for
   * Redux enhancer.
   */
  shouldStartLocked?: boolean;
  /**
   * If set to `false`, will not recompute the states on hot reloading (or on
   * replacing the reducers). Available only for Redux enhancer.
   */
  shouldHotReload?: boolean;
  /**
   * If specified as `true`, whenever there's an exception in reducers, the
   * monitors will show the error message, and next actions will not be
   * dispatched.
   */
  shouldCatchErrors?: boolean;
  /**
   * If you want to restrict the extension, just specify the features you
   * allow.
   */
  features?: ReduxDevToolsFeaturesOptions;
}

export function composeWithDevTools(options?: ReduxDevToolsOptions): (...funcs: GenericStoreEnhancer[]) => GenericStoreEnhancer;
export function composeWithDevTools(...funcs: GenericStoreEnhancer[]): GenericStoreEnhancer;
