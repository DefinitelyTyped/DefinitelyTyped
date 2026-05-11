import { createResponse } from "create-response";

export function someFun() {
    // Positional
    createResponse(201, { cat: ["dog"], hat: "noise" }, "body");
    createResponse(201, {}, "body");
    createResponse(403, {}, "body", "deny reason");
    createResponse(201, {}, "body", undefined);

    // Options - empty
    createResponse();
    createResponse("a body");
    createResponse("a body", {});
    createResponse("a body", { headers: { "Accept-Encoding": "rocks" } });
    createResponse("a body", { headers: { "Accept-Encoding": ["rocks", "blocks"] }, denyReason: "deny reason" });
}
