import { Base64Decode, Base64Encode } from 'base64-stream';

new Base64Decode();

new Base64Encode();
new Base64Encode({});
new Base64Encode({ outputEncoding: 'utf8' });
new Base64Encode({ outputEncoding: null });
new Base64Encode({ inputEncoding: 'ascii' });
new Base64Encode({ lineLength: 100 });
new Base64Encode({ prefix: 'data:' });
