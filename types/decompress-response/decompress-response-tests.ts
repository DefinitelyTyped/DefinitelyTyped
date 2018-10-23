import decompressResponse = require("decompress-response");
import http = require("http");

http.get("localhost", response => {
    response = decompressResponse(response);
});
