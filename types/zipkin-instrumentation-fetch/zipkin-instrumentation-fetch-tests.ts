import wrapFetch = require('zipkin-instrumentation-fetch');
import fetch from 'node-fetch';

import {
    Tracer,
    BatchRecorder,
    jsonEncoder,
} from 'zipkin';

import CLSContext = require('zipkin-context-cls');
import { HttpLogger } from 'zipkin-transport-http';

// Setup the tracer to use http and implicit trace context
const tracer = new Tracer({
    ctxImpl: new CLSContext('zipkin'),
    recorder: new BatchRecorder({
        logger: new HttpLogger({
            endpoint: 'http://localhost:9411/api/v2/spans',
            jsonEncoder: jsonEncoder.JSON_V2
        })
    }),
    localServiceName: 'service-a'
});

const remoteServiceName = 'youtube';
const serviceName = 'my-service';
const zipkinFetch = wrapFetch(fetch, { tracer, remoteServiceName });
const zipkinFetchWithSn = wrapFetch(fetch, { tracer, serviceName, remoteServiceName });
