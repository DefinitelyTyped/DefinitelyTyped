import { createServer, IncomingMessage, ServerResponse } from "http";
import { createServer as createHttp2Server, Http2ServerRequest, Http2ServerResponse } from "http2";
import Koa = require("koa");

declare module "koa" {
    interface ExtendableContext {
        errors?: Error[] | undefined;
    }
}

interface DbBaseContext {
    db(): void;
}

interface UserContext {
    user: {};
}

const app = new Koa<{}, DbBaseContext>();

app.context.db = () => {};

app.use(async ctx => {
    if (ctx.errors) {
        ctx.throw(400, ctx.errors[0]);
        ctx.throw(400);
        ctx.throw(400, "name required");
        ctx.throw(400, "name required", { user: { id: 7 } });
        ctx.throw(403);
        ctx.throw(400, "name required");
        ctx.throw("something exploded");
        ctx.throw(new Error("invalid"));
        ctx.throw(400, new Error("invalid"));
    }
});

app.use(async (ctx, next) => {
    try {
        return await next();
    } catch (ex: any) {
        ctx.errors = [ex];
    }
});

app.use<{}, UserContext>(async ctx => {
    console.log(ctx.db);
    ctx.user = {};
});

app.use((ctx: Koa.Context, next) => {
    const start: any = new Date();
    return next().then(() => {
        const end: any = new Date();
        const ms = end - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        ctx.assert(true, 404, "Yep!");
    });
});

app.use(ctx => {
    ctx.accepts(); // $ExpectType string[]
    ctx.accepts(""); // $ExpectType string | false
    ctx.accepts([""]); // $ExpectType string | false
    ctx.acceptsEncodings(); // $ExpectType string[]
    ctx.acceptsEncodings(""); // $ExpectType string | false
    ctx.acceptsEncodings([""]); // $ExpectType string | false
    ctx.acceptsCharsets(); // $ExpectType string[]
    ctx.acceptsCharsets(""); // $ExpectType string | false
    ctx.acceptsCharsets([""]); // $ExpectType string | false
    ctx.acceptsLanguages(); // $ExpectType string[]
    ctx.acceptsLanguages(""); // $ExpectType string | false
    ctx.acceptsLanguages([""]); // $ExpectType string | false
    ctx.is(""); // $ExpectType string | false | null
    ctx.is([""]); // $ExpectType string | false | null

    ctx.vary("Origin"); // $ExpectType void
    ctx.vary(["Origin", "User-Agent"]); // $ExpectType void
});

// response
app.use(ctx => {
    ctx.body = "Hello World";
    ctx.body = ctx.URL.toString();
});

app.listen(3000);

const currentContext: DbBaseContext | undefined = app.currentContext;

const server = app.listen();

const callback = app.callback();
createServer(callback);
createHttp2Server(callback);

declare const request: IncomingMessage;
declare const response: ServerResponse;
declare const http2Request: Http2ServerRequest;
declare const http2Response: Http2ServerResponse;

const result = callback(request, response);
const http2Result = callback(http2Request, http2Response);
const expectedResult: Promise<ServerResponse | Http2ServerResponse | undefined> = result;
const expectedHttp2Result: Promise<ServerResponse | Http2ServerResponse | undefined> = http2Result;

result.then(value => {
    if (value) {
        value.end();
    }

    // @ts-expect-error The response may be undefined when Koa bypasses or finishes response handling.
    const definiteResponse: ServerResponse | Http2ServerResponse = value;
});

// @ts-expect-error The callback may resolve to the response object, not just void.
const voidResult: Promise<void> = result;
// @ts-expect-error The callback returns a promise, not a synchronous response.
result.end();
