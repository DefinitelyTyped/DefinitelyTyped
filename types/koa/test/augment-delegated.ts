import Koa = require("koa");

declare module "koa" {
    interface DefaultContextDelegatedRequest {
        requestId: string;
    }

    interface DefaultContextDelegatedResponse {
        sendCustom(payload: unknown): void;
    }
}

const app = new Koa();

app.use((ctx, next) => {
    // Augmented members are visible on ctx (delegated through BaseContext).
    ctx.requestId; // $ExpectType string
    ctx.sendCustom({ ok: true });

    // Augmented members are visible on request/response as well.
    ctx.request.requestId; // $ExpectType string
    ctx.response.sendCustom("hello");

    // Original delegated members still exist — augmentation must not erase them.
    ctx.redirect("/login");
    ctx.attachment("file.txt");
    ctx.header; // $ExpectType IncomingHttpHeaders
    ctx.method; // $ExpectType string

    return next();
});
