"use strict";

// MODEL

import { button, div } from "muvjs/muv-dom";
import { muv } from "muvjs/muv";

export const model = {
    count: 0
};

export type Model = typeof model;

// UPDATE

const Increment = "increment";
interface IncrementAction {
    type: typeof Increment;
}
const increment = (): IncrementAction => {
    return {
        type: Increment
    };
};

const Decrement = "decrement";
interface DecrementAction {
    type: typeof Decrement;
}
const decrement = (): DecrementAction => {
    return {
        type: Decrement
    };
};

const CompleteRequest = "complete-request";
interface CompleteRequestAction {
    type: typeof CompleteRequest;
    xhr: XMLHttpRequest;
}
const completeRequest = (xhr: XMLHttpRequest): CompleteRequestAction => {
    return {
        type: CompleteRequest,
        xhr
    };
};

const SignIn = "sign-in";
interface SignInAction {
    type: typeof SignIn;
}
const signIn = (): SignInAction => {
    return {
        type: SignIn
    };
};

export type Action = IncrementAction | DecrementAction | CompleteRequestAction | SignInAction;

export const update = (model: Model) => (action: Action) => {
    let effects: Effect[] = [];
    switch (action.type) {
        case Increment:
            model = {...model};
            model.count = model.count + 1;
            break;

        case Decrement:
            model = {...model};
            model.count = model.count - 1;
            break;

        case CompleteRequest:
            console.log("Request Completed: ", action.xhr.responseText);
            break;

        case SignIn:
            effects = effects.concat(makeRequest());
            break;
    }
    return {model, effects};
};

// VIEW

export const view = (dispatch: (a: Action) => void) => (model: Model) =>
    div()([
            , button({onclick: () => dispatch(decrement())})('-')
            , div()(model.count)
            , button({onclick: () => dispatch(increment())})('+')
        ]
    );

// IGNITION

export const ignition = (dispatch: (a: Action) => void) => {
    dispatch(signIn());
};

// SUBSCRIPTIONS

const AjaxRequest = "ajax-request";
interface AjaxRequestEffect {
    type: typeof AjaxRequest;
}
const makeRequest = (): AjaxRequestEffect => {
    return {
        type: AjaxRequest
    };
};

export type Effect = AjaxRequestEffect;

export const subscriptions = (dispatch: (a: Action) => void) => (effect: Effect) => {
    switch (effect.type) {
        case AjaxRequest:
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:8080", true);

            xhr.onload = () => {
                dispatch(completeRequest(xhr));
            };

            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.send();
            break;
    }
};

// MAIN

muv({model, update, view, ignition, subscriptions})('root');
