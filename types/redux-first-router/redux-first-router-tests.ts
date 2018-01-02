import {
    connectRoutes,
    LocationState,
    RoutesMap,
    actionToPath,
    ReceivedAction,
    redirect,
    Action as ReduxFirstRouterAction,
    QuerySerializer
} from 'redux-first-router';
import {
    createStore,
    applyMiddleware,
    Middleware,
    MiddlewareAPI,
    Store,
    Dispatch,
    compose,
    Action,
    GenericStoreEnhancer,
    StoreEnhancerStoreCreator,
    combineReducers
} from 'redux';
import { History } from 'history';

declare var console: any;
declare var history: History;

interface Keys {
    role: string;
}
interface State {
    location: LocationState<Keys, State>;
    stale: boolean;
}
type StoreCreator = StoreEnhancerStoreCreator<State>;

const routesMap: RoutesMap<Keys, State> = {
    HOME: '/',
    ADMIN: {
        path: '/admin',
        role: 'admin'
    },
    STATUS: {
        path: '/status',
        role: 'user',
        thunk: (dispatch, getState) => {
            dispatch; // $ExpectType Dispatch<State>
            getState; // $ExpectType StateGetter<State>
        }
    }
};

const {
    reducer,
    middleware,
    enhancer,
    initialDispatch,
    thunk,
} = connectRoutes(history, routesMap, {
        initialDispatch: false,
        onBeforeChange: (dispatch, getState) => {
            dispatch; // $ExpectType Dispatch<State>
            getState; // $ExpectType StateGetter<State>
        },
        location: state => {
            const locationState = state.location; // $ExpectType LocationState<Keys, State>
            return locationState;
        },
        title: state => {
            const title = state.location.pathname; // $ExpectType string
            return title;
        }
    });

const dumbMiddleware: Middleware = store => next => action => next(action);

const composedMiddleware = applyMiddleware(middleware, dumbMiddleware);

const storeEnhancer = compose<StoreCreator, StoreCreator, StoreCreator>(
    enhancer,
    composedMiddleware
);

const combined = combineReducers<State>({ location: reducer });

const store = createStore(combined, storeEnhancer);

// Test that `thunk()` has correct state types now that `store` is defined
thunk(store)
    .then((t) => {
        t = t!; // $ExpectType RouteThunk<State>
    });

const receivedAction: ReceivedAction = {
    type: 'HOME',
    payload: {}
};
actionToPath(receivedAction, routesMap); // $ExpectType string

const querySerializer: QuerySerializer = {
    stringify: (params) => '',
    parse: (queryString) => ({})
};
actionToPath(receivedAction, routesMap, querySerializer); // $ExpectType string

const action: ReduxFirstRouterAction = {
    type: 'HOME'
};
redirect(action); // $ExpectType Action

// $ExpectType Store<State>
store;

store.getState().location.routesMap; // $ExpectType RoutesMap<Keys, State>
