import swaggerSailsHook = require("swagger-sails-hook");
import * as express from "express";

const mockSailsApp = {
    models: {},
    conf: {},
    sockets: {},
    hooks: {},
    lift: () => { /* do nothing */ }
};

// create and register hook
const swaggerHookRef = swaggerSailsHook(mockSailsApp);
if (typeof swaggerHookRef.routes.after['/*'] === 'function') {
    // right type
}

swaggerHookRef.initialize(() => {
    // do something, when initialized
});
