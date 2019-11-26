// Type definitions for express-list-endpoints 4.0
// Project: https://github.com/AlbertoFdzM/express-list-endpoints
// Definitions by: S Joseph <https://github.com/sjoseph7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');

export function getEndpoints(app: express.Express): Endpoint[];

export interface Endpoint {
    path: string;
    methods: string[];
}
