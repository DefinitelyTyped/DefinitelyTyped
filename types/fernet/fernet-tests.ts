import fernet = require("fernet");

declare const wa: CryptoJS.lib.WordArray;

// test type exports
type FernetConstructor = fernet.FernetConstructor;
type SecretConstructor = fernet.SecretConstructor;
type TokenConstructor = fernet.TokenConstructor;
type Fernet = fernet.Fernet;
type Options = fernet.Options;
type Secret = fernet.Secret;
type Token = fernet.Token;
type TokenOptions = fernet.TokenOptions;

const fInst = new fernet(); // $ExpectType Fernet
new fernet({ iv: [1] }); // $ExpectType Fernet
new fernet({ iv: ["1"] }); // $ExpectType Fernet
new fernet({ iv: ["1", 1] }); // $ExpectType Fernet
new fernet({ secret: "foo" }); // $ExpectType Fernet
new fernet({ ttl: 20 }); // $ExpectType Fernet

fInst.Hex; // $ExpectType Encoder
fInst.Base64; // $ExpectType Encoder
fInst.Secret; // $ExpectType SecretConstructor
fInst.Token; // $ExpectType TokenConstructor
fernet.Hex; // $ExpectType Encoder
fernet.Base64; // $ExpectType Encoder
fernet.Secret; // $ExpectType SecretConstructor
fernet.Token; // $ExpectType TokenConstructor

fInst.ttl; // $ExpectType number
fInst.versionHex; // $ExpectType string
fInst.ivHex; // $ExpectType string
fInst.iv; // $ExpectType WordArray
fInst.secret; // $ExpectType: Secret | undefined
fernet.ttl; // $ExpectType number
fernet.versionHex; // $ExpectType string
fernet.ivHex; // $ExpectType string
fernet.iv; // $ExpectType WordArray
fernet.secret; // $ExpectType: Secret | undefined

fInst.parseHex("123"); // $ExpectType number
fInst.decode64toHex("123"); // $ExpectType string
fInst.hexBits(123); // $ExpectType number
fInst.urlsafe("abc"); // $ExpectType string
fInst.setSecret("123"); // $ExpectType Secret
fInst.ArrayToHex(["1"]); // $ExpectType string
fInst.ArrayToHex([1]); // $ExpectType string
fInst.ArrayToHex(["1", 1]); // $ExpectType string
fInst.setIV(["1"]); // $ExpectType string
fInst.setIV([1]); // $ExpectType string
fInst.setIV(["1", 1]); // $ExpectType string
fInst.encryptMessage("123", "123", wa); // $ExpectType WordArray
fInst.encryptMessage(wa, "123", wa); // $ExpectType WordArray
fInst.encryptMessage("123", wa, wa); // $ExpectType WordArray
fInst.encryptMessage(wa, wa, wa); // $ExpectType WordArray
fInst.decryptMessage(wa, "123", wa); // $ExpectType string
fInst.decryptMessage(wa, wa, wa); // $ExpectType string
fInst.timeBytes(); // $ExpectType WordArray
fInst.createToken(wa, wa, wa, wa); // $ExpectType string
fInst.createHmac(wa, wa, wa, wa); // $ExpectType WordArray
fernet.parseHex("123"); // $ExpectType number
fernet.decode64toHex("123"); // $ExpectType string
fernet.hexBits(123); // $ExpectType number
fernet.urlsafe("abc"); // $ExpectType string
fernet.setSecret("123"); // $ExpectType Secret
fernet.ArrayToHex(["1"]); // $ExpectType string
fernet.ArrayToHex([1]); // $ExpectType string
fernet.ArrayToHex(["1", 1]); // $ExpectType string
fernet.setIV(["1"]); // $ExpectType string
fernet.setIV([1]); // $ExpectType string
fernet.setIV(["1", 1]); // $ExpectType string
fernet.encryptMessage("123", "123", wa); // $ExpectType WordArray
fernet.encryptMessage(wa, "123", wa); // $ExpectType WordArray
fernet.encryptMessage("123", wa, wa); // $ExpectType WordArray
fernet.encryptMessage(wa, wa, wa); // $ExpectType WordArray
fernet.decryptMessage(wa, "123", wa); // $ExpectType string
fernet.decryptMessage(wa, wa, wa); // $ExpectType string
fernet.timeBytes(); // $ExpectType WordArray
fernet.createToken(wa, wa, wa, wa); // $ExpectType string
fernet.createHmac(wa, wa, wa, wa); // $ExpectType WordArray

const sInst = new fInst.Secret("123"); // $ExpectType Secret
sInst.encryptionKey; // $ExpectType WordArray
sInst.encryptionKeyHex; // $ExpectType string
sInst.signingKey; // $ExpectType WordArray
sInst.signingKeyHex; // $ExpectType string

const tInst = new fernet.Token(); // $ExpectType Token
new fernet.Token({ cipherText: wa }); // $ExpectType Token
new fernet.Token({ iv: [1] }); // $ExpectType Token
new fernet.Token({ iv: ["1"] }); // $ExpectType Token
new fernet.Token({ iv: ["1", 1] }); // $ExpectType Token
new fernet.Token({ message: "abc" }); // $ExpectType Token
new fernet.Token({ secret: new fernet.Secret("") }); // $ExpectType Token
new fernet.Token({ time: "" }); // $ExpectType Token
new fernet.Token({ time: 123 }); // $ExpectType Token
new fernet.Token({ time: new Date(123) }); // $ExpectType Token
new fernet.Token({ token: "" }); // $ExpectType Token
new fernet.Token({ ttl: 2 }); // $ExpectType Token
new fernet.Token({ version: 1 }); // $ExpectType Token

tInst.secret; // $ExpectType Secret | undefined
tInst.encoded; // $ExpectType boolean | undefined
tInst.message; // $ExpectType string | undefined
tInst.token; // $ExpectType string | undefined
const t: CryptoJS.lib.WordArray | Date | undefined = tInst.time;
// @ts-expect-error
const t1: CryptoJS.lib.WordArray | Date = tInst.time;
// @ts-expect-error
const t2: Date | undefined = tInst.time;
// @ts-expect-error
const t3: CryptoJS.lib.WordArray | Date = tInst.time;
tInst.ivHex; // $ExpectType string | undefined
tInst.iv; // $ExpectType WordArray | undefined
tInst.optsIV; // $ExpectType (string | number)[] | undefined
tInst.cipherTextHex; // $ExpectType string | undefined
tInst.cipherText; // $ExpectType WordArray | undefined
tInst.hmacHex; // $ExpectType string | undefined
tInst.version; // $ExpectType number
tInst.ttl; // $ExpectType number
tInst.maxClockSkew; // $ExpectType number

tInst.setIV(["1"]); // $ExpectType string
tInst.setIV([1]); // $ExpectType string
tInst.setIV(["1", 1]); // $ExpectType string
tInst.setTime(""); // $ExpectType WordArray
tInst.setTime(123); // $ExpectType WordArray
tInst.setTime(new Date(123)); // $ExpectType WordArray
tInst.encode("abc"); // $ExpectType string
tInst.decode("abc"); // $ExpectType string
