import * as Sentry from "@sentry/browser";
import createSentryMiddleware from "redux-sentry-middleware";
import { applyMiddleware, createStore } from "redux";

const middleware = createSentryMiddleware(Sentry);

createStore(
    () => {
        return null;
    },
    null,
    applyMiddleware(middleware)
);
