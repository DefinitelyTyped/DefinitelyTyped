

import * as opn from "opn";

var errorCallback: (err: Error) => void;

opn("foo");
opn("foo", errorCallback);

opn("foo", { app: "bar" });
opn("foo", { app: ["bar", "--arg"] });
opn("foo", { app: "bar", wait: false });
opn("foo", { app: ["bar", "--arg"] , wait: false});

opn("foo", { app: "bar" }, errorCallback);
opn("foo", { app: ["bar", "--arg"] }, errorCallback);
opn("foo", { app: "bar", wait: false }, errorCallback);
opn("foo", { app: ["bar", "--arg"], wait: false }, errorCallback);
