import { start, Recoverable } from "repl";
import { Context } from "vm";

{
    let server = start({
        preview: true,
    });
    let _boolean: boolean;
    const _ctx: Context = {};

    server.setupHistory('hurr/durr', (err, repl) => {
    });

    server = server.addListener("exit", () => { });
    server = server.addListener("reset", () => { });

    _boolean = server.emit("exit", () => { });
    _boolean = server.emit("reset", _ctx);

    server = server.on("exit", () => { });
    server = server.on("reset", () => { });

    server = server.once("exit", () => { });
    server = server.once("reset", () => { });

    server = server.prependListener("exit", () => { });
    server = server.prependListener("reset", () => { });

    server = server.prependOnceListener("exit", () => { });
    server = server.prependOnceListener("reset", () => { });

    server.outputStream.write("test");
    const line = server.inputStream.read();

    server.clearBufferedCommand();
    server.displayPrompt();
    server.displayPrompt(true);
    server.defineCommand("cmd", function(text) {
        // $ExpectType string
        text;
        // $ExpectType REPLServer
        this;
    });
    server.defineCommand("cmd", {
        help: "",
        action(text) {
            // $ExpectType string
            text;
            // $ExpectType REPLServer
            this;
        }
    });

    start({
        eval() {
            // $ExpectType REPLServer
            this;
        },
        writer() {
            // $ExpectType REPLServer
            this;
            return "";
        }
    });

    function test() {
        throw new Recoverable(new Error("test"));
    }

    server.context['key0'] = 1;
    server.context['key1'] = "";
    server.context['key2'] = true;
    server.context['key3'] = [];
    server.context['key4'] = {};
}
