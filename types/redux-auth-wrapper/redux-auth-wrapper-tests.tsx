import * as React from "react";
import { Component, StatelessComponent } from "react";
import { createStore } from "redux";
import { push } from "react-router-redux";
import { LocationDescriptorObject } from "history";

import {
    connectedRouterRedirect  as H3connectedRouterRedirect,
    connectedReduxRedirect  as H3connectedReduxRedirect,
    createOnEnter
} from "redux-auth-wrapper/history3/redirect";
import H3locationHelperBuilder from "redux-auth-wrapper/history3/locationHelper";

import {
    connectedRouterRedirect,
    connectedReduxRedirect
} from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";

import authWrapper from "redux-auth-wrapper/authWrapper";
import connectedAuthWrapper from "redux-auth-wrapper/connectedAuthWrapper";

interface TestReduxState {
    foo: string;
}

interface TestComponentProps {
    foo: string;
}

const stringSelector = (state: TestReduxState, ownProps: TestComponentProps) => "fizz";
const boolSelector = (state: TestReduxState, ownProps: TestComponentProps) => true;
const stringStateSelector = (state: TestReduxState, nextState: TestReduxState) => "buzz";
const boolStateSelector = (state: TestReduxState, nextState: TestReduxState) => true;

/* History 3 */

H3connectedRouterRedirect({
    redirectPath: "/login",
    authenticatedSelector: boolSelector,
    authenticatingSelector: boolSelector,
    AuthenticatingComponent: "div",
    wrapperDisplayName: "Auth",
    allowRedirectBack: true,
    redirectQueryParamName: "redirect"
})(
    ({
        foo,
        isAuthenticated,
        isAuthenticating,
        redirect,
        redirectPath
    }) => null
);

H3connectedReduxRedirect({
    redirectPath: stringSelector,
    authenticatedSelector: boolSelector,
    authenticatingSelector: boolSelector,
    AuthenticatingComponent: "div",
    wrapperDisplayName: "Auth",
    allowRedirectBack: boolSelector,
    redirectQueryParamName: "redirect"
})(
    ({
        foo,
        isAuthenticated,
        isAuthenticating,
        redirectPath
    }) => null
);

const store = createStore(() => ({}));

const enter = createOnEnter({
    redirectPath: "/login",
    authenticatedSelector: boolStateSelector,
    authenticatingSelector: boolStateSelector,
    allowRedirectBack: true,
    redirectQueryParamName: "redirect"
});
enter(store, { foo : "bar" }, (location: LocationDescriptorObject) => {});

const H3helper = H3locationHelperBuilder<TestComponentProps>({
    redirectQueryParamName: "redirect",
    locationSelector: ({ foo }) => ({ pathname : "foo" })
});
H3helper.getRedirectQueryParam({ foo : "bar" });
H3helper.createRedirectLoc({ foo : "bar" }, "redirect");

/* History 4 */

connectedRouterRedirect({
    redirectPath: "/login",
    authenticatedSelector: boolSelector,
    authenticatingSelector: boolSelector,
    AuthenticatingComponent: (props: any) => null,
    wrapperDisplayName: "Auth",
    allowRedirectBack: true,
    redirectQueryParamName: "redirect"
})(
    ({
        foo,
        isAuthenticated,
        isAuthenticating,
        redirect,
        redirectPath
    }) => null
);

class Loading extends Component {
    render() {
        return null;
    }
}

connectedReduxRedirect({
    redirectPath: "/login",
    redirectAction: push,
    authenticatedSelector: boolSelector,
    authenticatingSelector: boolSelector,
    AuthenticatingComponent: Loading,
    wrapperDisplayName: "Auth",
    allowRedirectBack: true,
    redirectQueryParamName: "redirect"
})(
    ({
        foo,
        isAuthenticated,
        isAuthenticating,
        redirectPath
    }) => null
);

const helper = locationHelperBuilder<TestComponentProps>({
    redirectQueryParamName: "redirect",
    locationSelector: ({ foo }) => ({ pathname : "foo" })
});
helper.getRedirectQueryParam({ foo : "bar" });
helper.createRedirectLoc({ foo : "bar" }, "redirect");

/* Other Wrappers */

authWrapper<TestComponentProps>({
    AuthenticatingComponent: "div",
    FailureComponent: "div",
    wrapperDisplayName: "Auth"
})(
    ({
        foo,
        isAuthenticated,
        isAuthenticating
    }) => null
);

connectedAuthWrapper({
    authenticatedSelector: boolSelector,
    authenticatingSelector: boolSelector,
    AuthenticatingComponent: "div",
    FailureComponent: "div",
    wrapperDisplayName: "Auth"
})(
    ({
        foo,
        isAuthenticated,
        isAuthenticating
    }) => null
);
