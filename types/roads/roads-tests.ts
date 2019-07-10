import { build, Road, middleware, integrations, Response, HttpError, PJAX } from "roads";

const road = new Road();
const router = new middleware.SimpleRouter(road);

road.use(middleware.cors({
    requestHeaders: ["content-type"],
    responseHeaders: ["content-type"],
    supportsCredentials: true,
    validOrigins: ["http://localhost:8080"],
    validMethods: ["GET", "POST"],
    cacheMaxAge: 4
}));

road.use(middleware.killSlash);

router.addRoute("GET", "/user", (path, body, headers, next) => {
    const response = new Response({name: "test"}, 200, {"last-modified": (new Date()).toString()});
    response.setCookie("name", "value", {path: ''});
    response.getCookies();
    return response;
});

router.addRouteFile('./example.png', 'http://image-example.com');

road.request("GET", "/user")
    .then((response: any) => {
        console.log(`response: ${JSON.stringify(response)}`);
    });

road.use((method, url, body, headers, next) => {
    return JSON.stringify({
        method,
        url,
        body,
        headers,
        next
    });
});

road.use((method, url, body, headers, next) => {
    // execute the actual resource method, and return the response
    return next()
        // Catch any errors that are thrown by the resources
        .catch ((err: any) => {
            // Wrap the errors in response objects. If they are [HttpErrors](#roadshttperror) we adjust the status code
            switch (err.code) {
                case 404:
                    return new HttpError(err.massage , 404);
                case 405:
                    return new HttpError(err.massage, 405);
                case 500:
                default:
                    return new HttpError(err.massage, 500);
            }
        });
});

const pjax = new PJAX(road, document.getElementById('container'), window);
pjax.register();
build(__dirname + '/static/client.js', __dirname + '/static/client.brws.js', {
    use_sourcemaps: true,
    external: {
        roads: {
            output_file: __dirname + '/static/roads.brws.js',
        },
        react: {
            output_file: __dirname + '/static/react.brws.js',
        }
    },
    babelify: {presets: ['react']}
});

const koa = integrations.koa(road);
const express = integrations.express(road);
