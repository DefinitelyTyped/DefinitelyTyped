import * as Boom from "@hapi/boom";
import * as Hapi from "@hapi/hapi";
import * as Toys from "@hapipal/toys";
import { EventEmitter } from "events";
import { Stream } from "stream";

(async () => {
    const server = new Hapi.Server({ port: 3000 });

    // tests Toys.noop
    await server.register(Toys.noop);

    // test Toys.auth.strategy
    Toys.auth.strategy(server, "simple-bearer", async (request, h) => {
        const token = (request.headers.authorization || "").replace("Bearer ", "");

        if (!token) {
            throw Boom.unauthorized(null, "Bearer");
        }

        return h.authenticated({
            credentials: { auth: true },
            artifacts: { token },
        });
    });

    // tests Toys.withRouteDefaults
    const defaultToGet = Toys.withRouteDefaults({ method: "get" });
    server.route(
        defaultToGet([
            // this route is depended on by Toys.options tests
            {
                path: "/",
                handler: () => "I was gotten",
            },
            {
                method: "post",
                path: "/",
                handler: () => "I was posted",
            },
        ]),
    );

    // tests Toys.pre
    server.route({
        method: "get",
        path: "/user/{id}",
        options: {
            pre: Toys.pre([
                {
                    user: async ({ params }) => ({ userId: params.id }),
                },
                ({ pre }) => pre.user.userId,
            ]),
            handler: ({ pre }) => ({
                ...pre.user,
            }),
        },
    });

    // tests Toys.ext
    server.route({
        method: "get",
        path: "/",
        options: {
            handler: () => {
                return { ok: true };
            },
            ext: {
                onPostAuth: Toys.ext((request, h) => {
                    if (!request.headers["special-header"]) {
                        throw Boom.unauthorized();
                    }

                    return h.continue;
                }),
            },
        },
    });

    // tests Toys[EXT_TYPE]
    const genericExtHandler = (request: Hapi.Request, h: Hapi.ResponseToolkit) => h.continue;
    server.ext([
        Toys.onRequest(genericExtHandler),
        Toys.onPreAuth(genericExtHandler),
        Toys.onCredentials(genericExtHandler),
        Toys.onPostAuth(genericExtHandler),
        Toys.onPreHandler(genericExtHandler),
        Toys.onPostHandler(genericExtHandler),
        Toys.onPreResponse(genericExtHandler),
        Toys.onPostResponse(genericExtHandler),
    ]);

    // tests Toys.reacher
    const simpleReacher = Toys.reacher("a.b.c");
    const simpleReachedValue: number = simpleReacher({
        a: {
            b: {
                c: 1,
            },
        },
    });

    const reacherWithOptions = Toys.reacher(["a", 1], {
        default: "default",
        strict: true,
    });
    const reacherWithOptionsValue: string = reacherWithOptions({
        a: [
            "test",
        ],
    });
    const reacherWithOptionsDefault: string = reacherWithOptions();

    // tests Toys.transformer
    // $ExpectType PerformTransform
    const transformAddress = Toys.transformer({
        street1: "address.street_one",
        street2: "address.street_two",
        city: "address.city",
        state: "address.state.code",
        country: "address.country.code",
    });

    // $ExpectType object
    transformAddress({
        address: {
            street_one: "one",
            street_two: "two",
            city: "city",
            state: {
                code: "NY",
            },
            country: {
                code: "USA",
            },
        },
    });

    const emitter = new EventEmitter();
    emitter.emit("test", "singleValue");
    // $ExpectType any
    await Toys.event(emitter, "test");
    emitter.emit("test", "valueOne", "valueTwo");
    // $ExpectType any
    await Toys.event(emitter, "test", {
        multiple: true,
        error: false,
    });

    // tests Toys.stream
    const readableStream = new Stream.Readable();
    // $ExpectType void
    await Toys.stream(readableStream);

    const writeableStream = new Stream.Writable();
    // $ExpectType void
    await Toys.stream(writeableStream);

    const duplexStream = new Stream.Duplex();
    // $ExpectType void
    await Toys.stream(duplexStream);

    // $ExpectType void
    await Toys.stream(readableStream, {
        cleanup: true,
        readable: false,
        writable: false,
        error: true,
    });

    // tests Toys.options
    // $ExpectType object
    Toys.options(server);
    const response = await server.inject({
        method: "get",
        url: "/",
    });
    // $ExpectType object
    Toys.options(response.request);

    // tests Toys.header
    // $ExpectType void
    Toys.header(response.request.response, "x-my-header", "has-this-value", {
        append: true,
        separator: ":",
        override: false,
        duplicate: true,
    });
    // $ExpectType void
    Toys.header(response.request.response, "x-my-other-header", "has-this-other-value");

    // tests Toys.getHeaders
    // $ExpectType { [header: string]: string; }
    Toys.getHeaders(response.request.response);

    // tests Toys.getCode
    // $ExpectType number
    Toys.getCode(response.request.response);

    // tests Toys.rootRealm
    // $ExpectType ServerRealm
    Toys.rootRealm(response.request.route.realm);

    // tests Toys.state
    // $ExpectType object
    Toys.state(response.request.route.realm, "my-plugin");

    // tests Toys.rootState
    // $ExpectType object
    Toys.rootState(response.request.route.realm, "my-plugin");

    // tests Toys.forEachAncestorRealm
    // $ExpectType void
    Toys.forEachAncestorRealm(response.request.route.realm, (realm) => console.log(realm));

    // tests Toys.asyncStorage
    const multiplyBy = async (x: number) => {
        return x * (Toys.asyncStorage("y") || 0);
    };

    // $ExpectType number
    await Toys.withAsyncStorage<number>("y", 3, async () => {
        return multiplyBy(4);
    });

    // tests Toys.asyncStorageInternals
    // $ExpectType Map<string, typeof AsyncLocalStorage>
    Toys.asyncStorageInternals();
})();
