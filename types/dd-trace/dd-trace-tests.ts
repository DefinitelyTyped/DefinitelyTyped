import * as tracer from 'dd-trace';
import SpanContext = require('dd-trace/src/opentracing/span_context');

tracer.init({
    service: 'MyLovelyService',
    hostname: 'localhost',
    port: 8126,
    logger: {
        debug: msg => { },
        error: err => { }
    }
});

tracer
    .trace('web.request', {
        service: 'my_service',
        childOf: new SpanContext({ traceId: 1337, spanId: 42 }), // Childof must be an instance of this type. See: https://github.com/DataDog/dd-trace-js/blob/master/src/opentracing/tracer.js#L99
        tags: {
            env: 'dev'
        }
    })
    .then(span => {
        span.setTag('my_tag', 'my_value');
        span.finish();
    });

const parentScope = tracer.scopeManager().active();
const span = tracer.startSpan('memcached', {
    childOf: parentScope && parentScope.span(),
    tags: {
        'service.name': 'my-memcached',
        'resource.name': 'get',
        'span.type': 'memcached',
    },
});
