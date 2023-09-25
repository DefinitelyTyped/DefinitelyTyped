import { CompressionAlgorithm, EventName, WebSocket } from "k6/experimental/websockets";
import { CookieJar } from "k6/http";

//
// WebSocket constructor
//

// @ts-expect-error
new WebSocket();

new WebSocket("wss://test-api.k6.io/ws/crocochat/1", null, {});
new WebSocket("wss://test-api.k6.io/ws/crocochat/1", null, {
    headers: { "User-Agent": "ITS" },
    tags: { user: "zbt" },
});
new WebSocket("wss://test-api.k6.io/ws/crocochat/1", null, {
    compression: CompressionAlgorithm.Deflate,
});
new WebSocket("wss://test-api.k6.io/ws/crocochat/1", null, {
    jar: new CookieJar(),
});
new WebSocket("wss://test-api.k6.io/ws/crocochat/1", null, {
    // @ts-expect-error
    lorem: "ipsum",
});
new WebSocket("wss://test-api.k6.io/ws/crocochat/1", null, {
    // @ts-expect-error
    compression: "lorem",
});
new WebSocket("wss://test-api.k6.io/ws/crocochat/1", null, {
    // @ts-expect-error
    compression: null,
});

const ws = new WebSocket("wss://test-api.k6.io/ws/crocochat/1");

//
// WebSocket.send
//

// @ts-expect-error
ws.send();
// @ts-expect-error
ws.send(5);
ws.send("super secret information"); // $ExpectType void
// @ts-expect-error
ws.send("super secret information", 5);

//
// WebSocket.addEventListener
//

// @ts-expect-error
ws.addEventListener();
// @ts-expect-error
ws.addEventListener("open");
// @ts-expect-error
ws.addEventListener("open", 5);
ws.addEventListener(EventName.Open, () => {}); // $ExpectType void

//
// WebSocket.close
//

ws.close(); // $ExpectType void
// @ts-expect-error
ws.close("not-a-close-code");
ws.close(7); // $ExpectType void
// @ts-expect-error
ws.close(7, 5);

//
// WebSocket.ping
//

ws.ping(); // $ExpectType void
// @ts-expect-error
ws.ping(5);

//
// WebSocket.onmessage
//

// @ts-expect-error
ws.onmessage = "lorem";
ws.onmessage = () => {};
ws.onmessage = event => {};

//
// WebSocket.onopen
//

// @ts-expect-error
ws.onopen = "lorem";
ws.onopen = () => {};

//
// WebSocket.onclose
//

// @ts-expect-error
ws.onclose = "lorem";
ws.onclose = () => {};

//
// WebSocket.onerror
//

// @ts-expect-error
ws.onerror = "lorem";
ws.onerror = () => {};
ws.onerror = event => {};

//
// WebSocket.onping
//

// @ts-expect-error
ws.onping = "lorem";
ws.onping = () => {};

//
// WebSocket.onpong
//

// @ts-expect-error
ws.onpong = "lorem";
ws.onpong = () => {};
