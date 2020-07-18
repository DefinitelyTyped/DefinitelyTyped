// Type definitions for express-routemap 1.1
// Project: https://github.com/izelnakri/express-routemap#readme
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Application } from 'express';

declare function displayRoutes(app: Application, filename?: string): void;
export = displayRoutes;
