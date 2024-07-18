import { Request, Server } from "@hapi/hapi";
import * as yar from "@hapi/yar";

async function boot() {
    const server = new Server();
    await server.register({
        plugin: yar,
        options: {
            cookieOptions: {
                password: "test",
                isSecure: true,
            },
            cache: {
                cache: "test",
                expiresIn: 123141243,
            },
        },
    });

    server.route({
        path: "/test",
        method: "get",
        async handler(request: Request, h) {
            const example = request.yar.get("example");

            request.yar.flash("info", "Hello world.");
            const all_flashes = request.yar.flash();
            const info_flashes = request.yar.flash("info");

            await request.yar.commit(h);

            return {
                id: request.yar.id,
                key: example.key,
                all_flashes,
                info_flashes,
            };
        },
    });
}
