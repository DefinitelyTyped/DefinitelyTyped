import UIDGenerator = require('uid-generator');

new UIDGenerator('abc'); // $ExpectType UIDGeneratorInstance
const generator = new UIDGenerator(128, 'abc'); // $ExpectType UIDGeneratorInstance

generator.generateSync(); // $ExpectType string
generator.generate((err, uid) => {
  err; // $ExpectType Error | null
  uid; // $ExpectType string
});
generator.generate().then(uid => {
  uid; // $ExpectType string
}).catch(e => {
  e;   // $ExpectType any
});

generator.bitSize; // $ExpectType number
generator.uidLength; // $ExpectType number
generator.baseEncoding; // $ExpectType string
generator.base; // $ExpectType number

UIDGenerator.BASE16; // $ExpectType "0123456789abcdef"
UIDGenerator.BASE36; // $ExpectType "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
UIDGenerator.BASE58; // $ExpectType "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
UIDGenerator.BASE62; // $ExpectType "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
UIDGenerator.BASE66; // $ExpectType "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~"
UIDGenerator.BASE71; // $ExpectType "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!'()*-._~"
UIDGenerator.BASE94; // $ExpectType "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
