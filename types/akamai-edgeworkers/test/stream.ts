import { createResponse } from "create-response";
import { httpRequest } from "http-request";
import { TextDecoderStream } from "text-encode-transform";

export function responseProviderBufferedResponse(request: EW.ResponseProviderRequest) {
    return httpRequest("http://techjam.edgekey-staging.net/templates/index1MB.html").then(response => {
        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
        const body = "";
        return reader.read().then(function accumulate({ done, value }) {
            return createResponse(response.status, {}, body);
        });
    });
}
