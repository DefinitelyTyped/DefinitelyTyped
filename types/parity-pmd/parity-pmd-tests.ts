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
// @ts-expect-error
parse('');

// @ts-expect-error
format({});

// Invalid sub type
// @ts-expect-error
format({ messageType: 1 });
