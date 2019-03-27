import { format, parse, PMDMessage } from 'parity-pmd';

// Arrange
const buffer = new Buffer(5);
buffer.writeUInt8(0x56, 0);
buffer.writeUInt32BE(70, 1);
const parsedContent: PMDMessage = parse(buffer);

// Act & Assert
// $ExpectType PMDMessage
parse(buffer);

// $ExpectType Buffer
format(parsedContent);

// Invalid type
// $ExpectError
parse('');

// $ExpectError
format({});

// Invalid sub type
// $ExpectError
format({ messageType: 1 });
