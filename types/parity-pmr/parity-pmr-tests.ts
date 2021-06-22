import { format, parse, PMRMessage } from "parity-pmr";

const buffer = new Buffer("test");
const message: PMRMessage = {
    messageType: 'E'
};

// $ExpectType Buffer
format(message);

// Invalid type
// $ExpectError
format('');

// $ExpectError
format({});

// Invalid sub type
// $ExpectError
format({ messageType: 1 });

// $ExpectType PMRMessage
parse(buffer);

// Invalid type
// $ExpectError
parse('');
