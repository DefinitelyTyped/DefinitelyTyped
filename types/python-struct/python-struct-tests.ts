import * as struct from 'python-struct';
import * as Long from 'long';

struct.sizeOf('>iixxQ10sb');
struct.pack('>iixxQ10sb', [
  1234,
  5678,
  Long.fromString('12345678901234567890'),
  'abcdefg',
  true,
]);
struct.unpack(
  '>iixxQ10sb',
  Buffer.from(
    '000004d20000162eab54a98ceb1f0ad2616263646566670000000000000000001880',
    'hex',
  ),
);

const intValue = parseInt('01000010010001110000000000000000', 2);
struct.unpack('f', struct.pack('I', intValue));
