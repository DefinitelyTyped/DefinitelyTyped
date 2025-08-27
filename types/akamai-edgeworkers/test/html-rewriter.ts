import { createResponse } from "create-response";
import { HtmlRewritingStream } from "html-rewriter";
import { httpRequest } from "http-request";

async function responseProvider(request: EW.ResponseProviderRequest) {
    // Setup: Fetch a stream containing HTML
    const htmlResponse = await httpRequest("/html");
    if (!htmlResponse.ok) {
        return createResponse(500, {}, `Failed to fetch doc: ${htmlResponse.status}`);
    }

    // (1) Create a new rewriter instance
    const rewriter = new HtmlRewritingStream();

    // (2) Add a handler to the rewriter: this one adds a <script> tag to the <head>.
    rewriter.onElement("head", el => {
        el.append("<script src=\"/beaconTracker.js\"></script>");
    });

    // (3) Use `pipeThrough()` to modify the input HTML with the rewriter
    return createResponse(200, {}, htmlResponse.body.pipeThrough(rewriter));
}
