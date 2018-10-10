import fastifyCors = require("fastify-cors");

fastifyCors();

const fastifyCorsOptions: fastifyCors.FastifyCorsOptions = {
    origin: true,
    allowedHeaders: "authorization,content-type",
    methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    credentials: true,
    exposedHeaders: "authorization",
    maxAge: 13000,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    preflight: false,
};

const fastifyCorsOptionsArray: fastifyCors.FastifyCorsOptions = {
    origin: true,
    allowedHeaders: ["authorization", "content-type"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    exposedHeaders: ["authorization"],
    maxAge: 13000,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    preflight: false,
};

const originString: fastifyCors.FastifyCorsOptions = {
    origin: "*",
    allowedHeaders: ["authorization", "content-type"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    exposedHeaders: ["authorization"],
    maxAge: 13000,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    preflight: false,
};

const originRegexp: fastifyCors.FastifyCorsOptions = {
    origin: /\*/,
    allowedHeaders: ["authorization", "content-type"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    exposedHeaders: ["authorization"],
    maxAge: 13000,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    preflight: false,
};

const originStringArray: fastifyCors.FastifyCorsOptions = {
    origin: ["*", "something"],
    allowedHeaders: ["authorization", "content-type"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    exposedHeaders: ["authorization"],
    maxAge: 13000,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    preflight: false,
};

const originRegexpArray: fastifyCors.FastifyCorsOptions = {
    origin: [/\*/, /something/],
    allowedHeaders: ["authorization", "content-type"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    exposedHeaders: ["authorization"],
    maxAge: 13000,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    preflight: false,
};

const originCallback: fastifyCors.FastifyCorsOptions = {
    origin: (err: Error, allow: boolean) => {
        throw err;
    },
    allowedHeaders: ["authorization", "content-type"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    exposedHeaders: ["authorization"],
    maxAge: 13000,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    preflight: false,
};
