import { SinkMap } from "@rdfjs/sink-map";
import { EventEmitter } from "events";
import { Stream } from "@rdfjs/types";
import Formats from './lib/Formats.js';

export {default as Formats} from './lib/Formats.js';

export const parsers: SinkMap<EventEmitter, Stream>;
export const serializers: SinkMap<Stream, EventEmitter>;

declare const formats: Formats;

export default formats;

export { default as JsonLdParser } from "@rdfjs/parser-jsonld";
export { default as N3Parser } from "@rdfjs/parser-n3";
export { default as JsonLdSerializer } from "@rdfjs/serializer-jsonld";
export { default as PrettyJsonLdSerializer } from "@rdfjs/serializer-jsonld-ext";
export { default as NTriplesSerializer } from "@rdfjs/serializer-ntriples";
export { default as TurtleSerializer } from "@rdfjs/serializer-turtle";
export { RdfXmlParser } from "rdfxml-streaming-parser";
