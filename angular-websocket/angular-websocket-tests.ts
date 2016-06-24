/// <reference path="angular-websocket.d.ts" />

let dummySocket: ng.websocket.IWebSocket;

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
