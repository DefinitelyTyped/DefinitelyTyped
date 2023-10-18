import { History } from "history";
import { Dispatch, Middleware, Reducer, Store, StoreEnhancer } from "redux";

export type Nullable<T> = T | null | undefined;

export type StateGetter<TState = any> = () => TState;

export type RouteString = string;

export type ConfirmLeave = (state: object, action: object) => Nullable<string>;

export type RouteThunk<TState = any> = (
    dispatch: Dispatch<any>,
    getState: StateGetter<TState>,
    bag: Bag,
) => any | Promise<any>;

export type RouteObject<TKeys = {}, TState = any> = TKeys & {
    capitalizedWords?: boolean | undefined;
    navKey?: string | undefined;
    path?: string | undefined;
    thunk?: RouteThunk<TState> | undefined;
    fromPath?(path: string, key?: string): string;
    toPath?(param: string, key?: string): string;
    coerceNumbers?: boolean | undefined;
    confirmLeave?: ConfirmLeave | undefined;
    meta?: Meta | undefined;
};

export type Route<TKeys = {}, TState = any> = RouteString | RouteObject<TKeys, TState>;

export interface RoutesMap<TKeys = {}, TState = any> {
    [key: string]: Route<TKeys, TState>;
}

export interface ReceivedAction {
    type: string;
    payload: Payload;
    meta?: object | undefined;
    query?: Query | undefined;
    search?: string | undefined;
    navKey?: Nullable<string> | undefined;
}

export interface ReceivedActionMeta {
    type: string;
    payload: Payload;
    query?: Query | undefined;
    navKey?: Nullable<string> | undefined;
    meta: {
        notFoundPath?: string | undefined;
        query?: Query | undefined;
        search?: string | undefined;
    };
}

export type HistoryEntries = Array<{ pathname: string }>;

export interface HistoryData {
    entries: HistoryEntries;
    index: number;
    length: number;
}

export interface Location {
    pathname: string;
    type: string;
    payload: Payload;
    query?: Query | undefined;
    search?: string | undefined;
}

export type LocationKind = "load" | "back" | "next" | "pop" | "stealth" | "push" | "replace" | "redirect";

export interface LocationState<TKeys = {}, TState = any> {
    pathname: string;
    type: string;
    payload: Payload;
    query?: Query | undefined;
    search?: string | undefined;
    prev: Location;
    kind: Nullable<LocationKind>;
    history: Nullable<HistoryData>;
    routesMap: RoutesMap<TKeys, TState>;
    hasSSR?: boolean | undefined;
}

export interface ActionMetaLocation {
    current: Location;
    prev: Location;
    kind: Nullable<LocationKind>;
    history: Nullable<HistoryData>;
}

export interface NavigationAction {
    type: string;
    key?: Nullable<string> | undefined;
    navKey?: Nullable<string> | undefined;
    routeName?: string | undefined;
    actions?: NavigationAction[] | undefined;
    action?: NavigationAction | undefined;
    params?: Params | undefined;
    meta?: object | undefined;
}

export interface Meta {
    location: ActionMetaLocation;
    notFoundPath?: string | undefined;
    navigation?: NavigationAction | undefined;
    query?: Query | undefined;
    search?: string | undefined;
}

export interface Action {
    type: string;
    payload?: Payload | undefined;
    meta?: Meta | undefined;
    query?: Query | undefined;
    navKey?: Nullable<string> | undefined;
}

export interface HistoryLocation {
    pathname: string;
    search?: string | undefined;
}

export type HistoryAction = string;

export type Listener = (location: HistoryLocation, action: HistoryAction) => void;

export type ScrollBehavior = object;

export interface Router<TState = any> {
    getStateForActionOriginal(action: object, state: Nullable<TState>): Nullable<TState>;
    getStateForAction(action: object, state: Nullable<TState>): Nullable<TState>;
    getPathAndParamsForState(state: TState): { path: Nullable<string>; params: Nullable<Params> };
    getActionForPathAndParams(path: string): Nullable<object>;
}

export interface Navigator<TState = any> {
    router: Router<TState>;
}

export interface Navigators<TState = any> {
    [key: string]: Navigator<TState>;
}

export type SelectLocationState<TKeys = {}, TState = any> = (state: TState) => LocationState<TKeys, TState>;
export type SelectTitleState<TState = any> = (state: TState) => string;

export interface QuerySerializer {
    stringify(params: Params): string;
    parse(queryString: string): object;
}

export interface NavigatorsConfig<TKeys = {}, TState = any> {
    navigators: Navigators<TState>;
    patchNavigators(navigators: Navigators<TState>): void;

    actionToNavigation(
        navigators: Navigators<TState>,
        action: object, // TODO check this
        navigationAction: Nullable<NavigationAction>,
        route: Nullable<Route<TKeys, TState>>,
    ): object;
    navigationToAction(
        navigators: Navigators<TState>,
        store: Store<TState>,
        routesMap: RoutesMap<TKeys, TState>,
        action: object,
    ): {
        action: object;
        navigationAction: Nullable<NavigationAction>;
    };
}

export interface Bag {
    action: ReceivedAction | Action;
    extra?: any | undefined;
}

