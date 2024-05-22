import { Sink } from "@rdfjs/types";
import { Duplexify } from "duplexify";
import fs from "fs";
import sinkToDuplex = require("@rdfjs/sink-to-duplex");

const sink: Sink<any, any> = <any> {};

const input = fs.createReadStream("test.ttl");
const parser = sinkToDuplex(sink, { readableObjectMode: true });
const serializer = sinkToDuplex(sink, { writableObjectMode: true });

input.pipe(parser).pipe(serializer).pipe(process.stdout);

const noOptions: Duplexify = sinkToDuplex(sink);
