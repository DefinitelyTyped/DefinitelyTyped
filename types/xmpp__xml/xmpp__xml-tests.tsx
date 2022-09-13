/** @jsx xml */

import xml = require('@xmpp/xml');

const recipient = 'user@example.com';
const days = ['Monday', 'Tuesday'];
const message = (
    <message to={recipient}>
        <body>{1 + 2}</body>
        <days>
            {days.map(day => (
                <day>${day}</day>
            ))}
        </days>
    </message>
);

// write
message.append(
    <myevent xmlns="xmpp:example.org">
        <json xmlns="urn:xmpp:json:0">{JSON.stringify(days)}</json>
    </myevent>
);

// read
JSON.parse(message.getChild('myevent', 'xmpp:example.org')!.getChildText('json', 'urn:xmpp:json:0')!);