export interface Options<TKeys = {}, TState = any> {
    /**
     * A prefix that will be prepended to the URL. For example, using a basename of '/playground',
     * a route with the path '/home' would correspond to the URL path '/playground/home'.
     */
    basename?: string | undefined;
    /**
     *  Whether or not a trailing delimiter is allowed when matching path.
     */
    strict?: boolean | undefined;
    /**
     * The name of the state key or a selector function to specify where in your Redux state tree
     * Redux First Router should expect your page location reducer to be attached to.
     */
    location?: string | SelectLocationState<TKeys, TState> | undefined;
    /**
     * The name of the state key or a selector function to specify where in your Redux state tree
     * Redux First Router should expect your page title reducer to be attached to.
     * This can be omitted if you attach the reducer at state.title.
     */
    title?: string | SelectTitleState<TState> | undefined;
    /**
     * Can be set to false to bypass the initial dispatch, so you can do it manually, perhaps after running sagas.
     */
    initialDispatch?: boolean | undefined;
    /**
     * An array of entries to initialise history object. Useful for server side rendering and tests.
     */
    initialEntries?: HistoryEntries | undefined;
    /**
     * An object with parse and stringify methods, such as the `query-string` or `qs` libraries (or anything handmade).
     * This will be used to handle querystrings. Without this option, query strings are ignored silently.
     */
    querySerializer?: QuerySerializer | undefined;
    /**
     * The path where users may be redirected in 2 situations: when you dispatch an action with no matching path,
     *  or if you manually call dispatch(redirect({ type: NOT_FOUND })), where NOT_FOUND is an export from this package.
     *  The type in actions and state will be NOT_FOUND, which you can use to show a 404 page.
     */
    notFoundPath?: string | undefined | null;
    /**
     * Whether or not window.scrollTo(0, 0) should be run on route changes so the user starts each page at the top.
     */
    scrollTop?: boolean | undefined;
    /**
     * A function to update window/elements scroll position.
     */
    restoreScroll?(history: History): ScrollBehavior;
    /**
     * A simple function that will be called before the routes change.
     * It's passed your standard `dispatch` and `getState` arguments like a thunk,
     * as well as the `bag` object as a third parameter, which contains the dispatched `action` and the configured `extra` value.
     */
    onBeforeChange?(dispatch: Dispatch<any>, getState: StateGetter<TState>, bag: Bag): void;
    /**
     * A simple function that will be called after the routes change.
     * It's passed your standard `dispatch` and `getState` arguments like a thunk,
     * as well as the `bag` object as a third parameter, which contains the dispatched `action` and the configured `extra` value.
     */
    onAfterChange?(dispatch: Dispatch<any>, getState: StateGetter<TState>, bag: Bag): void;
    /**
     * A simple function that will be called whenever the user uses the browser back/next buttons.
     * It's passed your standard `dispatch` and `getState` arguments like a thunk,
     * as well as the `bag` object as a third parameter, which contains the dispatched `action`
     * and the configured `extra` value. Actions with kinds `back`, `next`, and `pop` trigger this.
     */
    onBackNext?(dispatch: Dispatch<any>, getState: StateGetter<TState>, bag: Bag): void;
    /**
     * A function receiving `message` and `callback` when navigation is blocked with `confirmLeave`.
     * The message is the return value from `confirmLeave`.
     * The callback can be called with `true` to unblock the navigation, or with `false` to cancel the navigation.
     */
    displayConfirmLeave?: DisplayConfirmLeave | undefined;
    /**
     * A function returning a history object compatible with the popular `history` package.
     */
    createHistory?(): History;
    /**
     * A map of of your Redux state keys to _React Navigation_ navigators.
     */
    navigators?: NavigatorsConfig<TKeys, TState> | undefined;
    /**
     * An optional value that will be passed as part of the third `bag` argument to all options callbacks and routes thunk.
     * It works much like the `withExtraArgument` feature of `redux-thunk` or the `context` argument of GraphQL resolvers.
     * You can use it to pass any required context to your thunks without having to tightly couple them to it.
     * For example, you could pass an instance of an API client initialised with authentication cookies,
     * or a function `addReducer` to inject new code split reducers into the store.
     */
    extra?: any;
}

export interface Query {
    [key: string]: string | any;
}

export interface Params {
    [key: string]: any;
}

export interface Payload {
    query?: Query | undefined;
    [key: string]: any;
}

export type DisplayConfirmLeave = (message: string, callback: (unblock: boolean) => void) => void;

export type ScrollUpdater = (performedByUser: boolean) => void;

export const NOT_FOUND: "@@redux-first-router/NOT_FOUND";

export function actionToPath<TKeys = {}, TState = any>(
    action: ReceivedAction,
    routesMap: RoutesMap<TKeys, TState>,
    querySerializer?: QuerySerializer,
): string;

export function back(): void;

export function canGo(n: number): boolean;

export function canGoBack(): boolean;

export function canGoForward(): boolean;

export function connectRoutes<TKeys = {}, TState = any>(
    routesMap: RoutesMap<TKeys, TState>,
    options?: Options<TKeys, TState>,
): {
    reducer: Reducer<LocationState<TKeys, TState>>;
    middleware: Middleware;
    thunk(store: Store<TState>): Promise<Nullable<RouteThunk<TState>>>;
    enhancer: StoreEnhancer;
    initialDispatch?(): void;
};

export function go(n: number): void;

export function history(): History;

export function isLocationAction(action: any): boolean;

export function next(): void;

export function nextPath(): string | void;

export function pathToAction<TKeys = {}, TState = any>(
    pathname: string,
    routesMap: RoutesMap<TKeys, TState>,
    querySerializer?: QuerySerializer,
): ReceivedAction;

export function prevPath(): string | void;

export function push(pathname: string): void;

export function redirect(action: Action): Action;

export function replace(pathname: string): void;

export function scrollBehavior(): ScrollBehavior | void;

export function setKind(action: Action, kind: string): Action;

export function updateScroll(): void;

export function selectLocationState<TState = any>(state: TState): LocationState;
