import express = require('express');

/**
 * Returns Express middleware that redirects to `${servedPath}/${req.url}`
 * if path does not start with `servedPath`
 * Useful for development.
 */
declare function redirectServedPathMiddleware(servedPath: string): express.Handler;

export = redirectServedPathMiddleware;
