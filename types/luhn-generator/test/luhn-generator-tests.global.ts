luhn.checksum(1); // $ExpectType number
luhn.generate(1); // $ExpectType number
luhn.generate(1, { pad: 5 }); // $ExpectType number
luhn.random(50); // $ExpectType number
luhn.random(12, { pad: 50 }); // $ExpectType number
luhn.validate(1); // $ExpectType boolean
