import { format, parse, PMRMessage } from "parity-pmr";

const buffer = new Buffer("test");
const message: PMRMessage = {
    messageType: 'E'
};

// $ExpectType Buffer
format(message);

// Invalid type
// @ts-expect-error
format('');

// @ts-expect-error
format({});

// Invalid sub type
// @ts-expect-error
format({ messageType: 1 });

// $ExpectType PMRMessage
parse(buffer);

// Invalid type
// @ts-expect-error
parse('');
