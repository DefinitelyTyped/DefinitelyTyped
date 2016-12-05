
import JsonSocket = require("json-socket");
import {Socket} from "net";

JsonSocket.sendSingleMessage(42, "localhost", {foo: "bar"}, (err: Error) => {});
JsonSocket.sendSingleMessageAndReceive(42, "localhost", {foo: "bar"}, (err: Error, message: any) => {});

let jsonSocket = new JsonSocket(new Socket());
jsonSocket.sendMessage({foo: "bar"}, (err: Error) => {});
jsonSocket.sendEndMessage({foo: "bar"}, (err: Error) => {});
jsonSocket.sendError(new Error("foo"), (err: Error) => {});
jsonSocket.sendEndError(new Error("foo"), (err: Error) => {});
