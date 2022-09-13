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
// @ts-expect-error
formatInbound('');

// @ts-expect-error
formatInbound({});

// Invalid sub type
// @ts-expect-error
formatInbound({ messageType: 1 });

/**
 *  parseInbound tests
 */

// $ExpectType POEMessage
parseInbound(buffer);

// Invalid type
// @ts-expect-error
parseInbound('');

/**
 * formatOutbound tests
 */

// $ExpectType Buffer
formatOutbound(message);

// Invalid type
// @ts-expect-error
formatOutbound('');

// @ts-expect-error
formatOutbound({});

// Invalid sub type
// @ts-expect-error
formatOutbound({ messageType: 1 });

/**
 * parseOutbound tests
 */

// $ExpectType POEMessage
parseOutbound(buffer);

// Invalid type
// @ts-expect-error
parseOutbound('');
