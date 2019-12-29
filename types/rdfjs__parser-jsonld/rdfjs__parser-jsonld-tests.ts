import Parser = require('@rdfjs/parser-jsonld');
import { EventEmitter } from 'events';
import { Context } from 'jsonld/jsonld-spec';
import { DataFactory, Sink, Stream } from 'rdf-js';

const baseIRI = '';
const context: Context = {} as any;
const factory: DataFactory = {} as any;
const stream: Stream = {} as any;

const parser1 = new Parser();
const parser2 = new Parser({});
const parser3 = new Parser({ baseIRI, context, factory });

const sink: Sink = parser1;

const eventEmitter1: EventEmitter = parser1.import(stream);
const eventEmitter2: EventEmitter = parser1.import(stream, {});
const eventEmitter3: EventEmitter = parser1.import(stream, { baseIRI, context, factory });
