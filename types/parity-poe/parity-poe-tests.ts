import { formatInbound, parseInbound, formatOutbound, parseOutbound, POEMessage } from "parity-poe";

const buffer = new Buffer("test");
const message: POEMessage = {
    messageType: 'A'
};

/**
 * formatInbound tests
 */

// $ExpectType Buffer
formatInbound(message);

// Invalid type
// $ExpectError
formatInbound('');

// $ExpectError
formatInbound({});

// Invalid sub type
// $ExpectError
formatInbound({ messageType: 1 });

/**
 *  parseInbound tests
 */

// $ExpectType POEMessage
parseInbound(buffer);

// Invalid type
// $ExpectError
parseInbound('');

/**
 * formatOutbound tests
 */

// $ExpectType Buffer
formatOutbound(message);

// Invalid type
// $ExpectError
formatOutbound('');

// $ExpectError
formatOutbound({});

// Invalid sub type
// $ExpectError
formatOutbound({ messageType: 1 });

/**
 * parseOutbound tests
 */

// $ExpectType POEMessage
parseOutbound(buffer);

// Invalid type
// $ExpectError
parseOutbound('');
