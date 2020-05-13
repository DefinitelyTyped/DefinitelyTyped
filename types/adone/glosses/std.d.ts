import fs = require("fs");
import path = require("path");
import util = require("util");
import events = require("events");
import stream = require("stream");
import url = require("url");
import net = require("net");
import http = require("http");
import http2 = require("http2");
import https = require("https");
import child_process = require("child_process");
import os = require("os");
import cluster = require("cluster");
import repl = require("repl");
import punycode = require("punycode");
import readline = require("readline");
import string_decoder = require("string_decoder");
import querystring = require("querystring");
import crypto = require("crypto");
import vm = require("vm");
import v8 = require("v8");
import domain = require("domain");
import module = require("module");
import tty = require("tty");
import buffer = require("buffer");
import constants = require("constants");
import zlib = require("zlib");
import tls = require("tls");
import console = require("console");
import dns = require("dns");
import timers = require("timers");
import dgram = require("dgram");
import perf_hooks = require("perf_hooks");

declare const assert: any;

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
    http2,
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
    module,
    tty,
    buffer,
    constants,
    zlib,
    tls,
    console,
    dns,
    timers,
    dgram,
    perf_hooks
};

export as namespace nodestd;
