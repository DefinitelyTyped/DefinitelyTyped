import { atob, base16, base64, base64url, btoa, TextDecoder, TextEncoder } from "encoding";

export function onClientRequest(request: EW.IngressClientRequest) {
    const str = "Hello, world!";
    const enc1 = base64.encode(toBytesArray(str)); // "Hello, world!"
    const dec1 = base64.decode(enc1, "String"); // decode to "Hello, world!"
    if (str !== dec1) {
        request.respondWith(400, {}, "`base64` encode or decode gone wrong!");
    }
    const enc2 = base64url.encode(toBytesArray(str)); // "Hello, world!"
    const dec2 = base64url.decode(enc2, "String"); // decode to "Hello, world!"
    if (str !== dec2) {
        request.respondWith(400, {}, "`base64url` encode or decode gone wrong!");
    }
    const enc3 = base16.encode(new Uint8Array([72, 101, 108, 108, 111])); // "Hello"
    const dec3 = base16.decode(enc3, "String"); // decode to "Hello"
    if (str !== dec3) {
        request.respondWith(400, {}, "`base16` encode or decode gone wrong!");
    }
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

function toBytesArray(str: string) {
    const encoder = new TextEncoder();
    return encoder.encode(str);
}
