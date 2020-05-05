import multibase from 'multibase';

const buf = Buffer.from('÷ïÿ🥰÷ïÿ😎🥶🤯'); // base64
const bufOut = 'mw7fDr8O/8J+lsMO3w6/Dv/CfmI7wn6W28J+krw';
const str = 'foobar';
const strOut = 'mZm9vYmFy';

const name = multibase.isEncoded(bufOut);
multibase.isEncoded(buf);

const multibasedBuf = multibase.encode(name || 'm', buf);
console.log(multibasedBuf.toString() === bufOut); // true
multibase.encode('base64', Buffer.from(str));

// $ExpectType Buffer
multibase.decode(strOut);
multibase.decode(buf); // Error but right type

console.log(multibase.codes[0] !== 'm');
console.log(multibase.names[0] === 'base1');
