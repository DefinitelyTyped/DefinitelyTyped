import express = require('express');
import { Tracer, ExplicitContext, ConsoleRecorder } from 'zipkin';
import { expressMiddleware as zipkinMiddleware } from 'zipkin-instrumentation-express';

const ctxImpl = new ExplicitContext();
const recorder = new ConsoleRecorder();
const localServiceName = 'service-a';
const tracer = new Tracer({ ctxImpl, recorder, localServiceName });

const app = express();

app.use(zipkinMiddleware({ tracer }));
