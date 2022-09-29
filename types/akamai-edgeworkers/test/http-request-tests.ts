import { httpRequest } from 'http-request';
import { createResponse } from 'create-response';
import { TextEncoderStream } from 'text-encode-transform';
import { ReadableStream } from 'streams';

// Check the arguments of httpRequest
httpRequest("url");
httpRequest("url", {});
httpRequest("url", { headers: { "Accept-Encoding": "zz" } });
httpRequest("url", { method: "POST", body: "post payload" });
httpRequest("url", { timeout: 9 });
httpRequest("url", { method: "POST",
    body: new ReadableStream({
        start(controller) {
            controller.enqueue("This is a ReadableStream test");
            controller.close();
        }}).pipeThrough(new TextEncoderStream())});

httpRequest("url").then(response => {
    // Verify the non-body fields
    const r = response.status;
    const ok = response.ok;

    response.text().then(words => words.toUpperCase());
    response.json().then(obj => JSON.stringify(obj));

    response.getHeader("Date");

    // Verify getHeaders
    const headers = response.getHeaders();
    Object.keys(headers).forEach(key => {
        key.toUpperCase();
        const values = headers[key];
        values.forEach(val => val.toUpperCase());
    });

    // Verify body
    response.body;

    // Can we pass it directly to createResponse?
    createResponse(response.body);
    createResponse(123, {}, response.body);
});
