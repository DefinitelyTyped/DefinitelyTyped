// Type definitions for express-list-endpoints 4.0
// Project: https://github.com/AlbertoFdzM/express-list-endpoints
// Definitions by: S Joseph <https://github.com/sjoseph7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');

declare function getEndpoints(app: express.Express): getEndpoints.Endpoint[];

declare namespace getEndpoints {
    interface Endpoint {
        path: string;
        methods: string[];
    }
}

export = getEndpoints;
