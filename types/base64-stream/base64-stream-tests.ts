import { Base64Decode, Base64Encode } from 'base64-stream';

new Base64Decode();
new Base64Encode({
  lineLength: 100,
  prefix: 'data;'
});
