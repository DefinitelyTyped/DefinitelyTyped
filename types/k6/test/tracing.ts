import tracing from "k6/experimental/tracing";
import http, { RefinedResponse } from "k6/http";

const address = "http://example.com";
const addressFromHttpURL = http.url`http://example.com/posts/${5}/${"10"}/`;

let responseDefault: RefinedResponse<undefined>;
let responseDefaultPromise: Promise<RefinedResponse<undefined>>;
let responseBinary: RefinedResponse<"binary">;
let responseNone: RefinedResponse<"none">;
let responseText: RefinedResponse<"text">;

//
// instrumentHTTP
//
// @ts-expect-error
tracing.instrumentHTTP();

//
// Client constructor
//
// @ts-expect-error
const client = new tracing.Client();

// Client.del
// @ts-expect-error
client.del();
// @ts-expect-error
client.del(5);
client.del(addressFromHttpURL);
responseDefault = client.del(address);
// @ts-expect-error
client.del(address, 5);
responseDefault = client.del(address, "skadoosh");
responseDefault = client.del(address, {});
responseDefault = client.del(address, { item: "576" });
// @ts-expect-error
client.del(address, {}, 5);
responseBinary = client.del(address, null, { responseType: "binary" });
// @ts-expect-error
client.del(address, {}, {}, 5);

// Client.head
// @ts-expect-error
client.head();
// @ts-expect-error
client.head(5);
client.head(addressFromHttpURL);
responseDefault = client.head(address);
// @ts-expect-error
client.head(address, 5);
responseDefault = client.head(address, {});
responseBinary = client.head(address, { responseType: "binary" });
responseNone = client.head(address, { responseType: "none" });
responseText = client.head(address, { responseType: "text" });
// @ts-expect-error
client.head(address, {}, 5);

// Client.get
// @ts-expect-error
client.get();
// @ts-expect-error
client.get(5);
client.get(addressFromHttpURL);
responseDefault = client.get(address);
// @ts-expect-error
client.get(address, 5);
responseDefault = client.get(address, {});
responseBinary = client.get(address, { responseType: "binary" });
responseNone = client.get(address, { responseType: "none" });
responseText = client.get(address, { responseType: "text" });
// @ts-expect-error
client.get(address, {}, 5);

// Client.options
// @ts-expect-error
client.options();
// @ts-expect-error
client.options(5);
client.options(addressFromHttpURL);
responseDefault = client.options(address);
// @ts-expect-error
client.options(address, 5);
responseDefault = client.options(address, "choices choices");
responseDefault = client.options(address, {});
responseDefault = client.options(address, { theme: "forest" });
responseDefault = client.options(address, new ArrayBuffer(8));
// @ts-expect-error
client.options(address, {}, 5);
responseNone = client.options(address, {}, { responseType: "none" });
// @ts-expect-error
client.options(address, {}, {}, 5);

// Client.patch
// @ts-expect-error
client.patch();
// @ts-expect-error
client.patch(5);
client.patch(addressFromHttpURL);
responseDefault = client.patch(address);
// @ts-expect-error
client.patch(address, 5);
responseDefault = client.patch(address, "a life of contrasts and patchwork");
responseDefault = client.patch(address, {});
responseDefault = client.patch(address, { weaponOfChoice: "pen" });
responseDefault = client.patch(address, new ArrayBuffer(8));
// @ts-expect-error
client.patch(address, {}, 5);
responseBinary = client.patch(address, {}, { responseType: "binary" });
// @ts-expect-error
client.patch(address, {}, {}, 5);

// Client.post
// @ts-expect-error
client.post();
// @ts-expect-error
client.post(5);
client.post(addressFromHttpURL);
responseDefault = client.post(address);
// @ts-expect-error
client.post(address, 5);
responseDefault = client.post(address, "hello in cyberspace");
responseDefault = client.post(address, {});
responseDefault = client.post(address, { query: "kittens" });
responseDefault = client.post(address, new ArrayBuffer(8));
// @ts-expect-error
client.post(address, {}, 5);
responseNone = client.post(address, null, { responseType: "none" });
// @ts-expect-error
client.post(address, {}, {}, 5);

// Client.put
// @ts-expect-error
client.put();
// @ts-expect-error
client.put(5);
client.put(addressFromHttpURL);
responseDefault = client.put(address);
// @ts-expect-error
client.put(address, 5);
responseDefault = client.put(address, "cat in box");
responseDefault = client.put(address, {});
responseDefault = client.put(address, { box: "cat" });
responseDefault = client.put(address, new ArrayBuffer(8));
// @ts-expect-error
client.put(address, {}, 5);
responseText = client.put(address, null, { responseType: "text" });
// @ts-expect-error
client.put(address, {}, {}, 5);

// Client.request
// @ts-expect-error
client.request();
// @ts-expect-error
client.request(5);
// @ts-expect-error
client.request("get");
// @ts-expect-error
client.request("get", 5);
client.request("get", addressFromHttpURL);
responseDefault = client.request("get", address);
// @ts-expect-error
client.request("post", address, 5);
responseDefault = client.request("post", address, "welcome to the internet");
responseDefault = client.request("post", address, {});
responseDefault = client.request("post", address, { query: "quokka" });
responseDefault = client.request("post", address, new ArrayBuffer(8));
// @ts-expect-error
client.request("post", address, {}, 5);
responseBinary = client.request("post", address, {}, { responseType: "binary" });
// @ts-expect-error
client.request("post", address, {}, {}, 5);

// Client.asyncRequest
// @ts-expect-error
client.asyncRequest();
// @ts-expect-error
client.asyncRequest(5);
// @ts-expect-error
client.asyncRequest("get");
// @ts-expect-error
client.asyncRequest("get", 5);
client.asyncRequest("get", addressFromHttpURL);
responseDefaultPromise = client.asyncRequest("get", address);
// @ts-expect-error
client.asyncRequest("post", address, 5);
responseDefaultPromise = client.asyncRequest("post", address, "welcome to the internet");
responseDefaultPromise = client.asyncRequest("post", address, {});
responseDefaultPromise = client.asyncRequest("post", address, { query: "quokka" });
responseDefaultPromise = client.asyncRequest("post", address, new ArrayBuffer(8));
// @ts-expect-error
client.asyncRequest("post", address, {}, 5);
// @ts-expect-error
client.asyncRequest("post", address, {}, {}, 5);
