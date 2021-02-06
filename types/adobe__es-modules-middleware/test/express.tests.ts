/// <reference types="node" />
import esModuleMiddleware = require('@adobe/es-modules-middleware');
import express = require('express');
import path = require('path');

const app = express();
const port = 3000;

const rootPath = path.resolve(__dirname);

app.use(
    esModuleMiddleware.middleware({
        paths: {
            '/node_modules': path.join(rootPath, 'node_modules'),
        },
    }),
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
