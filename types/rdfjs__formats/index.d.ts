import Formats from "./lib/Formats.js";

export { Formats } from "./lib/Formats.js";

export const parsers: Formats["parsers"];
export const serializers: Formats["serializers"];

declare const formats: Formats;

export default formats;

export { default as JsonLdParser } from "@rdfjs/parser-jsonld";
export { default as N3Parser } from "@rdfjs/parser-n3";
export { default as JsonLdSerializer } from "@rdfjs/serializer-jsonld";
export { default as PrettyJsonLdSerializer } from "@rdfjs/serializer-jsonld-ext";
export { default as NTriplesSerializer } from "@rdfjs/serializer-ntriples";
export { default as TurtleSerializer } from "@rdfjs/serializer-turtle";
export { RdfXmlParser } from "rdfxml-streaming-parser";
