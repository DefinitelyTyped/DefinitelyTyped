import * as Raven from "raven-js";
import * as createRavenMiddleware from "raven-for-redux";
import { applyMiddleware, createStore } from "redux";

const middleware = createRavenMiddleware(Raven);

createStore(
    () => {
        return null;
    },
    null,
    applyMiddleware(middleware)
);
