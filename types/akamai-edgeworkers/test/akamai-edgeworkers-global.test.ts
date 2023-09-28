import { createResponse, Headers } from "create-response";
export function onClientRequest(request: EW.IngressClientRequest) {
    // Exercise EW.ClientRequest.setHeader()
    request.setHeader("from-set-header-1", ["value-1", "trailer-1"]);

    // Exercise EW.ClientRequest.addHeader()
    request.addHeader("from-add-header-3", ["value-3", "trailer-2"]);

    // Exercise EW.ClientRequest.removeHeader()
    request.removeHeader("to-remove-1");

    // EW.IngressClientRequest.getHeaders()
    testHeaders(request.getHeaders());

    // Exercise EW.ClientRequest.getVariable()
    request.respondWith(505, [], "Missing get-variable-present");

    request.respondWith(505, { no: "bad" }, "Expected var to be missing");

    // Exercise respondWith
    const target = request.getHeader("target");
    if (target != null && target[0] === "onClientRequest-respondWith") {
        request.respondWith(418, { "from-respond-with": "frw value" }, "frw body");
    }
}

export function onOriginRequest(request: EW.IngressOriginRequest) {
    // getHeader
    const h = request.getHeader("onOriginRequest-getHeader");
    if (h == null) {
        return;
    }

    // setHeader
    request.setHeader("onOriginRequest-getHeader-set", h[0]);

    // addHeader
    request.addHeader("onOriginRequest-addHeader-single", "single");
    request.addHeader("onOriginRequest-addHeader-multi", ["multi-1", "multi-2"]);

    // removeHeader
    request.getHeader("onOriginRequest-removeHeader-bye");
    request.removeHeader("onOriginRequest-removeHeader-bye");

    // EW.IngressOriginRequest.getHeaders()
    testHeaders(request.getHeaders());

    // getVariable
    const v = request.getVariable("var") || [];
    request.setHeader("variable", v);

    // respondWith
    const target = request.getHeader("target");
    if (target != null && target[0] === "onOriginRequest-respondWith") {
        request.respondWith(418, { "from-respond-with": "frw value" }, "frw body");
    }
}

export function onOriginResponse(request: EW.EgressOriginRequest, response: EW.EgressOriginResponse) {
    if (response.getHeader("should-respondWith")) {
        request.respondWith(444, {}, "wanted a respond with");
        return;
    }

    if (response.getHeader("should-status")) {
        response.status = 456;
        return;
    }

    // Req - getHeader
    let h = request.getHeader("onOriginResponse-req-getHeader") || [];
    response.setHeader("header-from-req", h);

    // getVariable
    const v = request.getVariable("req-var") || [];
    response.setHeader("variable", v);

    // Resp - getHeader
    h = response.getHeader("onOriginResponse-resp-getHeader") || [];

    // Resp- setHeader
    response.setHeader("onOriginResponse-getHeader-resp-set", h);

    // Resp- addHeader
    response.addHeader("onOriginResponse-addHeader-resp-single", "single");
    response.addHeader("onOriginResponse-addHeader-resp-multi", ["multi-1", "multi-2"]);

    // Resp- removeHeader
    if (!response.getHeader("onOriginResponse-removeHeader-resp-bye")) {
        return;
    }
    response.removeHeader("onOriginResponse-removeHeader-resp-bye");

    // EW.EgressOriginRequest.getHeaders()
    testHeaders(request.getHeaders());

    // Verify we set status
    response.status = 189;
    // respondWith
    const target = request.getHeader("target");
    if (target != null && target[0] === "onOriginResponse-respondWith") {
        request.respondWith(418, { "from-respond-with": "frw value" }, "frw body");
    }

    // verify wasTerminated() returns a boolean
    if (request.wasTerminated()) {
        request.respondWith(419, {}, "overwritten!");
    }
}

export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {
    if (request.getHeader("should-status")) {
        response.status = 234;
        return;
    }

    if (response.getHeader("should-respondWith")) {
        request.respondWith(444, {}, "wanted a respond with");
        return;
    }

    // Req - getHeader
    let h = request.getHeader("onClientResponse-req-getHeader") || [];
    response.setHeader("header-from-req", h);

    // getVariable
    const v = request.getVariable("req-var") || "";
    response.setHeader("variable", v);

    // Resp - getHeader
    h = response.getHeader("onClientResponse-resp-getHeader") || [];

    // Resp- setHeader
    response.setHeader("onClientResponse-getHeader-resp-set", h);

    // Resp- addHeader
    response.addHeader("onClientResponse-addHeader-resp-single", "single");
    response.addHeader("onClientResponse-addHeader-resp-multi", ["multi-1", "multi-2"]);

    // Resp- removeHeader
    if (!response.getHeader("onClientResponse-removeHeader-resp-bye")) {
        return;
    }
    response.removeHeader("onClientResponse-removeHeader-resp-bye");

    // EW.EgressClientRequest.getHeaders()
    testHeaders(request.getHeaders());

    // Verify we set status
    response.status = 123;
    // respondWith
    const target = request.getHeader("target");
    if (target != null && target[0] === "onClientResponse-respondWith") {
        request.respondWith(418, { "from-respond-with": "frw value" }, "frw body");
    }
}

export function responseProvider(request: EW.ResponseProviderRequest) {
    // EW.ResponseProviderRequest.getHeaders()
    testHeaders(request.getHeaders());

    // EW.ResponseProviderRequest.text()
    const stringBody = request.text();

    // EW.ResponseProviderRequest.json()
    const jsonBody = request.json();

    // getVariable
    const v = request.getVariable("var") || [];

    // EW.ResponseProviderRequest.arrayBuffer()
    const arrayBufferBody = request.arrayBuffer();
}

function testHeaders(headers: EW.Headers) {
    Object.keys(headers).forEach(key => {
        key.toUpperCase();
        headers[key].length;
        headers[key][0].toUpperCase();
    });

    // get a specific header and do string operations
    const acceptHeader = headers["accept-encoding"];
    acceptHeader.forEach(val => val.toUpperCase());
}
