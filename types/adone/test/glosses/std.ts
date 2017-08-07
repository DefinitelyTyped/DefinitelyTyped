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

namespace assertTests {
    std.assert(true);
}

namespace fsTests {
    std.fs.readFileSync("test").length;
}

namespace pathTests {
    std.path.join("a", "b").charAt(0);
}

namespace utilTests {
    std.util.format("hello").charAt(0);
}

namespace eventsTests {
    new std.events.EventEmitter().on("event", () => {});
}

namespace steamTests {
    new std.stream.PassThrough().resume();
}

namespace urlTests {
    std.url.parse("https://adone.io").hostname;
}

namespace netTests {
    std.net.connect(31337).write("hello");
}

namespace httpTests {
    std.http.get("http://localhost").end();
}

namespace httpsTests {
    std.https.get("https://adone.io").end();
}

namespace child_processTests {
    std.child_process.fork(__filename, [], { stdio: ["ipc"] }).send("hello");
}

namespace osTests {
    std.os.tmpdir().charAt(0);
}

namespace clusterTests {
    std.cluster.fork().kill();
}

namespace replTests {
    std.repl.start().close();
}

namespace punycodeTests {
    std.punycode.decode("ads").charAt(0);
}

namespace readlineTests {
    std.readline.clearLine(process.stdout, 1);
}

namespace string_decoderTests {
    new std.string_decoder.StringDecoder().end().charAt(0);
}

namespace querystringTests {
    std.querystring.escape("hello").charAt(0);
}

namespace cryptoTests {
    std.crypto.createHash("sha1").update("hello").digest("hex");
}

namespace vmTests {
    std.vm.runInContext("a + 2", std.vm.createContext({ a: 1 }));
}

namespace v8Tests {
    std.v8.getHeapStatistics().heap_size_limit + 2;
}

namespace domainTests {
    std.domain.create().members;
}

namespace ttyTests {
    std.tty.isatty(1) === true;
}

namespace bufferTests {
    std.buffer.Buffer.alloc(10);
}

namespace constantsTests {
    std.constants.EACCES + 2;
}

namespace zlibTests {
    std.zlib.createDeflate().write("ttt");
}

namespace tlsTests {
    std.tls.connect({}).end();
}

namespace consoleTests {
    std.console.trace("message");
}

namespace dnsTests {
    std.dns.resolve4("adone.io", (err, data) => {});
}

namespace timersTests {
    std.timers.setTimeout(() => {}, 2000).unref();
}

namespace dgramTests {
    std.dgram.createSocket("udp4").bind(31337);
}
