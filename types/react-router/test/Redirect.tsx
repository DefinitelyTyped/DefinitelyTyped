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

const RedirectWithValidTypedState = () => {
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

const RedirectWithInvalidTypedState = () => {
    return (
        // $ExpectError
        <Redirect<State>
            // $ExpectError
            to={{
                pathname: "/somewhere",
                state: {
                    foo: true,
                    bar: "this should fail"
                }
            }}
        />
    );
};

export {
    RedirectWithoutTypedState,
    RedirectWithValidTypedState,
    RedirectWithInvalidTypedState
};
