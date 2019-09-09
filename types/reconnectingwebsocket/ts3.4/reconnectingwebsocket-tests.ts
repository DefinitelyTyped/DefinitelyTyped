import ReconnectingWebSocket = require("reconnectingwebsocket");

const options: ReconnectingWebSocket.Options = {
    automaticOpen: false,
    binaryType: "blob",
    debug: false,
    maxReconnectAttempts: 1,
    maxReconnectInterval: 1000,
    reconnectDecay: 1.5,
    reconnectInterval: 1000,
    timeoutInterval: 1000
};

const ws1: ReconnectingWebSocket = new ReconnectingWebSocket("url", ["protocol"], options);
const ws2: ReconnectingWebSocket = new ReconnectingWebSocket("url", ["protocol"]);
const ws3: ReconnectingWebSocket = new ReconnectingWebSocket("url");

ReconnectingWebSocket.debugAll = true;
ReconnectingWebSocket.CONNECTING = WebSocket.CONNECTING;
ReconnectingWebSocket.OPEN = WebSocket.OPEN;
ReconnectingWebSocket.CLOSING = WebSocket.CLOSING;
ReconnectingWebSocket.CLOSED = WebSocket.CLOSED;

const closeListener = (event: CustomEvent<undefined>) => {
    console.log(event.type);
};
ws1.onclose = closeListener;
ws2.addEventListener('close', closeListener);
ws2.removeEventListener('close', closeListener);

ws2.onconnecting = (event) => {
    console.log(event.type, 'was clean?', event.wasClean);
};

ws3.onerror = (event) => {
    console.log(event.type);
};

ws1.onmessage = (event: any) => {
    console.log(event.type, event.data);
};

ws1.onopen = (event) => {
    console.log(event.type, 'is reconnect?', event.isReconnect);
};

ws1.open(true);

ws1.debug = true;

ws1.refresh();

ws1.send(JSON.stringify({}));

ws1.close();
