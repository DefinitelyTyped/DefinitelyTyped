import formats = require('@rdfjs/formats-common');
import { Stream } from 'rdf-js';
import { SinkMap } from '@rdfjs/sink-map';
import { EventEmitter } from 'events';

const parsers: SinkMap<EventEmitter, Stream> = formats.parsers;
const serializers: SinkMap<Stream, EventEmitter> = formats.serializers;
