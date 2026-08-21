import Serializer from "@rdfjs/serializer-ntriples";
import { Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";

const stream: Stream = {} as any;

const serializer1 = new Serializer();

const sink: Sink<Stream, EventEmitter> = serializer1;

const eventEmitter1: EventEmitter = serializer1.import(stream);
