// Type definitions for express-sanitized 0.5
// Project: https://github.com/askhogan/express-sanitized
// Definitions by: Chris Barth <https://github.com/cjbarth/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'express-sanitized' {
    import * as express from "express";
    function e(): (req: express.Request, res: express.Response, next: Function) => void;
    namespace e{}
    export = e;
}
