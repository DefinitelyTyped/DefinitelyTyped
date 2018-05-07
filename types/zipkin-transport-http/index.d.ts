// Type definitions for zipkin-transport-http 0.11
// Project: https://github.com/openzipkin/zipkin-js#readme
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { JsonEncoder, Logger, model } from 'zipkin';

export interface Options {
    endpoint: string;
    jsonEncoder?: JsonEncoder;
    httpInterval?: number;
    headers?: { [name: string]: string };
}

export class HttpLogger implements Logger {
    logSpan(span: model.Span): void;
    constructor(options: Options)
}
