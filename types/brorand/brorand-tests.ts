import brorand = require('brorand');

{
	let result: Buffer|Uint8Array = brorand(42);
}

{
	let Rand = new brorand.Rand({getByte: () => 255});
	let rand: {getByte: () => number} = Rand.rand;
	let result: Buffer|Uint8Array = Rand.generate(42);
}
