// This is a functional scenario. It should be possible to compile and
// deploy thi as an EdgeWorker. When it runs, it will stream a resource
// back, replacing all of the text with UPPER CASE. The resource
// in question doesn't matter.
import { createResponse } from "create-response";
import { httpRequest } from "http-request";
import { ReadableStream, ReadableStreamDefaultController, WritableStream } from "streams";
import { TextDecoderStream, TextEncoderStream } from "text-encode-transform";

class ToUpperCaseStream {
    readController: ReadableStreamDefaultController | null;
    readable: any;
    writable: any;

    constructor() {
        this.readController = null;

        const owner = this;

        this.readable = new ReadableStream({
            start(controller: ReadableStreamDefaultController) {
                owner.readController = controller;
            },
        });

        this.writable = new WritableStream({
            write(text: string) {
                if (owner.readController) {
                    owner.readController.enqueue(text.toUpperCase());
                }
            },
            close() {
                if (owner.readController) {
                    owner.readController.close();
                }
            },
        });
    }
}

export function responseProvider(request: EW.ResponseProviderRequest) {
    return httpRequest("http://www.mofroyo.co/us/en/index.html").then(response => {
        const responseHeader = JSON.stringify(request.getHeaders()); // get headers from response provider event
        const httpRequestHeader = JSON.stringify(response.getHeaders()); // get headers from httprequest
        return createResponse(
            response.status,
            { "resp-header": responseHeader, "httpreq-header": httpRequestHeader }, // passing both these headers should return them in response
            response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new ToUpperCaseStream()).pipeThrough(
                new TextEncoderStream(),
            ),
        );
    });
}
