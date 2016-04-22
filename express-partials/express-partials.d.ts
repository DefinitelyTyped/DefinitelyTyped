// Type definitions for express-partials
// Project: https://github.com/publicclass/express-partials
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />


import express = require('express');

declare function expressPartials(options?: any): express.RequestHandler;

export = expressPartials;
