import Parser, { DocumentLoader } from "@rdfjs/parser-jsonld";
import FsDocumentLoader from "@rdfjs/parser-jsonld/FsDocumentLoader.js";
import { BaseQuad, DataFactory, Sink, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";
import { Context } from "jsonld/jsonld-spec";

const baseIRI = "";
const context: Context = {} as any;
const factory: DataFactory = {} as any;
const stream: Stream = {} as any;

let documentLoader: DocumentLoader = new FsDocumentLoader(new Map([["foo", "foo.json"]]));
documentLoader = new FsDocumentLoader({ foo: "foo.json" });

const parser1 = new Parser();
const parser2 = new Parser({});
const parser3 = new Parser({ baseIRI, context, factory, documentLoader });

const sink: Sink<EventEmitter, Stream> = parser1;

const eventEmitter1: Stream = parser1.import(stream);
const eventEmitter2: Stream = parser1.import(stream, {});
const eventEmitter3: Stream = parser1.import(stream, { baseIRI, context, factory, documentLoader });

interface SpecializedQuad extends BaseQuad {
    foo: string;
}
const typedStream: Stream<SpecializedQuad> = <any> {};
const typedParser: Parser<SpecializedQuad> = <any> {};
const typedImported: Stream<SpecializedQuad> = typedParser.import(typedStream);
const typedImported1: Stream<SpecializedQuad> = typedParser.import(typedStream, {});
const typedImported2: Stream<SpecializedQuad> = typedParser.import(typedStream, {
    baseIRI,
    context,
    factory,
    documentLoader,
});
