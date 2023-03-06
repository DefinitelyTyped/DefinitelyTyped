import * as pkcs7 from 'pkcs7-padding';

const paddedValue: string = pkcs7.pad('string to pad', 32);
const paddedBufferValue: Buffer = pkcs7.pad(Buffer.from('string to pad'), 32);

const unPaddedValue: string = pkcs7.pad(paddedValue, 32);
const anotherValue: string = pkcs7.pad(paddedValue);
const unPaddedBufferValue: Buffer = pkcs7.pad(paddedBufferValue, 32);
