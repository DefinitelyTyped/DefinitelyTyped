import formats = require('@rdfjs/formats-common');
import { Sink, Stream } from 'rdf-js';
import { EventEmitter } from 'events';

const parsers: Sink<EventEmitter, Stream> = formats.parsers;
const serializers: Sink<Stream, EventEmitter> = formats.serializers;
