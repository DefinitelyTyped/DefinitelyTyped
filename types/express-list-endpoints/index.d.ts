// Type definitions for express-list-endpoints 4.0
// Project: https://github.com/AlbertoFdzM/express-list-endpoints
// Definitions by: S Joseph <https://github.com/sjoseph7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import * as express from "express";
    import listEndpoints from "express-list-endpoints";

    const app = express();

    app.route('/')
        .all(function(req, res) {
            // Handle request
        })
        .get(function(req, res) {
            // Handle request
        })
        .post(function(req, res) {
            // Handle request
        });

    app.route('/about')
        .get(function(req, res) {
            // Handle request
    });

    console.log(listEndpoints(app));
    // It omits the 'all' verbs
    ```
    [{
        path: '/',
        methods: ['GET', 'POST']
    },
    {
        path: '/about',
        methods: ['GET']
    }]
    ```

 =============================================== */

import express = require('express');

declare function listEndpoints(app: express.Express): listEndpoints.Endpoint[];

declare namespace listEndpoints {
    interface Endpoint {
        path: string;
        methods: string[];
    }
}

export = listEndpoints;
