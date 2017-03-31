import BigInteger = require('bigi');

const b1 = BigInteger.fromHex("188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012");
const b2 = BigInteger.fromHex("07192B95FFC8DA78631011ED6B24CDD573F977A11E794811");

const b3 = b1.multiply(b2);

console.log(b3.toHex());
// => ae499bfe762edfb416d0ce71447af67ff33d1760cbebd70874be1d7a5564b0439a59808cb1856a91974f7023f72132
