import assert = require("assert");
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

export {
    assert,
    fs,
    path,
    util,
    events,
    stream,
    url,
    net,
    http,
    https,
    child_process,
    os,
    cluster,
    repl,
    punycode,
    readline,
    string_decoder,
    querystring,
    crypto,
    vm,
    v8,
    domain,
    tty,
    buffer,
    constants,
    zlib,
    tls,
    console,
    dns,
    timers,
    dgram,
};

export as namespace nodestd;
