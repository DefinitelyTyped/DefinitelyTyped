import {
    connectRoutes,
    LocationState,
    RoutesMap,
    actionToPath,
    ReceivedAction,
    redirect,
    Action as ReduxFirstRouterAction,
    QuerySerializer,
    pathToAction
} from 'redux-first-router';
import {
    AnyAction,
    createStore,
    applyMiddleware,
    Middleware,
    MiddlewareAPI,
    Store,
    Dispatch,
    compose,
    Action,
    StoreEnhancer,
    StoreEnhancerStoreCreator,
    combineReducers
} from 'redux';
import { History } from 'history';

declare const console: any;
declare const history: History;

interface Keys {
    role: string;
}
interface State {
    location: LocationState<Keys, State>;
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
            dispatch; // $ExpectType Dispatch<any>
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
} = connectRoutes(routesMap, {
        initialDispatch: false,
        onBeforeChange: (dispatch, getState) => {
            dispatch; // $ExpectType Dispatch<any>
            getState; // $ExpectType StateGetter<State>
        },
        location: state => {
            const locationState = state.location; // $ExpectType LocationState<Keys, State>
            return locationState;
        },
        title: state => {
            const title = state.location.pathname; // $ExpectType string
            return title;
        },
        createHistory: () => history,
    });

const dumbMiddleware: Middleware = store => next => action => next(action);

const composedMiddleware = applyMiddleware(middleware, dumbMiddleware);

const storeEnhancer = compose(
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
pathToAction('/', routesMap); // $ExpectType ReceivedAction

const querySerializer: QuerySerializer = {
    stringify: (params) => '',
    parse: (queryString) => ({})
};
actionToPath(receivedAction, routesMap, querySerializer); // $ExpectType string
pathToAction('/', routesMap, querySerializer); // $ExpectType ReceivedAction

const action: ReduxFirstRouterAction = {
    type: 'HOME'
};
redirect(action); // $ExpectType Action

// $ExpectType Store<State, AnyAction>
store;

store.getState().location.routesMap; // $ExpectType RoutesMap<Keys, State>
