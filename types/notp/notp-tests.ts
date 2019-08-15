import * as notp from 'notp';

const genOpt: notp.HOTPGenerateOptions = {
  counter: 0
};
const key: Buffer = Buffer.from("@DuMmy K3y!");
const token: string = notp.hotp.gen(key, genOpt);

const verifyOpt: notp.HOTPVerifyOptions = {};
const result = notp.hotp.verify(token, key, verifyOpt);
if (result) {
  const resultCopy: notp.VerifyResult = result;
  console.log(`result is ${resultCopy} with delta ${resultCopy.delta}.`);
} else {
  const resultCopy: null = result;
  console.log(`result is ${resultCopy}.`);
}

const opt: notp.TOTPOptions = {};
const token2: string = notp.totp.gen(key);
const result2 = notp.totp.verify(token2, key, opt);

console.log("final result: ", result2 ? result2 : result);
