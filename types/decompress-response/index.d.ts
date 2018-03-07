// Type definitions for decompress-response 3.3
// Project: https://github.com/sindresorhus/decompress-response#readme
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import http = require("http");

export = decompress_response;
declare function decompress_response(response: http.IncomingMessage): http.IncomingMessage;
