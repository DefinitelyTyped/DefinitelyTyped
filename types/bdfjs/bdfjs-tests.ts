import { parse, draw, trim, Font, Bitmap } from "bdfjs";

parse(); // $ExpectError
parse(123); // $ExpectError
parse('abc'); // $ExpectType Font
parse('abc', { allprops: true, onlymeta: true }); // $ExpectType Font
const font: Font = parse(Buffer.from([1, 2, 3]));

draw(); // $ExpectError
draw(123); // $ExpectError
draw(font); // $ExpectError
draw(font, 123); // $ExpectError
draw(font, 'abc', { kerningBias: 123 }); // $ExpectType Bitmap | undefined
const bitmap: Bitmap = draw(font, 'abc')!;

trim(); // $ExpectError
trim(123); // $ExpectError
trim(bitmap); // $ExpectType Bitmap
