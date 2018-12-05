import NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });

key.setOptions({
	encryptionScheme: 'pkcs1_oaep',
	signingScheme: 'pkcs1'
});

const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'base64');
const decrypted = key.decrypt(encrypted, 'utf8');

const emptyKey = new NodeRSA();
emptyKey.generateKeyPair();
emptyKey.generateKeyPair(512);
emptyKey.generateKeyPair(512, 65537);

const newKey = new NodeRSA({ b: 512 });

const keyFromPEM = new NodeRSA(
`-----BEGIN RSA PRIVATE KEY-----
MIIBOQIBAAJAVY6quuzCwyOWzymJ7C4zXjeV/232wt2ZgJZ1kHzjI73wnhQ3WQcL
DFCSoi2lPUW8/zspk0qWvPdtp6Jg5Lu7hwIDAQABAkBEws9mQahZ6r1mq2zEm3D/
VM9BpV//xtd6p/G+eRCYBT2qshGx42ucdgZCYJptFoW+HEx/jtzWe74yK6jGIkWJ
AiEAoNAMsPqwWwTyjDZCo9iKvfIQvd3MWnmtFmjiHoPtjx0CIQCIMypAEEkZuQUi
pMoreJrOlLJWdc0bfhzNAJjxsTv/8wIgQG0ZqI3GubBxu9rBOAM5EoA4VNjXVigJ
QEEk1jTkp8ECIQCHhsoq90mWM/p9L5cQzLDWkTYoPI49Ji+Iemi2T5MRqwIgQl07
Es+KCn25OKXR/FJ5fu6A6A+MptABL3r8SEjlpLc=
-----END RSA PRIVATE KEY-----`);

const keyData = '-----BEGIN PUBLIC KEY----- ... -----END PUBLIC KEY-----';
key.importKey(keyData, 'pkcs8');
const defaultPem: string = key.exportKey();
const publicPem: string = key.exportKey('pkcs8-public-pem');
const publicDer: Buffer = key.exportKey('pkcs8-public-der');
const privateDer: Buffer = key.exportKey('pkcs1-der');
key.importKey({
	n: new Buffer('0086fa9ba066685845fc03833a9699c8baefb53cfbf19052a7f10f1eaa30488cec1ceb752bdff2df9fad6c64b3498956e7dbab4035b4823c99a44cc57088a23783', 'hex'),
	e: 65537,
	d: new Buffer('5d2f0dd982596ef781affb1cab73a77c46985c6da2aafc252cea3f4546e80f40c0e247d7d9467750ea1321cc5aa638871b3ed96d19dcc124916b0bcb296f35e1', 'hex'),
	p: new Buffer('00c59419db615e56b9805cc45673a32d278917534804171edcf925ab1df203927f', 'hex'),
	q: new Buffer('00aee3f86b66087abc069b8b1736e38ad6af624f7ea80e70b95f4ff2bf77cd90fd', 'hex'),
	dmp1: new Buffer('008112f5a969fcb56f4e3a4c51a60dcdebec157ee4a7376b843487b53844e8ac85', 'hex'),
	dmq1: new Buffer('1a7370470e0f8a4095df40922a430fe498720e03e1f70d257c3ce34202249d21', 'hex'),
	coeff: new Buffer('00b399675e5e81506b729a777cc03026f0b2119853dfc5eb124610c0ab82999e45', 'hex')
}, 'components');
const publicComponents = key.exportKey('components-public');
let b: Buffer = publicComponents.n;
let bn: Buffer|number = publicComponents.e;
const privateComponents = key.exportKey('components-private');
b = privateComponents.n;
bn = privateComponents.e;
b = privateComponents.d;
b = privateComponents.p;
b = privateComponents.q;
b = privateComponents.dmp1;
b = privateComponents.dmq1;
b = privateComponents.coeff;

key.isPrivate();
key.isPublic(true);
key.isPublic();

key.isEmpty();

key.getKeySize();
key.getMaxMessageSize();
