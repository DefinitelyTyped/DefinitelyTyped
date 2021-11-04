import luhn = require('luhn-generator/dist/luhn');
import { checksum, generate, random, validate, InputOptions } from 'luhn-generator/dist/luhn';
import luhnCJS = require('luhn-generator');
import {
    checksum as checksumCJS,
    generate as generateCJS,
    random as randomCJS,
    validate as validateCJS,
    InputOptions as InputOptionsCJS,
} from 'luhn-generator';

luhn.checksum(1); // $ExpectType number
checksum(1); // $ExpectType number
luhn.generate(1); // $ExpectType number
generate(1); // $ExpectType number
luhn.generate(1, { pad: 5 }); // $ExpectType number
generate(1, { pad: 5 }); // $ExpectType number
luhn.random(50); // $ExpectType number
random(50); // $ExpectType number
luhn.random(12, { pad: 50 }); // $ExpectType number
random(12, { pad: 50 }); // $ExpectType number
luhn.validate(1); // $ExpectType boolean
validate(1); // $ExpectType boolean

const options: InputOptions = {};
