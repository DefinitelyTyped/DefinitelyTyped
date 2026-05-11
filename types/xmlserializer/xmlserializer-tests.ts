import * as parse5 from "parse5";
import * as xmlserializer from "xmlserializer";

const htmlString = "<br>";
const dom = parse5.parse(htmlString);

// $ExpectType string
xmlserializer.serializeToString(dom);
