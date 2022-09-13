import isBuffer = require('is-buffer');

let booleanResult: boolean = isBuffer(Buffer.alloc(4));
booleanResult = isBuffer(Buffer.allocUnsafeSlow(100));
booleanResult = isBuffer(undefined);
booleanResult = isBuffer(null);
booleanResult = isBuffer('');
booleanResult = isBuffer(true);
booleanResult = isBuffer(false);
booleanResult = isBuffer(0);
booleanResult = isBuffer(1);
booleanResult = isBuffer(1.0);
booleanResult = isBuffer('string');
booleanResult = isBuffer({});
booleanResult = isBuffer([]);
booleanResult = isBuffer(function foo() {});
booleanResult = isBuffer({ isBuffer: null });
booleanResult = isBuffer({ isBuffer() { throw new Error(); } });

// Typeguard test
const unknownValue: unknown = {};
if (isBuffer(unknownValue)) {
  const bufferValue: Buffer = unknownValue;
} else {
  // @ts-expect-error
  const bufferValue: Buffer = unknownValue;
}
