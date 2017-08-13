import * as xmldoc from "xmldoc";
import { XmlElement, XmlTextNode, XmlCDataNode, XmlCommentNode } from "xmldoc";

//
// https://github.com/nfarina/xmldoc#usage
//
const document = new xmldoc.XmlDocument("<some>xml</some>");

//
// https://github.com/nfarina/xmldoc#descendantwithpathpath
//
const bookNode = new xmldoc.XmlDocument(`
    <book>
    <author>
        <name isProper="true">George R. R. Martin</name>
        ...
    </author>
    ...
    </book>`);

const nameNode = bookNode.descendantWithPath("author.name"); // return <name> node

//
// https://github.com/nfarina/xmldoc#valuewithpathpath
//
const authorName = bookNode.valueWithPath("author.name");               // return "George R. R. Martin"
const authorIsProper = bookNode.valueWithPath("author.name@isProper");  // return "true"

//
// XmlElement constructor takes an XmlTag
// https://github.com/nfarina/xmldoc/blob/master/lib/xmldoc.js#L22
//
new XmlElement({ name: "foo", attributes: { bar: "baz" } });

//
// Adding various types of children
//
const element = new XmlElement({ name: "foo", attributes: { bar: "baz" } });
element.children.push(new XmlTextNode("some text"));
element.children.push(new XmlCDataNode("some cdata"));
element.children.push(new XmlCommentNode("some comment"));

//
// https://github.com/nfarina/xmldoc#tostringoptions
//
document.toString({ compressed: true });            // strips indents and linebreaks
document.toString({ trimmed: true });               // trims long strings for easier debugging
document.toString({ preserveWhitespace: true });    // prevents whitespace being removed from around element values

const xml = "<author><name>looooooong value</name></author>";
console.log("My document: \n" + new xmldoc.XmlDocument(xml).toString({ trimmed: true }));
/* Prints:

My Document:
<hello>
  loooooooo…
</hello>

*/
