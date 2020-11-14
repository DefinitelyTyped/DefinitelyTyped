import express = require('express');

/**
 * Returns Express middleware that serves a `/service-worker.js` at `servedPath`
 * that resets any previously set service worker configuration.
 * Useful for development.
 */
declare function noopServiceWorkerMiddleware(servedPath: string): express.Handler;

export = noopServiceWorkerMiddleware;
