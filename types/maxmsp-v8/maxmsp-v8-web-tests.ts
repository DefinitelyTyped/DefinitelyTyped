import http = require("http");
import { IOBuffer } from "buffer";
const net = require("net");
const dgram = require("dgram");

console.log("value is", 42);
const id: number = setTimeout((name: string) => post("hello", name, "\n"), 250, "world");
clearTimeout(id);
queueMicrotask(() => {});
setImmediate(() => {});

(async () => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 1000);
    const response = await fetch("https://example.com/", { signal: controller.signal, headers: { a: "b" } });
    post(response.status, response.ok, "\n");
    post(await response.text(), "\n");
    if (response.body) {
        for await (const chunk of response.body) {
            post(chunk.toString("hex"));
        }
    }
    const req = new Request("https://example.com", { method: "POST", body: new URLSearchParams({ a: "1" }) });
    const fd = new FormData();
    fd.append("f", new Blob(["x"], { type: "text/plain" }), "x.txt");
    const sig = AbortSignal.timeout(100);
    sig.addEventListener("abort", () => {});
})();

const u = new URL("/path?x=1", "https://example.com");
const x: string | null = u.searchParams.get("x");
const bytes = new TextEncoder().encode("hello");
const text: string = new TextDecoder().decode(bytes);
const b2 = IOBuffer.from("68656c6c6f", "hex");
const eq: boolean = bytes.equals(b2);
const sl: IOBuffer = b2.slice(0, 2);
const n: number = b2[0];

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.statusCode = 200;
    res.end("hello http\n");
});
server.listen(8090, "127.0.0.1");
http.get("http://x", res => res.on("data", (c: IOBuffer) => c));

const sock = net.createConnection(7000, "127.0.0.1");
dgram.createSocket("udp4").bind(41234, "127.0.0.1");

const ws = new WebSocket("ws://127.0.0.1:8081", ["chat"]);
ws.onopen = () => ws.send("hello");
ws.onmessage = event => post(typeof event.data === "string" ? event.data : event.data.toString("utf8"));
ws.onerror = event => post(event.error.message, event.error.code);
const wss = new WebSocketServer({ port: 8081, host: "127.0.0.1" });
wss.on("connection", (c: WebSocketConnection) => c.on("message", (e: WebSocketMessageEvent) => c.send(e.data)));

const es = new EventSource("http://127.0.0.1:8093/sse/basic");
es.onmessage = e => post(e.data);

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.responseType = "json";
xhr.onreadystatechange = function() {
    if (this.readyState == 4) post(this.responseText);
};
xhr.onprogress = function(ev) {
    post(ev.loaded, ev.total);
};
xhr.send();
const h = new Headers({ a: "b" });
Array.from(h).forEach(([k, v]) => post(k, v));
// @ts-expect-error Headers.forEach is documented but missing in Max 9.2.0
h.forEach(() => {});

// IOBuffer.subarray is an IOBuffer view
const view: IOBuffer = IOBuffer.from([1, 2, 3]).subarray(0, 2);

// IOBuffer is also available as a global
const globalBuf: IOBuffer = IOBuffer.from("abc");
// $ExpectType [string, string][]
Array.from(new URLSearchParams("a=1&b=2"));
