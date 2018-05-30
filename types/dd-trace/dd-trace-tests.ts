import * as ddTrace from 'dd-trace';

const tracer = ddTrace.init();

tracer
    .trace('web.request', {
        service: 'my_service'
    })
    .then(span => {
        span.setTag('my_tag', 'my_value');
        span.finish();
    });
