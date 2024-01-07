import Serializer from "@rdfjs/serializer-rdfjs";
import { EventEmitter } from "events";
import { DatasetCore, Quad, Stream } from "@rdfjs/types";

const dataset: DatasetCore = <any> {};
const quads: Quad[] = <any> {};
const quadStream: Stream = <any> {};

const serializer = new Serializer();
const serializer2 = new Serializer({});
const serializerTypescript = new Serializer({
    module: "ts",
});
const serializerCjs = new Serializer({
    module: "commonjs",
});

const code: string = serializer.transform(quads);
const codeFromDataset: string = serializer.transform(dataset);

const stream: EventEmitter = serializer.import(quadStream);
const typescriptStream: EventEmitter = serializer.import(quadStream, {
    module: "ts",
});
