import adone from "adone";

import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import * as util from "util";
import * as events from "events";
import * as stream from "stream";
import * as url from "url";
import * as net from "net";
import * as http from "http";
import * as https from "https";
import * as child_process from "child_process";
import * as os from "os";
import * as cluster from "cluster";
import * as repl from "repl";
import * as punycode from "punycode";
import * as readline from "readline";
import * as string_decoder from "string_decoder";
import * as querystring from "querystring";
import * as crypto from "crypto";
import * as vm from "vm";
import * as v8 from "v8";
import * as domain from "domain";
import * as tty from "tty";
import * as buffer from "buffer";
import * as constants from "constants";
import * as zlib from "zlib";
import * as tls from "tls";
import * as console from "console";
import * as dns from "dns";
import * as timers from "timers";
import * as dgram from "dgram";

const { std } = adone;

namespace stdTests {
    namespace assert {
        std.assert(true);
    }

    namespace fs {
        std.fs.readFileSync("test").length;
    }

    namespace path {
        std.path.join("a", "b").charAt(0);
    }

    namespace util {
        std.util.format("hello").charAt(0);
    }

    namespace events {
        new std.events.EventEmitter().on("event", () => {});
    }

    namespace steam {
        new std.stream.PassThrough().resume();
    }

    namespace url {
        std.url.parse("https://adone.io").hostname;
    }

    namespace net {
        std.net.connect(31337).write("hello");
    }

    namespace http {
        std.http.get("http://localhost").end();
    }

    namespace https {
        std.https.get("https://adone.io").end();
    }

    namespace child_process {
        std.child_process.fork(__filename, [], { stdio: ["ipc"] }).send("hello");
    }

    namespace os {
        std.os.tmpdir().charAt(0);
    }

    namespace cluster {
        std.cluster.fork().kill();
    }

    namespace repl {
        std.repl.start().close();
    }

    namespace punycode {
        std.punycode.decode("ads").charAt(0);
    }

    namespace readline {
        std.readline.clearLine(process.stdout, 1);
    }

    namespace string_decoder {
        new std.string_decoder.StringDecoder().end().charAt(0);
    }

    namespace querystring {
        std.querystring.escape("hello").charAt(0);
    }

    namespace crypto {
        std.crypto.createHash("sha1").update("hello").digest("hex");
    }

    namespace vm {
        std.vm.runInContext("a + 2", std.vm.createContext({ a: 1 }));
    }

    namespace v8 {
        std.v8.getHeapStatistics().heap_size_limit + 2;
    }

    namespace domain {
        std.domain.create().members;
    }

    namespace tty {
        std.tty.isatty(1) === true;
    }

    namespace buffer {
        std.buffer.Buffer.alloc(10);
    }

    namespace constants {
        std.constants.EACCES + 2;
    }

    namespace zlib {
        std.zlib.createDeflate().write("ttt");
    }

    namespace tls {
        std.tls.connect({}).end();
    }

    namespace console {
        std.console.trace("message");
    }

    namespace dns {
        std.dns.resolve4("adone.io", (err, data) => {});
    }

    namespace timers {
        std.timers.setTimeout(() => {}, 2000).unref();
    }

    namespace dgram {
        std.dgram.createSocket("udp4").bind(31337);
    }
}
