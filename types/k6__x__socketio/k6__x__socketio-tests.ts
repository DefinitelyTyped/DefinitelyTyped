import { io, type Socket, type SocketIOOptions } from "k6/x/socketio";

const opts: SocketIOOptions = {
    path: "/socket.io/",
    namespace: "/chat",
    auth: { token: "abc" },
    query: { a: 1 },
    params: {
        headers: { Authorization: "Bearer token" },
        compression: "deflate",
        tags: { name: "socketio" },
    },
};

io("http://localhost:4000", opts, (socket: Socket) => {
    socket.on("connect", () => {});
    socket.on("hello", (data) => {
        const _x: any = data;
    });

    socket.emit("hello", { payload: "hi from k6" });
    socket.send({ msg: "message" });

    socket.close();
});

// also works without options/handler
io("wss://example.com");
