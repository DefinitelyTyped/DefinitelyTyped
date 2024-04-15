import * as secretBox from "secret-box";

// test type exports
type EncryptOptions = secretBox.EncryptOptions;
type SerializedResult = secretBox.SerializedResult;

const pw = "open sesame 2";
const message = Buffer.from("The secret launch code is 1234.");

const secret = secretBox.encrypt(message, pw); // $ExpectType Buffer
secretBox.encrypt(message, Buffer.from(pw)); // $ExpectType Buffer
secretBox.encrypt(message, pw, { iv: Buffer.alloc(10) }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { n: 1 }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { p: 1 }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { r: 1 }); // $ExpectType Buffer
secretBox.encrypt(message, pw, { salt: Buffer.alloc(10) }); // $ExpectType Buffer

secretBox.decrypt(secret, pw); // $ExpectType Buffer
secretBox.decrypt(secret, Buffer.from(pw)); // $ExpectType Buffer

secretBox.struct; // $ExpectType Codec<SerializedResult>
const deserialized = secretBox.struct.decode(Buffer.alloc(10)); // $ExpectType SerializedResult
secretBox.struct.encode(deserialized);

deserialized.version; // $ExpectType number
deserialized.n; // $ExpectType number
deserialized.r; // $ExpectType number
deserialized.p; // $ExpectType number
deserialized.salt; // $ExpectType Buffer
deserialized.iv; // $ExpectType Buffer
deserialized.authTag; // $ExpectType Buffer
deserialized.secret; // $ExpectType Buffer
