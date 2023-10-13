import { applyMiddleware, createStore, PromiseAction } from "redux";
import { createAction } from "redux-actions";
import promise = require("redux-promise");

declare var userReducer: any;

const appStore = createStore(
    userReducer,
    applyMiddleware(
        promise,
    ),
);

appStore.dispatch(
    listUsers(),
);

function listUsers(): PromiseAction<any> {
    return createAction("LIST_USERS", () => {
        return Promise.resolve([{ email: "me@definitely.typed" }]);
    });
}
