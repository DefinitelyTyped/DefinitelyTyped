import express = require('express');

/**
 * Returns Express middleware that serves a `/service-worker.js` that resets
 * any previously set service worker configuration. Useful for development.
 */
declare function noopServiceWorkerMiddleware(): express.Handler;

export = noopServiceWorkerMiddleware;
