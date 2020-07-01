import * as yeast from 'yeast';

yeast.encode(123); // $ExpectType string
yeast.decode('abc'); // $ExpectType number
yeast(); // $ExpectType string
