import Serializer = require('@rdfjs/serializer-jsonld');
import { EventEmitter } from 'events';
import { Sink, Stream } from 'rdf-js';

const stream: Stream = {} as any;

const serializer1 = new Serializer();
const serializer2 = new Serializer({});
const serializer3 = new Serializer({ encoding: 'string' });
const serializer4 = new Serializer({ encoding: 'object' });

const sink: Sink<Stream, EventEmitter> = serializer1;

const eventEmitter1: EventEmitter = serializer1.import(stream);
const eventEmitter2: EventEmitter = serializer1.import(stream, {});
const eventEmitter3: EventEmitter = serializer1.import(stream, { encoding: 'string' });
const eventEmitter4: EventEmitter = serializer1.import(stream, { encoding: 'object' });
