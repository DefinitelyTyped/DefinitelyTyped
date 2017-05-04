import { Socket } from "net";
import RawIPC = require("node-ipc");
let ipc = new RawIPC.IPC();
ipc = RawIPC;
ipc.config.appspace = "./x";
ipc.config.encoding = "base64";
ipc.config.id = "id1";
ipc.config.interfaces = {
    localAddress: true,
    family: true,
    hints: false,
    localPort: true,
    lookup: false,
};
ipc.config.logDepth = 6;
ipc.config.logInColor = true;
ipc.config.maxConnections = 200;
ipc.config.maxRetries = false;
ipc.config.networkHost = "127.0.0.1";
ipc.config.networkPort = 8000;
ipc.config.rawBuffer = true;
ipc.config.retry = 1000;
ipc.config.silent = true;
ipc.config.socketRoot = "";
ipc.config.stopRetrying = false;
ipc.config.sync = true;
ipc.config.tls = {
    rejectUnauthorized: false,
    public: "",
    private: "",
};
ipc.connectTo("world");
ipc.connectTo("world", () => { });
ipc.connectTo("id1", "path1", () => { });
ipc.connectToNet("world");
ipc.connectToNet("world", () => { });
ipc.connectToNet("world", "myapp.com", 3435);
ipc.connectToNet("world", "myapp.com", 3435, () => { });
ipc.connectToNet("world", 3435, () => { });
ipc.disconnect("id");
ipc.serve();
ipc.serve(null);
ipc.serve("path", () => { });
ipc.serve(() => { });
ipc.serveNet();
ipc.serveNet("udp4");
ipc.serveNet(() => { });
ipc.serveNet("udp4", () => { });
ipc.serveNet(3435);
ipc.serveNet("MyMostAwesomeApp.com", 3435, () => { });
ipc.serveNet("MyMostAwesomeApp.com", 3435, "udp4", () => { });
ipc.of.world.on("error", (err: any) => { });
ipc.of.world.on("connect", () => { });
ipc.of.world.on("disconnect", () => { });
ipc.of.world.on("data", (buf: Buffer) => { buf.byteLength; });
ipc.of.world.on("socket.disconnected", (socket: Socket, id: string) => { id.toLowerCase(); });
ipc.of.world.on("message", (data: any, data2: any) => { });
ipc.server.emit("event", [1, 2, 3]);
const myBuffer = new Buffer(6).fill(0);
declare const socket: Socket;
ipc.server.emit(socket, myBuffer);
ipc.server.emit([10, 20, 30]);
ipc.server.emit({ address: 'localhost', port: 8000 }, "message", { id: ipc.config.id, message: 'Goodbye' });
