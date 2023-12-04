/**
 * These tests are mostly extracted from the README file and `doc/extending.md` (both in @sap/approuter (the source npm
 * package).
 */
import { MiddlewareHandler, StartOptions } from "@sap/approuter";
import approuter = require("@sap/approuter");
import xsrfHandler = require("@sap/approuter/lib/middleware/xsrf-token-handler");

const ar = approuter();

/*************** Example 1 ***************/
ar.beforeRequestHandler.use("/my-ext", function myMiddleware(req, res, next) {
    res.end("Request handled by my extension!");
});
ar.start();

/*************** Example 2 ***************/
ar.first.use("/backend", (req, res, next) => {
    req.afterRequestHandler = (ctx, done) => {
        if (ctx.outgoingResponse.statusCode === 200) {
            const incomingResponse = ctx.incomingResponse;
            incomingResponse.setHeader("header1", "abc");
            done(null, incomingResponse);
        } else {
            done(
                "An error occurred in backend, returned status " + ctx.outgoingResponse.statusCode,
                ctx.incomingResponse,
            );
        }
    };
    next();
});
ar.start();

/*************** Example 3 ***************/
ar.beforeRequestHandler
    .use("/my-ext", function myMiddleware(req, res, next) {
        res.end("Request handled by my extension!");
    });
ar.start();

/*************** Example 4 ***************/
ar.beforeRequestHandler.use("/my-ext", function myMiddleware(req, res, next) {
    res.setHeader("x-my-ext", "passed");
    next();
});

/*************** Example 5 ***************/
ar.start({
    extensions: [
        require("./tests/my-ext.js"),
    ],
});

/*************** Example 6 ***************/
// **Note**: the cmdParser is currently not typed, feel free to create a pr and add the missing types
// const params = ar.cmdParser
//     // add here custom command line options if needed
//     .option('-d, --dummy', 'A dummy option')
//     .parse(process.argv);

// console.log('Dummy option:', params.dummy);

/*************** Example 7 ***************/
// **Note**: the cmdParser is currently not typed, feel free to create a pr and add the missing types
// arWoCmd.cmdParser = false;

/*************** Example 8 ***************/
let getRouterConfig: StartOptions["getRouterConfig"];
ar.start({
    getRouterConfig,
});

let customRouterConfig: unknown;
const options = {
    xsappConfig: {
        routes: [
            {
                source: "/service",
                destination: "backend",
                scope: "$XSAPPNAME.viewer",
            },
        ],
    },
    destinations: [
        {
            name: "backend",
            url: "https://my.app.com",
            forwardAuthToken: true,
        },
    ],
    xsappname: "MYAPP",
};
ar.createRouterConfig(options, (err, routerConfig) => {
    if (err) {
        console.error(err);
    } else {
        customRouterConfig = routerConfig;
    }
});

getRouterConfig = (request, callback) => {
    if (/\?custom-query/.test(request.url ?? "")) {
        callback(null, customRouterConfig);
    } else {
        callback(null, null); // use default router config
    }
};

/*************** Example 9 ***************/
ar.on("login", function handler(session) {
    console.log(session.id);
});
ar.on("logout", function handler(session) {
    console.log(session.id);
});

/*************** Example 10 - sessionManagement ***************/

ar.start({
    getSessionSecret: function getSessionSecret() {
        return "CUSTOM_PERSISTED_SESSION_SECRET";
    },
}, function() {
    const store = ar.getSessionStore();
    const defaultTimeout = store.getDefaultSessionTimeout();

    ar.on("login", function(session) {
        console.log(session);
    });
    ar.on("update", function(sessionId, timeout) {
        console.log(sessionId, timeout, defaultTimeout);
    });
    ar.on("logout", function(sessionId) {
        console.log(sessionId);
    });
});

/*************** Example 11 - xsrf token middleware ***************/
function customMiddlewareHandler(): MiddlewareHandler {
    return function angularCsrfCookieHandler(
        request,
        response,
        next,
    ): void {
        xsrfHandler.getToken(request, (error, token) => {
            if (error !== null) {
                next(error);
                return;
            }
            response.setHeader("set-cookie", [`X-CSRF-Token=${token}; secure; samesite=strict; path=/`]);
            next();
        });
    };
}

ar.beforeRequestHandler.use("/my-ext", customMiddlewareHandler);

/*************** Example 12 - middleware with custom request properties ***************/
interface RequestWithSession {
    session?: {};
}

function middlewareHandlerWithCustomProps(): MiddlewareHandler<RequestWithSession> {
    return function angularCsrfCookieHandler(
        request,
        _,
        next,
    ): void {
        if (!request.session) {
            next(new Error("No session"));
        }
        next();
    };
}

ar.beforeRequestHandler.use("/my-ext", middlewareHandlerWithCustomProps);
