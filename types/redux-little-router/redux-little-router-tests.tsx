import * as React from "react";
import { createStore, compose, combineReducers, applyMiddleware, Reducer, Dispatch } from "redux";
import { connect } from "react-redux";

import {
    Fragment,
    go,
    GO,
    GO_BACK,
    GO_FORWARD,
    goBack,
    goForward,
    Href,
    initializeCurrentLocation,
    Link,
    Location,
    LOCATION_CHANGED,
    LocationOptions,
    Params,
    push,
    PUSH,
    replace,
    REPLACE,
    routerForBrowser,
    RouterState
} from "redux-little-router";

const goBackActionType: string = GO_BACK;
const goForwardActionType: string = GO_FORWARD;
const locationChangedActionType: string = LOCATION_CHANGED;
const pushActionType: string = PUSH;
const replaceActionType: string = REPLACE;

const {
    reducer,
    middleware,
    enhancer
} = routerForBrowser({
    routes: {
        "/": {
            title: "Home"
        }
    }
});

const store = createStore<RouterState>(
    combineReducers({ router: reducer }),
    {},
    compose(enhancer, applyMiddleware(middleware))
);

const initialLocation = store.getState().router;

if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
}

interface TestProps {
    currentPath: string;
}

interface DispatchProps {
    go: (index: number) => void;
    goBack: () => void;
    goForward: () => void;
    push: (path: string) => void;
    replace: (path: string) => void;
}

const TestComponent: React.SFC<TestProps & DispatchProps> = ({ currentPath }) => (
    <div>
        <Fragment forRoute="/">
            <div>
                Current Path: {currentPath}
                <Link href="/something" />
            </div>
        </Fragment>
    </div>
);

const mapStateToProps = (state: RouterState): TestProps => ({
    currentPath: state.router.pathname
});

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => ({
    go: index => dispatch(go(index)),
    goBack: () => dispatch(goBack()),
    goForward: () => dispatch(goForward()),
    push: path => dispatch(push(path)),
    replace: path => dispatch(replace(path))
});

const connectedTest = connect(mapStateToProps)(TestComponent);
