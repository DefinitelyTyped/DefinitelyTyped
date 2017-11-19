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
    StoreEnhancerStoreCreator
} from 'redux';
import { History } from 'history';

declare var console: any;
declare var history: History;

type State = LocationState;
type StoreCreator = StoreEnhancerStoreCreator<State>;

const routesMap: RoutesMap<{ role: string }> = {
    HOME: '/',
    ADMIN: {
        path: '/admin',
        role: 'admin'
    }
};

const {
    reducer,
    middleware,
    enhancer,
    initialDispatch
} = connectRoutes(history, routesMap, {
    initialDispatch: false
});

const dumbMiddleware: Middleware = store => next => action => next(action);

const composedMiddleware = applyMiddleware(middleware, dumbMiddleware);

const storeEnhancer = compose<StoreCreator, StoreCreator, StoreCreator>(
    enhancer,
    composedMiddleware
);

const store = createStore(reducer, storeEnhancer);

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

// $ExpectType Store<LocationState>
store;
