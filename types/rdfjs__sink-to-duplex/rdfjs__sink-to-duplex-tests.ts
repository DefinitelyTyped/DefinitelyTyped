import N3Parser from "@rdfjs/parser-n3";
import NTriplesSerializer from "@rdfjs/serializer-ntriples";
import { Duplexify } from "duplexify";
import fs from "fs";
import sinkToDuplex = require("@rdfjs/sink-to-duplex");

const input = fs.createReadStream("test.ttl");
const parser = sinkToDuplex(new N3Parser(), { readableObjectMode: true });
const serializer = sinkToDuplex(new NTriplesSerializer(), { writableObjectMode: true });

input.pipe(parser).pipe(serializer).pipe(process.stdout);

const noOptions: Duplexify = sinkToDuplex(new N3Parser());
