import * as tracer from "dd-trace";
import SpanContext = require("dd-trace/src/opentracing/span_context");

tracer.init({
    service: "MyLovelyService",
    hostname: "localhost",
    port: 8126,
    logger: {
        debug: msg => {},
        error: err => {},
    },
});

function useWebFrameworkPlugin(plugin: "express" | "hapi" | "koa" | "restify") {
    tracer.use(plugin, {
        service: "incoming-request",
        headers: ["User-Agent"],
        validateStatus: code => code !== 418,
    });
}

tracer.use("graphql", {
    depth: 1,
    // Can’t use spread operator here due to https://github.com/Microsoft/TypeScript/issues/10727
    // tslint:disable-next-line:prefer-object-spread
    variables: variables => Object.assign({}, variables, { password: "REDACTED" }),
});

tracer.use("http", {
    splitByDomain: true,
});

tracer
    .trace("web.request", {
        service: "my_service",
        childOf: new SpanContext({ traceId: 1337, spanId: 42 }), // childOf must be an instance of this type. See: https://github.com/DataDog/dd-trace-js/blob/master/src/opentracing/tracer.js#L99
        tags: {
            env: "dev",
        },
    })
    .then(span => {
        span.setTag("my_tag", "my_value");
        span.finish();
    });

const parentScope = tracer.scopeManager().active();
const span = tracer.startSpan("memcached", {
    childOf: parentScope && parentScope.span(),
    tags: {
        "service.name": "my-memcached",
        "resource.name": "get",
        "span.type": "memcached",
    },
});
