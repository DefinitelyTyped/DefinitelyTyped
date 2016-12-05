

var libxmljs = require("libxmljs");
var xml =  '<?xml version="1.0" encoding="UTF-8"?>' +
           '<root>' +
               '<child foo="bar">' +
                   '<grandchild baz="fizbuzz">grandchild content</grandchild>' +
               '</child>' +
               '<sibling>with content!</sibling>' +
           '</root>';

var xmlDoc = libxmljs.parseXml(xml);

// xpath queries
var gchild = xmlDoc.get('//grandchild');

console.log(gchild.text());  // prints "grandchild content"

var children = xmlDoc.root().childNodes();
var child = children[0];

console.log(child.attr('foo').value()); // prints "bar"

var parser = new libxmljs.SaxParser();

parser.on('startDocument', null);
parser.on('startElement', null);

var parser2 = new libxmljs.SaxPushParser();

// connect any callbacks here
parser2
  .on('startDocument', null)
  .on('startElement', null)

var xmlChunk: any;

while(xmlChunk) {
  parser2.push(xmlChunk);
}

var doc = new libxmljs.Document();
  doc.node('root')
    .node('child').attr({foo: 'bar'})
      .node('grandchild', 'grandchild content').attr({baz: 'fizbuzz'})
    .parent()
  .parent()
    .node('sibling', 'with content!');
