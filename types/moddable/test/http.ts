import { Request } from "http";

/**
 * Refer to https://github.com/Moddable-OpenSource/iot-product-dev-book/blob/master/ch3-network/http-get/example.js
 */
function testHttpGet() {
    const request = new Request({
        host: 'www.example.com',
        path: '/',
        response: String,
    });

    request.callback = (msg, value) => {
        if (Request.responseComplete === msg) {
            trace(value, '\n');
        }
    };
}
