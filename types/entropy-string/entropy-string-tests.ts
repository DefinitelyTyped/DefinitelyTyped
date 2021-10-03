import { Entropy, charset64, CharSet } from 'entropy-string';

const entropy = new Entropy();
console.log(entropy.string());

const entropy2 = new Entropy({ total: 1e6, risk: 1e9 });
console.log(entropy2.string());

const entropy3 = new Entropy({ total: 1e6, risk: 1e9, charset: '0123456789ABCDEF' });
console.log(entropy3.string());

const entropy4 = new Entropy({ charset: new CharSet('0123456789ABCDEF') });
console.log(entropy4.string());

const entropy5 = new Entropy();
entropy5.useChars('0123456789ABCDEF');
console.log(entropy5.smallID());

const entropy6 = new Entropy({ charset: charset64 });
console.log(entropy6.string());

// This should throw a type error, as the Options type requires at least
// one of the optional properties from the Opts interface
// const entropy7 = new Entropy({});
