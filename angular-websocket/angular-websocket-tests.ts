/// <reference path="angular-websocket.d.ts" />

let dummySocket: ng.websocket.IWebSocket;
let dummyPromise: ng.IPromise<void>;

let provider: ng.websocket.IWebSocketProvider = (url: string) => {
    return dummySocket;
}

let socket = provider("wss://localhost");

socket.onOpen((event) => {})
      .onClose((event) => {})
      .onError((event) => {})
      .onMessage((event) => {});

socket.onMessage((event) => {}, { filter: /Some Filter/ })
      .onMessage((event) => {}, { filter: 'Some Filter' })
      .onMessage((event) => {}, { filter: 'Some Filter', autoApply: true })
      .onMessage((event) => {}, { autoApply: false });

socket.close(true);
socket.close();

socket.send("Some great data here!").finally(() => {});
socket.send({ list: [1, 2, 3, 4] });

socket.socket.send("data");
socket.socket.close();
socket.socket.close(1);
socket.socket.close(1, "reason");

socket.sendQueue.push({ message: "msg", defered: dummyPromise });

socket.onOpenCallbacks.push((event: Event) => {});
socket.onCloseCallbacks.push((event: CloseEvent) => {});
socket.onErrorCallbacks.push((event: Event) => {});
socket.onMessageCallbacks.push({ fn: (event: MessageEvent) => {}, pattern: 'Some Filter', autoApply: true });
socket.onMessageCallbacks.push({ fn: (event: MessageEvent) => {}, pattern: /Some Filter/, autoApply: true });
socket.onMessageCallbacks.push({ fn: (event: MessageEvent) => {}, pattern: undefined, autoApply: true });

socket.readyState = 0;

socket.initialTimeout = 10;

socket.maxTimeout = 5000;

