import express = require("express");
import SSE = require("express-sse");

const app = express();
let sse = new SSE();
sse = new SSE(["array", "containing", "initial", "content", "(optional)"], {
    isSerialized: false,
    initialEvent: "optional initial event name",
});

app.get("/stream", sse.init);

sse.send({ username: "test" });
sse.send({ username: "test" }, "userconnect");
sse.send({ username: "test" }, "usermessage", 1);
sse.updateInit(["array", "containing", "new", "content"]);
sse.serialize(["array", "to", "be", "sent", "as", "serialized", "events"]);
