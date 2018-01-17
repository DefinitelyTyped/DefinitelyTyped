// Type definitions for zipkin-instrumentation-express 0.11
// Project: https://github.com/openzipkin/zipkin-js#readme
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');
import { Tracer } from 'zipkin';

export interface Options {
    tracer: Tracer;
}

export function expressMiddleware(options: Options): express.RequestHandler;
