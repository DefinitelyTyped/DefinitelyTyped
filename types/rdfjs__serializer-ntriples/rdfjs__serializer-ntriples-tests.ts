import Serializer = require('@rdfjs/serializer-ntriples');
import { EventEmitter } from 'events';
import { Sink, Stream } from 'rdf-js';

const stream: Stream = {} as any;

const serializer1 = new Serializer();

const sink: Sink<Stream, EventEmitter> = serializer1;

const eventEmitter1: EventEmitter = serializer1.import(stream);
