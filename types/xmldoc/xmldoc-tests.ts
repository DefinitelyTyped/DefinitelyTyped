import * as xmldoc from "xmldoc";

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
