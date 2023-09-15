import * as BinaryXML from "binary-xml";

// @ts-expect-error
new BinaryXML();

// @ts-expect-error
new BinaryXML("non-buffer");

new BinaryXML(Buffer.from("buffer"));
new BinaryXML(Buffer.from("buffer"), {});
new BinaryXML(Buffer.from("buffer"), { debug: false });
new BinaryXML(Buffer.from("buffer"), { debug: true });

// $ExpectType BinaryXmlParser
const parser = new BinaryXML(Buffer.from("buffer"));
// $ExpectType Document
const doc = parser.parse();
