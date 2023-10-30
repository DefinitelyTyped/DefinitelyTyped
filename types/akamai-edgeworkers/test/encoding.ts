import { atob, base16, base64, base64url, btoa, TextDecoder, TextEncoder } from "encoding";

export function onClientRequest(request: EW.IngressClientRequest) {
    const result = base64.decode("SGVsbG8=", "String"); // decode to "Hello"
    const dec = atob("V29ybGQ="); // decodes to "World"
    request.setHeader("output", result.toString() + dec);
    const encoded = new TextEncoder().encode("This is a sample paragraph."); // produces Uint8Array[84,104,105,115,32,105,115,32,97,32,115,97,109,112,108,101,32,112,97,114,97,103,114,97,112,104,46]
    const encoded_as_binary_string = encoded.toString(); // produces the string "84,104,105,115,32,105,115,32,97,32,115,97,109,112,108,101,32,112,97,114,97,103,114,97,112,104,46"
    request.respondWith(200, {}, encoded_as_binary_string);
}

export function onOriginRequest(request: EW.IngressOriginRequest) {
    const enc = btoa("Hello");
    const result1 = base64url.decode(enc, "String");
    const result2 = base16.decode("576F726C64", "String"); // decodes to "World"
    request.setHeader("output", result1.toString() + result2.toString());
}

export function onOriginResponse(request: EW.EgressOriginRequest, response: EW.EgressOriginResponse) {
    const result = base64.decode("SGVsbG8sIHdvcmxk", "Uint8Array"); // decode to "[72,101,108,108,111,44,32,119,111,114,108,100]"
    request.setVariable("PMUSER_origin_response", result.toString());
    const decoder = new TextDecoder();
    const data = new Uint8Array([
        84,
        104,
        105,
        115,
        32,
        105,
        115,
        32,
        97,
        32,
        115,
        97,
        109,
        112,
        108,
        101,
        32,
        112,
        97,
        114,
        97,
        103,
        114,
        97,
        112,
        104,
        46,
    ]);
    const text = decoder.decode(data); // decodes to the string "This is a sample paragraph."
    request.respondWith(231, {}, text);
}

export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {
    const decoder = new TextDecoder();
    let output = "";
    // Push first chunk
    output += decoder.decode(new Uint8Array([0xE2, 0x82]), { stream: true });
    // Push second chunk
    output += decoder.decode(new Uint8Array([0xAC]), { stream: true });
    // Pass no arguments to decode(), indicating that there are no more chunks, and finish the decoding
    output += decoder.decode(); // produces "€"
    request.respondWith(201, {}, output);
}
