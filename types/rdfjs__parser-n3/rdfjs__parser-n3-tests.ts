import ParserN3 = require('@rdfjs/parser-n3');
import { Stream, DataFactory, Sink, BaseQuad } from 'rdf-js';
import { EventEmitter } from 'events';

const factory: DataFactory = <any> {};
const baseIRI = '';

const parser = new ParserN3();
const parser1 = new ParserN3({});
const parser2 = new ParserN3({ factory });
const parser3 = new ParserN3({ baseIRI });

const sink: Sink<EventEmitter, Stream> = parser;

const input: Stream = <any> {};
const output: Stream = parser.import(input);
const output1: Stream = parser.import(input, {});
const output2: Stream = parser.import(input, { factory });
const output3: Stream = parser.import(input, { baseIRI });

interface SpecializedQuad extends BaseQuad {
    foo: string;
}
const typedStream: Stream<SpecializedQuad> = <any> {};
const typedParser: ParserN3<SpecializedQuad> = <any> {};
const typedImported: Stream<SpecializedQuad> = typedParser.import(typedStream);
const typedImported1: Stream<SpecializedQuad> = typedParser.import(typedStream, {});
const typedImported2: Stream<SpecializedQuad> = typedParser.import(typedStream, { baseIRI, factory });
