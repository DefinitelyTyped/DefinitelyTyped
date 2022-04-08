import * as ng from 'angular';

(promise: angular.IPromise<void>, scope: ng.IScope, provider: ng.websocket.IWebSocketProvider) => {
    const socket = provider("wss://localhost");
    const socketWithProtocols = provider("wss://localhost", ["protocol-a", "protocol-b"]);

    const socketWithOptions = provider("wss://localhost", {
        scope,
        rootScopeFailOver: true,
        useApplyAsync: true,
        initialTimeout: 100,
        maxTimeout: 300000,
        reconnectIfNotNormalClose: true,
        binaryType: "blob"
    });

    const socketWithProtocolAndOptions = provider("wss://localhost", "protocol", {
        scope,
        rootScopeFailOver: true,
        useApplyAsync: true,
        initialTimeout: 100,
        maxTimeout: 300000,
        reconnectIfNotNormalClose: true,
        binaryType: "blob"
    });

    socket.onOpen((event: Event) => {})
        .onClose((event: Event) => {})
        .onError((event: Event) => {})
        .onMessage((event: Event) => {});

    socket.onMessage((event: Event) => {}, { filter: /Some Filter/ })
        .onMessage((event: Event) => {}, { filter: 'Some Filter' })
        .onMessage((event: Event) => {}, { filter: 'Some Filter', autoApply: true })
        .onMessage((event: Event) => {}, { autoApply: false });

    socket.close(true);
    socket.close();

    socket.send("Some great data here!").finally(() => {});
    socket.send({ list: [1, 2, 3, 4] });

    socket.socket.send("data");
    socket.socket.close();
    socket.socket.close(1);
    socket.socket.close(1, "reason");

    socket.sendQueue.push({ message: "msg", defered: promise });

    socket.onOpenCallbacks.push((event: Event) => {});
    socket.onCloseCallbacks.push((event: CloseEvent) => {});
    socket.onErrorCallbacks.push((event: Event) => {});
    socket.onMessageCallbacks.push({ fn: (event: MessageEvent) => {}, pattern: 'Some Filter', autoApply: true });
    socket.onMessageCallbacks.push({ fn: (event: MessageEvent) => {}, pattern: /Some Filter/, autoApply: true });
    socket.onMessageCallbacks.push({ fn: (event: MessageEvent) => {}, autoApply: true });

    socket.readyState = 0;

    socket.initialTimeout = 10;

    socket.maxTimeout = 5000;
};
