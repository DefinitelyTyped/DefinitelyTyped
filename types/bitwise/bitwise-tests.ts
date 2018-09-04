// Demonstrating cherry-picking
import bitwise from 'bitwise';

import bits from 'bitwise/bits';
import toBoolean from 'bitwise/bits/to-boolean';

import buffer from 'bitwise/buffer';
import create from 'bitwise/buffer/create';

import byte from 'bitwise/byte';
import read from 'bitwise/byte/read';

import integer from 'bitwise/integer';
import setBit from 'bitwise/integer/set-bit';

import nibble from 'bitwise/nibble';
import nibbleRead from 'bitwise/nibble/read';

import string from 'bitwise/string';
import toBits from 'bitwise/string/to-bits';

// Testing basic functions
const testBits = [0, 1, 1, 0, 1];

// $ExpectType string
bitwise.bits.toString(testBits);

// $ExpectType ReadonlyArray<boolean>
bits.toBoolean(testBits);
// $ExpectType ReadonlyArray<boolean>
toBoolean(testBits);

// $ExpectType ReadonlyArray<number>
byte.read(12);
// $ExpectType ReadonlyArray<number>
read(12);

// $ExpectType Buffer
buffer.create(testBits);
// $ExpectType Buffer
create(testBits);

// $ExpectType ReadonlyArray<number>
integer.setBit(12, 1, 0);
// $ExpectType ReadonlyArray<number>
setBit(12, 1, 0);

// $ExpectType ReadonlyArray<number>
nibble.read(15);
// $ExpectType ReadonlyArray<number>
nibbleRead(15);

// $ExpectType ReadonlyArray<number>
string.toBits('10 10 12$%_.0');
// $ExpectType ReadonlyArray<number>
toBits('10 10 12$%_.0');
