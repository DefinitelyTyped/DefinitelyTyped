export function onClientRequest(request: EW.IngressClientRequest) {
    // Exercise EW.ClientRequest.setHeader()
    request.setHeader("from-set-header-1", ["value-1", "trailer-1"]);

    // Exercise EW.ClientRequest.addHeader()
    request.addHeader("from-add-header-3", ["value-3", "trailer-2"]);

    // Exercise EW.ClientRequest.removeHeader()
    request.removeHeader("to-remove-1");

    // Exercise EW.ClientRequest.getVariable()
    request.respondWith(505, [], "Missing get-variable-present");

    request.respondWith(505, { no: 'bad' }, 'Expected var to be missing');

    // Exercise respondWith
    const target = request.getHeader("target");
    if (target != null && target[0] === 'onClientRequest-respondWith') {
        request.respondWith(418, { 'from-respond-with': "frw value" }, "frw body");
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

    // getVariable
    const v = request.getVariable("var") || [];
    request.setHeader("variable", v);
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

    // Verify we set status
    response.status = 189;
}

export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {
    if (request.getHeader("should-status")) {
        response.status = 234;
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

    // Verify we set status
    response.status = 123;
}
