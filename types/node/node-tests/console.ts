import * as console from "node:console";
import { createWriteStream } from "node:fs";

{
    {
        let _c: Console = globalThis.console;
        _c = console;
    }
    {
        const writeStream = createWriteStream("./index.d.ts");
        let consoleInstance: Console = new console.Console(writeStream);

        consoleInstance = new console.Console(writeStream, writeStream);
        consoleInstance = new console.Console(writeStream, writeStream, true);
        consoleInstance = new console.Console({
            stdout: writeStream,
            stderr: writeStream,
            colorMode: "auto",
            ignoreErrors: true,
            groupIndentation: 2,
            inspectOptions: { depth: 1 },
        });
        consoleInstance = new console.Console({
            stdout: writeStream,
            colorMode: false,
            inspectOptions: new Map([[writeStream, { depth: 1 }]]),
        });
        consoleInstance = new console.Console({
            stdout: writeStream,
        });
    }
    {
        console.assert("value");
        console.assert("value", "message");
        console.assert("value", "message", "foo", "bar");
        console.clear();
        console.count();
        console.count("label");
        console.countReset();
        console.countReset("label");
        console.debug();
        console.debug("message");
        console.debug("message", "foo", "bar");
        console.dir("obj");
        console.dir("obj", { depth: 1 });
        console.error();
        console.error("message");
        console.error("message", "foo", "bar");
        console.group();
        console.group("label");
        console.group("label1", "label2");
        console.groupCollapsed();
        console.groupEnd();
        console.info();
        console.info("message");
        console.info("message", "foo", "bar");
        console.log();
        console.log("message");
        console.log("message", "foo", "bar");
        console.table({ foo: "bar" });
        console.table([{ foo: "bar" }]);
        console.table([{ foo: "bar" }], ["foo"]);
        console.time();
        console.time("label");
        console.timeEnd();
        console.timeEnd("label");
        console.timeLog();
        console.timeLog("label");
        console.timeLog("label", "foo", "bar");
        console.trace();
        console.trace("message");
        console.trace("message", "foo", "bar");
        console.warn();
        console.warn("message");
        console.warn("message", "foo", "bar");

        // --- Inspector mode only ---
        console.profile();
        console.profile("label");
        console.profileEnd();
        console.profileEnd("label");
        console.timeStamp();
        console.timeStamp("label");
    }
}
