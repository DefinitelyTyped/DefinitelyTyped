// This is a functional scenario. It should be possible to compile and
// deploy thi as an EdgeWorker. When it runs, it will stream a resource
// back, replacing all of the text with UPPER CASE. The resource
// in question doesn't matter.
import { httpRequest } from 'http-request';
import { createResponse } from 'create-response';
import { TransformStream } from 'streams';
import { TextDecoderStream, TextEncoderStream } from 'text-encode-transform';

class ToUpperCaseStream extends TransformStream<string, string> {
    constructor() {
        function start(controller: any): void { }
        function transform(chunk: any, controller: any): void {
            controller.enqueue(chunk.toUpperCase());
        }
        function flush(controller: any): void { }
        super({ start, transform, flush });
    }
}

export function responseProvider(request: EW.ResponseProviderRequest) {
    return httpRequest('http://www.mofroyo.co/us/en/index.html').then(response => {
        const responseHeader = JSON.stringify(request.getHeaders()); // get headers from response provider event
        const httpRequestHeader = JSON.stringify(response.getHeaders()); // get headers from httprequest
        return createResponse(
            response.status,
            {"resp-header": responseHeader, "httpreq-header": httpRequestHeader}, // passing both these headers should return them in response
            response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new ToUpperCaseStream()).pipeThrough(new TextEncoderStream())
        );
    });
}
