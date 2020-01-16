// Type definitions for express-flash 0.0
// Project: https://github.com/RGBboy/express-flash
// Definitions by: Ian Mobley <https://github.com/iMobs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="connect-flash" />

import express = require('express');
declare function flash(): express.RequestHandler;
export = flash;
