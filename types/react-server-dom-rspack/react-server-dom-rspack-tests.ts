import busboy = require("busboy");
import { Readable, Writable } from "node:stream";
import * as client from "react-server-dom-rspack/client";
import * as browserClient from "react-server-dom-rspack/client.browser";
import * as edgeClient from "react-server-dom-rspack/client.edge";
import * as nodeClient from "react-server-dom-rspack/client.node";
import plugin = require("react-server-dom-rspack/plugin");
import * as browserServer from "react-server-dom-rspack/server.browser";
import * as edgeServer from "react-server-dom-rspack/server.edge";
import * as nodeServer from "react-server-dom-rspack/server.node";
import * as browserStatic from "react-server-dom-rspack/static.browser";
import * as edgeStatic from "react-server-dom-rspack/static.edge";
import * as nodeStatic from "react-server-dom-rspack/static.node";

plugin; // $ExpectType unknown

const browserTemporaryReferences = browserClient.createTemporaryReferenceSet();
browserClient.setServerCallback(async (id, args) => ({ id, args }));
browserClient.setFindSourceMapURLCallback((fileName, environmentName) =>
    fileName.endsWith(".js") ? `/${environmentName}.map` : null
);

const browserAction = browserClient.createServerReference<[string, number], number>("action-id", "default");
browserAction("argument", 1); // $ExpectType Promise<number>
browserClient.registerServerReference(browserAction, "action-id");
browserClient.createFromFetch<{ value: string }>(Promise.resolve(new Response())); // $ExpectType Promise<{ value: string; }>
browserClient.createFromReadableStream<string>(new ReadableStream()); // $ExpectType Promise<string>
browserClient.encodeReply({ value: 1 }, { temporaryReferences: browserTemporaryReferences }); // $ExpectType Promise<string | FormData>

client.createFromFetch<number>(Promise.resolve(new Response())); // $ExpectType Promise<number>

const edgeTemporaryReferences = edgeClient.createTemporaryReferenceSet();
const edgeAction = edgeClient.createServerReference<[number, boolean], string>("edge-action");
edgeAction(1, true); // $ExpectType Promise<string>
edgeClient.registerServerReference(edgeAction, "edge-action", (_id, _args) => ({ method: "POST" }));
// $ExpectType Promise<number>
edgeClient.createFromReadableStream<number>(new ReadableStream(), {
    temporaryReferences: edgeTemporaryReferences,
    nonce: "nonce",
});

// $ExpectType Promise<string>
nodeClient.createFromNodeStream<string>(Readable.from(["flight"]), {
    environmentName: "Server",
});
nodeClient.createFromFetch<number>(Promise.resolve(new Response())); // $ExpectType Promise<number>
client.createFromNodeStream<number>(Readable.from(["flight"])); // $ExpectType Promise<number>

const browserServerTemporaryReferences = browserServer.createTemporaryReferenceSet();
browserServer.renderToReadableStream({ type: "div" }, {
    identifierPrefix: "rsc-",
    temporaryReferences: browserServerTemporaryReferences,
    onError: error => String(error),
});
browserServer.decodeReply<{ id: string }>(new FormData()); // $ExpectType Promise<{ id: string; }>
browserServer.decodeAction<number>(new FormData()); // $ExpectType Promise<() => number> | null
browserServer.decodeFormState(1, new FormData()); // $ExpectType Promise<ReactFormState | null>

const serverFunction = browserServer.registerServerReference(async (value: string) => value.length, "id", "default");
serverFunction("value"); // $ExpectType Promise<number>
serverFunction.$$id; // $ExpectType string

const clientReference = browserServer.registerClientReference({ component: true }, "id", "default");
clientReference.$$async; // $ExpectType boolean
clientReference.component; // $ExpectType boolean

browserServer.setServerActionBoundArgsEncryption({
    encrypt: async (_actionId, ...args) => JSON.stringify(args),
    decrypt: async (_actionId, payload) => JSON.parse(await payload),
});
browserServer.encryptServerActionBoundArgs<string>("action-id", 1); // $ExpectType Promise<string>
browserServer.decryptServerActionBoundArgs("action-id", Promise.resolve("[]")); // $ExpectType Promise<unknown[]>
browserServer.loadServerAction("action-id"); // $ExpectType CallableFunction
browserServer.createServerEntry({ value: 1 }, "route").entryCssFiles; // $ExpectType string[]
browserServer.ensureServerActions([async () => {}]);

// $ExpectType Promise<number>
edgeServer.decodeReplyFromAsyncIterable<number>(
    (async function*() {
        yield ["field", "value"] as [string, string];
    })(),
);

const writable = new Writable({
    write(_chunk, _encoding, callback) {
        callback();
    },
});
nodeServer.renderToPipeableStream({ type: "div" }).pipe(writable); // $ExpectType Writable
nodeServer.renderToReadableStream({ type: "div" }, { signal: new AbortController().signal });
nodeServer.decodeReplyFromBusboy<string>(busboy({ headers: { "content-type": "multipart/form-data" } })); // $ExpectType Promise<string>

browserStatic.prerender({ type: "div" });
edgeStatic.prerender({ type: "div" });
nodeStatic.prerender({ type: "div" });
nodeStatic.prerenderToNodeStream({ type: "div" }); // $ExpectType Promise<StaticResult<Readable>>
