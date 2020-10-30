
import stream = require("stream");
import service = require("windows-service");

service.add("MyService");
service.add("MyService", {programPath: "./service.js"});

var s: stream.Writable;
var t: stream.Writable;

service.run(s, (): void => {
    service.stop(0);
});

service.run(s, t, (): void => {
    service.stop(0);
});

service.remove("MyService");

