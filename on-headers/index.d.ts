// Type definitions for serve-favicon 2.1.6
// Project: https://github.com/jshttp/on-headers
// Definitions by: John Jeffery <https://github.com/jjeffery/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import http = require("http");

/**
 * This will add the listener to fire when headers are emitted for res.
 * The listener is passed the response object as its context (this).
 * Headers are considered emitted only once, right before they 
 * are sent to the client.
 *
 * When this is called multiple times on the same res, the listeners
 * are fired in the reverse order they were added.
 *
 * @param res HTTP server response object
 * @param listener Function to call prior to headers being emitted,
 *        the response object is passed as this context.
 */
declare function onHeaders(res: http.ServerResponse, listener: Function): void;

// Note that this definition might be able to be improved in a future
// version of typescript. At the moment it is not possible to declare
// the type of the 'this' context for a function, but it might be included
// in a future typescript version.
// https://github.com/Microsoft/TypeScript/issues/229

export = onHeaders;
