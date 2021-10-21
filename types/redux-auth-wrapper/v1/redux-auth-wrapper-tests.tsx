import * as React from "react";
import { FunctionComponent } from "react";
import { UserAuthWrapper } from "redux-auth-wrapper";

const Auth = UserAuthWrapper<any, any, any>({
    allowRedirectBack: true,
    authenticatingSelector(state: any) {
        return state.auth.loading;
    },
    authSelector(state: any) {
        return state.auth;
    },
    FailureComponent: () => (<div />),
    failureRedirectPath: "/401",
    LoadingComponent: () => (<div />),
    redirectAction: () => ({ type : "redirect" }),
    redirectQueryParamName: "next",
    predicate(authData: any) {
        return authData.authorized;
    },
    wrapperDisplayName: "TestAuth"
});

export const TestAuthComponent: FunctionComponent = () => {
    return (<div />);
};

const TestAuth = Auth(TestAuthComponent);
