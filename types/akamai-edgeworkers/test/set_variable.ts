export function onClientRequest(request: EW.IngressClientRequest) {
    request.setVariable('PMUSER_client_request', 'foobar');
}

export function onOriginRequest(request: EW.IngressOriginRequest) {
    request.setVariable('PMUSER_origin_request', 'foobar');
}

export function onOriginResponse(request: EW.EgressOriginRequest, response: EW.EgressOriginResponse) {
    request.setVariable('PMUSER_origin_response', 'foobar');
}

export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {
    request.setVariable('PMUSER_client_response', 'foobar');
}
