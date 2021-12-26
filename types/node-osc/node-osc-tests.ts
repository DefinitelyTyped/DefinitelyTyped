import { Bundle, Client, ClientSendCallback, Message, Server } from "node-osc";

// Message

const message = new Message("/address");

message.append("testing");

message.append(true);

message.append(123);

// Bundle

const bundleNoTime = new Bundle(["/one", 1], ["/two", 2], ["/three", 3]);

const bundle = new Bundle(10, ["/four", 4]);

bundle.append(["/four", 4]);

bundle.append({
    address: "/test",
    args: [1, 2, 3, "lol", false],
});

bundle.append(bundleNoTime);

// Client

const client = new Client("127.0.0.1", 3333);

const clientSendCallback: ClientSendCallback = err => {
    if (err) {
        // console.log("Error", err);
    }

    client.close();
};

client.send(message);

client.send(message, clientSendCallback);

client.send(message, message, clientSendCallback);

client.send(message, message, message, clientSendCallback);

client.send("/test");

client.send("/test", clientSendCallback);

client.send(["/test", 123, 123], clientSendCallback);

client.send(["/test", 123, 123], ["/test", 123, 123], clientSendCallback);

client.send(["/test", 0, 1, "testing", true], clientSendCallback);

client.send(
    {
        address: "/test",
        args: [1, 2, 3, "lol", false],
    },
    clientSendCallback,
);

client.send(bundle);

// Server

const oscServerBase = new Server(3333, "0.0.0.0");

oscServerBase.on("listening", () => {
    // console.log("Server started");
});

oscServerBase.close(() => {
    // console.log("Server stopped");
});

const oscServer = new Server(3333, "0.0.0.0", () => {
    // console.log("Server started");
});

oscServer.on("bundle", bundle => {
    bundle.elements.forEach(element => {
        // console.log(`Timestamp: ${bundle.timetag}`);
        // console.log(`Message: ${element}`);
    });
});

oscServer.on("error", err => {
    // console.error("Error on OSC server", err);
});

oscServer.on("message", msg => {
    // console.log(`Message: ${msg}`);
});

oscServer.on("/test", msg => {
    // console.log(`Message: ${msg}`);
});
