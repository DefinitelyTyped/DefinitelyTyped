import * as libxmljs from 'libxmljs';

const xml =  '<?xml version="1.0" encoding="UTF-8"?>' +
           '<root>' +
               '<child foo="bar">' +
                   '<grandchild baz="fizbuzz">grandchild content</grandchild>' +
               '</child>' +
               '<sibling>with content!</sibling>' +
           '</root>';

const xmlDoc = libxmljs.parseXml(xml);

// xpath queries
const gchild = xmlDoc.get('//grandchild')!;

console.log(gchild.text());  // prints "grandchild content"

const children = xmlDoc.root()!.childNodes();
const child = children[0] as libxmljs.Element;

console.log(child.attr('foo')!.value()); // prints "bar"

const parser = new libxmljs.SaxParser();

parser.on('startDocument', () => 0);
parser.on('startElement', () => 0);

const parser2 = new libxmljs.SaxPushParser();

// connect any callbacks here
parser2
  .on('startDocument', () => 0)
  .on('startElement', () => 0);

const xmlChunk = '';

while (xmlChunk) {
  parser2.push(xmlChunk);
}

const doc = new libxmljs.Document();
  ((doc.node('root')
    .node('child').attr({foo: 'bar'})
      .node('grandchild', 'grandchild content').attr({baz: 'fizbuzz'})
    .parent()
  )  as libxmljs.Element).parent()
    .node('sibling', 'with content!');

const {name, externalId, systemId} = doc.getDtd();

const xmlWithNs =  '<?xml version="1.0" encoding="UTF-8"?>' +
           '<root>' +
               '<child xmlns:a="http://test.com/test" foo="bar">' +
                   '<a:grandchild baz="fizbuzz">grandchild content</a:grandchild>' +
               '</child>' +
               '<sibling>with content!</sibling>' +
           '</root>';

const xmlDocWithNs = libxmljs.parseXml(xmlWithNs);

// xpath queries
const gchildWithNs = xmlDocWithNs.get('//a:grandchild', {a: 'http://test.com/test'})!;

console.log(gchildWithNs.text());  // prints "grandchild content"

// xpath queries on element
const childElWithNs = xmlDocWithNs.get('//child')!;
const gchilEldWithNs = childElWithNs.get('//a:grandchild', { a: 'http://test.com/test' })!;

const validated: boolean = doc.validate(doc);
doc.validationErrors[0].message; // inherited from Error
doc.validationErrors[0].line;
