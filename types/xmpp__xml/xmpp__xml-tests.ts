import xml = require('@xmpp/xml');
import { Parser as LtxParser } from 'ltx';

// test type exports
type Element = xml.Element;
type Node = xml.Node;
type XMLError = xml.XMLError;

xml.escapeXML(''); // $ExpectType string
xml.unescapeXML(''); // $ExpectType string
xml.escapeXMLText(''); // $ExpectType string
xml.unescapeXMLText(''); // $ExpectType string

xml.Parser.XMLError; // $ExpectType typeof XMLError
const parser = new xml.Parser();
const ltxParser: LtxParser = parser;
parser.parser; // $ExpectType SaxLtx
parser.root; // $ExpectType Element | null
parser.cursor; // $ExpectType Element | null
parser.onStartElement('el'); // $ExpectType void
parser.onEndElement('el'); // $ExpectType void
parser.onText('text'); // $ExpectType void
parser.write('foo'); // $ExpectType void
parser.end('foo'); // $ExpectType void

const recipient = 'user@example.com';
const days = ['Monday', 'Tuesday'];
// $ExpectType Element
const message = xml(
    'message',
    { to: recipient },
    xml('body', {}, 'foo'),
    xml('days', undefined, ...days.map(day => xml('day', {}, day))),
);

message.attrs; // $ExpectType { [attrName: string]: any; }
message.getChild('body')!.text(); // $ExpectType string
message.getChild('body')!.toString(); // $ExpectType string
message.getChild('days')!.getChildren('day'); // $ExpectType Element[]
message.getChildText('body'); // $ExpectType string | null

message.attrs.type = 'chat';
Object.assign(message.attrs, { type: 'chat' });
message.getChild('body')!.text('Hello world'); // $ExpectType Element
message.append(xml('foo')); // $ExpectType void
message.append('bar'); // $ExpectType void
message.append(...days.map(day => xml('day', {}, day))); // $ExpectType void
message.prepend(xml('foo')); // $ExpectType void
message.prepend('bar'); // $ExpectType void
message.prepend(...days.map(day => xml('day', {}, day))); // $ExpectType void
const body = message.getChild('body');
message.remove(body!); // $ExpectType Element

const xmlError = new xml.XMLError('foo');
const error: Error = xmlError;
xmlError.name; // $ExpectType "XMLError"
