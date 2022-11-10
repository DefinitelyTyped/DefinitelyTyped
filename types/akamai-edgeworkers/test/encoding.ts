import { atob, btoa, base64, base64url, base16 } from "encoding";

export function onClientRequest(request: EW.IngressClientRequest) {
    const result = base64.decode("SGVsbG8=", "String"); // decode to "Hello"
    const dec = atob("V29ybGQ="); // decodes to "World"
    request.setHeader('output', result.toString() + dec);
}

export function onOriginRequest(request: EW.IngressOriginRequest) {
    const enc = btoa("Hello");
    const result1 = base64url.decode(enc, "String");
    const result2 = base16.decode("576F726C64", "String"); // decodes to "World"
    request.setHeader('output', result1.toString() + result2.toString());
}

export function onOriginResponse(request: EW.EgressOriginRequest, response: EW.EgressOriginResponse) {
    const result = base64.decode("SGVsbG8sIHdvcmxk", "Uint8Array"); // decode to "[72,101,108,108,111,44,32,119,111,114,108,100]"
    request.setVariable('PMUSER_origin_response', result.toString());
}
