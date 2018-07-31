import * as ddTrace from 'dd-trace';
import SpanContext = require('dd-trace/src/opentracing/span_context');

const tracer = ddTrace.init({
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
        childOf: new SpanContext({ traceId: 1337, spanId: 42 }),
        tags: {
            env: 'dev'
        }
    })
    .then(span => {
        span.setTag('my_tag', 'my_value');
        span.finish();
    });
