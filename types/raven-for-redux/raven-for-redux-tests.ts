import * as Raven from "raven-js";
import createRavenMiddleware = require("raven-for-redux");
import { applyMiddleware, createStore } from "redux";

const middleware = createRavenMiddleware(Raven);

createStore(
    () => {
        return null;
    },
    null,
    applyMiddleware(middleware)
);
