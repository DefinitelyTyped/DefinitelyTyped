import * as inspector from "node:inspector";
import { Session as promiseSession } from "node:inspector/promises";

const b: inspector.Console.ConsoleMessage = { source: "test", text: "test", level: "error" };
// $ExpectType Disposable
inspector.open();
inspector.open(0);
inspector.open(0, "localhost");
inspector.open(0, "localhost", true);
// $ExpectType void
inspector.close();
// $ExpectType string | undefined
inspector.url();

const session = new inspector.Session();
session.connect();
session.disconnect();

// Unknown post method
session.post("A.b", { key: "value" }, (err, params) => {
    // $ExpectType Error | null
    err;
    // $ExpectType object | undefined
    params;
});
session.post("A.b", (err, params) => {
    // $ExpectType Error | null
    err;
    // $ExpectType object | undefined
    params;
});
session.post("A.b");
// Known post method
session.post("Runtime.evaluate", { expression: "2 + 2" }, (err, params) => {
    // $ExpectType Error | null
    err;
    // $ExpectType EvaluateReturnType
    params;
});
session.post("Runtime.evaluate", (err, params) => {
    // $ExpectType Error | null
    err;
    // $ExpectType EvaluateReturnType
    params;
});
session.post("Runtime.evaluate");

// General event
session.on("inspectorNotification", message => {
    // $ExpectType InspectorNotification<object>
    message;
});
// Known events
session.on("Debugger.paused", (message) => {
    // $ExpectType string
    message.method;
    // $ExpectType PausedEventDataType
    message.params;
});
session.on("Debugger.resumed", () => {});

// $ExpectType InspectorConsole
inspector.console;

// $ExpectType Promise<EvaluateReturnType>
new promiseSession().post("Runtime.evaluate", { expression: "2 + 2" });
