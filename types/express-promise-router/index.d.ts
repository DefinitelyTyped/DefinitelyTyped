// Type definitions for express-promise-router 2.0
// Project: https://github.com/express-promise-router/express-promise-router
// Definitions by: Anjun Wang <https://github.com/wanganjun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================
import Router = require('express-promise-router');

const router = Router();

router.get('/', (req, res) => {
    // equivalent to calling next()
    return Promise.resolve('next');
})

router.post('/', async (req, res) => {
    // ...
})

export default router;
 =============================================== */

import { Router } from "express";

/**
 * A simple wrapper for Express 4's Router that allows middleware to return
 * promises. If the promise is rejected, `express-promise-router` will call next
 * with the reason
 */
declare const PromiseRouter: typeof Router;
export = PromiseRouter;
