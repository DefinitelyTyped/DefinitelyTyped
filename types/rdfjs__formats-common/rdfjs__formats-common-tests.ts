import formats, * as formatsNamed from '@rdfjs/formats-common';
import { Stream, Sink } from 'rdf-js';
import { SinkMap } from '@rdfjs/sink-map';
import { EventEmitter } from 'events';

let parsers: SinkMap<EventEmitter, Stream> = formats.parsers;
let serializers: SinkMap<Stream, EventEmitter> = formats.serializers;

({parsers, serializers} = formatsNamed);

type Parser = Sink<EventEmitter, Stream>;

const jsonLdParser: Parser = new formatsNamed.JsonLdParser();
const n3Parser: Parser = new formatsNamed.N3Parser();
const rdfXmlParser: Parser = new formatsNamed.RdfXmlParser();

type Serializer = Sink<Stream, EventEmitter>;

const jsonLdSerializer: Serializer = new formatsNamed.JsonLdSerializer();
const nTriplesSerializer: Serializer = new formatsNamed.NTriplesSerializer();
