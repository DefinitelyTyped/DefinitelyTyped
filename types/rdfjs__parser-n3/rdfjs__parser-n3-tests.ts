import ParserN3 = require('@rdfjs/parser-n3');
import { Stream, DataFactory, Sink } from 'rdf-js';
import { EventEmitter } from 'events';

const factory: DataFactory = <any> {};
const baseIRI = '';

const parser = new ParserN3();
const parser1 = new ParserN3({});
const parser2 = new ParserN3({ factory });
const parser3 = new ParserN3({ baseIRI });

const sink: Sink = parser;

const input: Stream = <any> {};
const output: EventEmitter = parser.import(input);
const output1: EventEmitter = parser.import(input, {});
const output2: EventEmitter = parser.import(input, { factory });
const output3: EventEmitter = parser.import(input, { baseIRI });
