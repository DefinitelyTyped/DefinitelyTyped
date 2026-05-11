import AGRequest = require("ag-request");

declare const socket: AGRequest.Socket;
const request = new AGRequest(socket, 0, "procedure", { foo: 5 });

request.end({ foo: 5 });
request.error(new Error("something failed"));
