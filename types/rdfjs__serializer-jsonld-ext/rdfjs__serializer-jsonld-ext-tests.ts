import Serializer = require('@rdfjs/serializer-jsonld-ext');
import { EventEmitter } from 'events';
import { Context } from 'jsonld/jsonld-spec';
import { Sink, Stream } from 'rdf-js';

const context: Context = {} as any;
const stream: Stream = {} as any;

const serializer1 = new Serializer();
const serializer2 = new Serializer({});
const serializer3 = new Serializer({
    context,
    compact: true,
    encoding: 'string',
    flatten: true,
    frame: true,
    skipContext: true,
    skipGraphProperty: true
});
const serializer4: Serializer = new Serializer({ encoding: 'object' });

const sink: Sink<Stream, EventEmitter> = serializer1;

const eventEmitter1: EventEmitter = serializer1.import(stream);
const eventEmitter2: EventEmitter = serializer1.import(stream, {});
const eventEmitter3: EventEmitter = serializer1.import(stream, {
    context,
    compact: true,
    encoding: 'string',
    flatten: true,
    frame: true,
    skipContext: true,
    skipGraphProperty: true
});
const eventEmitter4: EventEmitter = serializer1.import(stream, { encoding: 'object' });
