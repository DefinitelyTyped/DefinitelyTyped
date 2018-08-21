import * as tracer from 'dd-trace';
import { SpanContext } from 'opentracing';

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
        childOf: new SpanContext(),
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
