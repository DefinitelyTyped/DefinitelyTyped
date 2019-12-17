import Parser = require('@rdfjs/parser-jsonld');
import { Context } from 'jsonld/jsonld-spec';
import { DataFactory, Stream } from 'rdf-js';

const baseIRI = '';
const context: Context = {} as any;
const factory: DataFactory = {} as any;
const stream: Stream = {} as any;

const parser1 = new Parser();
const parser2 = new Parser({});
const parser3 = new Parser({ baseIRI, context, factory });

const eventEmitter1 = parser1.import(stream);
const eventEmitter2 = parser1.import(stream, {});
const eventEmitter3 = parser1.import(stream, { baseIRI, context, factory });
