import cacheResponseDirective = require("express-cache-response-directive");
import * as express from "express";

cacheResponseDirective(); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>

const app = express();
app.use(cacheResponseDirective()); // $ExpectType Express

app.get("/", (req: express.Request, res: express.Response) => {
    res.cacheControl("public"); // $ExpectType void
    res.cacheControl("public", {}); // $ExpectType void
    res.cacheControl("private"); // $ExpectType void
    res.cacheControl("no-cache"); // $ExpectType void
    res.cacheControl("no-store"); // $ExpectType void
    res.cacheControl({ public: true }); // $ExpectType void
    res.cacheControl({ private: true }); // $ExpectType void
    res.cacheControl({ private: "X-Private" }); // $ExpectType void
    res.cacheControl({ private: ["X-Private-1", "X-Private-2"] }); // $ExpectType void
    res.cacheControl({ "no-cache": true }); // $ExpectType void
    res.cacheControl({ noCache: true }); // $ExpectType void
    res.cacheControl({ noCache: "X-Uncached" }); // $ExpectType void
    res.cacheControl({ noCache: ["X-Uncached-1", "X-Uncached-2"] }); // $ExpectType void
    res.cacheControl({ "no-store": true }); // $ExpectType void
    res.cacheControl({ noStore: true }); // $ExpectType void
    res.cacheControl({ "max-age": 300 }); // $ExpectType void
    res.cacheControl({ maxAge: 300 }); // $ExpectType void
    res.cacheControl({ maxAge: "5min" }); // $ExpectType void
    res.cacheControl({ "s-maxage": 300 }); // $ExpectType void
    res.cacheControl({ sMaxage: 300 }); // $ExpectType void
    res.cacheControl({ sMaxAge: 300 }); // $ExpectType void
    res.cacheControl({ "must-revalidate": true }); // $ExpectType void
    res.cacheControl({ mustRevalidate: true }); // $ExpectType void
    res.cacheControl({ "proxy-revalidate": true }); // $ExpectType void
    res.cacheControl({ proxyRevalidate: true }); // $ExpectType void
    res.cacheControl({ noTransform: true }); // $ExpectType void
    res.cacheControl({ "no-transform": true }); // $ExpectType void
    res.cacheControl({ "stale-while-revalidate": 600 }); // $ExpectType void
    res.cacheControl({ staleWhileRevalidate: "1h" }); // $ExpectType void
    res.cacheControl({ "stale-if-error": 600 }); // $ExpectType void
    res.cacheControl({ staleIfError: "1h" }); // $ExpectType void
    res.cacheControl({ private: true, "max-age": 300 }); // $ExpectType void
    res.cacheControl("private", { mustRevalidate: true }); // $ExpectType void
    res.cacheControl("public", { private: "X-Private" }); // $ExpectType void
});

app.get("/error", (req: express.Request, res: express.Response) => {
    // @ts-expect-error
    res.cacheControl();
    // @ts-expect-error
    res.cacheControl("unknown");
    // @ts-expect-error
    res.cacheControl("public", { unknown: true });
});
