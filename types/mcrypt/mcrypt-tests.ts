import { getAlgorithmNames, getModeNames, MCrypt } from "mcrypt";

let plaintext: Buffer;
let ciphertext: Buffer;

for (const algo of getAlgorithmNames()) {
    console.log(algo.toUpperCase());
}
for (const mode of getModeNames()) {
    console.log(mode.toUpperCase());
}

const desEcb = new MCrypt("des", "ecb");
desEcb.open("madepass");

ciphertext = desEcb.encrypt("too many secrets");
console.log(ciphertext.toString("base64"));

plaintext = desEcb.decrypt(ciphertext);
console.log(plaintext.toString());

const blowfishCfb = new MCrypt("blowfish", "cfb");
const iv = blowfishCfb.generateIv();
blowfishCfb.open("somekey", iv);
ciphertext = blowfishCfb.encrypt("sometext");
console.log(Buffer.concat([iv, ciphertext]).toString("base64"));

const bfEcb = new MCrypt("blowfish", "ecb");
bfEcb.validateKeySize(false);
bfEcb.open("typeconfig.sys^_-");

const rjCbc = new MCrypt("rijndael-256", "cbc");
rjCbc.validateIvSize(false);
rjCbc.open("$verysec$retkey$", "foobar");

console.log(blowfishCfb.getBlockSize() * 8);
console.log(blowfishCfb.getKeySize() * 8);
console.log(blowfishCfb.getSupportedKeySizes().map(v => v * 8));
console.log(blowfishCfb.getIvSize() * 8);
console.log(blowfishCfb.getAlgorithmName().toUpperCase());
console.log(blowfishCfb.getModeName().toUpperCase());

function assertBool(value: boolean) {
    return value;
}

assertBool(blowfishCfb.selfTest());
assertBool(blowfishCfb.isBlockAlgorithmMode());
assertBool(blowfishCfb.isBlockAlgorithm());
assertBool(blowfishCfb.isBlockMode());
assertBool(blowfishCfb.hasIv());
