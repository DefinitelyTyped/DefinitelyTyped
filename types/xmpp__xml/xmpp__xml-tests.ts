import xml = require('@xmpp/xml');

xml.escapeXML('');
xml.unescapeXML('');
xml.escapeXMLText('');
xml.unescapeXMLText('');

const parser = new xml.Parser();
parser.onStartElement('el');
parser.onEndElement('el');
parser.onText('text');
parser.write((null as any) as Buffer);
parser.end((null as any) as Buffer);

const recipient = 'user@example.com';
const days = ['Monday', 'Tuesday'];
const message = xml(
    'message',
    { to: recipient },
    xml('body', {}, 1 + 2),
    xml('days', days.map(day => xml('day', {}, day)))
);
xml.x(
    'message',
    { to: recipient },
    xml('body', {}, 1 + 2),
    xml('days', days.map(day => xml('day', {}, day)))
);

message.attrs;
message.getChild('body')!.text();
message.getChild('body')!.toString();
message.getChild('days')!.getChildren('day');
message.getChildText('body');

message.attrs.type = 'chat';
Object.assign(message.attrs, { type: 'chat' });
message.getChild('body')!.text('Hello world');
message.append(xml('foo'));
message.append('bar');
message.append(days.map(day => xml('day', {}, day)));
message.prepend(xml('foo'));
message.prepend('bar');
message.prepend(days.map(day => xml('day', {}, day)));
const body = message.getChild('body');
message.remove(body!);
