import express = require("express");
import interceptor = require("express-interceptor");

const app = express();

app.use(interceptor((req, res) => {
    req satisfies express.Request;
    res satisfies express.Response;

    return {
        isInterceptable() {
            return false;
        },
    };
}));

app.use(interceptor((req, res) => {
    return {
        isInterceptable() {
            return true;
        },

        intercept(body, send) {
            body satisfies string;
            send(body);
        },
    };
}));

app.use(interceptor((req, res) => {
    return {
        isInterceptable() {
            return true;
        },

        afterSend(oldBody, newBody) {
            oldBody satisfies string;
            newBody satisfies string;
        },
    };
}));
