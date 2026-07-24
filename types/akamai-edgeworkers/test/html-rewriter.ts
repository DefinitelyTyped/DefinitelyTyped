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

    // (3) Add a handler to the rewriter: this one adds body content fetched via httpRequest after the </h1>.
    // text(): returns a Promise that resolves to a String containing the full body
    const insertion_after = await httpRequest("/after");
    rewriter.onElement('h1', el => {
        el.after(insertion_after.text());
    });

    // (4) Add a handler to the rewriter: this one adds body content fetched via httpRequest before the <p>.
    // The body property is the stream used to read the content body. This is a read-only ReadableStream.
    const insertion_before = await httpRequest("/before");
    rewriter.onElement('p', el => {
        el.after(Promise.resolve(insertion_before.body));
    });

    // (5) Use `pipeThrough()` to modify the input HTML with the rewriter
    return createResponse(200, {}, htmlResponse.body.pipeThrough(rewriter));
}
