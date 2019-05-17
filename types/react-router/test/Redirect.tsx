// TypeScript Version: 2.9

import * as React from "react";
import { Redirect } from "react-router";

interface State {
    foo: boolean;
}

const RedirectWithoutTypedState = () => {
    return (
        <Redirect
            to={{
                pathname: "/somewhere",
                state: {
                    foo: "bar"
                }
            }}
        />
    );
};

const RedirectWithTypedState = () => {
    return (
        <Redirect<State>
            to={{
                pathname: "/somewhere",
                state: {
                    foo: true
                }
            }}
        />
    );
};

export { RedirectWithoutTypedState, RedirectWithTypedState };
