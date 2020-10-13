// This is a functional scenario. It should be possible to compile and
// deploy thi as an EdgeWorker. When it runs, it will stream a resource
// back, replacing all of the text with UPPER CASE. The resource
// in question doesn't matter.
import { httpRequest } from 'http-request';
import { createResponse } from 'create-response';
import { ReadableStream, WritableStream, ReadableStreamDefaultController } from 'streams';
import { TextDecoderStream, TextEncoderStream } from 'text-encode-transform';

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
            }
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
            }
        });
    }
}

export function responseProvider(request: EW.ResponseProviderRequest) {
    return httpRequest('http://techjam.edgekey-staging.net/templates/index1MB.html').then(response => {
        return createResponse(
            response.status,
            {},
            response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new ToUpperCaseStream()).pipeThrough(new TextEncoderStream())
        );
    });
}
