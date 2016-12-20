// Type definitions for inert 4.0
// Project: https://github.com/hapijs/inert/
// Definitions by: Steve Ognibene <http://github.com/nycdotnet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Note: this definition contains only enough to make TypeScript happy (hapi?) when
//  importing inert.  The functionality that importing inert adds to the reply
//  object and its other features are implemented in the hapi definition on
//  DefinitelyTyped.  The inert object is never actually used in practice except to
//  be passed as an extension to the server.register() method which already takes
//  an `any` argument, so just using `any` here is fine.

/// <reference types="node" />

export var inert: any;