import { httpRequest } from "http-request";

export async function onClientRequest(request: EW.IngressClientRequest) {
    await httpRequest("http://example.org/", { headers: { "IP": request.clientIp } }).then(_response => {
        request.respondWith(200, {}, "Client IP: " + request.clientIp);
    });
}
