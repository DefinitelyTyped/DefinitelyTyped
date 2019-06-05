import BigInteger = require('bigi');

const b1 = BigInteger.fromHex("188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012");
const b2 = BigInteger.fromHex("07192B95FFC8DA78631011ED6B24CDD573F977A11E794811");

const b3 = b1.multiply(b2);

console.log(b3.toHex());
// => ae499bfe762edfb416d0ce71447af67ff33d1760cbebd70874be1d7a5564b0439a59808cb1856a91974f7023f72132

const b4 = BigInteger.valueOf(42);
const b5 = BigInteger.valueOf(10);
const b6 = b4.multiply(b5);

console.log(b6);
// => BigInteger { '0': 420, '1': 0, t: 1, s: 0 }

console.log(b1.compareTo(b2));
// => 70
