import { Action, ActionCreator, ActionCreatorsMapObject, StoreEnhancer } from "redux";

export interface RemoteReduxDevToolsOptions {
    /** The instance name to be showed on the monitor page. */
    name?: string | undefined;
    /**
     * Specifies whether to allow remote monitoring. By default is
     * `process.env.NODE_ENV === 'development'`.
     */
    realtime?: boolean | undefined;
    /**
     * Used to specify host for `remotedev-server`. If `port` is specified,
     * default value is `localhost`.
     */
    hostname?: string | undefined;
    /** Used to specify host's port for `remotedev-server`. */
    port?: number | undefined;
    /** Specifies whether to use `https` protocol for `remotedev-server`. */
    secure?: boolean | undefined;
    /**
     * Maximum allowed actions to be stored in the history tree. The oldest
     * actions are removed once `maxAge` is reached. It's critical for
     * performance.
     */
    maxAge?: number | undefined;
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
    actionsBlacklist?: string | string[] | undefined;
    /**
     * Actions types to be shown in the monitors (while passed to the reducers).
     * If `actionsWhitelist` specified, `actionsBlacklist` is ignored.
     */
    actionsWhitelist?: string | string[] | undefined;
    /**
     * Action or list of actions which should start remote monitoring (when
     * `realtime` is `false`).
     */
    startOn?: string | string[] | undefined;
    /** Action or list of actions which should stop remote monitoring. */
    stopOn?: string | string[] | undefined;
    /**
     * Action or list of actions which should trigger sending the history to
     * the monitor (without starting it).
     */
    sendOn?: string | string[] | undefined;
    /**
     * `0` - disabled (default)
     * `1` - send all uncaught exception messages
     * `2` - send only reducers error messages.
     */
    sendOnError?: 0 | 1 | 2 | undefined;
    /**
     * URL of the monitor to send the history when sendOn is triggered. By
     * default is `${secure ? 'https' : 'http'}://${hostname}:${port}`.
     */
    sendTo?: string | undefined;
    /** Action creators functions to be available in the dispatcher. */
    actionCreators?: Array<ActionCreator<any>> | ActionCreatorsMapObject | undefined;
    /**
     * If specified as `false`, it will not record the changes till clicking on
     * *Start recording* button. Available only for Redux enhancer, for others
     * use `autoPause`.
     */
    shouldRecordChanges?: boolean | undefined;
    /**
     * If specified as `true`, it will not allow any non-monitor actions to be
     * dispatched till clicking on *Unlock changes* button. Available only for
     * Redux enhancer.
     */
    shouldStartLocked?: boolean | undefined;
    /**
     * If set to `false`, will not recompute the states on hot reloading (or on
     * replacing the reducers). Available only for Redux enhancer.
     */
    shouldHotReload?: boolean | undefined;
    /**
     * If specified as `true`, whenever there's an exception in reducers, the
     * monitors will show the error message, and next actions will not be
     * dispatched.
     */
    shouldCatchErrors?: boolean | undefined;
    /**
     * Identifies the instance when sending the history triggered by `sendOn`.
     * You can use, for example, user id here, to know who sent the data.
     */
    id?: string | undefined;
}

export default function devToolsEnhancer(options?: RemoteReduxDevToolsOptions): StoreEnhancer;
export function composeWithDevTools(options?: RemoteReduxDevToolsOptions): (...funcs: StoreEnhancer[]) => StoreEnhancer;
export function composeWithDevTools(...funcs: StoreEnhancer[]): StoreEnhancer;
