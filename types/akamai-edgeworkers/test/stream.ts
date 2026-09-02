import { createResponse } from "create-response";
import { httpRequest } from "http-request";
import { TextDecoderStream } from "text-encode-transform";
import { CompressionStream, DecompressionStream } from 'streams';
import { HtmlRewritingStream } from "html-rewriter";

const TEMPLATE_URL = "http://techjam.edgekey-staging.net/templates/index1MB.html";

export function responseProviderBufferedResponse(request: EW.ResponseProviderRequest) {
    return httpRequest(TEMPLATE_URL).then(response => {
        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
        const body = "";
        return reader.read().then(function accumulate({ done, value }) {
            return createResponse(response.status, {}, body);
        });
    });
}

export function responseProviderCompressedResponse(request: EW.ResponseProviderRequest) {
    return httpRequest(TEMPLATE_URL).then(response => {
        let compressed = response.body.pipeThrough(new CompressionStream("gzip"));
        return createResponse(response.status, {"content-encoding": "gzip"}, compressed);
    });
}

export function responseProviderRewriteCompressed(request: EW.ResponseProviderRequest) {
    const rewriter = new HtmlRewritingStream();
    rewriter.onElement("head", el => {
        el.append("<script src=\"/beaconTracker.js\"></script>");
    });

    return httpRequest(TEMPLATE_URL, { preserveEncoding: true }).then(response => {
        let stream = response.body;
        const contentEncoding = response.getHeader("content-encoding")?.[0];
        const decompress = contentEncoding == "gzip";

        const inject = request.getVariable("PMUSER_INJECT_BEACON");
        if (inject === "true") {
            stream = decompress ? stream.pipeThrough(new DecompressionStream("gzip")) : stream;
            stream = stream.pipeThrough(rewriter);
            stream = stream.pipeThrough(new CompressionStream("gzip"));
            return createResponse(response.status, {"content-encoding": "gzip"}, stream);
        } else {
            return createResponse(response.status, {}, stream);
        }
    });
}