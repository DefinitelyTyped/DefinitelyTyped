import ReconnectingWebSocket, { Options } from "reconnectingwebsocket";

const options: Options = {
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

ws1.onclose = (event: any) => {
};

ws2.onconnecting = (event: any) => {
};

ws3.onerror = (event: any) => {
};

ws1.onmessage = (event: any) => {
};

ws1.onopen = (event: any) => {
};

ws1.open(true);

ws1.refresh();

ws1.send({});

ws1.close();
