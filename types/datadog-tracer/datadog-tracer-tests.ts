import Tracer = require('datadog-tracer');

const tracer = new Tracer({
    service: 'test'
});

tracer.on('error', (e: any) => {
    void(0);
});
